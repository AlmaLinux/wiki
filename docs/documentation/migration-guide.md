---
title: 'Migration Guide'
---

# AlmaLinux Migration Guide

This guide describes how to convert your operating system to AlmaLinux using the [AlmaLinux Migration tool](https://github.com/AlmaLinux/almalinux-deploy).

What OSes can be converted:
* CentOS 8
* CentOS Stream 8, 9
* Miracle Linux 8, 9
* Oracle Linux 8, 9
* RHEL 8, 9
* Rocky Linux 8, 9
* Virtuozzo Linux (VZLinux) 8, 9

This tool also supports cPanel, Plesk and DirectAdmin panels.

The minimal supported version of EL8 operating systems is 8.4. In case your OS version is lower, please, upgrade it.

:::tip
It's recommended to have a backup or snapshot of your system. There'll be a restore point if something will go wrong.
:::

::: warning
Make sure you are using reliable console access to your system. It's recommended the migration tool is run from inside main console or via ssh.
:::

## Migrate using AlmaLinux public repositories (General purposes)

:::tip
For systems with an access to internet
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

## Migrating air-gapped machine

This guide describes steps to be performed to migrate an air-gapped machine that has no connection to the Internet, but has network access to a private mirror, or access to data storage device with a mirror

The process involves at least two hosts:
 * One with Internet access to be able to create local AlmaLinux mirrors, or with a data storage device where mirror will be placed
 * The machine which will be migrated

### Create a local, private AlmaLinux mirror

To migrate an air-gapped machine, you have to create a local mirror to receive updates. For this purpose, the recommended storage space is at least 500GB per major version.

**These steps are to be performed on a host with Internet access.**

The `rsync`  tool can be used to create a mirror.
* Synchronize with the official AlmaLinux mirror via `rsync`:
   ```shell
   /usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/
   ```
* If needed, create a cron task to sync your mirror periodically (we recommend updating the mirror every 3 hours):
   ```shell
   0 */3 * * * sleep $(((RANDOM\%3500)+1)) && /usr/bin/flock -n /var/run/almalinux_rsync.lock -c "/usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/"
   ```

  :::warning
  Don't forget to replace /example-almalinux-mirror/ directory with the directory you need.
  :::

  The `/example-almalinux-mirror/` can be on external data storage device, so the device can later be used on systems without even an access to the mirror you created.

### If there's neither access to a private mirror nor the Internet

You'll have to use a data storage device with local, private mirror created with the steps above. Make the device with the mirror available directly on migrating system, for example in `/opt` directory.

Please make sure the mirror on the device matches AlmaLinux repository directories structure. Like this one, for AlmaLinux 8, x86-64:
```
/opt
├── almalinux-release-latest-8.x86_64.rpm
├── RPM-GPG-KEY-AlmaLinux-8
└── 8
    ├── AppStream
    │   └── x86_64
    │       └── os
    │           ├── Packages
    │           └── repodata
    ├── BaseOS
    │   └── x86_64
    │       └── os
    │           ├── Packages
    │           └── repodata
    ├── PowerTools
    .   └── x86_64
    .       └── os
    .           ├── Packages
                └── repodata
```
where:
 * `Packages` - folder with corresponded repository all packages
 * `repodata` - folder with repository metadata

Note, it's mandatory you download `almalinux-release` package and public GPG key corresponding to your release, like `almalinux-release-latest-8.x86_64.rpm` and `RPM-GPG-KEY-AlmaLinux-8` for AlmaLinux 8 x86_64, from [https://repo.almalinux.org/almalinux/](https://repo.almalinux.org/almalinux/) and place them into the root of `/opt`

### Do migration

**These steps are to be performed on a host which will be migrated.**

Follow these steps to convert your EL8 or EL9 system to AlmaLinux using CLI:

* Your operating system should have all most recent packages (if possible):

* The [almalinux-deploy.sh](https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh) script should be present on your system

* Run the script as one of the following:

    * AlmaLinux repositories local mirror is available, for example at http://mirror.example.com/example-almalinux-mirror
    ```
    sudo bash almalinux-deploy.sh --local-repo=http://mirror.example.com/example-almalinux-mirror
    ```

    * No access to private mirror, it is on local file-system, for example on `/opt` directory
    ```
    sudo bash almalinux-deploy.sh --local-repo=file:///opt
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

## Get Help

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
