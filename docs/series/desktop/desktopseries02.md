---
title: 'VFX Workstation Installation Guide'
---

# Multimedia Codecs & Libraries for VFX Workstation Installation Guide

| 💡 | Experience Level  | ⭐⭐☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2024-07-17 |


## Introduction

These packages have been needed for desktop and VFX users for many different reasons. Multiple pieces of software, such has "Thinkbox Deadline", were either backported, requested, or discovered as alternatives for AlmaLinux 9 for users migrating from enterprise Linux 8.

## Install and enable the basics

### Enable the CRB repo
```bash
sudo dnf config-manager --set-enabled crb
```
### Add the EPEL repo
```bash
sudo dnf -y install epel-release
```

### Add the RPMFusion repo
Starting from step 2, follow [Installing EPEL and RPM Fusion](/documentation/epel-and-rpmfusion/).

### Add almalinux-release-devel
```bash
sudo dnf almalinux-release-devel
```

### Enable the AlmaLinux Extras repo
```bash
sudo dnf config-manager --set-enabled extras
```

### Update the system 
```bash
sudo dnf update -y
```

### Reboot to apply updates
```bash
sudo reboot
```

### Install network share essential packages
 ```bash
sudo dnf install samba -y
sudo dnf insall cifs-utils -y
sudo dnf install nfs-utils -y
```   
    
### Intall packages groups essentials
 ```bash
sudo dnf groupinstall Workstation -y
sudo dnf groupinstall "Development Tools" -y
sudo dnf groupinstall "RPM Development Tools" -y
sudo dnf groupinstall "System Tools" -y
```  

### Install multimedia codecs
```bash
sudo dnf -y groupinstall multimedia --with-optional
sudo dnf -y install ffmpeg
sudo dnf -y install x264
sudo dnf -y install x264-devel
sudo dnf -y install SDL2
sudo dnf -y install ffmpeg-devel
```

### Install additional multimedia codecs **(Required if using Thinkbox Deadline)**:
```bash
sudo dnf -y install libcrypto.so.1.1
```

### Install yet more libraries and codecs needed for common VFX software :
```bash
sudo dnf -y install ncurses-compat-libs
sudo dnf -y install gstreamer1-libav
sudo dnf -y install libnsl
sudo dnf -y install vulkan
sudo dnf -y install libglvnd-devel
sudo dnf -y install mesa-libGL
sudo dnf -y install mesa-libGLU
sudo dnf -y install gstreamer1-libav
sudo dnf -y install libnsl
sudo dnf -y install xmessage
```

### Fix for locale language not being applied with GDM :
```bash
sudo localectl set-locale LANG=en_US.UTF-8
```
## Further reading

<u>More from the Desktop series:</u>

- [Multimedia Codecs Installation Guide](desktopseries01) 
- [Change from Wayland to Xorg Installation Guide](desktopseries03)
- [Earlyoom (Out of Memory) Installation Guide](desktopseries04)
- [Journalctl Persistent Installation Guide](desktopseries05)
- [Chrony Installation Guide](desktopseries06)

<u>Related articles:</u>

- [Firewalld - A Beginner's Guide](../system/SystemSeriesA02)
- [NVIDIA Driver Installation Guides](/series/nvidia/)   
- [Application Streams](../system/SystemSeriesA01)