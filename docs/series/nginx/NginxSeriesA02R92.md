# A02 R92 ❯ AlmaLinux 9.2 Installation
<small>ℹ️ This article is part of AlmaLinux [Nginx Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-06-03
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ 9.2 \| x86_64 \| 2023-06-03 </small>|
<br> 

## 🌟 Introduction
This is a dedicated example for the **AlmaLinux 9.x series**, demonstrating how to install Nginx using one of the two variants: 

- Variant I: AppStream non-module
- Variant II: AppStream module
- Variant III: Nginx mainline repository

## 📝 Installation instructions

###  System Updates First!

::: warning
Please make sure to run **`sudo dnf update`** before proceeding with any other installation or configuration steps to ensure that your system is up-to-date and any known security vulnerabilities or bugs are patched.
:::


### 📖 Available Nginx Versions (AlmaLinux OS 9.2)
Different Nginx server versions are available to install depending on the installation variant.

| |Installation Variant    | Nginx Versions available | Notes         |
|-|------------------------|--------------------------|---------------|
|🟨| AppStream non-module  | 1.20.1                  | Default version is outdated and does not get updates! Inadvisable. |
|🟩| AppStream module      | 1.22 | Module version are getting the security updates. **The recommended method**. |
|🟩| Nginx mainline repo   | 1.22.2 -- 1.25.0¹ | You always get latest version of Nginx avaiable. Second good (small chance of incompatibilty). | 
 
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

### ➡️  Install

```
sudo dnf install nginx
```

Expected output (install):
```
Last metadata expiration check: 0:26:09 ago on Fri Jun  2 20:17:44 2023.
Dependencies resolved.
==================================================================================================================================================================
 Package                                      Architecture                  Version                                        Repository                        Size
==================================================================================================================================================================
Installing:
 nginx                                        x86_64                        1:1.20.1-14.el9.alma                           appstream                         38 k
Installing dependencies:
 almalinux-logos-httpd                        noarch                        90.5.1-1.1.el9                                 appstream                         18 k
 nginx-core                                   x86_64                        1:1.20.1-14.el9.alma                           appstream                        567 k
 nginx-filesystem                             noarch                        1:1.20.1-14.el9.alma                           appstream                         11 k

Transaction Summary
==================================================================================================================================================================
Install  4 Packages

Total download size: 634 k
Installed size: 1.8 M
Is this ok [y/N]: y
Downloading Packages:
(1/4): almalinux-logos-httpd-90.5.1-1.1.el9.noarch.rpm                                                                             85 kB/s |  18 kB     00:00    
(2/4): nginx-1.20.1-14.el9.alma.x86_64.rpm                                                                                        169 kB/s |  38 kB     00:00    
(3/4): nginx-filesystem-1.20.1-14.el9.alma.noarch.rpm                                                                             396 kB/s |  11 kB     00:00    
(4/4): nginx-core-1.20.1-14.el9.alma.x86_64.rpm                                                                                   2.0 MB/s | 567 kB     00:00    
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                             738 kB/s | 634 kB     00:00     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                          1/1 
  Running scriptlet: nginx-filesystem-1:1.20.1-14.el9.alma.noarch                                                                                             1/4 
  Installing       : nginx-filesystem-1:1.20.1-14.el9.alma.noarch                                                                                             1/4 
  Installing       : nginx-core-1:1.20.1-14.el9.alma.x86_64                                                                                                   2/4 
  Installing       : almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                                                                              3/4 
  Installing       : nginx-1:1.20.1-14.el9.alma.x86_64                                                                                                        4/4 
  Running scriptlet: nginx-1:1.20.1-14.el9.alma.x86_64                                                                                                        4/4 
  Verifying        : almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                                                                              1/4 
  Verifying        : nginx-1:1.20.1-14.el9.alma.x86_64                                                                                                        2/4 
  Verifying        : nginx-core-1:1.20.1-14.el9.alma.x86_64                                                                                                   3/4 
  Verifying        : nginx-filesystem-1:1.20.1-14.el9.alma.noarch                                                                                             4/4 

Installed:
  almalinux-logos-httpd-90.5.1-1.1.el9.noarch                nginx-1:1.20.1-14.el9.alma.x86_64               nginx-core-1:1.20.1-14.el9.alma.x86_64              
  nginx-filesystem-1:1.20.1-14.el9.alma.noarch              

Complete!
```

### ➡️  Test installation

```
nginx -v
```

Expected output (test):
```
nginx version: nginx/1.20.1
```


### 🔖Variant II: AppStream Module Install

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


### ➡️  Install: enable the selected module version

```
sudo dnf module enable nginx:1.22
```

Example output (module enable):
```
Last metadata expiration check: 0:33:47 ago on Fri Jun  2 20:17:44 2023.
Dependencies resolved.
==================================================================================================================================================================
 Package                                Architecture                          Version                                Repository                              Size
==================================================================================================================================================================
Enabling module streams:
 nginx                                                                        1.22                                                                               

Transaction Summary
==================================================================================================================================================================

Is this ok [y/N]: y
Complete!
```

### ➡️  Install: actual package installation

```
sudo dnf install nginx
```

Example output (install):
```
Last metadata expiration check: 0:34:39 ago on Fri Jun  2 20:17:44 2023.
Dependencies resolved.
==================================================================================================================================================================
 Package                                     Architecture           Version                                                       Repository                 Size
==================================================================================================================================================================
Installing group/module packages:
 nginx                                       x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  39 k
 nginx-all-modules                           noarch                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  10 k
 nginx-filesystem                            noarch                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  11 k
 nginx-mod-http-image-filter                 x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  22 k
 nginx-mod-http-perl                         x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  33 k
 nginx-mod-http-xslt-filter                  x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  20 k
 nginx-mod-mail                              x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  55 k
 nginx-mod-stream                            x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                  81 k
Installing dependencies:
 almalinux-logos-httpd                       noarch                 90.5.1-1.1.el9                                                appstream                  18 k
 dejavu-sans-fonts                           noarch                 2.37-18.el9                                                   baseos                    1.3 M
 fontconfig                                  x86_64                 2.14.0-2.el9_1                                                appstream                 274 k
 gd                                          x86_64                 2.3.2-3.el9                                                   appstream                 131 k
 jbigkit-libs                                x86_64                 2.1-23.el9                                                    appstream                  52 k
 langpacks-core-font-en                      noarch                 3.0-16.el9                                                    appstream                 9.4 k
 libX11                                      x86_64                 1.7.0-7.el9                                                   appstream                 646 k
 libX11-common                               noarch                 1.7.0-7.el9                                                   appstream                 152 k
 libXau                                      x86_64                 1.0.9-8.el9                                                   appstream                  30 k
 libXpm                                      x86_64                 3.5.13-8.el9_1                                                appstream                  57 k
 libtiff                                     x86_64                 4.4.0-7.el9                                                   appstream                 195 k
 libwebp                                     x86_64                 1.2.0-6.el9_1                                                 appstream                 275 k
 libxcb                                      x86_64                 1.13.1-9.el9                                                  appstream                 225 k
 libxslt                                     x86_64                 1.1.34-9.el9                                                  appstream                 240 k
 nginx-core                                  x86_64                 1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma                    appstream                 573 k
 perl-AutoLoader                             noarch                 5.74-480.el9                                                  appstream                  21 k
 perl-B                                      x86_64                 1.80-480.el9                                                  appstream                 179 k
 perl-Carp                                   noarch                 1.50-460.el9                                                  appstream                  29 k
 perl-Class-Struct                           noarch                 0.66-480.el9                                                  appstream                  22 k
 perl-Data-Dumper                            x86_64                 2.174-462.el9                                                 appstream                  55 k
 perl-Digest                                 noarch                 1.19-4.el9                                                    appstream                  25 k
 perl-Digest-MD5                             x86_64                 2.58-4.el9                                                    appstream                  36 k
 perl-Encode                                 x86_64                 4:3.08-462.el9                                                appstream                 1.7 M
 perl-Errno                                  x86_64                 1.30-480.el9                                                  appstream                  15 k
 perl-Exporter                               noarch                 5.74-461.el9                                                  appstream                  31 k
 perl-Fcntl                                  x86_64                 1.13-480.el9                                                  appstream                  20 k
 perl-File-Basename                          noarch                 2.85-480.el9                                                  appstream                  17 k
 perl-File-Path                              noarch                 2.18-4.el9                                                    appstream                  35 k
 perl-File-Temp                              noarch                 1:0.231.100-4.el9                                             appstream                  59 k
 perl-File-stat                              noarch                 1.09-480.el9                                                  appstream                  17 k
 perl-FileHandle                             noarch                 2.03-480.el9                                                  appstream                  16 k
 perl-Getopt-Long                            noarch                 1:2.52-4.el9                                                  appstream                  59 k
 perl-Getopt-Std                             noarch                 1.12-480.el9                                                  appstream                  16 k
 perl-HTTP-Tiny                              noarch                 0.076-460.el9                                                 appstream                  54 k
 perl-IO                                     x86_64                 1.43-480.el9                                                  appstream                  86 k
 perl-IO-Socket-IP                           noarch                 0.41-5.el9                                                    appstream                  42 k
 perl-IPC-Open3                              noarch                 1.21-480.el9                                                  appstream                  23 k
 perl-MIME-Base64                            x86_64                 3.16-4.el9                                                    appstream                  30 k
 perl-Net-SSLeay                             x86_64                 1.92-2.el9                                                    appstream                 364 k
 perl-POSIX                                  x86_64                 1.94-480.el9                                                  appstream                  96 k
 perl-PathTools                              x86_64                 3.78-461.el9                                                  appstream                  85 k
 perl-Pod-Escapes                            noarch                 1:1.07-460.el9                                                appstream                  20 k
 perl-Pod-Perldoc                            noarch                 3.28.01-461.el9                                               appstream                  83 k
 perl-Pod-Simple                             noarch                 1:3.42-4.el9                                                  appstream                 215 k
 perl-Pod-Usage                              noarch                 4:2.01-4.el9                                                  appstream                  40 k
 perl-Scalar-List-Utils                      x86_64                 4:1.56-461.el9                                                appstream                  71 k
 perl-SelectSaver                            noarch                 1.02-480.el9                                                  appstream                  12 k
 perl-Socket                                 x86_64                 4:2.031-4.el9                                                 appstream                  54 k
 perl-Storable                               x86_64                 1:3.21-460.el9                                                appstream                  95 k
 perl-Symbol                                 noarch                 1.08-480.el9                                                  appstream                  14 k
 perl-Term-ANSIColor                         noarch                 5.01-461.el9                                                  appstream                  48 k
 perl-Term-Cap                               noarch                 1.17-460.el9                                                  appstream                  22 k
 perl-Text-ParseWords                        noarch                 3.30-460.el9                                                  appstream                  16 k
 perl-Text-Tabs+Wrap                         noarch                 2013.0523-460.el9                                             appstream                  22 k
 perl-Time-Local                             noarch                 2:1.300-7.el9                                                 appstream                  33 k
 perl-URI                                    noarch                 5.09-3.el9                                                    appstream                 108 k
 perl-base                                   noarch                 2.27-480.el9                                                  appstream                  16 k
 perl-constant                               noarch                 1.33-461.el9                                                  appstream                  23 k
 perl-if                                     noarch                 0.60.800-480.el9                                              appstream                  14 k
 perl-interpreter                            x86_64                 4:5.32.1-480.el9                                              appstream                  71 k
 perl-libnet                                 noarch                 3.13-4.el9                                                    appstream                 125 k
 perl-libs                                   x86_64                 4:5.32.1-480.el9                                              appstream                 2.0 M
 perl-mro                                    x86_64                 1.23-480.el9                                                  appstream                  28 k
 perl-overload                               noarch                 1.31-480.el9                                                  appstream                  46 k
 perl-overloading                            noarch                 0.02-480.el9                                                  appstream                  13 k
 perl-parent                                 noarch                 1:0.238-460.el9                                               appstream                  14 k
 perl-podlators                              noarch                 1:4.14-460.el9                                                appstream                 111 k
 perl-subs                                   noarch                 1.03-480.el9                                                  appstream                  12 k
 perl-vars                                   noarch                 1.05-480.el9                                                  appstream                  13 k
 xml-common                                  noarch                 0.6.3-58.el9                                                  appstream                  31 k
Installing weak dependencies:
 perl-IO-Socket-SSL                          noarch                 2.073-1.el9                                                   appstream                 216 k
 perl-Mozilla-CA                             noarch                 20200520-6.el9                                                appstream                  12 k
 perl-NDBM_File                              x86_64                 1.15-480.el9                                                  appstream                  22 k
Installing module profiles:
 nginx/common                                                                                                                                                    

Transaction Summary
==================================================================================================================================================================
Install  81 Packages

Total download size: 11 M
Installed size: 40 M
Is this ok [y/N]: y
Downloading Packages:
(1/81): almalinux-logos-httpd-90.5.1-1.1.el9.noarch.rpm                                                                            91 kB/s |  18 kB     00:00    
(2/81): jbigkit-libs-2.1-23.el9.x86_64.rpm                                                                                        759 kB/s |  52 kB     00:00    
(3/81): fontconfig-2.14.0-2.el9_1.x86_64.rpm                                                                                      1.0 MB/s | 274 kB     00:00    
(4/81): gd-2.3.2-3.el9.x86_64.rpm                                                                                                 482 kB/s | 131 kB     00:00    
(5/81): langpacks-core-font-en-3.0-16.el9.noarch.rpm                                                                              114 kB/s | 9.4 kB     00:00    
(6/81): libX11-1.7.0-7.el9.x86_64.rpm                                                                                             4.5 MB/s | 646 kB     00:00    
(7/81): libX11-common-1.7.0-7.el9.noarch.rpm                                                                                      1.0 MB/s | 152 kB     00:00    
(8/81): libXau-1.0.9-8.el9.x86_64.rpm                                                                                             455 kB/s |  30 kB     00:00    
(9/81): libXpm-3.5.13-8.el9_1.x86_64.rpm                                                                                          2.0 MB/s |  57 kB     00:00    
(10/81): libtiff-4.4.0-7.el9.x86_64.rpm                                                                                           3.3 MB/s | 195 kB     00:00    
(11/81): libwebp-1.2.0-6.el9_1.x86_64.rpm                                                                                         3.3 MB/s | 275 kB     00:00    
(12/81): libxcb-1.13.1-9.el9.x86_64.rpm                                                                                           2.7 MB/s | 225 kB     00:00    
(13/81): libxslt-1.1.34-9.el9.x86_64.rpm                                                                                          3.6 MB/s | 240 kB     00:00    
(14/81): nginx-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                                                794 kB/s |  39 kB     00:00    
(15/81): nginx-all-modules-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch.rpm                                                    315 kB/s |  10 kB     00:00    
(16/81): nginx-core-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                                           8.0 MB/s | 573 kB     00:00    
(17/81): nginx-filesystem-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch.rpm                                                     163 kB/s |  11 kB     00:00    
(18/81): nginx-mod-http-image-filter-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                          365 kB/s |  22 kB     00:00    
(19/81): nginx-mod-http-perl-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                                  1.4 MB/s |  33 kB     00:00    
(20/81): nginx-mod-http-xslt-filter-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                           896 kB/s |  20 kB     00:00    
(21/81): nginx-mod-mail-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                                       2.0 MB/s |  55 kB     00:00    
(22/81): nginx-mod-stream-1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64.rpm                                                     2.4 MB/s |  81 kB     00:00    
(23/81): perl-AutoLoader-5.74-480.el9.noarch.rpm                                                                                  651 kB/s |  21 kB     00:00    
(24/81): perl-B-1.80-480.el9.x86_64.rpm                                                                                           3.8 MB/s | 179 kB     00:00    
(25/81): perl-Carp-1.50-460.el9.noarch.rpm                                                                                        1.4 MB/s |  29 kB     00:00    
(26/81): perl-Class-Struct-0.66-480.el9.noarch.rpm                                                                                760 kB/s |  22 kB     00:00    
(27/81): perl-Data-Dumper-2.174-462.el9.x86_64.rpm                                                                                1.4 MB/s |  55 kB     00:00    
(28/81): perl-Digest-1.19-4.el9.noarch.rpm                                                                                        621 kB/s |  25 kB     00:00    
(29/81): perl-Digest-MD5-2.58-4.el9.x86_64.rpm                                                                                    1.0 MB/s |  36 kB     00:00    
(30/81): perl-Errno-1.30-480.el9.x86_64.rpm                                                                                       103 kB/s |  15 kB     00:00    
(31/81): perl-Exporter-5.74-461.el9.noarch.rpm                                                                                    209 kB/s |  31 kB     00:00    
(32/81): perl-Fcntl-1.13-480.el9.x86_64.rpm                                                                                       245 kB/s |  20 kB     00:00    
(33/81): perl-File-Basename-2.85-480.el9.noarch.rpm                                                                               200 kB/s |  17 kB     00:00    
(34/81): perl-Encode-3.08-462.el9.x86_64.rpm                                                                                      6.6 MB/s | 1.7 MB     00:00    
(35/81): perl-File-Path-2.18-4.el9.noarch.rpm                                                                                     1.1 MB/s |  35 kB     00:00    
(36/81): perl-File-Temp-0.231.100-4.el9.noarch.rpm                                                                                1.8 MB/s |  59 kB     00:00    
(37/81): perl-File-stat-1.09-480.el9.noarch.rpm                                                                                   750 kB/s |  17 kB     00:00    
(38/81): perl-FileHandle-2.03-480.el9.noarch.rpm                                                                                  700 kB/s |  16 kB     00:00    
(39/81): perl-Getopt-Long-2.52-4.el9.noarch.rpm                                                                                   2.8 MB/s |  59 kB     00:00    
(40/81): perl-Getopt-Std-1.12-480.el9.noarch.rpm                                                                                  770 kB/s |  16 kB     00:00    
(41/81): perl-HTTP-Tiny-0.076-460.el9.noarch.rpm                                                                                  2.3 MB/s |  54 kB     00:00    
(42/81): perl-IO-1.43-480.el9.x86_64.rpm                                                                                          1.6 MB/s |  86 kB     00:00    
(43/81): perl-IO-Socket-IP-0.41-5.el9.noarch.rpm                                                                                  749 kB/s |  42 kB     00:00    
(44/81): perl-IO-Socket-SSL-2.073-1.el9.noarch.rpm                                                                                2.5 MB/s | 216 kB     00:00    
(45/81): perl-IPC-Open3-1.21-480.el9.noarch.rpm                                                                                   471 kB/s |  23 kB     00:00    
(46/81): perl-MIME-Base64-3.16-4.el9.x86_64.rpm                                                                                   675 kB/s |  30 kB     00:00    
(47/81): perl-Mozilla-CA-20200520-6.el9.noarch.rpm                                                                                591 kB/s |  12 kB     00:00    
(48/81): perl-NDBM_File-1.15-480.el9.x86_64.rpm                                                                                   938 kB/s |  22 kB     00:00    
(49/81): perl-Net-SSLeay-1.92-2.el9.x86_64.rpm                                                                                    6.6 MB/s | 364 kB     00:00    
(50/81): perl-POSIX-1.94-480.el9.x86_64.rpm                                                                                       2.2 MB/s |  96 kB     00:00    
(51/81): perl-PathTools-3.78-461.el9.x86_64.rpm                                                                                   1.8 MB/s |  85 kB     00:00    
(52/81): perl-Pod-Escapes-1.07-460.el9.noarch.rpm                                                                                 976 kB/s |  20 kB     00:00    
(53/81): perl-Pod-Perldoc-3.28.01-461.el9.noarch.rpm                                                                              3.5 MB/s |  83 kB     00:00    
(54/81): perl-Pod-Simple-3.42-4.el9.noarch.rpm                                                                                    4.3 MB/s | 215 kB     00:00    
(55/81): perl-Pod-Usage-2.01-4.el9.noarch.rpm                                                                                     876 kB/s |  40 kB     00:00    
(56/81): perl-Scalar-List-Utils-1.56-461.el9.x86_64.rpm                                                                           1.7 MB/s |  71 kB     00:00    
(57/81): perl-SelectSaver-1.02-480.el9.noarch.rpm                                                                                 501 kB/s |  12 kB     00:00    
(58/81): perl-Socket-2.031-4.el9.x86_64.rpm                                                                                       2.0 MB/s |  54 kB     00:00    
(59/81): perl-Storable-3.21-460.el9.x86_64.rpm                                                                                    3.1 MB/s |  95 kB     00:00    
(60/81): perl-Symbol-1.08-480.el9.noarch.rpm                                                                                      621 kB/s |  14 kB     00:00    
(61/81): perl-Term-ANSIColor-5.01-461.el9.noarch.rpm                                                                              2.0 MB/s |  48 kB     00:00    
(62/81): perl-Term-Cap-1.17-460.el9.noarch.rpm                                                                                    1.0 MB/s |  22 kB     00:00    
(63/81): perl-Text-ParseWords-3.30-460.el9.noarch.rpm                                                                             683 kB/s |  16 kB     00:00    
(64/81): perl-Text-Tabs+Wrap-2013.0523-460.el9.noarch.rpm                                                                         1.0 MB/s |  22 kB     00:00    
(65/81): perl-Time-Local-1.300-7.el9.noarch.rpm                                                                                   1.4 MB/s |  33 kB     00:00    
(66/81): perl-URI-5.09-3.el9.noarch.rpm                                                                                           3.5 MB/s | 108 kB     00:00    
(67/81): perl-base-2.27-480.el9.noarch.rpm                                                                                        513 kB/s |  16 kB     00:00    
(68/81): perl-constant-1.33-461.el9.noarch.rpm                                                                                    928 kB/s |  23 kB     00:00    
(69/81): perl-if-0.60.800-480.el9.noarch.rpm                                                                                      689 kB/s |  14 kB     00:00    
(70/81): perl-interpreter-5.32.1-480.el9.x86_64.rpm                                                                               3.1 MB/s |  71 kB     00:00    
(71/81): perl-libnet-3.13-4.el9.noarch.rpm                                                                                        3.8 MB/s | 125 kB     00:00    
(72/81): perl-mro-1.23-480.el9.x86_64.rpm                                                                                         311 kB/s |  28 kB     00:00    
(73/81): perl-overload-1.31-480.el9.noarch.rpm                                                                                    547 kB/s |  46 kB     00:00    
(74/81): perl-overloading-0.02-480.el9.noarch.rpm                                                                                 161 kB/s |  13 kB     00:00    
(75/81): perl-parent-0.238-460.el9.noarch.rpm                                                                                     176 kB/s |  14 kB     00:00    
(76/81): perl-libs-5.32.1-480.el9.x86_64.rpm                                                                                      9.5 MB/s | 2.0 MB     00:00    
(77/81): perl-podlators-4.14-460.el9.noarch.rpm                                                                                   2.8 MB/s | 111 kB     00:00    
(78/81): perl-subs-1.03-480.el9.noarch.rpm                                                                                        249 kB/s |  12 kB     00:00    
(79/81): perl-vars-1.05-480.el9.noarch.rpm                                                                                        253 kB/s |  13 kB     00:00    
(80/81): xml-common-0.6.3-58.el9.noarch.rpm                                                                                       510 kB/s |  31 kB     00:00    
(81/81): dejavu-sans-fonts-2.37-18.el9.noarch.rpm                                                                                 7.6 MB/s | 1.3 MB     00:00    
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                             4.0 MB/s |  11 MB     00:02     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                          1/1 
  Installing       : dejavu-sans-fonts-2.37-18.el9.noarch                                                                                                    1/81 
  Running scriptlet: nginx-filesystem-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch                                                                      2/81 
  Installing       : nginx-filesystem-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch                                                                      2/81 
  Installing       : libwebp-1.2.0-6.el9_1.x86_64                                                                                                            3/81 
  Installing       : nginx-core-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                            4/81 
  Installing       : langpacks-core-font-en-3.0-16.el9.noarch                                                                                                5/81 
  Installing       : perl-Digest-1.19-4.el9.noarch                                                                                                           6/81 
  Installing       : perl-Digest-MD5-2.58-4.el9.x86_64                                                                                                       7/81 
  Installing       : perl-B-1.80-480.el9.x86_64                                                                                                              8/81 
  Installing       : perl-FileHandle-2.03-480.el9.noarch                                                                                                     9/81 
  Installing       : perl-Data-Dumper-2.174-462.el9.x86_64                                                                                                  10/81 
  Installing       : perl-libnet-3.13-4.el9.noarch                                                                                                          11/81 
  Installing       : perl-AutoLoader-5.74-480.el9.noarch                                                                                                    12/81 
  Installing       : perl-base-2.27-480.el9.noarch                                                                                                          13/81 
  Installing       : perl-URI-5.09-3.el9.noarch                                                                                                             14/81 
  Installing       : perl-Net-SSLeay-1.92-2.el9.x86_64                                                                                                      15/81 
  Installing       : perl-Mozilla-CA-20200520-6.el9.noarch                                                                                                  16/81 
  Installing       : perl-if-0.60.800-480.el9.noarch                                                                                                        17/81 
  Installing       : perl-IO-Socket-IP-0.41-5.el9.noarch                                                                                                    18/81 
  Installing       : perl-Time-Local-2:1.300-7.el9.noarch                                                                                                   19/81 
  Installing       : perl-File-Path-2.18-4.el9.noarch                                                                                                       20/81 
  Installing       : perl-Pod-Escapes-1:1.07-460.el9.noarch                                                                                                 21/81 
  Installing       : perl-Text-Tabs+Wrap-2013.0523-460.el9.noarch                                                                                           22/81 
  Installing       : perl-IO-Socket-SSL-2.073-1.el9.noarch                                                                                                  23/81 
  Installing       : perl-Class-Struct-0.66-480.el9.noarch                                                                                                  24/81 
  Installing       : perl-POSIX-1.94-480.el9.x86_64                                                                                                         25/81 
  Installing       : perl-Term-ANSIColor-5.01-461.el9.noarch                                                                                                26/81 
  Installing       : perl-IPC-Open3-1.21-480.el9.noarch                                                                                                     27/81 
  Installing       : perl-subs-1.03-480.el9.noarch                                                                                                          28/81 
  Installing       : perl-File-Temp-1:0.231.100-4.el9.noarch                                                                                                29/81 
  Installing       : perl-Term-Cap-1.17-460.el9.noarch                                                                                                      30/81 
  Installing       : perl-Pod-Simple-1:3.42-4.el9.noarch                                                                                                    31/81 
  Installing       : perl-HTTP-Tiny-0.076-460.el9.noarch                                                                                                    32/81 
  Installing       : perl-Socket-4:2.031-4.el9.x86_64                                                                                                       33/81 
  Installing       : perl-SelectSaver-1.02-480.el9.noarch                                                                                                   34/81 
  Installing       : perl-Symbol-1.08-480.el9.noarch                                                                                                        35/81 
  Installing       : perl-File-stat-1.09-480.el9.noarch                                                                                                     36/81 
  Installing       : perl-podlators-1:4.14-460.el9.noarch                                                                                                   37/81 
  Installing       : perl-Pod-Perldoc-3.28.01-461.el9.noarch                                                                                                38/81 
  Installing       : perl-Fcntl-1.13-480.el9.x86_64                                                                                                         39/81 
  Installing       : perl-Text-ParseWords-3.30-460.el9.noarch                                                                                               40/81 
  Installing       : perl-mro-1.23-480.el9.x86_64                                                                                                           41/81 
  Installing       : perl-IO-1.43-480.el9.x86_64                                                                                                            42/81 
  Installing       : perl-overloading-0.02-480.el9.noarch                                                                                                   43/81 
  Installing       : perl-Pod-Usage-4:2.01-4.el9.noarch                                                                                                     44/81 
  Installing       : perl-Errno-1.30-480.el9.x86_64                                                                                                         45/81 
  Installing       : perl-File-Basename-2.85-480.el9.noarch                                                                                                 46/81 
  Installing       : perl-Getopt-Std-1.12-480.el9.noarch                                                                                                    47/81 
  Installing       : perl-MIME-Base64-3.16-4.el9.x86_64                                                                                                     48/81 
  Installing       : perl-Scalar-List-Utils-4:1.56-461.el9.x86_64                                                                                           49/81 
  Installing       : perl-constant-1.33-461.el9.noarch                                                                                                      50/81 
  Installing       : perl-Storable-1:3.21-460.el9.x86_64                                                                                                    51/81 
  Installing       : perl-overload-1.31-480.el9.noarch                                                                                                      52/81 
  Installing       : perl-parent-1:0.238-460.el9.noarch                                                                                                     53/81 
  Installing       : perl-vars-1.05-480.el9.noarch                                                                                                          54/81 
  Installing       : perl-Getopt-Long-1:2.52-4.el9.noarch                                                                                                   55/81 
  Installing       : perl-Carp-1.50-460.el9.noarch                                                                                                          56/81 
  Installing       : perl-Exporter-5.74-461.el9.noarch                                                                                                      57/81 
  Installing       : perl-NDBM_File-1.15-480.el9.x86_64                                                                                                     58/81 
  Installing       : perl-PathTools-3.78-461.el9.x86_64                                                                                                     59/81 
  Installing       : perl-Encode-4:3.08-462.el9.x86_64                                                                                                      60/81 
  Installing       : perl-libs-4:5.32.1-480.el9.x86_64                                                                                                      61/81 
  Installing       : perl-interpreter-4:5.32.1-480.el9.x86_64                                                                                               62/81 
  Running scriptlet: xml-common-0.6.3-58.el9.noarch                                                                                                         63/81 
  Installing       : xml-common-0.6.3-58.el9.noarch                                                                                                         63/81 
  Installing       : fontconfig-2.14.0-2.el9_1.x86_64                                                                                                       64/81 
  Running scriptlet: fontconfig-2.14.0-2.el9_1.x86_64                                                                                                       64/81 
  Installing       : libxslt-1.1.34-9.el9.x86_64                                                                                                            65/81 
  Installing       : libXau-1.0.9-8.el9.x86_64                                                                                                              66/81 
  Installing       : libxcb-1.13.1-9.el9.x86_64                                                                                                             67/81 
  Installing       : libX11-common-1.7.0-7.el9.noarch                                                                                                       68/81 
  Installing       : libX11-1.7.0-7.el9.x86_64                                                                                                              69/81 
  Installing       : libXpm-3.5.13-8.el9_1.x86_64                                                                                                           70/81 
  Installing       : jbigkit-libs-2.1-23.el9.x86_64                                                                                                         71/81 
  Installing       : libtiff-4.4.0-7.el9.x86_64                                                                                                             72/81 
  Installing       : gd-2.3.2-3.el9.x86_64                                                                                                                  73/81 
  Installing       : almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                                                                            74/81 
  Installing       : nginx-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                                75/81 
  Running scriptlet: nginx-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                                75/81 
  Installing       : nginx-mod-http-image-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                          76/81 
  Running scriptlet: nginx-mod-http-image-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                          76/81 
  Installing       : nginx-mod-http-perl-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                  77/81 
  Running scriptlet: nginx-mod-http-perl-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                  77/81 
  Installing       : nginx-mod-http-xslt-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                           78/81 
  Running scriptlet: nginx-mod-http-xslt-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                           78/81 
  Installing       : nginx-mod-mail-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                       79/81 
  Running scriptlet: nginx-mod-mail-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                       79/81 
  Installing       : nginx-mod-stream-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                     80/81 
  Running scriptlet: nginx-mod-stream-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                     80/81 
  Installing       : nginx-all-modules-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch                                                                    81/81 
  Running scriptlet: fontconfig-2.14.0-2.el9_1.x86_64                                                                                                       81/81 
  Running scriptlet: nginx-all-modules-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch                                                                    81/81 
  Verifying        : almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                                                                             1/81 
  Verifying        : fontconfig-2.14.0-2.el9_1.x86_64                                                                                                        2/81 
  Verifying        : gd-2.3.2-3.el9.x86_64                                                                                                                   3/81 
  Verifying        : jbigkit-libs-2.1-23.el9.x86_64                                                                                                          4/81 
  Verifying        : langpacks-core-font-en-3.0-16.el9.noarch                                                                                                5/81 
  Verifying        : libX11-1.7.0-7.el9.x86_64                                                                                                               6/81 
  Verifying        : libX11-common-1.7.0-7.el9.noarch                                                                                                        7/81 
  Verifying        : libXau-1.0.9-8.el9.x86_64                                                                                                               8/81 
  Verifying        : libXpm-3.5.13-8.el9_1.x86_64                                                                                                            9/81 
  Verifying        : libtiff-4.4.0-7.el9.x86_64                                                                                                             10/81 
  Verifying        : libwebp-1.2.0-6.el9_1.x86_64                                                                                                           11/81 
  Verifying        : libxcb-1.13.1-9.el9.x86_64                                                                                                             12/81 
  Verifying        : libxslt-1.1.34-9.el9.x86_64                                                                                                            13/81 
  Verifying        : nginx-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                                14/81 
  Verifying        : nginx-all-modules-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch                                                                    15/81 
  Verifying        : nginx-core-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                           16/81 
  Verifying        : nginx-filesystem-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch                                                                     17/81 
  Verifying        : nginx-mod-http-image-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                          18/81 
  Verifying        : nginx-mod-http-perl-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                  19/81 
  Verifying        : nginx-mod-http-xslt-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                           20/81 
  Verifying        : nginx-mod-mail-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                       21/81 
  Verifying        : nginx-mod-stream-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                                                                     22/81 
  Verifying        : perl-AutoLoader-5.74-480.el9.noarch                                                                                                    23/81 
  Verifying        : perl-B-1.80-480.el9.x86_64                                                                                                             24/81 
  Verifying        : perl-Carp-1.50-460.el9.noarch                                                                                                          25/81 
  Verifying        : perl-Class-Struct-0.66-480.el9.noarch                                                                                                  26/81 
  Verifying        : perl-Data-Dumper-2.174-462.el9.x86_64                                                                                                  27/81 
  Verifying        : perl-Digest-1.19-4.el9.noarch                                                                                                          28/81 
  Verifying        : perl-Digest-MD5-2.58-4.el9.x86_64                                                                                                      29/81 
  Verifying        : perl-Encode-4:3.08-462.el9.x86_64                                                                                                      30/81 
  Verifying        : perl-Errno-1.30-480.el9.x86_64                                                                                                         31/81 
  Verifying        : perl-Exporter-5.74-461.el9.noarch                                                                                                      32/81 
  Verifying        : perl-Fcntl-1.13-480.el9.x86_64                                                                                                         33/81 
  Verifying        : perl-File-Basename-2.85-480.el9.noarch                                                                                                 34/81 
  Verifying        : perl-File-Path-2.18-4.el9.noarch                                                                                                       35/81 
  Verifying        : perl-File-Temp-1:0.231.100-4.el9.noarch                                                                                                36/81 
  Verifying        : perl-File-stat-1.09-480.el9.noarch                                                                                                     37/81 
  Verifying        : perl-FileHandle-2.03-480.el9.noarch                                                                                                    38/81 
  Verifying        : perl-Getopt-Long-1:2.52-4.el9.noarch                                                                                                   39/81 
  Verifying        : perl-Getopt-Std-1.12-480.el9.noarch                                                                                                    40/81 
  Verifying        : perl-HTTP-Tiny-0.076-460.el9.noarch                                                                                                    41/81 
  Verifying        : perl-IO-1.43-480.el9.x86_64                                                                                                            42/81 
  Verifying        : perl-IO-Socket-IP-0.41-5.el9.noarch                                                                                                    43/81 
  Verifying        : perl-IO-Socket-SSL-2.073-1.el9.noarch                                                                                                  44/81 
  Verifying        : perl-IPC-Open3-1.21-480.el9.noarch                                                                                                     45/81 
  Verifying        : perl-MIME-Base64-3.16-4.el9.x86_64                                                                                                     46/81 
  Verifying        : perl-Mozilla-CA-20200520-6.el9.noarch                                                                                                  47/81 
  Verifying        : perl-NDBM_File-1.15-480.el9.x86_64                                                                                                     48/81 
  Verifying        : perl-Net-SSLeay-1.92-2.el9.x86_64                                                                                                      49/81 
  Verifying        : perl-POSIX-1.94-480.el9.x86_64                                                                                                         50/81 
  Verifying        : perl-PathTools-3.78-461.el9.x86_64                                                                                                     51/81 
  Verifying        : perl-Pod-Escapes-1:1.07-460.el9.noarch                                                                                                 52/81 
  Verifying        : perl-Pod-Perldoc-3.28.01-461.el9.noarch                                                                                                53/81 
  Verifying        : perl-Pod-Simple-1:3.42-4.el9.noarch                                                                                                    54/81 
  Verifying        : perl-Pod-Usage-4:2.01-4.el9.noarch                                                                                                     55/81 
  Verifying        : perl-Scalar-List-Utils-4:1.56-461.el9.x86_64                                                                                           56/81 
  Verifying        : perl-SelectSaver-1.02-480.el9.noarch                                                                                                   57/81 
  Verifying        : perl-Socket-4:2.031-4.el9.x86_64                                                                                                       58/81 
  Verifying        : perl-Storable-1:3.21-460.el9.x86_64                                                                                                    59/81 
  Verifying        : perl-Symbol-1.08-480.el9.noarch                                                                                                        60/81 
  Verifying        : perl-Term-ANSIColor-5.01-461.el9.noarch                                                                                                61/81 
  Verifying        : perl-Term-Cap-1.17-460.el9.noarch                                                                                                      62/81 
  Verifying        : perl-Text-ParseWords-3.30-460.el9.noarch                                                                                               63/81 
  Verifying        : perl-Text-Tabs+Wrap-2013.0523-460.el9.noarch                                                                                           64/81 
  Verifying        : perl-Time-Local-2:1.300-7.el9.noarch                                                                                                   65/81 
  Verifying        : perl-URI-5.09-3.el9.noarch                                                                                                             66/81 
  Verifying        : perl-base-2.27-480.el9.noarch                                                                                                          67/81 
  Verifying        : perl-constant-1.33-461.el9.noarch                                                                                                      68/81 
  Verifying        : perl-if-0.60.800-480.el9.noarch                                                                                                        69/81 
  Verifying        : perl-interpreter-4:5.32.1-480.el9.x86_64                                                                                               70/81 
  Verifying        : perl-libnet-3.13-4.el9.noarch                                                                                                          71/81 
  Verifying        : perl-libs-4:5.32.1-480.el9.x86_64                                                                                                      72/81 
  Verifying        : perl-mro-1.23-480.el9.x86_64                                                                                                           73/81 
  Verifying        : perl-overload-1.31-480.el9.noarch                                                                                                      74/81 
  Verifying        : perl-overloading-0.02-480.el9.noarch                                                                                                   75/81 
  Verifying        : perl-parent-1:0.238-460.el9.noarch                                                                                                     76/81 
  Verifying        : perl-podlators-1:4.14-460.el9.noarch                                                                                                   77/81 
  Verifying        : perl-subs-1.03-480.el9.noarch                                                                                                          78/81 
  Verifying        : perl-vars-1.05-480.el9.noarch                                                                                                          79/81 
  Verifying        : xml-common-0.6.3-58.el9.noarch                                                                                                         80/81 
  Verifying        : dejavu-sans-fonts-2.37-18.el9.noarch                                                                                                   81/81 

Installed:
  almalinux-logos-httpd-90.5.1-1.1.el9.noarch                                         dejavu-sans-fonts-2.37-18.el9.noarch                                       
  fontconfig-2.14.0-2.el9_1.x86_64                                                    gd-2.3.2-3.el9.x86_64                                                      
  jbigkit-libs-2.1-23.el9.x86_64                                                      langpacks-core-font-en-3.0-16.el9.noarch                                   
  libX11-1.7.0-7.el9.x86_64                                                           libX11-common-1.7.0-7.el9.noarch                                           
  libXau-1.0.9-8.el9.x86_64                                                           libXpm-3.5.13-8.el9_1.x86_64                                               
  libtiff-4.4.0-7.el9.x86_64                                                          libwebp-1.2.0-6.el9_1.x86_64                                               
  libxcb-1.13.1-9.el9.x86_64                                                          libxslt-1.1.34-9.el9.x86_64                                                
  nginx-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                             nginx-all-modules-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch        
  nginx-core-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                        nginx-filesystem-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.noarch         
  nginx-mod-http-image-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64       nginx-mod-http-perl-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64      
  nginx-mod-http-xslt-filter-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64        nginx-mod-mail-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64           
  nginx-mod-stream-1:1.22.1-3.module_el9.2.0+20+2a475c1b.alma.x86_64                  perl-AutoLoader-5.74-480.el9.noarch                                        
  perl-B-1.80-480.el9.x86_64                                                          perl-Carp-1.50-460.el9.noarch                                              
  perl-Class-Struct-0.66-480.el9.noarch                                               perl-Data-Dumper-2.174-462.el9.x86_64                                      
  perl-Digest-1.19-4.el9.noarch                                                       perl-Digest-MD5-2.58-4.el9.x86_64                                          
  perl-Encode-4:3.08-462.el9.x86_64                                                   perl-Errno-1.30-480.el9.x86_64                                             
  perl-Exporter-5.74-461.el9.noarch                                                   perl-Fcntl-1.13-480.el9.x86_64                                             
  perl-File-Basename-2.85-480.el9.noarch                                              perl-File-Path-2.18-4.el9.noarch                                           
  perl-File-Temp-1:0.231.100-4.el9.noarch                                             perl-File-stat-1.09-480.el9.noarch                                         
  perl-FileHandle-2.03-480.el9.noarch                                                 perl-Getopt-Long-1:2.52-4.el9.noarch                                       
  perl-Getopt-Std-1.12-480.el9.noarch                                                 perl-HTTP-Tiny-0.076-460.el9.noarch                                        
  perl-IO-1.43-480.el9.x86_64                                                         perl-IO-Socket-IP-0.41-5.el9.noarch                                        
  perl-IO-Socket-SSL-2.073-1.el9.noarch                                               perl-IPC-Open3-1.21-480.el9.noarch                                         
  perl-MIME-Base64-3.16-4.el9.x86_64                                                  perl-Mozilla-CA-20200520-6.el9.noarch                                      
  perl-NDBM_File-1.15-480.el9.x86_64                                                  perl-Net-SSLeay-1.92-2.el9.x86_64                                          
  perl-POSIX-1.94-480.el9.x86_64                                                      perl-PathTools-3.78-461.el9.x86_64                                         
  perl-Pod-Escapes-1:1.07-460.el9.noarch                                              perl-Pod-Perldoc-3.28.01-461.el9.noarch                                    
  perl-Pod-Simple-1:3.42-4.el9.noarch                                                 perl-Pod-Usage-4:2.01-4.el9.noarch                                         
  perl-Scalar-List-Utils-4:1.56-461.el9.x86_64                                        perl-SelectSaver-1.02-480.el9.noarch                                       
  perl-Socket-4:2.031-4.el9.x86_64                                                    perl-Storable-1:3.21-460.el9.x86_64                                        
  perl-Symbol-1.08-480.el9.noarch                                                     perl-Term-ANSIColor-5.01-461.el9.noarch                                    
  perl-Term-Cap-1.17-460.el9.noarch                                                   perl-Text-ParseWords-3.30-460.el9.noarch                                   
  perl-Text-Tabs+Wrap-2013.0523-460.el9.noarch                                        perl-Time-Local-2:1.300-7.el9.noarch                                       
  perl-URI-5.09-3.el9.noarch                                                          perl-base-2.27-480.el9.noarch                                              
  perl-constant-1.33-461.el9.noarch                                                   perl-if-0.60.800-480.el9.noarch                                            
  perl-interpreter-4:5.32.1-480.el9.x86_64                                            perl-libnet-3.13-4.el9.noarch                                              
  perl-libs-4:5.32.1-480.el9.x86_64                                                   perl-mro-1.23-480.el9.x86_64                                               
  perl-overload-1.31-480.el9.noarch                                                   perl-overloading-0.02-480.el9.noarch                                       
  perl-parent-1:0.238-460.el9.noarch                                                  perl-podlators-1:4.14-460.el9.noarch                                       
  perl-subs-1.03-480.el9.noarch                                                       perl-vars-1.05-480.el9.noarch                                              
  xml-common-0.6.3-58.el9.noarch                                                     

Complete!
```

### ➡️  Test installation

```
nginx -v
```

Expected output (test):
```
nginx version: nginx/1.22.1
```


### 🔖 Variant III: Main-line Repository Install

#### Example

### ➡️  Import the Nginx signing key

```
sudo rpm --import https://nginx.org/keys/nginx_signing.key
```

### ➡️  Create a repo definition file for Nginx

```
sudo tee /etc/yum.repos.d/nginx.repo
```

### ➡️  Populate the new repo file with below text (copy-paste & `Ctrl+D`)

```
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

### ➡️  Install `dnf-uils`

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

### ➡️  Enable the repository

```
dnf config-manager --enable nginx-mainline
```

### ➡️  Install the package

```
sudo dnf install nginx
```

Example output (install):
```
 sudo dnf install nginx
Last metadata expiration check: 0:00:10 ago on Fri Jun  2 21:06:02 2023.
Dependencies resolved.
==================================================================================================================================================================
 Package                          Architecture                      Version                                       Repository                                 Size
==================================================================================================================================================================
Installing:
 nginx                            x86_64                            1:1.25.0-1.el9.ngx                            nginx-mainline                            992 k

Transaction Summary
==================================================================================================================================================================
Install  1 Package

Total download size: 992 k
Installed size: 3.3 M
Is this ok [y/N]: y
Downloading Packages:
nginx-1.25.0-1.el9.ngx.x86_64.rpm                                                                                                  11 MB/s | 992 kB     00:00    
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                              11 MB/s | 992 kB     00:00     
nginx mainline repo                                                                                                                21 kB/s | 1.5 kB     00:00    
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
  Preparing        :                                                                                                                                          1/1 
  Running scriptlet: nginx-1:1.25.0-1.el9.ngx.x86_64                                                                                                          1/1 
  Installing       : nginx-1:1.25.0-1.el9.ngx.x86_64                                                                                                          1/1 
  Running scriptlet: nginx-1:1.25.0-1.el9.ngx.x86_64                                                                                                          1/1 
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

  Verifying        : nginx-1:1.25.0-1.el9.ngx.x86_64                                                                                                          1/1 

Installed:
  nginx-1:1.25.0-1.el9.ngx.x86_64                                                                                                                                 

Complete!
```

### ➡️  Test
```
nginx -v
```

Expected output (test):
```
nginx version: nginx/1.25.0
```

## 📚 Further reading and Next Steps

<u>Get Back:</u>
- AlmaLinux Nginx Series ❯ [A Beginner's Guide](NginxSeriesA01.md)

<u>In-depth Resources:</u>
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 8.x Installation](NginxSeriesA02R8.md)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.1 Installation](NginxSeriesA02R91.md)
- AlmaLinux Nginx Series ❯ [Default Configuration Guide](NginxSeriesA03.md)
- AlmaLinux Nginx Series ❯ [Secure Nginx Deployment](NginxSeriesA04P1.md)

<u>Related Resources:</u>
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](../system/SystemSeriesA02.md)
- AlmaLinux System Series ❯ [Application Streams](../system/SystemSeriesA01.md)
