---
title: "About ELevate project"
---

###### last updated: 2024-04-18

# About the project

The ELevate project is an initiative to support migrations between major versions of RHEL-derivatives. 

The [Leapp utility](https://leapp.readthedocs.io) and a few [patches](https://github.com/AlmaLinux/leapp-repository/commits/almalinux) are used to perform in place migrations between CentOS 7 and Enterprise Linux (EL) 8, and between EL8 and EL9 systems.

The [Red Hat Upgrade Tool](https://github.com/upgrades-migrations/redhat-upgrade-tool.git) is used to perform in place migration between CentOS 6 and CentOS 7.

# Available migration paths 

The ELevate supports a number of 3rd party repositories for all supported systems:
* EPEL
* Imunify 
* KernelCare
* MariaDB
* nginx
* PostgreSQL

There are several ways to perform upgrade these days. Here is the list to see which migration directions are available:

![image](/images/ELevate.svg)

\* - migration to CentOS Stream 9 is currently in process and will be available later. <br>
\** - migration to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.

# How to migrate

There are various guides that cover the update steps depending on a migration type:
* The [ELevate Quickstart Guide](/elevate/ELevate-quickstart-guide) covers the update steps using Leapp utility version with 3rd party repositories support and  provides the Demo video.
* The [ELevate CentOS 7 to AlmaLinux 9 Guide](/elevate/ELevating-CentOS7-to-AlmaLinux-9) covers two-stage process to migrate a CentOS 7 machine to AlmaLinux OS 9.
* The [ELevate CentOS 6 to CentOS 7 Guide](/elevate/ELevating-CentOS6-to-CentOS7) covers steps to be performed to migrate CentOS 6 machine to CentOS 7.
* The [ELevate Offline Guide](/elevate/ELevate-offline-guide) covers the update steps on air-gapped machines.
* The [ELevate NG Guide](/elevate/ELevate-NG-testing-guide) covers the update steps using the next Leapp tool version - 0.19.0.

# Package Evolution Service

The Leapp utility uses several configuration files. The biggest one is the package evolution data file *pes-events.json*. We’ve launched [Package Evolution Service](https://pes.almalinux.org) (PES) to allow collaboration on creating and improving this data. This service allows you to download, customize and submit new data sets for packages. Users and maintainers can both utilize the PES to help make migrations smooth and easy. Check the [ELevate Contribution Guide](/elevate/Contribution-guide) to learn how you can improve PES data.

# How to Contribute 

ELevate is developed and built as a tool for the whole ecosystem, not just AlmaLinux. ELevate supports migrating to/from other distributions and is open for all to contribute to and enhance. You can find more information and FAQ about migration on [almalinux.org/elevate](https://almalinux.org/elevate) and [Migration SIG](/sigs/Migration), contribute using [ELevate Contribution Guide](/elevate/Contribution-guide), and get any help on [AlmaLinux Chat on Mattermost](https://chat.almalinux.org). 
