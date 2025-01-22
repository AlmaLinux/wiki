---
title: 'Change from Wayland to Xorg Installation Guide'
---

# Change from Wayland to Xorg Installation Guide

| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2024-07-17 |


## Introduction

Wayland is the window manager that many distributions have been adopting over the long-used Xorg. In some cases, Wayland may interfere with software installed and require Xorg instead. This is the way to rollback to Xorg.


### Open the terminal on the host machine.


### Gain administrative privileges by using the sudo command:
```bash
sudo su-
```

### Navigate to the /etc/gdm/ directory:
```bash
cd /etc/gdm/
```

### Open the custom.conf file in a text editor of your choice. 

For example, you can use the nano editor. 

```bash
sudo nano custom.conf
```

### Find or add the following lines to the file:
```bash
WaylandEnable=false
DefaultSession=gnome-xorg.desktop
```

Save the changes and exit the text editor. If you are using nano, you can press Ctrl + X, then press Y to confirm changes, and finally press Enter to exit.

### Restart the system or the display manager for the changes to take effect.


## Further reading

<u>More from the Desktop series:</u>

- [Multimedia Codecs Installation Guide](desktopseries01) 
- [Multimedia Codecs & Libraries for VFX Workstation Installation Guide](desktopseries02)
- [Earlyoom (Out of Memory) Installation Guide](desktopseries04)
- [Journalctl Persistent Installation Guide](desktopseries05)
- [Chrony Installation Guide](desktopseries06)

<u>Related articles:</u>

- [Firewalld - A Beginner's Guide](../system/SystemSeriesA02)
- [NVIDIA Driver Installation Guides](/series/nvidia/)   
- [Application Streams](../system/SystemSeriesA01)