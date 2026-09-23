---
title: "Contribute a Certification"
---

# Contribute a Certification

This guide is for anyone who wants to certify hardware or confirm software on AlmaLinux. You do not need to be a vendor, you do not need to ask permission, and you do not need to schedule anything with us. If you have a machine and about ten minutes, you can add a listing to the [AlmaLinux Catalog](https://catalog.almalinux.org).

If you are a hardware or software vendor looking for an official vendor validated listing, or you are certifying at scale, start with the [certification program document](https://almalinux.org/certification/program/) instead. This guide covers the individual, community validated path.

## What you need

- A machine running AlmaLinux 8, 9, or 10 on x86_64 or aarch64. You can also boot our [live media](https://almalinux.org/get-almalinux/) instead of installing anything, which means you can certify a machine that is already doing a job and put it straight back to work.
- Root on the machine under test.
- A free [AlmaLinux Account](https://accounts.almalinux.org) if you want to publish your results. Running the suite does not need one.

## Certify hardware

### 1. Install the suite

The certification suite is packaged as `alma-certify` in the [`extras` repository](https://wiki.almalinux.org/repos/AlmaLinux.html), which is enabled by default.

```bash
sudo dnf install alma-certify
```

### 2. Run it

If you are not sure what to run, run the command with no arguments and it will walk you through the options, build the command your answers add up to, and run it.

```bash
alma-certify
```

If you would rather go straight to it, the certification tests are:

```bash
sudo alma-certify validate
```

Alternatively, if you'd like to also include benchmarks in the run:

```bash
sudo alma-certify run
```

Most machines finish in under ten minutes, and you are not doing anything for most of that.

### 3. Authorize the machine

The first time you run `validate`, `benchmark`, or `run`, the suite prints a QR code, URL and a short code.  You can scan the QR code on a phone, tablet, etc. and log in on that device to approve the run if this is more convenient than pasting the code into a browser URL.

```
To authorize this machine (sut-42.lab), open:
    https://catalog.almalinux.org/my/activate/
and enter the code:  BQXK-PMTH
```

Open that on your phone or another computer, sign in, and enter the code. No password or token is ever typed on the machine being tested. If you would rather authorize the machine before you start, run `alma-certify register` first.

### 4. Finish the listing

Results upload on their own when the run completes. Your submission then waits for you to add the things the suite cannot know: the marketing name of the machine, a short description, and a link to the spec sheet. You add those in the catalog, and a reviewer publishes the listing from there.

Every submission goes through review before it appears, whether it comes from a community member, a vendor, or from us.

## Confirm software

Software works differently, because there is no suite to run against an application. Confirming software is entirely a web task and takes about a minute.

1. Sign in to [catalog.almalinux.org](https://catalog.almalinux.org).
2. Find the product you use.
3. Confirm that it works on the AlmaLinux release you are actually running.

Confirmations are counted one per person per release, so every person who confirms adds weight to the listing. If you are running a product on a release its publisher has not cited yet, you can report that too, and it appears on the listing once a reviewer accepts it.

This is the fastest way to help. If you rely on something every day and it works, say so.

## Going further

**Benchmarks** do not run by default and are completely optional. They take considerably longer than a certification run, because several of them do real work, and their results feed the public leaderboards in the catalog.

```bash
sudo alma-certify benchmark
```

To do everything in one pass, use `sudo alma-certify run`, which performs the inventory, the certification tests, and the benchmarks together.

**Interactive tests** cover the things that need a person at the machine, such as USB hotplug, suspend and resume, and surviving a reboot. They only run when you ask for them.

```bash
sudo alma-certify validate --interactive
```

**Keeping results to yourself** is fine. Pass `--no-submit` and nothing is uploaded.

```bash
sudo alma-certify validate --no-submit
```

**Machines with no network access** can still be certified. Bundle the run and upload the archive by hand at [catalog.almalinux.org/results/upload/](https://catalog.almalinux.org/results/upload/).

```bash
alma-certify bundle <run-id>
```

## Command reference

| Command                             | What it does                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| `alma-certify`                      | Guided walkthrough of the common tasks                                          |
| `alma-certify list`                 | Shows what would run on this machine                                            |
| `sudo alma-certify collect`         | Hardware inventory: CPUs, memory, disks, network cards, GPUs, firmware, drivers |
| `sudo alma-certify validate`        | The certification tests                                                         |
| `sudo alma-certify benchmark`       | Performance measurements for the leaderboards                                   |
| `sudo alma-certify run`             | Collect, validate, and benchmark together                                       |
| `alma-certify runs`                 | Lists previous runs and their status                                            |
| `alma-certify report <run-id>`      | Shows the results of a run                                                      |
| `alma-certify resume <run-id>`      | Continues an interrupted run                                                    |
| `alma-certify bundle <run-id>`      | Produces a shareable archive                                                    |
| `sudo alma-certify submit <run-id>` | Uploads a run by hand                                                           |
| `alma-certify register`             | Authorizes the machine ahead of a run                                           |

## A few things worth knowing

**The suite runs anywhere, but it can only certify AlmaLinux.** A run on another distribution warns you and continues if you say so, and you keep the results, but it cannot be submitted as a certification.

**A virtual machine cannot certify a whole machine**, because the firmware, storage controller, and network devices belong to the hypervisor. A GPU passed through to a guest is the real device, so a GPU-scoped run submits normally.

**Certification is per major version.** Hardware certified for AlmaLinux 9 does not need recertifying until AlmaLinux 10. Because a run takes minutes now, re-confirming existing listings on newer releases is genuinely useful and always welcome.

**Certification here is a statement about compatibility.** It says AlmaLinux runs correctly on this hardware, or this software runs correctly on AlmaLinux. It is not a regulatory or security certification.

## Getting help

If a run fails in a way you do not understand, or you want to talk through certifying something unusual, come to the SIG. We would rather hear about it than have you give up on it.

- [~SIG/Certification on Mattermost](https://chat.almalinux.org/almalinux/channels/sigcertification), bridged to Matrix at [#sig-certification:almalinux.im](https://app.almalinux.im/#/room/#sig-certification:almalinux.im)
- [AlmaLinux/alma-certify](https://github.com/AlmaLinux/alma-certify) for the suite itself, its documentation, and issue tracking
- The [Certification SIG](../Certification.md) page for meetings and how to join
