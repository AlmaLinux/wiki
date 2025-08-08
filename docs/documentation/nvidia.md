---
title: "NVIDIA Drivers"
---

# NVIDIA Driver Packages

After a [successful RFC approval by ALESCO](https://github.com/AlmaLinux/ALESCo/pull/8) we began building and shipping NVIDIA driver packages.  These packages are based on the NVIDIA open source drivers and are secureboot-signed.  The drivers are built using kernel kmods meaning upon installation/update there are no DKMS compilations required.

We build and ship drivers for AlmaLinux Kitten 10, AlmaLinux 10, and AlmaLinux 9.  At this time we do not build or ship drivers for AlmaLinux 8, and support for AlmaLinux 8 is not expected at this time.

NVIDIA drivers are only available for x86_64 (excluding x86_64_v2 variants of 10*) and aarch64 architectures.

_* We expect to ship x86_64_v2 support in the near future._

## Installation of GPU Driver

Installation is very easy, requiring only 2 `dnf` commands - the first to enable the repository, and the second to install the drivers.

`sudo dnf install almalinux-release-nvidia-driver`

This will enable the AlmaLinux NVIDIA driver repository, AlmaLinux CRB repository, and NVIDIA's upstream CUDA repository.  It will also install the [EPEL repository](https://docs.fedoraproject.org/en-US/epel/).

`sudo dnf install nvidia-open-kmod nvidia-driver`

This will install the minimal packages needed for the GPU driver to function.

For a more complete install you can use `sudo dnf install nvidia-open`.

At this point you can reboot to load the kernel module, or, if you're already running the latest kernel, `sudo modprobe nvidia_drm` will load the module.

### Verify

You can confirm the kernel modules are loaded as follows:

```
[root@server]# lsmod |grep -i nvidia
nvidia_drm            151552  0
nvidia_modeset       2166784  1 nvidia_drm
drm_ttm_helper         16384  1 nvidia_drm
video                  81920  1 nvidia_modeset
nvidia              12988416  1 nvidia_modeset
```

### nvidia-smi

Many people want or need nvidia-smi for information about their GPU(s).  The `nvidia-smi` binary is provided by the `nvidia-driver-cuda` package and can be installed as such:

`sudo dnf install nvidia-driver-cuda`

You can then run it directly:

```
[root@server]# nvidia-smi
Mon Jul 21 14:23:02 2025
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 575.64.03              Driver Version: 575.64.03      CUDA Version: 12.9     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA L4                      Off |   00000000:35:00.0 Off |                    0 |
| N/A   38C    P8             11W /   72W |       0MiB /  23034MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|  No running processes found                                                             |
+-----------------------------------------------------------------------------------------+
```

## Installation of CUDA Components
### CUDA SDK
`sudo dnf install cuda`
### GPUDirect Filesystems
At this time NVIDIA GPUDirect components are not available.

## Common Problems
*  `modprobe: ERROR: could not insert 'nvidia_drm': No such device`
   * This most likely stems from your running kernel being different than the latest installed kernel.  Rebooting should fix it if that is the case.
