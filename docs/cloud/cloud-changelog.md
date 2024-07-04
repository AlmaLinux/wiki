---
title: 'Changelog'
---

###### last updated: 2024-07-04

## Amazon Web Services AMIs 

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

## Generic Cloud

### AlmaLinux OS versions **9.4-20240507** and 8.10-20240530 with Cloud-init (OpenStack compatible)

**Impacted architectures: x86_64, AArch64, ppc64le, s390x** 

The size of boot partition (`/boot`) increased from `512 MiB` to `1024 MiB / 1GiB`. This means that three and more kernels can be installed and enables larger initramfs (initial ram file system) and kernel related development.

### AlmaLinux OS version 8.9-20231128

**Impacted architecture: x86_64** 

AlmaLinux Generic Cloud images have now unified - BIOS and UEFI - boot support. The download URLs of the UEFI images are symlinked to the current image for compatibility: `$MIRROR/almalinux/8/cloud/x86_64/images/AlmaLinux-8-GenericCloud-UEFI-latest.x86_64.qcow2`

## OpenNebula

### AlmaLinux OS version **8.10-20240530** 

**Impacted architecture: x86_64** 

AlmaLinux OpenNebula images have now unified - BIOS and UEFI - boot support. The download URLs of the UEFI images are symlinked to the current image for compatibility.


