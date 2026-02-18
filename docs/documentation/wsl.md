---
title: "AlmaLinux WSL"
---

# Windows Subsystem for Linux

## About Windows Subsystem for Linux

Windows Subsystem for Linux (WSL) lets you run AlmaLinux inside Windows - including both command-line and GUI apps. WSL is great for users who want to use Linux tools alongside their usual Windows programs.

### Supported Versions

The following AlmaLinux OS versions are available for installation via both methods - Microsoft Store and the WSL CLI tool:

- AlmaLinux OS 8
- AlmaLinux OS 9
- AlmaLinux OS 10

:::tip
If you are looking for AlmaLinux OS Kitten image, please, visit the [AlmaLinux OS Kitten page](/development/almalinux-os-kitten-10).
:::

## Prerequisites

To start with, let's check what is the Windows build number:

- Press **Win + R**.
- Run the `winver` command and press **OK** or **Enter**:
  ```
  winver
  ```
- You'll get _About Windows_ information saying Microsoft Windows or Windows Server version. If _OS Build_ is `19041` or higher on Windows 10 or `1709` or higher on Windows Server 2019, continue. If not, please, check the [troubleshooting](#troubleshooting) section.

### Install/Update WSL

- Right-click on the Start menu and open PowerShell or Windows Command Prompt in administrator mode by selecting **"Run as administrator"**.
- Install WSL without any specific Linux distribution. This command prepares your system to run Linux on Windows but doesn't yet set up the actual Linux environment.

  ```
  wsl --install --no-distribution
  ```

- Restart your machine to finish the installation.
- After reboot, check WSL status:

  ```
  wsl --status
  ```

- Make sure you have the latest version installed by comparing the version on output with [stable releases](https://github.com/microsoft/WSL/releases):

  ```
  wsl --version
  ```

- If your WSL version is not latest, update it:

  ```
  wsl --update
  ```

  If the WSL version is still not updated, see the check [troubleshooting](#troubleshooting) section for the alternative methods for updating.

## Install AlmaLinux OS

Now when you have the latest version of WSL installed, you can install AlmaLinux OS as a WSL distribution.

There are two methods and formats of installation and packaging available:

- WSL: It is a native packaging format.
  - It can be downloaded and installed either via the `wsl` tool or the `.wsl` file.
  - Downloaded from [github.com/AlmaLinux/wsl-images/releases](https://github.com/AlmaLinux/wsl-images/releases) and installed via the `wsl` tool or with just double-clicking.
- [Microsoft App Store](https://apps.microsoft.com/).

### Install AlmaLinux OS via the WSL method

The WSL format is a modern and recommended way of installation. The WSL version should be `2.4.4` and higher.

- List available Linux distributions:

  ```
  wsl --list --online
  ```

  or short form:

  ```
  wsl -l -o
  ```

- You will see AlmaLinux OS versions available as `AlmaLinux-8`, `AlmaLinux-9`, `AlmaLinux-Kitten-10` and `AlmaLinux-10`.
- Install the needed version. Example command for AlmaLinux OS 10 installation:

  ```
  wsl --install AlmaLinux-10
  ```

- After the installation is completed, the AlmaLinux OS will be available as an application in a new tab with its icon an color-scheme.

  <img src=/images/wsl.jpeg width="75%" height="75%">

- Verify you have it installed. Show all installed distros:

  ```
  wsl --list --verbose
  ```

  or short form:

  ```
  wsl -l -v
  ```

- Start your AlmaLinux:
  - Open it from the Windows Terminal. Click the small arrow ▾ next to the tab or the “+” icon. You’ll see a dropdown with available WSL distros listed. Click AlmaLinux OS. It will open in a new tab, ready to use.
  - Or run the command:
    ```
    wsl -d AlmaLinux-10
    ```

### Install AlmaLinux OS via the Microsoft App Store

- Install the needed AlmaLinux OS app from the Microsoft Store:
  - [AlmaLinux OS 8](https://apps.microsoft.com/detail/9nmd96xjj19f)
  - [AlmaLinux OS 9](https://apps.microsoft.com/detail/9p5rwlm70sn9)
  - [AlmaLinux OS 10](https://apps.microsoft.com/detail/9n2vhjms6j50)

- After the installation is completed, the AlmaLinux OS will be available as an application in a new tab with its icon and color scheme.

  <img src=/images/wsl.jpeg width="75%" height="75%">

- Verify you have it installed. Show all installed distros:

  ```
  wsl --list --verbose
  ```

  or short form:

  ```
  wsl -l -v
  ```

- Start your AlmaLinux:
  - Open it from the Windows Terminal. Click the small arrow ▾ next to the tab or the “+” icon. You’ll see a dropdown with available WSL distros listed. Click AlmaLinux OS. It will open in a new tab, ready to use.
  - Or run the command:
    ```
    wsl -d AlmaLinux-10
    ```

## Extras

### Official Microsoft documentation

- The official documentation of WSL covers more use cases such as setup database, GPU acceleration and Mount an external drive or USB See: [learn.microsoft.com/en-us/windows/wsl/setup/environment](https://learn.microsoft.com/en-us/windows/wsl/setup/environment).
- The official docmentation for running GUI apps on AlmaLinux OS: [learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps](https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps).
- The official documentation for Remote Development support of VS Code on AlmaLinux OS WSL distribution Remote: [learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode).

### Docker Desktop integration

To enable AlmaLinux OS integration with the Docker Desktop:
Settings → Resources → WSL Integration.

## Troubleshooting

### Manual installation for earlier versions of Windows and Windows Server

- [Windows](https://learn.microsoft.com/en-us/windows/wsl/install-manual)
- [Windows Server](https://learn.microsoft.com/en-us/windows/wsl/install-on-server#install-wsl-on-previous-versions-of-windows-server)

### Alternative methods of updating of WSL

#### Method 1: Download the latest update from the GitHub rather than the Microsoft Store

```
wsl --update --web-download
```

#### Method 2: Manually download and install WSL from the GitHub

Download and install the MSIXBundle (e.g. `Microsoft.WSL_2.4.13.0_x64_ARM64.msixbundle`) from a [stable release](https://github.com/microsoft/WSL/releases).

## Get Help

If you have a question or need assistance, reach us on ~SIG/WSL on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/sigwsl).
