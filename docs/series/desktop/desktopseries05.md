---
title: 'Journalctl Persistent Installation Guide'
---

# Journalctl Persistent Installation Guide

| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2024-07-17 |


## Introduction

journalctl is used to print the log entries stored in the journal by systemd-journald.service(8) and systemd-journal-remote.service(8)

journalctl Man page: https://man7.org/linux/man-pages/man1/journalctl.1.html

### Check if the journal directory exists:
```bash
stat /var/log/journal
```

### Create the journal directory if it doesn't exist:
```bash
mkdir -p /var/log/journal
```

### Configure systemd journal settings:

Edit the /etc/systemd/journald.conf file using a text editor like nano or vi. Ensure the following content is set at minimum. Review the remaining configuration settings to see if anything else is useful for your setup as well.

```bash
[Journal]
SystemMaxUse=200M
SystemKeepFree=100M
SystemMaxFileSize=20M
SystemMaxFiles=10
```

This file can be modified to your preference, please see the Man page for all possible options 
https://man7.org/linux/man-pages/man1/journalctl.1.html

### Ensure the systemd-journald service is running:
```bash
systemctl start systemd-journald
```

### Restart systemd-journald:
```bash
systemctl restart systemd-journald
```
**After enabling persistent Journalctl, the files will be in a rolling state up to the maximum size specified and in the location specified**

## Further reading

<u>More from the Desktop series:</u>

- [Multimedia Codecs Installation Guide](desktopseries01) 
- [Multimedia Codecs & Libraries for VFX Workstation Installation Guide](desktopseries02)
- [Change from Wayland to Xorg Installation Guide](desktopseries03)
- [Earlyoom (Out of Memory) Installation Guide](desktopseries04)
- [Chrony Installation Guide](desktopseries06)

<u>Related articles:</u>

- [Firewalld - A Beginner's Guide](../system/SystemSeriesA02)
- [NVIDIA Driver Installation Guides](/series/nvidia/)   
- [Application Streams](../system/SystemSeriesA01)