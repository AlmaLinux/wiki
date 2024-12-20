---
title: 'ELevate Changelog'
---

###### last updated: 2024-12-20

# ELevate Changelog

**Note**, this changelog only includes updates made from 2024-09-24 onwards, and does not include any changes made prior to this date.

## 2024-12-20
Released from Testing to Stable:

#### General updates

* Leapp data updated to [the latest upstream state](https://github.com/oamg/leapp-repository/commit/2dc7efa41ccf7206e0e33d687d7931846f3e4390) with an extended hardware support list from AlmaLinux OS 9.5.
* Leapp version updated to `0.21.0-4.elevate.4`.

#### PES data updates
* `pes-events.json` updated to the latest upstream state.
* `config.json` updates:
  * Add new repository replacements for RHEL10-HighAvailability and RHEL10-SAP-Solutions (except for Oracle Linux).
  * Add RHEL9-Supplementary to the removable repositories list for all supported OSes.
  * Add RHEL10-HighAvailability and RHEL10-SAP-Solutions to the removable repositories list for Oracle Linux.
  * Add RedHat cloud-client-configuration to the removable packages for all supported upgrade scenarios.
* `epel_pes.json_template` cleanup: fixed duplicated `ids` and `set_ids`.
* `pes_events_build_date` package updated version and release: `0.5-1.20241127`.

#### Leapp code enhancements
* Leapp code updated to [the latest upstream version](https://github.com/oamg/leapp-repository/commit/3c3421a0f155fe3bdfaee74c5345e86874684a09).
* Introduce the upgrade path from EL 8.10 to EL 9.6.
* Require leapp-framework 6.0+  and updated dependency packages.
* Address a number of RHEL bug reports RHEL-23473, RHEL-67621, RHEL-57064, RHEL-56251, RHEL-50686, RHEL-41193, RHEL-34570, RHEL-26459, RHEL-23473, RHEL-16881, RHEL-3294.
* Enable `net.naming-scheme` by default.
* Enable upgrade for systems with LUKS bound to Clevis with TPM 2.0 token.
* Capped sparse file sizes to 1TiB for storage optimization.
* Adjust resource limitations for leapp to be able to perform the upgrade.
* Fix problems with the bootloader when upgrading to EL 9.6 on ARM.
* Fix the report when handling broken parsing of kernel cmdline.
* Handle default kernel cmdline when multiple boot entries for the default kernel are defined.
* Generate proper error message instead of ModelViolationError when parsing invalid repository definition.
* Skip checking of (PKI) `directory-hash` dir to speed up the upgrade process and clean logs.
* Update leapp upgrade data files.

#### Vendor-Specific Changes
* Introduce 2 new actors add_arm_bootloader_workaround, remove_upgrade_efi_entry use specific to particular OS, EFI directory location path, like `/boot/efi/EFI/$distro_dir`.
* Remove `0006-ReadOfKernelArgsError-fix-the-error.patch` that has been incorporated upstream.
* Add the `9.6` version as supported for all supported operating system.
* Remove the `9.6` version from the upgrade path for all supported operating systems until this version is released.
* Add PostgreSQL support for ARM architecture (signature: `6c7cb6ef305d49d6`).


## 2024-12-10
* Support for EuroLinux has been discontinued due to its [end-of-life as a Linux distribution in 23 October 2024](https://docs.euro-linux.com/).

## 2024-11-18
Released from Testing to Stable:
* Update AlmaLinux leapp upgrade repository files to use `$releasever` instead of major OS version (e.g., `8` or `9`).
* Add CentOS 7 ELS repos support for upgrades to Oracle Linux 8.
* Add KernelCare vendor support for EL8 to EL9 upgrades.
* Add support for architectures other than x86_64 by updating map files. Users can follow the standard [Quickstart guide](/elevate/ELevate-quickstart-guide) without any additional steps for these architectures.
* Avoid creating symbolic links such as `/etc/leapp/repos.d/system_upgrade;67377d17` and prevent conflicts between `leapp-upgrade-*` and `leapp-data-*` packages in the `/etc/leapp/repos.d/system_upgrade` path when upgrading CentOS 7 to AlmaLinux OS 9. These issues occur if `leapp-data-*` packages remain installed after upgrading from CentOS 7 to EL8. Therefore, **we strongly recommend removing all ELevate-related EL7 packages before proceeding with the upgrade to EL9**.

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
