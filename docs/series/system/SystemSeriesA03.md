# A03 ❯ NVIDIA Driver Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-22
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[none](mailto:none@almalinux.org) <br>  ↳ 9.x \| x86_64 \| 2023-05-xx </small>|
<br>


## 🌟 Introduction

This guide provides instructions how to install NVIDIA's graphics driver for AlmaLinux in to variants:

- **Binary Driver** [**8.x**](#) | [**9.x**]() 👈 <small>USING PRECOMPILED DRIVERS IS RECOMMENDED</small>
- **Compiling From Source** [**8.x**]() | [**9.x**]() ⚠️  <small>REQURIES SWITCHING TO ELRepo KERNEL</small>

## 🧠 Fundamental Concepts

### Dynamic Kernel Module Support (DKMS)

DKMS is a system utility that allows you to automatically build kernel modules.

### ELRepo Kernel

ELRepo is a community repository for Enterprise Linux distributions (e.g., RHEL, CentOS, AlmaLinux). It focuses on hardware-related packages to enhance your Linux experience. This is repo provides a kernel (packages) which tracks mainline kernel very closely. In result, this kernel is updated frequently and sometimes it leads to temporary incompatiblity with NVIDIA driver sources.

### NVIDIA Drivers Source
Install the NVIDIA graphics driver using the DKMS (Dynamic Kernel Module Support). Needs switching the kernel to ELRepo kernel version.

### NVIDIA Precompiled/Binary Drivers
NVIDIA compiles and tests this driver each precise kernel version. Installing it locks your kernel upgrade with (driver). It is the recommended way according to NVIDIA.


## 📖 Release-Specific Installation

- **NVIDIA Driver Installation Guide ❯ [Installation on 8.x](SystemSeriesA03R8)**
- **NVIDIA Driver Installation Guide ❯ [Installation on 9.x](SystemSeriesA03R9)**


## FAQ

### Q: Installed the module but getting Black Screen after reboot?

WIP

#### If you are able to change `GRUB` kernel boot parameters, do:

```
module_blacklist=nvidia,nvidia_drm,nvida_modeset
```

#### If you are getting Black Screen right after boot (no GRUB visible), do:

WIP

### Q: `prime-select`

WIP

## 📚 Further Reading and Next Steps

<u>Related Resources:</u>
- AlmaLinux Nginx Series ❯ [A Beginner's Guide](../nginx/NginxSeriesA01)
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](FirewalldSeriesA01)
