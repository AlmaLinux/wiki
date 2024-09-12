---
title: 'NVIDIA - Install on AlmaLinux 8'
---

# NVIDIA: Installation on AlmaLinux 8

| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2024-07-17|


## Introduction

This is a dedicated example for the AlmaLinux 8.x series, demonstrating how to install NVIDIA's graphics driver for AlmaLinux three different ways:

- Option I: Precompiled/Binary Driver - using precompiled drivers is recommended.
- Option II: Compile Driver Source - requires switching to an ELRepo kernel.
- Option III: NVIDIA .run Driver Installation Guide - requires manual installation of dependencies and downloading the driver manually from Nvidia website

## Option I: Install Binary Driver


### Enable PowerTools

```
sudo dnf config-manager --set-enabled powertools
sudo dnf makecache
```

### Add EPEL8

```
sudo dnf -y install epel-release
sudo dnf upgrade
```

### Add the NVIDIA Repository

```
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel8/x86_64/cuda-rhel8.repo
sudo dnf makecache
```

###  Install the latest NVIDIA driver

```
sudo dnf module install nvidia-driver:latest
```

###  Install third-party libraries for CUDA

```
sudo dnf install freeglut-devel libX11-devel libXi-devel libXmu-devel make mesa-libGLU-devel freeimage-devel libglfw3-devel
```

## 🔖 Option II: Compile Driver Source

::: tip
Installing NVIDIA drivers on AlmaLinux 8 requires using ELRepo Mainline kernel.
:::

### ELRepo related steps

### Enable PowerTools & add EPEL8

```
sudo dnf config-manager --set-enabled powertools
sudo dnf makecache && sudo dnf -y install epel-release
sudo dnf makecache
```

###  Add ELRepo

```
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
sudo dnf -y install https://www.elrepo.org/elrepo-release-8.el8.elrepo.noarch.rpm
sudo dnf makecache
```

###  Enable ELRepo Mainline Kernel Repo

```
sudo dnf config-manager --set-enabled elrepo-kernel
sudo dnf makecache
```

###  Install ELrepo Mainline kernel

```
sudo dnf -y install kernel-ml kernel-ml-modules kernel-ml-modules-extra kernel-ml-devel kernel-headers
```

### NVIDIA driver build-related steps

###  Add NVIDIA repository

```
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel8/x86_64/cuda-rhel8.repo
sudo dnf makecache
```

###  Install NVIDIA DKMS Drivers

```
sudo dnf module install nvidia-driver:latest-dkms
```

###  Disable Nouveau

```
printf 'blacklist nouveau\n' | sudo tee /etc/modprobe.d/nouveau-blacklist.conf
sudo dracut -f --regenerate-all
lsmod | grep -Ei '(nouv|nvidia)'
```

###  Reboot to runlevel 3

```
sudo systemctl set-default multi-user.target
sudo reboot
sudo systemctl set-default graphical.target
sudo reboot
```
## 🔖 Option III: NVIDIA .run Driver Installation Guide

###   Enable needed repository

```
sudo dnf install epel-release
sudo dnf config-manager --set-enabled powertools
sudo dnf config-manager --set-enabled extras
```
###  Install needed packages

```
sudo dnf install kernel-devel
sudo dnf install kernel-headers
sudo dnf install dkms
sudo dnf install redhat-lsb-core
sudo dnf install vulkan
sudo dnf install vulkan-tools
sudo dnf install vulkan-headers
sudo dnf install vulkan-loader-devel
```

###  Disable Nouveau

```
sudo touch /etc/modprobe.d/nouveau-blacklist.conf
echo "blacklist nouveau" | sudo tee /etc/modprobe.d/nouveau-blacklist.conf
echo "options nouveau modeset=0" | sudo tee -a /etc/modprobe.d/nouveau-blacklist.conf
```

```
sudo dracut --force
```

```
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
sudo grub2-mkconfig -o /boot/efi/EFI/almalinux/grub.cfg
```

```
sudo reboot
```

###  Install the .run driver
**Download the latest driver (**Verify compatibility with your GPU**):** 

https://www.nvidia.com/en-us/drivers/unix/linux-amd64-display-archive/

###  Go into the downloaded driver directory (**Replace /path/to/driver with the actual path**): 

```
cd /path/to/driver
```

###  Make executable (**XXX.XXX.XX Is the driver version**):

```
sudo chmod +x NVIDIA-LINUX-x86_64-XXX.XXX.XX.run
```

###  Switch to Run Level 3

```
sudo init 3
```

###  .run Driver installation options

**Choose either Option 1 or Option 2 based on your preference.**

**Option 1** :

Install via the Console Text UI by following the prompt:
**Replace XXX.XXX.XX with the actual driver version.**

sudo ./NVIDIA-LINUX-x86_64-XXX.XXX.XX.run

**Option 2** :

Install silently via console :
**Replace XXX.XXX.XX with the actual driver version.**

sudo ./NVIDIA-Linux-x86_64-XXX.XXX.XX.run --accept-license --silent --run-nvidia-xconfig --dkms

###  Update the initramfs (**This is needed as of 535.XXX.XX drivers**)

**Update the initramfs to ensure the changes made by the NVIDIA driver installation are reflected.**

```
sudo dracut -f
```

```
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
sudo grub2-mkconfig -o /boot/efi/EFI/almalinux/grub.cfg
```

###  Set the default target to graphical for a desktop environment & Set the default target back to multi-user for a server or command-line environment.

```
sudo systemctl set-default graphical.target
sudo systemctl set-default multi-user.target
```

```
sudo reboot
```

## Known issue with NVIDIA-Settings Desktop Icon
### Create NVIDIA Settings desktop icon
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

<u>Get Back:</u>
- [NVIDIA Driver Installation Guides](/series/nvidia/)   

<u>In-depth Resources:</u>
- [NVIDIA: Installation on AlmaLinux 9](nvidiaseries9x)

<u>Related Resources:</u>
- [Nginx: A Beginner's Guide](/series/nginx/NginxSeriesA01)
- [Firewalld: A Beginner's Guide](/series/system/SystemSeriesA02)
- [NVIDIA Driver Installation Guides](/series/nvidia/)   
