---
title: 'Nginx Installation on AlmaLinux 9'
---
# Nginx Installation on AlmaLinux 9

| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | Last modified | 2023-06-03|

## Introduction
This is a dedicated example for **AlmaLinux 9**, demonstrating how to install Nginx using one of the three variants: 

- Variant I: AppStream non-module
- Variant II: AppStream module
- Variant III: Nginx mainline repository

<u>Architecture Compatibility</u>
| Architecture | Supported |
|-----|----|
| Aarch64 | ✅ |
| PowerPC | ❌ |
| S390X | ✅ |
| X86_64 | ✅ |

## Installation instructions

###  System Updates First!

::: warning
Please make sure to run **`sudo dnf update`** before proceeding with any other installation or configuration steps to ensure that your system is up-to-date and any known security vulnerabilities or bugs are patched.
:::
  

### Variant I: AppStream Non-module Install

#### Example

### Install the Nginx package

```
sudo dnf install nginx
```

You should see something like this at the end:

```
Installed:
  almalinux-logos-httpd-90.5.1-1.1.el9.noarch                nginx-1:1.20.1-14.el9.alma.x86_64               nginx-core-1:1.20.1-14.el9.alma.x86_64              
  nginx-filesystem-1:1.20.1-14.el9.alma.noarch              

Complete!
```

Confirm the installation worked:

```
nginx -v
```

Expected output:
```
nginx version: nginx/1.20.1
```


### Variant II: AppStream Module Install

```
sudo dnf module list nginx
```

Expected output (module list):
```
Last metadata expiration check: 0:30:09 ago on Fri Jun  2 20:17:44 2023.
AlmaLinux 9 - AppStream
Name                                 Stream                                 Profiles                                 Summary                                      
nginx                                1.22 [x]                               common [d]                               nginx webserver                              

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```


### Install: enable the selected module version

```
sudo dnf module enable nginx:1.22
```

### Test installation

```
nginx -v
```

Expected output (test):
```
nginx version: nginx/1.22.1
```


### 🔖 Variant III: Main-line Repository Install

#### Example

### Import the Nginx signing key

```
sudo rpm --import https://nginx.org/keys/nginx_signing.key
```

### Create a repo definition file for Nginx

```
sudo tee /etc/yum.repos.d/nginx.repo
```

### Populate the new repo file with below text (copy-paste & `Ctrl+D`)

```
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

### Install `dnf-uils`

::: tip
In AlmaLinux 9.2 `dnf-utils` can installed by default (depending on install type).
:::

::: warning
`dnf-utils` are repo managment tools (classic YUM utilities implemented as CLI shims on top of DNF)
:::


```
sudo dnf install dnf-utils
```

Expected output (install):
```
Last metadata expiration check: 0:46:06 ago on Fri Jun  2 20:17:44 2023.
Package yum-utils-4.3.0-5.el9_2.noarch is already installed.
Dependencies resolved.
Nothing to do.
Complete!
```

### Enable the repository

```
dnf config-manager --enable nginx-mainline
```

### Install the package

```
sudo dnf install nginx
```

### Test
```
nginx -v
```

Expected output (test):
```
nginx version: nginx/1.25.0
```

## 📚 Further reading and Next Steps

<u>Get Back:</u>
- [Nginx: A Beginner's Guide](NginxSeriesA01)

<u>In-depth Resources:</u>
- [Installing Nginx on AlmaLinux 8](NginxSeriesA02R8)
- [Default Nginx Configuration Guide](NginxSeriesA03)
- [Secure Nginx Deployment](NginxSeriesA04P1)

<u>Related Resources:</u>
- [Firewalld - A Beginner's Guide](../system/SystemSeriesA02)
- [Application Streams](../system/SystemSeriesA01)
- [NVIDIA Driver Installation Guides](/series/nvidia/)   
