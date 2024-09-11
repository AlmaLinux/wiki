---
title: 'Multimedia Codecs Installation Guide'
---

# Multimedia Codecs Installation Guide
<small>ℹ️ This article is part of the AlmaLinux [Desktop Series](/desktop/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2024-07-17 |

## 🌟 Introduction

In some places where AlmaLinux is used (as a desktop environment especially), Multimedia codecs and programs are needed. This guide will take you through installing the most common ones. 

## Install and enable the primarily needed repositories
Most of these are installed outside of the default AlmaLinux repo. 

### ➡️ Add the EPEL repo
```bash
sudo dnf -y install epel-release
sudo dnf makecache
```
	
### ➡️ Enable the CRB repo
```bash
sudo dnf config-manager --set-enabled crb
```

### ➡️ Add the RPMFusion repo
Starting from step 2, follow [Installing EPEL and RPM Fusion](/documentation/epel-and-rpmfusion/).

## Install the common codecs and other packages

### ➡️ Install multimedia codecs
```bash
sudo dnf -y group install multimedia
sudo dnf -y install ffmpeg ffmpeg-libs ffmpeg-devel mpv
```

### ➡️ Install common audio packages
```bash
sudo dnf -y group install sound-and-video
```

### ➡️ Install software for playing a DVD
```bash
sudo dnf -y install libdvdcss
```

### ➡️ Install other mediaplayers like VLC, MPV or Celluloid (they'll come from RPMFusion)
```bash
sudo dnf install vlc
sudo dnf install mpv
sudo dnf install celluloid # Simple GTK+ frontend for mpv
```
