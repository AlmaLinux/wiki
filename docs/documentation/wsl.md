---
title: "AlmaLinux WSL"
---

# Windows Subsystem for Linux 

## About WSL

Windows Subsystem for Linux (WSL) is designed as integration between Windows and Linux. You can now run the AlmaLinux terminal environment on a Windows machine. It doesn't require a dual-boot or a VM. 

## Installation steps

It's pretty simple to have AlmaLinux 8 WSL. Follow these steps. 

* To start with, let's check what is the Windows build number. Press **Win + R**. Run `winver` command and press **OK** or **Enter**. You'll get *About Windows* information saying Microsoft Windows version. If *OS Build* is 19041 or higher, continue. If not, please, check [popular issues](#popular-issues) section.
* Find **PowerShell** in the Windows search bar. Choose *Run as administrator option*.
![image](/images/wsl-powershell.png)

* Run `wsl --install` command. This command will automatically install *Virtual Machine Platform*, *Windows Subsystem for Linux* and download *WSL Kernel*. It will also set your default WSL version to WSL2. 
![image](/images/wsl-install.png)

* After WSL installations are completed, you need to reboot the system.
* Now open **Microsoft Store** and search for AlmaLinux 8 WSL app. Press *Get*. Installation of the app will begin.
![image](/images/wsl-ms-store.png)

* When the installation is finished, you'll get a notification. You can launch AlmaLinux 8 WSL app now.
* A terminal will be opened with the AlmaLinux installation process. You'll need to create a username and password. 
:::tip
These username and password don't have to match with your Windows user credentials.
:::
* After installation is finished successfully, congratulations, you can now run AlmaLinux 8 terminal on your Windows machine.
![image](/images/wsl-alma.png)

## Popular issues

* If your Windows build version is older than 19041, you'll have to perform a few manual steps to setup WSL. Check the [Microsoft Guide](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux) for the details.

* If you get an error during AlmaLinux WSL installation, please, check in the BIOS menu that the *Virtualization* option is enabled.
