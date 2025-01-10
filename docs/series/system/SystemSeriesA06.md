---
title: 'Multimedia Codecs & Libraries for VFX Workstation Installation Guide'
parent: 'Howto Series'
grandparent: 'Documentation'
child: 'System Series'
---

<Breadcrumbs />

# A06 ❯ Multimedia Codecs & Libraries for VFX Workstation Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐⭐☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |


These packages have been needed for multiple software, such has "Thinkbox Deadline" and were either backported, requested, or discovered as alternatives for AlmaLinux 9 for users migrating from enterprise Linux 8.

# Enable CRB:
```Bash
sudo dnf config-manager --set-enabled crb
```
# Add EPEL9:

```Bash
sudo dnf -y install epel-release
```

# Add RPMFusion:
```Bash
sudo dnf install -y --nogpgcheck https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-$(rpm -E %rhel).noarch.rpm
```

# Add almalinux-release-devel:
```Bash
sudo dnf almalinux-release-devel
```

# Add almalinux Extras:
```Bash
sudo dnf config-manager --set-enabled extras
```

# Update System Packages :
```Bash
sudo dnf update -y
```

# Reboot to apply updates :
```Bash
sudo reboot
```

# Network Share essentials :
 ```Bash
sudo dnf install samba -y
sudo dnf insall cifs-utils -y
sudo dnf install nfs-utils -y
```   
    
# Packages groups essentials :
 ```Bash
sudo dnf groupinstall Workstation -y
sudo dnf groupinstall "Development Tools" -y
sudo dnf groupinstall "RPM Development Tools" -y
sudo dnf groupinstall "System Tools" -y
```  

# Install multimedia codecs:
```bash
sudo dnf -y groupinstall multimedia --with-optional
sudo dnf -y install ffmpeg
sudo dnf -y install x264
sudo dnf -y install x264-devel
sudo dnf -y install SDL2
sudo dnf -y install ffmpeg-devel
```
# Install multimedia codecs **(Required if using Thinkbox Deadline)**:
```bash
sudo dnf -y install libcrypto.so.1.1
```

# Libraries and codec needed for VFX software :
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

# Fix for locale language not being applied with GDM :
```bash
sudo localectl set-locale LANG=en_US.UTF-8
```
