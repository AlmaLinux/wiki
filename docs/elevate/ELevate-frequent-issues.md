---
title: ELevate Frequent Issues
---

# ELevate Frequent Issues

These are the ELevate project issues the AlmaLinux team and community are currently working on together. You can find here the most frequent problems and guidance steps on how to solve them.

## Leapp upgrade error caused by important modules from kernel drivers

Proceeding with migration, you can get the "Detected loaded kernel drivers, which have been removed" error. 

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

## Known issues 

* For now, the ELevate project supports only CentOS repositories. It doesn't support other third-party (external) repositories.
* Some CentOS 7 packages can remain after the upgrade.

AlmaLinux Team is working hard to get a solution for these issues. Any contribution is valuable and helps us out. If you want to help and contribute, see [how to conribute](/elevate/#how-to-contribute) information. 
