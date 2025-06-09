---
title: "ELevate Offline Guide"
---

###### last updated: 2025-06-09

# ELevate Offline Guide

This guide describes steps to be performed to migrate an air-gapped machine that has no connection to the Internet but has network access to a private mirror. The process involves at least two hosts:
* One with Internet access to be able to create local AlmaLinux and ELevate mirrors
* Another machine with access to these private mirrors that will be migrated.

:::tip
If there's neither access to a private mirror nor the Internet, you'll have to use a data storage device to get local AlmaLinux and ELevate mirrors.
:::

## Requirements

To migrate an air-gapped machine, you have to create a local mirror to receive updates. For this purpose, the recommended **storage space** is at least 500GB per major version. As there are currently three supported major versions (8, 9 and 10) the storage space should be 1,5TB.

## Prerequisites

Several steps must be accomplished before migrating the system.

### Create a local AlmaLinux mirror

**These steps are to be performed on a host with Internet access.**

The `rsync`  tool can be used to create a local mirror.

* Synchronize with the official AlmaLinux mirror via `rsync`:

   ```shell
   /usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/
   ```
* If needed, create a cron task to sync your local mirror periodically (we recommend updating the mirror every 3 hours):

   ```shell
   0 */3 * * * sleep $(((RANDOM\%3500)+1)) && /usr/bin/flock -n /var/run/almalinux_rsync.lock -c "/usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/"
   ```

  :::warning
  Don't forget to replace /example-almalinux-mirror/ directory with the directory you need.
  :::

### Create a local ELevate mirror

**These steps are to be performed on a host with Internet access.**

* Synchronize with the official AlmaLinux ELevate mirror via `rsync`:

   ```shell
   /usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates  rsync://rsync.repo.almalinux.org/almalinux-elevate/ /example-elevate-mirror/
   ```

* If needed, create a cron task to sync your local mirror periodically (we recommend updating the mirror every 3 hours):

   ```shell
   0 */3 * * * sleep $(((RANDOM\%3500)+1)) && /usr/bin/flock -n /var/run/almalinux_rsync.lock -c "/usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux-elevate/ /example-elevate-mirror/"
   ```

  :::warning
  Don't forget to replace /example-elevate-mirror/ directory with the directory you need.
  :::


### Add access to the private ELevate mirror

**These steps are to be performed on a host with access to a private ELevate mirror that will be migrated.**

To be able to install ELevate packages you need to add the local ELevate mirror to your server.

* Navigate to the **/etc/yum.repos.d** directory. Use an editor tool of choice, for example, *vi* or *mcedit* to create a repository *elevate.repo* file. It should contain data from your local ELevate repository. Enter the data to the file according to the example:

   ```shell
   [ELevate]
   name=ELevate for EL$releasever
   baseurl=http://mirror.example.com/elevate/el$releasever/$basearch/
   enabled=1
   gpgcheck=1
   gpgkey=http://mirror.example.com/elevate/RPM-GPG-KEY-ELevate
   ```

## Migrate CentOS 7 to AlmaLinux 8

**These steps are to be performed on a host with access to private mirrors that will be migrated.**

### Install ELevate packages

* Install leapp packages and migration data for the target OS you want to upgrade to from the private mirror:

  ```shell
  sudo yum install -y leapp-upgrade leapp-data-almalinux
  ```

* Navigate to the **/etc/leapp/files/** directory to update the leapp configuration file.
* Open the **leapp_upgrade_repositories.repo** file and use an editor tool of choice, for example *vi* or *mcedit*, to replace `baseurl` link for each repository with a local AlmaLinux mirror directory. Pay attention, that links should belong to a major version you want your system to migrate to.

   ```shell
   [almalinux8-baseos]
   name=AlmaLinux 8 - BaseOS
   baseurl=http://mirror.example.com/almalinux/el$releasever/$basearch/
   enabled=1
   gpgcheck=1
   gpgkey=http://mirror.example.com/almalinux/RPM-GPG-KEY-AlmaLinux-8
   ```
### Perform the migration

Once you've edited the **leapp_upgrade_repositories.repo** file to match your local mirror, you can start the migration to AlmaLinux 8.

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for migration.
   :::

   ```shell
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most popular for CentOS 7, but it's recommended to review the whole file.

   ```shell
   sudo rmmod pata_acpi
   echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
   sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
   ```

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.

   ```shell
   sudo leapp upgrade
   sudo reboot
   ```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the update process goes in the console.

* After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.

   ```shell
   cat /etc/redhat-release
   cat /etc/os-release
   rpm -qa | grep el7
   cat /var/log/leapp/leapp-report.txt
   cat /var/log/leapp/leapp-upgrade.log
   ```

* If your next stage is to migrate to AlmaLinux 9 proceed with the next steps to prepare your system.

### Prepare the system for migration to AlmaLinux 9

When successfully migrated to AlmaLinux 8 OS, consider performing these steps to prepare your system for migration to AlmaLinux 9:

* Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the **exclude** line especially that refers to elevate or leapp.

   ##### An example of yum.conf file:

   ```shell
   [main]
   gpgcheck=1
   installonly_limit=3
   clean_requirements_on_remove=True
   best=True
   skip_if_unavailable=False
   exclude=python2-leapp,snactor,leapp-upgrade-el7toel8,leapp
   ```

* Then navigate to the */etc/dnf/* directory and use an editor of your choice to do the same in the **dnf.conf** file.
* Now you can remove/manually upgrade packages left from CentOS 7 without any conflicts.
* Check packages left from CentOS 7:

   ```shell
   rpm -qa | grep el7
   ```
   ##### An example output with a list of packages:

   ```shell
   elevate-release-1.0-2.el7.noarch
   leapp-data-almalinux-0.5-1.el7.20241127.noarch
   leapp-0.18.0-2.el7.noarch
   kernel-3.10.0-1160.119.1.el7.x86_64
   python2-leapp-0.18.0-2.el7.noarch
   leapp-upgrade-el7toel8-0.21.0-5.el7.elevate.4.noarch
   kernel-3.10.0-1127.el7.x86_64
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with migration to AlmaLinux 9.

   :::tip
   If you face difficulties while removing the packages, the following command might help you:

   ```shell
   rpm -e --nodeps <package_name>
   ```
   :::

* You can also check for the packages left from the migration process and remove them:

   ```shell
   rpm -qa | grep elevate
   rpm -qa | grep leapp
   ```
* Check whether you have the */root/tmp_leapp_py3* directory created and if so delete it.

   ```shell
   sudo rm -fr /root/tmp_leapp_py3
   ```
* Clean up your machine.

   ```shell
   sudo dnf clean all
   ```

* You may also have to remove old RSA/SHA1 GPG keys. List the keys:

   ```shell
   rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
   ```

   To remove them, use use the `rpm -e` command:

   ```shell
   rpm -e [keyname]
   ```
After these preparations are completed, you can migrate your AlmaLinux 8 machine to AlmaLinux 9.

## Migrate AlmaLinux 8 to AlmaLinux 9

**These steps are to be performed on a host with access to private mirrors that will be migrated.**

If you previously migrated your airgapped system to AlmaLinux 8, your local repositories of AlmaLinux and ELevate should still be present.
If this migration is the first one, you have to [create your local mirrors](#prerequisites) first to proceed with the migration.

### Install ELevate packages

* Install leapp packages and migration data for the target OS you want to upgrade to from the private mirror:

  ```shell
  sudo yum install -y leapp-upgrade leapp-data-almalinux
  ```

* Navigate to the **/etc/leapp/files/** directory to update the leapp configuration file.
* Open the **leapp_upgrade_repositories.repo** file and use an editor tool of choice, for example *vi* or *mcedit*, to replace `baseurl` link for each repository with a local AlmaLinux mirror directory. Pay attention, that links should belong to a major version you want your system to migrate to.

   ```shell
   [almalinux9-baseos]
   name=AlmaLinux 9 - BaseOS
   baseurl=http://mirror.example.com/almalinux/el$releasever/$basearch/
   enabled=1
   gpgcheck=1
   gpgkey=http://mirror.example.com/almalinux/RPM-GPG-KEY-AlmaLinux-9
   ```

## Perform the migration

Once you've edited the **leapp_upgrade_repositories.repo** file to match your local mirror, you can start the migration to AlmaLinux 9.

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for migration.
   :::

   ```shell
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most popular fixes for RHEL8-based operating systems:

   ```shell
   sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf
   sudo leapp answer --section check_vdo.confirm=True
   ```

  You might also find the following issue in the **leapp-report** file that can interfere with the migration. Consider removing the file:

   ```shell
    Network configuration for unsupported device types detected
    Summary: RHEL 9 does not support the legacy network-scripts package that was deprecated in RHEL 8 in favor of NetworkManager. Files for device types that are not supported by NetworkManager are present in the system. Files with the problematic configuration:
      - /etc/sysconfig/network-scripts/ifcfg-eth0
   ```

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.

   ```shell
   sudo leapp upgrade
   sudo reboot
   ```

   :::tip
   You might want to remove the **make-devel** package as it conflicts when running `leapp upgrade` and thus this step fails.
   :::

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the update process goes in the console.

* After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.

   ```shell
   cat /etc/redhat-release
   cat /etc/os-release
   rpm -qa | grep el8
   cat /var/log/leapp/leapp-report.txt
   cat /var/log/leapp/leapp-upgrade.log
   ```

### Prepare the system for migration to AlmaLinux 10 or AlmaLinux Kitten 10

When successfully migrated to AlmaLinux 9 OS, consider performing these steps to prepare your system for migration to AlmaLinux 10 or AlmaLinux Kitten 10:

* Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the **exclude** line especially that refers to elevate or leapp.

   ##### An example of yum.conf file:

   ```shell
   [main]
   gpgcheck=1
   installonly_limit=3
   clean_requirements_on_remove=True
   best=True
   skip_if_unavailable=False
   exclude=python2-leapp,snactor,leapp-upgrade-el8toel9,leapp
   ```

* Then navigate to the */etc/dnf/* directory and use an editor of your choice to do the same in the **dnf.conf** file.
* Now you can remove/manually upgrade packages left from AlmaLinux 8 without any conflicts.
* Check packages left from AlmaLinux 8:

   ```shell
   rpm -qa | grep el8
   ```
   ##### An example output with a list of packages:

   ```shell
   kernel-modules-4.18.0-553.54.1.el8_10.x86_64
   leapp-0.19.0-3.el8.noarch
   leapp-data-almalinux-0.9-1.el8.20250505.noarch
   elevate-release-1.0-2.el8.noarch
   python3-leapp-0.19.0-3.el8.noarch
   leapp-upgrade-el8toel9-0.22.0-3.el8.elevate.1.noarch
   kernel-core-4.18.0-553.54.1.el8_10.x86_64
   kernel-4.18.0-553.54.1.el8_10.x86_64
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with migration to AlmaLinux 10 or AlmaLinux Kitten 10.

   :::tip
   If you face difficulties while removing the packages, the following command might help you:

   ```shell
   rpm -e --nodeps <package_name>
   ```
   :::

* You can also check for the packages left from the migration process and remove them:

   ```shell
   rpm -qa | grep elevate
   rpm -qa | grep leapp
   ```
* Check whether you have the */root/tmp_leapp_py3* directory created and if so delete it.

   ```shell
   sudo rm -fr /root/tmp_leapp_py3
   ```
* Clean up your machine.

   ```shell
   sudo dnf clean all
   ```

* You may also have to remove old RSA/SHA1 GPG keys. List the keys:

   ```shell
   rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
   ```

   To remove them, use use the `rpm -e` command:

   ```shell
   rpm -e [keyname]
   ```

After these preparations are completed, you can migrate your AlmaLinux 8 machine to AlmaLinux 10 or AlmaLinux Kitten 10.

## Migrate AlmaLinux 9 to AlmaLinux 10 or AlmaLinux Kitten 10

**These steps are to be performed on a host with access to private mirrors that will be migrated.**

If you previously migrated your airgapped system to AlmaLinux 9, your local repositories of AlmaLinux and ELevate should still be present.
If this migration is the first one, you have to [create your local mirrors](#prerequisites) first to proceed with the migration.

### Install ELevate packages

* Install leapp packages and migration data for the target OS you want to upgrade to from the private mirror:

   ```shell
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

   :::tip
   For the upgrade to AlmaLinux Kitten 10, please, use the `leapp-data-almalinux-kitten` package:

   ```bash
   sudo yum install -y leapp-upgrade leapp-data-almalinux-kitten
   ```
   :::

* Navigate to the **/etc/leapp/files/** directory to update the leapp configuration file.
* Open the **leapp_upgrade_repositories.repo** file and use an editor tool of choice, for example *vi* or *mcedit*, to replace `baseurl` link for each repository with a local AlmaLinux mirror directory. Pay attention, that links should belong to a major version you want your system to migrate to.

   ```shell
   [almalinux10-baseos]
   name=AlmaLinux 10 - BaseOS
   baseurl=http://mirror.example.com/almalinux/el$releasever/$basearch/
   enabled=1
   gpgcheck=1
   gpgkey=http://mirror.example.com/almalinux/RPM-GPG-KEY-AlmaLinux-10
   ```

## Perform the migration

Once you've edited the **leapp_upgrade_repositories.repo** file to match your local mirror, you can start the migration to AlmaLinux 10 or AlmaLinux Kitten 10.

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for migration.
   :::

   ```shell
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* Currently, the direct upgrade from Almalinux OS 9 to AlmaLinux OS 10.0 goes smoothly. If there is a progressive upgrade from CentOS 7 to AlmaLinux OS 10.0, please check the [known issues](#known-issues) section.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.

   ```shell
   sudo leapp upgrade
   sudo reboot
   ```

   :::tip
   You might want to remove the **make-devel** package as it conflicts when running `leapp upgrade` and thus this step fails.
   :::

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the update process goes in the console.

* After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.

   ```shell
   cat /etc/redhat-release
   cat /etc/os-release
   rpm -qa | grep el9
   cat /var/log/leapp/leapp-report.txt
   cat /var/log/leapp/leapp-upgrade.log
   ```

* Check packages left from AlmaLinux 9:

   ```shell
   rpm -qa | grep el9
   ```
  ##### An example output with a list of packages:

   ```shell
   kernel-modules-core-5.14.0-570.18.1.el9_6.x86_64
   kernel-core-5.14.0-570.18.1.el9_6.x86_64
   kernel-modules-5.14.0-570.18.1.el9_6.x86_64
   kernel-5.14.0-570.18.1.el9_6.x86_64
   elevate-release-1.0-2.el9.noarch
   python3-leapp-0.19.0-2.el9.noarch
   leapp-0.19.0-2.el9.noarch
   leapp-upgrade-el9toel10-0.22.0-3.el9.elevate.1.noarch
   leapp-data-almalinux-0.9-3.el9.20250505.noarch
   vtable-dumper-1.2-12.el9.x86_64
   abi-dumper-1.2-12.el9.noarch
   iptables-legacy-libs-1.8.10-11.1.el9.x86_64
   ```

   :::tip
   If you face difficulties while removing the packages, the following command might help you:

   ```shell
   sudo rpm -e --nodeps <package_name>
   ```
   :::

## Get Help

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
