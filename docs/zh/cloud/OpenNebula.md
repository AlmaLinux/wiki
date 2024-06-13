---
title: 'OpenNebula'
---
# AlmaLinux OS OpenNebula image

The OpenNebula image contains the OpenNebula addons repository as delivered via the AlmaLinux [Cloud SIG](https://wiki.almalinux.org/sigs/Cloud.html). The repo provides the latest upstream version of the OpenNebula Linux VM Contextualization to prepare the networking in the running guest virtual machine, configure SSH keys, set passwords, run custom start scripts, `onesysprep`, etc.

## Download images

The AlmaLinux OS OpenNebula image is available from our
[mirrors](https://mirrors.almalinux.org/) and from the main AlmaLinux OS repositories:

<table align="center">
    <tr>
        <td align="center">AlmaLinux 8</td>
        <td align="center"><a href="https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/">x86_64</a></td>
        <td align="center"><a href="https://repo.almalinux.org/almalinux/8/cloud/aarch64/images">aarch64</a></td>
    </tr>
    <tr>
        <td align="center">AlmaLinux 9</td>
        <td align="center"><a href="https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/">x86_64</a></td>
        <td align="center"><a href="https://repo.almalinux.org/almalinux/9/cloud/aarch64/images/">aarch64</a></td>
    </tr>
</table>

## Verify AlmaLinux 8 images

### Import the AlmaLinux OS PGP public key

In order to verify a downloaded image, you need to import the AlmaLinux OS PGP
public key first.

:::tip
If you are using an AlmaLinux OS-powered system, you may skip the command
below because you already have the key stored in the `/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux` file.
Run the following command instead to import the key:
```shell
gpg --import /etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux
```
:::

```shell
$ curl -O -s https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux
```

Print the key fingerprint:

```shell
$ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux
gpg: WARNING: no command supplied.  Trying to guess what you mean ...
pub   rsa4096 2021-01-12 [C] [expires: 2024-01-12]
      5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8
uid           AlmaLinux <packager@almalinux.org>
sub   rsa3072 2021-01-12 [S] [expires: 2024-01-12]
```

The fingerprint is `5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8`. If you see a
different fingerprint, it means you downloaded a compromised file. Please,
[let us know](mailto:security@almalinux.org) a mirror from which you
downloaded the file, remove the file and retry the download from another
mirror.

Next you need to import the key:

```shell
$ gpg --import RPM-GPG-KEY-AlmaLinux
gpg: key 488FCF7C3ABB34F8: public key "AlmaLinux <packager@almalinux.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

### Download and verify the image

Download checksum file and its signature first:

```shell
$ curl -O -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM
$ curl -O -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM.asc
```

Verify the checksum file signature:

```shell
$ gpg --verify CHECKSUM.asc CHECKSUM
gpg: Signature made Sat 12 Nov 00:13:38 CET
gpg:                using RSA key E53CF5EF91CEB0AD1812ECB851D6647EC21AD6EA
gpg: Good signature from "AlmaLinux <packager@almalinux.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8
     Subkey fingerprint: E53C F5EF 91CE B0AD 1812  ECB8 51D6 647E C21A D6EA
```

Make sure that you see the `Good signature from "AlmaLinux <packager@almalinux.org>"`
message in the output.

Download the latest image version:

```shell
$ curl -O -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/AlmaLinux-8-OpenNebula-latest.x86_64.qcow2
```

and verify its checksum:

```shell
$ sha256sum -c CHECKSUM 2>&1 | grep OK
AlmaLinux-8-OpenNebula-latest.x86_64.qcow2: OK
```

If the output is different, you should download the image again. Trying another
mirror may be a good idea.

## Verify AlmaLinux 9 images

### Import the AlmaLinux OS PGP public key

In order to verify a downloaded image you need to import the AlmaLinux OS PGP
public key first.

:::tip
If you are using an AlmaLinux OS-powered system, you may skip the command
below because you already have the key stored in the `/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9` file.
Run the following command instead to import the key:
```shell
gpg --import /etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9
```
:::

```shell
$ curl -O -s https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9
```

Print the key fingerprint:

```shell
$ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux-9
pub   rsa4096 2022-01-18 [SC]
      BF18AC2876178908D6E71267D36CB86CB86B3716
uid           AlmaLinux OS 9 <packager@almalinux.org>
sub   rsa4096 2022-01-18 [E]
```

The fingerprint is `BF18AC2876178908D6E71267D36CB86CB86B3716`. If you see a
different fingerprint, it means you downloaded a compromised file. Please,
[let us know](mailto:security@almalinux.org) a mirror from which you
downloaded the file, remove the file and retry the download from another
mirror.

Next you need to import the key:

```shell
$ gpg --import RPM-GPG-KEY-AlmaLinux-9
gpg: key D36CB86CB86B3716: public key "AlmaLinux <packager@almalinux.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

### Download and verify the AlmaLinux 9 image

Download checksum file and its signature first:

```shell
$ curl -O -s https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/CHECKSUM
$ curl -O -s https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/CHECKSUM.asc
```

Verify the checksum file signature:

```shell
$ gpg --verify CHECKSUM.asc CHECKSUM
gpg: Signature made Fri 18 Nov 2022 04:19:01 AM CET
gpg:                using RSA key BF18AC2876178908D6E71267D36CB86CB86B3716
gpg: Good signature from "AlmaLinux OS 9 <packager@almalinux.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: BF18 AC28 7617 8908 D6E7  1267 D36C B86C B86B 3716
```

Make sure that you see the `Good signature from "AlmaLinux <packager@almalinux.org>"`
message in the output.

Download the latest image version:

```shell
$ curl -O -s https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/AlmaLinux-9-OpenNebula-latest.x86_64.qcow2
```

and verify its checksum:

```shell
$ sha256sum -c CHECKSUM 2>&1 | grep OK
AlmaLinux-9-OpenNebula-latest.x86_64.qcow2: OK
```

If the output is different, you should download the image again. Trying another
mirror may be a good idea.
