---
title: "AlmaLinux Migration Guide"
---

# AlmaLinux Migration Guide 

This guide describes how to convert your operating system to AlmaLinux using the [AlmaLinux Migration tool](https://github.com/AlmaLinux/almalinux-deploy).

What OSes can be converted:
* CentOS 8, 9
* CentOS Stream 8, 9
* Oracle Linux 8, 9
* RHEL 8, 9
* Rocky Linux 8, 9
* Virtuozzo Linux (VZLinux) 8, 9

This tool also supports cPanel, Plesk and DirectAdmin panels. 

## How to Migrate

The minimal supported version of EL8 operating systems is 8.4. In case your OS version is lower, please, upgrade it.

:::tip
It's recommended to have a backup or snapshot of your system. There'll be a restore point if something will go wrong. 
:::

Follow these steps to convert your EL8 or EL9 system to AlmaLinux using CLI: 

* Run the following command to update your operating system if needed:
```
sudo dnf update -y
```

* Run the following command to download [almalinux-deploy.sh](https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh) script:
```
curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh
```
* Run the script:
```
sudo bash almalinux-deploy.sh
```
* Check the output for any errors. If the conversion went without any issues, you'll see that `Migration to AlmaLinux is completed` in the output.
* Reboot the system to boot with AlmaLinux kernel:
```
sudo reboot
```
* Ensure that your system was successfully converted:
    * Check the release file:
    ```
   $ cat /etc/redhat-release
   AlmaLinux release 8.7 (Stone Smilodon)
   ```
    * Check that the system boots with AlmaLinux kernel by default:
    ```
   $ sudo grubby --info DEFAULT | grep AlmaLinux
   title="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"
   ```

## Migrating from CentOS versions lower than 8.4

There are a few additional moments when you are converting your CentOS System.
CentOS 8.4 or 8.5 is required to convert to AlmaLinux. If your CentOS version is lower, it is recommended to update it to 8.5 before converting to AlmaLinux. Though, it's not necessary if your CentOS version is at least CentOS 8.4. 

* As of January 31, 2022, the CentOS 8 mirror lists are offline. To successfully perform `dnf update -y` you need to update your `dnf` config files to point to a valid mirror. You can use the following `sed` commands for convenience to restore dnf to a functional state that will let you update to 8.5 and subsequently AlmaLinux.
```
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[baseos\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/BaseOS/$basearch/os' /etc/yum.repos.d/CentOS-Linux-BaseOS.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[appstream\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/AppStream/$basearch/os' /etc/yum.repos.d/CentOS-Linux-AppStream.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[cr\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/ContinuousRelease/$basearch/os' /etc/yum.repos.d/CentOS-Linux-ContinuousRelease.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[devel\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/Devel/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Devel.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[extras\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/extras/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Extras.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[fasttrack\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/fasttrack/$basearch/os' /etc/yum.repos.d/CentOS-Linux-FastTrack.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[ha\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/HighAvailability/$basearch/os' /etc/yum.repos.d/CentOS-Linux-HighAvailability.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[plus\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/centosplus/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Plus.repo
sudo sed -i -e '/mirrorlist=http:\/\/mirrorlist.centos.org\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\/\/mirror.centos.org\/$contentdir\/$releasever\// s/^#*/#/' -e '/^\[powertools\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/PowerTools/$basearch/os' /etc/yum.repos.d/CentOS-Linux-PowerTools.repo
```
:::tip
Alternatively, you can use the `-f` flag to handle this for you when running the [almalinux-deploy.sh](https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh) script:
```
sudo bash almalinux-deploy.sh -f
```
:::

* Run the following command to update your operating system:
```
sudo dnf update -y
```

* Reboot the system after the updating:
```
sudo reboot
```

* Run the following command to download [almalinux-deploy.sh](https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh) script:
```
curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh
```

* Run the script:
```
sudo bash almalinux-deploy.sh
```

* Ensure that your system was successfully converted:
    * check the release file
    ```
   $ cat /etc/redhat-release
   AlmaLinux release 8.7 (Stone Smilodon)
   ```
    * check that the system boots with AlmaLinux kernel by default
    ```
   $ sudo grubby --info DEFAULT | grep AlmaLinux
   title="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"
   ```
## How to Contribute

Please, file your [bugs](https://github.com/AlmaLinux/almalinux-deploy/issues) and join us for discussions on [GitHub](https://github.com/AlmaLinux/almalinux-deploy/discussions) and on [AlmaLinux Chat on Mattermost](https://chat.almalinux.org/).

If you are interested in contributing, and learning more details about the technology stack of the tool and tests, please, visit the [repository](https://github.com/AlmaLinux/almalinux-deploy).
