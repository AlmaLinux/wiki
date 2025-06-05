---
title: "ELevating CentOS 7 to AlmaLinux 9"
---

###### last updated: 2025-06-05

# ELevating CentOS 7 to AlmaLinux 9

This guide contains steps on how to upgrade your CentOS 7 machine to AlmaLinux OS 9.
As the Leapp tool is designed to perform one-step upgrades, you need to split the upgrade process:
* CentOS 7 to AlmaLinux 8
* AlmaLinux 8 to AlmaLinux 9

The ELevate project supports a number of 3rd party repositories:
* EPEL support is currently available for upgrades to AlmaLinux OS only.
* Docker CE - for all supported operating systems.
* MariaDB - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
* nginx - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
* PostgreSQL - for all supported operating systems.
* Imunify - for upgrades to EL 8.
* KernelCare - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.

:::tip
You can contribute to the project and add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

## Upgrade CentOS 7 to AlmaLinux 8

* Update the system to get the latest updates and reboot your machine.
   **NOTE:** Since the CentOS 7 repositories are now offline you will need to swap to the CentOS vault, or you can use our CentOS 7 mirror that we've setup for use with ELevate:
   ```bash
   sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://el7.repo.almalinux.org/centos/CentOS-Base.repo
   sudo yum upgrade -y
   sudo reboot
   ```

* Install `elevate-release` package with the project repo and GPG key.
   ```
   sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
   ```

* Install leapp packages and upgrade data for AlmaLinux which is target OS:  
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
   See how the update process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.
   ```
   cat /etc/redhat-release
   cat /etc/os-release
   rpm -qa | grep el7 
   cat /var/log/leapp/leapp-report.txt
   cat /var/log/leapp/leapp-upgrade.log
   ```

## Prepare the system for upgrade to AlmaLinux 9

When successfully upgraded to AlmaLinux 8 OS, consider performing these steps to prepare your system for upgrade to AlmaLinux 9:

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
   ##### An example output with a list of packages: 
   ```
   leapp-upgrade-el7toel8-0.16.0-6.el7.elevate.17.noarch
   yum-plugin-fastestmirror-1.1.31-54.el7_8.noarch
   python2-leapp-0.14.0-1.el7.noarch
   leapp-data-almalinux-0.1-6.el7.noarch
   kernel-3.10.0-1160.102.1.el7.x86_64
   kernel-3.10.0-1160.el7.x86_64
   java-1.7.0-openjdk-headless-1.7.0.261-2.6.22.2.el7_8.x86_64
   btrfs-progs-4.9.1-1.el7.x86_64
   elevate-release-1.0-2.el7.noarch
   leapp-0.14.0-1.el7.noarch
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with the upgrade to AlmaLinux 9.
  
   :::tip
   If you face difficulties while removing the packages, the following command might help you:
   ```
   rpm -e --nodeps <package_name>
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
   rpm -e [keyname]
   ```   
After these preparations are completed, you can upgrade your AlmaLinux 8 machine to AlmaLinux 9. 

## Upgrading AlmaLinux 8 to AlmaLinux 9

* Install `elevate-release` package with the project repo and GPG key.
   ```
   sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
   ```

* Install leapp packages and upgrade data for AlmaLinux:  
   ```
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for upgrading.
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
   See how the update process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.
   ```
   cat /etc/redhat-release
   cat /etc/os-release
   rpm -qa | grep el8
   cat /var/log/leapp/leapp-report.txt
   cat /var/log/leapp/leapp-upgrade.log
   ```

* There will be outstanding **nss_db** package which should be removed and the system should be updated:
   ```
   dnf update --allowerasing
   ```
* When performing a progressive upgrade from CentOS 7 to AlmaLinux 9, you may encounter the following issue on EL 9 while using `vi` (not `vim`). For more details and a fix, please check the [Important Notes](#important-notes-about-the-upgrade-process) section below.

## Important Notes about the Upgrade Process

### Package Dependency Error After ELevate Upgrade

 During the upgrade, ELevate uses a multitude of repositories to migrate and upgrade the system. Among them is the usage of the CRB repository. Important to note, if the CRB repository was not enabled on your system prior to using ELevate, it will remain disabled after the upgrade. This can cause future system updates via dnf to fail as one or more packages/package dependencies may now depend on packages within the CRB repository. The errors can look something like this:
  ```
  Error: 
  Problem: package nss_db-2.34-100.el9_4.2.x86_64 from @System requires glibc(x86-64) = 2.34-100.el9_4.2, but none of the providers can be installed

  cannot install both glibc-2.34-100.el9_4.2.alma.2.x86_64 from baseos and glibc-2.34-100.el9_4.2.x86_64 from @System
  cannot install both glibc-2.34-100.el9_4.2.x86_64 from baseos and glibc-2.34-100.el9_4.2.alma.2.x86_64 from baseos
  cannot install the best update candidate for package glibc-2.34-100.el9_4.2.x86_64
  problem with installed package nss_db-2.34-100.el9_4.2.x86_64
  ```
  This issue can be resolved by enabling the CRB repository.

  While this is one of the most commonly encountered post-ELevate dnf repository related issues, additional or alternative issues may arise from similarly absent dnf repositories that are responsible for dependency resolution.

  To enable CRB or any other AlmaLinux repository, please reference [this article](/repos/AlmaLinux.html)

  ### Error Detected While Processing /etc/virc

  When performing a progressive upgrade from CentOS 7 to AlmaLinux 9, you may encounter the following issue on EL 9 while using `vi` (not `vim`):
  ```
  Error detected while processing /etc/virc:
  line   40:
  E319: Sorry, the command is not available in this version: let skip_defaults_vim=1
  ```
  To fix this error:
  * Open `/etc/virc` file using a text editor of your choice.
  * Search for the line containing the text *content added by Leapp*.
  * Locate and remove the following line:
    ```
    let skip_defaults_vim=1
    ```
  * Save the file and exit the editor.

  After making these changes, the error should no longer appear when using `vi`.

## Get Help 

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
