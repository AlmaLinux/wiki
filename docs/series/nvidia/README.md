---
title: 'NVIDIA Driver Guides for AlmaLinux'
---

# NVIDIA Driver Guides for AlmaLinux


## Introduction

These guides provide instructions on how to install NVIDIA's graphics driver for AlmaLinux three different ways:

- Option I: Precompiled/Binary Driver - using precompiled drivers is recommended.
- Option II: Compile Driver Source - requires switching to an ELRepo kernel.
- Option III: NVIDIA .run Driver Installation Guide - requires manual installation of dependencies and downloading the driver manually from Nvidia website

- NVIDIA on AlmaLinux Overview [NVIDIA Drivers Guide for AlmaLinux](/series/nvidia/)
- NVIDIA Driver Installation Guide ❯ [Installation on 8.x](/series/nvidia/nvidiaseries8x)
- NVIDIA Driver Installation Guide ❯ [Installation on 9.x](/series/nvidia/nvidiaseries9x)

## Fundamental Concepts

### Dynamic Kernel Module Support (DKMS)

DKMS is a system utility that allows you to automatically build kernel modules.

### ELRepo Kernel

ELRepo is a community repository for Enterprise Linux distributions (e.g., RHEL, CentOS, AlmaLinux). It focuses on hardware-related packages to enhance your Linux experience. This repo provides a kernel (packages) which tracks mainline kernel very closely. In result, this kernel is updated frequently and sometimes it leads to temporary incompatiblity with NVIDIA driver sources.

### NVIDIA Drivers Source
Install the NVIDIA graphics driver using the DKMS (Dynamic Kernel Module Support). Needs switching the kernel to ELRepo kernel version.

### NVIDIA Precompiled/Binary Drivers
NVIDIA compiles and tests this driver for each precise kernel version. Installing it locks your kernel upgrade (with driver). It is the recommended way according to NVIDIA.

### Understanding NVIDIA .run Driver Installation

The NVIDIA .run Driver Installation Guide offers an alternative approach to installing the graphics driver on AlmaLinux. Unlike the recommended precompiled drivers, this method allows users to manually handle the installation process. It involves downloading the driver directly from the Nvidia website, making it a more flexible but intricate process.

# Key Points

- **Manual Dependency Installation:** Users are required to install dependencies manually, ensuring compatibility with the system.
- **Direct Download from Nvidia:** The graphics driver needs to be downloaded manually from the Nvidia website, allowing users to choose specific versions compatible with their GPUs.
- **Flexibility and Control:** This method provides users with greater control over the installation process, enabling customization based on specific needs.

# Considerations

- **Advanced Users:** The .run Driver Installation Guide is suitable for advanced users who are comfortable handling manual installations and configurations.
- **Compatibility Verification:** Users must verify the compatibility of the downloaded driver version with their GPU before proceeding with the installation.

# FAQ

## Q: Installed the module but getting Black Screen after reboot?

### If you are able to change `GRUB` kernel boot parameters, do:

```
module_blacklist=nvidia,nvidia_drm,nvida_modeset
```

### If you are getting Black Screen right after boot (no GRUB visible), do:

WIP

## If the Desktop Icon for NVIDIA-Settings is not showing, do :

```
sudo echo "[Desktop Entry]" | sudo tee /usr/share/applications/nvidia-settings.desktop
sudo echo "Type=Application" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Name=NVIDIA Settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktopsudo
sudo echo "Comment=Configure NVIDIA Settings" | sudo tee -a /usr/share/applications/nv```idia-settings.desktop
sudo echo "Exec=nvidia-settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Icon=nvidia-settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Terminal=false" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Categories=System;Settings;X-Red-Hat-Base-Utilities;" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
```

## Further Reading and Next Steps
    
<u>In-depth Resources:</u>
- [NVIDIA: Installation on AlmaLinux 8](nvidiaseries8x)
- [NVIDIA: Installation on AlmaLinux 9](nvidiaseries9x)

<u>Related Resources:</u>
- [Nginx: A Beginner's Guide](/series/nginx/NginxSeriesA01)
- [Firewalld: A Beginner's Guide](/series/system/SystemSeriesA02)
