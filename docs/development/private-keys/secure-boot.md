# Secure Boot Key Generation and Handling

## Owernship

Certificate and key generation and handling is overseen by ALESCo.

## Key Generation

This is a slow and tedious process. It is important that no corners are cut and the utmost care is taken validating security through every step of the process.

### Prepare a Secure Environment

Download latest AlmaLinux live ISO from `https://repo.almalinux.org/`. Using default Gnome mini for this guide as to not have any 3rd-party binaries present (EPEL).

In the folder where you download the ISO, look at the `CHECKSUM` and `CHECKSUM.asc` files. First let's verify that it is properly signed and that its contents can be authenticated.

```bash
wget https://repo.almalinux.org/almalinux/9/live/x86_64/CHECKSUM
wget https://repo.almalinux.org/almalinux/9/live/x86_64/CHECKSUM.asc
wget https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9
gpg --import RPM-GPG-KEY-AlmaLinux-9
gpg --verify CHECKSUM.asc CHECKSUM
```

Now verify the downloaded ISO's sha256 checksum against that contained in the `CHECKSUM` file.

Copy the ISO file to a flash drive.

`dd if=almalinux.iso of=/dev/sdX`

Boot the image. Connect to the internet temporarily to run a single command:

```bash
sudo dnf -y install epel-release words
sudo dnf -y install pesign yubikey-manager yubico-piv-tool
```

#### Download GPG Public Keys of Recipients

If you are doing key exports as part of this, grab the public keys of all recipients.

These keys are accurate at the time of this writing. Verify them prior to use, of course.

```bash
curl <key> | gpg --import
```

**Disconnect from the internet and do not connect again. Everything from here on out has to be done fully air-gapped and the generated private keys can never be connected to a machine with network access.**

### Generate Keys and Certificates

1.  First, create temporary directory and initialize NSS DB inside. Don't set password because of pesign bug.

    ```bash
    mkdir -m 0700 -p ~/almalinux-uefi-certs/ca
    certutil -d ~/almalinux-uefi-certs/ca -N
    ```

2.  Generate a 10 years CA certificate. More than 10 years cert is not allowed for shim:

    ```bash
    efikeygen -d ~/almalinux-uefi-certs/ca \
      --ca --self-sign --not-valid-after=$(date +%s --date='+10 years') \
      --nickname='AlmaLinux Secure Boot CA' \
      --common-name='CN=AlmaLinux Secure Boot CA,O=AlmaLinux OS Foundation,E=security@almalinux.org'
    ```

3.  Generate a 10 years Signing certificate. More than 10 years cert is not allowed for shim:

    ```bash
    efikeygen -d ~/almalinux-uefi-certs/ca \
      --kernel --not-valid-after=$(date +%s --date='+10 years') --signer='AlmaLinux Secure Boot CA' \
      --nickname='AlmaLinux Secure Boot Signing' \
      --common-name='CN=AlmaLinux Secure Boot Signing,O=AlmaLinux OS Foundation,E=security@almalinux.com'
    ```

4.  Export CA and Signing public and private keys to PKCS#12 files. At this point set a password, and we will store it in Vaultwarden with key holders having access:

    ```bash
    pk12util -d ~/almalinux-uefi-certs/ca -o almalinux-secureboot-ca.p12 -n 'AlmaLinux Secure Boot CA'
    pk12util -d ~/almalinux-uefi-certs/ca -o almalinux-secureboot-signing.p12 -n 'AlmaLinux Secure Boot Signing'
    ```

    - **almalinux-secureboot-ca.p12** file is CA keypair that should be stored. It will be required to issue new Signing keys
    - **almalinux-secureboot-signing.p12** file is Signing keypair that should be imported to signing node to perform actual binaries signing

5.  Export CA and Signing public keys to DER files. No password required:

    ```bash
    certutil -d ~/almalinux-uefi-certs/ca -L -n "AlmaLinux Secure Boot CA" -r > almalinux-secureboot-ca.cer
    certutil -d ~/almalinux-uefi-certs/ca -L -n "AlmaLinux Secure Boot Signing" -r > almalinux-secureboot.cer
    ```

    - **almalinux-secureboot-ca.cer** file is the CA public key we should include into shim. It also should be imported to signing node to perform actual binaries signing.
    - **almalinux-secureboot.cer** is Signing public key that may be recommended to include into some RPM packages (but not necessary)

### Configure Yubikey PIV

```bash
# does the system see the key
ykman piv info
```

Generate PIV Pins (only if new yubikey)

```bash
PIVPIN=$(awk '/^\w{6,8}$/' /usr/share/dict/words | shuf -n1)
PIVPUK=$(openssl rand -base64 10 | tr -d +/= | cut -c 1-8)
echo "PIV PIN: $PIVPIN; PIV PUK: $PIVPUK"
```

**Make sure to securely store the PIN and PUK. They are specific to the PIV component of the Yubikey.**

Increase PIN/PUK retry limit (only if new yubikey)

```bash
ykman piv access set-retries 9 9 --pin 123456 --force
```

Set our new pins (only if new yubikey)

```bash
ykman piv access change-pin --pin 123456 --new-pin $PIVPIN
ykman piv access change-puk --puk 12345678 --new-puk $PIVPUK
```

Set a non-default management key (only if new yubikey)

```bash
ykman piv access change-management-key --algorithm aes128 --protect --pin $PIVPIN
```

Import keys to Yubikey PIV slots (pay attention to slot number, 82 in this example, if not a new yubikey)

```bash
ykman piv keys import --pin-policy always --touch-policy never --pin $PIVPIN 82 almalinux-secureboot-signing.p12
```

Import certificate to Yubikey PIV slots (pay attention to slot number, 82 in this example, if not a new yubikey)

```bash
ykman piv certificates import --pin $PIVPIN --verify 82 almalinux-secureboot.cer
```

### Copy Keys and Certificates

DO NOT DO NOT DO NOT connect to the internet to copy the files.

#### Public Certificates

Copy the .cer (public) files to a blank flash drive. This drive can then be connected to a machine with networking and distributed as necessary - there is nothing secret about them.

#### Private Keys

Encrypt the private keys using GPG. The GPG-encrypted files are the only ones that can be distributed to key holders via offline methods. It's recommended that they keys remain encrypted at rest.

```bash
gpg -r <recipient-gpg-email> -r <recipient-gpg-email> -e almalinux-secureboot-ca.p12
gpg -r <recipient-gpg-email> -r <recipient-gpg-email> -e almalinux-secureboot-signing.p12
```

Copy the .p12 (private) keys and GPG-encrypted versions to a blank flash drive. The drive must never be connected to a networked or untrusted system. It should only ever be connected to an air-gapped blank OS install.

## Removal of Custodianship

We need to define how we handle if a keyholder leaves AlmaLinux.

## Distribution of Keys to Key Holders

Keys will be distributed to key holders only via physical medium - never via the internet. Our SOP is for the key generator to encrypt the keys with GPG and place them on a hardware-encrypted (FIPS-140 certified), self-destructing (if brute force or disassembly are attempted) USB key. These may then be mailed to the key holder or delivered in person at, for example, a conference.

The unlock code for the flash drive will be provided by the key generator to the key holder upon their recipient of the flash drive, and confirmation of that receipt via a GPG-signed email.

The hardware unlock code may be provided via the internet using encrypted means - either AlmaLinux's internal password manager (Vaultwarden) or GPG-encrypted email.

## Storage of Keys by Key Holders

Keys should be stored offline and encrypted at rest via GPG and the hardware encryption of the flash drive. It should be stored in a fire resistant lock box/safe or bank safety deposit box.

## Key Generation Log

### Shim 15.8

Secure boot keys generated on 2024-03-13 using policy dated 2024-03-13. These keys and certs will go into use in late 2024 and are valid through 2034.

- https://github.com/rhboot/shim-review/issues/407
- https://github.com/rhboot/shim-review/issues/432

## Changelog

### 2025-01-13

Add Yubikey PIV certificate (public) programming instructions

### 2024-07-03

Add Yubikey PIV programming instructions

### 2024-03-13

Initial ratification
