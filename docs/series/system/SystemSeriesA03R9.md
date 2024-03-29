# A03 R9 ❯ NVIDIA: Installation on 9.x
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-22
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[none](mailto:none@almalinux.org) <br>  ↳ 9.x \| x86_64 \| 2023-05-xx </small>|
<br> 


## 🌟 Introduction

This is a dedicated example for the AlmaLinux 9.x series, demonstrating how to install NVIDIA graphics driver using one of two variants:

* Variant I: Precompiled/Binary Driver
* Variant II: Compile Driver Source


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

## 📚 Further Reading and Next Steps

<u>Get Back:</u>

- AlmaLinux System Series ❯ [NVIDIA Driver Installation Guide](SystemSeriesA03.md)   

<u>In-depth Resources:</u>
    
- AlmaLinux System Series ❯ [NVIDIA: Installation on 8.x](SystemSeriesA03R8.md)

<u>Related Resources:</u>
- AlmaLinux Nginx Series ❯ [A Beginner's Guide](../nginx/NginxSeriesA01.md)
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](SystemSeriesA0.md)


