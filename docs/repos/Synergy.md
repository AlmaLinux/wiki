---
title: "Synergy Repository"
---

# Synergy Repository

## About 
Synergy repository contains packages that are not present in RHEL or EPEL yet but were requested by the Community for the Community.
This repository can be considered a pre-EPEL repo, since the AlmaLinux OS Foundation, as a member of the EL community, will make every effort to get packages into EPEL so that they become widely available on all RHEL-compatible distributions.
The release package of the Synergy repository also allows you to use it not only with AlmaLinux, but with any RHEL-compatible distribution, see the instructions below.

:::tip
Please, **note**, that as soon as a package is in EPEL or RHEL, it will be removed from the Synergy repository. 
:::

## Enabling the repository

Synergy repository can be enabled for AlmaLinux OS and for other distros in EL-ecosystem like RHEL, CentOS, Rocky Linux, etc.

To enable the Synergy repository on AlmaLinux machines run the following command:
```
dnf install -y almalinux-release-synergy
```

To enable the Synergy repository on any RHEL-compatible distribution run the following command:
```
dnf install -y https://repo.almalinux.org/almalinux/almalinux-release-synergy-latest-$(rpm -E %rhel).noarch.rpm
```

:::warning
Please, note, that enabling the Synergy repository will also automatically enable the EPEL repository, but most EPEL packages also require enabling PowerTools/CRB repository.
:::

Available packages can also be found on [repo.almalinux.org](https://repo.almalinux.org/):
* [AlmaLinux OS 8](https://repo.almalinux.org/almalinux/8/synergy/)
* [AlmaLinux OS 9](https://repo.almalinux.org/almalinux/9/synergy/)

You can use the closest [mirror](https://mirrors.almalinux.org/isos.html) for faster access.

## Request a package 

A package can be requested via [Packaging chat channel](https://chat.almalinux.org/almalinux/channels/engineeringpackaging) in Mattermost.
To be included in the Synergy repository, a package must meet the following criteria:
- The package must not be in the RHEL repositories (including additional repositories like RT, NFV, SAP, etc.)
- The package must not be in the EPEL repository
- The package must not update, replace, or conflict with packages from RHEL and EPEL
- The package developer does not maintain a YUM/DNF repository for RHEL-compatible distributions

