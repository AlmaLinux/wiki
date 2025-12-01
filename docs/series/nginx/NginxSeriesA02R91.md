# A02 R91 ❯ AlmaLinux 9.1 Installation

<small>ℹ️ This article is part of AlmaLinux [Nginx Series](/series/).</small>

## 🌟 Introduction

This is a dedicated example for the **AlmaLinux 9.x series**, demonstrating how to install Nginx using one of the two variants:

- Variant I: AppStream non-module
- Variant III¹: Nginx mainline repository

<small>¹ - Variant II omitted by purpose.</small>

## 📝 Installation instructions

### System Updates First!

::: warning
Please make sure to run **`sudo dnf update`** before proceeding with any other installation or configuration steps to ensure that your system is up-to-date and any known security vulnerabilities or bugs are patched.
:::

### 📖 Available Nginx Versions (AlmaLinux OS 9.1)

Different Nginx server versions are available to install depending on the installation variant.

|     | Installation Variant | Nginx Versions available | Notes                                                                                          |
| --- | -------------------- | ------------------------ | ---------------------------------------------------------------------------------------------- |
| 🟩  | AppStream non-module | 1.20.1                   | Default version is good bu                                                                     |
| ❌  | AppStream module     | Not Available            | AppStream module method is not available on 9.1.                                               |
| 🟨  | Nginx mainline repo  | 1.21.6 -- 1.23.4¹        | You always get latest version of Nginx avaiable. Second good (small chance of incompatibilty). |

¹ current version at the time of testing.

<u>Architecture Compatibility</u>
| Architecture | Supported |
|-----|----|
| Aarch64 | ✅ |
| PowerPC | ❌ |
| S390X | ✅ |
| X86_64 | ✅ |

### 🔖 Variant I: AppStream Non-module Install

#### Example

### ➡️ Install

```
sudo dnf install nginx
```

➡️ Example output

```
Last metadata expiration check: 0:01:47 ago on Fri 14 Apr 2023 02:57:10 AM CEST.
Dependencies resolved.
================================================================================================================
 Package                          Architecture      Version                          Repository            Size
================================================================================================================
Installing:
 nginx                            x86_64            1:1.20.1-13.el9.alma             appstream             38 k
Installing dependencies:
 almalinux-logos-httpd            noarch            90.5.1-1.1.el9                   appstream             18 k
 nginx-core                       x86_64            1:1.20.1-13.el9.alma             appstream            567 k
 nginx-filesystem                 noarch            1:1.20.1-13.el9.alma             appstream             11 k

Transaction Summary
================================================================================================================
Install  4 Packages

Total download size: 634 k
Installed size: 1.8 M
Is this ok [y/N]: y
Downloading Packages:
(1/4): almalinux-logos-httpd-90.5.1-1.1.el9.noarch.rpm                          9.9 kB/s |  18 kB     00:01
(2/4): nginx-1.20.1-13.el9.alma.x86_64.rpm                                       21 kB/s |  38 kB     00:01
(3/4): nginx-filesystem-1.20.1-13.el9.alma.noarch.rpm                           243 kB/s |  11 kB     00:00
(4/4): nginx-core-1.20.1-13.el9.alma.x86_64.rpm                                 294 kB/s | 567 kB     00:01
----------------------------------------------------------------------------------------------------------------
Total                                                                           216 kB/s | 634 kB     00:02
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                        1/1
  Running scriptlet: nginx-filesystem-1:1.20.1-13.el9.alma.noarch                                           1/4
  Installing       : nginx-filesystem-1:1.20.1-13.el9.alma.noarch                                           1/4
  Installing       : nginx-core-1:1.20.1-13.el9.alma.x86_64                                                 2/4
  Installing       : almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                            3/4
  Installing       : nginx-1:1.20.1-13.el9.alma.x86_64                                                      4/4
  Running scriptlet: nginx-1:1.20.1-13.el9.alma.x86_64                                                      4/4
  Verifying        : almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                            1/4
  Verifying        : nginx-1:1.20.1-13.el9.alma.x86_64                                                      2/4
  Verifying        : nginx-core-1:1.20.1-13.el9.alma.x86_64                                                 3/4
  Verifying        : nginx-filesystem-1:1.20.1-13.el9.alma.noarch                                           4/4

Installed:
  almalinux-logos-httpd-90.5.1-1.1.el9.noarch            nginx-1:1.20.1-13.el9.alma.x86_64
  nginx-core-1:1.20.1-13.el9.alma.x86_64                 nginx-filesystem-1:1.20.1-13.el9.alma.noarch

Complete!
```

### 🔖 Variant II: AppStream Module Install

This method is not available on AlmaLinux 9.1 (Lime Lynx) -- there is no AppStream module version of Nginx in RHEL repos.

### 🔖 Variant III: Main-line Repository Install

#### Example

### ➡️ Import the Nginx signing key

```
sudo rpm --import https://nginx.org/keys/nginx_signing.key
```

### ➡️ Create a repo definition file for Nginx

```
sudo tee /etc/yum.repos.d/nginx.repo
```

### ➡️ Populate the new repo file with below text (copy-paste & `Ctrl+D`)

```
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

### ➡️ Install `dnf-uils`

:::warning
ℹ️ `dnf-utils` are repo managment tools (classic YUM utilities implemented as CLI shims on top of DNF)
:::

```
sudo dnf install dnf-utils
```

### ➡️ Enable the repository

```
dnf config-manager --enable nginx-mainline
```

### ➡️ Enable/install the module

```
sudo dnf install nginx
```

➡️ Example output (install)

```
nginx mainline repo                                                                                                                                      30 kB/s |  22 kB     00:00
Dependencies resolved.
========================================================================================================================================================================================
 Package                               Architecture                           Version                                              Repository                                      Size
========================================================================================================================================================================================
Installing:
 nginx                                 x86_64                                 1:1.23.4-1.el9.ngx                                   nginx-mainline                                 868 k

Transaction Summary
========================================================================================================================================================================================
Install  1 Package

Total download size: 868 k
Installed size: 3.0 M
Is this ok [y/N]: y
Downloading Packages:
nginx-1.23.4-1.el9.ngx.x86_64.rpm                                                                                                                        67 kB/s | 868 kB     00:12
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                                                    67 kB/s | 868 kB     00:12
nginx mainline repo                                                                                                                                     5.9 kB/s | 1.5 kB     00:00
Importing GPG key 0x7BD9BF62:
 Userid     : "nginx signing key <signing-key@nginx.com>"
 Fingerprint: 573B FD6B 3D8F BC64 1079 A6AB ABF5 BD82 7BD9 BF62
 From       : https://nginx.org/keys/nginx_signing.key
Is this ok [y/N]: y
Key imported successfully
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                                                1/1
  Running scriptlet: nginx-1:1.23.4-1.el9.ngx.x86_64                                                                                                                                1/1
  Installing       : nginx-1:1.23.4-1.el9.ngx.x86_64                                                                                                                                1/1
  Running scriptlet: nginx-1:1.23.4-1.el9.ngx.x86_64                                                                                                                                1/1
----------------------------------------------------------------------

Thanks for using nginx!

Please find the official documentation for nginx here:
* https://nginx.org/en/docs/

Please subscribe to nginx-announce mailing list to get
the most important news about nginx:
* https://nginx.org/en/support.html

Commercial subscriptions for nginx are available on:
* https://nginx.com/products/

----------------------------------------------------------------------

  Verifying        : nginx-1:1.23.4-1.el9.ngx.x86_64                                                                                                                                1/1

Installed:
  nginx-1:1.23.4-1.el9.ngx.x86_64

Complete!
```

### ➡️ Test

```
nginx -v
```

Expected output (test):

```
nginx version: nginx/1.23.4
```

## 📚 Further reading and Next Steps

<u>Get Back:</u>

- AlmaLinux Nginx Series ❯ [A Beginner's Guide](NginxSeriesA01.md)

<u>In-depth Resources:</u>

- AlmaLinux Nginx Series ❯ [AlmaLinux OS 8.x Installation](NginxSeriesA02R8.md)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.2 Installation](NginxSeriesA02R92.md)
- AlmaLinux Nginx Series ❯ [Default Configuration Guide](NginxSeriesA03.md)
- AlmaLinux Nginx Series ❯ [Secure Nginx Deployment](NginxSeriesA04P1.md)

<u>Related Resources:</u>

- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](../system/SystemSeriesA02.md)
- AlmaLinux System Series ❯ [Application Streams](../system/SystemSeriesA01.md)
