---
title: 'AlmaLinux OS Kitten 10'
---

###### last modified: 2024-10-22

# About AlmaLinux OS Kitten 10

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
