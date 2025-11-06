---
title: "Docker Images"
---

# AlmaLinux OS Docker Images

## About AlmaLinux Docker Images

AlmaLinux Docker Images is a great way to build your container image based on AlmaLinux OS. AlmaLinux Docker Images offer users such benefits as high reliability, security, and performance. It is possible to build a cloud and web application that is developed in containers and share it with whom you want or where you want to collaborate after pushing it to the registry server with any of the images.

:::warning
Please, when accessing AlmaLinux Container images at [Quay.io](https://quay.io/repository/almalinuxorg/almalinux), make sure you are using the correct link: **https://quay.io/repository/almalinuxorg/almalinux**.
:::

:::tip
If you are looking for AlmaLinux OS Kitten 10 images, please, visit the [AlmaLinux OS Kitten 10](/development/almalinux-os-kitten-10) page.
:::

## AlmaLinux Docker Images Variants

AlmaLinux OS project now provides two official images: Default (Platform) and Minimal (Platform), and four fully compatible alternatives for the Red Hat Universal Base Images (UBI): Base, Init, Micro and Minimal.

### AlmaLinux: Default (Platform)

The general purpose of the default (platform) image is a container image that contains default packages and can be used as a drop-in replacement for the CentOS 8 image.

Container image tag: `almalinux:latest`

Link to the repository:

[hub.docker.com/\_/almalinux](https://hub.docker.com/_/almalinux)

### AlmaLinux: Minimal

The AlmaLinux minimal image is a compacted image that contains a limited package set and uses the `microdnf` package manager as a replacement for DNF. A minimal DNF uses libdnf and therefore doesn't require Python. This image is 52% smaller in size (37MB download, 102MB expanded). It is designed for applications that come with their dependencies bundled like GO, NodeJS, Java. You can get the Minimal image via two variants of the following container tags and links.

Container image tag for Minimal (Platform): `almalinux:minimal`

Container image tag for Minimal ( UBI - alternative): `almalinux/8-minimal`

Links to repositories:

| Platform        | Version                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Docker Hub      | [AlmaLinux 8](https://hub.docker.com/r/almalinux/8-minimal)<br>[AlmaLinux 9](https://hub.docker.com/r/almalinux/9-minimal)<br>[AlmaLinux 10](https://hub.docker.com/r/almalinux/10-minimal)                                                                               |
| Quay.io         | [AlmaLinux 8](https://quay.io/repository/almalinuxorg/8-minimal)<br>[AlmaLinux 9](https://quay.io/repository/almalinuxorg/9-minimal)<br>[AlmaLinux 10](https://quay.io/repository/almalinuxorg/10-minimal)                                                                |     |
| GitHub Packages | [AlmaLinux 8](https://github.com/orgs/AlmaLinux/packages/container/package/8-minimal)<br>[AlmaLinux 9](https://github.com/orgs/AlmaLinux/packages/container/package/9-minimal)<br>[AlmaLinux 10](https://github.com/orgs/AlmaLinux/packages/container/package/10-minimal) |

### AlmaLinux: Base

The AlmaLinux Base Image is designed to be a base for your containerized applications, middleware and utilities. Base Image includes some helpful OS tools like find, tar, vi, etc., and a full DNF stack. The systemd initialization system and access to free dnf repositories are fully available. The Base image has some differences in a package set than the Default (Platform) image.

Container image tag: `almalinux/8-base`

Links to repositories:

| Platform        | Version                                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docker Hub      | [AlmaLinux 8](https://hub.docker.com/r/almalinux/8-base)<br>[AlmaLinux 9](https://hub.docker.com/r/almalinux/9-base)<br>[AlmaLinux 10](https://hub.docker.com/r/almalinux/10-base)                                                                               |
| Quay.io         | [AlmaLinux 8](https://quay.io/repository/almalinuxorg/8-base)<br>[AlmaLinux 9](https://quay.io/repository/almalinuxorg/9-base)<br>[AlmaLinux 10](https://quay.io/repository/almalinuxorg/10-base)                                                                |
| GitHub Packages | [AlmaLinux 8](https://github.com/orgs/AlmaLinux/packages/container/package/8-base)<br>[AlmaLinux 9](https://github.com/orgs/AlmaLinux/packages/container/package/9-base)<br>[AlmaLinux 10](https://github.com/orgs/AlmaLinux/packages/container/package/10-base) |

### AlmaLinux: Init

The AlmaLinux Init image is effective if you want to run an init system as Process ID 1 for running multi-services inside a container. The systemd is enabled as the init system in the image.

Container image tag: `almalinux/8-init`

Links to repositories:

| Platform        | Version                                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docker Hub      | [AlmaLinux 8](https://hub.docker.com/r/almalinux/8-init)<br>[AlmaLinux 9](https://hub.docker.com/r/almalinux/9-init)<br>[AlmaLinux 10](https://hub.docker.com/r/almalinux/10-init)                                                                               |
| Quay.io         | [AlmaLinux 8](https://quay.io/repository/almalinuxorg/8-init)<br>[AlmaLinux 9](https://quay.io/repository/almalinuxorg/9-init)<br>[AlmaLinux 10](https://quay.io/repository/almalinuxorg/10-init)                                                                |
| GitHub Packages | [AlmaLinux 8](https://github.com/orgs/AlmaLinux/packages/container/package/8-init)<br>[AlmaLinux 9](https://github.com/orgs/AlmaLinux/packages/container/package/9-init)<br>[AlmaLinux 10](https://github.com/orgs/AlmaLinux/packages/container/package/10-init) |

### AlmaLinux: Micro

The AlmaLinux Micro image is an even more minimized image. It is distributed without any package manager. The Micro image uses the package manager on the underlying host to install packages, typically using Buildah or Multi-stage builds with Podman. The Micro image is 82% smaller than the Base image and 68% smaller than the Minimal image in size, as this image is 13MB download, 36MB expanded. It is designed for applications that come with their dependencies bundled like GO, NodeJS, Java. Since this image has only very few packages, it is more secure compared to other images.

Container image tag: `almalinux/8-micro`

Links to repositories:

| Platform        | Version                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docker Hub      | [AlmaLinux 8](https://hub.docker.com/r/almalinux/8-micro)<br>[AlmaLinux 9](https://hub.docker.com/r/almalinux/9-micro)<br>[AlmaLinux 10](https://hub.docker.com/r/almalinux/10-micro)                                                                               |
| Quay.io         | [AlmaLinux 8](https://quay.io/repository/almalinuxorg/8-micro)<br>[AlmaLinux 9](https://quay.io/repository/almalinuxorg/9-micro)<br>[AlmaLinux 10](https://quay.io/repository/almalinuxorg/10-micro)                                                                |
| GitHub Packages | [AlmaLinux 8](https://github.com/orgs/AlmaLinux/packages/container/package/8-micro)<br>[AlmaLinux 9](https://github.com/orgs/AlmaLinux/packages/container/package/9-micro)<br>[AlmaLinux 10](https://github.com/orgs/AlmaLinux/packages/container/package/10-micro) |

## Help and Contribute

If you want to contribute or need any help, join us at [Cloud SIG at Mattermost](https://chat.almalinux.org/almalinux/channels/sigcloud) or [Cloud SIG on Matrix](https://matrix.to/#/#sig-cloud:almalinux.im).
