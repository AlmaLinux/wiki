---
title: "About ELevate project"
---

###### last updated: 2024-08-30

# About the project

The ELevate project is an initiative to support upgrades between major versions of RHEL-derivatives. 

The [Leapp utility](https://leapp.readthedocs.io) and a few [patches](https://github.com/AlmaLinux/leapp-repository/commits/almalinux) are used to perform in-place upgrades from CentOS 7 and Enterprise Linux (EL) 8, and between EL8 and EL9 systems.

The [Red Hat Upgrade Tool](https://github.com/upgrades-migrations/redhat-upgrade-tool.git) is used to perform in-place upgrades between CentOS 6 and CentOS 7.

## Available migration paths 

:::tip 
Please note, the ELevate project is designed to perform one-step upgrades. If you wish to perform an upgrade from CentOS7, you need to split the process. Please check the [ELevating CentOS7 to AlmaLinux 9](/elevate/ELevating-CentOS7-to-AlmaLinux-9.md) guide for more information.
:::

The ELevate project supports a number of 3rd party repositories:
* EPEL support is currently available for upgrades to AlmaLinux OS only.
* MariaDB - for all supported operating systems. 
* nginx - for all supported operating systems. 
* PostgreSQL - for all supported operating systems. 
* Imunify - for upgrades to EL 8.
* KernelCare - for upgrades to EL 8.

:::tip
You can contribute to the project and add more 3rd party repositories support. See more on the [Contribute](/elevate/Contribution-guide) page.
:::

Currently, the following upgrade paths are available:

![image](/images/ELevateNG.svg)

\* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the [known issues](#known-issues). <br>
\** - upgrading to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.

## How to upgrade

Various guides cover the update steps depending on the upgrade type:
* The [ELevate Quickstart Guide](/elevate/ELevate-quickstart-guide) covers the upgrade steps using the Leapp utility version with 3rd party repositories support and provides the Demo video.
* The [ELevate CentOS 7 to AlmaLinux 9 Guide](/elevate/ELevating-CentOS7-to-AlmaLinux-9) covers a two-stage process to upgrade a CentOS 7 machine to AlmaLinux OS 9.
* The [ELevate CentOS 6 to CentOS 7 Guide](/elevate/ELevating-CentOS6-to-CentOS7) covers steps to be performed to upgrade CentOS 6 machines to CentOS 7.
* The [ELevate Offline Guide](/elevate/ELevate-offline-guide) covers the upgrade steps on air-gapped machines.

## How to Contribute 

ELevate is developed and built as a tool for the whole ecosystem, not just AlmaLinux. ELevate supports upgrading to/from other distributions and is open for all to contribute to and enhance. You can find more information and FAQ on [almalinux.org/elevate](https://almalinux.org/elevate) and [Migration SIG](/sigs/Migration).

If are interested in contributing to the project, please check: 
* The [ELevate Contribution Guide](/elevate/Contribution-guide) covers the contribution processes to add a 3rd party repository support or testing.
* The [ELevate NG Guide](/elevate/ELevate-NG-testing-guide) covers the upgrade steps using the next Leapp tool version, new features, bug fixes, etc.
* The [ELevate Testing Guide](/elevate/ELevate-testing-guide) covers the steps for upgrade processes that are in testing.

You can get any help on [AlmaLinux Chat on Mattermost](https://chat.almalinux.org). 
