---
title: 'ELevating CentOS 6 to CentOS 7'
---

| Experience Level   | ⭐⭐☆☆☆  (Intermediate) |
|--------------------|---------------------- |
| Last modified date | 2024-04-16| 

# ELevating CentOS 6 to CentOS 7

::: danger
We **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify that migration worked as expected before you attempt to migrate any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

This guide describes steps to be performed to migrate a CentOS 6 machine to CentOS 7 using the Red Hat Upgrade Tool (redhat-upgrade-tool). 

The process consists of two steps:
1.  Upgrading CentOS 6.10 to CentOS 7.2.1511 as this is the latest CentOS version that supports the Red Hat Upgrade Tool.
2.  Upgrading CentOS 7.2.1511 to CentOS 7.9.2009.

## Requirements 
* This guide is suitable only for x86_64 architecture. 
* The most recent version of CentOS 6.10.
* An enabled Vault repository 

Please, check the **Details** below for guidance on how to enable the CentOS Vault repositories.
  :::details
  To upgrade your CentOS 6 machine, you need working CentOS 6 repositories. Run the below command replace your CentOS-base repo file with a known-good CentOS 6.10 Vault repository configuration:
  ```sh
  curl https://repo.almalinux.org/elevate/el6/centos6-vault.repo -o /etc/yum.repos.d/CentOS-Base.repo
  ```
   :::

## Upgrade CentOS 6.10 to CentOS 7.2.1511

### Prerequisites

* As root access is required to use the following steps, make sure that you are logged in as the root user:
  ```sh
  whoami
  ```
  ###### Expected output:
  ```
  root
  ```
* Update your CentOS 6 system to get the most recent updates and verify:
  ```sh
  yum update  
  cat /etc/centos-release 
  ```
  ###### Expected output:
  ```sh
  CentOS release 6.10 (Final)
  ```

* Install the *elevate-release* package that contains the configuration file with CentOS 6 upgrade repositories:
  ```sh
  yum install https://repo.almalinux.org/elevate/elevate-release-latest-el6.noarch.rpm
  ```

* Install the `redhat-upgrade-tool` and `preupgrade-assistant-contents` packages that are used to perform the migration:
  ```sh
  yum install redhat-upgrade-tool preupgrade-assistant-contents
  ```

### Migrate the system

* Run the pre-upgrade assistant as a pre-ugrade check of the system. It will generate a report file with possible problems and risks for review. No changes will be made at this phase. 
  ```sh
  preupg
  ```

* The generated **result.html** file is located in the */root/preupgrade/* directory. Inspect it carefully and consider running suitable commands and performing the recommended steps to resolve the reported issues. 
  You can check the risks from the *results.html* using the `preupgr` command:
  ```sh
  preupg --riskcheck --verbose
  ```
  Or using, for example, `lynx` - a terminal-based web browser:
  ```sh
  lynx /root/preupgrade/result.html
  ```

* Import CentOS 7 GPG key:
  ```sh
  rpm --import https://vault.centos.org/7.2.1511/os/x86_64/RPM-GPG-KEY-CentOS-7  
  ```

* Start an upgrade:
  ```sh
   redhat-upgrade-tool --network=7 --cleanup-post --instrepo=http://vault.centos.org/7.2.1511/os/x86_64/
  ```
  * The `--cleanup-post` option will remove the CentOS 6 packages remaining after the migration.
  * The `--network` option sets the system's release version to use online repositories.
  * You can add the `--force` option to force the migration despite the risks. 
    :exclamation: Consider this option carefully, and remember to have a system backup. 

* When the upgrade process is over, reboot the system.

  A new entry in GRUB called `System Upgrade (redhat-upgrade-tool)` will appear. The system will be automatically booted into it. You can monitor the remainder of the migration process in the console. 

  ::: tip
  The system will reboot twice during the upgrade.
  :::

  After the second reboot completes and you are presented with the login screen, login to the system and verify that the current OS is now CentOS 7. 

  ```sh
  cat /etc/centos-release
  ```
  ###### Expected output:
  ```sh
  CentOS Linux release 7.2.1511 (Core) 
  ```
  
### Clean up

* After the migration is complete, there may be leftover packages from the previous OS (even if you used the `--cleanup-post` option). Consider removing or updating them manually.
  ```sh
  rpm -qa | grep el6
  ```
* You should also check your current repo list, and disable any lingering CentOS 6 repositories.
  ```sh
  yum repolist --verbose
  ```
* Also consider removing the CentOS 6 upgrade repository package, as it is no longer needed and could cause problems in the next steps:
  ```sh
  yum remove elevate-release
  ```
* The *CentOS-Base.repo* file contains CentOS 6 Vault repositories. It wasn't updated during the upgrade process to CenOS 7.2.1511 contain CentOS 7 repositories. Instead, the new *CentOS-Base.repo.rpmnew* file was created which you need to remove:
  ```sh
  rm /etc/yum.repos.d/CentOS-Base.repo.rpmnew
  ```
  
## Upgrade CenOS 7.2.1511 to CentOS 7.9.2009

* CentOS 7 reached its End-Of-Life meaning the repositories are now offline. To be able to update your CentOS 7.2.1511 machine to CentOS 7.9.2009 you need to update *CentOS-Base.repo* file with the CentOS 7 Vault or you can use our CentOS 7 mirror that we've setup for use with ELevate:
  ```sh
  curl http://el7.repo.almalinux.org/centos/CentOS-Base.repo -o /etc/yum.repos.d/CentOS-Base.repo
  ```

* Run the `yum` command to update your CentOS 7.2.1511 machine to the most recent version 7.9: 
  ```sh
  yum update
  ```
* Reboot after the update completes and verify the system's version: 
  ```sh
  cat /etc/centos-release
  ```
  ###### Expected output:
  ```sh
  CentOS Linux release 7.9.2009 (Core) 
  ```
  
## Get Help and Contribute

We welcome any feedback as it helps to improve the project.

For any help and assistance, or if you want to share your thoughts or contribute to the ELevate project, reach out to us on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
   
#### Additional documentation

Here's the list of additional documentation that you might find useful:
* [Red Hat Upgrade Tool](https://github.com/upgrades-migrations/redhat-upgrade-tool.git)
* [A framework designed to run the Preupgrade Assistant modules](https://github.com/upgrades-migrations/preupgrade-assistant.git)
* [Modules used by an upgrade from CentOS 6 to CentOS 7](https://github.com/upgrades-migrations/preupgrade-assistant-modules.git)
* [CentOS Preupgrade Data](https://git.centos.org/sources/preupgrade-assistant-el6toel7-data/c6/)

#### Trademarks
Red Hat, Red Hat Enterprise Linux, and CentOS are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.
