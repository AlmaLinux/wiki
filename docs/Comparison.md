---
title: "EL8 Distro Comparison"
---

| Benchmarking against RHEL                  | AlmaLinux                | Oracle Linux                                   | Rocky Linux                                 | CentOS Stream     | CentOS Linux      |
| -------------------------------------------|--------------------------|------------------------------------------------|-------------------------------------------- |-------------------|-------------------|
|Production Version                          | Since March 2021         | Since 2006                                     | Since June 2021                             | Since 2019        | Since 2004        |
|Strives 1:1 binary RHEL binary compatibility| Yes                      | Almost\*<br/>(some divergance in glibc, openssl and other components)    | Yes               | Compatible within the limits of the [ACG][acg] | Yes |
|Regular updates delay                       | About 1 business day     | About 1 business day                           | About 1 business day                        | Upstream of RHEL  | About 1 business day |
|Last minor version release delay            | [2 days][alma8.6]        | [7 days][oracle8.6]                            | [6 days][rocky8.6]                          | N/A               | N/A               |
|Errata                                      | Yes                      | Yes                                            | Yes                                         | No                | No                |
|Lifecycle                                   | 10 Years                 | 10 Years                                       | 10 Years                                    | 5-6 Years         | EOL on 2021-12-31 |
|Commercial support                          | 3rd party                | Oracle, 3rd parties                            | 3rd Party                                   | 3rd party         | 3rd party         |
|Livepatching service                        | KernelCare               | Oracle Ksplice, KernelCare Available           | KernelCare Available                        | Not available     | KernelCare, Kpatch |
|FIPS compliance                             | Planned                  | Yes                                            | Planned                                     | Not available     | Not available     |
|ARM support                                 | Yes                      | Yes                                            | Yes                                         | Yes               | Yes               |
|PowerPC support                             | Yes                      | Yes                                            | Planned                                     | Yes               | Yes               |
|s390x support                               | Planned                  | TBD                                            | TBD                                         | Yes               | Yes               |
|SecureBoot                                  | Yes                      | Yes                                            | Yes                                         | Yes               | Yes               |
|Owned By:                                   | AlmaLinux OS Foundation  | Oracle Inc                                     | Rocky Enterprise Software Foundation        | Red Hat Inc       | Red Hat Inc       |
|Owned by org type:                          | Non-Profit 501(c)6       | For Profit C-Corp                              | For Profit, Public Benefit Corp             | For Profit C-Corp | For Profit C-Corp |

[acg]: https://access.redhat.com/articles/rhel8-abi-compatibility
[alma8.6]: https://almalinux.org/blog/almalinux-86-stable-is-now-available/
[oracle8.6]: https://blogs.oracle.com/linux/post/announcing-the-release-of-oracle-linux-8-update-6
[rocky8.6]: https://rockylinux.org/news/rocky-linux-8-6-ga-release/
