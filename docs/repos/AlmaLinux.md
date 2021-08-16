---
title: 'AlmaLinux Repositories'
---
# AlmaLinux Repositories

Information about AlmaLinux main repositories and how to install them can be found on this page. 

| Repositories | Description | How to install |
| --- | --- | --- |
| BaseOS | Content in the BaseOS repository is intended to provide a core set of the underlying OS functionality that provides the foundation for all installations. | Enabled by default |
| AppStream | Content in the AppStream repository includes additional user space applications, runtime languages, and databases in support of the varied workloads and use cases. | Enabled by default |
| Extras | Content in the extras repository includes packages that are not available in RHEL. Mostly they are release packages for additional repos like EPEL, ELRepo or various CentOS SIGs. | Enabled by default |
| PowerTools | The PowerTools repository contains additional packages for use by developers. | # dnf config-manager --set-enabled powertools |
| High Availability | The High Availability add-on provides on-demand failover services between nodes within a cluster | # dnf config-manager --set-enabled ha | 


