---
title: 'Build System SIG'
parent: 'Special interest groups (SIGs)'
grandparent: 'Contribute'
---

##### last modified: 2024-10-28

<Breadcrumbs />

# Build System SIG

The Build System Team is responsible for automating processes of building distribution and packages, testing packages, signing packages, and releasing them to public repositories.

## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple. 

**Where we chat**

The Build System SIG uses the [SIG/Build System](https://chat.almalinux.org/almalinux/channels/build-system) chat channel for communication.

**Where and when we meet**

Meetings are held regularly, including a daily standup. If you would like to join these meetings, join the channel and ask for an invite!

## Activities, projects, and deliverables

* [AlmaLinux Build System](https://build.almalinux.org/)
* [Build System project's issue tracker](https://github.com/AlmaLinux/build-system/issues)
* [Build System project's milestones](https://github.com/AlmaLinux/build-system/milestones)
* [Build System Web-Server](https://github.com/AlmaLinux/albs-web-server)
* [Build System Build Node](https://github.com/AlmaLinux/albs-node)
* [Build System Test System](https://github.com/AlmaLinux/alts)
* [Build System Frontend](https://github.com/AlmaLinux/albs-frontend)
* [Build System Sign Node](https://github.com/AlmaLinux/albs-sign-node)
* [Build System Sign File](https://github.com/AlmaLinux/albs-sign-file)
* [Build System Tests Cacher](https://github.com/AlmaLinux/alma-tests-cacher)
* Documentation:
  * About AlmaLinux Build System and its structure - [AlmaLinux Build System](/development/AlmaLinux-Build-System).
  * About SBOM - [SBOM guide](/documentation/sbom-guide).
  * How to contribute to AlmaLinux Build System - [Contribute to AlmaLinux Build System](/Contribute-to-AlmaLinux-Build-System).

### Help wanted:

* Help on keeping our Build System SIG documentation up to date (READMEs in repos, wiki, docs, SIG wiki page, etc).
* Testing (experience with pytest), we need help to:
  * Increase our test coverage in repos that already have tests.
  * Add tests to those that don't have tests at all.
  * Design and implement integration/e2e tests that involve different services.
* Familiar with Ansible? Help us in testing and improving our current ansible roles to deploy the AlmaLinux Build System.
* Interested in supply-chain security and SBOM? Help us in defining the next steps toward providing and expanding the current SBOM data that AlmaLinux OS is generating.

Our tech stack:
* Backend: Python, FastAPI, SQLAlchemy, PostgreSQL, Redis.
* Frontend: JavaScript, Vue.js, Quasar.
* Tooling: Docker, Docker Compose, Ansible, Terraform.

## SIG Members:

* [Darya Malyavkina](mailto:dmalyavkina@almalinux.org) - The director of release engineering at [CloudLinux Inc.](https://cloudlinux.com/), coordinates the company efforts on the AlmaLinux OS development and support.
  * Chat login: [dmalyavkina](https://chat.almalinux.org/almalinux/messages/@dmalyavkina)
  * GitHub profile: [dmalyavkina](https://github.com/dmalyavkina)
* [Vasily Kleschov](mailto:vkleschov@cloudlinux.com) - Build System Team Lead.
  * Chat login: [korulag](https://chat.almalinux.org/almalinux/messages/@korulag)
  * GitHub profile: [Korulag](https://github.com/Korulag)
* [Roman Kravchenko](mailto:rkravchenko@cloudlinux.com) - Product Owner.
  * Chat login: [roman-of-the-bs](https://chat.almalinux.org/almalinux/messages/@roman-of-the-bs)
  * GitHub profile: [forbiddenpotato](https://github.com/forbiddenpotato)
* [Javier Hernández Antúnez](mailto:jhernandez@cloudlinux.com) - The software developer engineer.
  * Chat login: [jhernandez](https://chat.almalinux.org/almalinux/messages/@jhernandez)
  * GitHub profile: [javihernandez](https://github.com/javihernandez)
* [Stepan Oksanichenko](mailto:soksanichenko@cloudlinux.com) - The software developer and automation engineer.
  * Chat login: [stepan_oksanichenko](https://chat.almalinux.org/almalinux/messages/@stepan_oksanichenko)
  * GitHub profile: [soksanichenko](https://github.com/soksanichenko)
* [Daniil Anfimov](mailto:danfimov@cloudlinux.com) - The software developer engineer.
  * Chat login: [anfimovdm](https://chat.almalinux.org/almalinux/messages/@anfimovdm)
  * GitHub profile: [anfimovdm](https://github.com/anfimovdm)
* [Maksim Petuhov](mailto:mpetuhov@cloudlinux.com) - The UI designer.
  * Chat login: [mxpthv](https://chat.almalinux.org/almalinux/messages/@mxpthv)
  * GitHub profile: [maccelf](https://github.com/maccelf)
* [Kirill Zhukov](mailto:kzhukov@cloudlinux.com) - The software developer engineer.
  * Chat login: [kzhukov](https://chat.almalinux.org/almalinux/messages/@kzhukov)
  * GitHub profile: [zklevsha](https://github.com/zklevsha)
* [Aleksandra Kachanova](mailto:akachanova@cloudlinux.com) - The software developer engineer.
  * Chat login: [akachanova](https://chat.almalinux.org/almalinux/messages/@akachanova)
  * GitHub profile: [bklvsky](https://github.com/bklvsky)
* [Lev Pambuk](mailto:lpambuk@cloudlinux.com) - The software developer engineer.
  * Chat login: [levpambuk](https://chat.almalinux.org/almalinux/messages/@levpambuk)
  * GitHub profile: [Kwaizer](https://github.com/Kwaizer)
* Koichiro Iwao - The software developer engineer, and contributor from Cybertrust Japan Co., Ltd.
  * Chat login: [koichiro.iwao](https://chat.almalinux.org/almalinux/messages/@koichiro.iwao)
  * GitHub profile: [metalefty](https://github.com/metalefty)
* Souta Kawahara - The software developer engineer, and contributor from Cybertrust Japan Co., Ltd.
  * Chat login: [souta.kawahara](https://chat.almalinux.org/almalinux/messages/@souta.kawahara)
  * GitHub profile: [KAWAHARA-souta](https://github.com/KAWAHARA-souta)

