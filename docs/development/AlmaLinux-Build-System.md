---
title: 'AlmaLinux Build System'
parent: 'Development'
---

###### last updated: 2024-10-28

<Breadcrumbs />

# AlmaLinux Build System

## About AlmaLinux Build System

[AlmaLinux Build System](https://build.almalinux.org/) is designed to handle processes of:
* Building rpm packages for multiple supported architectures and distribution versions.
* Testing packages.
* Signing packages. See more on the [Signing packages](/development/private-keys/package-signing) page.
* Releasing packages.
* Ensuring that packages and their sources are reliably using [SBOM](/documentation/sbom-guide).
* Providing [Errata](/documentation/errata).

## AlmaLinux OS source packages 

AlmaLinux OS source code including [modified packages](/development/Modified-packages) is stored and managed in Git repositories on [git.almalinux.org](https://git.almalinux.org/explore/repos).

AlmaLinux OS Team and community work on these repositories to submit changes, fix bugs, and introduce new features. The AlmaLinux Build System is then used to pull the latest changes from these repositories and build the updated packages. 

## AlmaLinux Build System Structure

<img src=/images/ALBS-structure.svg width="60%" height="60%">

* The Build System [Master Service](https://github.com/AlmaLinux/albs-web-server) provides an API that UI and CLI tools use to build, test, sign and release the packages.
* The sources to build the AlmaLinux OS packages are taken from the AlmaLinux [git server](https://git.almalinux.org/), which are either synchronized directly from the CentOS git server, or updated manually by the AlmaLinux packagers. All the package sources that are used to build AlmaLinux OS packages are notarized commit by commit, and this information is stored in our [immudb](/documentation/sbom-guide) instance.
* The [Build Node](https://github.com/AlmaLinux/albs-node) continuously asks the Master Service for new tasks to build packages from the provided git references. The built packages will be marked as verified only if the git references used to build the packages have been notarized. Built packages and build logs (or artifacts) are stored in the Artifact Storage (PULP), which only keeps notarized artifacts, this is, trusted and verified artifacts. 
* [Test System](https://github.com/AlmaLinux/alts) receives Test Tasks to test built packages from Artifact Storage. The Test System tests packages via Test Nodes (eg. Docker or OpenNebula with different architectures) and store test artifacts (test logs) in Artifact Storage.
* [Sign Server](https://github.com/AlmaLinux/albs-sign-node) receives sign tasks to sign packages with the corresponding PGP key. The Sign Server retrieves the unsigned packages, verifies that the packages are notarized, and signs them. Signed packages are then notarized again, storing this information in immudb and then saving the signed packages in the Artifact Storage.
* Release System receives release tasks to upload signed packages to public repositories.
* Each step involved in the build process is notarized and stored in immudb using a unique hash (immudb hash). This process ensures that traceability is guaranteed and that the information generated throughout the build process and stored in immudb can be used later on to generate SBOM documents.

## More guides and details

If you are interested in learning how to build AlmaLinux OS packages, please check the [Packaging guidelines](/development/Packaging) and [Building packages guide](/documentation/building-packages-guide).

Details and guides on how the AlmaLinux Build System works and how to use it can be found in the [AlmaLinux Build System Wiki](https://github.com/AlmaLinux/build-system/wiki).

## Reporting Issues

All issues should be reported to the [Build System](https://github.com/AlmaLinux/build-system/issues) repository. A [kanban board](https://github.com/orgs/AlmaLinux/projects/2) is used for the Build System project to track the progress.

## Contribute and Get Help 

AlmaLinux Build System is open for community contributions. You can contribute to the codebase, submit patches, and use community product repositories to build and release packages. You can find more on the [Build System SIG](/sigs/Build-System) page.

Join the ~SIG/Build System [chat channel](https://chat.almalinux.org/almalinux/channels/build-system) for any talk and assistance.
