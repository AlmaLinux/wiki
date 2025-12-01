# A02 R8 ❯ AlmaLinux 8.x Installation

<small>ℹ️ This article is part of AlmaLinux [Nginx Series](/series/).</small>

## 🌟 Introduction

This is a dedicated example for the **AlmaLinux 8.x series**, demonstrating how to install Nginx using one of the three variants:

- Variant I: AppStream non-module
- Variant II: AppStream module
- Variant III: Nginx mainline repository

## 📝 Installation instructions

### System Updates First!

::: warning
Please make sure to run **`sudo dnf update`** before proceeding with any other installation or configuration steps to ensure that your system is up-to-date and any known security vulnerabilities or bugs are patched.
:::

### 📖 Available Nginx Versions (AlmaLinux OS 8.7)

Different Nginx server versions are available to install depending on the installation variant.

|     | Installation Variant | Nginx Versions available | Notes                                                                                          |
| --- | -------------------- | ------------------------ | ---------------------------------------------------------------------------------------------- |
| 🟥  | AppStream non-module | 1.14                     | Default version is outdated and does not get updates! Inadvisable.                             |
| 🟩  | AppStream module     | 1.14 -- 1.20             | Module version are getting the security updates. **The recommended method**.                   |
| 🟨  | Nginx mainline repo  | 1.15.2 -- 1.23.3¹        | You always get latest version of Nginx avaiable. Second good (small chance of incompatibilty). |

¹ current version at the time of testing (1.23.4 already available at Nginx.org)

<u>Architecture Compatibility</u>
| Architecture | Supported |
|-----|----|
| Aarch64 | ✅ |
| PowerPC | ❌ |
| S390X | ✅ |
| X86_64 | ✅ |

### 🔖 Variant I - AppStream Non-module Install

There is no Nginx AppStream non-module package on AlmaLinux 8.x series, but there is an Appstream module one. For that reason, `dnf` will offer you to install Nginx as module (version **1:1.14**) and accompanying elements of its Application Stream, by default.

### ➡️ Install

```
sudo dnf install nginx
```

Example output:

```
Last metadata expiration check: 8:40:11 ago on Thu 13 Apr 2023 09:34:17 PM EDT.
Dependencies resolved.
================================================================================================================================
 Package                            Architecture  Version                                                Repository        Size
================================================================================================================================
Installing:
 nginx                              x86_64        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream        568 k
Installing dependencies:
 gd                                 x86_64        2.2.5-7.el8                                            appstream        143 k
 jbigkit-libs                       x86_64        2.1-14.el8                                             appstream         54 k
 libXpm                             x86_64        3.5.12-9.el8_7                                         appstream         57 k
 libjpeg-turbo                      x86_64        1.5.3-12.el8                                           appstream        156 k
 libtiff                            x86_64        4.0.9-26.el8_7                                         appstream        188 k
 libwebp                            x86_64        1.0.0-5.el8                                            appstream        271 k
 nginx-all-modules                  noarch        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         23 k
 nginx-filesystem                   noarch        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         23 k
 nginx-mod-http-image-filter        x86_64        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         34 k
 nginx-mod-http-perl                x86_64        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         44 k
 nginx-mod-http-xslt-filter         x86_64        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         32 k
 nginx-mod-mail                     x86_64        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         63 k
 nginx-mod-stream                   x86_64        1:1.14.1-9.module_el8.3.0+2165+af250afe.alma           appstream         84 k
 perl-Carp                          noarch        1.42-396.el8                                           baseos            30 k
 perl-Data-Dumper                   x86_64        2.167-399.el8                                          baseos            58 k
 perl-Digest                        noarch        1.17-395.el8                                           appstream         27 k
 perl-Digest-MD5                    x86_64        2.55-396.el8                                           appstream         37 k
 perl-Encode                        x86_64        4:2.97-3.el8                                           baseos           1.5 M
 perl-Errno                         x86_64        1.28-421.el8                                           baseos            75 k
 perl-Exporter                      noarch        5.72-396.el8                                           baseos            34 k
 perl-File-Path                     noarch        2.15-2.el8                                             baseos            38 k
 perl-File-Temp                     noarch        0.230.600-1.el8                                        baseos            62 k
 perl-Getopt-Long                   noarch        1:2.50-4.el8                                           baseos            63 k
 perl-HTTP-Tiny                     noarch        0.074-1.el8                                            baseos            58 k
 perl-IO                            x86_64        1.38-421.el8                                           baseos           141 k
 perl-MIME-Base64                   x86_64        3.15-396.el8                                           baseos            30 k
 perl-Net-SSLeay                    x86_64        1.88-2.module_el8.6.0+2811+fe6c84b0                    appstream        378 k
 perl-PathTools                     x86_64        3.74-1.el8                                             baseos            90 k
 perl-Pod-Escapes                   noarch        1:1.07-395.el8                                         baseos            20 k
 perl-Pod-Perldoc                   noarch        3.28-396.el8                                           baseos            86 k
 perl-Pod-Simple                    noarch        1:3.35-395.el8                                         baseos           213 k
 perl-Pod-Usage                     noarch        4:1.69-395.el8                                         baseos            34 k
 perl-Scalar-List-Utils             x86_64        3:1.49-2.el8                                           baseos            68 k
 perl-Socket                        x86_64        4:2.027-3.el8                                          baseos            59 k
 perl-Storable                      x86_64        1:3.11-3.el8                                           baseos            98 k
 perl-Term-ANSIColor                noarch        4.06-396.el8                                           baseos            46 k
 perl-Term-Cap                      noarch        1.17-395.el8                                           baseos            23 k
 perl-Text-ParseWords               noarch        3.30-395.el8                                           baseos            18 k
 perl-Text-Tabs+Wrap                noarch        2013.0523-395.el8                                      baseos            24 k
 perl-Time-Local                    noarch        1:1.280-1.el8                                          baseos            33 k
 perl-URI                           noarch        1.73-3.el8                                             appstream        116 k
 perl-Unicode-Normalize             x86_64        1.25-396.el8                                           baseos            82 k
 perl-constant                      noarch        1.33-396.el8                                           baseos            25 k
 perl-interpreter                   x86_64        4:5.26.3-421.el8                                       baseos           6.3 M
 perl-libnet                        noarch        3.11-3.el8                                             appstream        121 k
 perl-libs                          x86_64        4:5.26.3-421.el8                                       baseos           1.6 M
 perl-macros                        x86_64        4:5.26.3-421.el8                                       baseos            71 k
 perl-parent                        noarch        1:0.237-1.el8                                          baseos            20 k
 perl-podlators                     noarch        4.11-1.el8                                             baseos           118 k
 perl-threads                       x86_64        1:2.21-2.el8                                           baseos            61 k
 perl-threads-shared                x86_64        1.58-2.el8                                             baseos            47 k
Installing weak dependencies:
 perl-IO-Socket-IP                  noarch        0.39-5.el8                                             appstream         47 k
 perl-IO-Socket-SSL                 noarch        2.066-4.module_el8.6.0+2811+fe6c84b0                   appstream        297 k
 perl-Mozilla-CA                    noarch        20160104-7.module_el8.5.0+2812+ed912d05                appstream         14 k
Enabling module streams:
 nginx                                            1.14
 perl                                             5.26
 perl-IO-Socket-SSL                               2.066
 perl-libwww-perl                                 6.34

Transaction Summary
================================================================================================================================
Install  55 Packages

Total download size: 14 M
Installed size: 40 M
Is this ok [y/N]: y
Downloading Packages:
(1/55): perl-Carp-1.42-396.el8.noarch.rpm                                                       304 kB/s |  30 kB     00:00
(2/55): perl-Data-Dumper-2.167-399.el8.x86_64.rpm                                               489 kB/s |  58 kB     00:00
(3/55): perl-Exporter-5.72-396.el8.noarch.rpm                                                   992 kB/s |  34 kB     00:00
(4/55): perl-Errno-1.28-421.el8.x86_64.rpm                                                      1.1 MB/s |  75 kB     00:00
(5/55): perl-File-Path-2.15-2.el8.noarch.rpm                                                    1.2 MB/s |  38 kB     00:00
(6/55): perl-File-Temp-0.230.600-1.el8.noarch.rpm                                               1.2 MB/s |  62 kB     00:00
(7/55): perl-Getopt-Long-2.50-4.el8.noarch.rpm                                                  1.5 MB/s |  63 kB     00:00
(8/55): perl-HTTP-Tiny-0.074-1.el8.noarch.rpm                                                   1.5 MB/s |  58 kB     00:00
(9/55): perl-IO-1.38-421.el8.x86_64.rpm                                                         3.0 MB/s | 141 kB     00:00
(10/55): perl-Encode-2.97-3.el8.x86_64.rpm                                                      5.0 MB/s | 1.5 MB     00:00
(11/55): perl-MIME-Base64-3.15-396.el8.x86_64.rpm                                               714 kB/s |  30 kB     00:00
(12/55): perl-PathTools-3.74-1.el8.x86_64.rpm                                                   2.1 MB/s |  90 kB     00:00
(13/55): perl-Pod-Escapes-1.07-395.el8.noarch.rpm                                               791 kB/s |  20 kB     00:00
(14/55): perl-Pod-Perldoc-3.28-396.el8.noarch.rpm                                               2.3 MB/s |  86 kB     00:00
(15/55): perl-Pod-Simple-3.35-395.el8.noarch.rpm                                                5.8 MB/s | 213 kB     00:00
(16/55): perl-Pod-Usage-1.69-395.el8.noarch.rpm                                                 935 kB/s |  34 kB     00:00
(17/55): perl-Scalar-List-Utils-1.49-2.el8.x86_64.rpm                                           2.2 MB/s |  68 kB     00:00
(18/55): perl-Socket-2.027-3.el8.x86_64.rpm                                                     1.9 MB/s |  59 kB     00:00
(19/55): perl-Storable-3.11-3.el8.x86_64.rpm                                                    2.8 MB/s |  98 kB     00:00
(20/55): perl-Term-ANSIColor-4.06-396.el8.noarch.rpm                                            1.5 MB/s |  46 kB     00:00
(21/55): perl-Term-Cap-1.17-395.el8.noarch.rpm                                                  740 kB/s |  23 kB     00:00
(22/55): perl-Text-ParseWords-3.30-395.el8.noarch.rpm                                           665 kB/s |  18 kB     00:00
(23/55): perl-Text-Tabs+Wrap-2013.0523-395.el8.noarch.rpm                                       882 kB/s |  24 kB     00:00
(24/55): perl-Time-Local-1.280-1.el8.noarch.rpm                                                 907 kB/s |  33 kB     00:00
(25/55): perl-Unicode-Normalize-1.25-396.el8.x86_64.rpm                                         2.0 MB/s |  82 kB     00:00
(26/55): perl-constant-1.33-396.el8.noarch.rpm                                                  642 kB/s |  25 kB     00:00
(27/55): perl-macros-5.26.3-421.el8.x86_64.rpm                                                  1.2 MB/s |  71 kB     00:00
(28/55): perl-parent-0.237-1.el8.noarch.rpm                                                     389 kB/s |  20 kB     00:00
(29/55): perl-podlators-4.11-1.el8.noarch.rpm                                                   2.3 MB/s | 118 kB     00:00
(30/55): perl-threads-2.21-2.el8.x86_64.rpm                                                     1.5 MB/s |  61 kB     00:00
(31/55): perl-threads-shared-1.58-2.el8.x86_64.rpm                                              956 kB/s |  47 kB     00:00
(32/55): perl-libs-5.26.3-421.el8.x86_64.rpm                                                    5.4 MB/s | 1.6 MB     00:00
(33/55): gd-2.2.5-7.el8.x86_64.rpm                                                              2.3 MB/s | 143 kB     00:00
(34/55): jbigkit-libs-2.1-14.el8.x86_64.rpm                                                     1.1 MB/s |  54 kB     00:00
(35/55): libXpm-3.5.12-9.el8_7.x86_64.rpm                                                       1.8 MB/s |  57 kB     00:00
(36/55): libjpeg-turbo-1.5.3-12.el8.x86_64.rpm                                                  2.1 MB/s | 156 kB     00:00
(37/55): libtiff-4.0.9-26.el8_7.x86_64.rpm                                                      2.4 MB/s | 188 kB     00:00
(38/55): libwebp-1.0.0-5.el8.x86_64.rpm                                                         2.4 MB/s | 271 kB     00:00
(39/55): nginx-1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64.rpm                            3.9 MB/s | 568 kB     00:00
(40/55): nginx-all-modules-1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch.rpm                371 kB/s |  23 kB     00:00
(41/55): nginx-filesystem-1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch.rpm                 456 kB/s |  23 kB     00:00
(42/55): nginx-mod-http-image-filter-1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64.rpm      605 kB/s |  34 kB     00:00
(43/55): nginx-mod-http-perl-1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64.rpm              766 kB/s |  44 kB     00:00
(44/55): nginx-mod-http-xslt-filter-1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64.rpm       616 kB/s |  32 kB     00:00
(45/55): nginx-mod-mail-1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64.rpm                   1.1 MB/s |  63 kB     00:00
(46/55): nginx-mod-stream-1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64.rpm                 1.4 MB/s |  84 kB     00:00
(47/55): perl-interpreter-5.26.3-421.el8.x86_64.rpm                                             7.8 MB/s | 6.3 MB     00:00
(48/55): perl-Digest-1.17-395.el8.noarch.rpm                                                    375 kB/s |  27 kB     00:00
(49/55): perl-Digest-MD5-2.55-396.el8.x86_64.rpm                                                599 kB/s |  37 kB     00:00
(50/55): perl-IO-Socket-IP-0.39-5.el8.noarch.rpm                                                1.7 MB/s |  47 kB     00:00
(51/55): perl-Mozilla-CA-20160104-7.module_el8.5.0+2812+ed912d05.noarch.rpm                     399 kB/s |  14 kB     00:00
(52/55): perl-IO-Socket-SSL-2.066-4.module_el8.6.0+2811+fe6c84b0.noarch.rpm                     5.8 MB/s | 297 kB     00:00
(53/55): perl-URI-1.73-3.el8.noarch.rpm                                                         2.8 MB/s | 116 kB     00:00
(54/55): perl-Net-SSLeay-1.88-2.module_el8.6.0+2811+fe6c84b0.x86_64.rpm                         5.2 MB/s | 378 kB     00:00
(55/55): perl-libnet-3.11-3.el8.noarch.rpm                                                      2.5 MB/s | 121 kB     00:00
--------------------------------------------------------------------------------------------------------------------------------
Total                                                                                           4.5 MB/s |  14 MB     00:03
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                        1/1
  Installing       : perl-Digest-1.17-395.el8.noarch                                                                       1/55
  Installing       : perl-Digest-MD5-2.55-396.el8.x86_64                                                                   2/55
  Installing       : perl-Data-Dumper-2.167-399.el8.x86_64                                                                 3/55
  Installing       : perl-libnet-3.11-3.el8.noarch                                                                         4/55
  Installing       : perl-Net-SSLeay-1.88-2.module_el8.6.0+2811+fe6c84b0.x86_64                                            5/55
  Installing       : perl-URI-1.73-3.el8.noarch                                                                            6/55
  Installing       : perl-Pod-Escapes-1:1.07-395.el8.noarch                                                                7/55
  Installing       : perl-Time-Local-1:1.280-1.el8.noarch                                                                  8/55
  Installing       : perl-IO-Socket-IP-0.39-5.el8.noarch                                                                   9/55
  Installing       : perl-Mozilla-CA-20160104-7.module_el8.5.0+2812+ed912d05.noarch                                       10/55
  Installing       : perl-IO-Socket-SSL-2.066-4.module_el8.6.0+2811+fe6c84b0.noarch                                       11/55
  Installing       : perl-Term-ANSIColor-4.06-396.el8.noarch                                                              12/55
  Installing       : perl-Term-Cap-1.17-395.el8.noarch                                                                    13/55
  Installing       : perl-File-Temp-0.230.600-1.el8.noarch                                                                14/55
  Installing       : perl-Pod-Simple-1:3.35-395.el8.noarch                                                                15/55
  Installing       : perl-HTTP-Tiny-0.074-1.el8.noarch                                                                    16/55
  Installing       : perl-podlators-4.11-1.el8.noarch                                                                     17/55
  Installing       : perl-Pod-Perldoc-3.28-396.el8.noarch                                                                 18/55
  Installing       : perl-Text-ParseWords-3.30-395.el8.noarch                                                             19/55
  Installing       : perl-Pod-Usage-4:1.69-395.el8.noarch                                                                 20/55
  Installing       : perl-MIME-Base64-3.15-396.el8.x86_64                                                                 21/55
  Installing       : perl-Storable-1:3.11-3.el8.x86_64                                                                    22/55
  Installing       : perl-Getopt-Long-1:2.50-4.el8.noarch                                                                 23/55
  Installing       : perl-Errno-1.28-421.el8.x86_64                                                                       24/55
  Installing       : perl-Socket-4:2.027-3.el8.x86_64                                                                     25/55
  Installing       : perl-Encode-4:2.97-3.el8.x86_64                                                                      26/55
  Installing       : perl-Exporter-5.72-396.el8.noarch                                                                    27/55
  Installing       : perl-Scalar-List-Utils-3:1.49-2.el8.x86_64                                                           28/55
  Installing       : perl-macros-4:5.26.3-421.el8.x86_64                                                                  29/55
  Installing       : perl-parent-1:0.237-1.el8.noarch                                                                     30/55
  Installing       : perl-Text-Tabs+Wrap-2013.0523-395.el8.noarch                                                         31/55
  Installing       : perl-Unicode-Normalize-1.25-396.el8.x86_64                                                           32/55
  Installing       : perl-File-Path-2.15-2.el8.noarch                                                                     33/55
  Installing       : perl-IO-1.38-421.el8.x86_64                                                                          34/55
  Installing       : perl-PathTools-3.74-1.el8.x86_64                                                                     35/55
  Installing       : perl-constant-1.33-396.el8.noarch                                                                    36/55
  Installing       : perl-threads-1:2.21-2.el8.x86_64                                                                     37/55
  Installing       : perl-threads-shared-1.58-2.el8.x86_64                                                                38/55
  Installing       : perl-libs-4:5.26.3-421.el8.x86_64                                                                    39/55
  Installing       : perl-Carp-1.42-396.el8.noarch                                                                        40/55
  Installing       : perl-interpreter-4:5.26.3-421.el8.x86_64                                                             41/55
  Installing       : libjpeg-turbo-1.5.3-12.el8.x86_64                                                                    42/55
  Running scriptlet: nginx-filesystem-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch                                 43/55
  Installing       : nginx-filesystem-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch                                 43/55
  Installing       : libwebp-1.0.0-5.el8.x86_64                                                                           44/55
  Installing       : libXpm-3.5.12-9.el8_7.x86_64                                                                         45/55
  Installing       : jbigkit-libs-2.1-14.el8.x86_64                                                                       46/55
  Running scriptlet: jbigkit-libs-2.1-14.el8.x86_64                                                                       46/55
  Installing       : libtiff-4.0.9-26.el8_7.x86_64                                                                        47/55
  Installing       : gd-2.2.5-7.el8.x86_64                                                                                48/55
  Running scriptlet: gd-2.2.5-7.el8.x86_64                                                                                48/55
  Installing       : nginx-mod-http-image-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                      49/55
  Running scriptlet: nginx-mod-http-image-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                      49/55
  Installing       : nginx-mod-http-xslt-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                       50/55
  Running scriptlet: nginx-mod-http-xslt-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                       50/55
  Installing       : nginx-mod-mail-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                   51/55
  Running scriptlet: nginx-mod-mail-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                   51/55
  Installing       : nginx-mod-stream-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                 52/55
  Running scriptlet: nginx-mod-stream-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                 52/55
  Installing       : nginx-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                            53/55
  Running scriptlet: nginx-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                            53/55
  Installing       : nginx-mod-http-perl-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                              54/55
  Running scriptlet: nginx-mod-http-perl-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                              54/55
  Installing       : nginx-all-modules-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch                                55/55
  Running scriptlet: nginx-all-modules-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch                                55/55
  Verifying        : perl-Carp-1.42-396.el8.noarch                                                                         1/55
  Verifying        : perl-Data-Dumper-2.167-399.el8.x86_64                                                                 2/55
  Verifying        : perl-Encode-4:2.97-3.el8.x86_64                                                                       3/55
  Verifying        : perl-Errno-1.28-421.el8.x86_64                                                                        4/55
  Verifying        : perl-Exporter-5.72-396.el8.noarch                                                                     5/55
  Verifying        : perl-File-Path-2.15-2.el8.noarch                                                                      6/55
  Verifying        : perl-File-Temp-0.230.600-1.el8.noarch                                                                 7/55
  Verifying        : perl-Getopt-Long-1:2.50-4.el8.noarch                                                                  8/55
  Verifying        : perl-HTTP-Tiny-0.074-1.el8.noarch                                                                     9/55
  Verifying        : perl-IO-1.38-421.el8.x86_64                                                                          10/55
  Verifying        : perl-MIME-Base64-3.15-396.el8.x86_64                                                                 11/55
  Verifying        : perl-PathTools-3.74-1.el8.x86_64                                                                     12/55
  Verifying        : perl-Pod-Escapes-1:1.07-395.el8.noarch                                                               13/55
  Verifying        : perl-Pod-Perldoc-3.28-396.el8.noarch                                                                 14/55
  Verifying        : perl-Pod-Simple-1:3.35-395.el8.noarch                                                                15/55
  Verifying        : perl-Pod-Usage-4:1.69-395.el8.noarch                                                                 16/55
  Verifying        : perl-Scalar-List-Utils-3:1.49-2.el8.x86_64                                                           17/55
  Verifying        : perl-Socket-4:2.027-3.el8.x86_64                                                                     18/55
  Verifying        : perl-Storable-1:3.11-3.el8.x86_64                                                                    19/55
  Verifying        : perl-Term-ANSIColor-4.06-396.el8.noarch                                                              20/55
  Verifying        : perl-Term-Cap-1.17-395.el8.noarch                                                                    21/55
  Verifying        : perl-Text-ParseWords-3.30-395.el8.noarch                                                             22/55
  Verifying        : perl-Text-Tabs+Wrap-2013.0523-395.el8.noarch                                                         23/55
  Verifying        : perl-Time-Local-1:1.280-1.el8.noarch                                                                 24/55
  Verifying        : perl-Unicode-Normalize-1.25-396.el8.x86_64                                                           25/55
  Verifying        : perl-constant-1.33-396.el8.noarch                                                                    26/55
  Verifying        : perl-interpreter-4:5.26.3-421.el8.x86_64                                                             27/55
  Verifying        : perl-libs-4:5.26.3-421.el8.x86_64                                                                    28/55
  Verifying        : perl-macros-4:5.26.3-421.el8.x86_64                                                                  29/55
  Verifying        : perl-parent-1:0.237-1.el8.noarch                                                                     30/55
  Verifying        : perl-podlators-4.11-1.el8.noarch                                                                     31/55
  Verifying        : perl-threads-1:2.21-2.el8.x86_64                                                                     32/55
  Verifying        : perl-threads-shared-1.58-2.el8.x86_64                                                                33/55
  Verifying        : gd-2.2.5-7.el8.x86_64                                                                                34/55
  Verifying        : jbigkit-libs-2.1-14.el8.x86_64                                                                       35/55
  Verifying        : libXpm-3.5.12-9.el8_7.x86_64                                                                         36/55
  Verifying        : libjpeg-turbo-1.5.3-12.el8.x86_64                                                                    37/55
  Verifying        : libtiff-4.0.9-26.el8_7.x86_64                                                                        38/55
  Verifying        : libwebp-1.0.0-5.el8.x86_64                                                                           39/55
  Verifying        : nginx-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                            40/55
  Verifying        : nginx-all-modules-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch                                41/55
  Verifying        : nginx-filesystem-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch                                 42/55
  Verifying        : nginx-mod-http-image-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                      43/55
  Verifying        : nginx-mod-http-perl-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                              44/55
  Verifying        : nginx-mod-http-xslt-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                       45/55
  Verifying        : nginx-mod-mail-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                   46/55
  Verifying        : nginx-mod-stream-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64                                 47/55
  Verifying        : perl-Digest-1.17-395.el8.noarch                                                                      48/55
  Verifying        : perl-Digest-MD5-2.55-396.el8.x86_64                                                                  49/55
  Verifying        : perl-IO-Socket-IP-0.39-5.el8.noarch                                                                  50/55
  Verifying        : perl-IO-Socket-SSL-2.066-4.module_el8.6.0+2811+fe6c84b0.noarch                                       51/55
  Verifying        : perl-Mozilla-CA-20160104-7.module_el8.5.0+2812+ed912d05.noarch                                       52/55
  Verifying        : perl-Net-SSLeay-1.88-2.module_el8.6.0+2811+fe6c84b0.x86_64                                           53/55
  Verifying        : perl-URI-1.73-3.el8.noarch                                                                           54/55
  Verifying        : perl-libnet-3.11-3.el8.noarch                                                                        55/55

Installed:
  gd-2.2.5-7.el8.x86_64
  jbigkit-libs-2.1-14.el8.x86_64
  libXpm-3.5.12-9.el8_7.x86_64
  libjpeg-turbo-1.5.3-12.el8.x86_64
  libtiff-4.0.9-26.el8_7.x86_64
  libwebp-1.0.0-5.el8.x86_64
  nginx-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64
  nginx-all-modules-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch
  nginx-filesystem-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.noarch
  nginx-mod-http-image-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64
  nginx-mod-http-perl-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64
  nginx-mod-http-xslt-filter-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64
  nginx-mod-mail-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64
  nginx-mod-stream-1:1.14.1-9.module_el8.3.0+2165+af250afe.alma.x86_64
  perl-Carp-1.42-396.el8.noarch
  perl-Data-Dumper-2.167-399.el8.x86_64
  perl-Digest-1.17-395.el8.noarch
  perl-Digest-MD5-2.55-396.el8.x86_64
  perl-Encode-4:2.97-3.el8.x86_64
  perl-Errno-1.28-421.el8.x86_64
  perl-Exporter-5.72-396.el8.noarch
  perl-File-Path-2.15-2.el8.noarch
  perl-File-Temp-0.230.600-1.el8.noarch
  perl-Getopt-Long-1:2.50-4.el8.noarch
  perl-HTTP-Tiny-0.074-1.el8.noarch
  perl-IO-1.38-421.el8.x86_64
  perl-IO-Socket-IP-0.39-5.el8.noarch
  perl-IO-Socket-SSL-2.066-4.module_el8.6.0+2811+fe6c84b0.noarch
  perl-MIME-Base64-3.15-396.el8.x86_64
  perl-Mozilla-CA-20160104-7.module_el8.5.0+2812+ed912d05.noarch
  perl-Net-SSLeay-1.88-2.module_el8.6.0+2811+fe6c84b0.x86_64
  perl-PathTools-3.74-1.el8.x86_64
  perl-Pod-Escapes-1:1.07-395.el8.noarch
  perl-Pod-Perldoc-3.28-396.el8.noarch
  perl-Pod-Simple-1:3.35-395.el8.noarch
  perl-Pod-Usage-4:1.69-395.el8.noarch
  perl-Scalar-List-Utils-3:1.49-2.el8.x86_64
  perl-Socket-4:2.027-3.el8.x86_64
  perl-Storable-1:3.11-3.el8.x86_64
  perl-Term-ANSIColor-4.06-396.el8.noarch
  perl-Term-Cap-1.17-395.el8.noarch
  perl-Text-ParseWords-3.30-395.el8.noarch
  perl-Text-Tabs+Wrap-2013.0523-395.el8.noarch
  perl-Time-Local-1:1.280-1.el8.noarch
  perl-URI-1.73-3.el8.noarch
  perl-Unicode-Normalize-1.25-396.el8.x86_64
  perl-constant-1.33-396.el8.noarch
  perl-interpreter-4:5.26.3-421.el8.x86_64
  perl-libnet-3.11-3.el8.noarch
  perl-libs-4:5.26.3-421.el8.x86_64
  perl-macros-4:5.26.3-421.el8.x86_64
  perl-parent-1:0.237-1.el8.noarch
  perl-podlators-4.11-1.el8.noarch
  perl-threads-1:2.21-2.el8.x86_64
  perl-threads-shared-1.58-2.el8.x86_64

Complete!
```

### ➡️ Test installation

```
nginx -v
```

Expected output:

```
nginx version: nginx/1.14.1
```

### 🔖 Variant II: AppStream Module Install

To install the latest module version of Nginx on AlmaLinux (8.7 in the example below) you can list available module versions (streams) and then install ("enable" for modules) selected version.

### ➡️ Pre-Install: list versions

```
sudo dnf module list nginx
```

Example output (pre-install):

```
AlmaLinux 8 - AppStream                                                                         5.0 kB/s | 4.1 kB     00:00
AlmaLinux 8 - AppStream                                                                         6.3 MB/s |  12 MB     00:01
AlmaLinux 8 - Extras                                                                            4.2 kB/s | 3.8 kB     00:00
AlmaLinux 8 - Extras                                                                             21 kB/s |  19 kB     00:00
Extra Packages for Enterprise Linux 8 - x86_64                                                   11 kB/s |  28 kB     00:02
Extra Packages for Enterprise Linux 8 - x86_64                                                  6.5 MB/s |  14 MB     00:02
Symas OpenLDAP for Linux RPM repository                                                         4.2 kB/s | 2.9 kB     00:00
AlmaLinux 8 - AppStream
Name                       Stream                           Profiles                        Summary
nginx                      1.14 [d][x]                      common [d]                      nginx webserver
nginx                      1.16 [x]                         common [d]                      nginx webserver
nginx                      1.18 [x]                         common [d]                      nginx webserver
nginx                      1.20 [x]                         common [d]                      nginx webserver

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

### ➡️ Install: enable the selected module version

```
sudo dnf module enable nginx:1.20
```

Example output (module enable)):

```
Last metadata expiration check: 0:00:44 ago on Thu 13 Apr 2023 09:06:58 PM EDT.
Dependencies resolved.
================================================================================================================================
 Package                       Architecture                 Version                         Repository                     Size
================================================================================================================================
Enabling module streams:
 nginx                                                      1.20

Transaction Summary
================================================================================================================================

Is this ok [y/N]: y
Complete!
```

### ➡️ Install: actual package installation

```
sudo dnf install nginx
```

Expected output (install):
:::warning
TODO: EXAMPLE IS MISSING!
:::s

### ➡️ Test installation

```
nginx -v
```

Expected output (test)

```
nginx version: nginx/1.20.1
```

:::warning
Note: If you switch between different versions of a module, you may need to <u>reset its state</u> using the command `dnf module reset <module-name>` to enable installing another version.

In Nginx case `<module-name>` is `nginx`.
:::

### 🔖 Variant III: Main-line Repository Install

To install the latest RPM package of Nginx on AlmaLinux (8.7 in example below) from the official Nginx repository (https://nginx.org), you can follow these steps:

### ➡️ Add the repository

**Import the Nginx signing key**

```
sudo rpm --import https://nginx.org/keys/nginx_signing.key
```

**Create a new Nginx repository file in the /etc/yum.repos.d/ directory with editor of choice**

```
sudo tee /etc/yum.repos.d/nginx.repo
```

** Populate the new repo file with below text (copy-paste & press `Ctrl+D`)**

```
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

::: tip
When editing the file, you can change `enabled=0` setting it to `1`. With that change you can skip next two steps (installing `dnf-utils` and running `dnf config-manager`).
:::

### ➡️ Install `dnf-uils`

```
sudo dnf install dnf-utils
```

**Enable the newly add external repo from nginx.org:**

```
sudo dnf config-manager --enable nginx-mainline
```

**Finally, install Nginx:**

```
sudo dnf install nginx
```

Example output:

With the official Nginx mainline repo enabled `dnf` allows to install the latest available: `1.23.3`.

```
nginx stable repo                                                                                24 kB/s | 2.9 kB     00:00
nginx mainline repo                                                                              39 kB/s | 2.9 kB     00:00
Dependencies resolved.
================================================================================================================================
 Package                 Architecture             Version                                Repository                        Size
================================================================================================================================
Installing:
 nginx                   x86_64                   1:1.23.3-1.el8.ngx                     nginx-mainline                   834 k

Transaction Summary
================================================================================================================================
Install  1 Package

Total download size: 834 k
Installed size: 2.8 M
Is this ok [y/N]: y
Downloading Packages:
nginx-1.23.3-1.el8.ngx.x86_64.rpm                                                               2.9 MB/s | 834 kB     00:00
--------------------------------------------------------------------------------------------------------------------------------
Total                                                                                           2.9 MB/s | 834 kB     00:00
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                        1/1
  Running scriptlet: nginx-1:1.23.3-1.el8.ngx.x86_64                                                                        1/1
  Installing       : nginx-1:1.23.3-1.el8.ngx.x86_64                                                                        1/1
  Running scriptlet: nginx-1:1.23.3-1.el8.ngx.x86_64                                                                        1/1
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

  Verifying        : nginx-1:1.23.3-1.el8.ngx.x86_64                                                                        1/1

Installed:
  nginx-1:1.23.3-1.el8.ngx.x86_64

Complete!
```

### ➡️ Test

```
nginx -v
```

Expected output (test):

```
nginx version: nginx/1.23.3
```

## 📚 Further reading and Next Steps

<u>Get Back:</u>

- AlmaLinux Nginx Series ❯ [A Beginner's Guide](NginxSeriesA01.md)

<u>In-depth Resources:</u>

- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.1 Installation](NginxSeriesA02R91.md)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.2 Installation](NginxSeriesA02R92.md)
- AlmaLinux Nginx Series ❯ [Default Configuration Guide](NginxSeriesA03.md)
- AlmaLinux Nginx Series ❯ [Secure Nginx Deployment](NginxSeriesA04P1.md)

<u>Related Resources:</u>

- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](../system/SystemSeriesA02.md)
- AlmaLinux System Series ❯ [Application Streams](../system/SystemSeriesA01.md)
