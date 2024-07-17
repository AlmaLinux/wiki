---
title: ELevate Frequent Issues
---

###### last updated: 2024-07-08

# ELevate Frequent Issues

These are the ELevate project issues the AlmaLinux team and community are currently working on together. You can find here the most frequent problems and guidance steps on how to solve them.

## Leapp upgrade error caused by important modules from kernel drivers

Proceeding with the upgrade, you can get the "Detected loaded kernel drivers, which have been removed" error. 

The issue can be caused by the mentioned modules: 
* mptbase
* mptscsih 
* mptspi

Follow these steps to resolve the issue:

* First, you need to backup initramfs. Initramfs boots any Linux OS and mounts the root filesystem. It contains kernel modules and initial scripts. Use root or sudo user credential to run this command:

```
cp /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r).img.backup
```

* Use the Initramfs infrastructure `dracut` to include all drivers to build a generic initramfs:

```
dracut -N -f
```

* After the previous step is completed, run the `shutdown` command to stop the system. 

* Click *Virtual Machines* and choose the *Edit Settings* option and change SCSI Controller type to *VMware Paravirtual*. Save changes.

* Now, you can boot your system and run one more `dracut` command to regenerate initramfs. 

```
dracut -f --regenerate-all
```

## Leapp upgrade error "More space needed on the / filesystem"

If the `leapp upgrade` step fails with the "More space needed on the / filesystem" error, there could be two separate problems:
 1. Not enough free space on the /var partition. In that case, it is necessary to expand the `/var` partition:
    * For this purpose, we kindly ask you to search for a [suitable guide](https://docs.icdc.io/en/compute/faq/extenddisk/).
 2. For a partition that uses XFS, instruct `leapp` to use a bigger overlay file by setting the environment variable before running `leapp` command (default is 2048 MB):

## sssd fails after upgrade

After upgrading, there may be problems with sssd.

Follow these steps to resolve the issue:

* Delete all files in **/var/lib/sssd/db/**:

```
rm -f /var/lib/sssd/db/
```

* Restart sssd service: 

```
systemctl restart sssd
```

## ELevate fails due to initramfs missing a module

When upgrading a CentOS 7 machine to an EL8 derivative, after completing the `leapp upgrade` step the process can fail during reboot showing an initramfs error. This is possible due to the lack of support for certain drives in EL8 that were supported in EL7. 

:::warning
These steps are helpful at upgrading to AlmaLinux OS version **8.8** or a lower version if necessary. Once the upgrade is complete, you can upgrade your AlmaLinux system to the latest version **8.10** by running the following command:"
  ```
  dnf update
  ```
:::

To resolve this issue, please, follow the steps below: 
* Find out what module is missing. 
* Check if it's possible to use such a package from [elrepo.org](https://elrepo.org/wiki/doku.php?id=deviceids). In order not to get any dependency errors, we recommend looking for a package for EL version **8.8**. 
* For the same reason, we recommend upgrading your CentOS 7 machine to AlmaLinux OS version **8.8**. To do so, you need to navigate to the */etc/leapp/files/* directory and edit the **leapp_upgrade_repositories.repo** to lower the AlmaLinux version in `baseurl/mirror` to 8.8.
* If the package is present in ELRepo, modify the leapp code to add a needed driver to ELevate initramfs. 
    * Navigate to the */etc/leapp/files/* directory and add the ELRepo repository to the **leapp_upgrade_repositories.repo** file:
       ```
       [elrepo]
       name=ELRepo.org Community Enterprise Linux Repository - el8
       baseurl=http://elrepo.org/linux/elrepo/el8/$basearch/
               http://mirrors.coreix.net/elrepo/elrepo/el8/$basearch/
               http://mirror.rackspace.com/elrepo/elrepo/el8/$basearch/
               http://linux-mirrors.fnal.gov/linux/elrepo/elrepo/el8/$basearch/
       mirrorlist=http://mirrors.elrepo.org/mirrors-elrepo.el8
       enabled=1
       countme=1
       gpgcheck=1
       gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-elrepo.org
       ```
    * Navigate to the */usr/share/leapp-repository/repositories/system_upgrade/common/actors/targetuserspacecreator/libraries/* directory and modify the following line in the **userspacegen.py** file to contain kernel modules the needed driver: 
      ```
      self.packages = {'dnf', 'dnf-command(config-manager)', 'kernel-modules', 'needed_driver_name_version'}
      ```
      **An example for kmod-3w-sas:**
      ```
      self.packages = {'dnf', 'dnf-command(config-manager)', 'kernel-modules', 'kmod-3w-sas-3.26.02.000-10.el8_8.elrepo.x86_64'}
      ```
    * Navigate to the */etc/leapp/transaction/* directory to add the needed driver by writing its name and version to the **to_install** text file, for example: `kmod-3w-sas-3.26.02.000-10.el8_8.elrepo.x86_64`

## Known issues 

* For now, the ELevate project supports only CentOS repositories. It doesn't support other third-party (external) repositories.
* Some CentOS 7 packages can remain after the upgrade.

AlmaLinux Team is working hard to get a solution for these issues. Any contribution is valuable and helps us out. If you want to help and contribute, see [how to contribute](/elevate/#how-to-contribute) information. 

## Get Help 

For more help and assistance reach out to us on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
