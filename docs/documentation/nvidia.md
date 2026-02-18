---
title: "NVIDIA Drivers"
---

# NVIDIA Driver Packages

After a [successful RFC approval by ALESCO](https://github.com/AlmaLinux/ALESCo/pull/8) we began building and shipping NVIDIA driver packages. These packages are based on the NVIDIA open source drivers and are secureboot-signed. The drivers are built using kernel kmods meaning upon installation/update there are no DKMS compilations required.

We build and ship drivers for AlmaLinux Kitten 10, AlmaLinux 10, and AlmaLinux 9. At this time we do not build or ship drivers for AlmaLinux 8, and support for AlmaLinux 8 is not expected at this time.

NVIDIA drivers are only available for x86_64 (excluding x86_64_v2 variants of 10\*) and aarch64 architectures.

_\* We expect to ship x86_64_v2 support in the near future._

## Installation of GPU Driver

Installation is very easy, requiring only 2 `dnf` commands - the first to enable the repository, and the second to install the drivers.

`sudo dnf install almalinux-release-nvidia-driver`

This will enable the AlmaLinux NVIDIA driver repository, AlmaLinux CRB repository, and NVIDIA's upstream CUDA repository. It will also install the [EPEL repository](https://docs.fedoraproject.org/en-US/epel/).

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

Many people want or need nvidia-smi for information about their GPU(s). The `nvidia-smi` binary is provided by the `nvidia-driver-cuda` package and can be installed as such:

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

- `modprobe: ERROR: could not insert 'nvidia_drm': No such device`
  - This most likely stems from your running kernel being different than the latest installed kernel. Rebooting should fix it if that is the case.
- `nvidia_drm fails to load / can't be loaded`
  - On some machines' configurations, the nvidia_drm can't be found or loaded even if `lsmod |grep -i nvidia` correctly reports the modules as installed.
  In such cases, you may need to perform a few extra actions.
    - check what's the driver version you want to install by looking for the nvidia driver's version number folder within `/lib/firmware/nvidia/`
    _\* in the following line's example it will be 590.48.01_
    - create this file (or update if it already exists) `/etc/dracut.conf.d/nvidia-gsp.conf` and add (or update) this:
    `install_items+=" /lib/firmware/nvidia/590.48.01/gsp_ga10x.bin`
    - rebuild initramfs `sudo dracut -fv` (v stands for verbose, and if anything is mistyped, dracut will throw an [ERROR], making it easier to fix the issue)
    - reboot now
  - If your setup includes multiple monitors, plugged directly into the card's plugs, after reboot you may get only one monitor working. To fix this, you need to
  activate the persistence service
  ```
  sudo systemctl start nvidia-persistenced.service
  sudo systemctl enable nvidia-persistenced.service
  ```
  - On some machines with integrated GPUs, `nvidia-smi` may report no processes. This happens because the machine automatically switches between the available devices.
  If you'd prefer to always use the discrete NVidia GPU (and are running a KDE desktop):
    - find the devices names by running `sudo lshw -short`
    ```
        H/W path           Device          Class          Description
    =============================================================
    [OMISSIS]
    /0/100/1/0.1       card1           multimedia     NVIDIA Corporation
    [OMISSIS]
    /0/100/1f.3        card0           multimedia     Cannon Lake PCH cAVS

    ```
    - add the following environment variable to the file `/etc/environment`
    `KWIN_DRM_DEVICES=/dev/dri/{other_device_name}:/dev/dri/{nvidia_device_name}`
    alternatively, if the devices do not have a name, use the H/W path
    `KWIN_DRM_DEVICES=/0/100/1f.3:/0/100/1/0.1`
    Notice that the NVidia device needs to be last.
    At this point, `nvidia-smi` should now report processes
    ```
    -----------------------------------------------------------------------------------------+
    | NVIDIA-SMI 590.48.01              Driver Version: 590.48.01      CUDA Version: 13.1     |
    +-----------------------------------------+------------------------+----------------------+
    | GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
    |                                         |                        |               MIG M. |
    |=========================================+========================+======================|
    |   0  NVIDIA GeForce GTX 1650        On  |   00000000:01:00.0 Off |                  N/A |
    | N/A   35C    P8              4W /   30W |     699MiB /   4096MiB |      1%      Default |
    |                                         |                        |                  N/A |
    +-----------------------------------------+------------------------+----------------------+

    +-----------------------------------------------------------------------------------------+
    | Processes:                                                                              |
    |  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
    |        ID   ID                                                               Usage      |
    |=========================================================================================|
    |    0   N/A  N/A            2210      G   /usr/bin/ksecretd                         1MiB |
    |    0   N/A  N/A            2269      G   /usr/bin/kwin_wayland                   335MiB |
    |    0   N/A  N/A            2395      G   /usr/bin/Xwayland                         2MiB |
    |    0   N/A  N/A            2427      G   /usr/bin/ksmserver                        1MiB |
    |    0   N/A  N/A            2430      G   /usr/bin/kded6                            1MiB |
    |    0   N/A  N/A            2453      G   /usr/bin/plasmashell                     85MiB |
    |    0   N/A  N/A            2527      G   /usr/bin/kaccess                          1MiB |
    |    0   N/A  N/A            2533      G   ...it-kde-authentication-agent-1          1MiB |
    |    0   N/A  N/A            2535      G   ...ibexec/xdg-desktop-portal-kde          1MiB |
    |    0   N/A  N/A            2766      G   /usr/bin/kdeconnectd                      1MiB |
    |    0   N/A  N/A            2772      G   /usr/bin/xwaylandvideobridge              1MiB |
    |    0   N/A  N/A            2988      G   /usr/bin/kwalletd6                        1MiB |
    |    0   N/A  N/A           30685      G   /usr/libexec/kf6/kiod6                    1MiB |
    |    0   N/A  N/A           31358      G   /usr/bin/konsole                          1MiB |
    +-----------------------------------------------------------------------------------------+

    ```
