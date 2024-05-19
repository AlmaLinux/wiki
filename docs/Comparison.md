---
title: "EL Distro Comparison"
---

> Diagram by [Carl George](https://www.linkedin.com/in/carlwgeorge/)

![relationship_chart](/images/Comparison-relationship_chart.png)

The chart above illustrates the relationship between Fedora, CentOS Stream, and RHEL.<br>
AlmaLinux utilizes package sources from both RHEL and CentOS Stream to build its distribution. In contrast, Oracle Linux and Rocky Linux rely exclusively on package sources from RHEL.

|Benchmarking against RHEL       |AlmaLinux                                 |Oracle Linux                        |Rocky Linux                                                           |CentOS Stream                  |RHEL                           |
|--------------------------------|------------------------------------------|------------------------------------|----------------------------------------------------------------------|-------------------------------|-------------------------------|
|First release                   |March 2021                          |October 2006                          |June 2021                                                       |September 2019                     |March 2002                     |
|RHEL compatibility              |minor version compatible                  |minor version compatible            |minor version compatible                                              |major version compatible       |n/a                            |
|Last minor version release delay|[5 days][alma9.4]                         |[6 days][oracle9.4]                 |[8 days][rocky9.4]                                                    |N/A                            |n/a                            |
|Errata                          |Yes                                       |Yes                                 |Yes                                                                   |No                             |yes                            |
|Lifecycle                       |10 Years                                  |10 Years                            |10 Years                                                              |5.5 Years                      |10-14 years                    |
|Commercial support              |3rd party                                 |Oracle, 3rd parties                 |3rd parties                                                           |3rd Party                      |1st party (Red Hat)            |
|Livepatching service            |KernelCare                                |Oracle Ksplice, KernelCare Available|KernelCare Available                                                  |Not available                  |kpatch                         |
|Architectures                   |aarch64, ppc64le, s390x, x86_64           |aarch64, x86_64                     |aarch64, ppc64le, s390x, x86_64                 |aarch64, ppc64le, s390x, x86_64|aarch64, ppc64le, s390x, x86_64|
|Backing organization            |AlmaLinux OS Foundation (501c6 non-profit)|Oracle Inc.      |Rocky Enterprise Software Foundation (For Profit, Public Benefit Corp)|Red Hat Inc (For Profit C-Corp)|Red Hat Inc.                   |


[binary]: https://almalinux.org/blog/future-of-almalinux/
[oracleabi]: https://www.oracle.com/news/announcement/blog/keep-linux-open-and-free-2023-07-10/
[acg]: https://access.redhat.com/articles/rhel8-abi-compatibility
[alma9.4]: https://almalinux.org/blog/2024-05-06-announcing-94-stable/
[oracle9.4]: https://docs.oracle.com/en/operating-systems/oracle-linux/9/relnotes9.4/
[rocky9.4]: https://rockylinux.org/news/rocky-linux-9-4-ga-release
