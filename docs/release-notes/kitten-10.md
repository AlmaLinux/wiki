---
title: 'Kitten 10'
---

###### last updated: 2024-10-22

# AlmaLinux OS Kitten 10 Release Notes

These are the release notes for AlmaLinux OS Kitten 10 for all supported architectures:
* x86_64
* x86_64_v2
* aarch64
* ppc64le
* s390x 

Codename: Lion Cub.

Distributed kernel version: 6.11.0-25.el10

:::warning
This release should not be used for production installations.
:::

<img src=/images/kitten10-screenshot.png width="75%" height="75%">

## Providing Feedback and Getting Help

Please report any issues you may encounter during tests on the [AlmaLinux Bug Tracker](https://bugs.almalinux.org/). Additionally, if you feel like providing feedback, talking about anything or asking any questions you might want to check out [The AlmaLinux Community Chat](https://chat.almalinux.org), [The AlmaLinux Forums](https://forums.almalinux.org/) and [The AlmaLinux Community on Reddit](https://reddit.com/r/almalinux).

## Changelog

* AlmaLinux OS Kitten 10 packages and repositories are signed with [the new GPG key](https://kitten.repo.almalinux.org/RPM-GPG-KEY-AlmaLinux-10).
* Starting with AlmaLinux OS Kitten 10 version a new architecture was added - x86_64_v2.
* Starting with AlmaLinux OS Kitten 10 version there are no longer 32-bit (i686 architecture) packages.
* AlmaLinux OS Kitten 10 has its own primary mirror URLs:
    * [kitten.repo.almalinux.org](https://kitten.repo.almalinux.org)
    * [kitten.vault.almalinux.org](https://kitten.vault.almalinux.org)
* AlmaLinux OS Kitten 10 ISOs will be renewed and released with the latest updates quarterly.
* Re-enabled Frame Pointers.<br>
  Red Hat Enterprise Linux and CentOS Stream disable frame pointers by default, but with AlmaLinux OS Kitten 10, we are re-enabling them. This enables system-wide real-time tracing and profiling for optimizing the performance of any workload running on AlmaLinux OS.
* SPICE support.<br>
  Simple Protocol for Independent Computing Environments (SPICE) has been unsupported since RHEL 9.0. We added support back in, so SPICE support is fully re-enabled for both server and client applications.
* KVM for IBM POWER.<br>
  KVM for IBM POWER has also been unsupported since RHEL 9.0. We enable it in the AlmaLinux OS Kitten 10 virtualization stack, so it’s possible to continue using KVM.

* Compilers and Programming Languages:
    * GCC 14.2
    * Rust 1.79
    * Perl 5.40
    * PHP 8.3

* Build and Development Tools:
    * CMake 3.28
    * Bash 5.2
    * LLVM-toolset 18.1

* System Libraries and Core Components:
    * glibc 2.39
    * binutils 2.41

* Installation and Configuration:
    * Anaconda 40.22
    * Systemd 256
    * Crypto-policies 20240828
    * SELinux-policy 40.13

* Web Servers and Application Servers:
    * Apache HTTP Server 2.4.62
    * Nginx 1.26

* Databases and Caching:
    * MySQL 8.4
    * Redis 7.2

* Monitoring and Analytics:
    * Grafana 10.2
    * PCP 6.3

* Networking and Routing:
    * FRR 10.1

* Virtualization and Kernel:
    * QEMU-KVM 9.1
    * Kernel 6.11
    * Kexec-tools 2.0.29

* Security Tools:
    * OpenSCAP 1.4
    * OpenSSH 9.9

* Package Management:
    * DNF 4.20
    * RPM 4.19

* Graphical User Interface:
    * Qt6 6.7

## Installation instructions

There are three installation ISO images available:

`AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso` - a single network installation CD image that downloads packages over the Internet.

`AlmaLinux-Kitten-10-20241018.0-x86_64-minimal.iso` - a minimal self-containing DVD image that makes possible offline installation.

`AlmaLinux-Kitten-10-20241018.0-x86_64-dvd.iso` - a full installation DVD image that contains mostly all AlmaLinux OS packages.

Download a suitable ISO image from the 10-kitten/isos/$arch/ directory, for example:

```bash
$ wget https://kitten.repo.almalinux.org/10-kitten/isos/x86_64/AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso
```

Download and import the AlmaLinux OS public key:

```bash
$ wget https://kitten.repo.almalinux.org/RPM-GPG-KEY-AlmaLinux-10
$ gpg --import RPM-GPG-KEY-AlmaLinux
```

Download and verify a checksums list:

```bash
$ wget https://kitten.repo.almalinux.org/10-kitten/isos/x86_64/CHECKSUM

# we are looking for “Good signature”
$ gpg --verify CHECKSUM
gpg: Signature made Fri 18 Oct 2024 04:28:17 AM EDT
gpg:                using RSA key EE6DB7B98F5BF5EDD9DA0DE5DEE5C11CC2A1E572
gpg: Good signature from "AlmaLinux OS 10 <packager@almalinux.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: EE6D B7B9 8F5B F5ED D9DA  0DE5 DEE5 C11C C2A1 E572
```

Verify the downloaded ISO image checksum:

```bash
# calculate the downloaded ISO SHA256 checksum
$ sha256sum AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso 
cd6e303213ca8b4d5f02cf011dcc78a34c5c4031f3bdfeb153f0ab22c101a9f4  AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso

# compare it with expected checksum, it should be the same
$ cat CHECKSUM | grep -E 'SHA256.*AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso'
SHA256 (AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso) = cd6e303213ca8b4d5f02cf011dcc78a34c5c4031f3bdfeb153f0ab22c101a9f4
```

If you decide to use the `AlmaLinux-Kitten-10-20241018.0-x86_64-boot.iso` image, you may need to provide the `https://kitten.repo.almalinux.org/10-kitten/BaseOS/x86_64/kickstart/` URL repository from the selected mirror as the Installation Source in the event that the installer is not able to find the closest mirror for some reason.

There are no extra Installation Sources required if you decided to go with either the minimal or DVD ISO images.

## Additional packages

Here is a list of packages that are AlmaLinux OS-specific, and will not be found in compatible versions of CentOS Stream.

| Package | Description |
| --- | --- |
| almalinux-backgrounds | AlmaLinux OS background images.<br/>Replaces `redhat-backgrounds` |
| almalinux-indexhtml | AlmaLinux OS default browser page<br/>Replaces `redhat-indexhtml` |
| almalinux-logos | AlmaLinux OS graphics for OS<br/>Replaces `redhat-logos` |
| almalinux-logos-httpd | AlmaLinux OS graphics for HTTPD server<br/>Replaces `redhat-logos-httpd` |
| almalinux-logos-ipa | AlmaLinux OS graphics for IPA server<br/>Replaces `redhat-logos-ipa` |
| almalinux-kitten-release | AlmaLinux OS release package, repos, and EULA<br/>Replaces `redhat-release` and `redhat-release-eula` |
| firefox | Open-source web browser developed by Mozilla|
| thunderbird | Open-source email client developed by Mozilla |

## Removed packages

Here is a list of packages you will not find in AlmaLinux when comparing with the compatible version of CentOS Stream.

AlmaLinux OS is a community distribution so all changes are subject to discussion. If you would like to do so, please join [AlmaLinux Chat](https://chat.almalinux.org/almalinux/channels/engineeringpackaging) as well as filing a bug report at [AlmaLinux Bug Tracker](https://bugs.almalinux.org) to discuss if you think any of the packages below should be included into the repos.

| Package | Description |
| --- | --- |
| centos-indexhtml | CentOS Stream specific default browser page | 
| centos-backgrounds | CentOS Stream specific background images | 
| centos-logos | CentOS Stream specific graphics for OS|
| centos-logos-httpd | CentOS Stream specific graphics for HTTPD server|
| centos-logos-ipa | CentOS Stream graphics for IPA server |
| insights-client | CentOS Stream specific package to connect to upstream vendor resource |
| insights-client-ros | CentOS Stream specific plugin for the Insights client |
| rhc | CentOS Stream specific package to connect to upstream vendor resources |
| rhc-worker-playbook | CentOS Stream package to connect to upstream vendor resources |
| virt-who | CentOS Stream specific package to connect to upstream vendor resources |
| centos-gpg-keys | CentOS Stream specific package to provide the GPG keys |
| centos-stream-release | CentOS Stream specific release package |
| centos-stream-repos | CentOS Stream repos |
| kpatch | CentOS Stream specific live patches for kernel |
| kpatch-dnf | CentOS Stream specific kpatch tool integrated with DNF |
| rhsm-icons | CentOS Stream specific GUI for Subscription Manager |
| subscription-manager-cockpit | CentOS Stream specific Cockpit module for Subscription Manager |

## Extended hardware support

The following devices support is added in AlmaLinux OS Kitten 10 release compared with the CentOS Stream/RHEL:

| Device PCI ID | Device name | Driver name |
| --- | --- | --- |
| 0x0E11:*:*: \*:01:04  | Compaq | hpsa |
| 0x1000:0x0050 | LSI SAS1064 | mptsas |
| 0x1000:0x0054 | LSI SAS1068 | mptsas |
| 0x1000:0x0056 | LSI SAS1064E | mptsas |
| 0x1000:0x0058 | LSI SAS1068E | mptsas |
| 0x1000:0x0059 | LSI SAS1068_820XELP | mptsas |
| 0x1000:0x0060 | LSI MegaRAID SAS1078R | megaraid_sas |
| 0x1000:0x0062 | LSI SAS1078 | mptsas |
| 0x1000:0x0064 | LSI SAS2116_1 | mpt3sas |
| 0x1000:0x0065 | LSI SAS2116_2 | mpt3sas |
| 0x1000:0x0070 | LSI SAS2004 | mpt3sas |
| 0x1000:0x0072 | LSI SAS2008 | mpt3sas |
| 0x1000:0x0074 | LSI SAS2108_1 | mpt3sas |
| 0x1000:0x0076 | LSI SAS2108_2 | mpt3sas |
| 0x1000:0x0077 | LSI SAS2108_3 | mpt3sas |
| 0x1000:0x0078 | LSI MegaRAID SAS1078 Gen2 | megaraid_sas |
| 0x1000:0x007C | LSI MegaRAID SAS1078DE | megaraid_sas |
| 0x1000:0x007E | LSI SSS6200 | mpt3sas |
| 0x1000:0x0411 | LSI MegaRAID SAS1064R | megaraid_sas |
| 0x1000:0x0413 | LSI MegaRAID SAS1068 Verde ZCR | megaraid_sas |
| 0x1011:0x0046:0x103C:0x10C2 | HP NetRAID-4M | aacraid |
| 0x1011:0x0046:0x9005:0x0364 | Adaptec 5400S (Mustang) | aacraid |
| 0x1011:0x0046:0x9005:0x0365 | Adaptec 5400S (Mustang) | aacraid |
| 0x1011:0x0046:0x9005:0x1364 | Dell PERC 2/QC | aacraid |
| 0x1028:0x0001:0x1028:0x0001 | DELL PERC 2/Si (Iguana) | aacraid |
| 0x1028:0x0002:0x1028:0x0002 | DELL PERC 3/Di (Opal) | aacraid |
| 0x1028:0x0002:0x1028:0x00D1 | DELL PERC 3/Di (Viper) | aacraid |
| 0x1028:0x0002:0x1028:0x00D9 | DELL PERC 3/Di (Lexus) | aacraid |
| 0x1028:0x0003:0x1028:0x0003 | DELL PERC 3/Si (SlimFast) | aacraid |
| 0x1028:0x0004:0x1028:0x00D0 | DELL PERC 3/Di (Iguana FlipChip) | aacraid |
| 0x1028:0x000A:0x1028:0x0106 | DELL PERC 3/Di (Jaguar) | aacraid |
| 0x1028:0x000A:0x1028:0x011B | DELL PERC 3/Di (Dagger) | aacraid |
| 0x1028:0x000A:0x1028:0x0121 | DELL PERC 3/Di (Boxster) | aacraid |
| 0x1028:0x0015 | Dell PERC5 | megaraid_sas |
| 0x103C::: \*:01:04 | HP | hpsa |
| 0x1077:0x2100 | QLogic ISP2100 | qla2xxx |
| 0x1077:0x2200 | QLogic ISP2200 | qla2xxx |
| 0x1077:0x2300 | QLogic ISP2300 | qla2xxx |
| 0x1077:0x2312 | QLogic ISP2312 | qla2xxx |
| 0x1077:0x2322 | QLogic ISP2322 | qla2xxx |
| 0x1077:0x2422 | QLogic ISP2422 | qla2xxx |
| 0x1077:0x2432 | QLogic ISP2432 | qla2xxx |
| 0x1077:0x5422 | QLogic ISP5422 | qla2xxx |
| 0x1077:0x5432 | QLogic ISP5432 / QLE220 | qla2xxx |
| 0x1077:0x6312 | QLogic ISP6312 | qla2xxx |
| 0x1077:0x6322 | QLogic ISP6322 | qla2xxx |
| 0x1077:0x8001 | QLogic ISP8001 / QLE81xx | qla2xxx |
| 0x1077:0x8021 | QLogic ISP8021 / QLE82xx | qla2xxx |
| 0x1077:0x8022 | QLogic ISP8022 | qla4xxx |
| 0x1077:0x8032 | QLogic ISP8324 | qla4xxx |
| 0x1077:0x8042 | QLogic ISP8042 | qla4xxx |
| 0x1077:0x8044 | QLogic ISP8044 / QLE84xx | qla2xxx |
| 0x1077:0x8432 | QLogic ISP8432 / QLE8000 | qla2xxx |
| 0x1077:0xF001 | QLogic ISPF001 / QLE10000 | qla2xxx |
| 0x10DF:0x1AE5 | FIREFLY  | lpfc |
| 0x10DF:0xE100 | PROTEUS VF | lpfc |
| 0x10DF:0xE131 | BALIUS | lpfc |
| 0x10DF:0xE180 | PROTEUS PF | lpfc |
| 0x10DF:0xE208 | LANCER_FC_VF | lpfc |
| 0x10DF:0xE260 | Emulex OneConnect OCe15102-FM/OCe15104-FM/OCm15108-F-P | lpfc |
| 0x10DF:0xE268 | LANCER_FCOE_VF | lpfc |
| 0x10DF:0xF095 | RFLY | lpfc |
| 0x10DF:0xF098 | PFLY | lpfc |
| 0x10DF:0xF0A1 | LP101 | lpfc |
| 0x10DF:0xF0A5 | TFLY | lpfc |
| 0x10DF:0xF0D1 | BSMB | lpfc |
| 0x10DF:0xF0F5 | NEPTUNE | lpfc |
| 0x10DF:0xF0F6 | NEPTUNE SCSP | lpfc |
| 0x10DF:0xF0F7 | NEPTUNE DCSP | lpfc |
| 0x10DF:0xF700 | SUPERFLY | lpfc |
| 0x10DF:0xF800 | DRAGONFLY | lpfc |
| 0x10DF:0xF900 | CENTAUR | lpfc |
| 0x10DF:0xF980 | PEGASUS | lpfc |
| 0x10DF:0xFA00 | THOR | lpfc |
| 0x10DF:0xFB00 | VIPER | lpfc |
| 0x10DF:0xFC00 | LP10000S | lpfc |
| 0x10DF:0xFC10 | LP11000S | lpfc |
| 0x10DF:0xFC20 | LPE11000S | lpfc |
| 0x10DF:0xFC50 | PROTEUS S | lpfc |
| 0x10DF:0xFD00 | HELIOS | lpfc |
| 0x10DF:0xFD11 | HELIOS SCSP | lpfc |
| 0x10DF:0xFD12 | HELIOS DCSP | lpfc |
| 0x15B3:0x1003 | Mellanox Technologies: MT27500 Family [ConnectX-3] | mlx4_core |
| 0x15B3:0x1004 | Mellanox Technologies: MT27500 Family [ConnectX-3 Virtual Function] | mlx4_core |
| 0x15B3:0x1005 | Mellanox Technologies: MT27510 Family [ConnectX-3] | mlx4_core |
| 0x15B3:0x1007 | Mellanox Technologies: MT27520 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x1008 | Mellanox Technologies: MT27521 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x1009 | Mellanox Technologies: MT27530 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x100a | Mellanox Technologies: MT27531 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x100b | Mellanox Technologies: MT27540 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x100c | Mellanox Technologies: MT27541 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x100d | Mellanox Technologies: MT27550 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x100e | Mellanox Technologies: MT27551 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x100f | Mellanox Technologies: MT27560 Family [ConnectX-3 Pro] | mlx4_core |
| 0x15B3:0x1010 | Mellanox Technologies: MT27561 Family [ConnectX-3 Pro] | mlx4_core |
| 0x19A2:0x0212 | Emulex BladeEngine 2 10Gb iSCSI Initiator | be2iscsi |
| 0x19A2:0x0222 | Emulex BladeEngine 3 iSCSI | be2iscsi |
| 0x19A2:0x0702 | Emulex OneConnect OCe10101/OCm10101/OCe10102/OCm10102 | be2iscsi |
| 0x19A2:0x0703 | Emulex OneConnect OCe10100 | be2iscsi |
| 0x19A2:0x0704 | Emulex OneConnect Tigershark FCoE | lpfc |
| 0x19A2:0x0712 | Emulex OneConnect Tomcat iSCSI | be2iscsi |
| 0x19A2:0x0714 | Emulex OneConnect Tomcat FCoE | lpfc |
| 0x9005:0x0200:0x9005:0x0200 | Themisto Jupiter Platform | aacraid |
| 0x9005:0x0283:0x9005:0x0283 | Catapult | aacraid |
| 0x9005:0x0284:0x9005:0x0284 | Tomcat | aacraid |
| 0x9005:0x0285 | Adaptec Catch All | aacraid |
| 0x9005:0x0285:0x1014:0x02F2 | IBM 8i (AvonPark) | aacraid |
| 0x9005:0x0285:0x1014:0x0312 | IBM 8i (AvonPark Lite) | aacraid |
| 0x9005:0x0285:0x1028 | Dell Catchall | aacraid |
| 0x9005:0x0285:0x1028:0x0287 | Perc 320/DC | aacraid |
| 0x9005:0x0285:0x1028:0x0291 | CERC SATA RAID 2 PCI SATA 6ch (DellCorsair) | aacraid |
| 0x9005:0x0285:0x103C:0x3227 | AAR-2610SA PCI SATA 6ch | aacraid |
| 0x9005:0x0285:0x17AA | Legend Catchall | aacraid |
| 0x9005:0x0285:0x17AA:0x0286 | Legend S220 (Legend Crusader) | aacraid |
| 0x9005:0x0285:0x17AA:0x0287 | Legend S230 (Legend Vulcan) | aacraid |
| 0x9005:0x0285:0x9005:0x0285 | Adaptec 2200S (Vulcan) | aacraid |
| 0x9005:0x0285:0x9005:0x0286 | Adaptec 2120S (Crusader) | aacraid |
| 0x9005:0x0285:0x9005:0x0287 | Adaptec 2200S (Vulcan-2m) | aacraid |
| 0x9005:0x0285:0x9005:0x0288 | Adaptec 3230S (Harrier) | aacraid |
| 0x9005:0x0285:0x9005:0x0289 | Adaptec 3240S (Tornado) | aacraid |
| 0x9005:0x0285:0x9005:0x028A | ASR-2020ZCR SCSI PCI-X ZCR (Skyhawk) | aacraid |
| 0x9005:0x0285:0x9005:0x028B | ASR-2025ZCR SCSI SO-DIMM PCI-X ZCR (Terminator) | aacraid |
| 0x9005:0x0285:0x9005:0x028E | ASR-2020SA SATA PCI-X ZCR (Skyhawk) | aacraid |
| 0x9005:0x0285:0x9005:0x028F | ASR-2025SA SATA SO-DIMM PCI-X ZCR (Terminator) | aacraid |
| 0x9005:0x0285:0x9005:0x0290 | AAR-2410SA PCI SATA 4ch (Jaguar II) | aacraid |
| 0x9005:0x0285:0x9005:0x0292 | AAR-2810SA PCI SATA 8ch (Corsair-8) | aacraid |
| 0x9005:0x0285:0x9005:0x0293 | AAR-21610SA PCI SATA 16ch (Corsair-16) | aacraid |
| 0x9005:0x0285:0x9005:0x0294 | ESD SO-DIMM PCI-X SATA ZCR (Prowler) | aacraid |
| 0x9005:0x0285:0x9005:0x0296 | ASR-2240S (SabreExpress) | aacraid |
| 0x9005:0x0285:0x9005:0x0297 | ASR-4005 | aacraid |
| 0x9005:0x0285:0x9005:0x0298 | ASR-4000 (BlackBird) | aacraid |
| 0x9005:0x0285:0x9005:0x0299 | ASR-4800SAS (Marauder-X) | aacraid |
| 0x9005:0x0285:0x9005:0x029A | ASR-4805SAS (Marauder-E) | aacraid |
| 0x9005:0x0285:0x9005:0x02A4 | ICP9085LI (Marauder-X) | aacraid |
| 0x9005:0x0285:0x9005:0x02A5 | ICP5085BR (Marauder-E) | aacraid |
| 0x9005:0x0286 | Adaptec Rocket Catch All | aacraid |
| 0x9005:0x0286:0x1014:0x9540 | IBM 8k/8k-l4 (Aurora Lite) | aacraid |
| 0x9005:0x0286:0x1014:0x9580 | IBM 8k/8k-l8 (Aurora) | aacraid |
| 0x9005:0x0286:0x9005:0x028C | ASR-2230S/ASR-2230SLP PCI-X (Lancer) | aacraid |
| 0x9005:0x0286:0x9005:0x028D | ASR-2130S (Lancer) | aacraid |
| 0x9005:0x0286:0x9005:0x029B | AAR-2820SA (Intruder) | aacraid |
| 0x9005:0x0286:0x9005:0x029C | AAR-2620SA (Intruder) | aacraid |
| 0x9005:0x0286:0x9005:0x029D | AAR-2420SA (Intruder) | aacraid |
| 0x9005:0x0286:0x9005:0x029E | ICP9024RO (Lancer) | aacraid |
| 0x9005:0x0286:0x9005:0x029F | ICP9014RO (Lancer) | aacraid |
| 0x9005:0x0286:0x9005:0x02A0 | ICP9047MA (Lancer) | aacraid |
| 0x9005:0x0286:0x9005:0x02A1 | ICP9087MA (Lancer) | aacraid |
| 0x9005:0x0286:0x9005:0x02A2 | ASR-3800 (Hurricane44) | aacraid |
| 0x9005:0x0286:0x9005:0x02A3 | ICP5445AU (Hurricane44) | aacraid |
| 0x9005:0x0286:0x9005:0x02A6 | ICP9067MA (Intruder-6) | aacraid |
| 0x9005:0x0286:0x9005:0x0800 | Callisto Jupiter Platform | aacraid |
| 0x9005:0x0287:0x9005:0x0800 | Themisto Jupiter Platform | aacraid |
| 0x9005:0x0288 | Adaptec NEMER/ARK Catch All | aacraid |

### _Thank you, Image Engine!_

_This version of AlmaLinux includes desktop backgrounds created by the incredible visual effects folks over at [Image Engine](https://image-engine.com/). We can't thank them enough for their work. They were awesome to work with, and we are so excited to have them as part of the AlmaLinux community._

##### Trademarks

Red Hat, RHEL and CentOS Stream are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.
