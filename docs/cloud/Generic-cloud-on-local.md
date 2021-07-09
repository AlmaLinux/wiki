# Use Generic Cloud (cloud-init) image on local 
You can use the Generic Cloud image for testing, developing and repackaging purposes on your local machine or server.

## AlmaLinux Guest OS support

You need at least the `20210215` on AlmaLinux and `20210426` version on the other distro's `osinfo-db` package for the AlmaLinux Guest OS support.

**Note:** `20210621` and newer recommended for latest improvements.

Check the list of supported guest OSes:

```bash
$ osinfo-query os

 Short ID             | Name                                               | Version  | ID
----------------------+----------------------------------------------------+----------+-----------------------------------------
 almalinux8           | AlmaLinux 8                                        | 8        | http://almalinux.org/almalinux/8
 alpinelinux3.10      | Alpine Linux 3.10                                  | 3.10     | http://alpinelinux.org/alpinelinux/3.10
 alpinelinux3.11      | Alpine Linux 3.11                                  | 3.11     | http://alpinelinux.org/alpinelinux/3.11
 alpinelinux3.12      | Alpine Linux 3.12                                  | 3.12     | http://alpinelinux.org/alpinelinux/3.12
 alpinelinux3.13      | Alpine Linux 3.13                                  | 3.13     | http://alpinelinux.org/alpinelinux/3.13
 alpinelinux3.14      | Alpine Linux 3.14                                  | 3.14     | http://alpinelinux.org/alpinelinux/3.14
 alpinelinux3.5       | Alpine Linux 3.5                                   | 3.5      | http://alpinelinux.org/alpinelinux/3.5
 alpinelinux3.6       | Alpine Linux 3.6                                   | 3.6      | http://alpinelinux.org/alpinelinux/3.6
 alpinelinux3.7       | Alpine Linux 3.7                                   | 3.7      | http://alpinelinux.org/alpinelinux/3.7
 alpinelinux3.8       | Alpine Linux 3.8                                   | 3.8      | http://alpinelinux.org/alpinelinux/3.8
 alpinelinux3.9       | Alpine Linux 3.9                                   | 3.9      | http://alpinelinux.org/alpinelinux/3.9
 alt.p8               | ALT p8 StarterKits                                 | p8       | http://altlinux.org/alt/p8.starterkits
 alt.p9               | ALT p9 StarterKits                                 | p9       | http://altlinux.org/alt/p9.starterkits
 alt.sisyphus         | ALT regular                                        | sisyphus | http://altlinux.org/alt/sisyphus
 alt8.0               | ALT 8 Education                                    | 8.0      | http://altlinux.org/alt/8.0
 alt8.1               | ALT 8.1                                            | 8.1      | http://altlinux.org/alt/8.1
 alt8.2               | ALT 8.2                                            | 8.2      | http://altlinux.org/alt/8.2
 alt9.0               | ALT 9.0                                            | 9.0      | http://altlinux.org/alt/9.0
 alt9.1               | ALT 9.1                                            | 9.1      | http://altlinux.org/alt/9.1
 altlinux1.0          | Mandrake RE Spring 2001                            | 1.0      | http://altlinux.org/altlinux/1.0
 altlinux2.0          | ALT Linux 2.0                                      | 2.0      | http://altlinux.org/altlinux/2.0
 altlinux2.2          | ALT Linux 2.2                                      | 2.2      | http://altlinux.org/altlinux/2.2
 altlinux2.4          | ALT Linux 2.4                                      | 2.4      | http://altlinux.org/altlinux/2.4
 altlinux3.0          | ALT Linux 3.0                                      | 3.0      | http://altlinux.org/altlinux/3.0
 altlinux4.0          | ALT Linux 4.0                                      | 4.0      | http://altlinux.org/altlinux/4.0
 altlinux4.1          | ALT Linux 4.1                                      | 4.1      | http://altlinux.org/altlinux/4.1
 altlinux5.0          | ALT Linux 5.0                                      | 5.0      | http://altlinux.org/altlinux/5.0
 altlinux6.0          | ALT Linux 6.0                                      | 6.0      | http://altlinux.org/altlinux/6.0
 altlinux7.0          | ALT Linux 7.0                                      | 7.0      | http://altlinux.org/altlinux/7.0

...
```

You can manually update the Osinfo database with the `--local` option without overriding the osinfo-db which is installed by the distribution's package manager. The new database will have precedence when the database is loaded.

Check the latest version from here: [https://releases.pagure.org/libosinfo/?C=M;O=D](https://releases.pagure.org/libosinfo/?C=M;O=D)
```bash
# Replace $VERSION with the latest version
$ curl -O https://releases.pagure.org/libosinfo/osinfo-db-$VERSION.tar.xz # Download
$ sudo osinfo-db-import --local osinfo-db-$VERSION.tar.xz #Install
```
Download and Verify the cloud image from this guide: [https://wiki.almalinux.org/cloud/Generic-cloud.html#download-and-verification](https://wiki.almalinux.org/cloud/Generic-cloud.html#download-and-verification)


## Create a snapshot from the image 

If you don't want to modify the cloud image on each VM creation, you can create a snapshot from the cloud image. The snapshot's virtual size can be different from the base image. In this example, we will use 20G instead of the base image's virtual size (10G). Cloud-init will grow the root filesystem automatically on the creation of the VM.

```bash
$ qemu-img create -f qcow2 -b AlmaLinux-8-GenericCloud-8.4-20210616.x86_64.qcow2 -F qcow2 wiki-almalinux84-snapshot.qcow2 20G
```
## Cloud-init

The [NoCloud](https://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html) Datasource allows the user to provide User-data and Meta-data to the instance without running a network service (or even without having a network at all). You can provide Meta-data and User-data files with `--cloud-init` option of [virt-install](https://virt-manager.org/) >= 3.0.0 or with a ISO file for < 3.0.0.

The accounts on the cloud image locked by default. You can set a password with the [Set Password](https://cloudinit.readthedocs.io/en/latest/topics/modules.html#set-passwords), add your ssh public key with [Authorized Keys](https://cloudinit.readthedocs.io/en/latest/topics/modules.html#authorized-keys). In this example, we will set a password for the default `almalinux` user.

**Note:** Check cloud-init modules [list](https://cloudinit.readthedocs.io/en/latest/topics/modules.html#) for further customization options. 

`user-data:`
```yaml
#cloud-config

ssh_pwauth: yes #  sshd will be configured to accept password authentication
password: 'P@$$W0RD' # Set a password for almalinux Cloud User
chpasswd:
    expire: false
ssh_authorized_keys: # Add your ssh public key for publickey authentication 
    - ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAGEA3FSyQwBI6Z+nCSjUU ...
    - ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA3I7VUf2l5gSn5uavROsc5HRDpZ ...

```


Start the VM - `virt-install >= 3.0.0` with `--cloud-init` option:
```bash
#!/usr/bin/env bash

VM_NAME="wiki-almalinux84"
USER_DATA="user-data"
DISK="wiki-almalinux84-snapshot.qcow2"


virt-install \
--name "${VM_NAME}" \
--memory 2048 \
--vcpus 2 \
--import \
--cloud-init user-data="${USER_DATA}" \
--os-variant almalinux8 \
--disk "${DISK}" \
--network network=default,model=virtio \
--graphics none \
--virt-type kvm

```

Start the VM - `virt-install < 3.0.0` 

Create a CloudInit seed iso file with User-Data and Meta-Data:

```bash
$ touch meta-data # empty meta-data file for no meta-data option
$ genisoimage -output seed.iso -volid cidata -joliet -rock user-data meta-data
```

```bash
#!/usr/bin/env bash

VM_NAME="wiki-almalinux84"
DISK="wiki-almalinux84-snapshot.qcow2"
SEED_ISO="seed.iso"


virt-install \
--name "${VM_NAME}" \
--memory 2048 \
--vcpus 2 \
--import \
--os-variant almalinux8 \
--disk "${DISK}" \
--disk "${SEED_ISO}",device=cdrom \
--network network=default,model=virtio \
--graphics none \
--virt-type kvm

```


Get the IP address of the VM:
```bash
$ sudo virsh domainifaddr $VM_NAME
```

## Static IP

You need a Cloud-init Meta-Data file for the static IP configuration.

`meta-data:`

```yaml
network-interfaces: |
  iface eth0 inet static
  address 192.168.122.8
  network 192.168.122.0
  netmask 255.255.255.0
  broadcast 192.168.1.255
  gateway 192.168.122.1
```

Because of a current [bug](https://bugs.launchpad.net/cloud-init/+bug/1225922) in cloud-init, static networking configurations are not automatically started. Instead, the default DHCP configuration remains active. A suggested workaround is to manually stop and restart the network interface via the `bootcmd`. 

Add these lines in the User-Data file.

`user-data:`
```yaml
#cloud-config

bootcmd:
    - ifdown eth0
    - ifup eth0
```

Create a VM with static IP:

```bash
#!/usr/bin/env bash

VM_NAME="wiki-almalinux84"
META_DATA="meta-data"
USER_DATA="user-data"
DISK="wiki-almalinux84-snapshot.qcow2"

virt-install \
--name "${VM_NAME}" \
--memory 2048 \
--vcpus 2 \
--import \
--cloud-init meta-data="${META_DATA}",user-data="${USER_DATA}" \
--os-variant almalinux8 \
--disk ${DISK} \
--network network=default,model=virtio \
--graphics none \
--virt-type kvm

```

## Repackage cloud image

shutdown VM:

```bash
$ sudo virsh shutdown $VM_NAME
```

Convert the snapshot to the full image without touching backing file(`AlmaLinux-8-GenericCloud-8.4-20210616.x86_64.qcow2`):

```bash
$ qemu-img convert -c -O qcow2 doc-almalinux84-snapshot.qcow2 doc-almalinux84-base.qcow2
```

You can reset, unconfigure and inject files to the image with ` libguestfs virt-sysprep`. See the upstream documentation for further [option](https://libguestfs.org/virt-sysprep.1.html#options) and [operations.](https://libguestfs.org/virt-sysprep.1.html#operations)

```bash
$ virt-sysprep --format qcow2 -a doc-almalinux84-base.qcow2
```
