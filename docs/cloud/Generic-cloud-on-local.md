---
title: Using Generic Cloud Images on a local machine
lang: en-US
---

# Using Generic Cloud Images on a local machine

You can use the AlmaLinux OS 8 and 9 Generic Cloud images for testing, developing, manipulating and repackaging purposes on your local machine.

Required packages:

- `osinfo-db` for AlmaLinux OS support on the virtualization stack.
- `qemu-img` (RPM) (ArchLinux), `qemu-utils` (DEB) for creating snapshots.
- `virt-install` (CLI) `virt-manager` (GUI) (RPM), `virt-manager` (ships with `virt-install` too) (DEB) for creating VMs.
- `xorriso` or `genisoimage` for creation of Cloud-init data ISOs.
- `guestfs-tools` (RPM) (ArchLinux), `libguestfs-tools` (DEB) for inspecting and manipulating image content.

## AlmaLinux Guest OS support

You need at least version `20210215` for AlmaLinux and `20210426` for other distributions `osinfo-db` packages to support AlmaLinux as a guest OS.

:::tip
`20210621` and newer recommended for latest improvements.
:::

To check whether AlmaLinux OS is supported on the installed version of `osinfo-db`:

```sh
osinfo-query os | grep almalinux

 almalinux8           | AlmaLinux 8                                        | 8        | http://almalinux.org/almalinux/8
 almalinux9           | AlmaLinux 9                                        | 9        | http://almalinux.org/almalinux/9
```

If the installed `osinfo-db` doesn’t support either or any version of AlmaLinux OS, You can manually update the Osinfo database with the `--local` option without overriding the installed `osinfo-db` which is installed by the distribution's package manager. The new database will have precedence when the database is loaded.

Retrieve the latest `$osinfo_db_version` from here (e.g., `20230719`) : [https://releases.pagure.org/libosinfo/?C=M;O=D](https://releases.pagure.org/libosinfo/?C=M;O=D)

```sh
osinfo_db_version='20230719' # Replace with the latest version

curl -O https://releases.pagure.org/libosinfo/osinfo-db-"$osinfo_db_version".tar.xz # Download
sudo osinfo-db-import --local osinfo-db-"$osinfo_db_version".tar.xz # Install
```

Refer to this guide to download and verify the cloud images: [https://wiki.almalinux.org/cloud/Generic-cloud.html#download-and-verification](https://wiki.almalinux.org/cloud/Generic-cloud.html#download-and-verification)

## Create a snapshot from the image

If you don’t want to modify the cloud image each time you create a VM, you can create a snapshot from the cloud image. The snapshot's virtual size can be different from the base image. In this example, we will use 20G instead of the base image's virtual size (10G). Cloud-init will grow the root filesystem automatically on the creation of the VM.

```sh
qemu-img create -f qcow2 -b AlmaLinux-9-GenericCloud-9.2-20230513.x86_64.qcow2 -F qcow2 wiki_example_almalinux92_snapshot.qcow2 20G
```

::: warning
If you face a permission error on image, snapshot, and Cloud-init ISO files, you can resolve it in the following ways:

- You can move the image and snapshot to the `/var/lib/libvirt/images` directory.
- Change the ownership of file to `qemu` user with `chown qemu:qemu`. On SELinux enforced systems, do not forget to change the context type too with `chcon -t virt_image_t`
  :::

## Cloud-init

The [NoCloud](https://cloudinit.readthedocs.io/en/latest/reference/datasources/nocloud.html) datasource allows the user to provide `user-data`, `meta-data` and `network-config` to the VM without running a network service (or even without having a network at all). You can provide Meta-data and User-data files with `--cloud-init` option of [virt-install](https://virt-manager.org/) `>= 3.0.0` or with an ISO file for versions `< 3.0.0.

The name of the default user on the AlmaLinux OS Generic Cloud images is `almalinux` and it's locked. Therefore we need to inject a password or public ssh key for authentication. In this example, we do both: set a password and add public SSH keys for the `almalinux` user.

These two main criteria must be met on the Cloud-init User Data:

- The first line must be `#cloud-config`.
- The syntax must be in `YAML`.

`user-data:`

```yaml
#cloud-config

ssh_pwauth: true # sshd service will be configured to accept password authentication method
password: changeme # Set a password for almalinux
chpasswd:
  expire: false # Don't ask for password reset after the first log-in
ssh_authorized_keys: # Add your ssh public key for publickey authentication
  - ssh-ed25519 AAAAB3NzaC1yc2EAAAABIwAAAQEA3I7VUf2l5gSn5uavROsc5HRDpZ turquoisekodkod@almalinux.example
  - ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAGEA3FSyQwBI6Z+nCSjUU sapphirecaracal@almalinux.example
```

:::tip
Refer to the Cloud-init modules [list](https://cloudinit.readthedocs.io/en/latest/topics/modules.html#) for further customization options.
:::

:::tip
You can close the console output of the VM with `Ctrl + ]`
:::

Start the VM - `virt-install >= 3.0.0` with `--cloud-init` option:

```sh
#!/usr/bin/env bash


vm_name='wiki-example-almalinux92'
vm_memory='2048'
vm_cpus='2'
vm_disk='/var/lib/libvirt/images/wiki_example_almalinux92_snapshot.qcow2'

ci_user_data='ci_user_data_ssh_auth_pass_pubkey'


virt-install \
    --connect qemu:///system \
    --name "$vm_name" \
    --memory "$vm_memory" \
    --machine q35 \
    --vcpus "$vm_cpus" \
    --cpu host-passthrough \
    --import \
    --cloud-init user-data="$ci_user_data" \
    --osinfo name=almalinux8 \
    --disk "$vm_disk" \
    --virt-type kvm
```

Start the VM - `virt-install < 3.0.0`

Create Cloud-init data ISO with User and Meta data files:
::: warning
The filename of Cloud-init user data, meta data must be renamed to `user-data` and `meta-data` and be placed on the root directory of ISO.
:::

```sh
/user-data
/meta-data
```

The `meta-data` can be empty for no meta-data option

```sh
touch meta-data
```

xorriso (AlmaLinux OS 9)

```sh
xorriso -as genisoimage -output ci_data.iso -volid CIDATA -joliet -rock user-data meta-data
```

genisoimage (AlmaLinux OS 8)

```sh
genisoimage -output ci_data.iso -volid CIDATA -joliet -rock user-data meta-data
```

Create the VM with Cloud-init data ISO mounted:

```sh
#!/usr/bin/env bash

vm_name='wiki-almalinux92'
vm_memory='2048'
vm_cpus='2'
vm_disk='/var/lib/libvirt/images/wiki_example_almalinux92_snapshot.qcow2'

ci_dataiso='/var/lib/libvirt/images/ci_data.iso'

virt-install \
     --connect qemu:///system \
     --name "$vm_name" \
     --memory "$vm_memory" \
     --machine q35 \
     --vcpus $vm_cpus \
     --cpu host-passthrough \
     --import \
     --osinfo name=almalinux9 \
     --disk "$vm_disk" \
     --disk "$ci_dataiso",device=cdrom \
     --virt-type kvm
```

Get the IP address of the VM:

```sh
virsh domainifaddr $VM_NAME
```

## Static IP

To create a VM with static IPs rather than dynamic from DHCP, We need to create `network-config` file in Networking config Version 1 or Networking config Version 2 format.

An example for a single interface VM on `192.168.122.0/24` network, our `network-config` file would be:

Networking config Version 1:

```yaml
version: 1
config:
  - type: physical
    name: eth0
    subnets:
      - type: static
        address: 192.168.122.92
        netmask: 255.255.255.0
        gateway: 192.168.122.1
        dns_nameservers:
          - 192.168.122.1
          - 9.9.9.9
```

Networking config Version 2:

```yaml
version: 2
ethernets:
  eth0:
    addresses:
      - 192.168.122.92/24
    gateway4: 192.168.124.1
    nameservers:
      addresses:
        - 192.168.122.1
        - 9.9.9.9
```

:::tip
Please consult documenation pages of [Networking config Version 1](https://cloudinit.readthedocs.io/en/latest/reference/network-config-format-v1.html) and [Networking config Version 2](https://cloudinit.readthedocs.io/en/latest/reference/network-config-format-v2.html) for the full list of options.
:::

In virt-install/manager version `>= 4.1.0` (available in AlmaLinux OS 9), you can use the `network-config` sub-option of the `--cloud-init` option.

```sh
#!/usr/bin/env bash

vm_name='wiki-almalinux92'
vm_memory='2048'
vm_cpus='2'
vm_disk='/var/lib/libvirt/images/wiki_example_almalinux92_snapshot.qcow2'

ci_user_data='ci_user_data_ssh_auth_pass_pubkey' # Cloud-init user-data
ci_network_config='ci_network_config_192_168_122_92_v1' # Cloud-init network-config


virt-install \
     --connect qemu:///system \
     --name "$vm_name" \
     --memory "$vm_memory" \
     --machine q35 \
     --vcpus "$vm_cpus" \
     --cpu host-passthrough \
     --import \
     --cloud-init user-data="$ci_user_data",network-config="$ci_network_config" \
     --osinfo name=almalinux9 \
     --disk "$vm_disk" \
     --virt-type kvm
```

On virt-install/manager `< 4.1.0` (AlmaLinux OS 8), you will need to create a Cloud-init Data ISO in ISO 9660 format.

::: warning
The names of Cloud-init user data, meta data and networking config must be renamed to `user-data`, `meta-data` and `network-config` and be present on the root directory of ISO.
:::

```sh
/user-data
/meta-data
/network-config
```

Create the Cloud-init Data ISO:

The `meta-data` file can be empty if no meta-data is needed.

```sh
touch meta-data
```

xorriso (AlmaLinux OS 9)

```sh
xorriso -as genisoimage -output ci_data.iso -volid CIDATA -joliet -rock user-data meta-data network-config
```

genisoimage (AlmaLinux OS 8)

```sh
genisoimage -output ci_data.iso -volid CIDATA -joliet -rock user-data meta-data network-config
```

Create the VM with Cloud-init data ISO mounted:

```sh
#!/usr/bin/env bash

vm_name='wiki-almalinux92'
vm_memory='2048'
vm_cpus='2'
vm_disk='/var/lib/libvirt/images/wiki_example_almalinux92_snapshot.qcow2'

ci_dataiso='/var/lib/libvirt/images/ci_data.iso'

virt-install \
     --connect qemu:///system \
     --name "$vm_name" \
     --memory "$vm_memory" \
     --machine q35 \
     --vcpus $vm_cpus \
     --cpu host-passthrough \
     --import \
     --osinfo name=almalinux9 \
     --disk "$vm_disk" \
     --disk "$ci_dataiso",device=cdrom \
     --virt-type kvm
```

## Virt-Manager (GUI)

Unlike the virt-install, the virt-manager doesn't have an option to provide Cloud-init `user-data`, `meta-data` and `network-config` (Static IP). For that reason we can add Cloud-init data ISO to our VM as CDROM device.

"New VM" -> "Import existing disk image" -> Choose AlmaLinux OS image itself or snapshot, put a tick on the "Customize configuration before install" option.

"Add Hardware" -> "Storage" -> Select Device type as "CDROM", click on "Manage" and select Cloud-init data ISO and click on "Finish" button. Start the VM with the "Begin Installation".

## Repackage cloud image

shutdown VM:

```sh
sudo virsh shutdown $VM_NAME
```

Convert the snapshot to the full image without touching backing file(`AlmaLinux-8-GenericCloud-8.4-20210616.x86_64.qcow2`):

```sh
qemu-img convert -c -O qcow2 doc-almalinux84-snapshot.qcow2 doc-almalinux84-base.qcow2
```

You can reset, unconfigure and inject files to the image with ` libguestfs virt-sysprep`. See the upstream documentation for further [option](https://libguestfs.org/virt-sysprep.1.html#options) and [operations.](https://libguestfs.org/virt-sysprep.1.html#operations)

```sh
virt-sysprep --format qcow2 -a doc-almalinux84-base.qcow2
```

## Inspection and Manipulation of images

Show a file inside the image

```sh
virt-cat -a AlmaLinux-9-GenericCloud-9.2-20230513.x86_64.qcow2 /etc/cloud/cloud.cfg
```

Show disk usage inside the image

```sh
virt-df -a AlmaLinux-9-GenericCloud-9.2-20230513.x86_64.qcow2 -h
```

Display the OS infromation

```sh
virt-inspector -a AlmaLinux-9-GenericCloud-9.2-20230513.x86_64.qcow2
```

Get the version of `kernel` package with the help of XPATH query

```sh
virt-inspector -a AlmaLinux-9-GenericCloud-9.2-20230513.x86_64.qcow2 | virt-inspector --xpath '//application[name="kernel"]/version | //application[name="kernel"]/release'

<version>5.14.0</version>
<release>284.11.1.el9_2</release>
```

Mount filesystems of an image.

```sh
mkdir guest_mount # Create the mount directoy
guestmount -a AlmaLinux-9-GenericCloud-9.2-20230513.x86_64.qcow2 -i --ro guest_mount/ # Mount read-only with --ro
guestunmount guest-mount/ # Unmount
```

::: tip
You can check the [libguestfs's website](https://www.libguestfs.org) for more documentation and more tools
:::
