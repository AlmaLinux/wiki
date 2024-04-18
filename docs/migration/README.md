---
title: 'AlmaLinux Migration Projects'
---

###### last updated: 2024-04-18

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

ELevate supports a number of 3rd party repositories for all supported systems:
* EPEL
* Imunify 
* KernelCare
* MariaDB
* nginx
* PostgreSQL

The project supports the following migration paths:

![image](/images/ELevate.svg)

\* - migration to CentOS Stream 9 is currently in process and will be available later. <br>
\** - migration to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.

See the [ELevate](/elevate/) section for the update steps.

