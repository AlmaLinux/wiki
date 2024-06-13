---
title: "ELevate Testing Guide"
---

###### last updated: 2024-04-18

# ELevate Testing Guide

::: warning
Before beginning, we **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify that migration worked as expected before you attempt to migrate any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

Currently, the following migration directions are available:

![image](/images/ELevate.svg)

\* - migration to CentOS Stream 9 is currently in process and will be available later. <br>
\** - migration to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.

**Requirements:** You need CentOS 7, AlmaLinux 8, EuroLinux 8 or Rocky Linux 8 installed to use this guide.

* Fully updated system is required to accomplish the upgrade. So, install the latest system updates first, and reboot.
```
sudo yum update -y
sudo reboot
```

* Download the `elevate-testing.repo` file with the project testing repo.
```
sudo curl https://repo.almalinux.org/elevate/testing/elevate-testing.repo -o /etc/yum.repos.d/elevate-testing.repo
```

* Import ELevate GPG key
```
sudo rpm --import https://repo.almalinux.org/elevate/RPM-GPG-KEY-ELevate
```

* Install leapp packages and migration data for the OS you want to upgrade.  
Possible options for migration are:
    * leapp-data-almalinux
    * leapp-data-centos
    * leapp-data-eurolinux
    * leapp-data-oraclelinux
    * leapp-data-rocky

```
sudo yum install -y leapp-upgrade leapp-data-almalinux
```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

:::warning
Preupgrade check will fail as the default OS doesn't meet all requirements for migration.
:::

```
sudo leapp preupgrade
```

This summary report will help you get a picture of whether it is possible to continue the upgrade.

:::tip
In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
:::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most often, but you can also review the rest of them if needed.
```
sudo rmmod pata_acpi
echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
sudo leapp answer --section check_vdo.no_vdo_devices=True
```

Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.
```
sudo leapp upgrade
sudo reboot
```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the update process goes in the console.

* After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need.
```
cat /etc/redhat-release
cat /etc/os-release
rpm -qa | grep el7 # for 7 to 8 migration
rpm -qa | grep el8 # for 8 to 9 migration
cat /var/log/leapp/leapp-report.txt
cat /var/log/leapp/leapp-upgrade.log
```

### Demo Video

Check Demo of a CentOS 7.x to AlmaLinux 8.x migration using the software and data provided by the AlmaLinux ELevate Project. 

<iframe width="856" height="482" src="https://www.youtube.com/embed/Vzl9QxG5mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Get Help 

Report your feedback to [AlmaLinux ~Migration Channel](https://chat.almalinux.org/almalinux/channels/migration). We're especially interested in packages left from previous OS versions. This information will allow us to improve ELevate's configuration files.

