---
title: 'Chrony Installation Guide'
---

# Chrony Installation Guide

| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2024-07-17 |


## Introduction

chrony is a versatile implementation of the Network Time Protocol (NTP). It can synchronise the system clock with NTP servers, reference clocks (e.g. GPS receiver), and manual input using wristwatch and keyboard. It can also operate as an NTPv4 (RFC 5905) server and peer to provide a time service to other computers in the network.

Chrony Man page: https://chrony-project.org/

### Install Chrony:
```bash
dnf install chrony -y
```

### Configure Chrony conf file:

Edit the /etc/chrony.conf file using a text editor like nano or vi. Ensure the following configuration options are set.

```bash
# chrony.conf
# Use Google's NTP server
server time.google.com iburst

# Local clock as a fallback source
server 127.127.1.0 iburst

# Set the time zone
rtcsync

maxdistance 16.0

# Driftfile
driftfile /var/lib/chrony/drift

# Allow larger adjustments to the system clock
makestep 1.0 3

# Leap seconds configuration
leapsec tz right/UTC

# Uncomment and adjust the following line to allow systems in the XXX.XXX.XXX.XXX/XX subnet to access this client.
# Ensure to modify the XXX.XXX.XXX.XXX/XX part based on your network configuration.
# allow XXX.XXX.XXX.XXX/XX

# Logging
log tracking measurements statistics
logdir /var/log/chrony
```
For more details on configuring Chrony, you can refer to the Configuration Reference for the version of [Chrony Documentation](https://chrony-project.org/documentation.html) that matches the version you have installed.


### Restart Chrony service, so the new configuration is used:
```bash
systemctl restart chronyd
```

## Further reading

<u>More from the Desktop series:</u>

- [Multimedia Codecs Installation Guide](desktopseries01) 
- [Multimedia Codecs & Libraries for VFX Workstation Installation Guide](desktopseries02)
- [Change from Wayland to Xorg Installation Guide](desktopseries03)
- [Earlyoom (Out of Memory) Installation Guide](desktopseries04)
- [Journalctl Persistent Installation Guide](desktopseries05)

<u>Related articles:</u>

- [Firewalld - A Beginner's Guide](../system/SystemSeriesA02)
- [NVIDIA Driver Installation Guides](/series/nvidia/)   
- [Application Streams](../system/SystemSeriesA01)