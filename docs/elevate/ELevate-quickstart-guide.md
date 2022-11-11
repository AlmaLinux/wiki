---
title: "ELevate Quickstart Guide"
---

# ELevate Quickstart Guide

::: warning
Before beginnning, we **HIGHLY** recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify that migration worked as expected before you attempt to migrate any production system. Please report any issues encountered to the [AlmaLinux Bug Tracker](https://bugs.almalinux.org) and/or [AlmaLinux Chat Migration Channel](https://chat.almalinux.org/almalinux/channels/migration)
:::

:::danger
The ELevate project supports only CentOS repositories. It doesn't support other external repositories. Please, check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues.
:::

This guide contains steps on how to upgrade an Enterprise Linux 7 to RHEL8 derivatives such as AlmaLinux, EuroLinux, CentOS Stream, Oracle, and Rocky Linux. 

In accordance with the best practices, please make a backup of the system you want to upgrade.

Make sure the following requirements have been met before running the script:

- you run CentOS 7, EuroLinux 7 or Red Hat Enterprise Linux 7
- if the system is installed in EFI mode, you migrate to AlmaLinux only and not any other distribution
- you don't run the system in FIPS mode
- you have Secure Boot disabled
- you don't need to have SELinux enabled for version 8

* Fully updated system is required to accomplish the upgrade. So, install the latest updates first, and reboot.
```
sudo yum update -y
sudo reboot
```

* If you have SELinux enabled, switch to permissive mode:

```
sed -i 's@SELINUX=enforcing@SELINUX=permissive@g' /etc/selinux/config
setenforce 0
```

* If you ELevate a distribution other than CentOS, make sure the CentOS Extras repository is available:

```
echo "Grabbing CentOS 7 GPG keys..."
curl "https://vault.centos.org/RPM-GPG-KEY-CentOS-7" > "/etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7" && \

echo "Making sure CentOS Extras repo is available..."
cat > "/etc/yum.repos.d/autoelevate-centos-extras.repo" <<-'EOF'
[autoelevate-centos-7-extras]
name=AutoELevate - CentOS 7 Extras
baseurl=http://mirror.centos.org/centos/7/extras/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
EOF
```

* Furthermore, a system might need a registration to download certain packages. Let's check the registration status and deal with this problem:

```
if [ $(which rhn_check) ]; then
  echo "This system has rhn_check installed. Checking for consumed subscriptions..."
  rhn_check
  if [ $? -ne 0 ] ; then
    echo "This system is not registered. Adding CentOS 7 Base repo for AutoELevate..."
    cat > "/etc/yum.repos.d/autoelevate-centos-base.repo" <<-'EOF'
[autoelevate-centos-7-base]
name=AutoELevate - CentOS 7 Base
baseurl=http://mirror.centos.org/centos/7/os/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
EOF
  fi
fi
```

* Install `elevate-release` package with the project repo and GPG key.
```
sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el7.noarch.rpm
```


* Install leapp packages and migration data for the OS you want to upgrade. Possible options are:
    * leapp-data-almalinux
    * leapp-data-centos
    * leapp-data-eurolinux
    * leapp-data-oraclelinux
    * leapp-data-rocky
```
sudo yum install -y leapp-upgrade leapp-data-almalinux
```

* Start a preupgrade check. In the meanwhile, the Leapp utility creates a special */var/log/leapp/leapp-report.txt* file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.

:::warning
Preupgrade check will fail as the default Enterprise Linux 7 doesn't meet all requirements for migration.
:::

```
sudo leapp preupgrade
```

This summary report will help you get a picture of whether it is possible to continue the upgrade.

:::tip
In certain configurations, Leapp generates */var/log/leapp/answerfile* with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
:::

* The following fixes from *the /var/log/leapp/leapp-report.txt* file are mandatory, but you can also review the rest of them if needed.
```
sudo rmmod pata_acpi
echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
```

* If you run VMware with a SCSI device, remove an existing SCSI disk device in the VMware virtual machine settings.  Next, please add an IDE device and point it to an existing virtual disk that was used by the virtual machine - usually this will be the file '<virtual machine name>.vmdk'.  After the migration is done and the system boots, you can optionally change the disk device type back to SCSI (or NVMe, which is recommended by VMware software for Enterprise Linux 8). Then also remove the following modules:

```
sudo rmmod floppy mptbase mptscsih mptspi
```

Check the [ELevate Frequent Issues](/elevate/ELevate-frequent-issues) page for known and frequent issues and guidance steps to solve them.

* Start an upgrade. You'll be offered to reboot the system after this process is completed.
```
sudo leapp upgrade
sudo reboot
```

* A new entry in GRUB called `ELevate-Upgrade-Initramfs` will appear. The system will be automatically booted into it.
   See how the update process goes in the console.

* After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need.
```
cat /etc/redhat-release
cat /etc/os-release
rpm -qa | grep centos
rpm -qa | grep el7
```

### Demo Video

Check Demo of a CentOS 7.x to AlmaLinux 8.x migration using the software and data provided by the AlmaLinux ELevate Project. 

<iframe width="856" height="482" src="https://www.youtube.com/embed/Vzl9QxG5mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

