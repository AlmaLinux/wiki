---
title: 'AlmaLinux OS Kitten 10'
parent: 'Development'
---

###### last modified: 2025-01-06

<Breadcrumbs />

# About AlmaLinux OS Kitten 10

###### Note: Our kitten is not related to [this one](https://www.sandia.gov/ccr/software/kitten-lightweight-kernel/) :D

AlmaLinux OS Kitten is the direct upstream for AlmaLinux OS 10, and is the primary point for the AlmaLinux community to engage and influence the future of AlmaLinux OS. Fixes and features land here first and trickle down into AlmaLinux OS as appropriate. It is the integration and collaboration point for AlmaLinux to its upstreams as well, such as CentOS Stream and Fedora.

Currently, AlmaLinux OS Kitten is based on CentOS Stream 10 code and provides a stable preview of AlmaLinux OS 10.

AlmaLinux Kitten also allows anyone who is building from or extending AlmaLinux to engage in our building and release processes and gain a deeper understanding of them.

<img src=/images/kitten10-screenshot.png width="75%" height="75%">

## Mirrors, ISOs, and Update Frequency

AlmaLinux OS Kitten 10 has its own primary mirror URLs:
* [kitten.repo.almalinux.org](https://kitten.repo.almalinux.org)
* [kitten.vault.almalinux.org](https://kitten.vault.almalinux.org)

Package updates will be released regularly and frequently. ISOs will be rebuilt and published with the latest updates every 3 months.

#### Why Kitten?
AlmaLinux OS has used [cat names](/FAQ.html#why-does-the-almalinux-codename-include-cats) in our code names for our entire existence, and this felt like a perfect extension of that. This OS is the version that will grow up to be the next AlmaLinux OS cat.

## Cloud Images 

AlmaLinux provides official AlmaLinux OS Kitten 10 images for various cloud providers.

### Amazon Web Services (AWS)

AlmaLinux OS offers Amazon Machine Images in a number of formats and regions for consumption on AWS. All AlmaLinux OS AMIs are completely free of charge regardless of the deployment channel.

More about AlmaLinux OS images for AWS - [AlmaLinux AWS Wiki Page](/cloud/AWS).

#### AWS Marketplace

The AlmaLinux OS Foundation's official AlmaLinux OS Kitten 10 images are available via the [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=529d1014-352c-4bed-8b63-6120e4bd3342).

#### Community AMIs

Community AMIs are images that are shared directly by the AlmaLinux OS Foundation for others to utilize directly within their infrastructure. Below is a complete list of currently published AMIs and their corresponding IDs. For purposes of automation and integration into build tools and CI/CD pipelines, this list is also available as a [CSV](https://wiki.almalinux.org/ci-data/aws_amis_kitten_10.csv) file.

<details>
  <summary>Click to expand AlmaLinux OS Kitten 10 AMIs</summary>
  
  <Content :page-key="$site.pages.find(p => p.path === '/development/AWS_AMIS_kitten_10.html').key"/>
</details>



### Generic Cloud

The AlmaLinux OS Generic Cloud images are available from our [mirrors](https://mirrors.almalinux.org/) and from the AlmaLinux OS Kitten repositories:

| | | | | | | 
| --- | --- | --- | --- | --- | --- |
| AlmaLinux OS Kitten 10 | [x86_64](https://kitten.repo.almalinux.org/10-kitten/cloud/x86_64/images/) | [aarch64](https://kitten.repo.almalinux.org/10-kitten/cloud/aarch64/images/) | [s390x](https://kitten.repo.almalinux.org/10-kitten/cloud/s390x/images/) | [ppc64le](https://kitten.repo.almalinux.org/10-kitten/cloud/ppc64le/images/) | [x86_64_v2](https://kitten.repo.almalinux.org/10-kitten/cloud/x86_64_v2/images/) |

More about AlmaLinux OS images for Generic Cloud - [AlmaLinux Generic Cloud Wiki Page](/cloud/Generic-cloud).

### Microsoft Azure

AlmaLinux offers AlmaLinux OS Kitten 10 images for Azure across all Azure regions via the Azure Marketplace. Images are deployable via the marketplace, portal and CLI.
* [x86_64](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/almalinux.kitten)
* [aarch64](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/almalinux.kitten)

More about AlmaLinux OS images for Azure - [AlmaLinux Azure Wiki Page](/cloud/Azure).

### OpenNebula

The AlmaLinux OS OpenNebula images are available from our [mirrors](https://mirrors.almalinux.org/) and from the AlmaLinux OS Kitten repositories:

| | | | |
| --- | --- | --- | --- |
| AlmaLinux OS Kitten 10 | [x86_64](https://kitten.repo.almalinux.org/10-kitten/cloud/x86_64/images/) | [aarch64](https://kitten.repo.almalinux.org/10-kitten/cloud/aarch64/images/) | [x86_64_v2](https://kitten.repo.almalinux.org/10-kitten/cloud/x86_64_v2/images/) |

More about AlmaLinux OS images for OpenNebula - [AlmaLinux OpenNebula Wiki Page](/cloud/OpenNebula).

## Container Images

AlmaLinux OS provides official OCI, Docker and four fully compatible alternatives for Red Hat Universal Base Images (UBI):

| Image | Container tag | Link to the Repository | 
| --- | --- | --- |
| Default (Platform) | almalinux:10-kitten| [DockerHub](https://hub.docker.com/_/almalinux) |
| Minimal (Platform) | almalinux:10-kitten-minimal| [DockerHub](https://hub.docker.com/_/almalinux) |

**UBI-alternatives**
| Image | Container tag | Link to the Repository | 
| --- | --- | --- 
| Minimal | almalinux/10-kitten-minimal | - [DockerHub](https://hub.docker.com/r/almalinux/10-kitten-minimal)<br>- [quay.io](https://quay.io/repository/almalinuxorg/10-kitten-minimal)<br>- [GitHub Packages](https://github.com/orgs/AlmaLinux/packages/container/package/10-kitten-minimal) |
| Base | almalinux/10-kitten-base | - [DockerHub](https://hub.docker.com/r/almalinux/10-kitten-base)<br>- [quay.io](https://quay.io/repository/almalinuxorg/10-kitten-base)<br>- [GitHub Packages](https://github.com/orgs/AlmaLinux/packages/container/package/10-kitten-base) |
| Init | almalinux/10-kitten-init | - [DockerHub](https://hub.docker.com/r/almalinux/10-kitten-init)<br>- [quay.io](https://quay.io/repository/almalinuxorg/10-kitten-init)<br>- [GitHub Packages](https://github.com/orgs/AlmaLinux/packages/container/package/10-kitten-init) |
| Micro | almalinux/10-kitten-micro | - [DockerHub](https://hub.docker.com/r/almalinux/10-kitten-micro)<br>- [quay.io](https://quay.io/repository/almalinuxorg/10-kitten-micro)<br>- [GitHub Packages](https://github.com/orgs/AlmaLinux/packages/container/package/10-kitten-micro) |

More about AlmaLinux OS Container Images - [AlmaLinux Containers](/containers/).

## Vagrant Boxes

AlmaLinux provides official AlmaLinux OS Kitten images for Vagrant:

| Vagrant Box | AlmaLinux OS Kitten 10 | 
| --- | --- | 
| Libvirt | - [x86_64](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten)<br>- [x86_64_v2](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten-x86_64_v2) | 
| VirtualBox | - [x86_64](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten)<br>- [x86_64_v2](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten-x86_64_v2) |
| Hyper-V | - [x86_64](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten)<br>- [x86_64_v2](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten-x86_64_v2) | 
| VMware | - [x86_64](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten)<br>- [x86_64_v2](https://portal.cloud.hashicorp.com/vagrant/discover/almalinux/10-kitten-x86_64_v2) |

More about AlmaLinux OS images for Vagrant Boxes - [AlmaLinux Vagrant Boxes Page](/installation/vagrant-boxes).

## How is AlmaLinux OS Kitten different from CentOS Stream?

CentOS Stream is a product of the CentOS community–it’s the ultimate destination of the CentOS community’s work. AlmaLinux OS Kitten is not a product, it is meant as a vehicle along the journey of development of the next version of AlmaLinux OS.

We are using our freedom here to do a bunch of work in preparation for AlmaLinux OS 10.

### Re-enabling Frame Pointers
Red Hat Enterprise Linux and CentOS Stream disable frame pointers by default. We are re-enabling them with AlmaLinux OS Kitten 10. This enables system-wide real-time tracing and profiling for optimizing the performance of any workload running on AlmaLinux OS.

### AlmaLinux OS Kitten includes an additional build using x86-64-v2
Within the x86-64 architecture, there are specific versions that represent specific CPU feature sets. RHEL was increasing the architecture version baseline to v3, which results in the loss of support for numerous older CPUs(and some newer ones).
Both in AlmaLinux OS Kitten 10 e AlmaLinux OS 10, we will follow Red Hat’s decision to ship x86-64-v3 optimized binaries by default, but we will also provide additional x86-64-v2 architecture ONLY for older hardware that doesn’t support modern CPU feature sets.

**Please note** all 3rd party packages for RHEL10 will be built for x86-64-v3, so AlmaLinux OS Kitten 10 built for x86-64-v2 will only be appropriate in workloads where the default OS package set is enough, or where users will be able to rebuild any additional packages they require for x86-64-v2 architecture themselves.  ALESCo is currently weighing the option of rebuilding EPEL for x86-64-v2 users. If you use this version, please [let us know](https://github.com/almalinux/alesco), so we can make informed decisions about this version in the future.

### Secure Boot
Trusted boot has long been required for bare metal devices, and is also becoming more and more popular in virtualized environments. AlmaLinux OS Kitten 10 supports Secure Boot for Intel/AMD and ARM platforms.

### Adding SPICE
Simple Protocol for Independent Computing Environments (SPICE) has been unsupported since RHEL 9.0. Members of the AlmaLinux OS community have requested we add support back in, so SPICE support is fully re-enabled in AlmaLinux OS Kitten 10 for both server and client applications.

### KVM for IBM POWER
KVM for IBM POWER has also been unsupported since RHEL 9.0. We enable it in the AlmaLinux OS Kitten 10 virtualization stack, so it’s possible to continue using KVM just like it is in AlmaLinux OS 8.

### More hardware supported
Starting with AlmaLinux OS  8.10 and 9.4 we re-enabled support for more than 150 devices that were removed upstream. We will continue that support in AlmaLinux OS Kitten 10, as well as in AlmaLinux OS 10.

### Firefox and Thunderbird in the system repositories
Our upstream decided to remove packaged versions of Firefox and Thunderbird RPM packages from CentOS Stream 10 and RHEL10 in favor of using Flatpak versions of them. To support our community of desktop users, we decided to continue shipping them in AlmaLinux OS Kitten 10 as regular RPM packages.

## Give Feedback and Get Help

Join us in the AlmaLinux OS [chat channel](https://chat.almalinux.org/), [mailing lists](https://lists.almalinux.org/), and [forums](https://forums.almalinux.org/) to share your feedback or ask for any assistance. Please, file your bugs and steps to reproduce them on [AlmaLinux Bug Tracker](https://bugs.almalinux.org/).

### _Thank you, Image Engine!_

_This version of AlmaLinux includes desktop backgrounds created by the incredible visual effects folks over at [Image Engine](https://image-engine.com/). We can't thank them enough for their work. They were awesome to work with, and we are so excited to have them as part of the AlmaLinux community._

##### Trademarks

CentOS Stream, Red Hat, and Red Hat Enterprise Linux are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.
