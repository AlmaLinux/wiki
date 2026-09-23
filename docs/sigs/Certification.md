---
title: "Certification SIG"
---

# Certification SIG

The Certification SIG is focused on creating and maintaining standards and procedures related to hardware and software certification for AlmaLinux OS.

## How to Join

Email a SIG member or show up on the chat. Occasionally there are non-disclosure agreements with hardware vendors, so some chats/meeting might be private, but SIG members will do their best to welcome everyone as fully as possible.

**Where we chat**

We use [mattermost SIG/Certification](https://chat.almalinux.org/almalinux/channels/sigcertification) channel for communication and all are welcome there.

**Where and when we meet**

Meetings are approximately every fortnight. If there's nothing confidential in the next meeting agenda a SIG member will happily welcome you along and provide time and meeting URL information. You can also find details about the next meeting on the events site: [Certification SIG meetings](https://events.almalinux.org/category/6/)

## Activities, projects, and deliverables

The SIG is responsible for, and maintains the following:

- [AlmaLinux Certification Program](https://almalinux.org/certification/program/)
  - The program document covers what certification asserts, the validation levels, how results are reviewed, and the path for hardware and software vendors.
- [Contribute a Certification](certification/contribute-a-certification.md)
  - A hands-on guide for community members who want to certify a machine or confirm a piece of software.
- [AlmaLinux Catalog](https://catalog.almalinux.org)
  - The catalog holds every certified system, component, and software listing, along with benchmarks and validation history. Results are published here rather than through a repository.
- [AlmaLinux/alma-certify](https://github.com/AlmaLinux/alma-certify)
  - The certification suite itself, along with its documentation and issue tracking. It replaced the Ansible-based Hardware Certification Suite in 2026.
- [Certification SIG Board](https://github.com/orgs/AlmaLinux/projects/6)
  - This board provides an asynchronous method of communication, allowing for more flexible timelines, especially for international participants.
- [Mattermost chat - SIGs/Certifcation](https://chat.almalinux.org/almalinux/channels/sigcertification)
  - This acts as the primary way for the community to engage with each other (including the SIG members) for work on certifications or the certification suite. The most collaborative place for the SIG is this chat room. This room is also bridged to matrix on [#sig-certification:almalinux.im](https://app.almalinux.im/#/room/#sig-certification:almalinux.im)
- Private certification mailing list
  - The ([certification-sig\@lists.almalinux.org](mailto:certification-sig@lists.almalinux.org?subject=updateme)) mailing list acts as a private place for the Certification SIG to communicate with IHVs and ISVs. If you require your interaction with the SIG to be private (for example, if you are working with the SIG under NDA), you may reach out here.

### Help wanted

<u>Contribute to testing: "Community Validated"</u>

In addition to the certification processes with IHVs managed by the AlmaLinux OS Foundation (ALOSF), we encourage community involvement in hardware testing. Individuals with access to hardware that we have yet to certify are encouraged and invited to participate. This not only amplifies the scope of our hardware compatibility and validates the strength of the certification suite, but also shows IHVs the types and scope of the AlmaLinux user base.

Hardware certified without input from the IHV is published with a "Community validated" level, which records who ran the suite. It is backed by the same certification suite data that vendors and the Foundation produce, and it gives users a real confirmation of compatibility until a relationship with the IHV can be confirmed.

Running the suite and publishing your results takes about ten minutes. [Contribute a Certification](certification/contribute-a-certification.md) walks through it.

More ways to contribute:

- Certify hardware we do not have yet. Laptops, desktops, workstations, and anything on aarch64 are all thin in the catalog right now.
- Confirm that software you rely on works on the AlmaLinux release you run. This is a web task and takes a minute.
- Contributions towards expanding [alma-certify](https://github.com/AlmaLinux/alma-certify) to cover a meaningful range of hardware and Linux driver tests that an end user would expect a certification to cover.
- Confirm or update listings that are already in the catalog, especially on newer major versions.

## SIG members

- [Jonathan Wright](mailto:jonathan@almalinux.org) - SIG lead
- [Justin Boffemmyer](mailto:justin.boffemmyer@almalinux.org) - member
- [Akitsu Izawa](mailto:akitsu.izawa@almalinux.org) - member
- [Simon John](mailto:sjohn@almalinux.org) - member
- [Neal Gompa](mailto:ngompa@almalinux.org) - member
