---
title: "Cloud SIG"
---

# Cloud SIG

The Cloud SIG is responsible for building, testing, and publishing AlmaLinux OS images across public and private cloud environments.

We provide official cloud images for multiple platforms and ensure compatibility with cloud-init and other cloud-native tooling.

## Platforms Supported (as of 2025)

- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud Platform (GCP)
- Oracle Cloud Infrastructure (OCI)
- OpenNebula
- Generic Cloud (KVM/QEMU, Proxmox, custom deployments)

## Current Activities

- Build and publish cloud images for AlmaLinux 9 and 10
- Validate image compatibility with major cloud providers
- Maintain Terraform modules and cloud-init templates
- Collaborate with Infra SIG to automate image pipelines

## Where to Find the Images

- **AWS AMIs**: [AWS_AMIS.md](../cloud/AWS_AMIS.md)
- **Generic Images**: [Generic-cloud.md](../cloud/Generic-cloud.md)
- **Azure**: [Azure.md](../cloud/Azure.md)
- **OCI**: [OCI.md](../cloud/OCI.md)

## How to Join

- **Chat**: [#almalinux:matrix.org](https://matrix.to/#/#almalinux:matrix.org)
- **GitHub Repositories**:
  - [AlmaLinux/sig-cloud](https://github.com/AlmaLinux/sig-cloud)
  - [AlmaLinux/cloud-images](https://github.com/AlmaLinux/cloud-images)

## Help Wanted

- Contributors to test images on various platforms
- Maintainers for Terraform and cloud-init templates
- Engineers to improve image pipeline automation

## SIG Members

- [Eduard Abdullin](https://github.com/eabdullin1)
- [Andrew Lukoshko](https://github.com/andrewlukoshko)
- [Other contributors](https://github.com/AlmaLinux/sig-cloud/graphs/contributors)

