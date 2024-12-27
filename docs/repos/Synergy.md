---
title: 'Synergy Repository'
parent: 'Repositories'
grandparent: 'Installation'
---

<Breadcrumbs />

# Synergy Repository

## About 
Synergy repository contains packages that are not present in RHEL or EPEL yet but were requested by the Community for the Community.
This repository can be considered a pre-EPEL repo, since the AlmaLinux OS Foundation, as a member of the EL community, will make every effort to get packages into EPEL so that they become widely available on all RHEL-compatible distributions.
The release package of the Synergy repository also allows you to use it not only with AlmaLinux, but with any RHEL-compatible distribution, see the instructions below.

:::tip Package removal policy
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

:::tip Enabling PowerTools/CRB repository
Please, note, that enabling the Synergy repository will also automatically enable EPEL and PowerTools/CRB repositories if epel-release provided by your distribution is recent enough. If you still don't have PowerTools/CRB enabled you should run the following:
```
dnf update -y epel-release
crb enable
```
:::
:::warning Distributions without epel-release package
If your distribution doesn't provide `epel-release` package you'll get a dependency error during `almalinux-release-synergy` package install. In this case use the following command to enable the Synergy repository:
```
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-$(rpm -E %rhel).noarch.rpm \
               https://repo.almalinux.org/almalinux/almalinux-release-synergy-latest-$(rpm -E %rhel).noarch.rpm
```
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

