---
title: "ELevate SIG"
---

# ELevate SIG

The ELevate SIG maintains tooling and documentation that enables in-place migrations between major RHEL-compatible distributions.

## Purpose

ELevate aims to support seamless upgrades:

- From CentOS 7 → AlmaLinux 8 (via leapp)
- From AlmaLinux 8 → AlmaLinux 9
- **Planned**: AlmaLinux 9 → AlmaLinux 10 (under investigation)

## Goals (2025)

- Ensure smooth migration paths from CentOS 7 to AlmaLinux 8 as support ends
- Maintain and test upgrade tooling (based on [leapp](https://github.com/oamg/leapp))
- Monitor and coordinate efforts for AlmaLinux 9 → 10 migration compatibility
- Publish clear documentation and migration checklists
- Handle community feedback, bug reports, and edge case testing

## Status

- **CentOS 7 → AlmaLinux 8**: Stable and widely tested
- **AlmaLinux 8 → 9**: Supported with updated leapp workflows
- **AlmaLinux 9 → 10**: Planned, work in progress (contributions welcome)

## Help Wanted

We need help with:

- Testing ELevate scenarios in virtualized and bare-metal environments
- Debugging leapp failures and submitting patches upstream
- Writing and updating migration documentation
- Investigating edge cases (e.g., legacy packages, SELinux custom policies)

## Resources

- [Project Page](https://wiki.almalinux.org/elevate/)
- [Migration Guide](https://wiki.almalinux.org/elevate/ELevate-quickstart-guide.html)
- [GitHub Repository](https://github.com/AlmaLinux/elevate)
- [Chat](https://matrix.to/#/#almalinux:matrix.org)

