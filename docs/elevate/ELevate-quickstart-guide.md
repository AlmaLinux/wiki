---
title: "ELevate Quickstart Guide"
---

###### last updated: 2025-06-06

# ELevate Quickstart Guide

::: warning
Before beginning, we **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify the upgrade worked as expected before you attempt to upgrade any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

This guide contains steps on how to upgrade your RHEL-based operating system to the next major version.

:::tip
Please note, the ELevate project is designed to perform one-step upgrades. If you wish to perform an upgrade from CentOS7, you need to split the process. Please check the [ELevating CentOS7 to AlmaLinux 10](/elevate/ELevating-CentOS7-to-AlmaLinux-10.md) guide for more information.
:::

The ELevate project supports a number of 3rd party repositories:

- EPEL support is currently available for upgrades to AlmaLinux OS only. **Note**, that the support works only for those packages from EL 9 that are currently available for EL 10. Unavailable packages from EL 9 will remain on the system after the upgrade.
- Docker CE - for all supported operating systems.
- MariaDB - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- nginx - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- PostgreSQL - for all supported operating systems.
- Imunify - for upgrades to EL 8.
- KernelCare - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- TuxCare - for all supported operating systems.

:::tip
You can contribute to the project and add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

Currently, the following upgrade paths are available:

![image](/images/ELevate.svg)

\* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the [known issues](/elevate/ELevate-frequent-issues). <br>
\*\* - upgrading to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.<br>
\*\*\* - Currently, upgrades to AlmaLinux 10 and AlmaLinux Kitten 10 don't support x86_64_v2 architecture.

::: info
ELevate currently does not support the [Raspberry Pi images](https://github.com/AlmaLinux/raspberry-pi/).
:::

### Requirements

Depending on your upgrade path, you'll need one of the following systems installed to use this guide:

- CentOS 7 – if you're upgrading to EL 8
- Scientific Linux 7 – if you're upgrading to AlmaLinux 8
- AlmaLinux 8, CentOS Stream 8, or Rocky Linux 8 – if you're upgrading to EL 9
- AlmaLinux 9 or CentOS Stream 9 – if you're upgrading to EL10

**NOTE:** Since the CentOS 7 repositories are now offline you will need to swap to the CentOS vault, or you can use our CentOS 7 mirror that we've setup for use with ELevate:

```bash
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://el7.repo.almalinux.org/centos/CentOS-Base.repo
```

## Upgrade steps

- A fully updated system is required to accomplish the upgrade. Install the latest updates and reboot your machine:

  ```bash
  sudo yum update -y
  sudo reboot
  ```

- Install `elevate-release` package with the project repo and GPG key.

  ```bash
  sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
  ```

- Install leapp packages and upgrade data for the target OS you want to upgrade to. Possible options are:

  - leapp-data-almalinux
  - leapp-data-almalinux-kitten <small>\* leapp-data-almalinux-kitten package is designed for upgrades from AlmaLinux OS 9 to AlmaLinux Kitten OS 10.</small>
  - leapp-data-centos <small>\* leapp-data-centos package is designed for upgrades to CentOS Stream.</small>
  - leapp-data-oraclelinux
  - leapp-data-rocky

  ```bash
  sudo yum install -y leapp-upgrade leapp-data-almalinux
  ```

- Start a preupgrade check. In the meanwhile, the Leapp utility creates a special _/var/log/leapp/leapp-report.txt_ file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

  :::warning
  Preupgrade check will fail as the default install doesn't meet all requirements for upgrade.
  :::

  ```bash
  sudo leapp preupgrade
  ```

  This summary report will help you get a picture of whether it is possible to continue the upgrade.

  :::tip
  In certain configurations, Leapp generates _/var/log/leapp/answerfile_ with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
  :::

- The following fixes from _the /var/log/leapp/leapp-report.txt_ file are the most popular ones, but it's recommended to review the whole file.

  - For CentOS 7:

    ```bash
    sudo rmmod pata_acpi
    echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
    sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
    ```

  - For RHEL8-based operating systems:

    ```bash
    sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf
    sudo leapp answer --section check_vdo.confirm=True
    ```

  - There have been no widely popular fixes for RHEL9-based operating systems. The inhibitor can be unsupported x86_64_v2 hardware.

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

- Start an upgrade. You'll be offered to reboot the system after this process is completed.

  ```bash
  sudo leapp upgrade
  sudo reboot
  ```

- A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it. See how the update process goes in the console.

- After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from previous OS version, consider removing them or update manually.

  ```bash
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el7 # for 7 to 8 upgrade
  rpm -qa | grep el8 # for 8 to 9 upgrade
  rpm -qa | grep el9 # for 9 to 10 upgrade
  cat /var/log/leapp/leapp-report.txt
  cat /var/log/leapp/leapp-upgrade.log
  ```

### Demo Video

Here we have provided a demo of a CentOS 7.x to AlmaLinux 8.x upgrade using the AlmaLinux ELevate Project.

<iframe width="856" height="482" src="https://www.youtube.com/embed/Vzl9QxG5mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Get Help

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
