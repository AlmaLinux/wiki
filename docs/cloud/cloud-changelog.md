---
title: 'Changelog'
---

###### last updated: 2024-12-23

## Generic Cloud

### AlmaLinux OS versions **9.5-20241120** with Cloud-init (OpenStack compatible)

* New packages were added:
  - `langpacks-en`: Adds and sets the `en_US.UTF-8` as a default locale.

The complete list of installed packages starting with this version is available on [cloud-images](https://github.com/AlmaLinux/cloud-images/tree/main/tests/packages) git repository.

### AlmaLinux OS versions **9.4-20240507** and 8.10-20240530 with Cloud-init (OpenStack compatible)

**Impacted architectures: x86_64, AArch64, ppc64le, s390x**

The size of boot partition (`/boot`) increased from `512 MiB` to `1024 MiB / 1GiB`. This means that three and more kernels can be installed and enables larger initramfs (initial ram file system) and kernel related development.

### AlmaLinux OS version 8.9-20231128

**Impacted architecture: x86_64**

AlmaLinux Generic Cloud images have now unified - BIOS and UEFI - boot support. The download URLs of the UEFI images are symlinked to the current image for compatibility: `$MIRROR/almalinux/8/cloud/x86_64/images/AlmaLinux-8-GenericCloud-UEFI-latest.x86_64.qcow2`

## Amazon Web Services AMIs

### AlmaLinux OS versions 9.5.20241122:

* Fixes:
  - [GH206: Unknown group 'sgx', ignoring](https://github.com/AlmaLinux/cloud-images/issues/206)

* New packages were added:
  - `sos`: A set of tools to gather troubleshooting information from a system.
  - `tcpdump`: A command-line tool for monitoring network traffic.
  - `nfs-utils`: Built-in capability for mounting Network File System (NFS) filesystems, such as Amazon Elastic File System (EFS).
  - `jq`: Command-line JSON processor.

The complete list of installed packages starting with this version is available on [cloud-images](https://github.com/AlmaLinux/cloud-images/tree/main/tests/packages) git repository.

### AlmaLinux OS versions 9.3.20240303 and 8.9.20240303:

* AlmaLinux Amazon Images were switched from Instance Metadata Service Version 1 (IMDSv1) to Instance Metadata Service Version 2 (IMDSv2).
  The IMDSv2 is beneficial in multiple use cases such as:
  - Misconfigured Open Web Application Firewalls (WAF).
  - Misconfigured Open Reverse Proxies (Apache HTTP Server, Squid etc.).
  - Server-side request forgery (SSRF) vulnerabilities.
  - Open router.
  - Open Layer 3 Firewall.
  - Virtual private network (VPN).
  - Tunnel.
  - Network address translation (NAT).
  For more details see [article](https://aws.amazon.com/blogs/security/defense-in-depth-open-firewalls-reverse-proxies-ssrf-vulnerabilities-ec2-instance-metadata-service/) from AWS Security Blog and [talk](https://youtu.be/2B5bhZzayjI) from AWS re:Invent 2019

* The size of boot partition (`/boot`) increased from `512 MiB` to `1024 MiB / 1GiB`.

* Included EC2 Instance Connect. See: https://wiki.almalinux.org/cloud/EC2-instance-connect.html

## Azure

### AlmaLinux OS versions **9.5-202411260**:

* New packages were added:
  - `langpacks-en`: Adds and sets the `en_US.UTF-8` as a default locale.
  - `sos`: A set of tools to gather troubleshooting information from a system.
  - `tcpdump`: A command-line tool for monitoring network traffic.
  - `nfs-utils`: Built-in capability for mounting Network File System (NFS) filesystems, such as Azure Files.
  - `cifs-utils`: Built-in capability for mounting Server Message Block (SMB) filesystems, such as Azure Files.
  - `jq`: Command-line JSON processor.
  - `rsync`: For synchronizing files over a network

The complete list of installed packages for this version is available on [cloud-images](https://github.com/AlmaLinux/cloud-images/tree/main/tests/packages) git repository.

## OpenNebula

### AlmaLinux OS versions **9.5-20241120**

* New packages were added:
  - `langpacks-en`: Adds and sets the `en_US.UTF-8` as a default locale.
### AlmaLinux OS version **8.10-20240530**

**Impacted architecture: x86_64**

AlmaLinux OpenNebula images have now unified - BIOS and UEFI - boot support. The download URLs of the UEFI images are symlinked to the current image for compatibility.

## Vagrant

All the boxes have been migrated to the [HCP Vagrant Registry](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux)

### AlmaLinux OS version **9.5.20241203**

* New packages were added:
  - `langpacks-en`: Adds and sets the `en_US.UTF-8` as a default locale.
  - `tcpdump`: A command-line tool for monitoring network traffic.
  - `tuned`: Tunes system settings dynamically. Which uses `virtual-guest` profile to optimize the virtual machine performance.
  - `nfs-utils`: Built-in capability for mounting Network File System (NFS) type of Vagrant synced folders.
  - `cifs-utils`: Built-in capability for mounting Server Message Block (SMB) type of Vagrant synced folders.
  - `rsync`: Built-in capability for Rsync type of Vagrant synced folders.

* **libvirt**
* **virtualbox**
  - Built in VirtualBox 7.1.4, with Guest Additions included in the same version.
* **vmware_desktop**
  - Switch from BIOS to UEFI boot on x86_64.
  - Use VMXNET Generation 3 (VMXNET3) as the network adapter, as it is the latest, offers the best performance, and is compatible with the AlmaLinux OS kernel.
  - Upgrade the VMware virtual machine hardware version from 9 to 21, which is the latest. Since all desktop VMware products are now free, adopting the latest version will be faster, eventually encouraging users to utilize all the features of the latest hardware version.
* **hyperv**
* **parallels**
