---
title: 'OpenNebula'
permalink: /cloud/OpenNebula
---
# AlmaLinux OS OpenNebula image

The OpenNebula image contains the OpenNebula addons repository as delivered via the AlmaLinux [Cloud SIG](https://wiki.almalinux.org/sigs/Cloud.html). The repo provides the latest upstream version of the OpenNebula Linux VM Contextualization to prepare the networking in the running guest virtual machine, configure SSH keys, set passwords, run custom start scripts, `onesysprep`, etc.

## Download and verification

The AlmaLinux OS OpenNebula image is available from our
[mirrors](https://mirrors.almalinux.org/) and from the main AlmaLinux OS repositories:

[x86_64](https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/)

[arm64/aarch64](https://repo.almalinux.org/almalinux/8/cloud/aarch64/images)

### Import the AlmaLinux OS PGP public key

In order to verify a downloaded image, you need to import the AlmaLinux OS PGP
public key first.

If you are using an AlmaLinux OS-powered system, you may skip the command
below because you already have the key stored in the
`/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux` file. Otherwise, download the key:


```
$ curl -s https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux -o RPM-GPG-KEY-AlmaLinux
```

Print the key fingerprint:

```
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

Next, you need to import the key:

```
$ gpg --import RPM-GPG-KEY-AlmaLinux
gpg: key 488FCF7C3ABB34F8: public key "AlmaLinux <packager@almalinux.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```


### Download and verify the image

Download checksum file and its signature first:

```
$ curl -s https://repo.almalinux.org/almalinux/8/cloud/$ARCH/images/CHECKSUM -o CHECKSUM
$ curl -s https://repo.almalinux.org/almalinux/8/cloud/$ARCH/images/CHECKSUM.asc -o CHECKSUM.asc
```

Verify the checksum file signature:

```
$ gpg --verify CHECKSUM.asc CHECKSUM
gpg: Signature made Thu 17 Jun 2021 10:50:03 AM UTC
gpg:                using RSA key 51D6647EC21AD6EA
gpg: Good signature from "AlmaLinux <packager@almalinux.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8
     Subkey fingerprint: E53C F5EF 91CE B0AD 1812  ECB8 51D6 647E C21A D6EA
```

Make sure that you see the `Good signature from "AlmaLinux <packager@almalinux.org>"`
message in the output.

Download the latest image version:

```
$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/AlmaLinux-8-OpenNebula-latest.$ARCH.qcow2 \
       -o AlmaLinux-8-OpenNebula-latest.$ARCH.qcow2
```

and verify its checksum:

```
$ sha256sum -c CHECKSUM 2>&1 | grep OK
AlmaLinux-8-OpenNebula-latest.$ARCH.qcow2: OK
```

If the output is different, you should download the image again. Trying another
mirror may be a good idea.
