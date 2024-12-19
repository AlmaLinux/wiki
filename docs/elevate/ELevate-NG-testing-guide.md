---
title: "ELevate NG Testing Guide"
---

###### last updated: 2024-12-19

# ELevate NG Testing Guide

::: warning
Before beginning, we **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify the upgrade worked as expected before you attempt to upgrade any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

The ELevate NG supports a number of 3rd party repositories:
* EPEL support is currently available for upgrades to AlmaLinux OS.
    * EPEL support is also available for upgrades to AlmaLinux OS 10.0 beta. Please, note, that the support works only for packages that are currently available for EL 9.
* Docker CE - for all supported operating systems including AlmaLinux OS 10.0 beta.
* MariaDB - for all supported operating systems.
* Microsoft Linux Package Repositories - for all supported operating systems.
* nginx - for all supported operating systems.
* PostgreSQL - for all supported operating systems.
* Imunify - for upgrades to EL 8.
* KernelCare - for all supported operating systems.

:::tip
You can add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

Currently, the following upgrade paths are available:

![image](/images/ELevateNG.svg)

\* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the [known issues](#known-issues). <br>
\** - upgrading to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.<br>
\*** - Upgrade to AlmaLinux OS 10 is only available to the version **10.0 Beta**. Currently, it doesn't have support x86_64_v2. 


## Upgrade CentOS 7 to AlmaLinux 8

* Update the system to get the latest updates and reboot your machine.
   **NOTE:** Since the CentOS 7 repositories are now offline you will need to swap to the CentOS vault, or you can use our CentOS 7 mirror that we've setup for use with ELevate:
   ```bash
   sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://el7.repo.almalinux.org/centos/CentOS-Base.repo
   sudo yum upgrade -y
   sudo reboot
   ```

* Install ELevate NG version repo config for CentOS7, and import ELevate GPG key:
   ```
   sudo curl -o /etc/yum.repos.d/elevate-ng.repo https://repo.almalinux.org/elevate/testing/elevate-ng-el$(rpm -E %rhel).repo
   sudo rpm --import https://repo.almalinux.org/elevate/RPM-GPG-KEY-ELevate
   ```

* Install leapp packages and upgrade data for AlmaLinux:  
   ```
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
   :::

   ```
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most popular for CentOS 7, but it's recommended to review the whole file.
   ```
   sudo rmmod pata_acpi
   echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
   sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
   ```

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.
   ```
   sudo leapp upgrade
   sudo reboot
   ```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the upgrade process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrading them manually.
  ```
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el7 
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```

## Prepare the system for upgrade to AlmaLinux 9

When successfully upgraded to AlmaLinux 8 OS, consider performing these steps to prepare your system for upgrading to AlmaLinux 9:

* Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the **exclude** line especially that refers to elevate or leapp. 
   
   ##### An example of yum.conf file:
   ```bash   
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
   ```
   rpm -qa | grep el7
   ```
   An example output with a list of packages: 
   ```
    python2-leapp-0.16.0-2.el7.noarch
    kernel-3.10.0-1160.105.1.el7.x86_64
    leapp-upgrade-el7toel8-0.19.0-5.el7.noarch
    leapp-data-almalinux-0.2-6.el7.noarch
    leapp-0.16.0-2.el7.noarch
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with the upgrade to AlmaLinux 9.
  
   :::tip
   If you face difficulties while removing the packages, the following command might help you:
   ```
   sudo rpm -e --nodeps <package_name>
   ``` 
   :::
   
* You can also check for the packages left from the upgrade process and remove them: 
   ```   
   rpm -qa | grep elevate
   rpm -qa | grep leapp
   ```
* Check whether you have the */root/tmp_leapp_py3* directory created and if so delete it.
   ```
   sudo rm -fr /root/tmp_leapp_py3
   ```
* Clean up your machine.
   ```
   sudo dnf clean all
   ```
  
* You may also have to remove old RSA/SHA1 GPG keys. List the keys:
   ```
   rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
   ```
   
   To remove them, use use the `rpm -e` command:
   ```
   sudo rpm -e [keyname]
   ```   
After these preparations are completed, you can upgrade your AlmaLinux 8 machine to AlmaLinux 9. 

## Upgrading AlmaLinux 8 to AlmaLinux 9

* Install ELevate NG version repo config for AlmaLinux8:
   ```
   sudo curl -o /etc/yum.repos.d/elevate-ng.repo https://repo.almalinux.org/elevate/testing/elevate-ng-el$(rpm -E %rhel).repo
   ```

* Install leapp packages and upgrade data for AlmaLinux which is target OS:  
   ```
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
   :::

   ```
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most popular fixes for RHEL8-based operating systems:
   ```bash
   sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf
   sudo leapp answer --section check_vdo.confirm=True
   ```
   
  You might also find the following issue in the **leapp-report** file that can interfere with the upgrade. Consider removing the file:
   ```bash   
    Network configuration for unsupported device types detected
    Summary: RHEL 9 does not support the legacy network-scripts package that was deprecated in RHEL 8 in favor of NetworkManager. Files for device types that are not supported by NetworkManager are present in the system. Files with the problematic configuration:
      - /etc/sysconfig/network-scripts/ifcfg-eth0
   ```

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.
   ```
   sudo leapp upgrade
   sudo reboot
   ```
   
   :::tip 
   You might want to remove the **make-devel** package as it conflicts when running `leapp upgrade` and thus this step fails.
   :::
   
* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the upgrade process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrade them manually.
  ```
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el8
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```

##  Prepare the system for upgrade to AlmaLinux 10

When successfully upgraded to AlmaLinux 9 OS, consider performing these steps to prepare your system for upgrading to AlmaLinux 10:

* Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the **exclude** line especially that refers to elevate or leapp. 
   
   ##### An example of yum.conf file:
   ```bash   
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
   ```
   rpm -qa | grep el8
   ```
   An example output with a list of packages: 
   ```
    kernel-modules-4.18.0-553.32.1.el8_10.x86_64
    leapp-0.18.0-2.el8.noarch
    leapp-data-almalinux-0.5-1.el8.20241127.noarch
    kernel-core-4.18.0-553.32.1.el8_10.x86_64
    kernel-4.18.0-553.32.1.el8_10.x86_64
    python3-leapp-0.18.0-2.el8.noarch
    leapp-upgrade-el8toel9-0.21.0-4.el8.elevate.5.noarch
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with the upgrade to AlmaLinux 10.
  
   :::tip
   If you face difficulties while removing the packages, the following command might help you:
   ```
   sudo rpm -e --nodeps <package_name>
   ``` 
   :::
   
* You can also check for the packages left from the upgrade process and remove them: 
   ```   
   rpm -qa | grep elevate
   rpm -qa | grep leapp
   ```
* Check whether you have the */root/tmp_leapp_py3* directory created and if so delete it.
   ```
   sudo rm -fr /root/tmp_leapp_py3
   ```
* Clean up your machine.
   ```
   sudo dnf clean all
   ```
   
After these preparations are completed, you can upgrade your AlmaLinux 9 machine to AlmaLinux 10. 

## Upgrading AlmaLinux 9 to AlmaLinux 10

:::warning
This upgrade is currently in development and testing. The main goals are to deliver working `leapp-data` and `leapp-repository` packages needed for the upgrade and to be able to upgrade to AlmaLinux OS 10 successfully. This upgrade is not recommended for production machines.
:::

* Install ELevate NG version repo config for AlmaLinux 9:
   ```
   sudo curl -o /etc/yum.repos.d/elevate-ng.repo https://repo.almalinux.org/elevate/testing/elevate-ng-el$(rpm -E %rhel).repo
   ```
* Import ELevate GPG key:
  ```
  sudo rpm --import https://repo.almalinux.org/elevate/RPM-GPG-KEY-ELevate
   ```
* Install leapp packages and upgrade data for AlmaLinux which is target OS: 
   ```
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
   :::

   ```
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* Start an upgrade. You'll be offered to reboot the system after this process is completed.
   ```
   sudo leapp upgrade
   sudo reboot
   ```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the upgrade process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrade them manually.
  ```
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el9
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```
  
## Demo Video

Here we have provided a demo of a CentOS 7.x to AlmaLinux 8.x upgrade using the AlmaLinux ELevate Project. 

<iframe width="856" height="482" src="https://www.youtube.com/embed/Vzl9QxG5mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Known Issues

### Upgrading from Scientific Linux 7

Upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. You can apply it by running the following command before the preupgrade check: 

  ```
  rm -rf /usr/share/redhat-release /usr/share/doc/redhat-release
  ```

## Get Help 

Report your feedback to [AlmaLinux ~Migration Channel](https://chat.almalinux.org/almalinux/channels/migration). We're especially interested in packages left from the previous OS versions. This information will allow us to improve ELevate's configuration files.

