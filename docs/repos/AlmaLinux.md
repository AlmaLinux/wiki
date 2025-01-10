---
title: 'AlmaLinux Repositories'
parent: 'Repositories'
grandparent: 'Installation'
---

<Breadcrumbs />

# AlmaLinux Repositories

Information about the main AlmaLinux repositories and how to install them can be found on this page. 

| Repository | Description | How to Enable on AlmaLinux 8 | How to Enable on AlmaLinux 9 |
| --- | --- | --- | --- |
| BaseOS | Content in the BaseOS repository is intended to provide a core set of the underlying OS functionality that provides the foundation for all installations. | Enabled by default | Enabled by default |
| AppStream | Content in the AppStream repository includes additional user space applications, runtime languages, and databases in support of the varied workloads and use cases. | Enabled by default | Enabled by default |
| Extras | Content in the extras repository includes packages that are not available in RHEL. They are mostly release packages for additional repos like EPEL, ELRepo or the various CentOS SIGs. | Enabled by default | Enabled by default |
| High Availability | The High Availability add-on provides on-demand failover services between nodes within a cluster | # dnf config-manager --set-enabled ha | # dnf config-manager --set-enabled highavailability | 
| Plus | This repository contains packages that replace a core component via patched functionality. Packages have a .plus added to their version tag. These are not tested nor available in the upstream product. | # dnf config-manager --set-enabled plus | # dnf config-manager --set-enabled plus |
| PowerTools/CRB | The PowerTools repository contains additional packages for use by developers. This repository is also known as the "CodeReady Builder" repository used on RHEL.| # dnf config-manager --set-enabled powertools | # dnf config-manager --set-enabled crb |
| Real Time (RT) | The Real Time repository is designed to be used on well-tuned systems for applications with extremely high determinism requirements. Kernel system tuning offers the vast majority of the improvement in determinism. | # dnf config-manager --set-enabled rt | # dnf config-manager --set-enabled rt |
| Real Time for NFV (NFV) | The Real Time for NFV repository can be used to virtualize network services, such as routers, firewalls, and load balancers, that have traditionally been run on proprietary hardware. | # dnf config-manager --set-enabled nfv | # dnf config-manager --set-enabled nfv |
| ResilientStorage | The Resilient Storage add-on enables a shared storage or clustered file system to access the same storage device over a network through a pool of data that is available to each server in the group. | # dnf config-manager --set-enabled resilientstorage | # dnf config-manager --set-enabled resilientstorage |
| SAP | The SAP repository provides additional software components necessary to run SAP NetWeaveror SAP Kernel on AlmaLinux | # dnf config-manager --set-enabled sap  | # dnf config-manager --set-enabled sap |
| SAPHANA | The SAPHANA repository is tailored to the needs of SAP workloads such as S/4HANA and SAP HANA platform. | # dnf config-manager --set-enabled saphana | # dnf config-manager --set-enabled saphana |
| Testing | Content in the Testing repository includes updates that require additional testing before they are released to stable repositories. **Please, note, that it's *NOT* recommended to install packages from the Testing repo on production machines.** | # dnf install almalinux-release-testing | # dnf install almalinux-release-testing |
| Devel | Content in the Devel repo includes packages that are not normally provided in the base nor extra repositories, but needed for build-time dependencies of other packages. **Devel is *NOT* meant to satisfy runtime dependencies or for long term use on general purpose machines.**| # dnf install almalinux-release-devel | # dnf install almalinux-release-devel |

AlmaLinux has a [Vault](http://repo.almalinux.org/vault/) repository that provides packages and isos for previous AlmaLinux OS versions. Also, the Vault repository contains 32-bit packages for the latest stable version to build.  Vault and other AlmaLinux repositories are available on [repo.almalinux.org](http://repo.almalinux.org/). 
