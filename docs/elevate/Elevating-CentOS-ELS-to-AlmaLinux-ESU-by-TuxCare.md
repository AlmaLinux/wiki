---
title: "Elevating CentOS ELS to AlmaLinux ESU"
---

<!-- markdownlint-disable MD040 MD051 -->

###### last updated: 2025-02-26

This guide contains steps on how to migrate from TuxCare's CentOS 7 or Stream 8 [Endless Lifecycle Support](https://tuxcare.com/endless-lifecycle-support/centos-stream-8-eol-support/) products, to their AlmaLinux 9.2 [Extended Security Updates](https://tuxcare.com/fips-for-almalinux/) product.

You will require a license key from [https://tuxcare.com/buy/almalinux/](https://tuxcare.com/buy/almalinux/) or talk to your Account Manager about an ELS-to-ESU migration bundle offer.

::: danger
Ensure that you have a non-root user who can SSH and elevate privileges to root using su/sudo as this process will disable root SSH login. FIPS mode will also disable non-RSA SSH keys. Console access is recommended.
:::

Choose **one** of the migrations below based on your CentOS version. Once you have migrated to AlmaLinux 8, the instructions for getting to 9.2 and enabling ESU/FIPS are the same.

## Migrate CentOS 7.9 ELS to AlmaLinux 8.10

```
# update then disable els
yum -y update
dnf config-manager --set-disabled centos7*

# install elevate 7to8
yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el7.noarch.rpm
yum install -y leapp-upgrade leapp-data-almalinux
leapp preupgrade
leapp answer --section remove_pam_pkcs11_module_check.confirm=True
leapp upgrade
reboot
```

You will now be running AlmaLinux 8.10 and can proceed to [Upgrade AlmaLinux 8.10 to 9.2](#upgrade-almalinux-8-10-to-9-2)

## Migrate CentOS Stream 8 ELS to AlmaLinux 8.10

```
# update then disable els
dnf -y upgrade
dnf config-manager --set-disabled centos8stream-els

# install almalinux-deploy
curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh
bash almalinux-deploy.sh -d
reboot
```

## Upgrade AlmaLinux 8.10 to 9.2

```
# clean up
sed -i '/^exclude=.*/d' /etc/yum.conf /etc/dnf/dnf.conf
dnf -y remove *leapp* elevate-release els-define
rm -rf  /lib/modules/3.10*

# disable root ssh in a portable way
echo PermitRootLogin no | sudo tee -a /etc/ssh/sshd_config
sed -i 's/^PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config

# install elevate 8to9
dnf -y install https://repo.almalinux.org/elevate/elevate-release-latest-el8.noarch.rpm
dnf -y install leapp-upgrade leapp-data-almalinux

# upgrade specifically to 9.2
export LEAPP_DISABLE_NET_NAMING_SCHEMES=1
leapp preupgrade --target=9.2
leapp upgrade --target=9.2
reboot
```

## Enable AlmaLinux 9.2 ESU repositories and FIPS mode

```
# clean up
sed -i '/^exclude=.*/d' /etc/yum.conf /etc/dnf/dnf.conf
dnf -y remove *leapp* elevate-release kernel-*.el8*

# enable esu+fips
dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-9.2.$(uname -i).rpm
tuxctl --fips --license-key ESU-xxxxxxxxxxxxxxx
dnf -y install kernel-5.14.0-284.11*
dnf -y upgrade
fips-mode-setup --enable
reboot
```

See also: [https://docs.tuxcare.com/enterprise-support-for-almalinux/#enabling-fips-140-3-mode](https://docs.tuxcare.com/enterprise-support-for-almalinux/#enabling-fips-140-3-mode)
