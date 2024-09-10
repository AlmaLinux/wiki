---
title: 'AlmaLinux Build System'
---

###### last updated: 2024-09-10

# AlmaLinux Build System

## About AlmaLinux Build System

[AlmaLinux Build System](https://build.almalinux.org/) is designed to handle processes of:
* Building rpm packages for multiple supported architectures and distribution versions.
* Testing packages.
* Signing packages. See more on the [Signing packages](/development/private-keys/package-signing) page.
* Releasing packages.
* Ensuring that packages and their sources are reliable using [SBOM](/documentation/sbom-guide).
* Providing [Errata](/documentation/errata).

## AlmaLinux OS source packages 

AlmaLinux OS source code including [modified packages](/development/Modified-packages) is stored and managed in Git repositories on [git.almalinux.org](https://git.almalinux.org/explore/repos).

AlmaLinux OS Team and Community work on these repositories to submit changes, fix bugs, and introduce new features. The AlmaLinux Build System is used then to pull the latest changes from these repositories and build updated packages. 

## More guides and details

If you are interested in learning how to build AlmaLinux OS packages, please check the [Packaging guidelines](/development/Packaging) and [Building packages guide](/documentation/building-packages-guide).

Details and guides on how the AlmaLinux Build System works and how to use it can be found in the [AlmaLinux Build System Wiki](https://github.com/AlmaLinux/build-system/wiki).

## Reporting Issues

All issues should be reported to the [Build System](https://github.com/AlmaLinux/build-system/issues) repository. A [GitHub's kanban board](https://github.com/orgs/AlmaLinux/projects/2) is used for the Build System project to track the progress.

## Contribute and Get Help 

AlmaLinux Build System is open for community contributions. You can contribute to the codebase, submit patches, and use community product repositories to build and release packages. You can find more on the [Build System SIG](/sigs/Build-System) page.

Join the ~SIG/Build System [chat channel](https://chat.almalinux.org/almalinux/channels/build-system) for any talk and assistance.
