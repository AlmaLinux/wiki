# A03 R9 ❯ NVIDIA: Installation on 9.x
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[none](mailto:none@almalinux.org) <br>  ↳ 9.x \| x86_64 \| 2023-05-xx </small>|
<br> 


## 🌟 Introduction

This is a dedicated example for the AlmaLinux 9.x series, demonstrating how to install NVIDIA graphics driver using one of three variants:

* Variant I: Precompiled/Binary Driver
* Variant II: Compile Driver Source
* Variant III: NVIDIA .run Driver Installation Guide


## 🔖 Variant I: Install Binary Driver


➡️  Enable PowerTools:

```
sudo dnf config-manager --set-enabled powertools
sudo dnf makecache
```

➡️  Add EPEL9

```
sudo dnf -y install epel-release
sudo dnf upgrade
```

➡️  Add NVIDIA Repository:


```
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo
sudo dnf makecache
```

➡️  Install the latest NVIDIA driver:

```
sudo dnf module install nvidia-driver:latest
```

➡️  Install third-party libraries for CUDA:

```
sudo dnf install freeglut-devel libX11-devel libXi-devel libXmu-devel make mesa-libGLU-devel freeimage-devel libglfw3-devel
```


## 🔖 Variant II: Compile Driver Source

::: tip
Installing NVIDIA drivers on AlmaLinux 9 requires using ELRepo Mainline kernel.
:::

### ELRepo releated steps

➡️ Enable CodeReady Builder & add EPEL9:

```
sudo dnf config-manager --set-enabled crb
sudo dnf makecache && sudo dnf -y install epel-release
sudo dnf makecache
```

➡️  Add ELRepo:

```
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
sudo dnf -y install https://www.elrepo.org/elrepo-release-9.el9.elrepo.noarch.rpm
sudo dnf makecache
```

➡️  Enable ELRepo Mainline Kernel Repo:

```
sudo dnf config-manager --set-enabled elrepo-kernel
sudo dnf makecache
```

➡️  Install ELrepo Mainline kernel:

```
sudo dnf -y install kernel-ml kernel-ml-modules kernel-ml-modules-extra kernel-ml-devel kernel-headers
```

### NVIDIA driver build related steps

➡️  Add NVIDIA repository:

```
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo
sudo dnf makecache
```

➡️  Install NVIDIA DKMS Drivers:

```
sudo dnf module install nvidia-driver:latest-dkms
```

➡️  Disable Nouveau:

```
printf 'blacklist nouveau\n' | sudo tee /etc/modprobe.d/nouveau-blacklist.conf
sudo dracut -f --regenerate-all
lsmod | grep -Ei '(nouv|nvidia)'
```

➡️  Reboot to runlevel 3:

```
sudo systemctl set-default multi-user.target
sudo reboot
sudo systemctl set-default graphical.target
sudo reboot
```

## 🔖 Variant III: NVIDIA .run Driver Installation Guide

➡️  Enable needed repository :

```
sudo dnf install epel-release
sudo dnf config-manager --enable crb
sudo dnf config-manager --set-enabled extras
```
➡️  Install needed packages :

```
sudo dnf install kernel-devel
sudo dnf install kernel-headers
sudo dnf install dkms
sudo dnf install redhat-lsb-core
sudo dnf install vulkan
sudo dnf install vulkan-tools
sudo dnf install vulkan-headers
sudo dnf install vulkan-loader-devel
```

➡️  Disable Nouveau :

```
sudo touch /etc/modprobe.d/nouveau-blacklist.conf
echo "blacklist nouveau" | sudo tee /etc/modprobe.d/nouveau-blacklist.conf
echo "options nouveau modeset=0" | sudo tee -a /etc/modprobe.d/nouveau-blacklist.conf
```

```
sudo dracut --force
```

```
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
sudo grub2-mkconfig -o /boot/efi/EFI/almalinux/grub.cfg
```

```
sudo reboot
```

➡️  Install the .run driver :

**Download the latest driver (**Verify compatibility with your GPU**):**

https://www.nvidia.com/en-us/drivers/unix/linux-amd64-display-archive/

➡️  Go into the downloaded driver directory (**Replace /path/to/driver with the actual path**): 

```
cd /path/to/driver
```

➡️  Make the driver executable (**XXX.XXX.XX Is the driver version**):

```
sudo chmod +x NVIDIA-LINUX-x86_64-XXX.XXX.XX.run
```

➡️  Switch to Run Level 3 :

```
sudo init 3
```

➡️  .run Driver installation options :

**Choose either Option 1 or Option 2 based on your preference.**

**Option 1** :

Install via the Console Text UI by following the prompt:
**Replace XXX.XXX.XX with the actual driver version.**

sudo ./NVIDIA-LINUX-x86_64-XXX.XXX.XX.run

**Option 2** :

Install silently via console :
**Replace XXX.XXX.XX with the actual driver version.**

sudo ./NVIDIA-Linux-x86_64-XXX.XXX.XX.run --accept-license --silent --run-nvidia-xconfig --dkms

➡️  Update the initramfs (**This is needed as of 535.XXX.XX drivers**) :
Update the initramfs to ensure the changes made by the NVIDIA driver installation are reflected.

```
sudo dracut -f
```

```
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
sudo grub2-mkconfig -o /boot/efi/EFI/almalinux/grub.cfg
```

➡️  Set the default target to graphical for a desktop environment & Set the default target back to multi-user for a server or command-line environment.

```
sudo systemctl set-default graphical.target
sudo systemctl set-default multi-user.target
```

```
sudo reboot
```

## Known issue with NVIDIA-Settings Desktop Icon** :
### Create NVIDIA Settings desktop icon :

```
sudo echo "[Desktop Entry]" | sudo tee /usr/share/applications/nvidia-settings.desktop
sudo echo "Type=Application" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Name=NVIDIA Settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Comment=Configure NVIDIA Settings" | sudo tee -a /usr/share/applications/nv```idia-settings.desktop
sudo echo "Exec=nvidia-settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Icon=nvidia-settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Terminal=false" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
sudo echo "Categories=System;Settings;X-Red-Hat-Base-Utilities;" | sudo tee -a /usr/share/applications/nvidia-settings.desktop
```


## 📚 Further Reading and Next Steps

<u>Get Back:</u>
- AlmaLinux System Series ❯ [NVIDIA Driver Installation Guide](SystemSeriesA03.md)   

<u>In-depth Resources:</u>
    
- AlmaLinux System Series ❯ [NVIDIA: Installation on 8.x](SystemSeriesA03R8.md)

<u>Related Resources:</u>
- AlmaLinux Nginx Series ❯ [A Beginner's Guide](../nginx/NginxSeriesA01.md)
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](SystemSeriesA0.md)


