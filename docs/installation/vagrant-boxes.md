---
title: 'Vagrant Boxes'
---

###### last updated: 2025-01-06

# Vagrant Boxes

AlmaLinux offers official AlmaLinux OS images for Vagrant Boxes. Images are delivered by the AlmaLinux [Cloud SIG](https://wiki.almalinux.org/sigs/Cloud.html).

The following [AlmaLinux OS 9](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/9) and [AlmaLinux OS 8](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/8) images are available on HCP Vagrant Registry:
| Vagrant Box| AlmaLinux OS 9 | AlmaLinux OS 8 |
| --- | --- | --- |
| Libvirt | Intel/AMD (x86_64) | Intel/AMD (x86_64) | 
| VirtualBox | Intel/AMD (x86_64) | Intel/AMD (x86_64) |
| Hyper-V | Intel/AMD (x86_64) | Intel/AMD (x86_64) |
| VMware | Intel/AMD (x86_64)<br>ARM64 (AArch64) | Intel/AMD (x86_64) |
| Parallels | ARM64 (AArch64) | - | 

:::tip
If you are looking for AlmaLinux OS Kitten images, please, visit the [AlmaLinux OS Kitten page](/development/almalinux-os-kitten-10).
:::

## Contribute and Get Help

If you are interested in contributing or need any assistance, check the [SIG/Cloud](/sigs/Cloud) wiki page and join the *~SIG/Cloud* chat channel in [Mattermost](https://chat.almalinux.org/almalinux/channels/sigcloud) chat channel on [chat.almalinux.org](https://chat.almalinux.org).

## Changelog

### General updates
**2024-12-23**

All the boxes have been migrated to the [HCP Vagrant Registry](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux).

### AlmaLinux OS version **9.5.20241203**

* New packages were added:
  - `langpacks-en`: Adds `en_US.UTF-8` setting it as a default locale.
  - `tcpdump`: A command-line tool for monitoring network traffic.
  - `tuned`: Tunes system settings dynamically. Which uses `virtual-guest` profile to optimize the virtual machine performance.
  - `nfs-utils`: Built-in capability for mounting Network File System (NFS) type of Vagrant synced folders.
  - `cifs-utils`: Built-in capability for mounting Server Message Block (SMB) type of Vagrant synced folders.
  - `rsync`: Built-in capability for Rsync type of Vagrant synced folders.

#### Provider specific changes:

* virtualbox
  * Built in VirtualBox 7.1.4, with Guest Additions included in the same version.

* vmware_desktop
  - Switch from BIOS to UEFI boot on x86_64.
  - Use VMXNET Generation 3 (VMXNET3) as the network adapter, as it is the latest, offers the best performance, and is compatible with the AlmaLinux OS kernel.
  - Upgrade the VMware virtual machine hardware version from 9 to 21, which is the latest. Since all desktop VMware products are now free, adopting the latest version will be faster, eventually encouraging users to utilize all the features of the latest hardware version.
