---
title: "Live Media"
---
# Live Media

## About Live Media

Live Media is a way to try AlmaLinux on your computer without installing it to the hard drive. You can run it from a USB or DVD to preview and for system rescue needs. Images support both BIOS and UEFI, including Secure Boot mode. 

## Live Media Options
There are a few AlmaLinux Live Media Options:

* GNOME Mini: contains a core GNOME environment with Firefox browser
* GNOME: contains a full GNOME environment with popular workstation applications like LibreOffice, Thunderbird and so on.
 ![image](https://user-images.githubusercontent.com/1273137/126913694-e0f4ad15-e405-4764-a24c-8c63f5d5799c.png)
* KDE: contains KDE desktop environment with Firefox browser, Konqueror browser, and applications like LibreOffice, Thunderbird, etc.
 ![image](https://user-images.githubusercontent.com/1273137/129279587-faacf763-01ca-4cf2-bb2b-a1458f4028db.png)
* XFCE: contains XFCE desktop environment with Firefox browser, Thunderbird, LibreOffice, and more applications. 
 ![image](https://user-images.githubusercontent.com/1273137/129016230-1921cc3b-f949-421e-a31a-18336507a632.png)
  
## How to download and write images

The first step is to [download an AlmaLinux image](https://repo.almalinux.org/almalinux/8/live/x86_64/).

Then it all depends on what OS you use. 

**Linux:**

It is simple to use the dd command for any Linux OS. 

Insert your target USB and locate it. There are different ways to do it but here are some of them:

* ` sudo fdisk -l`  - this command shows you the connected block storage devices, including the USB devices. 

* `lsblk` - this command gives you all the available block storage devices, including the USB block storage devices.

* `sudo blkid` - this command gives you the same information as `lsblk`, but you have to rub it as root. 

You need to look for /dev/sda or /dev/sdb or /dev/sdc, which is your target USB.


After you found out the location of your target USB, navigate to the location of your source ISO. Run dd command to copy files from ISO to USB: 

`sudo dd if=/AlmaLinux-8-x86_64-Live-GNOME-Mini-beta-1.iso of=/dev/sdc status=progress`

`dd`: Start the dd command to write DVD/CD iso image.
`if=AlmaLinux-8-x86_64-Live-GNOME-Mini-beta-1.iso`: path to the input file.
`of=/dev/sdc` : path to destination USB disk/stick.
`status=progress`: display a progress bar while writing the image to the USB stick such as /dev/sdb. 
That’s all! You now have ready Live AlmaLinux on a USB stick.

**Windows:**

For Window OS there is a helpful free and open-source application - [Rufus](https://rufus.ie/). 

Open the application, choose your target USB, ISO you need to burn, press start - and Live OS is ready to run. 

**MacOS:**

The cross-platform tool [balenaEtcher](https://www.balena.io/etcher/) is used to write images on macOS. It is simple too. Open banlenaEtcher, choose the image and the USB, press Flash. 

More details and information about AlmaLinux Live Media can be found on [Live Media SIG](https://wiki.almalinux.org/sigs/LiveMedia.html).
