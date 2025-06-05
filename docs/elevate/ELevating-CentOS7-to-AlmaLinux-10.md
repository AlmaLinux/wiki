---
title: "ELevating CentOS 7 to AlmaLinux 10"
---

###### last updated: 2025-06-05

# ELevating CentOS 7 to AlmaLinux 10

This guide contains steps on how to upgrade your CentOS 7 machine to AlmaLinux OS 9.
As the Leapp tool is designed to perform one-step upgrades, you need to split the upgrade process:

- CentOS 7 to AlmaLinux 8
- AlmaLinux 8 to AlmaLinux 9
- AlmaLinux 8 to AlmaLinux 10  or AlmaLinux Kitten 10

The ELevate project supports a number of 3rd party repositories:

* EPEL support is currently available for upgrades to AlmaLinux OS only. **Note**, that the support works only for those packages from EL 9 that are currently available for EL 10. Unavailable packages from EL 9 will remain on the system after the upgrade.
* Docker CE - for all supported operating systems.
* MariaDB - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
* nginx - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
* PostgreSQL - for all supported operating systems.
* Imunify - for upgrades to EL 8.
* KernelCare - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10

:::tip
You can add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

Currently, the following upgrade paths are available:

![image](/images/ELevateNG.svg)

\* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the [known issues](#known-issues). <br>
\** - upgrading to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.<br>
\*** - Currently, updgrades to AlmaLinux 10 and AlmaLinux Kitten 10 don't support x86_64_v2 architecture.


## Upgrade CentOS 7 to AlmaLinux 8

* Update the system to get the latest updates and reboot your machine.
   **NOTE:** Since the CentOS 7 repositories are now offline you will need to swap to the CentOS vault, or you can use our CentOS 7 mirror that we've setup for use with ELevate:

   ```bash
   sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://el7.repo.almalinux.org/centos/CentOS-Base.repo
   sudo yum upgrade -y
   sudo reboot
   ```

* Install `elevate-release` package with the project repo and GPG key.

   ```bash
   sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
   ```

* Install leapp packages and upgrade data for AlmaLinux:

   ```bash
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
   :::

   ```bash
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are the most popular for CentOS 7, but it's recommended to review the whole file.

   ```bash
   sudo rmmod pata_acpi
   echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
   sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
   ```

  Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.

   ```bash
   sudo leapp upgrade
   sudo reboot
   ```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   Make sure you have console access to view the actual upgrade process.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrading them manually.

  ```bash
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el7
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```

## Prepare the system for upgrade to AlmaLinux 9

When successfully upgraded to AlmaLinux 8 OS, consider performing these steps to prepare your system for upgrading to AlmaLinux 9:

* Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the `exclude=` line especially that refers to elevate or leapp.

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

   ```bash
   rpm -qa | grep el7
   ```
   An example output with a list of packages:

   ```bash
   elevate-release-1.0-2.el7.noarch
   leapp-data-almalinux-0.5-1.el7.20241127.noarch
   leapp-0.18.0-2.el7.noarch
   kernel-3.10.0-1160.119.1.el7.x86_64
   python2-leapp-0.18.0-2.el7.noarch
   leapp-upgrade-el7toel8-0.21.0-5.el7.elevate.4.noarch
   kernel-3.10.0-1127.el7.x86_64
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with the upgrade to AlmaLinux 9.

   :::tip
   If you face difficulties while removing the packages, the following command might help you:

   ```bash
   sudo rpm -e --nodeps <package_name>
   ```
   :::

* You can also check for the packages left from the upgrade process and remove them:

   ```bash
   rpm -qa | grep elevate
   rpm -qa | grep leapp
   ```
* Check whether you have the */root/tmp_leapp_py3* directory created and if so delete it.

   ```bash
   sudo rm -fr /root/tmp_leapp_py3
   ```
* Clean up your machine.

   ```bash
   sudo dnf clean all
   ```

* You may also have to remove old RSA/SHA1 GPG keys. List the keys:

   ```bash
   rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
   ```

   To remove them, use use the `rpm -e` command:

   ```bash
   sudo rpm -e [keyname]
   ```
After these preparations are completed, you can upgrade your AlmaLinux 8 machine to AlmaLinux 9.

## Upgrading AlmaLinux 8 to AlmaLinux 9

* Install `elevate-release` package with the project repo and GPG key.

   ```bash
   sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
   ```

* Install leapp packages and upgrade data for AlmaLinux which is target OS:

   ```bash
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
   :::

   ```bash
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

   ```bash
   sudo leapp upgrade
   sudo reboot
   ```

   :::tip
   You might want to remove the **make-devel** package as it conflicts when running `leapp upgrade` and thus this step fails.
   :::

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the upgrade process goes in the console.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrade them manually.

  ```bash
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el8
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```

##  Prepare the system for upgrade to AlmaLinux 10

When successfully upgraded to AlmaLinux 9 OS, consider performing these steps to prepare your system for upgrading to AlmaLinux 10:

* Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the `exclude=` line especially that refers to elevate or leapp.

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

   ```bash
   rpm -qa | grep el8
   ```
   An example output with a list of packages:

   ```bash
   kernel-modules-4.18.0-553.54.1.el8_10.x86_64
   leapp-0.19.0-3.el8.noarch
   leapp-data-almalinux-0.9-1.el8.20250505.noarch
   elevate-release-1.0-2.el8.noarch
   python3-leapp-0.19.0-3.el8.noarch
   leapp-upgrade-el8toel9-0.22.0-3.el8.elevate.1.noarch
   kernel-core-4.18.0-553.54.1.el8_10.x86_64
   kernel-4.18.0-553.54.1.el8_10.x86_64
   ```
   As mentioned above, consider removing these packages or upgrading them manually to proceed with the upgrade to AlmaLinux 10.

   :::tip
   If you face difficulties while removing the packages, the following command might help you:

   ```bash
   sudo rpm -e --nodeps <package_name>
   ```
   :::

* You can also check for the packages left from the upgrade process and remove them:

   ```bash
   rpm -qa | grep elevate
   rpm -qa | grep leapp
   ```
* Check whether you have the */root/tmp_leapp_py3* directory created and if so delete it.

   ```bash
   sudo rm -fr /root/tmp_leapp_py3
   ```
* Clean up your machine.

   ```bash
   sudo dnf clean all
   ```

After these preparations are completed, you can upgrade your AlmaLinux 9 machine to AlmaLinux 10.

## Upgrading AlmaLinux 9 to AlmaLinux 10

:::tip
These steps can also be used to perform the upgrade:
- from AlmaLinux 9 to AlmaLinux 10
- AlmaLinux 9 to AlmaLinux Kitten 10
- from CentOS Stream 9 to CentOS Stream 10

The only difference is the `leapp-data` package.
:::

* Install `elevate-release` package with the project repo and GPG key.

   ```bash
   sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm
   ```

* Install leapp packages and upgrade data for AlmaLinux which is target OS:

   ```bash
   sudo yum install -y leapp-upgrade leapp-data-almalinux
   ```

   :::tip
   For the upgrade to AlmaLinux Kitten 10, please, use the `leapp-data-almalinux-kitten` package:

   ```bash
   sudo yum install -y leapp-upgrade leapp-data-almalinux-kitten
   ```
   :::

   :::tip
   For the upgrade to CentOS Stream 10, please, use the `leapp-data-centos` package:

   ```bash
   sudo yum install -y leapp-upgrade leapp-data-centos
   ```
   :::

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

   :::warning
   Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
   :::

   ```bash
   sudo leapp preupgrade
   ```

   This summary report will help you get a picture of whether it is possible to continue the upgrade.

   :::tip
   In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
   :::

* Currently, the direct upgrade from Almalinux OS 9 to AlmaLinux OS 10.0 goes smoothly. If there is a progressive upgrade from CentOS 7 to AlmaLinux OS 10.0, please check the [known issues](#known-issues) section.

  :::tip
  For CentOS Stream 9 to CentOS Stream 10 upgrade, please, also see the [known issues](#known-issues) section.
  :::

* Start an upgrade. You'll be offered to reboot the system after this process is completed.

   ```bash
   sudo leapp upgrade
   sudo reboot
   ```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   Make sure you have console access to view the actual upgrade process.

* After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrade them manually.
  ```
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el9
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```

* Check packages left from AlmaLinux 9:

   ```bash
   rpm -qa | grep el9
   ```
   An example output with a list of packages:

   ```bash
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

   ```bash
   sudo rpm -e --nodeps <package_name>
   ```
   :::

## Demo Video

Here we have provided a demo of a CentOS 7.x to AlmaLinux 8.x upgrade using the AlmaLinux ELevate Project.

<iframe width="856" height="482" src="https://www.youtube.com/embed/Vzl9QxG5mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Known Issues

### Upgrading from Scientific Linux 7

Upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. You can apply it by running the following command before the preupgrade check:

  ```
  rm -rf /usr/share/redhat-release /usr/share/doc/redhat-release
  ```

### Progressive upgrade to AlmaLinux 10.0 Beta

If the system has been progressively upgraded from CentOS 7, the following issues appear after the preupgrade check when upgrading AlmaLinux 9 to AlmaLinux 10.0 Beta.  The issues can be found in the generated `/var/log/leapp/leapp-report.txt` file.
* "Deprecated DHCP plugin configured" inhibitor.
  * To mitigate the "Deprecated DHCP plugin configured" inhibitor, run:
     ```
     # sudo nmcli conn migrate
     # sudo nmcli connection modify <connection_name> ipv4.dhcp-timeout 30 ipv6.dhcp-timeout 30
     # sudo sed -i'.bak' 's/^dhcp=dhclient//g' /usr/lib/NetworkManager/conf.d/10-dhcp-dhclient.conf
     # sudo systemctl restart NetworkManager
     ```
  * After that, verify the networking configuration:
     ```
     # NetworkManager --print-config
     ```
* "dracut module 'network-legacy' cannot be found or installed." error.
  * To fix this issue delete the drop-in:
    ```
    # sudo rm -f /etc/dracut.conf.d/50-network-legacy.conf
    ```
* Before rebooting, make sure you have a working main console. You will probably need to check the `/etc/default/grub`. An example of the console-related settings:
  ```
  GRUB_TERMINAL_OUTPUT="console"
  GRUB_CMDLINE_LINUX="console=ttyS0,115200 console=tty0"
  ```

### Upgrade from CentOS Strem 9 to CentOS Stream 10

During CentOS Stream 9 to CentOS Stream 10 upgrade the following error can appear during preupgrade/upgrade step and can also be found in the generated */var/log/leapp/leapp-report.txt* file:
  ```
  error: Verifying a signature using certificate 99DB70FAE1D7CE227FB6488205B555B38483C65D (CentOS (CentOS Official Signing Key) <security@centos.org>)
  ```

To fix the error, please, manually remove and import the CentOS GPG Key using the following commands:
  ```
  rpm -e gpg-pubkey-8483c65d-5ccc5b19
  rpm --import https://www.centos.org/keys/RPM-GPG-KEY-CentOS-Official-SHA256
  ```

## Get Help

Report your feedback to [AlmaLinux ~Migration Channel](https://chat.almalinux.org/almalinux/channels/migration). We're especially interested in packages left from the previous OS versions. This information will allow us to improve ELevate's configuration files.
