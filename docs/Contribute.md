---
title: 'Contribute'
permalink: /Contribute
---
# Contributing to the AlmaLinux project


## Help with reporting bugs and making fixes

To make AlmaLinux successful, we need the close involvement of the community
members. We use our bug tracking system to find, track, and fix bugs. We
encourage AlmaLinux users to help us by filling in bug-reports. You can track and
discuss all bugs on [bugs.almalinux.org](https://bugs.almalinux.org/).


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

