---
title: "EL Distro Comparison"
---

| Benchmarking against RHEL                  | AlmaLinux                | Oracle Linux                                   | Rocky Linux                                 | CentOS Stream     | CentOS Linux      |
| -------------------------------------------|--------------------------|------------------------------------------------|-------------------------------------------- |-------------------|-------------------|
|Production Version                          | Since March 2021         | Since 2006                                     | Since June 2021                             | Since 2019        | Since 2004        |
|RHEL compatibility| [Fully Compatible][almaabi] | [RHEL compatible](oracleabi) | 1:1 compatible | Compatible within the limits of the [ACG][acg] | Binary Compatible |
|Regular updates delay                       | About 1 business day     | About 1 business day                           | About 1 business day                        | Upstream of RHEL  | About 1 business day |
|Last minor version release delay            | [5 days][alma9.4]         | [6 days][oracle9.4]                            | [8 days][rocky9.4]                          | N/A               | N/A               |
|Errata                                      | Yes                      | Yes                                            | Yes                                         | No                | No                |
|Lifecycle                                   | 10 Years                 | 10 Years                                       | 10 Years                                    | 5-6 Years         | EOL on 2021-12-31 |
|Commercial support                          | 3rd party                | Oracle, 3rd parties                            | 3rd Party                                   | 3rd party         | 3rd party         |
|Livepatching service                        | KernelCare               | Oracle Ksplice, KernelCare Available           | KernelCare Available                        | Not available     | KernelCare, Kpatch |
|FIPS compliance                             | Yes                      | Yes                                            | Planned                                     | Not available     | Not available     |
|ARM support                                 | Yes                      | Yes                                            | Yes                                         | Yes               | Yes               |
|IBM PowerPC support                         | Yes                      | No                                             | Yes (versions ≥ 9)                          | Yes               | Yes               |
|IBM Z (s390x) support                       | Yes                      | No                                             | Yes (versions ≥ 9)                          | No                | No                |
|SecureBoot                                  | Yes                      | Yes                                            | Yes                                         | Yes               | Yes               |
|Owned By:                                   | AlmaLinux OS Foundation  | Oracle Inc                                     | Rocky Enterprise Software Foundation        | Red Hat Inc       | Red Hat Inc       |
|Owned by org type:                          | Non-Profit 501(c)6       | For Profit C-Corp                              | For Profit, Public Benefit Corp             | For Profit C-Corp | For Profit C-Corp |


[binary]: https://almalinux.org/blog/future-of-almalinux/
[oracleabi]: https://www.oracle.com/news/announcement/blog/keep-linux-open-and-free-2023-07-10/
[acg]: https://access.redhat.com/articles/rhel8-abi-compatibility
[alma9.4]: https://almalinux.org/blog/2024-05-06-announcing-94-stable/
[oracle9.4]: https://docs.oracle.com/en/operating-systems/oracle-linux/9/relnotes9.4/
[rocky9.4]: https://rockylinux.org/news/rocky-linux-9-4-ga-release
