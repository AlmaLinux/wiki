---
title: "User Guide: AlmaLinux *Software Bill of Materials (SBOM)*"
---

###### Last updated: 2023-02-03

&nbsp;

# AlmaLinux SBOM User Guide 

&nbsp;

## Introduction

### About *SBOM*

*SBOM (Software Bill of Materials)* is a list of all open-source and third-party components used in a codebase, along with their licensing information, version numbers, and any known vulnerabilities. 

[AlmaLinux Build System](https://github.com/AlmaLinux/build-system) has implemented *SBOM* into its pipeline for security purposes, such as tracing the build process, ensuring that only trusted sources are used, and reducing the risk of data corruption.

### About *CAS*

[*The Codenotary Community Attestation Service (CAS)*](https://cas.codenotary.com) is integrated with AlmaLinux to provide a chain of trust and traceability. Each stage of the build process goes through authentication and notarization, and build artifacts are only stored if they pass authentication via *CAS*. 

A user can use *CAS* to authenticate a downloaded package or its cryptographic hash (SHA256 digest) to verify if it is notarized and trusted.

### Working with *SBOM* 

To access the *CAS* information for AlmaLinux you need an internet connection as the *CAS* records are stored in the AlmaLinux `git` repository. You also need to install the *CAS* tool package. 

Finally, to be able to inspect a desired package for *SBOM* information, you need the package itself (`.rpm` binary). Alternatively, you can use the package `build-id` or `rpm-package-hash` found on the [AlmaLinux build](https://build.almalinux.org/) page.

### Supported releases

 * AlmaLinux 8.7
 * AlmaLinux 9.1
 
---

&nbsp;

## Install guide

### Software Prerequisites

To just query the *SBOM* records (versus creating them) one needs only to install the above mentioned `cas` tool. *The CAS* organization provides it in form of source and binary package(s) via their [github](https://github.com/codenotary/cas) and official web service

In the [README.md](https://github.com/codenotary/cas/blob/master/README.md) you can find a cross-platform installation method, presented below.

&nbsp;

### Installation 

#### Official *CAS* installation method (*Linux®*, *macOS*)

```
bash <(curl https://getcas.codenotary.io -L)
```

For *Windows* check a dedicated section, below.

#### Example on *macOS*

:::tip
The output as shown for *macOS* is identical on [*Linux*](#official-cas-installation-method-linux®-macos). An alternative install method for *Linux* is described below.

**Warning:** the directory you wish to install to needs to exist before running install command. This is relevant if you're not installing to a system directory like `/usr/local/bin` but to a custom path, like in the example.
:::

##### Install:
```
➜  /tmp mkdir ./cas-test
➜  /tmp bash <(curl https://getcas.codenotary.io -L)
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2449  100  2449    0     0  17566      0 --:--:-- --:--:-- --:--:-- 18838
Latest available release for cas is: v1.0.3
Downloading cas...
Install location [default: /usr/local/bin]: /tmp/cas-test
cas version v1.0.3 has been installed to:
 • /tmp/cas-test/cas

🎉Done 

You can now use the community attestation service (https://cas.codenotary.com) by running: $ cas

To get started set your API key you received by email and login: $ export CAS_API_KEY=<your API_KEY>; cas login

You can find the online documentation here: https://github.com/codenotary/cas

➜  /tmp
```
##### Test run:
```
➜  /tmp ./cas-test/cas
Usage:
  cas [command]

Available Commands:
  authenticate Authenticate assets against CAS
  bom          Collect BOM information
  completion   Generate the autocompletion script for the specified shell
  help         Help about any command
  inspect      Returns the asset history with low-level information
  list         Returns the history of operations made with API key
  login        Log in to Community Attestation Service
  logout       Logout the current user
  notarize     Notarize an asset onto Community Attestation Service
  unsupport    Unsupport an asset
  untrust      Untrust an asset

Flags:
      --caspath string   config files (default is user home directory)
  -h, --help             help for cas
  -o, --output string    output format, one of: --output=json|--output=''
  -S, --silent           silent mode, don't show progress spinner, but it will still output the result
      --verbose          if true, print additional information
  -v, --version          version for cas

Use "cas [command] --help" for more information about a command.

```

#### Example on *Windows*

##### Install:

For *Windows* users, download your `cas` tool binary [here](https://github.com/codenotary/cas/releases/latest).

##### Test run:

 Run the `.exe` file from the command line:
```
C:\Users\auser>cas-v1.0.3-windows-amd64.exe help
Usage:
  cas [command]

Available Commands:
  authenticate Authenticate assets against CAS
  bom          Collect BOM information
  completion   Generate the autocompletion script for the specified shell
  help         Help about any command
  inspect      Returns the asset history with low-level information
  list         Returns the history of operations made with API key
  login        Log in to Community Attestation Service
  logout       Logout the current user
  notarize     Notarize an asset onto Community Attestation Service
  unsupport    Unsupport an asset
  untrust      Untrust an asset

Flags:
      --caspath string   config files (default is user home directory)
  -h, --help             help for cas
  -o, --output string    output format, one of: --output=json|--output=''
  -S, --silent           silent mode, don't show progress spinner, but it will still output the result
      --verbose          if true, print additional information
  -v, --version          version for cas

Use "cas [command] --help" for more information about a command.
```

#### Alternative installation method for AlmaLinux systems

An alternative to *Official CAS installation method* is to install the *CAS* tool package from the AlmaLinux repository. This will (obviously) work exclusively on the AlmaLinux system.

:::tip
The *CAS* package is available in AlmaLinux Architect's COPR (Community Owned Package Repository).  Here, we install it on system based on [AlmaLinux 9.1](https://wiki.almalinux.org/release-notes/9.1.html) release.
:::
     
##### 1. Enable the COPR repo for codenotary package
```
$ sudo dnf copr --hub build.almalinux.org enable andrewlukoshko/codenotary
```
  
##### Expected output:
```
[almalinux_user@demohost ~]$ sudo dnf copr --hub build.almalinux.org enable andrewlukoshko/codenotary
Enabling a Copr repository. Please note that this repository is not part
of the main distribution, and quality may vary.

The Fedora Project does not exercise any power over the contents of
this repository beyond the rules outlined in the Copr FAQ at
<https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr>,
and packages are not held to any quality or security level.

Please do not file bug reports about these packages in Fedora
Bugzilla. In case of problems, contact the owner of this repository.

Do you really want to enable build.almalinux.org/andrewlukoshko/codenotary? [y/N]: y
Repository successfully enabled.
[almalinux_user@demohost ~]$ 
```

##### 2. Perform the actual installation step:
 
```
$ sudo dnf install cas
```

##### Expected output:
```
[almalinux_user@demohost ~]$ sudo dnf install cas
Copr repo for codenotary x86_64 owned by andrewlukoshko                                       891  B/s | 1.2 kB     00:01    

Dependencies resolved.
==============================================================================================================================
 Package        Architecture      Version                 Repository                                                     Size
==============================================================================================================================
Installing:
 cas            x86_64            1.0.3-1.el9             copr:build.almalinux.org:andrewlukoshko:codenotary            5.4 M

Transaction Summary
==============================================================================================================================
Install  1 Package

Total download size: 5.4 M
Installed size: 19 M
Is this ok [y/N]: y
Downloading Packages:
cas-1.0.3-1.el9.x86_64.rpm                                                                    493 kB/s | 5.4 MB     00:11    
------------------------------------------------------------------------------------------------------------------------------
Total                                                                                         493 kB/s | 5.4 MB     00:11     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                      1/1 
  Installing       : cas-1.0.3-1.el9.x86_64                                                                               1/1 
  Running scriptlet: cas-1.0.3-1.el9.x86_64                                                                               1/1 
  Verifying        : cas-1.0.3-1.el9.x86_64                                                                               1/1 

Installed:
  cas-1.0.3-1.el9.x86_64                                                                                                      

Complete!
[almalinux_user@demohost ~]$
```


**PREP DONE:** At this point your system is ready to work with AlmaLinux *SBOM* infrastructure!

---

&nbsp;

## Using Guide

**Authenticate *SBOM* on packages - definition:**

> **Authentication** - matches the hash of a local asset to a hash on *CAS*. In case of AlmaLinux the local asset is an *RPM* binary package.
 
There are a few ways to authenticate the package:
*  Authenticate by package binary file
*  Authenticate with manually calculated `rpm-package-hash` 
*  Authenticate with `rpm-package-hash` from AlmaLinux Build System


 :::tip
 Note: The `cas` program is a command line tool with a unified interface across all three platforms (*Linux®, macOS, Windows*); Therefore, the commands shown in the section below can be used on all supported platforms.
 :::

&nbsp;

### Authenticate by package binary file

#### Get the package

To examine a package from the repo you should first get the URL.

:::tip
The package we selected for this demo was: `kernel-5.14.0-162.12.1.el9_1.x86_64.rpm`

URL:
```
http://repo.almalinux.org/almalinux/9.1/BaseOS/x86_64/os/Packages/kernel-5.14.0-162.12.1.el9_1.x86_64.rpm
```
:::

##### Use `curl` to get the package: 
```
curl http://repo.almalinux.org/almalinux/9.1/BaseOS/x86_64/os/Packages/kernel-5.14.0-162.12.1.el9_1.x86_64.rpm -o kernel-5.14.0-162.12.1.el9_1.x86_64.rpm
```

 
#### Authentication using the *CAS* tool
Use the downloaded package file (path) as a parameter for the `cas` command:
```
cas authenticate --signerID=cloud-infra@almalinux.org kernel-5.14.0-162.12.1.el9_1.x86_64.rpm
```
##### Live example

![image](/images/sbom-guide-live-example-auth-by-binary-file.gif)


 **CONGRATULATIONS!** You have just **authenticated** a package with the `cas` CLI tool!
 
&nbsp;
 
### Authenticate with manually calculated `rpm-package-hash` 

You can also calculate package hash manually from CLI. 

Assuming here, you have the package already. If not please refer to "Get the package" above.

To get the `rpm-package-hash` you just need to calculate `sha256sum`:

```
PKG_FILE=kernel-5.14.0-162.12.1.el9_1.x86_64.rpm
SUM=$(sha256sum $PKG_FILE)
HASH=${SUM%%\ *rpm}
```

#### Authentication using the *CAS* tool
Use the calculated hash as value for parameter `--hash` in the `cas` tool invocation:
```
cas authenticate --signerID=cloud-infra@almalinux.org --hash $HASH
```

##### Live example

The whole process as described above should look like:

![image](/images/sbom-guide-live-example-auth-rpm-hash.gif)

  **CONGRATULATIONS!** You have just **authenticated** a package with the `cas` CLI tool!

&nbsp;

### Get `rpm-package-hash` (or package) from AlmaLinux Build System

Alternatively, you can get `rpm-package-has` (and package binary, of course) from the build site.
 
#### 1. Navigate your browser https://build.almalinux.org/
#### 2. Search for a desired package (build) by name, in the example we look for `kernel`:
   
:::tip
To open the search tab click on the magnifying glass icon in the right top corner.
:::
    
:::tip
Naturally, you can narrow the search by supplying more parameters to the filter.
:::
  
![image](/images/sbom-guide-bs-search.png)
    
:::tip
More info about working with the build-system page:
    [AlmaLinux Build System User Guide | the build feedscreen](https://https://github.com/AlmaLinux/build-system/wiki/AlmaLinux-Build-System-User-Guide#the-build-feed-screen)
:::
    
#### 3. Click the `ⓘ Details` on the selected entry (here: top one) you will get the build summary: 

![image](/images/sbom-guide-bs-details.png)


#### 4. Select the architecture of the package build by clicking the corresponding tab

#### Here **`x86_64`** was selected:
![image](/images/sbom-guide-bs-select-arch.png)


#### 5. Hover your mouse over the blue key icon to reveal the `rpm-package-hash`:  
   ###### Click to copy it to the clipboard:
![image](/images/sbom-guide-bs-rpm-hash.png)

  :::tip
  You can download the package binary by clicking on the link with its name. 
  :::

&nbsp;

### Authentication using a hash obtained from Build Service

:::tip
The command is the same as above, here just shows output in form of a static picture.
:::

Call the `cas` tool providing the copied `rpm-package-hash` as `--hash` parameter value:
```
cas authenticate --signerID=cloud-infra@almalinux.org --hash ed061fab17b8f269d5fd421a14d0ec81ce5dc357a3ebffe33b5bd2a75e9dd704
```
##### Example output:
```
[almalinux_user@demohost ~]$ cas authenticate --signerID=cloud-infra@almalinux.org --hash ed061fab17b8f269d5fd421a14d0ec81ce5dc357a3ebffe33b5bd2a75e9dd704
CAS saved locally the trusted public key
CAS automatically trusted the signature found on current connection
UID:		1674560717775452939
Kind:		file
Name:		kernel-5.14.0-162.12.1.el9_1.src.rpm
Hash:		ed061fab17b8f269d5fd421a14d0ec81ce5dc357a3ebffe33b5bd2a75e9dd704
Size:		137 MB
Timestamp:	2023-01-24 11:45:17.775452939 +0000 UTC
ContentType:	application/x-rpm
Metadata:	build_arch="i686"
		epoch="None"
		release="162.12.1.el9_1"
		sourcerpm="None"
		arch="noarch"
		build_host="x64-builder02.almalinux.org"
		git_ref="changed/a9/kernel-5.14.0-162.12.1.el9_1.alma"
		alma_commit_sbom_hash="ef90a8252e33e09860be86482f5c8c9d932392e360a828ee8e0a58cdbc451804"
		git_url="https://git.almalinux.org/rpms/kernel.git"
		version="5.14.0"
		source_type="git"
		build_id="5657"
		built_by="eabdullin1 \u003c55892454+eabdullin1@users.noreply.github.com\u003e"
		git_commit="dec6aca7a2b4f5a5b59e6b10efde21e47fda9827"
		name="kernel"
		sbom_api="0.2"
SignerID:	Y2xvdWQtaW5mcmFAYWxtYWxpbnV4Lm9yZw==
Apikey revoked:	no
Status:		TRUSTED
```
___

&nbsp;

## Trademark noticies


Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries. 

macOS are trademarks of Apple Inc., registered in the U.S. and other countries.

Windows is a registered trademark of Microsoft Corporation in the United States and other countries.
