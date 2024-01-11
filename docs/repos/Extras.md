---
title: 'Extra Repositories'
---
# Extra Repositories

## EPEL 

Extra Packages for Enterprise Linux or [EPEL](https://fedoraproject.org/wiki/EPEL) is a Fedora Special Interest Group that creates, maintains, and manages a high quality set of additional packages for Enterprise Linux. 
EPEL packages are usually based on their Fedora counterparts and will never conflict with or replace packages in the base Enterprise Linux distributions. EPEL uses much of the same infrastructure as Fedora, including buildsystem, bugzilla instance, updates manager, mirror manager and more.

| Repository | How to Enable |
| --- | --- |
| EPEL | # dnf install epel-release |

:::tip
Most EPEL packages require packages from PowerTools/CRB repository as dependencies. Run the suitable command to enable the PowerTools/CRB repository:

**AlmaLinux OS 8**

```
dnf config-manager --set-enabled powertools
```

**AlmaLinux OS 9**
```
dnf config-manager --set-enabled crb
```
:::

## The ELRepo Project

[The ELRepo Project](http://elrepo.org) focuses on hardware related packages to enhance your experience with Enterprise Linux. This includes filesystem drivers, graphics drivers, network drivers, sound drivers, webcam and video drivers. Newer kernels, `kernel-ml` and `kernel-lt`, are also available.

| Repository | How to Enable |
| --- | --- |
| ELRepo | # dnf install elrepo-release |
