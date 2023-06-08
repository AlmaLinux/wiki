## Kickstart Installation (Unattended Installation)

Kickstart is used to perform unattended installation with predefined set of parameters

There are multiple ways of starting a kickstart installation, for details check out [pykickstart docs](https://pykickstart.readthedocs.io/en/latest/kickstart-docs.html#chapter-12-starting-a-kickstart-installation)

### Customization
Best way to start is to perform an installation in a virtual machine then take `/root/anaconda-ks.cfg` as the base and modify it, it contains selected options during the installation

All commands that can be used in kickstart are listed [here](https://pykickstart.readthedocs.io/en/latest/kickstart-docs.html#chapter-3-kickstart-commands-in-red-hat-enterprise-linux)

You can host the kickstart files using preinstalled python http server `python -m http.server` and then add `inst.ks=http://<ip>:<port>/kickstart.cfg` to grub during boot

### Examples
#### KDE Desktop
Example using KDE Desktop with preinstalled CRB and EPEL repositories preinstalled

```
# use graphical installer
graphical

# add base repositories with mirrors
repo --name="alamalinux9-baseos" --mirrorlist="https://mirrors.almalinux.org/mirrorlist/9/baseos"
repo --name="alamalinux9-appstream" --mirrorlist="https://mirrors.almalinux.org/mirrorlist/9/appstream"

# add epel repo with mirrors
repo --name="epel9-everything" --mirrorlist="https://mirrors.fedoraproject.org/mirrorlist?repo=epel-9&arch=x86_64"

# add CRB with mirrors
repo --name="CRB" --mirrorlist="https://mirrors.almalinux.org/mirrorlist/9/crb/"

# use internet install
url --url="https://repo.almalinux.org/almalinux/9/BaseOS/x86_64/kickstart/"

# set hostname (link is the first device that is up)
network --device=link --bootproto=dhcp --hostname="localhost"

# set locale and keyboard layout
keyboard --xlayouts='us'
lang en_US.UTF-8

# packages or groups to install
%packages
# exclude select applications
-kamera
-akregator
-kate

# repos used in kickstart arent saved afterwards
epel-release

# install kde desktop environmental group
@^kde-desktop-environment

# install virtual machine guest additions group
@guest-agents
%end

# enable first boot agent
firstboot --enable

# set timezone and use UTC
timezone America/New_York --utc

# disable root account
rootpw --lock

# create user with multiple groups and password in plaintext
user --groups="wheel,input" --name user --password="temp"

# repo command adds a repository only to the installer so add CRB to installed system too
%post
#!/bin/sh
dnf config-manager --set-enabled crb
%end
```
