---
title: "EL8 Distro Comparison"
---

| Benchmarking against RHEL                  | AlmaLinux                | Oracle Linux                                   | Rocky Linux                                 | Upstream of RHEL  | Centos Stable     |
| -------------------------------------------|--------------------------|------------------------------------------------|-------------------------------------------- |-------------------|------------------:|
|Production Version                          | Since March 2021         | Since 2006                                     | RC. Not Production                          | Since 2021        | Since 2004        |
|Strives 1:1 binary RHEL binary compatibility| Yes                      | Almost* (some divergance                       | Yes                                         | N/A               | Yes               |
|                                            |                          | in glibc, openssl and other components)        |                                             |                   |                   |
|Regular updates delay                       | About 1 business day     | About 1 business day                           | Unknown                                     | Upstream of RHEL  | Going to EOL      |
|Minor version release delay                 | 1 Week                   | 1 week                                         | Unkown                                      | N/A               | Going to EOL      |
|Errata                                      | Yes                      | Yes                                            | No                                          | No                | No                |
|Lifecycle                                   | 10 Years                 | 10 Years                                       | 10 Years                                    | 5 Years           | 5 year            |
|Commercial support                          | 3rd party                | Oracle, 3rd parties                            | No. Maybe 3rd Party                         | 3rd party         | 3rd party         |
|Livepatching service                        | KernelCare               | Oracle Ksplice, KernelCare Available           | KernelCare Available*                       | Not available     | KernelCare,Kpatch |
|                                            |                          |                                                | (planned, once stable)                      |                   |                   |
|FIPS compliance                             | Planned Q1, 2022         | Yes                                            | Planned                                     | Not available     | FIPS 140-2        |
|ARM support                                 | Beta                     | Yes                                            | Beta                                        | Yes               | Yes               |
|PPowerPC support                            | Planned Q3, 2021         | Yes                                            | No                                          | Yes               | Yes               |
|SecureBoot                                  | Yes                      | Yes                                            | No                                          | Yes               | Yes               |
|Owned By:                                   | AlmaLinux OS Foundation  | Oracle Inc                                     | Rocky Enterprise Software Foundation        | Red Hat Inc       | Yes               |
|Owned by org type:                          | Non-Profit 501(c)6       | For Profit C-Corp                              | For Profit, Public Benefit Corp             | For Profit C-Corp | Yes               |

