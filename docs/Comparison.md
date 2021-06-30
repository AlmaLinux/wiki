---
title: "EL8 Distro Comparison"
---

| Benchmarking against RHEL                  | AlmaLinux                | Oracle Linux                                   | Rocky Linux                                 | CentOS Stream     | CentOS Linux      |
| -------------------------------------------|--------------------------|------------------------------------------------|-------------------------------------------- |-------------------|-------------------|
|Production Version                          | Since March 2021         | Since 2006                                     | Since June 2021                          | Since 2019        | Since 2004        |
|Strives 1:1 binary RHEL binary compatibility| Yes                      | Almost*<br/>(some divergance in glibc, openssl and other components)                      | Yes                                         | Compatible within the limits of the [ACG][acg] | Yes               |
|Regular updates delay                       | About 1 business day     | About 1 business day                           | Unknown                                     | Upstream of RHEL  | Going to EOL      |
|Minor version release delay                 | 1 Week                   | 1 week                                         | Unknown                                      | N/A               | Going to EOL      |
|Errata                                      | Yes                      | Yes                                            | No                                          | No                | No                |
|Lifecycle                                   | 10 Years                 | 10 Years                                       | 10 Years                                    | 5 Years           | 5 year            |
|Commercial support                          | 3rd party                | Oracle, 3rd parties                            | No. Maybe 3rd Party                         | 3rd party         | 3rd party         |
|Livepatching service                        | KernelCare               | Oracle Ksplice, KernelCare Available           | KernelCare Available*<br/>(planned, once stable)                      | Not available     | KernelCare, Kpatch |
|FIPS compliance                             | Planned Q1, 2022         | Yes                                            | Planned                                     | Not available     | FIPS 140-2        |
|ARM support                                 | Yes                      | Yes                                            | Yes                                        | Yes               | Yes               |
|PowerPC support                             | Planned Q3, 2021         | Yes                                            | No                                          | Yes               | Yes               |
|SecureBoot                                  | Yes                      | Yes                                            | No                                          | Yes               | Yes               |
|Owned By:                                   | AlmaLinux OS Foundation  | Oracle Inc                                     | Rocky Enterprise Software Foundation        | Red Hat Inc       | Red Hat Inc       |
|Owned by org type:                          | Non-Profit 501(c)6       | For Profit C-Corp                              | For Profit, Public Benefit Corp             | For Profit C-Corp | For Profit C-Corp |

[acg]: https://access.redhat.com/articles/rhel8-abi-compatibility
