---
title: "AltArch SIG"
---
# AltArch SIG

The purpose of this SIG is to maintain support for alternate (non-mainstream) architectures like x86_32 and Raspberry PI.
This SIG will work in close collaboration with the Core SIG to ensure all builds remain synchronized with the AlmaLinux OS 10 releases and maintains compatibility with RHEL ecosystem standards.

## Rationale

The need for x86_32 support stems from:
- **Legacy hardware support**: Many systems still rely on x86_32 processors
- **Resource-constrained environments**: x86_32 systems require less memory overhead
- **Long-lifecycle products**: Equipment with longer lifecycles that cannot be easily upgraded
- **Continuity**: Maintaining upgrade paths for organizations currently using x86_32 AlmaLinux 9 or earlier

## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple.

**Where we chat**

We use Mattermost for communication. [Platform and channel details to be announced upon SIG approval]

**Where and when we meet**

Meetings will be held bi-weekly, with timing adjusted to accommodate members across different time zones. Initial meetings will focus on infrastructure setup and build pipeline development. We also work asynchronously in Mattermost to accomplish our goals between meetings.

## Activities, projects, and deliverables

### Primary Deliverables

1. **32-bit RPM Repository**: While publishing the repository is a Core SIG
   responsibility, this SIG:
   - Builds and maintains selected packages from the main AlmaLinux 10 BaseOS and AppStream repositories
   - Builds and maintains selected packages from the epel 10 repository
   - Synchronized with upstream releases and security updates
   - Quality assurance through automated testing

2.  **Documentation**: Comprehensive documentation for users and contributors
    - Installation guides for x86_32 systems
    - Migration guides from x86_32 AlmaLinux 9
    - Build process documentation for contributors
    - Known limitations and architectural differences

3. **Testing & QA**: Automated and manual testing frameworks
   - Automated test suites for package functionality
   - Hardware compatibility testing
   - Security vulnerability scanning
   - Performance benchmarking on x86_32 hardware

### Ongoing Responsibilities

- Maintain synchronization with AlmaLinux 10 minor releases
- Security patch backporting and testing
- Community support for x86_32 and Raspberry PI users

### Help wanted

Contributions take all kinds of shapes and sizes, and we welcome everyone! If you have expertise or time and would like to help us out, here are a few things that need help soon, and a place where you can find more information.

**Immediate needs:**
- **Build system engineers**: Help set up and configure build infrastructure
- **Package maintainers**: Assist with package builds and dependency resolution
- **QA/Testing volunteers**: Test packages on various x86_32 hardware configurations
- **Documentation writers**: Create user guides and technical documentation

For current task tracking and to address specific issues, a channel/GitHub project board will be announced after SIG approval.


## SIG members
- [Peter Edwards](peadar@arista.com) - SIG Lead x86_32 building
- [Koichiro Iwao](koichiro.iwao@miraclelinux.com) - SIG Lead - Raspberry Pi building
- [Ganesan Rajagopal](rganesan@arista.com) - Member
- [Navneet Sinha](navneet@arista.com) - Member
- [Anant Verma](anantv@arista.com) - Member
- [Mahendar Srinivasan](mahendars@arista.com) - Member
- [Michel Lind](michel@michel-slm.name) - Member
- [Andrew Lukoshko](alukoshko@almalinux.org) - Member

## Additional information for SIG application approval

### Timeline

**Q1 2026 (Months 1-3):**
- Research existing AlmaLinux build infrastructure and x86_32 build requirements
- Establish initial communication channels and meeting schedule
- Assess infrastructure requirements (build servers, storage, bandwidth)
- Start setting up the build infrastructure and integration with the Alma Build System
- Create initial documentation framework

**Q2 2026 and beyond:**
- Complete builds of selected/required BaseOS and essential AppStream packages
- Begin QA testing on physical x86_32 hardware
- Public beta release for community testing
- Complete documentation
- Address bug reports and build failures

### Resource Requirements

**Infrastructure needs:**

1. **Build servers**:
   - Dedicated build nodes (physical or VM)
   - Specification: TBD
   - Purpose: Parallel package building to maintain pace with main releases

2. **Storage**:
   - Needed for package repository
   - Build artifact and source storage: 500GB+
   - Backup storage for previous releases

3. **Bandwidth/CDN**:
   - Mirror infrastructure for package distribution
   - Integration with AlmaLinux mirror network

4. **Test hardware**:
   - Various 32-bit x86 systems for compatibility testing
   - May be provided by community members and SIG participants

**Human resources:**
- Active contributors from the Almalinux Core SIG
- Additional community volunteers for testing and QA
- Coordination time from Core SIG for build system integration
