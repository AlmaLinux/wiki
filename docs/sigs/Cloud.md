---
title: "Cloud SIG"
---
# Cloud SIG

The Cloud team is responsible for AlmaLinux OS container and cloud images.

## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple. 

**Where we chat**

The Cloud SIG uses the [SIG/Cloud](https://chat.almalinux.org/almalinux/channels/sigcloud) chat channel on [chat.almalinux.org](https://chat.almalinux.org) for communication.

**Where and when we meet**

We do not currently hold regular meetings, but work asynchronously in mattermost to accomplish our goals. 

## Activities, projects, and deliverables

* The AlmaLinux OS Docker/Podman images:
  [AlmaLinux/docker-images](https://github.com/AlmaLinux/docker-images).
* The AlmaLinux OS cloud images:
  [AlmaLinux/cloud-images](https://github.com/AlmaLinux/cloud-images).
* The LXC Distrobuilder patches:
  [AlmaLinux/distrobuilder](https://github.com/AlmaLinux/distrobuilder).
* The LXC CI configuration for AlmaLinux OS:
  [AlmaLinux/lxc-ci](https://github.com/AlmaLinux/lxc-ci).
* The container RootFS build tool:
  [AlmaLinux/ks2rootfs](https://github.com/AlmaLinux/ks2rootfs).
* OpenNebula addons repositories:
  [x86_64](https://repo.almalinux.org/almalinux/8/extras/x86_64/os/Packages/almalinux-release-opennebula-addons-1-1.el8.noarch.rpm) and [aarch64](https://repo.almalinux.org/almalinux/8/extras/aarch64/os/Packages/almalinux-release-opennebula-addons-1-1.el8.noarch.rpm)

The pre-built AlmaLinux OS images are listed below:

|            Name            |                             Download URL                            |
| -------------------------- | ------------------------------------------------------------------- |
| AWS Marketplace AMI        | [aws.amazon.com/marketplace/pp/B094C8ZZ8J](https://aws.amazon.com/marketplace/pp/B094C8ZZ8J) |
| AWS community AMIs         | [wiki.almalinux.org/cloud/AWS.html](https://wiki.almalinux.org/cloud/AWS.html) |
| Docker Hub                 | [hub.docker.com/_/almalinux](https://hub.docker.com/_/almalinux) |
| Generic Cloud (cloud-init) | [wiki.almalinux.org/cloud/Generic-cloud.html](https://wiki.almalinux.org/cloud/Generic-cloud.html) |
| OpenNebula                 | [wiki.almalinux.org/cloud/OpenNebula.html](https://wiki.almalinux.org/cloud/OpenNebula.html) |
| Google Cloud               | [cloud.google.com/compute/docs/images#almalinux](https://cloud.google.com/compute/docs/images#almalinux) |
| LXC/Incus                  | [images.linuxcontainers.org](https://images.linuxcontainers.org) |
| Quay                       | [quay.io/almalinuxorg](https://quay.io/almalinuxorg) |
| Vagrant boxes              | [app.vagrantup.com/almalinux](https://app.vagrantup.com/almalinux/) |


### Help wanted

* Vagrant + Parallels Desktop box maintainer.
* Optimized images for Digital Ocean and other cloud providers.
* Design and implement an images CI/CD pipeline. Automatically check images
  for security vulnerabilities.
* Design and automate test scenarios.
* Technical writers for working on documentation.
* DevOps engineers for setting up and maintaining the related infrastructure.

If you can help, please join us at [SIG/Cloud on Mattermost](https://chat.almalinux.org/almalinux/channels/sigcloud)


## SIG members

* [Elkhan Mammadli](mailto:elkhan.mammadli@protonmail.com) - Works on Qemu/Libvirt support.
  * Chat login: [lkhn](https://chat.almalinux.org/almalinux/messages/@lkhn)
  * GitHub profile: [LKHN](https://github.com/LKHN)
* [Darya Malyavkina](mailto:dmalyavkina@almalinux.org) - The director of release engineering at [CloudLinux Inc.](https://cloudlinux.com/), coordinates the company efforts on the AlmaLinux OS development and support.
  * Chat login: [dmalyavkina](https://chat.almalinux.org/almalinux/messages/@dmalyavkina)
  * GitHub profile: [dmalyavkina](https://github.com/dmalyavkina)
