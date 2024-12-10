---
title: "ELevate Quickstart Guide"
---

###### last updated: 2024-12-10

# ELevate Quickstart Guide

::: warning
Before beginning, we **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify the upgrade worked as expected before you attempt to upgrade any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

This guide contains steps on how to upgrade your RHEL-based operating system to the next major version.

:::tip 
Please note, the ELevate project is designed to perform one-step upgrades. If you wish to perform an upgrade from CentOS7, you need to split the process. Please check the [ELevating CentOS7 to AlmaLinux 9](/elevate/ELevating-CentOS7-to-AlmaLinux-9.md) guide for more information.
:::

The ELevate project supports a number of 3rd party repositories:
* EPEL support is currently available for upgrades to AlmaLinux OS only.
* Docker CE - for all supported operating systems.
* MariaDB - for all supported operating systems.
* Microsoft Linux Package Repositories - for all supported operating systems.
* nginx - for all supported operating systems.
* PostgreSQL - for all supported operating systems.
* Imunify - for upgrades to EL 8.
* KernelCare - for all supported operating systems.

:::tip
You can contribute to the project and add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

Currently, the following upgrade paths are available:

![image](/images/ELevate.svg)

\* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the [known issues](/elevate/ELevate-frequent-issues). <br>
\** - upgrading to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.

### Requirements 

You need CentOS 7, Scientific Linux 7, AlmaLinux 8, CentOS Stream 8, or Rocky Linux 8 system installed to use this guide.
**NOTE:** Since the CentOS 7 repositories are now offline you will need to swap to the CentOS vault, or you can use our CentOS 7 mirror that we've setup for use with ELevate:
```
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://el7.repo.almalinux.org/centos/CentOS-Base.repo
```

## Upgrade steps

* A fully updated system is required to accomplish the upgrade. Install the latest updates and reboot your machine:
   ```
   sudo yum update -y
   sudo reboot
   ```

* Install `elevate-release` package with the project repo and GPG key.
  ```
  sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
  ```

* Install leapp packages and upgrade data for the target OS you want to upgrade to. Possible options are:
    * leapp-data-almalinux
    * leapp-data-centos <small>* leapp-data-centos package is designed for upgrades to CentOS Stream.</small>
    * leapp-data-oraclelinux
    * leapp-data-rocky
    
  ```
  sudo yum install -y leapp-upgrade leapp-data-almalinux
  ```
* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

  :::warning
  Preupgrade check will fail as the default install doesn't meet all requirements for upgrade.
  :::

  ```
  sudo leapp preupgrade
  ```

  This summary report will help you get a picture of whether it is possible to continue the upgrade.

  :::tip
  In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
  :::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most popular ones, but it's recommended to review the whole file.
  * For CentOS 7:
    ```
    sudo rmmod pata_acpi
    echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
    sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
    ```
  * For RHEL8-based operating systems:
    ```
    sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf
    sudo leapp answer --section check_vdo.confirm=True
    ```

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.
  ```
  sudo leapp upgrade
  sudo reboot
  ```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it. See how the update process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from previous OS version, consider removing them or update manually.
  ```
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el7 # for 7 to 8 upgrade
  rpm -qa | grep el8 # for 8 to 9 upgrade
  cat /var/log/leapp/leapp-report.txt
  cat /var/log/leapp/leapp-upgrade.log
  ```

### Demo Video

Here we have provided a demo of a CentOS 7.x to AlmaLinux 8.x upgrade using the AlmaLinux ELevate Project. 

<iframe width="856" height="482" src="https://www.youtube.com/embed/Vzl9QxG5mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Get Help 

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
