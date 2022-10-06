---
title: AlmaLinux 9 OpenSCAP Guide
---

# AlmaLinux 9 OpenSCAP Guide

This guide was developed AlmaLinux 9 OS. 
You can find some general information about OpenSCAP and how to enable OpenSCAP packages in the [About OpenSCAP](https://wiki.almalinux.org/documentation/openscap-guide.html#about-openscap) section.

## Validate Data Stream File

A single source data stream file includes XCCDF content. Run the following command to validate a source data stream file against its schema:

```
oscap ds sds-validate /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml \ && echo "ok" || echo "exit code = $? not ok"
```

The command output returns *ok* if the data-stream file is valid.

The part in quotes is the full path to the security content file being examined.

## Displaying information, using `oscap`

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
Red Hat Enterprise Linux 5 - cpe:/o:redhat:enterprise_linux:5
...
Community Enterprise Operating System 8 - cpe:/o:centos:centos:8
AlmaLinux 8 - cpe:/o:almalinux:almalinux:8
AlmaLinux 9 - cpe:/o:almalinux:almalinux:9
Fedora 32 - cpe:/o:fedoraproject:fedora:32
...

==== Supported OVAL objects and associated OpenSCAP probes ====
OVAL family   OVAL object                  OpenSCAP probe              
----------    ----------                   ----------                  
independent   environmentvariable          probe_environmentvariable
independent   environmentvariable58        probe_environmentvariable58
...
unix          xinetd                       probe_xinetd
```

## Displaying Available Profiles

A profile consists of common security suggestions that are related to any AlmaLinux installation. Profiles also have supplementary recommendations for the system to use. So, the oscap info command is used to see if available profiles are currently supported by the SCAP Security Guide which is a checklist file.

```
oscap info /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml
```

The part in quotes is the full path to the security content file being examined.

As an example of displaying available profiles output you'll see next:

```    
Document type: Source Data Stream
Imported: 2022-05-25T01:55:58

Stream: scap_org.open-scap_datastream_from_xccdf_ssg-almalinux9-xccdf-1.2.xml
Generated: (null)
Version: 1.3
Checklists:
	Ref-Id: scap_org.open-scap_cref_ssg-almalinux9-xccdf-1.2.xml
WARNING: Datastream component 'scap_org.open-scap_cref_oval-org.almalinux.alsa-9.xml.bz2' points out to the remote 'https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2'. Use the '--fetch-remote-resources' option to download it.
WARNING: Skipping 'https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2' file which is referenced from datastream
		Status: draft
		Generated: 2022-05-24
		Resolved: true
		Profiles:
			Title: ANSSI-BP-028 (enhanced)
				Id: xccdf_org.ssgproject.content_profile_anssi_bp28_enhanced
			Title: ANSSI-BP-028 (high)
				Id: xccdf_org.ssgproject.content_profile_anssi_bp28_high
			Title: ANSSI-BP-028 (intermediary)
				Id: xccdf_org.ssgproject.content_profile_anssi_bp28_intermediary
			Title: ANSSI-BP-028 (minimal)
				Id: xccdf_org.ssgproject.content_profile_anssi_bp28_minimal
			Title: [DRAFT] CIS AlmaLinux 9 Benchmark for Level 2 - Server
				Id: xccdf_org.ssgproject.content_profile_cis
			Title: [DRAFT] CIS AlmaLinux 9 Benchmark for Level 1 - Server
				Id: xccdf_org.ssgproject.content_profile_cis_server_l1
			Title: [DRAFT] CIS AlmaLinux 9 Benchmark for Level 1 - Workstation
				Id: xccdf_org.ssgproject.content_profile_cis_workstation_l1
			Title: [DRAFT] CIS AlmaLinux 9 Benchmark for Level 2 - Workstation
				Id: xccdf_org.ssgproject.content_profile_cis_workstation_l2
			Title: [DRAFT] Unclassified Information in Non-federal Information Systems and Organizations (NIST 800-171)
				Id: xccdf_org.ssgproject.content_profile_cui
			Title: Australian Cyber Security Centre (ACSC) Essential Eight
				Id: xccdf_org.ssgproject.content_profile_e8
			Title: Health Insurance Portability and Accountability Act (HIPAA)
				Id: xccdf_org.ssgproject.content_profile_hipaa
			Title: Australian Cyber Security Centre (ACSC) ISM Official
				Id: xccdf_org.ssgproject.content_profile_ism_o
			Title: [DRAFT] Protection Profile for General Purpose Operating Systems
				Id: xccdf_org.ssgproject.content_profile_ospp
			Title: PCI-DSS v3.2.1 Control Baseline for Red Hat Enterprise Linux 9
				Id: xccdf_org.ssgproject.content_profile_pci-dss
			Title: [DRAFT] DISA STIG for Red Hat Enterprise Linux 9
				Id: xccdf_org.ssgproject.content_profile_stig
			Title: [DRAFT] DISA STIG with GUI for Red Hat Enterprise Linux 9
				Id: xccdf_org.ssgproject.content_profile_stig_gui
		Referenced check files:
			ssg-almalinux9-oval.xml
				system: http://oval.mitre.org/XMLSchema/oval-definitions-5
			ssg-almalinux9-ocil.xml
				system: http://scap.nist.gov/schema/ocil/2
			oval-org.almalinux.alsa-9.xml.bz2
				system: http://oval.mitre.org/XMLSchema/oval-definitions-5
Checks:
	Ref-Id: scap_org.open-scap_cref_ssg-almalinux9-oval.xml
	Ref-Id: scap_org.open-scap_cref_ssg-almalinux9-ocil.xml
	Ref-Id: scap_org.open-scap_cref_--builddir--build--BUILD--scap-security-guide-0.1.60--build--ssg-almalinux9-cpe-oval.xml
	Ref-Id: scap_org.open-scap_cref_oval-org.almalinux.alsa-9.xml.bz2
Dictionaries:
	Ref-Id: scap_org.open-scap_cref_--builddir--build--BUILD--scap-security-guide-0.1.60--build--ssg-almalinux9-cpe-dictionary.xml
```

## View information about a profile

The `--profile` option is useful to get information about a specific profile.

For example:
```
oscap info --profile xccdf_org.ssgproject.content_profile_hipaa /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml
```

There's an output example:
```
Document type: Source Data Stream
Imported: 2022-05-25T01:55:58

Stream: scap_org.open-scap_datastream_from_xccdf_ssg-almalinux9-xccdf-1.2.xml
Generated: (null)
Version: 1.3
WARNING: Datastream component 'scap_org.open-scap_cref_oval-org.almalinux.alsa-9.xml.bz2' points out to the remote 'https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2'. Use '--fetch-remote-resources' option to download it.
WARNING: Skipping 'https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2' file which is referenced from datastream
Profile
	Title: Health Insurance Portability and Accountability Act (HIPAA)
	Id: xccdf_org.ssgproject.content_profile_hipaa

	Description: The HIPAA Security Rule establishes U.S. national standards to protect individuals’ electronic personal health information that is created, received, used, or maintained by a covered entity. The Security Rule requires appropriate administrative, physical and technical safeguards to ensure the confidentiality, integrity, and security of electronic protected health information.  This profile configures AlmaLinux 9 to the HIPAA Security Rule identified for securing of electronic protected health information. Use of this profile in no way guarantees or makes claims against legal compliance against the HIPAA Security Rule(s).
```
:::warning
You can see a warning about remote data stream components when viewing information about XCCDF profiles. The data stream file contains information on where to download these components - OVAL definitions. You can ignore this warning now, but you must use the `--fetch-remote-resources` option when performing an evaluation. This option allows OSCAP to download these resources.
:::

## Scanning the system

The most effective use of the oscap utility is the feature to perform configuration and vulnerability scans of a local system. The `oscap xccdf eval` command is useful to scan a system against an XCCDF profile.

The output of this command shows a scan operation. The results are shown in a terminal window, as well as saved in XML and HTML formats in the two directories. One directory is /tmp, and the other is the **~home/user** catalog that you choose by yourself where you'd like to save the results. Any rule in a profile that results in a fail potentially requires the system to be reconfigured.

Here's an example of running the `oscap xccdf eval` command against a determined profile:

```
sudo oscap xccdf eval  --profile hipaa   --fetch-remote-resources   --results /tmp/ssg-results.xml   --report ~/report/ssg-results.html     /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml
```

:::warning
You must use the `--fetch-remote-resources` option when performing an evaluation. This option allows OSCAP to download these remote resources which are OVAL definitions. Information on where to download them is included in the data stream file. 
:::

Here is an example output of this command:

```
Downloading: https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2 ... ok
--- Starting Evaluation ---

Title   Verify File Hashes with RPM
Rule    xccdf_org.ssgproject.content_rule_rpm_verify_hashes
Result  pass
...
Title   Distribute the SSH Server configuration to multiple files in a config directory.
Rule    xccdf_org.ssgproject.content_rule_sshd_use_directory_configuration
Result  pass    
```
The HTML report which you can view in a browser looks like as follows:

![image](/images/openscap-9_evaluation_report.png)

## Generating a Full Security Guide

To create a full security guide for a system based on an XCCDF profile, use the `oscap xccdf generate guide` command. Pay attention, that like in the previous command you choose your home path **~home/user** to save the HTML security guide.

Use the oscap xccdf generate guide command to create a full security guide that provides a catalog of security-relevant configuration settings for the system. Security guides often include example bash remediation scripts and Ansible snippets that can be helpful when run against the system to automatically resolve issues. Be aware that you should test remediation scripts on systems within a test environment as actions taken by scripts may not be desirable for your enterprise.

```
sudo oscap xccdf generate guide --profile hipaa   --fetch-remote-resources \
/usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml > ~/report/security_guide.html
```

The HTML report which you can view in a browser looks like as follows:

![image](/images/openscap-9_full_security_guide.png)

:::tip
Run the `oscap info ssg-results.xml` command from the */tmp* directory to review the results XML file. You can get information like remediation scripts from it.
:::

## Remediating a System For Compliance With a Security Profile

Performing remediation steps is recommended after a fresh installation without any profile selected while installation. OSCAP commands can apply remediation steps where the system fails to comply with an XCCDF profile. You can find these rules that result in fail status during scanning the system and generating a security guide. 

:::tip
Note, that remediation doesn't guarantee compliance with an XCCDF profile if the system configuration has been changed. Also, remediation steps can make changes to a system and alter how a system functions and the steps can't be automatically reverted once applied. So it's not recommended to run remediation steps on a production system without testing.
:::

Run the `oscap xccdf eval` command with `--profile` and `--remediate` options to allow OSCAP automatically apply remediation steps:

```   
sudo oscap xccdf eval --profile hipaa \
  --remediate /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml    
```  

After that, reboot the system and scan the system again to validate the changes.

It's possible to generate remediation scripts for later use allowing to review and modify actions before applying these changes. 
The following command generates a remediation script that provides all of the remediations that are present in a profile. Run the command against the data stream file:

```
oscap xccdf generate fix --profile hipaa --fix-type bash \
 --output all-remediations.sh /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml
```   

To generate a remediation script with specific remediations run a scan against an XCCDF file and use an XML results file:

```  
oscap xccdf generate fix --profile hipaa --fix-type bash  --output remediations.sh /tmp/ssg-results.xml
```  

## Auditing for Vulnerabilities By Using OVAL Definitions

### About OVAL

The OVAL definition file is used to scan the system in order to verify if applicable errata have been installed. To see the information about supported AlmaLinux OS versions and their public OVAL streams, please, visit the [AlmaLinux OVAL streams](https://wiki.almalinux.org/documentation/oval-streams.html) wiki page.

There are two types of OVAL files: *org.almalinux.alsa-9.xml* and *org.almalinux.alsa-9.xml.bz2*, which contain the same information but archived.

### Getting an OVAL file

The first thing to run the OVAL scan is to download a file from an AlmaLinux OVAL stream using the browser or the `wget` command:

```
wget https://security.almalinux.org/oval/org.almalinux.alsa-9.xml
```

or

```
wget https://security.almalinux.org/oval/org.almalinux.alsa-9.xml.bz2
```

:::tip
Don't forget to extract the OVAL file if you downloaded the compressed file:
```
bzip2 -d org.almalinux.alsa-9.xml.bz2
```
:::

### Displaying information about an OVAL file

Run the `oscap info` command to display information about an OVAL file:

```
oscap info org.almalinux.alsa-9.xml
``` 

Here is an example output you can see:

```
Document type: OVAL Definitions
OVAL version: 5.10
Generated: 2022-09-16T20:30:33
Imported: 2022-09-16T22:30:33
```

### Validating an OVAL file

Run the `oscap validate` command to validate an OVAL file against its schema:

```
oscap oval validate org.almalinux.alsa-9.xml \
  && echo "ok" || echo "exit code = $? not ok"
```

The command output returns *ok* if the files are valid and properly structured.

### Performing a scan

Run the following command to perform an audit scan of the AlmaLinux:  

```
sudo oscap oval eval --results /tmp/alsa-results-oval.xml \
--report ~/report/alsa-report-oval.html org.almalinux.alsa-9.xml
```

Here is an example output you can see:

```
Definition oval:org.almalinux.alsa:def:20226224: false
...
Definition oval:org.almalinux.alsa:def:20225249: true
...
Definition oval:org.almalinux.alsa:def:20221729: false
Definition oval:org.almalinux.alsa:def:20221728: false
Evaluation done
```

If the patch has been applied to the system - the output shows the *true* flag. If not - you see the *false* flag.

Run the following command to generate the HTML report to view in a browser:

```
sudo oscap oval generate report /tmp/alsa-results-oval.xml \ 
/home/sonia/report/alsa-report-oval.html
```

Here is an example of the HTML report:
    
![image](/images/openscap-9_oval_scan.png)

## SCAP Workbench 

One more way to scan a local or a remote system is SCAP Workbench. The SCAP Workbench utility also allows generating reports based on scan evaluations.

To install SCAP Workbench run the following command as root:

```
sudo dnf install scap-workbench
```

If the `scap-security-guide` package wasn't installed from the package repository before, you need to install it too, to use SCAP Workbench effectively. All the other packages and dependencies are installed and updated automatically. 

After SCAP Workbench is installed, it should appear in your desktop environments application menu and you can run it. 

![image](/images/openscap-9_workbench.png)

After you start Workbench, a dialog window will offer you to choose which SCAP Security Guide to open. 

When one of the guides is chosen, the next SCAP Workbench window appears. There is a menu, which offers you some more options to select before scanning the system. 

![image](/images/openscap-9_workbench_profiles.png)

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
* [DRAFT] CIS AlmaLinux 9 Benchmark for Level 2 - Server
* [DRAFT] CIS AlmaLinux 9 Benchmark for Level 1 - Server
* [DRAFT] CIS AlmaLinux 9 Benchmark for Level 1 - Workstation
* [DRAFT] CIS AlmaLinux 9 Benchmark for Level 2 - Workstation
* [DRAFT] Unclassified Information in Non-federal Information Systems and Organizations (NIST 800-171)
* Australian Cyber Security Centre (ACSC) Essential Eight
* Health Insurance Portability and Accountability Act (HIPAA)
* Australian Cyber Security Centre (ACSC) ISM Official
* [DRAFT] Protection Profile for General Purpose Operating Systems
* PCI-DSS v3.2.1 Control Baseline for Red Hat Enterprise Linux 9
* [DRAFT] DISA STIG for Red Hat Enterprise Linux 9
* [DRAFT] DISA STIG with GUI for Red Hat Enterprise Linux 9

***Target***
Here you can select the system you want to be evaluated - a local or a remote one.

***Selected Rules***
This field shows you a list of security rules that security policy applies to.

***Fetch remote resources***
You need to check this box in case you want the scanner to download remote OVAL content defined in an XML file.

***Remediate***
If you check this box, SCAP Workbench will attempt to correct system settings that would fail to match the state defined by the policy.

After the profile is chosen, press the SCAN button. You will see how the process is going on the status bar. 

![image](/images/openscap-9_workbench_scan.png)

When the scan is completed, you can *Save Results* as an XCCDF Result file, ARF, or HTML Report, in case you need them. If you press the *Show Report* button, it'll be displayed in a browser: 

![image](/images/openscap-9_workbench_report.png)
