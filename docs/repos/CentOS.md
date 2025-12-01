---
title: "CentOS SIGs Repositories"
---

# CentOS SIGs Repositories

CentOS Special Interest Groups (SIGs) are smaller groups within the CentOS community that focus on a small set of issues, in order to either create awareness or to focus on development along a specific topic. SIGs are often very popular and used quite frequently by the community. AlmaLinux has decided to make upstream CentOS SIGs usable from within AlmaLinux for the community's benefit. We encourage contributors interested in SIG development to work upstream and submit contributions there.

:::warning
Since CentOS 8 Stream has reached its End-Of-Life, corresponding CentOS SIGs packages for AlmaLinux OS 8 are no longer valid and have been removed from the list.
:::

## Cloud SIG

The [Cloud SIG](https://sigs.centos.org/cloud) focuses on issues around running Cloud Infrastructure / Hypervisor
for on-premise clouds as well as supports other SIGs and projects looking to consume some of the shared resources around on-premise cloud infra.

| Package               | How to Enable on AlmaLinux 9                      |
| --------------------- | ------------------------------------------------- |
| OpenStack Antelope    | `dnf install centos-release-openstack-antelope`   |
| OpenStack Bobcat      | `dnf install centos-release-openstack-bobcat`     |
| OpenStack Caracal     | `dnf install centos-release-openstack-caracal`    |
| OpenStack Client Xena | `dnf install centos-release-openstackclient-xena` |
| OpenStack Yoga        | `dnf install centos-release-openstack-yoga`       |
| Openstack Zed         | `dnf install centos-release-openstack-zed`        |
| okd-4.13              | `dnf install centos-release-okd-4.13`             |
| okd-4.14              | `dnf install centos-release-okd-4.14`             |
| okd-4.15              | `dnf install centos-release-okd-4.15`             |
| okd-4.16              | `dnf install centos-release-okd-4.16`             |

## Messaging SIG

The [Messaging SIG](https://wiki.centos.org/SpecialInterestGroup/Messaging) provides a unique source for messaging-related packages.

| Package    | How to Enable on AlmaLinux 9             |
| ---------- | ---------------------------------------- |
| Rabbit 3.8 | `dnf install centos-release-rabbitmq-38` |

## Network Functions Virtualization SIG

The [Network Functions Virtualization SIG](https://sigs.centos.org/nfv) provides a stack that will serve as a platform for the deployment and testing of virtual network functions.

| Package                          | How to Enable on AlmaLinux 9                 |
| -------------------------------- | -------------------------------------------- |
| Openvswitch 2.x <br> OVN 20.12.x | `dnf install centos-release-nfv-openvswitch` |

## Operational Tooling SIG

The [Ops Tools SIG](https://wiki.centos.org/SpecialInterestGroup/OpsTools) provides logging, monitoring and other operational tools for operators, system administrators, devops and developers doing infrastructure engineering on content based on CentOS Linux and related distributions.

| Package      | How to Enable on AlmaLinux 9          |
| ------------ | ------------------------------------- |
| collectd 5.x | `dnf install centos-release-opstools` |

## Storage SIG

The [Storage SIG](https://sigs.centos.org/storage) focuses on deploying CentOS/AlmaLinux as a storage node.

| Package         | How to Enable on AlmaLinux 9              |
| --------------- | ----------------------------------------- |
| Ceph 16 Pacific | `dnf install centos-release-ceph-pacific` |
| Ceph 17 Quincy  | `dnf install centos-release-ceph-quincy`  |
| Ceph 18 Reef    | `dnf install centos-release-ceph-reef`    |
| GlusterFS 9     | `dnf install centos-release-gluster9`     |
| GlusterFS 10    | `dnf install centos-release-gluster10`    |
| GlusterFS 11    | `dnf install centos-release-gluster11`    |
| NFS Ganesha 4   | `dnf install centos-release-nfs-ganesha4` |
| NFS Ganesha 5   | `dnf install centos-release-nfs-ganesha5` |
| Samba 4.14      | `dnf install centos-release-samba414`     |
| Samba 4.15      | `dnf install centos-release-samba415`     |
| Samba 4.16      | `dnf install centos-release-samba416`     |
| Samba 4.17      | `dnf install centos-release-samba417`     |
| Samba 4.18      | `dnf install centos-release-samba418`     |
| Samba 4.19      | `dnf install centos-release-samba419`     |
| Samba 4.20      | `dnf install centos-release-samba420`     |

## Virtualization SIG

The [Virtualization SIG](https://sigs.centos.org/virt) aims to deliver a user consumable full stack for virtualization technologies. This includes delivery, deployment, management, update and patch application (for full lifecycle management) of the baseline platform when deployed in sync with a technology curated by the Virt-SIG.

| Package   | How to Enable on AlmaLinux 9         |
| --------- | ------------------------------------ |
| oVirt 4.5 | `dnf install centos-release-ovirt45` |

## Kmod SIG

The [Kmod SIG](https://sigs.centos.org/kmods/) focuses on providing 'fedora flavored' kernels and kernel module packages that extend the functionality of the Linux kernel for specific hardware or software requirements. These packages are designed to support additional drivers and kernel extensions not included in the standard AlmaLinux kernel, enabling compatibility with specialized hardware or advanced use cases.

| Package                  | How to enable on AlmaLinux 9                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CentOS Keys              | `rpm --import https://www.centos.org/keys/RPM-GPG-KEY-CentOS-SIG-Kmods`                                                                                                |
| Kmod Repository          | `dnf install https://mirror.stream.centos.org/SIGs/$(rpm> --eval '%{?rhel}/kmods/%{_arch}/repos-main/Packages/c/centos-repos-kmods-%{?rhel}-2.el%{?rhel}.noarch.rpm')` |
| Main and Userspace Kmods | `dnf install centos-release-kmods`                                                                                                                                     |
| Kernel 6.6               | `dnf install centos-release-kmods-kernel-6.6`                                                                                                                          |
| Kernel 6.12              | `dnf install centos-release-kmods-kernel-6.12`                                                                                                                         |
| Kernel Mainline          | `dnf install centos-release-kmods-kernel`                                                                                                                              |
