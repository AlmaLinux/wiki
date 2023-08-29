---
title: 'CentOS SIGs Repositories'
---
# CentOS SIGs Repositories

CentOS Special Interest Groups (SIGs) are smaller groups within the CentOS community that focus on a small set of issues, in order to either create awareness or to focus on development along a specific topic. SIGs are often very popular and used quite frequently by the community. AlmaLinux has decided to make upstream CentOS SIGs usable from within AlmaLinux for the community's benefit. We encourage contributors interested in SIG development to work upstream and submit contributions there. 

## Cloud SIG

The [Cloud SIG](https://wiki.centos.org/SpecialInterestGroup/Cloud) focuses on issues around running Cloud Infrastructure / Hypervisor 
for on-premise clouds as well as supports other SIGs and projects looking to consume some of the shared resources around on-premise cloud infra.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| OpenStack Train | # dnf install centos-release-openstack-train | - |
| OpenStack Ussuri | # dnf install centos-release-openstack-ussuri | - |
| OpenStack Victoria | # dnf install centos-release-openstack-victoria | - |
| OpenStack Yoga | - | # dnf install centos-release-openstack-yoga |
| OpenStack Client Xena | # dnf install centos-release-openstack-xena | # dnf install centos-release-openstackclient-xena |
| OpenStack Wallaby | # dnf install centos-release-openstack-wallaby | - |

## Config Management SIG

The [Config Management SIG](https://wiki.centos.org/SpecialInterestGroup/ConfigManagementSIG) aims to bridge the gap between Config Management tools 
Power users and traditional users by producing and release RPM packages of several Configuration Management and Orchestration tools.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| Ansible 2.9 | # dnf install centos-release-ansible-29 | - |

## Messaging SIG

The [Messaging SIG](https://wiki.centos.org/SpecialInterestGroup/Messaging) provides a unique source for messaging-related packages.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| Qpid Proton 0.30 | # dnf install centos-release-qpid-proton | - |
| Rabbit 3.8 | # dnf install centos-release-rabbitmq-38 | # dnf install centos-release-rabbitmq-38 |

## Network Functions Virtualization SIG 

The [Network Functions Virtualization SIG](https://wiki.centos.org/SpecialInterestGroup/NFV) provides a stack that will serve as a platform for the deployment and testing of virtual network functions.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| HAProxy 2.2 | # dnf install centos-release-nfv-extras | - |
| Openvswitch 2.x <br> OVN 20.12.x | # dnf install centos-release-nfv-openvswitch | # dnf install centos-release-nfv-openvswitch |

## Operational Tooling SIG

The [Ops Tools SIG](https://wiki.centos.org/SpecialInterestGroup/OpsTools) provides logging, monitoring and other operational tools for operators, system administrators, devops and developers doing infrastructure engineering on content based on CentOS Linux and related distributions.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| collectd 5.x | # dnf install centos-release-opstools | # dnf install centos-release-opstools |

## Storage SIG

The [Storage SIG](https://wiki.centos.org/SpecialInterestGroup/Storage) focuses on deploying CentOS/AlmaLinux as a storage node.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| Ceph 14 Nautilus | # dnf install centos-release-ceph-nautilus | - |
| Ceph 15 Octopus | # dnf install centos-release-ceph-octopus | - |
| Ceph 16 Pacific | # dnf install centos-release-ceph-pacific | # dnf install centos-release-ceph-pacific |
| Ceph 17 Quincy | # dnf install centos-release-ceph-quincy | - |
| Ceph 18 Reef | # dnf install centos-release-ceph-reef | - |
| GlusterFS 6 | # dnf install centos-release-gluster6 | - |
| GlusterFS 7 | # dnf install centos-release-gluster7 | - |
| GlusterFS 8 | # dnf install centos-release-gluster8 | - |
| GlusterFS 9 | # dnf install centos-release-gluster9 | dnf install centos-release-gluster9  |
| GlusterFS 10 | # dnf install centos-release-gluster10| # dnf install centos-release-gluster10 |
| NFS Ganesha 2.8 | # dnf install centos-release-nfs-ganesha28 | - |
| NFS Ganesha 3 | # dnf install centos-release-nfs-ganesha30 | - |
| NFS Ganesha 4 | - | # dnf install centos-release-nfs-ganesha4 |
| Samba 4.11 | # dnf install centos-release-samba411 | - |
| Samba 4.12 | # dnf install centos-release-samba412 | - |
| Samba 4.13 | # dnf install centos-release-samba413 | - |
| Samba 4.14 | # dnf install centos-release-samba414 |# dnf install centos-release-samba414 |
| Samba 4.15 | # dnf install centos-release-samba415 | # dnf install centos-release-samba415 |
| Samba 4.16 | # dnf install centos-release-samba416 | # dnf install centos-release-samba416 |
| Samba 4.17 | - | # dnf install centos-release-samba417 |

## Virtualization SIG

The [Virtualization SIG](https://wiki.centos.org/SpecialInterestGroup/Virtualization) aims to deliver a user consumable full stack for virtualization technologies. This includes delivery, deployment, management, update and patch application (for full lifecycle management) of the baseline platform when deployed in sync with a technology curated by the Virt-SIG.

| Package | How to Enable on AlmaLinux 8| How to Enable on AlmaLinux 9 |
| --- | --- | --- |
| Kata Containers 2.0 <br> Libguestfs 1.44 <br> Libvirt 7.0 <br> QEMU-KVM 5.2  | # dnf install centos-release-advanced-virtualization | - |
| oVirt 4.5 | # dnf install centos-release-ovirt45 | # dnf install centos-release-ovirt45 |
