---
title: "ELevate NG Testing Guide"
---

###### last updated: 2025-07-03

# ELevate NG Testing Guide

::: warning
Before beginning, we **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify the upgrade worked as expected before you attempt to upgrade any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

The ELevate NG supports a number of 3rd party repositories:

- EPEL support is currently available for upgrades to AlmaLinux OS only. **Note**, that the support works only for those packages from EL 9 that are currently available for EL 10. Unavailable packages from EL 9 will remain on the system after the upgrade.
- Docker CE - for all supported operating systems.
- MariaDB - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- nginx - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- PostgreSQL - for all supported operating systems.
- Imunify - for upgrades to EL 8.
- KernelCare - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- TuxCare - for all supported operating systems.

:::tip
You can add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

Currently, the following upgrade paths are available:

![image](/images/ELevateNG.svg)

\* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the [known issues](#known-issues). <br>
\*\* - upgrading to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.<br>
\*\*\* - Currently, upgrades to AlmaLinux 10 and AlmaLinux Kitten 10 don't support x86_64_v2 architecture.

::: warning
ELevate currently does not support the [Raspberry Pi images](https://github.com/AlmaLinux/raspberry-pi/).
:::

## Experimental feature: LiveMode

[LiveMode is an experimental feature](https://github.com/oamg/leapp-repository/blob/main/docs/source/configuring-ipu/experimental-features/livemode.md) that gives more control and flexibility over your system's real upgrade process, which takes place during the reboot.

:::warning
Leapp will notify you that's `UNSUPPORTED UPGRADE`, so please do not use the feature on production environments.

Live upgrades are currently limited to x86_64 only.

Live upgrades are available for EL8 to EL9, and EL9 to EL10 paths.
:::

Please check the following example and find out how to benefit from the feature.

### LiveMode configuration example

Create the `/etc/leapp/actor_conf.d/livemode.yaml` with the following content:

```yaml
livemode:
  additional_packages: [vim-enhanced]
  autostart_upgrade_after_reboot: false
  setup_network_manager: true
  setup_passwordless_root: true
  setup_opensshd_using_auth_keys: /root/.ssh/authorized_keys
```

This will customize the squashfs image with:

- installed `vim-enhanced` RPM package into the upgrade environment
- won't start the upgrade automatically after reboot. You can run it manually with the `upgrade` command anytime when you are ready
- enabled NetWorkManager, so you can even try to access your system via ssh
- setup openssh daemon to use the `/root/.ssh/authorized_keys` authorized keys file.

### Doing `preupgrade` and `upgrade`

The `leapp preupgrade` and `leapp upgrade` should run with `--enable-experimental-feature livemode` option and `LEAPP_UNSUPPORTED=1` environment variable.

```bash
sudo sh -c "LEAPP_UNSUPPORTED=1 leapp preupgrade --enable-experimental-feature livemode"
```

At the very beginning it will print the following information about experimental features:

```bash
============================================================
                    UNSUPPORTED UPGRADE
============================================================

Variable LEAPP_UNSUPPORTED has been detected. Proceeding at your own risk.
Experimental actors have been detected:
- live_image_generator
- live_mode_config_scanner
- live_mode_reporter
- prepare_live_image
- emit_livemode_requirements
- remove_live_image

============================================================
                    UNSUPPORTED UPGRADE
============================================================
```

Now, solve errors and mitigate inhibitors if any, then run:

```bash
sudo sh -c "LEAPP_UNSUPPORTED=1 leapp upgrade --enable-experimental-feature livemode"
```

### Continuing with the upgrade in LiveMode

Reboot the system when `leapp upgrade` finished without any error(s) and inhibitor(s). Try to access it via ssh or main console.

The pre-login message will look like:

```bash
============================================================
         LEAPP LIVE UPGRADE MODE - *UNSUPPORTED*
============================================================
      DO NOT REBOOT until the upgrade is finished.
      Upgrade logs are sent on tty1 (Ctrl+Alt+F1)
============================================================
 It will automatically reboot unless you touch this file:
   # touch /sysroot/.noreboot

 If upgrade.autostart=0 is set, run an upgrade manually:
   # upgrade |& tee /sysroot/var/log/leapp/leapp-upgrade.log

 Log in as root, without password.
```

Do the real upgrade. **Note** if you don't want immediate reboot, create `/sysroot/.noreboot` file.

```bash
touch /sysroot/.noreboot
upgrade
```

With `/sysroot/.noreboot`, you will need to issue system reboot manually. That will do the upgrade final tasks and SElinux relabeling.

## Upgrade CentOS 7 to AlmaLinux 8

EL7 to EL8 upgrades aren't supported by [leapp-repository upstream](https://github.com/oamg/leapp-repository/commit/518722058ca53e94c8efa8958ca8fd7cac40dca7) versions grater then 0.22.0.

Please follow the [ELevating CentOS 7 to AlmaLinux 10](/elevate/ELevating-CentOS7-to-AlmaLinux-10) guide to upgrade CentOS7 to AlmaLinux 8.

## Upgrading AlmaLinux 8 to AlmaLinux 9

- Install ELevate NG version repo config for AlmaLinux8:

  ```bash
  sudo curl -o /etc/yum.repos.d/elevate-ng.repo https://repo.almalinux.org/elevate/testing/elevate-ng-el$(rpm -E %rhel).repo
  ```

- Install leapp packages and upgrade data for AlmaLinux which is target OS:

  ```bash
  sudo yum install -y leapp-upgrade leapp-data-almalinux
  ```

- Start a preupgrade check. In the meanwhile, the Leapp utility creates a special _/var/log/leapp/leapp-report.txt_ file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

  :::warning
  Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
  :::

  You may use **LiveMode** experimental feature as described above, or do the preupgrade in normal mode.

  ```bash
  sudo leapp preupgrade
  ```

  This summary report will help you get a picture of whether it is possible to continue the upgrade.

  :::tip
  In certain configurations, Leapp generates _/var/log/leapp/answerfile_ with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
  :::

- The following fixes from _the /var/log/leapp/leapp-report.txt_ file are the most popular fixes for RHEL8-based operating systems:

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

- Start an upgrade. You'll be offered to reboot the system after this process is completed.

  ```bash
  sudo leapp upgrade
  sudo reboot
  ```

  :::tip
  You might want to remove the **make-devel** package as it conflicts when running `leapp upgrade` and thus this step fails.
  :::

- A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
  See how the upgrade process goes in the console.

- After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrade them manually.

  ```bash
  cat /etc/redhat-release
  cat /etc/os-release
  rpm -qa | grep el8
  sudo cat /var/log/leapp/leapp-report.txt
  sudo cat /var/log/leapp/leapp-upgrade.log
  ```

## Prepare the system for upgrade to AlmaLinux 10

When successfully upgraded to AlmaLinux 9 OS, consider performing these steps to prepare your system for upgrading to AlmaLinux 10:

- Navigate to the **/etc/** directory and use an editor of your choice to edit the **yum.conf** file. You need to remove everything from the **exclude** line especially that refers to elevate or leapp.

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

- Then navigate to the _/etc/dnf/_ directory and use an editor of your choice to do the same in the **dnf.conf** file.
- Now you can remove/manually upgrade packages left from AlmaLinux 8 without any conflicts.
- Check packages left from AlmaLinux 8:

  ```bash
  rpm -qa | grep el8
  ```

  An example output with a list of packages:

  ```bash
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

  ```bash
  sudo rpm -e --nodeps <package_name>
  ```

  :::

- You can also check for the packages left from the upgrade process and remove them:

  ```bash
  rpm -qa | grep elevate
  rpm -qa | grep leapp
  ```

- Check whether you have the _/root/tmp_leapp_py3_ directory created and if so delete it.

  ```bash
  sudo rm -fr /root/tmp_leapp_py3
  ```

- Clean up your machine.

  ```bash
  sudo dnf clean all
  ```

After these preparations are completed, you can upgrade your AlmaLinux 9 machine to AlmaLinux 10.

## Upgrading AlmaLinux 9 to AlmaLinux 10

:::warning
This upgrade is currently in development and testing. The main goals are to deliver working `leapp-data` and `leapp-repository` packages needed for the upgrade and to be able to upgrade to AlmaLinux OS 10 successfully. This upgrade is not recommended for production machines.
:::

:::tip
These steps can also be used to perform the upgrade from CentOS Stream 9 to CentOS Stream 10. The only difference is the `leapp-data` package.
:::

- Install ELevate NG version repo config for AlmaLinux 9:

  ```bash
  sudo curl -o /etc/yum.repos.d/elevate-ng.repo https://repo.almalinux.org/elevate/testing/elevate-ng-el$(rpm -E %rhel).repo
  ```

- Import ELevate GPG key:

  ```bash
  sudo rpm --import https://repo.almalinux.org/elevate/RPM-GPG-KEY-ELevate
  ```

- Install leapp packages and upgrade data for AlmaLinux which is target OS:

  ```bash
  sudo yum install -y leapp-upgrade leapp-data-almalinux
  ```

  :::tip
  For the upgrade to CentOS Stream 10, please, use the `leapp-data-centos` package:

  ```bash
  sudo yum install -y leapp-upgrade leapp-data-centos
  ```

- Start a preupgrade check. In the meanwhile, the Leapp utility creates a special _/var/log/leapp/leapp-report.txt_ file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

  :::warning
  Preupgrade check will fail as the default install doesn't meet all requirements for the upgrade.
  :::

  You may use **LiveMode** experimental feature as described above, or do the upgrade in normal mode.

  ```bash
  sudo leapp preupgrade
  ```

  This summary report will help you get a picture of whether it is possible to continue the upgrade.

  :::tip
  In certain configurations, Leapp generates _/var/log/leapp/answerfile_ with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
  :::

- Currently, the direct upgrade from Almalinux OS 9 to AlmaLinux OS 10.0 Beta goes smoothly. If there is a progressive upgrade from CentOS 7 to AlmaLinux OS 10.0 Beta, please check the [known issues](#known-issues) section.

  :::tip
  For CentOS Stream 9 to CentOS Stream 10 upgrade, please, also see the [known issues](#known-issues) section.
  :::

- Start an upgrade. You'll be offered to reboot the system after this process is completed.

  ```bash
  sudo leapp upgrade
  sudo reboot
  ```

- A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
  See how the upgrade process goes in the console.

- After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing them or upgrade them manually.

  ```bash
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

```bash
rm -rf /usr/share/redhat-release /usr/share/doc/redhat-release
```

### Progressive upgrade to AlmaLinux 10 or AlmaLinux Kitten 10

If the system has been progressively upgraded from CentOS 7, the following issues appear after the preupgrade check when upgrading AlmaLinux 9 to AlmaLinux 10.0 Beta. The issues can be found in the generated `/var/log/leapp/leapp-report.txt` file.

- "Deprecated DHCP plugin configured" inhibitor.
  - To mitigate the "Deprecated DHCP plugin configured" inhibitor, run:

    ```bash
    # sudo nmcli conn migrate
    # sudo nmcli connection modify <connection_name> ipv4.dhcp-timeout 30 ipv6.dhcp-timeout 30
    # sudo sed -i'.bak' 's/^dhcp=dhclient//g' /usr/lib/NetworkManager/conf.d/10-dhcp-dhclient.conf
    # sudo systemctl restart NetworkManager
    ```

  - After that, verify the networking configuration:

    ```bash
    # NetworkManager --print-config
    ```

- "dracut module 'network-legacy' cannot be found or installed." error.
  - To fix this issue delete the drop-in:

    ```bash
    # sudo rm -f /etc/dracut.conf.d/50-network-legacy.conf
    ```

- Before rebooting, make sure you have a working main console. You will probably need to check the `/etc/default/grub`. An example of the console-related settings:

  ```bash
  GRUB_TERMINAL_OUTPUT="console"
  GRUB_CMDLINE_LINUX="console=ttyS0,115200 console=tty0"
  ```

### Upgrade from CentOS Strem 9 to CentOS Stream 10

During CentOS Stream 9 to CentOS Stream 10 upgrade the following error can appear during preupgrade/upgrade step and can also be found in the generated _/var/log/leapp/leapp-report.txt_ file:

```bash
error: Verifying a signature using certificate 99DB70FAE1D7CE227FB6488205B555B38483C65D (CentOS (CentOS Official Signing Key) <security@centos.org>)
```

To fix the error, please, manually remove and import the CentOS GPG Key using the following commands:

```bash
rpm -e gpg-pubkey-8483c65d-5ccc5b19
rpm --import https://www.centos.org/keys/RPM-GPG-KEY-CentOS-Official-SHA256
```

## Get Help

Report your feedback to [AlmaLinux ~Migration Channel](https://chat.almalinux.org/almalinux/channels/migration). We're especially interested in packages left from the previous OS versions. This information will allow us to improve ELevate's configuration files.
