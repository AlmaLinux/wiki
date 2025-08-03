# A01 ❯ Application Streams

<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>

<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-16
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ 9.1 \| x86_64 \| 2023-04-21 </small>|
<br>

## 🌟 Introduction

This guide will introduce the fundamental concepts of AppStream modules and demonstrate their usage in an AlmaLinux environment. With the introduction of Application Streams in Red Hat® Enterprise Linux 8, user-space components can be delivered and updated more frequently than the core operating system packages. This feature enables greater customization of your AlmaLinux installation without compromising the platform's underlying stability or specific deployments.

## 🧠 Fundamental Concepts

### AppStream

The AppStream repository contains both modular and non-modular packages. Non-modular packages, which serve as general-purpose utilities, libraries, or dependencies, are not tied to any specific module. They can be installed and updated independently, offering users more flexibility and control over their software stack.

### AppStream Modularity

AppStream's modular design ensures the delivery of software packages as independent modules, each with its own release schedule and lifecycle. This approach facilitates the provision of new features and updates for applications without necessitating a complete operating system upgrade. By incorporating both modular and non-modular packages, AppStream provides users with a wide variety of software options while maintaining system stability, compatibility, and security.
AppStream modules provide a cohesive and tested set of packages that work together and ensure that all necessary packages are installed and configured correctly.

## 📝 Key Takeaways

To use AppStream modules in your AlmaLinux environment, you need to understand the following fundamental concepts:

- **Modules**: A module is a set of RPM packages that represent a component and are usually installed together. A typical module includes packages with the application, application-specific dependency libraries, documentation, and helper utilities.
- **Streams**: A stream is a version of a module. A module can have multiple streams that represent different versions of the same component.
- **Profiles**: A profile is a set of streams for a module. Each profile represents a specific use case or workload.

## 📖 Version Specific Examples

### ➡️ Version independent calling (here installing) syntax is:

`sudo dnf module install nginx:<stream>/<profile>`

::: tip
There is a substantially greater number of AppStream modules available for the AlmaLinux 8.x series compared to the 9.x series.
:::
:::warning
Below we show list of modules available for each (major) AlmaLinux release.
:::

### 🔖 AlmaLinux 8.7

### ➡️ List modules

```
dnf module list
```

Expected output:

```
Last metadata expiration check: 0:08:54 ago on Sun 16 Apr 2023 07:42:28 AM EDT.
AlmaLinux 8 - AppStream
Name                 Stream          Profiles                                 Summary
389-ds               1.4                                                      389 Directory Server (base)
ant                  1.10 [d]        common [d]                               Java build tool
container-tools      rhel8 [d][e]    common [d]                               Most recent (rolling) versions of podman, buildah, skopeo, runc, conmon, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and updated as frequently as every 12 weeks.
container-tools      1.0             common [d]                               Stable versions of podman 1.0, buildah 1.5, skopeo 0.1, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported for 24 months.
container-tools      2.0             common [d]                               Stable versions of podman 1.6, buildah 1.11, skopeo 0.1, runc, conmon, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.
container-tools      3.0             common [d]                               Stable versions of podman 3.0, buildah 1.19, skopeo 1.2, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.
container-tools      4.0             common [d]                               Stable versions of podman 4.0, buildah 1.24, skopeo 1.6, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.
eclipse              rhel8           java [d]                                 An open, extensible IDE and application platform
freeradius           3.0 [d]         server [d]                               High-performance and highly configurable free RADIUS server
gimp                 2.8 [d]         common [d], devel                        gimp module
go-toolset           rhel8 [d]       common [d]                               Go
httpd                2.4 [d]         common [d], devel, minimal               Apache HTTP Server
idm                  DL1             adtrust, client, common [d], dns, server The Red Hat Enterprise Linux Identity Management system module
idm                  client [d]      common [d]                               RHEL IdM long term support client module
inkscape             0.92.3 [d]      common [d]                               Vector-based drawing program using SVG
javapackages-runtime 201801 [d]      common [d]                               Basic runtime utilities to support Java applications
jmc                  rhel8 [d]       common [d], core                         Java Mission Control is a profiling and diagnostics tool for the Hotspot JVM
libselinux-python    2.8             common                                   Python 2 bindings for libselinux
llvm-toolset         rhel8 [d]       common [d]                               LLVM
log4j                2 [d]           common [d]                               Java logging library
mailman              2.1 [d]         common [d]                               Electronic mail discussion and e-newsletter lists managing software
mariadb              10.3 [d]        client, galera, server [d]               MariaDB Module
mariadb              10.5            client, galera, server [d]               MariaDB Module
maven                3.5 [d]         common [d]                               Java project management and project comprehension tool
maven                3.6             common [d]                               Java project management and project comprehension tool
maven                3.8             common [d]                               Java project management and project comprehension tool
mercurial            4.8 [d]         common [d]                               Mercurial -- a distributed SCM
mercurial            6.2             common [d]                               Mercurial -- a distributed SCM
mod_auth_openidc     2.3 [d]         default [d]                              Apache module suporting OpenID Connect authentication
mysql                8.0 [d]         client, server [d]                       MySQL Module
nginx                1.14 [d]        common [d]                               nginx webserver
nginx                1.16            common [d]                               nginx webserver
nginx                1.18            common [d]                               nginx webserver
nginx                1.20 [e]        common [d] [i]                           nginx webserver
nodejs               10 [d]          common [d], development, minimal, s2i    Javascript runtime
nodejs               12              common [d], development, minimal, s2i    Javascript runtime
nodejs               14              common [d], development, minimal, s2i    Javascript runtime
nodejs               16              common [d], development, minimal, s2i    Javascript runtime
nodejs               18              common [d], development, minimal, s2i    Javascript runtime
parfait              0.5             common                                   Parfait Module
perl                 5.24            common [d], minimal                      Practical Extraction and Report Language
perl                 5.26 [d][e]     common [d], minimal                      Practical Extraction and Report Language
perl                 5.30            common [d], minimal                      Practical Extraction and Report Language
perl                 5.32            common [d], minimal                      Practical Extraction and Report Language
perl-App-cpanminus   1.7044 [d]      common [d]                               Get, unpack, build and install CPAN modules
perl-DBD-MySQL       4.046 [d]       common [d]                               A MySQL interface for Perl
perl-DBD-Pg          3.7 [d]         common [d]                               A PostgreSQL interface for Perl
perl-DBD-SQLite      1.58 [d]        common [d]                               SQLite DBI driver
perl-DBI             1.641 [d]       common [d]                               A database access API for Perl
perl-FCGI            0.78 [d]        common [d]                               FastCGI Perl bindings
perl-IO-Socket-SSL   2.066 [d][e]    common [d]                               Perl library for transparent TLS
perl-YAML            1.24 [d]        common [d]                               Perl parser for YAML
perl-libwww-perl     6.34 [d][e]     common [d]                               A Perl interface to the World-Wide Web
php                  7.2 [d]         common [d], devel, minimal               PHP scripting language
php                  7.3             common [d], devel, minimal               PHP scripting language
php                  7.4             common [d], devel, minimal               PHP scripting language
php                  8.0             common [d], devel, minimal               PHP scripting language
pki-core             10.6                                                     PKI Core module for PKI 10.6 or later
pki-deps             10.6                                                     PKI Dependencies module for PKI 10.6 or later
pmdk                 1_fileformat_v6                                          Persistent Memory Development Kit (former NVML)
postgresql           9.6             client, server [d]                       PostgreSQL server and client module
postgresql           10 [d]          client, server [d]                       PostgreSQL server and client module
postgresql           12              client, server [d]                       PostgreSQL server and client module
postgresql           13              client, server [d]                       PostgreSQL server and client module
python27             2.7 [d]         common [d]                               Python programming language, version 2.7
python36             3.6 [d]         build, common [d]                        Python programming language, version 3.6
python38             3.8 [d]         build, common [d]                        Python programming language, version 3.8
python39             3.9 [d]         build, common [d]                        Python programming language, version 3.9
redis                5 [d]           common [d]                               Redis persistent key-value database
redis                6               common [d]                               Redis persistent key-value database
rhn-tools            1.0 [d]         common [d]                               Red Hat Satellite 5 tools for RHEL
ruby                 2.5 [d]         common [d]                               An interpreter of object-oriented scripting language
ruby                 2.6             common [d]                               An interpreter of object-oriented scripting language
ruby                 2.7             common [d]                               An interpreter of object-oriented scripting language
ruby                 3.0             common [d]                               An interpreter of object-oriented scripting language
ruby                 3.1             common [d]                               An interpreter of object-oriented scripting language
rust-toolset         rhel8 [d]       common [d]                               Rust
satellite-5-client   1.0 [d]         common [d], gui                          Red Hat Satellite 5 client packages
scala                2.10 [d]        common [d]                               A hybrid functional/object-oriented language for the JVM
squid                4 [d]           common [d]                               Squid - Optimising Web Delivery
subversion           1.10 [d]        common [d], server                       Apache Subversion
subversion           1.14            common [d], server                       Apache Subversion
swig                 3.0 [d]         common [d], complete                     Connects C/C++/Objective C to some high-level programming languages
swig                 4.0             common [d], complete                     Connects C/C++/Objective C to some high-level programming languages
varnish              6 [d]           common [d]                               Varnish HTTP cache
virt                 rhel [d][e]     common [d]                               Virtualization module

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled


```

### 🔖 AlmaLinux 9.1

### ➡️ List modules

```
dnf module list
```

Expected output:

```
Last metadata expiration check: 13:03:40 ago on Sun 16 Apr 2023 12:31:58 AM CEST.
AlmaLinux 9 - AppStream
Name                          Stream                          Profiles                                              Summary
maven                         3.8                             common [d]                                            Java project management and project comprehension tool
nodejs                        18                              common [d], development, minimal, s2i                 Javascript runtime
php                           8.1                             common [d], devel, minimal                            PHP scripting language
ruby                          3.1                             common [d]                                            An interpreter of object-oriented scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

## 📚 Further Reading and Next Steps

<u>In-depth Resources:</u>

- [Introduction of Application Streams (RHEL 8)](https://www.redhat.com/en/blog/introduction-appstreams-and-modules-red-hat-enterprise-linux)
- [Application Streams Considerations (RHEL 9)](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/considerations_in_adopting_rhel_9/ref_application-streams_considerations-in-adopting-rhel-9)

<u>Related Resources:</u>

- AlmaLinux Nginx Series ❯ [A Beginner's Guide](../nginx/NginxSeriesA01.md)
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](SystemSeriesA02.md)
