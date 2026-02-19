---
title: ELevate Frequent Issues
---

# ELevate Frequent Issues

These are the ELevate project issues the AlmaLinux team and community are currently working on together. You can find here the most frequent problems and guidance steps on how to solve them.

## Leapp upgrade error caused by important modules from kernel drivers

Proceeding with the upgrade, you can get the "Detected loaded kernel drivers, which have been removed" error.

The issue can be caused by the mentioned modules:

- mptbase
- mptscsih
- mptspi

Follow these steps to resolve the issue:

- First, you need to backup initramfs. Initramfs boots any Linux OS and mounts the root filesystem. It contains kernel modules and initial scripts. Use root or sudo user credential to run this command:

```
cp /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r).img.backup
```

- Use the Initramfs infrastructure `dracut` to include all drivers to build a generic initramfs:

```
dracut -N -f
```

- After the previous step is completed, run the `shutdown` command to stop the system.

- Click _Virtual Machines_ and choose the _Edit Settings_ option and change SCSI Controller type to _VMware Paravirtual_. Save changes.

- Now, you can boot your system and run one more `dracut` command to regenerate initramfs.

```
dracut -f --regenerate-all
```

## Leapp upgrade error "More space needed on the / filesystem"

If the `leapp upgrade` step fails with the "More space needed on the / filesystem" error, there could be two separate problems:

1.  Not enough free space on the /var partition. In that case, it is necessary to expand the `/var` partition:
    - For this purpose, we kindly ask you to search for a [suitable guide](https://docs.icdc.io/en/compute/faq/extenddisk/).
2.  For a partition that uses XFS, instruct `leapp` to use a bigger overlay file by setting the environment variable before running `leapp` command (default is 2048 MB) by setting the LEAPP_OVL_SIZE environment variable:

```
export LEAPP_OVL_SIZE=4096
```

## sssd fails after upgrade

After upgrading, there may be problems with sssd.

Follow these steps to resolve the issue:

- Delete all files in **/var/lib/sssd/db/**:

```
rm -f /var/lib/sssd/db/
```

- Restart sssd service:

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

- Find out what module is missing.
- Check if it's possible to use such a package from [elrepo.org](https://elrepo.org/wiki/doku.php?id=deviceids). In order not to get any dependency errors, we recommend looking for a package for EL version **8.8**.
- For the same reason, we recommend upgrading your CentOS 7 machine to AlmaLinux OS version **8.8**. To do so, you need to navigate to the _/etc/leapp/files/_ directory and edit the **leapp_upgrade_repositories.repo** to lower the AlmaLinux version in `baseurl/mirror` to 8.8.
- If the package is present in ELRepo, modify the leapp code to add a needed driver to ELevate initramfs.
  - Navigate to the _/etc/leapp/files/_ directory and add the ELRepo repository to the **leapp_upgrade_repositories.repo** file:
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
  - Navigate to the _/usr/share/leapp-repository/repositories/system_upgrade/common/actors/targetuserspacecreator/libraries/_ directory and modify the following line in the **userspacegen.py** file to contain kernel modules the needed driver:
    ```
    self.packages = {'dnf', 'dnf-command(config-manager)', 'kernel-modules', 'needed_driver_name_version'}
    ```
    **An example for kmod-3w-sas:**
    ```
    self.packages = {'dnf', 'dnf-command(config-manager)', 'kernel-modules', 'kmod-3w-sas-3.26.02.000-10.el8_8.elrepo.x86_64'}
    ```
  - Navigate to the _/etc/leapp/transaction/_ directory to add the needed driver by writing its name and version to the **to_install** text file, for example: `kmod-3w-sas-3.26.02.000-10.el8_8.elrepo.x86_64`

## dnf Updates Fail after ELevate Upgrade

After the ELevate upgrade process has completed, you may encounter an error like the following when attempting to complete a dnf update...

```
Error:
Problem: package nss_db-2.34-100.el9_4.2.x86_64 from @System requires glibc(x86-64) = 2.34-100.el9_4.2, but none of the providers can be installed

cannot install both glibc-2.34-100.el9_4.2.alma.2.x86_64 from baseos and glibc-2.34-100.el9_4.2.x86_64 from @System
cannot install both glibc-2.34-100.el9_4.2.x86_64 from baseos and glibc-2.34-100.el9_4.2.alma.2.x86_64 from baseos
cannot install the best update candidate for package glibc-2.34-100.el9_4.2.x86_64
problem with installed package nss_db-2.34-100.el9_4.2.x86_64
```

The cause of this error is that during the upgrade process, ELevate uses a multitude of repositories to migrate and upgrade the system. Among them is the usage of the CRB repository. Importantly, if the CRB repository was not enabled on the system prior to using ELevate, it will remain disabled after the upgrade. This can cause future system updates via dnf to fail as some packages/package dependencies now depend on the CRB repository.

While this is one of the most commonly encountered post-ELevate dnf repository related issues, additional or alternative issues may arise from similarly absent dnf repositories that are responsible for dependency resolution.

To enable CRB or any other AlmaLinux repository, please reference [this article](/repos/AlmaLinux.html)

## Error Detected While Processing /etc/virc

When performing a progressive upgrade from CentOS 7 to AlmaLinux 9, you may encounter the following issue on EL 9 while using `vi` (not `vim`):

```
Error detected while processing /etc/virc:
line   40:
E319: Sorry, the command is not available in this version: let skip_defaults_vim=1
```

To fix this error:

- Open `/etc/virc` file using a text editor of your choice.
- Search for the line containing the text _content added by Leapp_.
- Locate and remove the following line:
  ```
  let skip_defaults_vim=1
  ```
- Save the file and exit the editor.

After making these changes, the error should no longer appear when using `vi`.

## Actor `target_userspace_creator` failed: Could not resolve host: mirrors.almalinux.org

`leapp preupgrade` fails with:

```
2026-02-19 17:01:38.875801 [ERROR] Actor: target_userspace_creator
Message: Unable to install RHEL 10 userspace packages.
...
Error: Failed to download metadata for repo 'almalinux10-baseos': Cannot prepare internal mirrorlist: Curl error (6): Couldn't resolve host name for https://mirrors.almalinux.org/mirrorlist/10.0/baseos [Could not resolve host: mirrors.almalinux.org]
```

**Reason:** `/etc/resolv.conf` is a symbolic link instead of a regular file, as shown by:

```
$ ls -la /etc/resolv.conf
lrwxrwxrwx. 1 root root 32 Feb 19 17:00 /etc/resolv.conf -> /run/systemd/resolve/resolv.conf
```

**Explanation:** This issue is caused by a _symlink-vs-tmpfs_ ordering conflict between the source overlay and `systemd-nspawn`, which creates a minimal environment (container) from which the real upgrade will run. The symlink cannot be properly resolved within the container environment.

**Workaround:** Convert `/etc/resolv.conf` from a symbolic link to a regular file. You may copy the content from the target file to create a regular file.

After converting, run `leapp preupgrade` again.

## Known issues

AlmaLinux Team is working hard to get a solution for these issues. Any contribution is valuable and helps us out. If you want to help and contribute, see [how to contribute](/elevate/#how-to-contribute) information.

- Some CentOS 7 packages can remain after the upgrade.

## Get Help

For more help and assistance reach out to us on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
