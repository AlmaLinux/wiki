---
title: "QA SIG"
---

# QA SIG

The Quality Assurance (QA) SIG ensures AlmaLinux releases meet high standards of reliability, stability, and performance across supported architectures and environments.

## Goals (2025)

- Design and maintain test plans for AlmaLinux 8, 9, and 10
- Integrate QA testing with CI/CD pipelines (e.g., GitHub Actions, GitLab CI)
- Automate tests using Ansible, [Testinfra](https://testinfra.readthedocs.io/), [bats-core](https://github.com/bats-core/bats-core)
- Ensure image validation across cloud platforms (AWS, Azure, GCP, etc.)
- Track and report regressions, bugs, and compatibility issues

## Recent Work

- Expanded automated testing for AlmaLinux 10 builds
- Added support for CI testing on cloud images and containers
- Migrated legacy shell tests to Python-based frameworks (pytest, testinfra)
- Collaborated with Core and Cloud SIGs for unified test coverage

## Help Wanted

We’re looking for:

- QA engineers familiar with automation tools and Linux internals
- Contributors to write and maintain CI test scripts
- Cloud testers for validating images in various providers
- Test engineers for edge architectures (ARM, PowerPC, etc.)

## How to Join

- **Chat**: [#almalinux:matrix.org](https://matrix.to/#/#almalinux:matrix.org)
- **Test Management System**: [GitHub QA Issues](https://github.com/AlmaLinux/wiki/issues?q=label%3AQA)
- **Documentation**: [AlmaLinux Testing Docs](https://wiki.almalinux.org/docs/qa.html)

