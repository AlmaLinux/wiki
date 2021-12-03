---
title: "About ELevate project"
---

# About the project

The ELevate project is an initiative to support migrations between major version of RHEL-derivatives. The [Leapp utility](https://leapp.readthedocs.io) and a few [patches](https://github.com/AlmaLinux/leapp-repository/commits/almalinux) to support migration from CentOS are used to perform the upgrade. All changes are headed upstream as well.

# Available migration paths 

:::danger
The ELevate project supports only CentOS repositories. It doesn't support other external repositories. Please, check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues.
:::

There are several ways to perform upgrade these days. Here is the list to see which migration directions are available:

* CentOS 7 - AlmaLinux 8
* CentOS 7 - Rocky Linux 8
* CentOS 7 - Oracle Linux 8
* CentOS 7 - CentOS Stream 8

# How to migrate

Please, visit the [ELevate Quickstart Guide](/elevate/ELevate-quickstart-guide) to see the update steps.


# Package Evolution Service

The Leapp utility uses several configuration files. The biggest one is the package evolution data file *pes-events.json*. We’ve launched [Package Evolution Service](https://pes.almalinux.org) (PES) to allow collaboration on creating and improving this data. This service allows you to download, customize and submit new data sets for packages. Users and maintainers can both utilize the PES to help make migrations smooth and easy. Check the [ELevate Contribution Guide](/elevate/Contribution-guide) to learn how you can improve PES data.

# How to Contribute 

ELevate is developed and built as a tool for the whole ecosystem, not just AlmaLinux. ELevate supports migrating to/from other distributions and is open for all to contribute to and enhance. You can find more information and FAQ about migration on [almalinux.org/elevate](https://almalinux.org/elevate) and [Migration SIG](/sigs/Migration), contribute using [ELevate Contribution Guide](/elevate/Contribution-guide), and get any help on [AlmaLinux Chat on Mattermost](https://chat.almalinux.org). 
