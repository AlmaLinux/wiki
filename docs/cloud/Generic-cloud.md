---
title: 'Generic Cloud (cloud-init)'
---
# AlmaLinux OS Generic Cloud (cloud-init) image

The Generic Cloud image is a general purpose virtual machine image that
contains the [cloud-init](https://cloud-init.io/) package. During boot,
cloud-init will take configuration options from cloud metadata and
initialize a system accordingly. This may include network
configuration, user's SSH key pair installation, attaching storage devices, etc.


## Download and verification

The AlmaLinux OS Generic Cloud image is available from our
[mirrors](https://mirrors.almalinux.org/) and from the main AlmaLinux OS
repository [repo.almalinux.org/almalinux/8/cloud/x86_64/images/](https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/)
(an aarch64 version is coming soon).


### Import the AlmaLinux OS PGP public key

In order to verify a downloaded image you need to import the AlmaLinux OS PGP
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

Next you need to import the key:

```
$ gpg --import RPM-GPG-KEY-AlmaLinux
gpg: key 488FCF7C3ABB34F8: public key "AlmaLinux <packager@almalinux.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```


### Download and verify the image

Download checksum file and its signature first:

```
$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM -o CHECKSUM
$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM.asc -o CHECKSUM.asc
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
$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/AlmaLinux-8-GenericCloud-latest.x86_64.qcow2 \
       -o AlmaLinux-8-GenericCloud-latest.x86_64.qcow2
```

and verify its checksum:

```
$ sha256sum -c CHECKSUM 2>&1 | grep OK
AlmaLinux-8-GenericCloud-latest.x86_64.qcow2: OK
```

If the output is different, you should download the image again. Trying another
mirror may be a good idea.
