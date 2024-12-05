---
title: "Raspberry Pi"
---

# Raspberry Pi

## About Raspberry Pi

[The Raspberry Pi](https://www.raspberrypi.org/) is a compact computer primarily used for learning computing and programming. It's also very popular for many DIY projects, including home media centers and home automation. Whether you need a full desktop experience or prefer running it headless depends on your project. While the Raspberry Pi can run different operating systems, it was specifically designed for Linux.

## Tested models

The AlmaLinux OS releases have been tested on the following models.

* Raspberry Pi 5 (supported since June 2024 images)
* Raspberry Pi 4 Model B
* Raspberry Pi 400
* Raspberry Pi 3 Model B+
* Raspberry Pi 3 Model A+

32-bit Raspberry Pis (ARMv6/ARMv7) and original Raspberry Pi 3 (without "+" models) are not supported. Other ARMv8 Raspberry Pis such as Compute Modules are not tested but will probably work. Let us know if it doesn't work. See also [How to contribute](#how-to-contribute) section.

Since AlmaLinux 9.5, images with GPT (GUID partition table) have been available in addition to traditional MBR images. GPT supports larger disks over 2TB and allows up to 128 partitions, compared to MBR's limit of 4. However, booting from a GPT disk is not supported on Raspberry Pi 3. Select the appropriate image for your Raspberry Pi model.

## Installation steps

### Download image

AlmaLinux OS provides standard Raspberry Pi images and images with a GNOME desktop environment.
Raspberry Pi images can be found on repo.almalinux.org/rpi/ and [mirrors](https://mirrors.almalinux.org/). It is recommended to get images from your nearest mirror. Dig into `/9/raspberrypi/images/` or `/8/raspberrypi/images/` directory of your nearest mirror.

* [AlmaLinux OS 8](https://repo.almalinux.org/almalinux/8/raspberrypi/images/)
* [AlmaLinux OS 9](https://repo.almalinux.org/almalinux/9/raspberrypi/images/)

:::details
At the time of our testing, these commands were used to fetch the images:

* AlmaLinux OS 8
  ```shell
  $ curl -LO https://repo.almalinux.org/almalinux/8/raspberrypi/images/AlmaLinux-8-RaspberryPi-latest.aarch64.raw.xz
  ```
* AlmaLinux OS 9
  ```shell
  $ curl -LO https://repo.almalinux.org/almalinux/9/raspberrypi/images/AlmaLinux-9-RaspberryPi-latest.aarch64.raw.xz
  ```
:::

### Verify AlmaLinux 8 images

   :::tip
   If you are using an AlmaLinux OS-powered system, you already have the key stored in the `/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux` file. So you can skip the download the key and print the key fingerprint steps.
   Run the following command to import the key instead:
   ```shell
   gpg --import /etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux
   ```
   :::

**In order to verify a downloaded image you need to:**

* Import the AlmaLinux OS PGP public key first:
   ```shell
   $ curl -O -s https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux
   ```

* Print the key fingerprint:
  ```shell
  $ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux
  gpg: WARNING: no command supplied.  Trying to guess what you mean ...
  pub   rsa4096 2021-01-12 [C] [expires: 2024-01-12]
        5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8
  uid           AlmaLinux <packager@almalinux.org>
  sub   rsa3072 2021-01-12 [S] [expires: 2024-01-12]
  ```
  :::warning
  The fingerprint is `5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8`. If you see a different fingerprint, it means you downloaded a compromised file. Please, [let us know](mailto:security@almalinux.org), remove the file and retry the download.
  :::

* Next you need to import the key:
  ```shell
  $ gpg --import RPM-GPG-KEY-AlmaLinux
  gpg: key 488FCF7C3ABB34F8: public key "AlmaLinux <packager@almalinux.org>" imported
  gpg: Total number processed: 1
  gpg:               imported: 1
  ```

**To verify the image:**

* Download the checksum file and its signature first:
  ```shell
  $ curl -O -s https://repo.almalinux.org/rpi/images/CHECKSUM
  $ curl -O -s https://repo.almalinux.org/rpi/images/CHECKSUM.asc
  ```

* Verify the checksum file signature:
  ```shell
  $ gpg --verify CHECKSUM.asc CHECKSUM
  gpg: Signature made Mon 14 Nov 2022 06:40:06 PM CET
  gpg:                using RSA key 51D6647EC21AD6EA
  gpg: Good signature from "AlmaLinux <packager@almalinux.org>" [unknown]
  gpg: WARNING: This key is not certified with a trusted signature!
  gpg:          There is no indication that the signature belongs to the owner.
  Primary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8
       Subkey fingerprint: E53C F5EF 91CE B0AD 1812  ECB8 51D6 647E C21A D6EA
  ```
  :::tip
  Make sure that you see the `Good signature from "AlmaLinux <packager@almalinux.org>"` message in the output.
  :::

* Verify the checksum of the downloaded image:
  ```shell
  $ sha256sum -c CHECKSUM 2>&1 | grep OK
  AlmaLinux-8-RaspberryPi-latest.aarch64.raw.xz: OK
  ```
  :::warning
  If the output is different, you should download the image again.
  :::

### Verify AlmaLinux 9 images

**In order to verify a downloaded image:**

* Import the AlmaLinux OS PGP public key first:
  ```shell
  $ curl -O -s https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9
  ```
  :::tip
  If you are using an AlmaLinux OS-powered system, you already have the key stored in the `/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9` file. So you can skip the download the key and print the key fingerprint steps.
  Run the following command instead to import the key:
  ```shell
  gpg --import /etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9
  ```
  :::

* Print the key fingerprint:
  ```shell
  $ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux-9
  pub   rsa4096 2022-01-18 [SC]
        BF18AC2876178908D6E71267D36CB86CB86B3716
  uid           AlmaLinux OS 9 <packager@almalinux.org>
  sub   rsa4096 2022-01-18 [E]
  ```
  :::warning
  The fingerprint is `BF18AC2876178908D6E71267D36CB86CB86B3716`. If you see a different fingerprint, it means you downloaded a compromised file. Please, [let us know](mailto:security@almalinux.org), remove the file and retry the download.
  :::
* Next you need to import the key:
  ```shell
  $ gpg --import RPM-GPG-KEY-AlmaLinux-9
  gpg: key D36CB86CB86B3716: public key "AlmaLinux <packager@almalinux.org>" imported
  gpg: Total number processed: 1
  gpg:               imported: 1
  ```

**To verify the image:**
* Download the checksum file and its signature first:
  ```shell
  $ curl -O -s https://repo.almalinux.org/rpi/9/images/CHECKSUM
  $ curl -O -s https://repo.almalinux.org/rpi/9/images/CHECKSUM.asc
  ```

* Verify the checksum file signature:
  ```shell
  $ gpg --verify CHECKSUM.asc CHECKSUM
  gpg: Signature made Fri 18 Nov 2022 12:06:49 AM CET
  gpg:                using RSA key D36CB86CB86B3716
  gpg: Good signature from "AlmaLinux OS 9 <packager@almalinux.org>" [unknown]
  gpg: WARNING: This key is not certified with a trusted signature!
  gpg:          There is no indication that the signature belongs to the owner.
  Primary key fingerprint: BF18 AC28 7617 8908 D6E7  1267 D36C B86C B86B 3716
  ```
  :::tip
  Make sure that you see the `Good signature from "AlmaLinux <packager@almalinux.org>"` message in the output.
  :::

* Verify the checksum of the downloaded image:
  ```shell
  $ sha256sum -c CHECKSUM 2>&1 | grep OK
  AlmaLinux-9-RaspberryPi-latest.aarch64.raw.xz: OK
  ```
  :::warning
  If the output is different, you should download the image again.
  :::
### Burn Raspberry Pi image

The next step is to burn the image to an SD card using
- [RPi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#using-raspberry-pi-imager)
- [Fedora Media Writer](https://github.com/FedoraQt/MediaWriter/releases/)
- [balenaEtcher](https://www.balena.io/etcher/)
- `dd`
...  or a tool of your choice.

When it's done insert the SD Card into your Raspberry Pi and boot.

  :::tip
  Do not use OS customization feature built in RPi Imager. AlmaLinux doesn't support the feature and it conflicts with our initialization process such as default user creation. If you want to apply custom configuration, edit `user-data` file as described in [Configuration using cloud-init](#configuration-using-cloud-init) section.
  :::

### Getting started

When you boot your Raspberry Pi use you can login with the `almalinux` user and `almalinux` password. `root` account is locked by default.

### Connecting to Wi-Fi
* Check whether wifi is enabled:
  ```shell
  $ nmcli radio wifi
  ```
You should see the command responding with *enabled*.

* Next, check the list of local Wi-Fi networks next to you to find one you want to connect:
  ```shell
  $ nmcli dev wifi list
  ```
* Connect to the Wi-Fi network:
  ```shell
  $ nmcli --ask dev wifi connect <network-ssid>
  ```
  :::tip
  The --ask option will ask you to enter the password.
  :::
* Your wlan0 interface should now be active and pull an IP via DHCP. You can verify this via `nmcli con show` to check the physical layer connection and then `ip a` to see if you've gotten an IP.

### Getting GNOME working

:::tip
If you got an AlmaLinux Raspberry Pi GNOME image, please, ignore this section, as you already have this desktop environment.
:::

**The steps below describe how to get a GNOME desktop environment**:

(if you installed a standard AlmaLinux Raspberry Pi image)

* You can install just a barebones GNOME desktop environment once you installed the Raspberry Pi system.

* To do so run the following command:
  ```shell
  dnf groupinstall gnome-desktop
  ```
  :::tip
  Please, note that you might need to install additional packages if needed.
  :::

* If you want to install a more comprehensive GNOME environment:
  ```
  dnf groupinstall "Server with GUI"
  ```
* When the GNOME is installed run the following command to change the boot target to graphical:
  ```
  systemctl set-default graphical
  ```
* Reboot the system using the `sudo reboot` command and enjoy your Raspberry Pi with GNOME.

The Raspberry Pi demo video can be found in the [GitHub repository](https://github.com/AlmaLinux/raspberry-pi#bonus-round-2-getting-gnome-working).

## Configuration using cloud-init

AlmaLinux Raspberry Pi image now supports [cloud-init](https://cloudinit.readthedocs.io/en/latest/) to perform early initialization.
This section describes some typical examples to setup AlmaLinux Raspberry Pi image. See [the cloud-init official documentation](https://cloudinit.readthedocs.io/en/latest/index.html) for further information.

To configure early initialization, modify `user-data` file in FAT boot volume named `CIDATA` (the same location where `config.txt` exists). Please note that cloud-init usually only works at very first boot so modification on `user-data` file must be done before inserting SD card and power on your Raspberry Pi.


### Add SSH public key to default user

The default user is `almalinux`. Add your SSH public key to enable to login to your Raspberry Pi.

```diff
-     #ssh_authorized_keys:
+     ssh_authorized_keys:
       # Put here your ssh public keys
       #- ssh-ed25519 AAAAC3Nz...
+      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQ...
```


### Change default user's password

Specify hashed password like this. Use `mkpasswd -m sha-512` command to generate a hashed password.

```diff
   - name: almalinux
     groups: [ adm, systemd-journal ]
     sudo: [ "ALL=(ALL) NOPASSWD:ALL" ]
     lock_passwd: false
+    passwd: "$6$hjdBm161zuYLfb9.$jkJkq5pQDkFvWPeJhnon9xHIX93SgLTNLsyQcddWJLcQGcM8qHkxDztbwt1DzTP6dmlQ3J.AA6h4JeGaVg.pS1"
     #ssh_authorized_keys:
       # Put here your ssh public keys
       #- ssh-ed25519 AAAAC3Nz...
```
###  Enable SSH password authentication

Change `ssh_pwauth` to `true` to allow SSH password authentication. This does not enable password login for `root` user.

```diff
-ssh_pwauth: false
+ssh_pwauth: true
```

### Network configuration: wired network with a static IPv4 address

Put `network-config` file in the same location as `user-data`. The following example assigns a static IPv4 address to `eth0` interface.

```yaml
version: 2

ethernets:
  eth0:
    dhcp4: false
    optional: true
    addresses:
      - 192.168.1.99/24
    gateway4: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 8.8.4.4
```

### Network configuration: Wi-Fi with a dynamic IP address

Generally, the following `network-config` configuration enables to connect to Wi-Fi however this is not supported in AlmaLinux.

```yaml
version: 2

wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      "Wi-Fi_SSID":
        password: "Wi-Fi_PreSharedKey"
```

Add the following two lines at the bottom of `user-data` instead (example is diff style).

```diff
+runcmd:
+  - nmcli dev wifi connect "Wi-Fi_SSID" password "Wi-Fi_PreSharedKey"
```

### Frequent Issues

If you installed a GUI, and your screen has a black border around it, follow the steps below to fix this:

* Run the command below in the terminal:
  ```shell
  sudo nano /boot/config.txt
  ```
* Add a new line to the file:
  ```shell
  disable_overscan=1
  ```
* Type Ctrl+x on your keyboard to exit nano, and a little message at the bottom or the terminal will say, “save modified buffer?’. Type y for ‘yes’.
* Reboot your system:
  ```shell
  sudo reboot
  ```

## Booting AlmaLinux 9.1 on RPi (boot log)

:::details
```
[    0.000000] Linux version 6.1.23-v8.1.el9 (mockbuild@2bfe3a8b75a540939bf2bf4aa27f3116) (gcc (GCC) 11.3.1 20220421 (Red Hat 11.3.1-2), GNU ld version 2.35.2-24.el9) #1 SMP PREEMPT Tue Apr 25 17:13:15 UTC 2023
[    0.000000] Machine model: Raspberry Pi 3 Model B+
[    0.000000] efi: UEFI not found.
[    0.000000] Reserved memory: created CMA memory pool at 0x0000000038000000, size 64 MiB
[    0.000000] OF: reserved mem: initialized node linux,cma, compatible id shared-dma-pool
[    0.000000] Zone ranges:
[    0.000000]   DMA      [mem 0x0000000000000000-0x000000003bffffff]
[    0.000000]   DMA32    empty
[    0.000000]   Normal   empty
[    0.000000] Movable zone start for each node
[    0.000000] Early memory node ranges
[    0.000000]   node   0: [mem 0x0000000000000000-0x000000003bffffff]
[    0.000000] Initmem setup node 0 [mem 0x0000000000000000-0x000000003bffffff]
[    0.000000] On node 0, zone DMA: 16384 pages in unavailable ranges
[    0.000000] percpu: Embedded 29 pages/cpu s78440 r8192 d32152 u118784
[    0.000000] pcpu-alloc: s78440 r8192 d32152 u118784 alloc=29*4096
[    0.000000] pcpu-alloc: [0] 0 [0] 1 [0] 2 [0] 3
[    0.000000] Detected VIPT I-cache on CPU0
[    0.000000] CPU features: detected: ARM erratum 843419
[    0.000000] CPU features: detected: ARM erratum 845719
[    0.000000] alternatives: applying boot alternatives
[    0.000000] Built 1 zonelists, mobility grouping on.  Total pages: 241920
[    0.000000] Kernel command line: rw earlyprintk loglevel=8 console=ttyAMA0,115200 dwc_otg.lpm_enable=0 root=/dev/mmcblk0p2 rootdelay=1
[    0.000000] Unknown kernel command line parameters "earlyprintk", will be passed to user space.
[    0.000000] Dentry cache hash table entries: 131072 (order: 8, 1048576 bytes, linear)
[    0.000000] Inode-cache hash table entries: 65536 (order: 7, 524288 bytes, linear)
[    0.000000] mem auto-init: stack:off, heap alloc:off, heap free:off
[    0.000000] Memory: 873764K/983040K available (11904K kernel code, 2110K rwdata, 3680K rodata, 4160K init, 1098K bss, 43740K reserved, 65536K cma-reserved)
[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=4, Nodes=1
[    0.000000] ftrace: allocating 38901 entries in 152 pages
[    0.000000] ftrace: allocated 152 pages with 3 groups
[    0.000000] trace event string verifier disabled
[    0.000000] rcu: Preemptible hierarchical RCU implementation.
[    0.000000] rcu: 	RCU event tracing is enabled.
[    0.000000] rcu: 	RCU restricting CPUs from NR_CPUS=256 to nr_cpu_ids=4.
[    0.000000] 	Trampoline variant of Tasks RCU enabled.
[    0.000000] 	Rude variant of Tasks RCU enabled.
[    0.000000] 	Tracing variant of Tasks RCU enabled.
[    0.000000] rcu: RCU calculated value of scheduler-enlistment delay is 25 jiffies.
[    0.000000] rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=4
[    0.000000] NR_IRQS: 64, nr_irqs: 64, preallocated irqs: 0
[    0.000000] Root IRQ handler: bcm2836_arm_irqchip_handle_irq
[    0.000000] rcu: srcu_init: Setting srcu_struct sizes based on contention.
[    0.000000] arch_timer: cp15 timer(s) running at 62.50MHz (phys).
[    0.000000] clocksource: arch_sys_counter: mask: 0x1ffffffffffffff max_cycles: 0x1cd42e208c, max_idle_ns: 881590405314 ns
[    0.000095] sched_clock: 57 bits at 63MHz, resolution 16ns, wraps every 4398046511096ns
[    0.011254] Console: colour dummy device 80x25
[    0.013014] Calibrating delay loop (skipped), value calculated using timer frequency.. 125.00 BogoMIPS (lpj=250000)
[    0.013276] pid_max: default: 32768 minimum: 301
[    0.014509] LSM: Security Framework initializing
[    0.015789] SELinux:  Initializing.
[    0.015840] SELinux: CONFIG_SECURITY_SELINUX_CHECKREQPROT_VALUE is non-zero.  This is deprecated and will be rejected in a future kernel release.
[    0.015890] SELinux: https://github.com/SELinuxProject/selinux-kernel/wiki/DEPRECATE-checkreqprot
[    0.020336] Mount-cache hash table entries: 2048 (order: 2, 16384 bytes, linear)
[    0.020428] Mountpoint-cache hash table entries: 2048 (order: 2, 16384 bytes, linear)
[    0.042129] cgroup: Disabling memory control group subsystem
[    0.075459] cblist_init_generic: Setting adjustable number of callback queues.
[    0.075662] cblist_init_generic: Setting shift to 2 and lim to 1.
[    0.076421] cblist_init_generic: Setting shift to 2 and lim to 1.
[    0.077309] cblist_init_generic: Setting shift to 2 and lim to 1.
[    0.079850] rcu: Hierarchical SRCU implementation.
[    0.079930] rcu: 	Max phase no-delay instances is 1000.
[    0.086830] EFI services will not be available.
[    0.090527] smp: Bringing up secondary CPUs ...
[    0.096550] Detected VIPT I-cache on CPU1
[    0.097769] CPU1: Booted secondary processor 0x0000000001 [0x410fd034]
[    0.105304] Detected VIPT I-cache on CPU2
[    0.105647] CPU2: Booted secondary processor 0x0000000002 [0x410fd034]
[    0.110049] Detected VIPT I-cache on CPU3
[    0.110544] CPU3: Booted secondary processor 0x0000000003 [0x410fd034]
[    0.111260] smp: Brought up 1 node, 4 CPUs
[    0.111329] SMP: Total of 4 processors activated.
[    0.111449] CPU features: detected: 32-bit EL0 Support
[    0.111491] CPU features: detected: 32-bit EL1 Support
[    0.111580] CPU features: detected: CRC32 instructions
[    0.113797] CPU: All CPU(s) started at EL2
[    0.114060] alternatives: applying system-wide alternatives
[    0.136277] devtmpfs: initialized
[    0.186183] Enabled cp15_barrier support
[    0.186636] Enabled setend support
[    0.188396] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns
[    0.188648] futex hash table entries: 1024 (order: 4, 65536 bytes, linear)
[    0.195183] pinctrl core: initialized pinctrl subsystem
[    0.208103] DMI not present or invalid.
[    0.219648] NET: Registered PF_NETLINK/PF_ROUTE protocol family
[    0.253373] DMA: preallocated 128 KiB GFP_KERNEL pool for atomic allocations
[    0.255727] DMA: preallocated 128 KiB GFP_KERNEL|GFP_DMA pool for atomic allocations
[    0.259783] DMA: preallocated 128 KiB GFP_KERNEL|GFP_DMA32 pool for atomic allocations
[    0.261228] audit: initializing netlink subsys (disabled)
[    0.268684] audit: type=2000 audit(0.252:1): state=initialized audit_enabled=0 res=1
[    0.279456] thermal_sys: Registered thermal governor 'step_wise'
[    0.282765] cpuidle: using governor menu
[    0.286290] hw-breakpoint: found 6 breakpoint and 4 watchpoint registers.
[    0.289614] ASID allocator initialised with 65536 entries
[    0.293027] Serial: AMBA PL011 UART driver
[    0.359161] bcm2835-mbox 3f00b880.mailbox: mailbox enabled
[    0.405955] raspberrypi-firmware soc:firmware: Attached to firmware from 1970-01-05T00:12:17, variant unknown
[    0.410191] raspberrypi-firmware soc:firmware: Firmware hash is 000000000000000000000000096bb980ffffffc0
[    0.441871] KASLR disabled due to lack of seed
[    0.559945] bcm2835-dma 3f007000.dma: DMA legacy API manager, dmachans=0x1
[    0.577533] SCSI subsystem initialized
[    0.579329] usbcore: registered new interface driver usbfs
[    0.579833] usbcore: registered new interface driver hub
[    0.580142] usbcore: registered new device driver usb
[    0.582597] usb_phy_generic phy: supply vcc not found, using dummy regulator
[    0.584092] usb_phy_generic phy: dummy supplies not allowed for exclusive requests
[    0.586204] pps_core: LinuxPPS API ver. 1 registered
[    0.586248] pps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>
[    0.586394] PTP clock support registered
[    0.599822] NetLabel: Initializing
[    0.599874] NetLabel:  domain hash size = 128
[    0.599912] NetLabel:  protocols = UNLABELED CIPSOv4 CALIPSO
[    0.601164] NetLabel:  unlabeled traffic allowed by default
[    0.607665] vgaarb: loaded
[    0.611591] clocksource: Switched to clocksource arch_sys_counter
[    0.616631] VFS: Disk quotas dquot_6.6.0
[    0.616939] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
[    0.617958] FS-Cache: Loaded
[    0.619451] CacheFiles: Loaded
[    0.675026] NET: Registered PF_INET protocol family
[    0.677233] IP idents hash table entries: 16384 (order: 5, 131072 bytes, linear)
[    0.687998] tcp_listen_portaddr_hash hash table entries: 512 (order: 1, 8192 bytes, linear)
[    0.688245] Table-perturb hash table entries: 65536 (order: 6, 262144 bytes, linear)
[    0.688366] TCP established hash table entries: 8192 (order: 4, 65536 bytes, linear)
[    0.688642] TCP bind hash table entries: 8192 (order: 6, 262144 bytes, linear)
[    0.689113] TCP: Hash tables configured (established 8192 bind 8192)
[    0.690573] UDP hash table entries: 512 (order: 2, 16384 bytes, linear)
[    0.690844] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes, linear)
[    0.693613] NET: Registered PF_UNIX/PF_LOCAL protocol family
[    0.698887] RPC: Registered named UNIX socket transport module.
[    0.698978] RPC: Registered udp transport module.
[    0.699016] RPC: Registered tcp transport module.
[    0.699048] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.699432] PCI: CLS 0 bytes, default 64
[    0.706388] hw perfevents: enabled with armv8_cortex_a53 PMU driver, 7 counters available
[    0.708611] kvm [1]: IPA Size Limit: 40 bits
[    0.714771] kvm [1]: Hyp mode initialized successfully
[    1.716489] Initialise system trusted keyrings
[    1.719565] workingset: timestamp_bits=46 max_order=18 bucket_order=0
[    1.746394] zbud: loaded
[    1.757537] NFS: Registering the id_resolver key type
[    1.758148] Key type id_resolver registered
[    1.758212] Key type id_legacy registered
[    1.758842] nfs4filelayout_init: NFSv4 File Layout Driver Registering...
[    1.758994] nfs4flexfilelayout_init: NFSv4 Flexfile Layout Driver Registering...
[    1.770013] Key type asymmetric registered
[    1.770149] Asymmetric key parser 'x509' registered
[    1.770568] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 247)
[    1.772238] io scheduler mq-deadline registered
[    1.772358] io scheduler kyber registered
[    1.807165] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 0 config (0 80)
[    1.807618] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 1 config (0 81)
[    1.807822] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 2 config (0 82)
[    1.808031] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 3 config (0 83)
[    1.808216] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 4 config (0 84)
[    1.808456] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 5 config (0 85)
[    1.808634] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 6 config (0 86)
[    1.808825] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 7 config (0 87)
[    1.812309] bcm2708_fb soc:fb: FB found 1 display(s)
[    1.843120] Console: switching to colour frame buffer device 100x30
[    1.849163] bcm2708_fb soc:fb: Registered framebuffer for display 0, size 800x480
[    1.869832] bcm2835-rng 3f104000.rng: hwrng registered
[    1.871747] vc-mem: phys_addr:0x00000000 mem_base=0x00000000 mem_size:0x00000000(0 MiB)
[    1.877183] gpiomem-bcm2835 3f200000.gpiomem: Initialised: Registers at 0x3f200000
[    1.941882] brd: module loaded
[    1.978700] loop: module loaded
[    1.982075] Loading iSCSI transport class v2.0-870.
[    1.998743] usbcore: registered new interface driver r8152
[    1.999000] usbcore: registered new interface driver lan78xx
[    1.999424] usbcore: registered new interface driver smsc95xx
[    2.000612] dwc_otg: version 3.00a 10-AUG-2012 (platform bus)
[    2.205267] Core Release: 2.94a
[    2.205540] Setting default values for core params
[    2.207029] Finished setting default values for core params
[    2.411593] Using Buffer DMA mode
[    2.411688] Periodic Transfer Interrupt Enhancement - disabled
[    2.411731] Multiprocessor Interrupt Enhancement - disabled
[    2.411816] OTG VER PARAM: 0, OTG VER FLAG: 0
[    2.412104] Shared Tx FIFO mode
[    2.414884]
[    2.414935] WARN::dwc_otg_hcd_init:1072: FIQ DMA bounce buffers: virt = ffffffc009861000 dma = 0x00000000f8090000 len=9024
[    2.415160] FIQ FSM acceleration enabled for :
[    2.415160] Non-periodic Split Transactions
[    2.415160] Periodic Split Transactions
[    2.415160] High-Speed Isochronous Endpoints
[    2.415160] Interrupt/Control Split Transaction hack enabled
[    2.415302] dwc_otg: Microframe scheduler enabled
[    2.415572]
[    2.415596] WARN::hcd_init_fiq:496: MPHI regs_base at ffffffc0096e5000
[    2.416411] dwc_otg 3f980000.usb: DWC OTG Controller
[    2.417055] dwc_otg 3f980000.usb: new USB bus registered, assigned bus number 1
[    2.417983] dwc_otg 3f980000.usb: irq 74, io mem 0x00000000
[    2.418812] Init: Port Power? op_state=1
[    2.418920] Init: Power Port (1)
[    2.425132] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.01
[    2.425192] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    2.425242] usb usb1: Product: DWC OTG Controller
[    2.425290] usb usb1: Manufacturer: Linux 6.1.23-v8.1.el9 dwc_otg_hcd
[    2.425355] usb usb1: SerialNumber: 3f980000.usb
[    2.431455] hub 1-0:1.0: USB hub found
[    2.432172] hub 1-0:1.0: 1 port detected
[    2.438894] dwc_otg: FIQ enabled
[    2.438944] dwc_otg: NAK holdoff enabled
[    2.438980] dwc_otg: FIQ split-transaction FSM enabled
[    2.439115] Module dwc_common_port init
[    2.443143] usbcore: registered new interface driver uas
[    2.445043] usbcore: registered new interface driver usb-storage
[    2.447156] mousedev: PS/2 mouse device common for all mice
[    2.453828] cpu cpu0: Cannot get clock for CPU0
[    2.453931] raspberrypi-cpufreq: probe of raspberrypi-cpufreq failed with error -2
[    2.455607] sdhci: Secure Digital Host Controller Interface driver
[    2.455641] sdhci: Copyright(c) Pierre Ossman
[    2.456697] sdhci-pltfm: SDHCI platform and OF driver helper
[    2.463028] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 2 config (0 82)
[    2.463541] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 2 config (0 82)
[    2.463681] leds-gpio: probe of leds failed with error -5
[    2.469003] ledtrig-cpu: registered to indicate activity on CPUs
[    2.470772] hid: raw HID events driver (C) Jiri Kosina
[    2.471788] usbcore: registered new interface driver usbhid
[    2.471834] usbhid: USB HID core driver
[    2.483158] bcm2835_vchiq 3f00b840.mailbox: failed to set channelbase
[    2.483435] vchiq: could not initialize vchiq platform
[    2.488463] NET: Registered PF_PACKET protocol family
[    2.489504] Key type dns_resolver registered
[    2.495036] registered taskstats version 1
[    2.495705] Loading compiled-in X.509 certificates
[    2.500585] Key type .fscrypt registered
[    2.500667] Key type fscrypt-provisioning registered
[    2.550943] Indeed it is in host mode hprt0 = 00021101
[    2.603776] uart-pl011 3f201000.serial: cts_event_workaround enabled
[    2.605916] 3f201000.serial: ttyAMA0 at MMIO 0x3f201000 (irq = 99, base_baud = 0) is a PL011 rev2
[    2.673550] printk: console [ttyAMA0] enabled
[    2.678027] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 5 config (0 85)
[    2.678701] raspberrypi-exp-gpio soc:firmware:expgpio: Failed to get GPIO 5 config (0 85)
[    2.679138] reg-fixed-voltage cam1_regulator: error -EIO: can't get GPIO
[    2.679804] reg-fixed-voltage: probe of cam1_regulator failed with error -5
[    2.684657] bcm2835-aux-uart 3f215040.serial: there is not valid maps for state default
[    2.686253] bcm2835-aux-uart 3f215040.serial: error -ENOSPC: unable to register 8250 port
[    2.686941] bcm2835-aux-uart: probe of 3f215040.serial failed with error -28
[    2.692446] bcm2835-wdt bcm2835-wdt: Broadcom BCM2835 watchdog timer
[    2.693829] bcm2835-power bcm2835-power: ASB register ID returned 0x00000000
[    2.706003] mmc-bcm2835 3f300000.mmcnr: mmc_debug:0 mmc_debug2:0
[    2.706339] mmc-bcm2835 3f300000.mmcnr: DMA channel allocated
[    2.739920] usb 1-1: new full-speed USB device number 2 using dwc_otg
[    2.741621] sdhost: log_buf @ (____ptrval____) (c2a77000)
[    2.750165] Indeed it is in host mode hprt0 = 00021101
[    2.798082] mmc0: sdhost-bcm2835 loaded - DMA enabled (>1)
[    2.805500] of_cfs_init
[    2.809990] of_cfs_init: OK
[    2.832623] mmc0: host does not support reading read-only switch, assuming write-enable
[    2.836719] mmc0: new high speed SDHC card at address 4567
[    2.837390] uart-pl011 3f201000.serial: no DMA platform data
[    2.842736] Waiting 1 sec before mounting root device...
[    2.848391] mmcblk0: mmc0:4567 QEMU! 8.00 GiB
[    2.881023]  mmcblk0: p1 p2
[    2.885646] mmcblk0: mmc0:4567 QEMU! 8.00 GiB
[    3.002060] usb 1-1: New USB device found, idVendor=0409, idProduct=55aa, bcdDevice= 1.01
[    3.003141] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[    3.004012] usb 1-1: Product: QEMU USB Hub
[    3.004221] usb 1-1: Manufacturer: QEMU
[    3.004407] usb 1-1: SerialNumber: 314159-1
[    3.012806] hub 1-1:1.0: USB hub found
[    3.015694] hub 1-1:1.0: 8 ports detected
[    3.408809] usb 1-1.1: new full-speed USB device number 3 using dwc_otg
[    3.541223] usb 1-1.1: not running at top speed; connect to a high speed hub
[    3.572088] usb 1-1.1: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[    3.573075] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=9
[    3.573924] usb 1-1.1: Product: QEMU USB Mouse
[    3.574895] usb 1-1.1: Manufacturer: QEMU
[    3.576576] usb 1-1.1: SerialNumber: 89126-1.1
[    3.645464] input: QEMU QEMU USB Mouse as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.1/1-1.1:1.0/0003:0627:0001.0001/input/input0
[    3.660977] hid-generic 0003:0627:0001.0001: input,hidraw0: USB HID v0.01 Mouse [QEMU QEMU USB Mouse] on usb-3f980000.usb-1.1/input0
[    3.756747] usb 1-1.2: new full-speed USB device number 4 using dwc_otg
[    3.870426] usb 1-1.2: not running at top speed; connect to a high speed hub
[    3.892762] usb 1-1.2: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[    3.893185] usb 1-1.2: New USB device strings: Mfr=1, Product=4, SerialNumber=11
[    3.893969] usb 1-1.2: Product: QEMU USB Keyboard
[    3.895015] usb 1-1.2: Manufacturer: QEMU
[    3.896513] usb 1-1.2: SerialNumber: 68284-1.2
[    3.951819] input: QEMU QEMU USB Keyboard as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.0/0003:0627:0001.0002/input/input1
[    4.056460] hid-generic 0003:0627:0001.0002: input,hidraw1: USB HID v1.11 Keyboard [QEMU QEMU USB Keyboard] on usb-3f980000.usb-1.2/input0
[    4.176769] EXT4-fs (mmcblk0p2): mounted filesystem with ordered data mode. Quota mode: none.
[    4.178581] VFS: Mounted root (ext4 filesystem) on device 179:2.
[    4.190300] devtmpfs: mounted
[    4.445271] Freeing unused kernel memory: 4160K
[    4.449218] Run /sbin/init as init process
[    4.449420]   with arguments:
[    4.449592]     /sbin/init
[    4.449746]     earlyprintk
[    4.449988]   with environment:
[    4.450177]     HOME=/
[    4.450360]     TERM=linux
[    4.472055] random: crng init done
[    9.494267] audit: type=1404 audit(9.464:2): enforcing=1 old_enforcing=0 auid=4294967295 ses=4294967295 enabled=1 old-enabled=1 lsm=selinux res=1
[   11.566538] SELinux:  Class user_namespace not defined in policy.
[   11.567172] SELinux: the above unknown classes and permissions will be allowed
[   11.694915] SELinux:  policy capability network_peer_controls=1
[   11.695194] SELinux:  policy capability open_perms=1
[   11.695638] SELinux:  policy capability extended_socket_class=1
[   11.696635] SELinux:  policy capability always_check_network=0
[   11.697039] SELinux:  policy capability cgroup_seclabel=1
[   11.697273] SELinux:  policy capability nnp_nosuid_transition=1
[   11.697594] SELinux:  policy capability genfs_seclabel_symlinks=1
[   11.698045] SELinux:  policy capability ioctl_skip_cloexec=0
[   12.393988] audit: type=1403 audit(12.364:3): auid=4294967295 ses=4294967295 lsm=selinux res=1
[   12.485570] systemd[1]: Successfully loaded SELinux policy in 3.059932s.
[   12.805212] mmc1: Timeout waiting for hardware interrupt.
[   13.134037] systemd[1]: System time before build time, advancing clock.
[   14.325355] NET: Registered PF_INET6 protocol family
[   14.365418] Segment Routing with IPv6
[   14.366689] In-situ OAM (IOAM) with IPv6
[   15.324585] systemd[1]: Relabelled /dev, /dev/shm, /run, /sys/fs/cgroup in 650.957ms.
[   15.900358] systemd[1]: systemd 252-13.el9_2 running in system mode (+PAM +AUDIT +SELINUX -APPARMOR +IMA +SMACK +SECCOMP +GCRYPT +GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS -FIDO2 +IDN2 -IDN -IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 -PWQUALITY +P11KIT -QRENCODE +TPM2 +BZIP2 +LZ4 +XZ +ZLIB +ZSTD -BPF_FRAMEWORK +XKBCOMMON +UTMP +SYSVINIT default-hierarchy=unified)
[   15.904667] systemd[1]: Detected architecture arm64.

Welcome to AlmaLinux 9.2 (Turquoise Kodkod)!

[   16.003991] systemd[1]: No hostname configured, using default hostname.
[   16.010667] systemd[1]: Hostname set to <localhost>.
[   16.127177] systemd[1]: Initializing machine ID from random generator.
[   22.470849] systemd-rc-local-generator[120]: /etc/rc.d/rc.local is not marked executable, skipping.
[   28.307921] audit: type=1400 audit(1679270415.164:4): avc:  denied  { append } for  pid=142 comm="dmidecode" path="/run/cloud-init/ds-identify.log" dev="tmpfs" ino=32 scontext=system_u:system_r:dmidecode_t:s0 tcontext=system_u:object_r:net_conf_t:s0 tclass=file permissive=0
[   28.576896] audit: type=1400 audit(1679270415.436:5): avc:  denied  { append } for  pid=144 comm="dmidecode" path="/run/cloud-init/ds-identify.log" dev="tmpfs" ino=32 scontext=system_u:system_r:dmidecode_t:s0 tcontext=system_u:object_r:net_conf_t:s0 tclass=file permissive=0
[   28.813327] audit: type=1400 audit(1679270415.676:6): avc:  denied  { append } for  pid=146 comm="dmidecode" path="/run/cloud-init/ds-identify.log" dev="tmpfs" ino=32 scontext=system_u:system_r:dmidecode_t:s0 tcontext=system_u:object_r:net_conf_t:s0 tclass=file permissive=0
[   28.930810] audit: type=1400 audit(1679270415.792:7): avc:  denied  { append } for  pid=148 comm="dmidecode" path="/run/cloud-init/ds-identify.log" dev="tmpfs" ino=32 scontext=system_u:system_r:dmidecode_t:s0 tcontext=system_u:object_r:net_conf_t:s0 tclass=file permissive=0
[   29.287482] audit: type=1400 audit(1679270416.148:8): avc:  denied  { append } for  pid=150 comm="dmidecode" path="/run/cloud-init/ds-identify.log" dev="tmpfs" ino=32 scontext=system_u:system_r:dmidecode_t:s0 tcontext=system_u:object_r:net_conf_t:s0 tclass=file permissive=0
[   43.298159] systemd[1]: Queued start job for default target Graphical Interface.
[   43.431704] systemd[1]: Created slice Slice /system/getty.
[  OK  ] Created slice Slice /system/getty.
[   43.474536] systemd[1]: Created slice Slice /system/modprobe.
[  OK  ] Created slice Slice /system/modprobe.
[   43.497344] systemd[1]: Created slice Slice /system/serial-getty.
[  OK  ] Created slice Slice /system/serial-getty.
[   43.517136] systemd[1]: Created slice Slice /system/sshd-keygen.
[  OK  ] Created slice Slice /system/sshd-keygen.
[   43.536784] systemd[1]: Created slice User and Session Slice.
[  OK  ] Created slice User and Session Slice.
[   43.550280] systemd[1]: Started Dispatch Password Requests to Console Directory Watch.
[  OK  ] Started Dispatch Password …ts to Console Directory Watch.
[   43.565626] systemd[1]: Started Forward Password Requests to Wall Directory Watch.
[  OK  ] Started Forward Password R…uests to Wall Directory Watch.
[   43.597377] systemd[1]: Set up automount Arbitrary Executable File Formats File System Automount Point.
[  OK  ] Set up automount Arbitrary…s File System Automount Point.
[   43.610955] systemd[1]: Reached target Local Encrypted Volumes.
[  OK  ] Reached target Local Encrypted Volumes.
[   43.617450] systemd[1]: Reached target Local Integrity Protected Volumes.
[  OK  ] Reached target Local Integrity Protected Volumes.
[   43.623145] systemd[1]: Reached target Path Units.
[  OK  ] Reached target Path Units.
[   43.628409] systemd[1]: Reached target Remote File Systems.
[  OK  ] Reached target Remote File Systems.
[   43.635067] systemd[1]: Reached target Slice Units.
[  OK  ] Reached target Slice Units.
[   43.643877] systemd[1]: Reached target Local Verity Protected Volumes.
[  OK  ] Reached target Local Verity Protected Volumes.
[   43.750294] systemd[1]: Listening on Process Core Dump Socket.
[  OK  ] Listening on Process Core Dump Socket.
[   43.766467] systemd[1]: Listening on initctl Compatibility Named Pipe.
[  OK  ] Listening on initctl Compatibility Named Pipe.
[   43.808550] systemd[1]: Listening on Journal Socket (/dev/log).
[  OK  ] Listening on Journal Socket (/dev/log).
[   43.833110] systemd[1]: Listening on Journal Socket.
[  OK  ] Listening on Journal Socket.
[   43.881311] systemd[1]: Listening on udev Control Socket.
[  OK  ] Listening on udev Control Socket.
[   43.897113] systemd[1]: Listening on udev Kernel Socket.
[  OK  ] Listening on udev Kernel Socket.
[   43.910175] systemd[1]: Huge Pages File System was skipped because of an unmet condition check (ConditionPathExists=/sys/kernel/mm/hugepages).
[   44.001086] systemd[1]: Mounting POSIX Message Queue File System...
         Mounting POSIX Message Queue File System...
[   44.073404] systemd[1]: Mounting Kernel Debug File System...
         Mounting Kernel Debug File System...
[   44.159167] systemd[1]: Mounting Kernel Trace File System...
         Mounting Kernel Trace File System...
[   44.257552] systemd[1]: Starting Create List of Static Device Nodes...
         Starting Create List of Static Device Nodes...
[   44.356595] systemd[1]: Starting Load Kernel Module configfs...
         Starting Load Kernel Module configfs...
[   44.445632] systemd[1]: Starting Load Kernel Module drm...
         Starting Load Kernel Module drm...
[   44.551079] systemd[1]: Starting Load Kernel Module fuse...
         Starting Load Kernel Module fuse...
[   44.603762] systemd[1]: Starting Read and set NIS domainname from /etc/sysconfig/network...
         Starting Read and set NIS …from /etc/sysconfig/network...
[   44.780971] systemd[1]: Starting Journal Service...
         Starting Journal Service...
[   44.800043] systemd[1]: Load Kernel Modules was skipped because no trigger condition checks were met.
[   44.850412] fuse: init (API version 7.37)
[   44.890459] systemd[1]: Starting Generate network units from Kernel command line...
         Starting Generate network …ts from Kernel command line...
[   44.988959] systemd[1]: Starting Remount Root and Kernel File Systems...
         Starting Remount Root and Kernel File Systems...
[   45.029236] systemd[1]: Repartition Root Disk was skipped because no trigger condition checks were met.
[   45.272185] systemd[1]: Starting Apply Kernel Variables...
         Starting Apply Kernel Variables...
[   45.392285] systemd[1]: Starting Coldplug All udev Devices...
         Starting Coldplug All udev Devices...
[   45.758942] systemd[1]: Mounted POSIX Message Queue File System.
[  OK  ] Mounted POSIX Message Queue File System.
[   45.814062] systemd[1]: Mounted Kernel Debug File System.
[  OK  ] Mounted Kernel Debug File System.
[   45.839015] systemd[1]: Mounted Kernel Trace File System.
[  OK  ] Mounted Kernel Trace File System.
[   45.859989] systemd[1]: Finished Create List of Static Device Nodes.
[  OK  ] Finished Create List of Static Device Nodes.
[   45.895095] systemd[1]: modprobe@configfs.service: Deactivated successfully.
[   45.903060] systemd[1]: Finished Load Kernel Module configfs.
[  OK  ] Finished Load Kernel Module configfs.
[   45.924422] systemd[1]: modprobe@drm.service: Deactivated successfully.
[   45.934118] systemd[1]: Finished Load Kernel Module drm.
[  OK  ] Finished Load Kernel Module drm.
[   45.950935] systemd[1]: modprobe@fuse.service: Deactivated successfully.
[   45.990144] systemd[1]: Finished Load Kernel Module fuse.
[  OK  ] Finished Load Kernel Module fuse.
[   46.023341] systemd[1]: Finished Read and set NIS domainname from /etc/sysconfig/network.
[  OK  ] Finished Read and set NIS …e from /etc/sysconfig/network.
[   46.038850] systemd[1]: Finished Generate network units from Kernel command line.
[  OK  ] Finished Generate network units from Kernel command line.
[   46.108032] EXT4-fs (mmcblk0p2): re-mounted. Quota mode: none.
[   46.160366] systemd[1]: Mounting FUSE Control File System...
         Mounting FUSE Control File System...
[   46.218775] systemd[1]: Mounting Kernel Configuration File System...
         Mounting Kernel Configuration File System...
[   46.307144] systemd[1]: Finished Remount Root and Kernel File Systems.
[  OK  ] Finished Remount Root and Kernel File Systems.
[   46.338082] systemd[1]: Finished Apply Kernel Variables.
[  OK  ] Finished Apply Kernel Variables.
[   46.387977] systemd[1]: Mounted FUSE Control File System.
[  OK  ] Mounted FUSE Control File System.
[   46.394655] systemd[1]: Mounted Kernel Configuration File System.
[  OK  ] Mounted Kernel Configuration File System.
[   46.472305] systemd[1]: Activating swap /swapfile...
         Activating swap /swapfile...
[   46.484104] systemd[1]: OSTree Remount OS/ Bind Mounts was skipped because of an unmet condition check (ConditionKernelCommandLine=ostree).
[   46.489240] systemd[1]: First Boot Wizard was skipped because of an unmet condition check (ConditionFirstBoot=yes).
[   46.689761] Adding 102396k swap on /swapfile.  Priority:-2 extents:1 across:102396k SSFS
[   46.712757] systemd[1]: Starting Rebuild Hardware Database...
         Starting Rebuild Hardware Database...
[   46.808088] systemd[1]: Starting Load/Save Random Seed...
         Starting Load/Save Random Seed...
[   46.936036] systemd[1]: Starting Create System Users...
         Starting Create System Users...
[   46.984180] systemd[1]: Activated swap /swapfile.
[  OK  ] Activated swap /swapfile.
[   47.058260] systemd[1]: Reached target Swaps.
[  OK  ] Reached target Swaps.
[   47.512579] systemd[1]: Started Journal Service.
[  OK  ] Started Journal Service.
[  OK  ] Finished Load/Save Random Seed.
         Starting Flush Journal to Persistent Storage...
[   48.179198] systemd-journald[162]: Received client request to flush runtime journal.
[  OK  ] Finished Flush Journal to Persistent Storage.
[  OK  ] Finished Create System Users.
         Starting Create Static Device Nodes in /dev...
[  OK  ] Finished Create Static Device Nodes in /dev.
[  OK  ] Reached target Preparation for Local File Systems.
[  OK  ] Finished Coldplug All udev Devices.
[  OK  ] Finished Rebuild Hardware Database.
         Starting Rule-based Manage…for Device Events and Files...
[  OK  ] Started Rule-based Manager for Device Events and Files.
[  OK  ] Found device /dev/ttyAMA0.
[  OK  ] Found device /dev/disk/by-uuid/F996-6567.
         Mounting /boot...
[   76.878834] FAT-fs (mmcblk0p1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
[  OK  ] Mounted /boot.
[  OK  ] Reached target Local File Systems.
         Starting Rebuild Dynamic Linker Cache...
         Starting Automatic Boot Loader Update...
         Starting Create Volatile Files and Directories...
[  OK  ] Finished Automatic Boot Loader Update.
[**    ] (1 of 2) A start job is running for…amic Linker Cache (46s / no limit)
[   90.508025] usb 1-1: USB disconnect, device number 2
[*     ] (1 of 2) A start job is running for…amic Linker Cache (47s / no limit)
[    **] (1 of 2) A start job is running for…amic Linker Cache (50s / no limit)
[  OK  ] Finished Create Volatile Files and Directories.
[   94.350574] usb 1-1: new full-speed USB device number 5 using dwc_otg
[   94.356260] Indeed it is in host mode hprt0 = 00021141
[   95.177591] usb 1-1: New USB device found, idVendor=0409, idProduct=55aa, bcdDevice= 1.01
[   95.179150] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[   95.181215] usb 1-1: Product: QEMU USB Hub
[   95.182023] usb 1-1: Manufacturer: QEMU
[   95.182528] usb 1-1: SerialNumber: 314159-1
[   95.345987] hub 1-1:1.0: USB hub found
[   95.349299] hub 1-1:1.0: 8 ports detected
         Starting Security Auditing Service...
[   95.906858] usb 1-1.1: new full-speed USB device number 6 using dwc_otg
[   96.048290] usb 1-1.1: not running at top speed; connect to a high speed hub
[   96.125369] usb 1-1.1: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[   96.126635] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=9
[   96.128394] usb 1-1.1: Product: QEMU USB Mouse
         Starting Rebuild Journal Catalog...
[   96.255730] usb 1-1.1: Manufacturer: QEMU
[   96.256277] usb 1-1.1: SerialNumber: 89126-1.1
[   96.415036] input: QEMU QEMU USB Mouse as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.1/1-1.1:1.0/0003:0627:0001.0003/input/input2
[   96.489559] hid-generic 0003:0627:0001.0003: input,hidraw0: USB HID v0.01 Mouse [QEMU QEMU USB Mouse] on usb-3f980000.usb-1.1/input0
[    **] (1 of 3) A start job is running for… Auditing Service (53s / no limit)
[   96.653982] usb 1-1.2: new full-speed USB device number 7 using dwc_otg
[   96.814888] usb 1-1.2: not running at top speed; connect to a high speed hub
[   96.870092] usb 1-1.2: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[   96.870511] usb 1-1.2: New USB device strings: Mfr=1, Product=4, SerialNumber=11
[   96.871024] usb 1-1.2: Product: QEMU USB Keyboard
[   96.871616] usb 1-1.2: Manufacturer: QEMU
[ ***  ] (2 of 3) A start job is running for…amic Linker Cache (54s / no limit)[   98.209695] input: QEMU QEMU USB Keyboard as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.0/0003:0627:0001.0004/input/input3

[  OK  ] Finished Rebuild Journal Catalog.
[  OK  ] Finished Rebuild Dynamic Linker Cache.
[  OK  ] Started Security Auditing Service.
         Starting Update is Completed...
         Starting Record System Boot/Shutdown in UTMP...
[  OK  ] Finished Update is Completed.
[  OK  ] Finished Record System Boot/Shutdown in UTMP.
[  OK  ] Reached target System Initialization.
[  OK  ] Started dnf makecache --timer.
[  OK  ] Started Daily rotation of log files.
[  OK  ] Started Daily Cleanup of Temporary Directories.
[  OK  ] Reached target Timer Units.
[  OK  ] Listening on Avahi mDNS/DNS-SD Stack Activation Socket.
[  OK  ] Listening on D-Bus System Message Bus Socket.
[  OK  ] Listening on SSSD Kerberos…ache Manager responder socket.
[  OK  ] Reached target Socket Units.
         Starting Initial cloud-init job (pre-networking)...
[  OK  ] Reached target Basic System.
         Starting Avahi mDNS/DNS-SD Stack...
         Starting NTP client/server...
         Starting Restore /run/initramfs on shutdown...
[  OK  ] Started irqbalance daemon.
         Starting Authorization Manager...
         Starting Power Profiles daemon...
         Starting System Logging Service...
         Starting RealtimeKit Scheduling Policy Service...
[  OK  ] Reached target sshd-keygen.target.
[  OK  ] Reached target User and Group Name Lookups.
         Starting Accounts Service...
         Starting Switcheroo Control Proxy service...
         Starting User Login Management...
         Starting Disk Manager...
         Starting Daemon for power management...
[  OK  ] Started System Logging Service.
[  OK  ] Finished Restore /run/initramfs on shutdown.
         Starting D-Bus System Message Bus...
[  OK  ] Started NTP client/server.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started RealtimeKit Scheduling Policy Service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started User Login Management.
[  OK  ] Started Switcheroo Control Proxy service.
[  OK  ] Started Daemon for power management.
[  130.256091] usb 1-1: USB disconnect, device number 5
[  130.256412] usb 1-1.1: USB disconnect, device number 6
[  130.404552] usb 1-1.2: USB disconnect, device number 7
[  130.698103] Indeed it is in host mode hprt0 = 00021141
[  130.920063] usb 1-1: new full-speed USB device number 8 using dwc_otg
[  130.921545] Indeed it is in host mode hprt0 = 00021141
[  OK  ] Started Authorization Manager.
[  131.214604] usb 1-1: New USB device found, idVendor=0409, idProduct=55aa, bcdDevice= 1.01
[  131.215471] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  131.215987] usb 1-1: Product: QEMU USB Hub
[  131.216343] usb 1-1: Manufacturer: QEMU
[  131.216804] usb 1-1: SerialNumber: 314159-1
[  131.224314] hub 1-1:1.0: USB hub found
[  131.226142] hub 1-1:1.0: 8 ports detected
         Starting Modem Manager...
         Starting firewalld - dynamic firewall daemon...
[  OK  ] Started Accounts Service.
[  OK  ] Started Power Profiles daemon.
[  131.567648] usb 1-1.1: new full-speed USB device number 9 using dwc_otg
[  131.670337] usb 1-1.1: not running at top speed; connect to a high speed hub
[  131.688784] usb 1-1.1: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[  131.689349] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=9
[  131.689828] usb 1-1.1: Product: QEMU USB Mouse
[  131.690221] usb 1-1.1: Manufacturer: QEMU
[  131.690518] usb 1-1.1: SerialNumber: 89126-1.1
[  131.712728] input: QEMU QEMU USB Mouse as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.1/1-1.1:1.0/0003:0627:0001.0005/input/input4
[  131.717360] hid-generic 0003:0627:0001.0005: input,hidraw0: USB HID v0.01 Mouse [QEMU QEMU USB Mouse] on usb-3f980000.usb-1.1/input0
[  131.856200] usb 1-1.2: new full-speed USB device number 10 using dwc_otg
[  131.963344] usb 1-1.2: not running at top speed; connect to a high speed hub
[  131.974845] usb 1-1.2: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[  131.975633] usb 1-1.2: New USB device strings: Mfr=1, Product=4, SerialNumber=11
[  131.976154] usb 1-1.2: Product: QEMU USB Keyboard
[  131.976503] usb 1-1.2: Manufacturer: QEMU
[  131.976791] usb 1-1.2: SerialNumber: 68284-1.2
[  132.011443] input: QEMU QEMU USB Keyboard as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.0/0003:0627:0001.0006/input/input5
[  132.082076] hid-generic 0003:0627:0001.0006: input,hidraw1: USB HID v1.11 Keyboard [QEMU QEMU USB Keyboard] on usb-3f980000.usb-1.2/input0
[  OK  ] Started Modem Manager.
[  OK  ] Started Disk Manager.
[  140.720361] usb 1-1: USB disconnect, device number 8
[  140.720960] usb 1-1.1: USB disconnect, device number 9
[  140.829946] usb 1-1.2: USB disconnect, device number 10
[  141.297149] Indeed it is in host mode hprt0 = 00021141
[  141.579604] usb 1-1: new full-speed USB device number 11 using dwc_otg
[  141.580930] Indeed it is in host mode hprt0 = 00021141
[  141.880663] usb 1-1: New USB device found, idVendor=0409, idProduct=55aa, bcdDevice= 1.01
[  141.881258] usb 1-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  141.881671] usb 1-1: Product: QEMU USB Hub
[  141.881986] usb 1-1: Manufacturer: QEMU
[  141.882244] usb 1-1: SerialNumber: 314159-1
[  141.900410] hub 1-1:1.0: USB hub found
[  141.901814] hub 1-1:1.0: 8 ports detected
[  142.220154] usb 1-1.1: new full-speed USB device number 12 using dwc_otg
[  142.337253] usb 1-1.1: not running at top speed; connect to a high speed hub
[  142.371431] usb 1-1.1: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[  142.372196] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=9
[  142.372838] usb 1-1.1: Product: QEMU USB Mouse
[  142.373196] usb 1-1.1: Manufacturer: QEMU
[  142.373472] usb 1-1.1: SerialNumber: 89126-1.1
[  142.434777] input: QEMU QEMU USB Mouse as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.1/1-1.1:1.0/0003:0627:0001.0007/input/input6
[  142.492743] hid-generic 0003:0627:0001.0007: input,hidraw0: USB HID v0.01 Mouse [QEMU QEMU USB Mouse] on usb-3f980000.usb-1.1/input0
[  142.595781] usb 1-1.2: new full-speed USB device number 13 using dwc_otg
[  142.707158] usb 1-1.2: not running at top speed; connect to a high speed hub
[  142.718843] usb 1-1.2: New USB device found, idVendor=0627, idProduct=0001, bcdDevice= 0.00
[  142.719932] usb 1-1.2: New USB device strings: Mfr=1, Product=4, SerialNumber=11
[  142.720410] usb 1-1.2: Product: QEMU USB Keyboard
[  142.720810] usb 1-1.2: Manufacturer: QEMU
[  142.721084] usb 1-1.2: SerialNumber: 68284-1.2
[  142.741022] input: QEMU QEMU USB Keyboard as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.0/0003:0627:0001.0008/input/input7
[  142.824245] hid-generic 0003:0627:0001.0008: input,hidraw1: USB HID v1.11 Keyboard [QEMU QEMU USB Keyboard] on usb-3f980000.usb-1.2/input0
[  OK  ] Started firewalld - dynamic firewall daemon.
[  147.443786] cloud-init[358]: Cloud-init v. 22.1-9.el9.alma running 'init-local' at Mon, 20 Mar 2023 00:02:13 +0000. Up 146.31 seconds.
[  OK  ] Finished Initial cloud-init job (pre-networking).
[  OK  ] Reached target Preparation for Network.
         Starting Network Manager...
[  OK  ] Started Network Manager.
[  OK  ] Reached target Network.
         Starting Network Manager Wait Online...
         Starting Hostname Service...
[  OK  ] Started Hostname Service.
[  OK  ] Listening on Load/Save RF …itch Status /dev/rfkill Watch.
         Starting Network Manager Script Dispatcher Service...
[  OK  ] Started Network Manager Script Dispatcher Service.
[  OK  ] Finished Network Manager Wait Online.
         Starting Initial cloud-ini… (metadata service crawler)...
[  165.062401] cloud-init[454]: Cloud-init v. 22.1-9.el9.alma running 'init' at Mon, 20 Mar 2023 00:02:31 +0000. Up 164.34 seconds.
[  166.304990] cloud-init[454]: ci-info: +++++++++++++++++++++++Net device info++++++++++++++++++++++++
[  166.312983] cloud-init[454]: ci-info: +--------+------+-----------+-----------+-------+------------+
[  166.319418] cloud-init[454]: ci-info: | Device |  Up  |  Address  |    Mask   | Scope | Hw-Address |
[  166.326203] cloud-init[454]: ci-info: +--------+------+-----------+-----------+-------+------------+
[  166.334032] cloud-init[454]: ci-info: |   lo   | True | 127.0.0.1 | 255.0.0.0 |  host |     .      |
[  166.342912] cloud-init[454]: ci-info: |   lo   | True |  ::1/128  |     .     |  host |     .      |
[  166.347088] cloud-init[454]: ci-info: +--------+------+-----------+-----------+-------+------------+
[  166.352919] cloud-init[454]: ci-info: +++++++++++++++++++Route IPv6 info+++++++++++++++++++
[  166.358139] cloud-init[454]: ci-info: +-------+-------------+---------+-----------+-------+
[  166.362993] cloud-init[454]: ci-info: | Route | Destination | Gateway | Interface | Flags |
[  166.367239] cloud-init[454]: ci-info: +-------+-------------+---------+-----------+-------+
[  166.374170] cloud-init[454]: ci-info: +-------+-------------+---------+-----------+-------+
[  178.237665] EXT4-fs (mmcblk0p2): resizing filesystem from 1074176 to 1974011 blocks
[  180.657229] EXT4-fs (mmcblk0p2): resized filesystem to 1974011
         Starting Network Manager Script Dispatcher Service...
[  OK  ] Started Network Manager Script Dispatcher Service.
[  189.293212] cloud-init[454]: 2023-03-20 00:02:56,174 - util.py[WARNING]: Running module users-groups (<module 'cloudinit.config.cc_users_groups' from '/usr/lib/python3.9/site-packages/cloudinit/config/cc_users_groups.py'>) failed
[  213.309216] cloud-init[454]: Generating public/private rsa key pair.
[  213.320749] cloud-init[454]: Your identification has been saved in /etc/ssh/ssh_host_rsa_key
[  213.331188] cloud-init[454]: Your public key has been saved in /etc/ssh/ssh_host_rsa_key.pub
[  213.339964] cloud-init[454]: The key fingerprint is:
[  213.347315] cloud-init[454]: SHA256:NmlN1Lso5XT7isPVX99q52gaBVI/9aUcmBv4IKg6th8 root@almalinux.local
[  213.353576] cloud-init[454]: The key's randomart image is:
[  213.358567] cloud-init[454]: +---[RSA 3072]----+
[  213.364001] cloud-init[454]: |       .  .o.o. o|
[  213.373560] cloud-init[454]: |      . ..o.=o +o|
[  213.378544] cloud-init[454]: |     .   .oo.+= .|
[  213.381915] cloud-init[454]: |    .    +o.=. . |
[  213.386195] cloud-init[454]: |   .    S+.o +.  |
[  213.391974] cloud-init[454]: |  +    o..o +.. .|
[  213.398433] cloud-init[454]: | . oE    o ... .+|
[  213.410292] cloud-init[454]: |  .  .    o. .+.=|
[  213.415830] cloud-init[454]: |   ..     ..o=o+.|
[  213.422837] cloud-init[454]: +----[SHA256]-----+
[  213.428573] cloud-init[454]: Generating public/private ecdsa key pair.
[  213.434432] cloud-init[454]: Your identification has been saved in /etc/ssh/ssh_host_ecdsa_key
[  213.441556] cloud-init[454]: Your public key has been saved in /etc/ssh/ssh_host_ecdsa_key.pub
[  213.447548] cloud-init[454]: The key fingerprint is:
[  213.453073] cloud-init[454]: SHA256:45QxnS/TcscLFtAg0fmcxXkiBtY150hOPQnwGGk15zU root@almalinux.local
[  213.458806] cloud-init[454]: The key's randomart image is:
[  213.464785] cloud-init[454]: +---[ECDSA 256]---+
[  213.468749] cloud-init[454]: |        oo=O+**E+|
[  213.471572] cloud-init[454]: |         +o=O+OB=|
[  213.475080] cloud-init[454]: |        o +=.=o+o|
[  213.478204] cloud-init[454]: |         + o+o   |
[  213.481504] cloud-init[454]: |        S + * o  |
[  213.484526] cloud-init[454]: |       o . * o . |
[  213.487875] cloud-init[454]: |        .     .  |
[  213.492574] cloud-init[454]: |                 |
[  213.496587] cloud-init[454]: |                 |
[  213.500557] cloud-init[454]: +----[SHA256]-----+
[  213.505442] cloud-init[454]: Generating public/private ed25519 key pair.
[  213.509156] cloud-init[454]: Your identification has been saved in /etc/ssh/ssh_host_ed25519_key
[  213.511972] cloud-init[454]: Your public key has been saved in /etc/ssh/ssh_host_ed25519_key.pub
[  213.515016] cloud-init[454]: The key fingerprint is:
[  213.517457] cloud-init[454]: SHA256:+hHD0Bo9jqskyjKrN91vCggkjn9eqmqe8sXISVb3ZIU root@almalinux.local
[  213.520007] cloud-init[454]: The key's randomart image is:
[  213.523071] cloud-init[454]: +--[ED25519 256]--+
[  213.525735] cloud-init[454]: |         ..      |
[  213.527847] cloud-init[454]: |       oE.       |
[  213.530482] cloud-init[454]: |..  . + *        |
[  213.533017] cloud-init[454]: |=  . . @ .       |
[  213.535464] cloud-init[454]: |o.o   o S        |
[  213.537845] cloud-init[454]: | * =   o o       |
[  213.540282] cloud-init[454]: |  B.*.+ .        |
[  213.542811] cloud-init[454]: |=o+*.=....       |
[  213.552004] cloud-init[454]: |@Xoo+ .+o        |
[  213.556157] cloud-init[454]: +----[SHA256]-----+
[FAILED] Failed to start Initial cl…ob (metadata service crawler).
See 'systemctl status cloud-init.service' for details.
[  OK  ] Reached target Cloud-config availability.
[  OK  ] Reached target Network is Online.
         Starting Apply the settings specified in cloud-config...
         Starting OpenSSH server daemon...
         Starting Permit User Sessions...
[  OK  ] Finished Permit User Sessions.
[  OK  ] Started Command Scheduler.
         Starting GNOME Display Manager...
[  OK  ] Started Serial Getty on ttyAMA0.
[  OK  ] Reached target Login Prompts.
[  OK  ] Started OpenSSH server daemon.
[  OK  ] Reached target Multi-User System.
[  OK  ] Started GNOME Display Manager.
[  OK  ] Reached target Graphical Interface.
         Starting Record Runlevel Change in UTMP...
[  OK  ] Finished Record Runlevel Change in UTMP.

AlmaLinux 9.2 (Turquoise Kodkod)
Kernel 6.1.23-v8.1.el9 on an aarch64

almalinux login: [  222.131263] cloud-init[558]: Cloud-init v. 22.1-9.el9.alma running 'modules:config' at Mon, 20 Mar 2023 00:03:27 +0000. Up 220.28 seconds.
[  237.571131] cloud-init[592]: Cloud-init v. 22.1-9.el9.alma running 'modules:final' at Mon, 20 Mar 2023 00:03:41 +0000. Up 235.00 seconds.
ci-info: no authorized SSH keys fingerprints found for user almalinux.
<14>Mar 20 00:03:47 cloud-init: #############################################################
<14>Mar 20 00:03:47 cloud-init: -----BEGIN SSH HOST KEY FINGERPRINTS-----
<14>Mar 20 00:03:47 cloud-init: 256 SHA256:45QxnS/TcscLFtAg0fmcxXkiBtY150hOPQnwGGk15zU root@almalinux.local (ECDSA)
<14>Mar 20 00:03:47 cloud-init: 256 SHA256:+hHD0Bo9jqskyjKrN91vCggkjn9eqmqe8sXISVb3ZIU root@almalinux.local (ED25519)
<14>Mar 20 00:03:47 cloud-init: 3072 SHA256:NmlN1Lso5XT7isPVX99q52gaBVI/9aUcmBv4IKg6th8 root@almalinux.local (RSA)
<14>Mar 20 00:03:47 cloud-init: -----END SSH HOST KEY FINGERPRINTS-----
<14>Mar 20 00:03:47 cloud-init: #############################################################
-----BEGIN SSH HOST KEY KEYS-----
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBKu+gdlfm4pgbRbDRJfSUB9BElUWUA7mkU8Sp++wf+TEXuIAtlW5W1LZYkFTAiUkPNQ4NQ5rm6yRicMCpAfNWFc= root@almalinux.local
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAGHcFNm7GWwEH1L8w0BzE+xWSuchZXh6a9IcUZnEkl8 root@almalinux.local
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDtC0X1uAbqUFgbFAl3c9Zc56WaUVUdj7+S6rzdz8V2ShWAtdc3KtQIha86wye+ClN9ry3cJJIyMaFjEkeROZ2GVSmm3tvHyUN14pn86uJlYn2cjTSd0hjVbEqhTzdvVpjAhUivZNM6E0ood6I/HQ4BYeehjaEcovTmYcAq62sV27EXJidQrBRpJkmmvVY5J6Q8HV0dbA5jCd/CBgGxQDaQI1rlZV3YEfhdK4cMKR9RQlPTxu8a8+w4JbgttkoFZE7T9ZsNkzyvHYIvo3S5TKZmBZHhhegnR0VJselGD1pGmfbbJ4P68jgi12nhKHcE/PD02Bu+3Q/yNxOKxpdpufl+Fp5BWJ8OypGozhT1AFVhuLZf+v4UDvxnr23Q2JjmTFHoIVx+gK+wN8k7CLCmUgPWeNYgV2A8xO3FamE+CA5yRcpU4uWyKM+01AhGBGMhsszJEndPSsoLNCgmg/Ch38dQtSuP63iEq4/ZFUXu8UZHehb3HfT6w+Ro4aSSjY44wFE= root@almalinux.local
-----END SSH HOST KEY KEYS-----
[  241.538302] cloud-init[592]: Cloud-init v. 22.1-9.el9.alma finished at Mon, 20 Mar 2023 00:03:48 +0000. Datasource DataSourceNoCloud [seed=/dev/mmcblk0p1][dsmode=net].  Up 241.33 seconds

```
:::

## How to contribute

You can send all the bugs you may see on [bugs.almalinux.org](https://bugs.almalinux.org ).
You might also want to check the AlmaLinux OS [Raspberry Pi repository](https://github.com/AlmaLinux/raspberry-pi) on GitHub.

Join the [Community Chat](https://chat.almalinux.org/) if you want to help and contribute or get any assistance.
