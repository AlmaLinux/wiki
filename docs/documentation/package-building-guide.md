---
title: Package Building Guide
---

# AlmaLinux Package Building Guide

This guide contains step-by-step instructions on how to build for AlmaLinux packages for different architectures. It also includes some background information about the mock tool, setup instructions, and some examples. These details can be helpful for the building packages for the AlmaLinux project.

## About `mock`

[Mock](https://rpm-software-management.github.io/mock/) is a tool for building RPM packages. It allows you to build packages for multiple architectures and different versions of RPM-based systems. It's possible to use mock to build packages for AlmaLinux OS as well.

This guide contains steps on how to build packages for AlmaLinux for different architectures.

The mock tool has such advantages as:

- Mock creates a clean environment and clears it after the process is completed;
- It is possible to build packages for different architectures and distributions with mock;
- Mock doesn't require installing many development packages and tools.

The mock tool already contains config files for x86_64 and aarch64 architectures. You can find them in the `/etc/mock/` directory.

![image](/images/building-packages-guide_etc-mock.png)

:::warning
Mock doesn't have a config file to build i686 packages. So you have to create a config yourselves to make that possible.
:::

Mock rebuilds RPMs from source RPMs. You have to download source RPMs in advance. All packages are available at [repo.almalinux.org](https://repo.almalinux.org/).

Full package name contains `package name`, `version`, `release` and `architecture`. For example, in **zlib-1.2.11-17.el8.src.rpm** `package name` is **zlib**, **1.2.11** is `version`, **17.el8** is `release`, and **src** for `architecture` but it indicates that it's an RPM source package.

## Setup mock and rpm-build

- First step is to install EPEL repository to your system:

```
sudo dnf install -y epel-release
```

:::tip
Get more information about [AlmaLinux supports EPEL and other repositories](/repos/Extras) on AlmaLinux wiki.
:::

- After EPEL installation is completed, you can install the mock tool:

```
sudo dnf install -y mock rpm-build
```

- Run the following command to be added to the mock group. That is necessary as you are going to use mock to build packages:

```
sudo usermod -a -G mock username
```

## Building packages from SRPMS

### Instruction if changes are needed

These steps allow you to make some changes before building the package.

- Once you've [installed mock and put the user in the mock group](#setup-mock), you need to download a package you want to build from [repo.almalinux.org](https://repo.almalinux.org/). Use the `wget` command with the URL of the package. The downloaded package will appear in your home directory unless you specify.

- Unpack the package and create directory structure using `rpm -i` command:

```
rpm -i ./fullpackagename.src.rpm
```

This command creates your workplace directory structure `rpmbuild`. There are two folders for now: SOURCES and SPECS. The purpose of the SOURCES directory is to download the source tarballs into this directory. SPECS directory contains `.spec` files which have package meta information and build instructions.

:::tip
Now is the right time to make some changes, if needed, before building a package.
:::

- Switch to SPECS directory to prepare the source using rpmbuild, the -bs flag, and specifying the spec filename. Some more directories are created:
  - BUILD has unpacked sources that get compiled in this directory;
  - BUILDROOT is used for copied files during the install phase;
  - RPMS has the created rpms;
  - SRPMS has a `.src.rpm` with a spec file and the sources.

```
rpmbuild -bs packagename.spec
```

![images](/images/building-packages-guide_rpmbuild.png)

Switch to the SRPMS directory to build the package. The next step depends on what architecture you are building packages.

#### x86_64

Use the `almalinux-8-x86_64.cfg` file that mock already has to build packages.

Run the following command to build the package:

```
mock -r almalinux-8-x86_64 --rebuild fullpackagename.src.rpm
```

Here is an example of what you can see as a building process:

```
INFO: mock.py version 2.12 starting (python version = 3.6.8, NVR = mock-2.12-1.el8)...
Start(bootstrap): init plugins
...
Finish(bootstrap): chroot init
Start: chroot init

...

Start: dnf update
...
AlmaLinux 8 - AppStream                                                     2.2 MB/s | 8.0 MB     00:03
AlmaLinux 8 - PowerTools                                                    6.9 kB/s | 4.7 kB     00:00
AlmaLinux 8 - PowerTools                                                    866 kB/s | 2.4 MB     00:02
AlmaLinux 8 - Extras                                                        5.2 kB/s | 3.9 kB     00:00
AlmaLinux 8 - Extras                                                        7.3 kB/s |  12 kB     00:01
Dependencies resolved.
============================================================================================================
 Package                            Architecture  Version                            Repository        Size
============================================================================================================
Upgrading:
 almalinux-release                  x86_64        8.5-3.el8                          baseos            24 k
 annobin                            x86_64        9.72-1.el8_5.2                     appstream        110 k
 bash                               x86_64        4.4.20-2.el8                       baseos           1.5 M
 ...                      baseos           1.2 M
 sqlite-libs                        x86_64        3.26.0-15.el8                      baseos           580 k
 systemd-libs                       x86_64        239-51.el8                         baseos           1.1 M
 tpm2-tss                           x86_64        2.3.2-4.el8                        baseos           274 k
 util-linux                         x86_64        2.32.1-28.el8                      baseos           2.5 M
 which                              x86_64        2.21-16.el8                        baseos            48 k

Transaction Summary
============================================================================================================
Upgrade  74 Packages

Total download size: 133 M
Downloading Packages:
AlmaLinux 8 - AppStream           195% [==================================================================] done.B/s | 1.2 kB     --:-- ETA
(1/74): almalinux-release-8.5-3.el8.x86_64.rpm                              244 kB/s |  24 kB     00:00
(2/74): chkconfig-1.19.1-1.el8.x86_64.rpm                                   486 kB/s | 197 kB     00:00
...
(71/74): qt5-srpm-macros-5.15.2-1.el8.noarch.rpm                             37 kB/s | 9.5 kB     00:00
(72/74): rpm-build-4.14.3-19.el8.x86_64.rpm                                 168 kB/s | 172 kB     00:01
(73/74): gcc-c++-8.5.0-3.el8.alma.x86_64.rpm                                611 kB/s |  12 MB     00:20
(74/74): gcc-8.5.0-3.el8.alma.x86_64.rpm                                    783 kB/s |  23 MB     00:30
------------------------------------------------------------------------------------------------------------
Total                                                                       2.2 MB/s | 133 MB     01:00
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Running scriptlet: filesystem-3.8-6.el8.x86_64                                                        1/1
  Preparing        :                                                                                    1/1
  Upgrading        : libgcc-8.5.0-3.el8.alma.x86_64                                                   1/148
  Running scriptlet: libgcc-8.5.0-3.el8.alma.x86_64                                                   1/148
  Upgrading        : crypto-policies-20210617-1.gitc776d3e.el8.noarch                                 2/148
  ...
  Cleanup          : ncurses-base-6.1-7.20180224.el8.noarch                                         147/148
  Cleanup          : libgcc-8.4.1-1.el8.alma.x86_64                                                 148/148
  ...
  Verifying        : almalinux-release-8.5-3.el8.x86_64                                               1/148
  Verifying        : almalinux-release-8.4-3.el8.x86_64                                               2/148
  ...
  Verifying        : rpm-build-4.14.3-19.el8.x86_64                                                 147/148
  Verifying        : rpm-build-4.14.3-14.el8_4.x86_64                                               148/148

Upgraded:
  almalinux-release-8.5-3.el8.x86_64                        annobin-9.72-1.el8_5.2.x86_64
  bash-4.4.20-2.el8.x86_64                                  binutils-2.30-108.el8_5.1.x86_64
  ...
  systemd-libs-239-51.el8.x86_64                            tpm2-tss-2.3.2-4.el8.x86_64
  util-linux-2.32.1-28.el8.x86_64                           which-2.21-16.el8.x86_64

Complete!
INFO: Calling postupdate hooks because there are new/updated packages:
krb5-libs-1.18.2-14.el8.x86_64
file-libs-5.33-20.el8.x86_64
...
rpm-build-libs-4.14.3-19.el8.x86_64
openldap-2.4.46-18.el8.x86_64
Start: creating root cache
Finish: creating root cache
Finish: dnf update
Finish: chroot init
Start: build phase for zlib-1.2.11-17.el8.src.rpm
Start: build setup for zlib-1.2.11-17.el8.src.rpm
Building target platforms: x86_64
Building for target x86_64
Wrote: /builddir/build/SRPMS/zlib-1.2.11-17.el8.src.rpm
AlmaLinux 8 - BaseOS                                                        3.7 kB/s | 4.3 kB     00:01
AlmaLinux 8 - AppStream                                                     4.9 kB/s | 4.7 kB     00:00
AlmaLinux 8 - PowerTools                                                    4.1 kB/s | 4.7 kB     00:01
AlmaLinux 8 - Extras                                                        5.1 kB/s | 3.9 kB     00:00
Dependencies resolved.
============================================================================================================
 Package                          Architecture     Version                        Repository           Size
============================================================================================================
Installing:
 autoconf                         noarch           2.69-29.el8                    appstream           710 k
 automake                         noarch           1.16.1-7.el8                   appstream           712 k
 libtool                          x86_64           2.4.6-25.el8                   appstream           708 k
Installing dependencies:
 emacs-filesystem                 noarch           1:26.1-7.el8                   baseos               69 k
 groff-base                       x86_64           1.22.3-18.el8                  baseos              1.0 M
 m4                               x86_64           1.4.18-7.el8                   baseos              222 k
 ...
 perl-threads                     x86_64           1:2.21-2.el8                   baseos               61 k
 perl-threads-shared              x86_64           1.58-2.el8                     baseos               47 k

Transaction Summary
============================================================================================================
Install  40 Packages
...
(39/40): perl-libs-5.26.3-420.el8.x86_64.rpm                                389 kB/s | 1.6 MB     00:04
(40/40): perl-interpreter-5.26.3-420.el8.x86_64.rpm                         1.0 MB/s | 6.3 MB     00:06
------------------------------------------------------------------------------------------------------------
Total                                                                       1.1 MB/s | 8.9 MB     00:07
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                    1/1
  Installing       : m4-1.4.18-7.el8.x86_64                                                            1/40
  Running scriptlet: m4-1.4.18-7.el8.x86_64                                                            1/40
  Installing       : groff-base-1.22.3-18.el8.x86_64                                                   2/40
  ...
  Installing       : libtool-2.4.6-25.el8.x86_64                                                      40/40
  Running scriptlet: libtool-2.4.6-25.el8.x86_64                                                      40/40
  Verifying        : emacs-filesystem-1:26.1-7.el8.noarch                                              1/40
  Verifying        : groff-base-1.22.3-18.el8.x86_64                                                   2/40
  ...
  Verifying        : perl-Thread-Queue-3.13-1.el8.noarch                                              40/40

Installed:
  autoconf-2.69-29.el8.noarch                           automake-1.16.1-7.el8.noarch
  ...
  perl-threads-1:2.21-2.el8.x86_64                      perl-threads-shared-1.58-2.el8.x86_64

Complete!
Finish: build setup for zlib-1.2.11-17.el8.src.rpm
Start: Outputting list of installed packages
Finish: Outputting list of installed packages
Start: rpmbuild zlib-1.2.11-17.el8.src.rpm
...
patching file contrib/minizip/unzip.c
Patch #2 (zlib-1.2.11-IBM-Z-hw-accelrated-deflate-s390x.patch):
+ echo 'Patch #2 (zlib-1.2.11-IBM-Z-hw-accelrated-deflate-s390x.patch):'
+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0
patching file Makefile.in
patching file configure
...
patching file test/crc32_test.c
+ echo 'Patch #3 (zlib-1.2.11-optimized-CRC32-framework.patch):'
+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0
...
+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0
patching file crc32.c
patching file deflate.c
...
patching file deflate.c
patching file test/infcover.c
+ echo 'Patch #6 (zlib-1.2.11-IBM-Z-hw-accelrated-deflate-fix.patch):'
+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0
...
gcc -O2 -g -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -fexceptions -fstack-protector-strong -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1 -m64 -mtune=generic -fasynchronous-unwind-tables -fstack-clash-protection -fcf-protection -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o inflate.o inflate.c
gcc -O2 -g -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -fexceptions -fstack-protector-strong -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -specs=/

Provides: debuginfo(build-id) = e0d0a31c725b443047e37c342f2f7a925a141786 zlib-debuginfo = 1.2.11-17.el8 zlib-debuginfo(x86-64) = 1.2.11-17.el8
Requires(rpmlib): rpmlib(CompressedFileNames) <= 3.0.4-1 rpmlib(FileDigests) <= 4.6.0-1 rpmlib(PayloadFilesHavePrefix) <= 4.0-1
Recommends: zlib-debugsource(x86-64) = 1.2.11-17.el8
Checking for unpackaged file(s): /usr/lib/rpm/check-files /builddir/build/BUILDROOT/zlib-1.2.11-17.el8.x86_64
Wrote: /builddir/build/RPMS/zlib-1.2.11-17.el8.x86_64.rpm
Wrote: /builddir/build/RPMS/zlib-devel-1.2.11-17.el8.x86_64.rpm
Wrote: /builddir/build/RPMS/zlib-static-1.2.11-17.el8.x86_64.rpm
Wrote: /builddir/build/RPMS/zlib-debugsource-1.2.11-17.el8.x86_64.rpm
Wrote: /builddir/build/RPMS/zlib-debuginfo-1.2.11-17.el8.x86_64.rpm
Executing(%clean): /bin/sh -e /var/tmp/rpm-tmp.x41aFv
+ umask 022
+ cd /builddir/build/BUILD
+ cd zlib-1.2.11
+ /usr/bin/rm -rf /builddir/build/BUILDROOT/zlib-1.2.11-17.el8.x86_64
+ exit 0
Finish: rpmbuild zlib-1.2.11-17.el8.src.rpm
Finish: build phase for zlib-1.2.11-17.el8.src.rpm
INFO: Done(zlib-1.2.11-17.el8.src.rpm) Config(almalinux-8-x86_64) 18 minutes 57 seconds
INFO: Results and/or logs in: /var/lib/mock/almalinux-8-x86_64/result
Finish: run
```

#### aarch64

Use the `almalinux-8-aarch64.cfg` file, though you need your computer or VM running on arm or qemu to proceed.

Run the following command to build the package:

```
mock -r almalinux-8-aarch64 --rebuild fullpackagename.src.rpm
```

#### i686

[Vault](https://repo.almalinux.org/vault/) repository contains all i686 packages.
Note, mock doesn't have a specified config file to build i686 packages or AlmaLinux. So you have to download this [config file](#config-file-for-i686). Next, we need to put that config to the `/etc/mock/` directory. It is possible to build i686 now.

Run the following command to build the package:

```
mock -r almalinux-8-i686 --rebuild fullpackagename.src.rpm
```

### Instruction without changes

In case you need to build a package without any changes, follow mentioned steps:

- [Install](#setup-mock) `epel-release`, `mock`, `rpm-build` and `add a user` to the mock group.
- Download a package you want to rebuild from [repo.almalinux.org](https://repo.almalinux.org/). Use the `wget` command with the URL of the package.
- Run `mock -r "configname" --rebuild fullpackagename.src.rpm` to build the package.

:::tip
"configname" is the name of a configuration file from `/etc/mock/` without the `/etc/mock/` path prefix and the `.cfg` suffix. [Check the information](#x86-64) above to see examples.
:::

Builds are done in the `/var/lib/mock` directory. You can see the built packages in this directory.

![image](/images/building-packages-guide_results.png)

## Building packages from [git.almalinux.org](https://git.almalinux.org/)

Another way to build packages is to receive sources and .spec files from [git.almalinux.org](https://git.almalinux.org/). Check this instruction to use this way:

- [Install](#setup-mock) `epel-release`, `mock` and `add a user` to the mock group.

- Clone [almalinux-git-utils](https://git.almalinux.org/almalinux/almalinux-git-utils) repo. These are utilities for working with the AlmaLinux OS Git server. Use `git clone` and `HTTPS` link from [git.almalinux.org](https://git.almalinux.org/) to clone the repository.

:::tip
`SSH` link for cloning the repo is available only for signed-in users.
:::

- Switch to the almalinux-git-utils directory and run the following commands:

```
python3 setup.py build
```

```
pip3 install .
```

- Switch to the needed directory and clone a repo with the RPM package project from [git.almalinux.org](https://git.almalinux.org/). After that, you have the SPECS folder with the .spec file for the cloned project.

- Switch to the project directory and run the mentioned command. This script downloads sources and BLOBs from the AlmaLinux sources cache. You can find them in the SOURCES folder.

```
alma_get_sources
```

- Run these commands to create a workplace directory structure `rpmbuild`.

```
dnf install -y rpmdevtools
```

```
rpmdev-setuptree
```

- Move SOURCES and SPECS files from the project directory to the ~/rpmbuild directory.

- Switch to the ~/rpmbuild/SPECS directory and run this command to build a SPEC file:

```
rpmbuild -bs packagename.spec
```

- [See what config name you need](#x86-64) and build the package using the mock tool:

```
mock -r "configname" --rebuild fullpackagename.src.rpm
```

## Config file for i686

```
config_opts['root'] = 'almalinux-8-i686'
config_opts['chroot_setup_cmd'] = 'install tar gcc-c++ redhat-rpm-config redhat-release which xz sed make bzip2 gzip gcc coreutils unzip shadow-utils diffutils cpio bash gawk rpm-build info patch util-linux findutils grep scl-utils scl-utils-build git-core'
config_opts['dist'] = 'el8.alma'
config_opts['dnf_common_opts'] = ['--setopt=deltarpm=False', '--allowerasing', '--nobest', '--setopt=install_weak_deps=False']
config_opts['legal_host_arches'] = ['i386', 'i586', 'i686', 'x86_64']
config_opts['releasever'] = '8'
config_opts['package_manager'] = 'dnf'
config_opts['rpmbuild_networking'] = True
config_opts['target_arch'] = 'i686'
config_opts['extra_chroot_dirs'] = [ '/run/lock', ]
config_opts['use_bootstrap'] = False


config_opts['dnf.conf'] = """
[main]
keepcache=1
cachedir = /var/cache/yum
debuglevel=1
reposdir=/dev/null
logfile=/var/log/yum.log
retries=20
obsoletes=1
gpgcheck=0
assumeyes=1
rpmverbosity = info
syslog_ident=mock
syslog_device=
metadata_expire=0
mdpolicy=group:primary
best=0
install_weak_deps=0
protected_packages=
module_platform_id=platform:el8
user_agent={{ user_agent }}


[baseos]
name=AlmaLinux $releasever - BaseOS
baseurl=https://repo.almalinux.org/vault/$releasever/BaseOS/i686/os/
enabled=1
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

[appstream]
name=AlmaLinux $releasever - AppStream
baseurl=https://repo.almalinux.org/vault/$releasever/AppStream/i686/os/
enabled=1
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

[powertools]
name=AlmaLinux $releasever - PowerTools
baseurl=https://repo.almalinux.org/vault/$releasever/PowerTools/i686/os/
enabled=1
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

[extras]
name=AlmaLinux $releasever - Extras
baseurl=https://repo.almalinux.org/vault/$releasever/extras/i686/os/
enabled=1
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

[ha]
name=AlmaLinux $releasever - HighAvailability
baseurl = https://repo.almalinux.org/vault/$releasever/HighAvailability/i686/os/
enabled = 0
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

[resilientstorage]
name=AlmaLinux $releasever - ResilientStorage
baseurl=https://repo.almalinux.org/vault/$releasever/ResilientStorage/i686/os/
enabled=0
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

[devel]
name=AlmaLinux $releasever - Devel (WARNING: UNSUPPORTED - FOR BUILDROOT USE ONLY!)
baseurl=https://repo.almalinux.org/vault/$releasever/devel/i686/os/
enabled=0
gpgcheck=1
gpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux

"""
```
