---
title: "Migration SIG"
---

# Migration SIG

The Migration team is responsible for two migration projects - the migration tool and the ELevate project, including documentation and upgrades. See the [Migration](/migration/) section for more details.

### AlmaLinux Migration Tool

The [migration tool](/documentation/migration-guide) is used to convert an EL8, EL9 or EL10 machine to the corresponding version.

The tool supports the following migration paths:

![image](/images/migration.webp)

### AlmaLinux ELevate project.

The ELevate project is an initiative to support migrations between major versions of RHEL-derivatives. See the [ELevate](/elevate/) section for more details and the update steps.

The project supports the following migration paths:

![image](/images/ELevate.webp)

\* - Currently, upgrades to AlmaLinux 10 and AlmaLinux Kitten 10 don't support x86_64_v2 architecture.

## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple.

**Where we chat**

The Migration SIG uses the [SIG/Migration](https://chat.almalinux.org/almalinux/channels/migration) chat channel for communication.

**Where and when we meet**

We do not currently hold regular meetings, but work asynchronously in mattermost to accomplish our goals.

## Activities, projects, and deliverables

- AlmaLinux Leapp patches at: [AlmaLinux/leapp-repository](https://github.com/AlmaLinux/leapp-repository/tree/almalinux). Consider this is not a separated forked project.
- Static data files for Leapp utility: [AlmaLinux/leapp-data](https://github.com/AlmaLinux/leapp-data)
- CentOS 6 to CentOS 7 upgrade tool: [AlmaLinux/redhat-upgrade-tool](https://github.com/AlmaLinux/redhat-upgrade-tool).

### Help wanted

- Adding more 3rd party repositories support
- Testing various configurations
- Developing scripts for populating unsupported kernel modules and pci ids lists
- Feedback and bug reports

If you can help, please join us at [Migration SIG on Mattermost](https://chat.almalinux.org/almalinux/channels/migration).

## SIG members

- [Yuriy Kohut](mailto:ykohut@almalinux.org) - ELevate Project engineer.
  - Chat login: [ykohut](https://chat.almalinux.org/almalinux/messages/@ykohut)
  - GitHub profile: [yuravk](https://github.com/yuravk)
- [Andrew Lukoshko](mailto:alukoshko@almalinux.org) - The AlmaLinux OS Lead Architect.
  - Chat login: [alukoshko](https://chat.almalinux.org/almalinux/messages/@alukoshko)
  - GitHub profile: [andrewlukoshko](https://github.com/andrewlukoshko)
