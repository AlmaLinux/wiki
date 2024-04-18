---
title: 'AlmaLinux Migration Projects'
---

###### last updated: 2024-04-18

# AlmaLinux Migration Projects

AlmaLinux offers two projects for migrating your machine, each designed for specific migration paths. Please review the short overviews to select the tool/project that best fits your requirements.

## AlmaLinux Migration Tool

[AlmaLinux Migration Tool]() can be used to convert your EL8 or EL9 machine to the corresponding version. 

The tool supports the following migration paths:

![image](/images/migration.drawio.svg)

See the [Migration Guide](/documentation/migration-guide) for the convertion steps.

## AlmaLinux ELevate Project

The ELevate project is an initiative to support migrations between major versions of RHEL-derivatives. The [Leapp utility](https://leapp.readthedocs.io) and a few [patches](https://github.com/AlmaLinux/leapp-repository/commits/almalinux) to support migration from non-RHEL operating systems are used to perform the upgrade. 

ELevate supports a number of 3rd party repositories for all supported systems:
* EPEL
* Imunify 
* KernelCare
* MariaDB
* nginx
* PostgreSQL

The project supports the following migration paths:

![image](/images/ELevate.drawio.svg)

\* - migration to CentOS Stream 9 is currently in process and will be available later. <br>
\** - migration to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.
\*** - migration to CentOS 6 is perfromed by the [Red Hat Upgrade Tool](). As so, the ELevate project doesn't cover it, but provides a tested working [guide]().

See the [ELevate](/elevate/README) section for the update steps.

