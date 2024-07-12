# Package Signing Key Generation and Handling

Last updated 2024-07-10.

## Owernship
Certificate and key generation and handling is overseen by ALESCo.

## Key Generation

This is a slow and tedious process.  It is important that no corners are cut and the utmost care is taken validating security through every step of the process.

### Prepare a Secure Environment

Download latest AlmaLinux live ISO from `https://repo.almalinux.org/`.  Using default Gnome mini for this guide as to not have any 3rd-party binaries present (EPEL).

In the folder where you download the ISO, look at the `CHECKSUM` and `CHECKSUM.asc` files.  First let's verify that it is properly signed and that its contents can be authenticated.

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

Boot the image.  Connect to the internet temporarily to run a single command:

```bash
sudo dnf install pcsc-lite
```

#### Download GPG Public Keys of Recipients
If you are doing key exports as part of this, grab the public keys of all recipients.

These keys are accurate at the time of this writing.  Verify them prior to use, of course.
```bash
curl <key> | gpg --import
```

It may also be helpful to open a copy of this guide in the browser before disconnecting from the internet.

**Disconnect from the internet and do not connect again.  Everything from here on out has to be done fully air-gapped and the generated private keys can never be connected to a machine with network access.**

### Generate Keys and Certificates

1.  Prepare GPG Environment:
    ```bash
    mkdir ~/.gnupg/
    cat << 'EOF' > ~/.gnupg/gpg.conf
    personal-cipher-preferences AES256 AES192 AES
    personal-digest-preferences SHA512 SHA384 SHA256
    personal-compress-preferences ZLIB BZIP2 ZIP Uncompressed
    default-preference-list SHA512 SHA384 SHA256 AES256 AES192 AES ZLIB BZIP2 ZIP Uncompressed
    cert-digest-algo SHA512
    s2k-digest-algo SHA512
    s2k-cipher-algo AES256
    charset utf-8
    no-comments
    no-emit-version
    no-greeting
    keyid-format 0xlong
    list-options show-uid-validity
    verify-options show-uid-validity
    with-fingerprint
    require-cross-certification
    no-symkey-cache
    armor
    use-agent
    throw-keyids
    EOF
    ```

2.  Generate the key:

    ```bash
    export IDENTITY="AlmaLinux OS 10 <packager@almalinux.org>"
    export KEY_TYPE=rsa4096
    CERTIFY_PASS=$(LC_ALL=C tr -dc 'A-Z1-9' < /dev/urandom | \
    tr -d "1IOS5U" | fold -w 30 | sed "-es/./ /"{1..26..5} | \
    cut -c2- | tr " " "-" | head -1) ; echo "$CERTIFY_PASS"
    gpg --batch --passphrase "$CERTIFY_PASS" --quick-generate-key "$IDENTITY" "$KEY_TYPE" sign never
    KEYID=$(gpg -k --with-colons "$IDENTITY" | awk -F: '/^pub:/ { print $5; exit }')
    KEYFP=$(gpg -k --with-colons "$IDENTITY" | awk -F: '/^fpr:/ { print $10; exit }')
    printf "\nKey ID: %40s\nKey FP: %40s\n\n" "$KEYID" "$KEYFP"
    ```

    **Make sure to securely store the passphrase in Vaultwarden.**

3.  Export Public and Private Keys

    ```bash
    gpg --armor --export $KEYID > almalinux10.asc
    gpg --batch --armor --passphrase "$CERTIFY_PASS" --pinentry-mode=loopback --export-secret-keys $KEYID > almalinux10-privkey.asc
    ```

4.  Configure (new) Yubikey
    
    Generate Pins
    ```bash
    # generate pins
    ADMIN_PIN=$(LC_ALL=C tr -dc '0-9' < /dev/urandom | fold -w8 | head -1)
    USER_PIN=$(LC_ALL=C tr -dc '0-9' < /dev/urandom | fold -w6 | head -1)
    printf "\nAdmin PIN: %12s\nUser PIN: %13s\n\n" "$ADMIN_PIN" "$USER_PIN"
    ```

    **Make sure to securely store the admin and user pins in Vaultwarden.**

    Set pins
    ```bash
    # set admin pin
    gpg --command-fd=0 --pinentry-mode=loopback --change-pin <<EOF
    3
    12345678
    $ADMIN_PIN
    $ADMIN_PIN
    q
    EOF
    # set user pin
    gpg --command-fd=0 --pinentry-mode=loopback --change-pin <<EOF
    1
    123456
    $USER_PIN
    $USER_PIN
    q
    EOF
    ```

    Set basic info on the Yubikey
    ```bash
    gpg --command-fd=0 --pinentry-mode=loopback --edit-card <<EOF
    admin
    login
    $IDENTITY
    $ADMIN_PIN
    forcesig
    url
    https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-10
    quit
    EOF
    ```

5.  Copy private key to Yubikey.  This is a destructive proces so we need to make a backup of the private keys before we proceed and use that to write to the Yubikey.  If we're only writing to a single Yubikey the backup is not necessary as we have already exported the key into armored format which will not be impacted.
    ```bash
    cp -r ~/.gnupg ~/.gnupg.keytocard
    GNUPGHOME=~/.gnupg.keytocard gpg --command-fd=0 --pinentry-mode=loopback --edit-key $KEYID <<EOF
    keytocard
    y
    1
    $CERTIFY_PASS
    $ADMIN_PIN
    save
    EOF
    ```

### Copy Keys and Certificates

DO NOT DO NOT DO NOT connect to the internet to copy the files.

#### Public Certificates
Copy the public key (`almalinux10.asc` if copy/pasting commands from this guide) to a flash drive.  This drive can then be connected to a machine with networking and distributed as necessary - there is nothing secret about them.

#### Private Keys
Encrypt the private keys using GPG.  The GPG-encrypted files are the only ones that can be distributed to key holders via offline methods.  It's recommended that they keys remain encrypted at rest.

```bash
gpg -r <recipient-gpg-email> -r <recipient-gpg-email> -e almalinux10-privkey.asc
```

Copy the .asc (public/private) keys and GPG-encrypted version of the private key to a blank flash drive.  The drive must never be connected to a networked or untrusted system.  It should only ever be connected to an air-gapped blank OS install.

## Removal of Custodianship
We need to define how we handle if a keyholder leaves AlmaLinux.

## Distribution of Keys to Key Holders
Keys will be distributed to key holders only via physical medium - never via the internet.  Our SOP is for the key generator to encrypt the keys with GPG and place them on a hardware-encrypted (FIPS-140 certified), self-destructing (if brute force or disassembly are attempted) USB key.  These may then be mailed to the key holder or delivered in person at, for example, a conference.

The unlock code for the flash drive will be provided by the key generator to the key holder upon their recipient of the flash drive, and confirmation of that receipt via a GPG-signed email.

The hardware unlock code may be provided via the internet using encrypted means - either AlmaLinux's internal password manager (Vaultwarden) or GPG-encrypted email.

## Storage of Keys by Key Holders
Keys should be stored offline and encrypted at rest via GPG and the hardware encryption of the flash drive.  It should be stored in a fire resistant lock box/safe or bank safety deposit box.

## Key Generation Log
### AlmaLinux 10
Package signing keys generated on 2024-07-10 using policy dated 2024-07-03.  These keys and certs will be used for package signing in AlmaLinux 10, including testing/beta builds.

## Changelog
### 2024-07-03
Initial ratification
