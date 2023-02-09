---
title: 'FAQ'
---
###### last updated: 2023-02-09

# Frequently asked questions


### What is AlmaLinux?

AlmaLinux OS is a community-owned and driven, stable and secure *Linux®* distribution that is a 1:1 binary compatible fork of *RHEL*.


### Can I do X, Y, or Z with AlmaLinux?

If currently possible in either RHEL or CentOS, the answer is yes.
Unless RHEL dramatically shifts development direction, our response
will continue to be yes.


### Intended user

Anyone who currently relies on the CentOS stable release to achieve computing
objectives. Individuals and organizations that require an enterprise-grade,
Fedora-like distribution but who do not want to or cannot pay for a RHEL
license.


### Why is it called _AlmaLinux_?

Alma means soul in Spanish and other Latin languages. A vital part
of Linux is the passionate, diverse developer community, either helping
support the work of Linux and other essential activities that advance Linux.
This community is the soul of Linux, and Linux distribution users are indebted
to the Linux community's efforts. We chose the name AlmaLinux in homage to the
Linux community.


### How is the community protected from future development roadmap changes?

The AlmaLinux Foundation is committed to supporting the community and promoting transparency in all things. The AlmaLinux Foundation involves the community right through the process, including in the
governing board. AlmaLinux will always be free and open-source. The community can select the project at any time.


### Why use AlmaLinux?

AlmaLinux OS is a community-owned and driven, stable, and secure Linux distribution. AlmaLinux is an opportunity for us to channel our expertise in RHEL into a Linux distribution that serves the broader community. AlmaLinux targets a wide range of users, including enterprise customers, small businesses, and individual users. Community members are on the governing board for the AlmaLinux project and are involved in critical decisions. Finally, AlmaLinux will always be free and open source. The community can pick up and continue to develop AlmaLinux at any time.

AlmaLinux supports all four architectures x86_64, aarch64, ppc64le, and s390x, providing full parity with RHEL. We provide a wide range of installation choices: ISOs, Сloud and Сontainer images, Live Media, WSL, and Raspberry Pi. 

AlmaLinux provides a commitment to security updates and bug fixes for a period of at least 10 years. Moreover, AlmaLinux provides [Errata](/documentation/errata.md), [public OVAL streams](/documentation/oval-streams.md), [OpenSCAP](/documentation/openscap-guide.md) and SCAP Workbench packages, including the availability of the official [CIS Benchmark for AlmaLinux](https://www.cisecurity.org/benchmark/almalinuxos_linux). AlmaLinux has [SBOM](/documentation/sbom-guide.md) integrated into the pipeline and allows using the CAS CLI tool to check the chain of trust.


### Where does AlmaLinux get package sources and how AlmaLinux is built?
The process in general looks like this:
* Take sources from CentOS git as Red Hat uses CentOS git to release their packages sources.
* Rebrand: at this point `.alma` postfix to the end of the modified packages "Release" field to distinguish our packages from upstream ones. You can also check the [Modified packages](/development/Modified-packages.md) page for more details.
  :::tip
  Note: Most RPMs are rebuilt directly from the sources. The rebranding is required when any of the text/visual displays says Red Hat or RHN license manager enforcements.
  :::
* [Build](https://build.almalinux.org/) packages with notarization (SBOM). 
* [Test](https://github.com/AlmaLinux/alts) & fix issues.
* Release!


### How do I migrate a single host from CentOS to AlmaLinux?

AlmaLinux developed a [migration tool](https://github.com/AlmaLinux/almalinux-deploy) to make it simple to migrate to AlmaLinux from other Linux distributions including CentOS and CentOS Stream. 
You can read more details and find guide steps on the [Migration](/documentation/migration-guide.md) wiki page. 


### How do I migrate an entire fleet of servers from CentOS to AlmaLinux?

As stated, AlmaLinux will be a 1:1 binary compatible fork of RHEL, which means that your applications and services will remain interoperable. For that reason, you can rapidly migrate any number of servers using the [migration tool](https://github.com/AlmaLinux/almalinux-deploy).


### How do I migrate from CentOS 7 to AlmaLinux 8?

AlmaLinux has developed the ELevate project as an initiative to support migrations between a major version of RHEL-derivatives. It uses the [Leapp utility](https://leapp.readthedocs.io/) and a few [patches](https://github.com/AlmaLinux/leapp-repository/commits/almalinux) to support migration from CentOS are used to perform the upgrade. 
Check the [ELevate page](/elevate/README.md) for the list of the available migration directions and for the [Quickstart Guide](/elevate/ELevate-quickstart-guide.md).


### How long will AlmaLinux be supported?

The [AlmaLinux OS Foundation](https://wiki.almalinux.org/Transparency.html) owns all assets related to AlmaLinux OS. It is 501(c)(6) non-profit organization and is governed by a set of [Bylaws](https://almalinux.org/p/foundation-bylaws/). 
The AlmaLinux OS Foundation is committed to supporting AlmaLinux including stable and thoroughly tested updates and security patches until: 
| Release | End-of-Life |
|---|---|
|AlmaLinux 8.x | 2029 |
|AlmaLinux 9.x | 2032 |


### How to Report Bug

#### I found a bug in RHEL; can I contribute the bug fix to AlmaLinux?

Since AlmaLinux is a 1:1 binary compatible fork of RHEL, it should have the same bugs as the current release of RHEL.  AlmaLinux recommends following an "upstream first" approach to fix these bugs by submitting them to [CentOS Stream](https://centos.org/centos-stream/).  This is the contribution path to get the bug fix into RHEL, which will in turn be rebuilt into AlmaLinux.

#### Bug Tracker 

You can file AlmaLinux specific bugs on the [bugs.almalinux.org](https://bugs.almalinux.org) providing all the necessary information about an issue and reproducing steps.

### How can I request a package be added to AlmaLinux?

Since AlmaLinux is a 1:1 binary compatible fork of RHEL, it does not add
packages to the distribution unless they are added to RHEL.  In general, the
best place for additional packages is the [Extra Packages for Enterprise Linux
(EPEL)](https://docs.fedoraproject.org/en-US/epel/) repository.  Any Fedora
package that is not in RHEL can be
[requested](https://docs.fedoraproject.org/en-US/epel/epel-package-request/).


#### Trademark notices

Red Hat, Red Hat Enterprise Linux are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.
    
Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries. 
