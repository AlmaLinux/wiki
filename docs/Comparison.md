---
title: "EL Distro Comparison"
---

| Benchmarking against RHEL                  | AlmaLinux                | Oracle Linux                                   | Rocky Linux                                 | CentOS Stream     | CentOS Linux      |
| -------------------------------------------|--------------------------|------------------------------------------------|-------------------------------------------- |-------------------|-------------------|
|Production Version                          | Since March 2021         | Since 2006                                     | Since June 2021                             | Since 2019        | Since 2004        |
|RHEL compatibility| [Binary Compatible](https://almalinux.org/blog/future-of-almalinux/)           | [ABI Compatible?](https://www.oracle.com/news/announcement/blog/keep-linux-open-and-free-2023-07-10/)                                            | Binary compatible                          | Compatible within the limits of the [ACG][acg] | Binary Compatible |
|Regular updates delay                       | About 1 business day     | About 1 business day                           | About 1 business day                        | Upstream of RHEL  | About 1 business day |
|Last minor version release delay            | [1 day][alma8.7]         | [7 days][oracle8.7]                            | [5 days][rocky8.7]                          | N/A               | N/A               |
|Errata                                      | Yes                      | Yes                                            | Yes                                         | No                | No                |
|Lifecycle                                   | 10 Years                 | 10 Years                                       | 10 Years                                    | 5-6 Years         | EOL on 2021-12-31 |
|Commercial support                          | 3rd party                | Oracle, 3rd parties                            | 3rd Party                                   | 3rd party         | 3rd party         |
|Livepatching service                        | KernelCare               | Oracle Ksplice, KernelCare Available           | KernelCare Available                        | Not available     | KernelCare, Kpatch |
|FIPS compliance                             | Planned                  | Yes                                            | Planned                                     | Not available     | Not available     |
|ARM support                                 | Yes                      | Yes                                            | Yes                                         | Yes               | Yes               |
|IBM PowerPC support                         | Yes                      | No                                             | Yes (versions ≥ 9)                          | Yes               | Yes               |
|IBM Z (s390x) support                       | Yes                      | No                                             | Yes (versions ≥ 9)                          | No                | No                |
|SecureBoot                                  | Yes                      | Yes                                            | Yes                                         | Yes               | Yes               |
|Owned By:                                   | AlmaLinux OS Foundation  | Oracle Inc                                     | Rocky Enterprise Software Foundation        | Red Hat Inc       | Red Hat Inc       |
|Owned by org type:                          | Non-Profit 501(c)6       | For Profit C-Corp                              | For Profit, Public Benefit Corp             | For Profit C-Corp | For Profit C-Corp |

[acg]: https://access.redhat.com/articles/rhel8-abi-compatibility
[alma8.7]: https://almalinux.org/blog/almalinux-87-now-available/
[oracle8.7]: https://blogs.oracle.com/linux/post/oracle-linux-8-update-7
[rocky8.7]: https://rockylinux.org/news/rocky-linux-8-7-ga-release/
