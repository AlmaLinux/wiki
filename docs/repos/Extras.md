---
title: 'Extra Repositories'
---
# Extra Repositories

## EPEL 

Extra Packages for Enterprise Linux or [EPEL](https://fedoraproject.org/wiki/EPEL) is a Fedora Special Interest Group that creates, maintains, and manages a high quality set of additional packages for Enterprise Linux. 
EPEL packages are usually based on their Fedora counterparts and will never conflict with or replace packages in the base Enterprise Linux distributions. EPEL uses much of the same infrastructure as Fedora, including buildsystem, bugzilla instance, updates manager, mirror manager and more.

| Repository | How to Enable |
| --- | --- |
| EPEL and CRB | # dnf install epel-release |

For more detailed information see the [EPEL Quickstart Guide](https://docs.fedoraproject.org/en-US/epel/).

:::tip
During the installation process, you might get a prompt to install a GPG key. Compare the key to the "Primary key fingerprint" (see ["Verify the downloaded ISO image checksum:"](../documentation/installation-guide.md#iso-verification)) and if the fingerprints match, type "y" to continue.
:::

:::tip
Most EPEL packages require packages from PowerTools/CRB repository as dependencies. Run the suitable command to enable the PowerTools/CRB repository:

**AlmaLinux OS 8**

```
dnf config-manager --set-enabled powertools
```

**AlmaLinux OS 9**
```
dnf config-manager --set-enabled crb
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
```
:::

## The ELRepo Project

[The ELRepo Project](http://elrepo.org) focuses on hardware related packages to enhance your experience with Enterprise Linux. This includes filesystem drivers, graphics drivers, network drivers, sound drivers, webcam and video drivers. Newer kernels, `kernel-ml` and `kernel-lt`, are also available.

| Repository | How to Enable |
| --- | --- |
| ELRepo | # dnf install elrepo-release |

## RPM Fusion
[RPM Fusion](https://rpmfusion.org/) provides software that RHEL and other Enterprise Linux distributions do not ship (like software codecs).

| Repository | How to Enable |
| --- | --- |
| ELRepo | See _[Installing EPEL and RPM Fusion](/documentation/epel-and-rpmfusion)_ |
