---
title: 'ELevate Changelog'
---

###### last updated: 2024-11-18

# ELevate Changelog

**Note**, this changelog only includes updates made from 2024-09-24 onwards, and does not include any changes made prior to this date.

## 2024-11-18
Released from Testing to Stable:
* Update AlmaLinux leapp upgrade repository files to use `$releasever` instead of major OS version (e.g., `8` or `9`).
* Add CentOS 7 ELS repos support for upgrades to Oracle Linux 8.
* Add KernelCare vendor support for EL8 to EL9 upgrades.
* Add support for architectures other than x86_64 by updating map files. Users can follow the standard [Quickstart guide](/elevate/ELevate-quickstart-guide) without any additional steps for these architectures.
* Avoid creating symbolic links such as `/etc/leapp/repos.d/system_upgrade;67377d17` and prevent conflicts between `leapp-upgrade-*` and `leapp-data-*` packages in the `/etc/leapp/repos.d/system_upgrade` path when upgrading CentOS 7 to AlmaLinux  OS 9. These issues occur if `leapp-data-*` packages remain installed after upgrading from CentOS 7 to CentOS 8. Therefore, **we strongly recommend removing all ELevate-related EL7 packages before proceeding with the upgrade to AlmaLinux OS 9**.

## 2024-10-18
Released from Testing to Stable:
* Extend upgrade path with the ability to elevate to AlmaLinux OS 8 versions *8.7*, *8.8*, *8.9*, *8.10*, and AlmaLinux OS 9 versions *9.0*, *9.1*, *9.2*, *9.3*, *9.4* versions with --target option set.
* Remove the *9.5* target version from the upgrade path for all supported operating systems until this version is released.

## 2024-10-09
Released from Testing to Stable:
* Fixed leapp actions that were causing packages removal and as so the upgrade process to fail: 
  * For configurations with **Imunify360** repository enabled, a *replace* leapp action will be taken for the `libunwind` package. 
  * For configurations with **EPEL** repository enabled, a *move* leapp action will be taken for the `GeoIP` package.
  * For other configurations, these packages will be removed during the upgrade process.
* Added **CloudLinux Imunify360 alt-php** 3rd party repository support for EL7 to EL8 upgrades for all supported systems.
  * Before the upgrade, you must replace the `<imunify360_alt-php_token>` string in the `/etc/yum.repos.d/imunify360-alt-php.repo` config with the token from the `/etc/leapp/files/vendors.d/imunify360-alt-php.repo`. 
* Unnecessery `openssl-libs` package split was removed for EL8 to EL9 upgrades for all supported systems.

## 2024-09-24
Released from Testing to Stable:
* Added **Microsoft Linux Package Repositories** support for all supported operating systems.
* Added **Docker CE** support for all supported operating systems.
* leapp-repository rebased to upstream version [**0.21.0**](https://github.com/oamg/leapp-repository/releases/tag/v0.21.0).
* leapp rebased to upstream version [**0.18.0**](https://github.com/oamg/leapp/releases/tag/v0.18.0).
* leapp-data:
  * Switch CentOS Stream9 repositories from mirrorlist into baseurl at [mirror.stream.centos.org](https://mirror.stream.centos.org/).

## Get Help

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
