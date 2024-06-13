---
title: "Migration SIG"
---

###### last updated: 2024-04-22

# Migration SIG

The Migration team is responsible for two migration projects - the migration tool and the ELevate project, including documentation and upgrades. See the [Migration](/migration/) section for more details.

### AlmaLinux Migration Tool

The [migration tool](/documentation/migration-guide) is used to convert an EL8 or EL9 machine.

The tool supports the following migration paths:

![image](/images/migration.svg)

### AlmaLinux ELevate project.

The ELevate project is an initiative to support migrations between major versions of RHEL-derivatives. See the [ELevate](/elevate/) section for more details and the update steps.

The project supports the following migration paths:

![image](/images/ELevate.svg)

\* - migration to CentOS Stream 9 is currently in process and will be available later. <br>
\** - migration to Oracle Linux 9 is available with the [Oracle Leapp utility](https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp) and will not be supported by ELevate project.

## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple. 

**Where we chat**

The Migration SIG uses the [SIG/Migration](https://chat.almalinux.org/almalinux/channels/migration) chat channel for communication.

**Where and when we meet**

We do not currently hold regular meetings, but work asynchronously in mattermost to accomplish our goals.

## Activities, projects, and deliverables

* AlmaLinux Leapp patches at: [AlmaLinux/leapp-repository](https://github.com/AlmaLinux/leapp-repository/tree/almalinux). Consider this is not a separated forked project.
* Static data files for Leapp utility: [AlmaLinux/leapp-data](https://github.com/AlmaLinux/leapp-data)
* Package Evolution Service: [pes.almalinux.org](https://pes.almalinux.org)
* CentOS 6 to CentOS 7 upgrade tool: [AlmaLinux/redhat-upgrade-tool](https://github.com/AlmaLinux/redhat-upgrade-tool).

### Help wanted

* Testing various configurations
* Developing scripts for populating unsupported kernel modules and pci ids lists
* Feedback and bug reports

If you can help, please join us at [Migration SIG on Mattermost](https://chat.almalinux.org/almalinux/channels/migration).

## SIG members

* [Stepan Oksanichenko](mailto:soksanichenko@cloudlinux.com) - Package Evolution Service developer.
   * Chat login: [stepan_oksanichenko](https://chat.almalinux.org/almalinux/messages/@stepan_oksanichenko)
   * GitHub profile: [soksanichenko](https://github.com/soksanichenko)
* [Yuriy Kohut](mailto:ykohut@almalinux.org) - ELevate Project engineer.
  * Chat login: [ykohut](https://chat.almalinux.org/almalinux/messages/@ykohut)
  * GitHub profile: [yuravk](https://github.com/yuravk)
* [Darya Malyavkina](mailto:dmalyavkina@almalinux.org) - The director of release engineering at [CloudLinux Inc.](https://cloudlinux.com/), coordinates the company efforts on the AlmaLinux OS development and support.
  * Chat login: [dmalyavkina](https://chat.almalinux.org/almalinux/messages/@dmalyavkina)
  * GitHub profile: [dmalyavkina](https://github.com/dmalyavkina)
* [Andrew Lukoshko](mailto:alukoshko@almalinux.org) - The AlmaLinux OS Lead Architect.
  * Chat login: [alukoshko](https://chat.almalinux.org/almalinux/messages/@alukoshko)
  * GitHub profile: [andrewlukoshko](https://github.com/andrewlukoshko)
