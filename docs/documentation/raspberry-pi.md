---
title: "Raspberry Pi"
---

# Raspberry Pi

## About Raspberry Pi

[Raspberry Pi](https://www.raspberrypi.org/) is a tiny computer used mainly for learning computing and programming. However, you may need a connection to a monitor and a keyboard, depending on your project. Raspberry Pi can run different operating systems, including AlmaLinux OS. AlmaLinux OS has been tested on Raspberry Pi 3 and 4.

## Where to get the image and guidance steps

The Raspberry Pi image can be found on [repo.almalinux.org](https://repo.almalinux.org/rpi/).

Raspberry Pi *Quickstart* and *After Installation* instructions with videos can be found in the [GitHub repository](https://github.com/AlmaLinux/raspberry-pi). There are also steps how to get GNOME working and connect Wi-Fi.

## Configuration using cloud-init

AlmaLinux Raspberry Pi image now supports [cloud-init](https://cloudinit.readthedocs.io/en/latest/) to perform early initialization.
This page describes some typical examples to setup AlmaLinux Raspberry Pi image. See [the cloud-init official documentation](https://cloudinit.readthedocs.io/en/latest/index.html) for further information.

To configure early initialization, modify `user-data` file in FAT boot volume named `CIDATA` (the same location where `config.txt` exists). Please note that cloud-init usually only works at very first boot so modification on `user-data` file must be done before inserting SD card and power on your Raspberry Pi.


### Add SSH public key to default user

The default user is `almalinux`. Add your SSH public key to enable to login to your Raspberry Pi.

```diff
     ssh_authorized_keys:
       # Put here your ssh public keys
       #- ssh-ed25519 AAAAC3Nz...
+      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQ...
```


### Change default user's password

Specify hashed password like this. Use `mkpasswd -m sha-512` command to generate a hashed password.

```diff
   - name: almalinux
     groups: [ adm, systemd-journal ]
     sudo: [ "ALL=(ALL) NOPASSWD:ALL" ]
     lock_passwd: false
+    passwd: "$6$hjdBm161zuYLfb9.$jkJkq5pQDkFvWPeJhnon9xHIX93SgLTNLsyQcddWJLcQGcM8qHkxDztbwt1DzTP6dmlQ3J.AA6h4JeGaVg.pS1"
     ssh_authorized_keys:
       # Put here your ssh public keys
       #- ssh-ed25519 AAAAC3Nz...
```
###  Enable SSH password authentication

Change `ssh_pwauth` to `true` to allow SSH password authentication. This does not enable password login for `root` user.

```diff
-ssh_pwauth: false
+ssh_pwauth: true
```

### Network configuration: wired network with a static IPv4 address

Put `network-config` file in the same location as `user-data`. The following example assigns a static IPv4 address to `eth0` interface.

```yaml
version: 2

ethernets:
  eth0:
    dhcp4: false
    optional: true
    addresses:
      - 192.168.1.99/24
    gateway4: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 8.8.4.4
```

### Network configuration: Wi-Fi with a dynamic IP address

Generally, the following `network-config` configuration enables to connect to Wi-Fi however this is not supported in AlmaLinux.

```yaml
version: 2

wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      "Wi-Fi_SSID":
        password: "Wi-Fi_PreSharedKey"
```

Add the following two lines at the bottom of `user-data` instead (example is diff style).

```diff
+runcmd:
+  - nmcli dev wifi connect "Wi-Fi_SSID" password "Wi-Fi_PreSharedKey"
```

## How to contribute

You can send all the bugs you may see on [bugs.almalinux.org](https://bugs.almalinux.org ).

Join the [Community Chat](https://chat.almalinux.org/) if you want to help and contribute or get any assistance.
