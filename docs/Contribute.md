---
title: 'Help AlmaLinux OS'
---
# Contributing to the AlmaLinux project

## Help with reporting bugs and making fixes

Since AlmaLinux aims to be as close to RHEL as possible, it should have nearly identical bugs as the current release of RHEL. AlmaLinux recommends following an "upstream first" approach in order to help not just the AlmaLinux but the whole EL community:
* Try to reproduce the steps and check whether the bug is present in CentOS Stream or has been already fixed.
* If present, it means that the bug is upstream. Please, submit the bug to [CentOS Stream bugzilla](https://wiki.centos.org/ReportBugs) providing all the necessary information about an issue and reproducing steps. This is the contribution path to get the bug fix into the upstream, which will, in turn, be built into AlmaLinux.
* If you are able to help investigate and fix the bug, please collaborate with CentOS Stream, as this is the best an AlmaLinux Community Member can do. Check the [CentOS Contributor's Guide](https://docs.centos.org/en-US/stream-contrib/) for more details.
* If the bug is AlmaLinux-specific, please open a bug on [AlmaLinux Bug Tracker](https://bugs.almalinux.org/) providing all the necessary information about an issue and reproducing steps. 

Please, file your [bugs](https://github.com/AlmaLinux/almalinux-deploy/issues) and join us for discussions on [GitHub](https://github.com/AlmaLinux/almalinux-deploy/discussions) and on [AlmaLinux Chat on Mattermost](https://chat.almalinux.org/).

If you are interested in contributing, and learning more details about the technology stack of the tool and tests, please, visit the [repository](https://github.com/AlmaLinux/almalinux-deploy).

Also, you might be interested with [ELevate Project Contribution Guide](/elevate/Contribution-guide.html).

## Specific Areas We Need Help With 

Each SIG has their own specific focus areas that are looking for help, but here are some more general ones!

### 1.  Help with reporting bugs and making fixes

To make AlmaLinux successful, we need the close involvement of the community members. We use our bug tracking system to find, track, and fix bugs. We encourage AlmaLinux users to help us by filling in bug-reports. You can track and discuss all bugs on [bugs.almalinux.org](https://bugs.almalinux.org/).

### 2. Improve the documentation

The importance of documentation cannot be understated, as it is like an investment in the future. It can take time and energy, but it is essential to create full and comprehensive documentation together.

If you want to participate, do the following:

1. Fork the Wiki [repository](https://github.com/AlmaLinux/wiki).
2. Edit or create a page.
3. Commit your changes.
4. Create a pull-request as described in the GitHub [documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

The Wiki is powered by [VuePress](https://vuepress.vuejs.org/), so it's pretty
easy to run it locally (run all commands from the project's root):

1. Install necessary dependencies:
   ```sh
   $ yarn install
   ```
2. Run a development web-server:
   ```sh
   $ yarn docs:dev
   ```
3. Your local Wiki instance should be up and running on
   [http://localhost:8080/](http://localhost:8080/).


### 4. Help with Azure mirrors deployment

We want to make sure that AlmaLinux images in Azure Cloud will use local mirrors for each region, and don't pay for traffic. More info [here](/cloud/Azure).

### 5. More ways to help for DevOps & Programmers

- Help our [Core Infrastructure Group](/sigs/Core.html#help-wanted)
- Help with our [cloud infrastructure maintenance](/sigs/Cloud.html#help-wanted)


## Need assistance? We are here to help!

If you're seeking assistance in connecting with the appropriate individual or group, or if you're interested in guidance on becoming a contributor to AlmaLinux, please don't hesitate to reach out. You can contact our AlmaLinux Evangelist & PM, Pawel. He's available as [pawel @ Mattermost chat](https://chat.almalinux.org/almalinux/messages/@pawel) or via email at [PSUchanecki@almalinux.org](mailto:psuchanecki@almalinux.org).
