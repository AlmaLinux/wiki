---
title: "Installing EPEL and RPM Fusion"
---

# Installing EPEL and RPM Fusion

This guide describes how to install _Extra Packages for Enterprise Linux (EPEL)_ and _RPM Fusion_, two software repositories that contain software that is not included by AlmaLinux (like codecs).

:::warning
These third-party software repositories are not supported by AlmaLinux's [ELevate Project](../elevate/).
:::

## Step 1: Install EPEL. 
Installing EPEL is required for RPM Fusion.
1. Follow the instructions [described here](../repos/Extras.md) to install EPEL.

	
## Step 2: Install (and verify) the RPM Fusion GPG keys
Downloading and verifying the RPM Fusion GPG keys ensures that the packages you install are from RPM Fusion and not altered (by accident or by malicious intent).
1. Download the _distribution-gpg-keys_ package. 
```bash
$ sudo dnf install distribution-gpg-keys
```
- If you get a prompt to import a GPG key, compare the key you recived to [Fedora's package signing keys](https://fedoraproject.org/security/). Make sure the key on the webpage is the correct EPEL version as the one described on the userid, and make sure the fingerprints match.
2. Import the RPM Fusion keys with `rpmkeys`
```bash
# RPM Fusion (free packages)
$ sudo rpmkeys --import /usr/share/distribution-gpg-keys/rpmfusion/RPM-GPG-KEY-rpmfusion-free-el-$(rpm -E %rhel)
# RPM Fusion (nonfree packages)
$ sudo rpmkeys --import /usr/share/distribution-gpg-keys/rpmfusion/RPM-GPG-KEY-rpmfusion-nonfree-el-$(rpm -E %rhel)
```
3. (Optional) Check that the GPG keys match the one on the [RPM Fusion keys page](https://rpmfusion.org/keys). (It is in the section labeled "Currently Used Keys".) Use the commands below to show the keys that were imported and compare them to the one in RPM Fusion.
```bash
# RPM Fusion (free packages)
$ gpg --show-keys --with-fingerprint /usr/share/distribution-gpg-keys/rpmfusion/RPM-GPG-KEY-rpmfusion-free-el-$(rpm -E %rhel)
# RPM Fusion (nonfree packages)
$ gpg --show-keys --with-fingerprint /usr/share/distribution-gpg-keys/rpmfusion/RPM-GPG-KEY-rpmfusion-nonfree-el-$(rpm -E %rhel)
```

## Step 3: Install RPM Fusion
Enter the command below.
```bash
$ sudo dnf --setopt=localpkg_gpgcheck=1 install  https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-$(rpm -E %rhel).noarch.rpm https://mirrors.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-$(rpm -E %rhel).noarch.rpm
```
If the installation fails, this may mean that the GPG keys imported earlier do not match the signiture of the RPM Fusion repositories. If this occurs, retry step 2.3 to see if you have the correct GPG keys. 
