---
title: 'Packaging'
parent: 'Development'
---

<Breadcrumbs />

# AlmaLinux packaging guideline


## Upstream packages modification

Here is a (mostly complete) list of reasons to modify an upstream package:

* debranding.
* removing upstream-specific dependencies (e.g. subscription-manager).
* fixing upstream bugs if necessary.


We have a convention to add the `.alma` postfix to the end of the modified
packages "Release" field. For example, an upstream `sos-3.9.1-6.el8` package
will become `sos-3.9.1-6.el8.alma` after debranding. This will help us
distinguish our packages from upstream ones, especially if a machine was
converted to AlmaLinux.

All modified package sources should be uploaded to a corresponding repository
in the AlmaLinux Git [git.almalinux.org](https://git.almalinux.org/explore/repos) into branches for modified sources - `a8` and `a9`. 
