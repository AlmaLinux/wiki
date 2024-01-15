---
title: 'Contribute'
---
# Contributing to the AlmaLinux project

## Help with reporting bugs and making fixes

Since AlmaLinux aims to be as close to RHEL as possible, it should have nearly identical bugs as the current release of RHEL. AlmaLinux recommends following an "upstream first" approach in order to help not just the AlmaLinux but the whole EL community:
* Try to reproduce the steps and check whether the bug is present in CentOS Stream or has been already fixed.
* If present, it means that the bug is upstream. Please, submit the bug to [CentOS Stream bugzilla](https://wiki.centos.org/ReportBugs) providing all the necessary information about an issue and reproducing steps. This is the contribution path to get the bug fix into the upstream, which will, in turn, be built into AlmaLinux.
* If you are able to help investigate and fix the bug, please collaborate with CentOS Stream, as this is the best an AlmaLinux Community Member can do. Check the [CentOS Contributor's Guide](https://docs.centos.org/en-US/stream-contrib/) for more details.
* If the bug is AlmaLinux-specific, please open a bug on [AlmaLinux Bug Tracker](https://bugs.almalinux.org/) providing all the necessary information about an issue and reproducing steps. 

## Volunteer Technical Community Coordinator for ELevate Project

We are looking for a volunteer Technical Community Coordinator to figure out what the community needs & wants from the AlmaLinux ELevate project. One of your primary responsibilities is to provide direction to the AlmaLinux OS engineers to help decide "what is next for the ELevate Project". As a Technical Community Coordinator, you'll engage with the community and schedule meetings with the AlmaLinux OS team.

**Duties and Responsibilities**
- Coordinate community and AlmaLinux ELevate team
- Consult and help users with ELevate Project
- Check all possible bug sources (bugs.almalinux.org, forum, GitHub) and escalate to the ELevate team if the bug requires coding
- Provide direction to the AlmaLinux ELevate team according to the feedback from the community and volunteers
- Schedule meetings with the community and AlmaLinux ELevate team
- Use social media to understand the community's needs

**Requirements and Qualifications**
- Advanced English speaking and writing skills
- Experience with AlmaLinux OS
- Experience as a community planner or organizer
- Management and organizational skills
- High communication skills

If you are willing to help, email us at [volunteer@almalinux.org](mailto:volunteer@almalinux.org).

## Improve the documentation

It makes no sense to talk about the importance of documentation, it is like
an investment in the future. It can take time and energy, but it is 
essential to create full and comprehensive documentation together.

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


## Help with Azure mirrors deployment

We want to make sure that AlmaLinux images in Azure Cloud will use local mirrors for each region, and don't pay for traffic.
More info [here](/cloud/Azure).

## More ways to help for DevOps & Programmers
- Help our [Core Infrastructure Group](/sigs/Core.html#help-wanted)
- Help with our [cloud infrastructure maintenance](/sigs/Cloud.html#help-wanted)

