---
title: "AltArch SIG"
---
# AltArch SIG

The purpose of this SIG is to establish, maintain, and publish 32-bit (i686/i386) architecture support for AlmaLinux 10. While mainstream Linux distributions have largely discontinued 32-bit support, there remains a need to support resource-constrained environments or legacy hardware.
This SIG will work in close collaboration with the Core SIG to ensure 32-bit builds remain synchronized with the main AlmaLinux 10 release cycle and maintain compatibility with RHEL ecosystem standards.

## Rationale

The need for 32-bit support stems from:
- **Legacy hardware support**: Many systems still rely on 32-bit x86 processors
- **Resource-constrained environments**: 32-bit systems require less memory overhead
- **Long-lifecycle products**: Equipment with longer lifecycles that cannot be easily upgraded
- **Continuity**: Maintaining upgrade paths for organizations currently using 32-bit AlmaLinux 9 or earlier


## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple.

**Where we chat**

We use Mattermost for communication. [Platform and channel details to be announced upon SIG approval]

**Where and when we meet**

Meetings will be held bi-weekly, with timing adjusted to accommodate members across different time zones. Initial meetings will focus on infrastructure setup and build pipeline development. We also work asynchronously in Mattermost to accomplish our goals between meetings.

## Activities, projects, and deliverables

### Primary Deliverables

1. **32-bit RPM Repository**: Maintain and publish a 32-bit (i686) RPM repository for AlmaLinux 10
   - Selected packages from the main AlmaLinux 10 BaseOS and AppStream repositories
   - Selected packages from the epel 10 repository
   - Synchronized with upstream releases and security updates
   - Quality assurance through automated testing

2. **Build Infrastructure**: Establish and maintain build systems for 32-bit packages
   - Integration with AlmaLinux Build System
   - Automated build pipelines triggered by upstream updates
   - Build artifact storage and distribution

3.  **Documentation**: Comprehensive documentation for users and contributors
    - Installation guides for 32-bit systems
    - Migration guides from 32-bit AlmaLinux 9
    - Build process documentation for contributors
    - Known limitations and architectural differences

4. **Testing & QA**: Automated and manual testing frameworks
   - Automated test suites for package functionality
   - Hardware compatibility testing
   - Security vulnerability scanning
   - Performance benchmarking on 32-bit hardware

### Ongoing Responsibilities

- Maintain synchronization with AlmaLinux 10 minor releases
- Security patch backporting and testing
- Community support for 32-bit users

### Help wanted

Contributions take all kinds of shapes and sizes, and we welcome everyone! If you have expertise or time and would like to help us out, here are a few things that need help soon, and a place where you can find more information.

**Immediate needs:**
- **Build system engineers**: Help set up and configure build infrastructure
- **Package maintainers**: Assist with package builds and dependency resolution
- **QA/Testing volunteers**: Test packages on various 32-bit hardware configurations
- **Documentation writers**: Create user guides and technical documentation

For current task tracking and to address specific issues, a channel/GitHub project board will be announced after SIG approval.


## SIG members
- [Peter Edwards](peadar@arista.com) - SIG Lead
- [Ganesan Rajagopal](rganesan@arista.com) - Member
- [Navneet Sinha](navneet@arista.com) - Member
- [Anant Verma](anantv@arista.com) - Member
- [Mahendar Srinivasan](mahendars@arista.com) - Member
- [Michel Lind](michel@michel-slm.name) - Member
- [Andrew Lukoshko](alukoshko@almalinux.org) - Member

## Additional information for SIG application approval

### Timeline

**Q1 2026 (Months 1-3):**
- Research existing AlmaLinux build infrastructure and 32-bit build requirements
- Establish initial communication channels and meeting schedule
- Assess infrastructure requirements (build servers, storage, bandwidth)
- Start setting up the build infrastructure and integration with the Alma Build System
- Create initial documentation framework

**Q2 2026 and beyond:**
- Complete builds of selected/required BaseOS and essential AppStream packages
- Begin QA testing on physical 32-bit hardware
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
- Active contributors from the Alma Core team
- Additional community volunteers for testing and QA
- Coordination time from Core SIG for build system integration
