---
title: "Security Errata"
---

# AlmaLinux Errata

### About Errata

Errata are package updates like some enhancements and features, bug fixes and security patches. These updates can be found at [errata.almalinux.org](https://errata.almalinux.org/) as a list of errata advisories.

![image](/images/errata_feed.png)

Advisories are published text to help users get the information that errata provide and their impact.
There are three types of advisories:

- ALSA - AlmaLinux Security Advisory - considered the most important type as it contains security fixes
- ALBA - AlmaLinux Bug Advisory - contains bug fixes
- ALEA - AlmaLinux Enhancement Advisory - contains enhancements and new features

These advisories are ranked by severity: Critical, Important, Moderate and Low.

Besides type and severity details, each advisory includes some description, references, a list of updated packages and the release date.

![image](/images/errata_example.png)

### How to access errata

- You can find updateinfo.xml files in repos and mirrors. Or run the following command to see the list of advisories as an output:

```
dnf updateinfo --list
```

- Recommended to use _.json_ files with updated schema:
  - [errata.full.json](https://errata.almalinux.org/8/errata.full.json) for AlmaLinux 8
  - [errata.full.json](https://errata.almalinux.org/9/errata.full.json) for AlmaLinux 9
- _.json_ files with deprecated schema:
  - [errata.json](https://errata.almalinux.org/8/errata.json) for AlmaLinux 8
  - [errata.json](https://errata.almalinux.org/9/errata.json) for AlmaLinux 9
- details about OVAL files can be found at [OVAL streams](https://wiki.almalinux.org/documentation/oval-streams.html) AlmaLinux Wiki page

### Mailing list

You can subscribe to the AlmaLinux errata [mailing list](https://lists.almalinux.org/mailman3/lists/security.lists.almalinux.org/) to receive notifications about errata package releases.
