---
title: 'Changelog'
---

###### last updated: 2025-02-18

## Amazon Web Services AMIs

### AlmaLinux OS versions 9.5.20241122:

* Fixes:
  * [GH206: Unknown group 'sgx', ignoring](https://github.com/AlmaLinux/cloud-images/issues/206).

* New packages were added:
  * `sos`: A set of tools to gather troubleshooting information from a system.
  * `tcpdump`: A command-line tool for monitoring network traffic.
  * `nfs-utils`: Built-in capability for mounting Network File System (NFS) filesystems, such as Amazon Elastic File System (EFS).
  * `jq`: Command-line JSON processor.

The complete list of installed packages starting with this version is available on [cloud-images](https://github.com/AlmaLinux/cloud-images/tree/main/tests/packages) git repository.

### AlmaLinux OS versions 9.3.20240303 and 8.9.20240303:

* AlmaLinux Amazon Images were switched from Instance Metadata Service Version 1 (IMDSv1) to Instance Metadata Service Version 2 (IMDSv2).
  The IMDSv2 is beneficial in multiple use cases such as:
  * Misconfigured Open Web Application Firewalls (WAF).
  * Misconfigured Open Reverse Proxies (Apache HTTP Server, Squid etc.).
  * Server-side request forgery (SSRF) vulnerabilities.
  * Open router.
  * Open Layer 3 Firewall.
  * Virtual private network (VPN).
  * Tunnel.
  * Network address translation (NAT).
  For more details see [article](https://aws.amazon.com/blogs/security/defense-in-depth-open-firewalls-reverse-proxies-ssrf-vulnerabilities-ec2-instance-metadata-service/) from AWS Security Blog and [talk](https://youtu.be/2B5bhZzayjI) from AWS re:Invent 2019.

* The size of boot partition (`/boot`) increased from `512 MiB` to `1024 MiB / 1GiB`.

* Add EC2 Instance Connect support - [see more](/cloud/EC2-instance-connect).

## Azure

### AlmaLinux OS versions **9.5-202411260**:

* New packages were added:
  * `langpacks-en`: Adds `en_US.UTF-8` setting it as a default locale.
  * `sos`: A set of tools to gather troubleshooting information from a system.
  * `tcpdump`: A command-line tool for monitoring network traffic.
  * `nfs-utils`: Built-in capability for mounting Network File System (NFS) filesystems, such as Azure Files.
  * `cifs-utils`: Built-in capability for mounting Server Message Block (SMB) filesystems, such as Azure Files.
  * `jq`: Command-line JSON processor.
  * `rsync`: For synchronizing files over a network.

The complete list of installed packages for this version is available on [cloud-images](https://github.com/AlmaLinux/cloud-images/tree/main/tests/packages) git repository.

## Generic Cloud

### AlmaLinux OS versions **9.5-20241120** with Cloud-init (OpenStack compatible)

* New packages were added:
  * `langpacks-en`: Adds `en_US.UTF-8` setting it as a default locale.

The complete list of installed packages starting with this version is available on [cloud-images](https://github.com/AlmaLinux/cloud-images/tree/main/tests/packages) git repository.

### AlmaLinux OS versions **9.4-20240507** and 8.10-20240530 with Cloud-init (OpenStack compatible)

**Impacted architectures: x86_64, AArch64, ppc64le, s390x**

The size of boot partition (`/boot`) increased from `512 MiB` to `1024 MiB / 1GiB`. This means that three and more kernels can be installed and enables larger initramfs (initial ram file system) and kernel related development.

### AlmaLinux OS version 8.9-20231128

**Impacted architecture: x86_64**

AlmaLinux Generic Cloud images have now unified - BIOS and UEFI - boot support. The download URLs of the UEFI images are symlinked to the current image for compatibility: `$MIRROR/almalinux/8/cloud/x86_64/images/AlmaLinux-8-GenericCloud-UEFI-latest.x86_64.qcow2`.

## OpenNebula

### AlmaLinux OS versions **9.5-20241120**

* New packages were added:
  * `langpacks-en`: Adds `en_US.UTF-8` setting it as a default locale.

### AlmaLinux OS version **8.10-20240530**

**Impacted architecture: x86_64**

AlmaLinux OpenNebula images have now unified - BIOS and UEFI - boot support. The download URLs of the UEFI images are symlinked to the current image for compatibility.

## Oracle Cloud Infrastructure (OCI)

### AlmaLinux OS versions **9.5-20250205** and **8.10-20250215**

* Enhancements:
  * Updated the iSCSI optimizations according to the [OCI documentation](https://docs.oracle.com/en-us/iaas/Content/Block/Concepts/iscsiinformation.htm#iscsid).
  * Added NVMe drivers into the initramfs for the support shapes with NVMe root disks.

* New packages were added:
  * `jq`: Command-line JSON processor.
  * `nvme-cli`: NVMe management command line interface.

* Some packages were removed to optimize package selection:
  * `firewalld`: Do not install firewall to avoid a conflict between the rules of the
firewall inside the and Security lists or Network security groups (NSGs).
  * `cockpit-system`: Cockpit admin interface package for configuring and troubleshooting a system.
  * `cockpit-ws`: Cockpit Web Service.
  * `dnf-utils`: Yum-utils CLI compatibility layer.
  * `gdisk`: An fdisk-like partitioning tool for GPT disks.

**Impacted architecture: AArch64**

 Use `ttyAMA0` as a serial port on AArch64 according to the [OCI documentation](https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/enablingserialconsoleaccess.htm).

#### AlmaLinux OS versions **9.5-20250205**

* Fixes:
  * The OCI-specific kernel command-line parameters are ineffective, resulting in a broken boot process on bare metal instances that use iSCSI disks.

* New packages were added:
  * `langpacks-en`: Adds `en_US.UTF-8` setting it as a default locale.
