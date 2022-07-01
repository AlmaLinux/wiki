---
AlmaLinux OpensSCAP Guide
---

# AlmaLinux OpenSCAP Guide

:::warning
This guide was developed for AlmaLinux 8 OS. We do not recommend using it on AlmaLinux 9 OS as it may have some other steps or details in running OpenSCAP.
:::

## About OpenSCAP

SCAP - The Security Content Automation Protocol - is an automated method that uses standards to enable vulnerability management, measurement, and policy compliance evaluation of systems. SCAP is a U.S. standard maintained by the National Institute of Standards and Technology.

The AlmaLinux OpenSCAP Guide describes how to use OpenSCAP software to audit your AlmaLinux 8 system for security compliance. 

### About SCAP packages and how to Enable them

AlmaLinux provides the following SCAP packages for AlmaLinux 8:

| SCAP package | Description | 
| -------- | -------- |
| openscap | Provides the OpenSCAP library and tool for evaluating a system generating reports. |
| openscap-utils    | Includes command-line tools that use the OpenSCAP library. | 
| openscap-scanner | Enables many SCAP options, like vulnerability and configuration scanning, along with the SCAP Security Guide. | 
| scap-security-guide | Contains SCAP-format system-hardening guide. The guide has links to government requirements and provides security profiles. |

SCAP packages are available in the AlmaLinux 8 AppStream repository. Use the dnf command to install the SCAP packages. The openscap-scanner package will be installed as a dependency.

`sudo dnf install openscap openscap-utils scap-security-guide`

After installion, all SCAP security policies are located in the */usr/share/xml/scap/ssg/content/* directory. 

## About the `oscap` Command

The `oscap` command is a utility that helps evaluate the system, check compliance, and to perform various functions like showing information and generating reports. 

This utility has many options, but uses the following general structure:

`oscap [options] module operation [operation_options_and_arguments]`

Module types that are supported by the oscap command are mentioned in the list:

| Module type | Descpiption | 
| -------- | -------- | 
| cpe | Uses a Common Platform Enumeration (CPE) file to perform operations. |
| cve | Uses a Common Vulnerabilities and Exposures (CVE) file to perform operations. |
| cvss | Uses a Common Vulnerability Scoring System (CVSS) file to perform operations. |
| ds |  Uses a SCAP Data Stream (DS) to perform operations. |
| info | Determines a file's type and prints information about the file. |
| oval | Uses an Open Vulnerability and Assessment Language (OVAL) file to perform operations. |
| xccdf | Uses a file in eXtensible Configuration Checklist Description Format (XCCDF) to perform operations. |
| eval | For an OVAL file, oscap probes the system, evaluates each definition in the file and then prints the results to standard output. <br> For a specified profile in an XCCDF file, oscap tests the system against each rule in the file and prints the results to standard output. |
| generate | For an OVAL XML results file, generate converts the specified file into an HTML report. <br>For an XCCDF file, generate outputs a full security guide for a specified profile. |
| validate | Validates an OVAL or XCCDF file against an XML schema to check for errors.|

These modules such as as info, oval, xccdf are effective for scanning the system.
Also, keep in mind, that sometimes the `oscap` command performs different operations depending on the module type. Pay attention to the eval and generate module types.

Now, let's take a look at some more detailed examples with the oscap command.

### Displaying information, using `oscap`
The `oscap -V` command displays information such as the specifications which the version of oscap supports; capabilities of the oscap version; where schema, CPE, and probe files are stored; inbuilt CPE names; supported OVAL objects and associated SCAP probes.

As an example of an output you will see this: 

```
OpenSCAP command line tool (oscap) 1.3.6
Copyright 2009--2021 Red Hat Inc., Durham, North Carolina.

==== Supported specifications ====
SCAP Version: 1.3
XCCDF Version: 1.2
OVAL Version: 5.11.1
CPE Version: 2.3
CVSS Version: 2.0
CVE Version: 2.0
Asset Identification Version: 1.1
Asset Reporting Format Version: 1.1
CVRF Version: 1.1

==== Capabilities added by auto-loaded plugins ====
No plugins have been auto-loaded...

==== Paths ====
Schema files: /usr/share/openscap/schemas
Default CPE files: /usr/share/openscap/cpe

==== Inbuilt CPE names ====
Red Hat Enterprise Linux - cpe:/o:redhat:enterprise_linux:-
...
Community Enterprise Operating System 8 - cpe:/o:centos:centos:8
AlmaLinux 8 - cpe:/o:almalinux:almalinux:8
...
Fedora 35 - cpe:/o:fedoraproject:fedora:35

==== Supported OVAL objects and associated OpenSCAP probes ====
OVAL family   OVAL object                  OpenSCAP probe              
----------    ----------                   ----------                  
independent   environmentvariable          probe_environmentvariable
independent   environmentvariable58        probe_environmentvariable58
...
unix          uname                        probe_uname
unix          xinetd                       probe_xinetd
```

### Displaying Available Profiles

A profile consists of common security suggestions that are related to any AlmaLinux installation. Profiles also have supplementary recommendations for the system to use. So, the `oscap info` command is used to see available profiles are currently supported by the SCAP Security Guide which is a checklist file.

`oscap info /usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml`

The part in quotes is the full path to the security content file being examined.

As an example of displaying available profiles output you'll see next: 

```
Document type: XCCDF Checklist
Checklist version: 1.1
Imported: 2022-05-03T13:52:24
Status: draft
Generated: 2022-05-03
Resolved: true
Profiles:
	Title: ANSSI-BP-028 (enhanced)
		Id: anssi_bp28_enhanced
	Title: ANSSI-BP-028 (high)
		Id: anssi_bp28_high
	Title: ANSSI-BP-028 (intermediary)
		Id: anssi_bp28_intermediary
	Title: ANSSI-BP-028 (minimal)
		Id: anssi_bp28_minimal
	Title: CIS AlmaLinux OS 8 Benchmark for Level 2 - Server
		Id: cis
	Title: CIS AlmaLinux OS 8 Benchmark for Level 1 - Server
		Id: cis_server_l1
	Title: CIS AlmaLinux OS 8 Benchmark for Level 1 - Workstation
		Id: cis_workstation_l1
	Title: CIS AlmaLinux OS 8 Benchmark for Level 2 - Workstation
		Id: cis_workstation_l2
	Title: Unclassified Information in Non-federal Information Systems and Organizations (NIST 800-171)
		Id: cui
	Title: Australian Cyber Security Centre (ACSC) Essential Eight
		Id: e8
	Title: Health Insurance Portability and Accountability Act (HIPAA)
		Id: hipaa
	Title: Australian Cyber Security Centre (ACSC) ISM Official
		Id: ism_o
	Title: Protection Profile for General Purpose Operating Systems
		Id: ospp
	Title: PCI-DSS v3.2.1 Control Baseline for Red Hat Enterprise Linux 8
		Id: pci-dss
	Title: DISA STIG for Red Hat Enterprise Linux 8
		Id: stig
	Title: DISA STIG with GUI for Red Hat Enterprise Linux 8
		Id: stig_gui
Referenced check files:
	ssg-almalinux8-oval.xml
		system: http://oval.mitre.org/XMLSchema/oval-definitions-5
	ssg-almalinux8-ocil.xml
		system: http://scap.nist.gov/schema/ocil/2
	https://security.almalinux.org/oval/org.almalinux.alsa-8.xml
		system: http://oval.mitre.org/XMLSchema/oval-definitions-5
```

We'd like to mention, that the profiles in the example list may not be the same with your system. 

The `--profile` option is useful to get information about a specific profile.

`oscap info --profile hipaa /usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml`

There's an output example:

```
Document type: XCCDF Checklist
Profile
	Title: Health Insurance Portability and Accountability Act (HIPAA)
	Id: hipaa

Description: The HIPAA Security Rule establishes U.S. national standards to protect individuals’ electronic personal health information that is created, received, used, or maintained by a covered entity. The Security Rule requires appropriate administrative, physical and technical safeguards to ensure the confidentiality, integrity, and security of electronic protected health information.  This profile configures AlmaLinux 8 to the HIPAA Security Rule identified for securing of electronic protected health information. Use of this profile in no way guarantees or makes claims against legal compliance against the HIPAA Security Rule(s).
```

### Scanning the system

The most effective use of the oscap utility is the feature to perform configuration and vulnerability scans of a local system. The `oscap xccdf eval` command is useful to scan a system against an XCCDF profile.

The output of this command shows a scan operation. It uses the *ssg-almalinux8-cpe-dictionary.xml* CPE dictionary to run against the HIPAA profile of the *ssg-almalinux8-xccdf.xml* checklist. The results are shown in a terminal window, as well as saved in XML and HTML formats in the two directories. One directory is /tmp, and the other is the **~home/user** catalog that you choose by yourself where you'd like to save the results. Any rule in a profile that results in a fail potentially requires the system to be reconfigured.

```
oscap xccdf eval --profile hipaa \
--results /tmp/`hostname`-ssg-results.xml \
--report ~/report/`hostname`-ssg-results.html \ 
--cpe /usr/share/xml/scap/ssg/content/ssg-almalinux8-cpe-dictionary.xml \
/usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml
```
Here is an example output of this command: 

```
Title   Verify File Hashes with RPM
Rule    rpm_verify_hashes
Result  pass

Title   Verify and Correct File Permissions with RPM
Rule    rpm_verify_permissions
Result  fail

Title   Configure SSH to use System Crypto Policy
Rule    configure_ssh_crypto_policy
Result  pass
...
Title   Remove Rsh Trust Files
Rule    no_rsh_trust_files
Result  pass

Title   Disable KDump Kernel Crash Analyzer (kdump)
Rule    service_kdump_disabled
Result  fail
```

The HTML report which you can view in a browser looks like as follows: 

![image](/images/openscap_evaluation-report.png)

### Generating a Full Security Guide

To create a full security guide for a system based on an XCCDF profile, use the `oscap xccdf generate guide` command. Pay attention, that like in the previous command you choose your home path **~home/user** to save the HTML security guide. 

```
oscap xccdf generate guide --profile hipaa \
--cpe /usr/share/xml/scap/ssg/content/ssg-almalinux8-cpe-dictionary.xml \
/usr/share/xml/scap/ssg/content/ssg-almalinux8-xccdf.xml > ~/report/security_guide.html
```
You can view the HTML report in a browser. Here is an example: 

![image](/images/openscap_security-guide-1.png)
![image](/images/openscap_security-guide-2.png)

### OVAL Scan

#### About OVAL

The OVAL definition file is used to scan the system in order to verify if applicable errata have been installed.
To see the information about supported AlmaLinux OS versions and their public OVAL streams, please, visit the [AlmaLinux OVAL streams](https://wiki.almalinux.org/documentation/oval-streams.html) wiki page.

There are two types of OVAL files: *org.almalinux.alsa-8.xml* and *org.almalinux.alsa-8.xml.bz2*, which contains the same information but archived.

#### Performing a scan

The first thing to run the OVAL scan is to download a file from an AlmaLinux OVAL stream using the browser or the `wget` command.

:::tip
Don't forget to extract the OVAL file if you downloaded the compressed file:
```
bzip2 -d org.almalinux.alsa-8.xml.bz2
```
:::

* The the following command to perform an audit scan of the AlmaLinux:
```
oscap oval eval --results /tmp/alsa-results-oval.xml \
--report ~/report/alsa-report-oval.html org.almalinux.alsa-8.xml
```
Here is an example output you can see:
```
Definition oval:org.almalinux.alsa:def:20224887: false
Definition oval:org.almalinux.alsa:def:20224872: true
Definition oval:org.almalinux.alsa:def:20224855: false
...
Definition oval:org.almalinux.alsa:def:20224769: false
...
Evaluation done.
```
If the patch has been applied to the system - the output shows the *true* flag. If not - you see the *false* flag.

* Run the following command to generate the HTML report to view in a browser:
```
oscap oval generate report /tmp/alsa-results-oval.xml \ 
~/report/alsa-report-oval.html
```
Here is the exapmle of the HTML report:
![image](/images/openscap-oval-report.png)

## SCAP Workbench 

One more way to scan a local or a remote system is SCAP Workbench. The SCAP Workbench utility also allows generating reports based on scan evaluations.

To install SCAP Workbench run the following command as root:

` sudo dnf install scap-workbench`

If the `scap-security-guide` package wasn't installed from the package repository before, you need to install it too, to use SCAP Workbench effectively. All the other packages and dependencies are installed and updated automatically. 

After SCAP Workbench is installed, it should appear in your desktop environments application menu and you can run it. 

![image](/images/openscap_workbench.png)

After you start Workbench, a dialog window will offer you to choose which SCAP Security Guide to open. 

When one of the guides is chosen, the next SCAP Workbench window appears. There is a menu, which offers you some more options to select before scanning the system. 

![image](/images/openscap_workbench-menu.png)

***File***
This option offers to load or save SCAP-related content. The *Save Customization Only* item is useful if you selected 'Customization Only' and you want to save it as an XCCDF XML file. The *Save All* item is useful to save SCAP files to the selected directory or as an RPM package.

***Customization***
This option informs you about the customization used for the given security policy. The default is no customization.

***Profile***
This option allows choosing the security profile by clicking this menu. You can create a new profile by clicking the Customize button.

Here is the list of available profiles that can be used to evaluate the system: 

* ANSSI-BP-028 (enhanced)
* ANSSI-BP-028 (high)
* ANSSI-BP-028 (intermediary)
* ANSSI-BP-028 (minimal)
* CIS AlmaLinux 8 Benchmark for Level 2 - Server
* CIS AlmaLinux 8 Benchmark for Level 1 - Server
* CIS AlmaLinux 8 Benchmark for Level 1 - Workstation
* CIS AlmaLinux 8 Benchmark for Level 2 - Workstation
* Unclassified Information in Non-federal Information Systems and Organizations (NIST 800-171)
* Australian Cyber Security Centre (ACSC) Essential Eight
* Health Insurance Portability and Accountability Act (HIPAA)
* Australian Cyber Security Centre (ACSC) ISM Official
* Protection Profile for General Purpose Operating Systems
* PCI-DSS v3.2.1 Control Baseline for Red Hat Enterprise Linux 8
* DISA STIG for Red Hat Enterpise Linux 8
* DISA STIG with GUI for Red Hat Enterpise Linux 8

***Target***
Here you can select the system you want to be evaluated - a local or a remote one.

***Selected Rules***
This field shows you a list of security rules that security policy applies to.

***Fetch remote resources***
You need to check this box in case you want the scanner to download a remote OVAL content defined in an XML file.

***Remediate***
If you check this box, SCAP Workbench will attempt to correct system settings that would fail to match the state defined by the policy.

After the profile is chosen, press the SCAN button. You will see how the process is going on the status bar. 

![image](/images/openscap-workbench-scanning.png)


After the scanning is finished, you'll have a diagnostics window.

![image](/images/openscap-workbench-message.png)


You can *Save Results* as  XCCDF Result file, ARF, or HTML Report, in case you need them. If you press the *Show Report* button, it'll be displayed in a browser: 

![image](/images/openscap-workbench-report.png)

### Applying Security Policy during Installation 

Note that you can also choose one of the earlier mentioned profiles while running AlmaLinux Installation. To do this, go to the Security Policy option to choose the profile you need. 

![image](/images/openscap_security-policy.png)

No profile is chosen by default, as applying a security policy is not necessary. The applied security policy will be installed to the system using the compliance policies defined by SCAP. 
