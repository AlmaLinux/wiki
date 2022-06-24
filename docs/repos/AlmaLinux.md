---
title: 'AlmaLinux Repositories'
---
# AlmaLinux Repositories

Information about the main AlmaLinux repositories and how to install them can be found on this page. 

| Repository | Description | How to Enable on AlmaLinux 8 | How to Enable on AlmaLinux 9 |
| --- | --- | --- | --- |
| BaseOS | Content in the BaseOS repository is intended to provide a core set of the underlying OS functionality that provides the foundation for all installations. | Enabled by default | Enabled by default |
| AppStream | Content in the AppStream repository includes additional user space applications, runtime languages, and databases in support of the varied workloads and use cases. | Enabled by default | Enabled by default |
| Extras | Content in the extras repository includes packages that are not available in RHEL. They are mostly release packages for additional repos like EPEL, ELRepo or the various CentOS SIGs. | Enabled by default | Enabled by default |
| PowerTools/CRB | The PowerTools repository contains additional packages for use by developers. This repository is also known as the "CodeReady Builder" repository used on RHEL.| # dnf config-manager --set-enabled powertools | # dnf config-manager --set-enabled crb |
| High Availability | The High Availability add-on provides on-demand failover services between nodes within a cluster | # dnf config-manager --set-enabled ha | # dnf config-manager --set-enabled ha | 

AlmaLinux has a [Vault](http://repo.almalinux.org/vault/) repository that provides packages and isos for previous AlmaLinux OS versions. Also, the Vault repository contains 32-bit packages for the latest stable version to build.  Vault and other AlmaLinux repositories are available on [repo.almalinux.org](http://repo.almalinux.org/). 
