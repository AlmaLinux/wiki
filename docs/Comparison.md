---
title: "Enterprise Linux Comparison"
---

# Enterprise Linux Comparison

###### Last updated 2024-07-12

When deciding what OS to use, having specifics outlined in a chart can help many people. The enterprise linux ecosystem is vast and has many differentiators that are nuanced and don't fit easily into charts, but we have attempted to capture some of the differentiations below. 

## Technical breakdown

|Benchmarking against RHEL       |AlmaLinux OS                              |Oracle Linux                        |Rocky Linux                               |CentOS Stream                  |RHEL                           |
|:-------------------------------|------------------------------------------|------------------------------------|-----------------------------------------|-------------------------------|-------------------------------|
|First release                   |[Mar. '21, AlmaLinux 8.3][alma.initial]  |Oct. 2006                        |[June '21, Rocky Linux 8.4][rocky.initial]|[Sept. '19, Stream 8.0][stream.initial] |Mar. 2002  |
|RHEL compatibility              |minor version**                           |minor version**                     |minor version**                           |major version*                 |n/a                            |
|Last minor version release delay|[5 days][alma9.4]                         |[6 days][oracle9.4]                 |[8 days][rocky9.4]                        |n/a                           |n/a      |
|Errata                          |[Yes](https://errata.almalinux.org/)      |Yes                                 |Yes                                       |No                             |Yes   |
|Lifecycle                       |10 Years                                  |10 Years                            |10 Years                                  |5.5 Years                      |10-14 years   |
|Commercial support              |3rd party                                 |Oracle, 3rd parties                 |3rd party                                 |3rd Party                      |1st party (Red Hat)           |
|Livepatching service            |KernelCare                                |Oracle Ksplice, KernelCare          |KernelCare                                |Not available                  |kpatch                         |
|FIPS compliance***              |[140-3 for 9.2, 3rd party][almalinux.fips]| [Many, 1st party][oracle.fips]     |[Planned, via 3rd party][rocky.fips]      | Not available                 |[Many, 1st party][RHEL.fips]     |
|Architectures (all: x86_64)     |x86_64 (at launch) <br /> aarch64 (since [8.4][alma.aarch]) <br /> ppc64le (since [8.5][alma.ppc])<br />s390x (since [8.6][alma.s390x])<br /> | x86_64 <br /> aarch64 | x86_64 <br />aarch64 (versions ≥ 9)<br /> ppc64le (versions ≥ 9)<br /> s390x (versions ≥ 9)|x86_64 <br />aarch64 <br /> ppc64le <br /> s390x  |x86_64 <br />aarch64 <br /> ppc64le <br /> s390x  |
|Backing organization            |AlmaLinux OS Foundation (501c6 non-profit)|[Oracle, Inc.][oracle.link]      |Rocky Enterprise Software Foundation|[Red Hat, Inc.][redhat.link]|[Red Hat, Inc.][centos.link]   |

\* major version compatible: aims for compatibility with the corresponding major version of RHEL<br />
** minor version compatible: aims for compatibility with the corresponding minor version of RHEL<br />
*** achieving FIPs compliance is a very complex and multi-year process not easily represented here, but links to the most recent information are provided.
   
**Note:** Previous versions of this table included a row for SecureBoot, but all distros now offer it, so it was removed.

[binary]: https://almalinux.org/blog/future-of-almalinux/
[oracleabi]: https://www.oracle.com/news/announcement/blog/keep-linux-open-and-free-2023-07-10/
[acg]: https://access.redhat.com/articles/rhel8-abi-compatibility
[alma9.4]: https://almalinux.org/blog/2024-05-06-announcing-94-stable/
[oracle9.4]: https://docs.oracle.com/en/operating-systems/oracle-linux/9/relnotes9.4/
[rocky9.4]: https://rockylinux.org/news/rocky-linux-9-4-ga-release
[alma.initial]: https://almalinux.org/blog/almalinux-os-stable-release-is-live/
[rocky.initial]: https://rockylinux.org/news/rocky-linux-8-4-ga-release 
[stream.initial]: https://lists.centos.org/pipermail/centos-announce/2019-September/023449.html
[alma.aarch]: https://almalinux.org/blog/almalinux-os-8-4-for-arm-aarch64-now-available/
[alma.ppc]: https://almalinux.org/blog/almalinux-for-powerpc-85-stable-now-available/
[alma.s390x]: https://almalinux.org/blog/how-we-built-almalinux-86-for-s390x/
[oracle.link]: https://www.oracle.com/
[resf.link]: https://www.resf.org/faq/is-resf-nonprofit
[redhat.link]: https://www.redhat.com/
[centos.link]: https://www.centos.org/about/
[almalinux.fips]: https://almalinux.org/blog/2023-09-19-fips-validation-for-almalinux/
[oracle.fips]: https://www.oracle.com/corporate/security-practices/assurance/development/external-security-evaluations/fips/certifications.html
[rocky.fips]: https://rockylinux.org/news/certifications-fips-2022-06-11
[RHEL.fips]: https://access.redhat.com/articles/compliance_activities_and_gov_standards#fips-140-2-and-fips-140-3-2