---
title: "AlmaLinux WSL"
---

# Windows Subsystem for Linux 

## About WSL

Windows Subsystem for Linux (WSL) is designed as integration between Windows and Linux. You can now run the AlmaLinux terminal environment on a Windows machine. It doesn't require a dual-boot or a VM. 

#### Supported versions:

You can get an image from the Microsoft Store: 
* [AlmaLinux OS 8](https://apps.microsoft.com/store/detail/almalinux-8-wsl/9NMD96XJJ19F)
* [AlmaLinux OS 9](https://apps.microsoft.com/store/detail/almalinux-9/9P5RWLM70SN9)

or using the direct links:

<table align="center">
    <tr>
        <td align="center">AlmaLinux 8</td>
        <td align="center"><a href="https://wsl.almalinux.org/8/AlmaLinuxOS-8_latest_x64.appx">Intel/AMD (x86_64)</a></td>
        <td align="center"><a href="https://wsl.almalinux.org/8/AlmaLinuxOS-8_latest_ARM64.appx">ARM64 (AArch64)</a></td>
    </tr>
    <tr>
        <td align="center">AlmaLinux 9</td>
        <td align="center"><a href="https://wsl.almalinux.org/9/AlmaLinuxOS-9_latest_x64.appx">Intel/AMD (x86_64)</a></td>
        <td align="center"><a href="https://wsl.almalinux.org/9/AlmaLinuxOS-9_latest_ARM64.appx">ARM64 (AArch64)</a></td>
    </tr>
</table>


## Installation steps

Follow these steps to get AlmaLinux for WSL. 

* To start with, let's check what is the Windows build number. Press **Win + R**. Run `winver` command and press **OK** or **Enter**. You'll get *About Windows* information saying Microsoft Windows version. If *OS Build* is 19041 or higher, continue. If not, please, check [popular issues](#popular-issues) section.
* Find **PowerShell** in the Windows search bar. Choose *Run as administrator option*.
![image](/images/wsl-powershell.png)

* Run `wsl --install` command. This command will automatically install *Virtual Machine Platform*, *Windows Subsystem for Linux* and download *WSL Kernel*. It will also set your default WSL version to WSL2. 
![image](/images/wsl-install.png)

* After WSL installations are completed, you need to reboot the system.
* Now open **Microsoft Store** and search for AlmaLinux 8 WSL or AlmaLinux 9 app. Press *Get*. Installation of the app will begin.
![image](/images/wsl-ms-store.png)

* When the installation is finished, you'll get a notification. You can launch AlmaLinux WSL app now.
* A terminal will be opened with the AlmaLinux installation process. You'll need to create a username and password. 
:::tip
These username and password don't have to match with your Windows user credentials.
:::
* After installation is finished successfully, congratulations, you can now run AlmaLinux terminal on your Windows machine.
![image](/images/wsl-alma.png)

## Popular issues

* If your Windows build version is older than 19041, you'll have to perform a few manual steps to setup WSL. Check the [Microsoft Guide](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux) for the details.

* If you get an error during AlmaLinux WSL installation, please, check in the BIOS menu that the *Virtualization* option is enabled.
