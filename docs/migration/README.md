---
title: 'AlmaLinux Migration Projects'
---

###### last updated: 2024-11-14

# AlmaLinux Migration Projects

AlmaLinux offers two projects for migrating your machine, each designed for specific migration paths.

See the general overviews of options to select the tool/project that best fits your requirements.

## AlmaLinux Migration Tool

[AlmaLinux Migration Tool](https://github.com/AlmaLinux/almalinux-deploy) can be used to convert your EL8 or EL9 machine to the corresponding version. 

The tool supports the following migration paths:

![image](/images/migration.svg)

See the [Migration Guide](/documentation/migration-guide) for the conversion steps.

## AlmaLinux ELevate Project

The ELevate project is an initiative to support migrations between major versions of RHEL-derivatives. 
 
The [Leapp utility](https://leapp.readthedocs.io) and a few [patches](https://github.com/AlmaLinux/leapp-repository/commits/almalinux) are used to perform in-place migrations between CentOS 7 and Enterprise Linux (EL) 8, and between EL8 and EL9 systems.

The [Red Hat Upgrade Tool](https://github.com/upgrades-migrations/redhat-upgrade-tool.git) is used to perform in-place migration between CentOS 6 and CentOS 7.

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
See the [ELevate](/elevate/) section for the update steps.

