---
title: "UEFI Secure Boot: Microsoft 2023 Certificate Transition"
---

# UEFI Secure Boot: Microsoft 2023 Certificate Transition

This page explains the June 2026 expiration of the Microsoft 2011 UEFI Secure Boot certificates, what AlmaLinux has already done about it, and what (if anything) you need to do on your systems.

## TL;DR

- **Your existing AlmaLinux systems will not stop booting.** UEFI Secure Boot does not check certificate expiration dates at boot time. Everything that boots today keeps booting after June 2026.
- **The latest shim in AlmaLinux 9 and 10 for x86_64 is dual-signed** with both the Microsoft 2011 and 2023 certificates, so it boots on systems that have either (or both) certificate enrolled. **No action is required right now.**
- To stay compatible with _future_ Secure Boot components and revocation (dbx) updates, you should enroll the Microsoft 2023 certificates on systems that don't have them yet. The recommended way to do this on AlmaLinux is **fwupd**: `fwupdmgr refresh && fwupdmgr update`.

## Background: what is expiring and why it matters

UEFI Secure Boot on most hardware is anchored to certificates operated by Microsoft. Three of them, issued in 2011, expire in 2026:

| Certificate                           | Expires       | Role                                                            |
| ------------------------------------- | ------------- | --------------------------------------------------------------- |
| Microsoft Corporation KEK CA 2011     | June 24, 2026 | Authorizes updates to the Secure Boot databases (db/dbx)        |
| Microsoft Corporation UEFI CA 2011    | June 27, 2026 | Signs third-party boot components, including the Linux **shim** |
| Microsoft Windows Production PCA 2011 | October 2026  | Signs Windows boot components (not used by Linux)               |

Their replacements are **Microsoft Corporation KEK 2K CA 2023**, **Microsoft UEFI CA 2023**, and **Microsoft Option ROM UEFI CA 2023** (in the 2023 hierarchy, the third-party CA was split into a separate option ROM CA).

The expiration does **not** invalidate already-signed binaries — firmware does not check signature expiry at boot. What changes is that Microsoft can no longer _sign new artifacts_ with the 2011 CAs after they expire. The practical consequences:

- Future shim builds, option ROM firmware, and other third-party EFI binaries will be signed only by the 2023 CAs. Systems whose firmware `db` does not contain the 2023 certificates will refuse to boot them under Secure Boot.
- Future revocation (dbx) and db updates are signed by the KEK. Systems without the 2023 KEK may be unable to receive future security revocations.

See the upstream guidance for distro maintainers in [rhboot/shim-review#547](https://github.com/rhboot/shim-review/issues/547) and Red Hat's article [Secure Boot certificate changes in 2026: Guidance for RHEL environments](https://access.redhat.com/articles/7128933) ([developers.redhat.com version](https://developers.redhat.com/articles/2026/02/04/secure-boot-certificate-changes-2026-guidance-rhel-environments)). AlmaLinux follows the same approach as RHEL.

## Current AlmaLinux status

| Release      | Latest shim                | x86_64 signature                | aarch64 signature |
| ------------ | -------------------------- | ------------------------------- | ----------------- |
| AlmaLinux 10 | `shim-16.1-4.el10.alma.1`  | 2011 **and** 2023 (dual-signed) | 2023 only         |
| AlmaLinux 9  | `shim-16.1-7.el9.alma.1`   | 2011 **and** 2023 (dual-signed) | 2023 only         |
| AlmaLinux 8  | `shim-15.8-4.el8_9.alma.2` | 2011 only                       | 2011 only         |

- **AlmaLinux 9 and 10, x86_64:** the current shim carries both signatures, so it boots regardless of whether your firmware trusts the 2011 CA, the 2023 CA, or both. **No immediate action is required.**
- **AlmaLinux 9 and 10, aarch64:** the current shim is signed with the **Microsoft UEFI CA 2023 only** (the same is true for RHEL). If your aarch64 system boots with Secure Boot enabled today, its firmware already trusts the 2023 CA — **no action is required.** You may still want to verify the KEK (Step 1) to keep receiving future Secure Boot database updates.
- **AlmaLinux 8:** the current shim is signed with the 2011 CA only. An updated shim is planned following RHEL 8 (expected June 2026). Note that the fwupd version in AlmaLinux 8 (1.7.8) is too old to deliver the certificate updates described below; AlmaLinux 8 users should rely on vendor firmware updates or the manual method.

You can check which certificates your shim is signed with:

```bash
sudo dnf -y install pesign
pesign -S -i /boot/efi/EFI/almalinux/shimx64.efi
```

A dual-signed shim shows two signatures, one issued by `Microsoft Corporation UEFI CA 2011` and one by `Microsoft UEFI CA 2023`.

## Step 1: Check whether your system already trusts the 2023 CAs

First confirm Secure Boot is enabled (if it is disabled, none of this affects you):

```bash
$ mokutil --sb-state
SecureBoot enabled
```

Check the signature database (`db`) for the 2023 third-party CA:

```bash
$ mokutil --db | grep 'UEFI CA 2023'
        Subject: C=US, O=Microsoft Corporation, CN=Microsoft UEFI CA 2023
```

Check the KEK:

```bash
$ mokutil --kek | grep 'KEK 2K CA 2023'
        Subject: C=US, O=Microsoft Corporation, CN=Microsoft Corporation KEK 2K CA 2023
```

If both commands print a match, your system is already up to date and you are done. If they print nothing, continue below.

Many recent machines already received the 2023 certificates through a firmware (BIOS/UEFI) update from the hardware vendor, so check for vendor firmware updates first — that is the cleanest path.

## Step 2 (recommended): Enroll the 2023 certificates with fwupd

Like RHEL, AlmaLinux recommends **fwupd** for Secure Boot variable updates. fwupd delivers Microsoft's signed db/KEK update payloads through the [Linux Vendor Firmware Service (LVFS)](https://fwupd.org/), and contains quirk handling for firmware implementations that need special treatment.

Support for UEFI db and KEK updates was added in fwupd **2.0.8**. AlmaLinux 9 and 10 ship fwupd **2.0.19** in BaseOS, so the stock package is sufficient:

```bash
sudo dnf install -y fwupd
fwupd --version
```

Refresh metadata and apply available updates:

```bash
sudo fwupdmgr refresh
sudo fwupdmgr update
sudo reboot
```

If updates are available for your system, `fwupdmgr update` will list devices such as _UEFI db_ and _KEK_ with pending _Secure Boot_ certificate updates and prompt for confirmation. The new certificates only become visible after a reboot.

> **Note:** older fwupd versions (before 2.0.8) do not attempt db/KEK updates at all and may appear to "succeed" while doing nothing. Always verify the result (Step 3) instead of trusting the tool output alone.

## Step 3: Verify after reboot

```bash
mokutil --db  | grep 'UEFI CA 2023'
mokutil --kek | grep 'KEK 2K CA 2023'
```

Both should now print the corresponding `Subject:` lines shown in Step 1. If the `db` entry is present but the KEK update did not apply, see the caveats below — the db update is the time-critical part for being able to boot future 2023-signed components; the KEK matters for receiving future db/dbx updates.

## Alternative: manual enrollment without fwupd

For air-gapped systems, or if fwupd does not offer the update on your platform, Microsoft publishes the signed authenticated-variable update payloads in the [microsoft/secureboot_objects](https://github.com/microsoft/secureboot_objects) repository. The db update can be appended with `efivar` (available in the standard AlmaLinux repositories):

```bash
sudo dnf install -y efivar
curl -LO https://raw.githubusercontent.com/microsoft/secureboot_objects/main/PostSignedObjects/Optional/DB/amd64/DBUpdate3P2023.bin

# 103 = 0x67: NV + BS + RT + TIME_BASED_AUTH + APPEND_WRITE
sudo efivar \
  --name d719b2cb-3d3a-4596-a3bc-dad00e67656f-db \
  --append \
  --attributes 103 \
  -f DBUpdate3P2023.bin
```

> **Note:** the attribute value is given in decimal (`103`) because the efivar versions in AlmaLinux 8 and 9 (37 and 38) do not accept hexadecimal input and would silently parse `0x67` as `0`. The short `-f` option is used because efivar 37 (AlmaLinux 8) names the long option `--fromfile` while 38/39 name it `--datafile`.

Then reboot and verify as in Step 3. The matching KEK update (`PostSignedObjects/KEK/Microsoft/KEKUpdate_Microsoft_PK1.bin`) can be applied the same way to the `KEK` variable (`8be4df61-93ca-11d2-aa0d-00e098032b8c-KEK`), but note that a KEK update must be signed by the Platform Key (PK) chain enrolled on your machine — on platforms whose PK is not Microsoft's, this particular payload will not apply (check `mokutil --pk`, and see [shim-review#547](https://github.com/rhboot/shim-review/issues/547) for assembling the right KEK update for other PK vendors).

## Virtual machines

**KVM/QEMU (libvirt) guests:** the Secure Boot certificates of a VM come from the OVMF firmware variable template on the _host_. Update the `edk2-ovmf` package on the hypervisor — current builds include both the 2011 and 2023 Microsoft certificates. New VMs created afterwards get the new certificate set automatically. Existing VMs keep their old NVRAM; either apply the update inside the guest exactly as on physical machines (fwupd), or recreate the guest NVRAM from the new template (`virsh start <vm> --reset-nvram`, libvirt 8.1.0+ — note this also resets boot order and any MOK enrollments).

**VMware vSphere:** the certificates of a VM come from its virtual EFI firmware and are stored in the VM's NVRAM. On **ESXi 9.x** and **ESXi 8.0 U3j (P09)** or later, VMs with hardware version 14+ are initialized with the 2023 certificates automatically. VMs on older ESXi builds carry only the 2011 certificates; Broadcom recommends updating in-guest using the OS vendor's method — i.e. fwupd as described above. Note that the KEK update can fail on VMs created before ESXi 8.0 U3j because the expected Platform Key is missing from the VM's variable store; the db update is the part that matters for booting future AlmaLinux components. See Broadcom KB [Secure Boot Certificate Expirations and Update Failures in VMware Virtual Machines](https://knowledge.broadcom.com/external/article/423893/secure-boot-certificate-expirations-and.html).

**Azure (Trusted Launch VMs):** the same in-guest fwupd procedure applies and is the recommended method. The manual method above also works; the `DBUpdate3P2023.bin` payload is the relevant one. The Microsoft KEK update may not apply on some Azure platform configurations — the db update is sufficient to keep booting future 2023-signed AlmaLinux components. Verify with `mokutil` after reboot as usual.

**Google Cloud (Shielded VM):** instances created on or after **November 7, 2025** already include the 2023 certificates. For older instances, Google recommends the same in-guest update; their [update guide](https://docs.cloud.google.com/compute/docs/security/ms-secure-boot-certificates-update) uses fwupd (2.0.10 or later — the fwupd shipped in AlmaLinux 9 and 10 qualifies) or the manual payloads from `microsoft/secureboot_objects`. See also Google's [expiration overview](https://docs.cloud.google.com/compute/docs/security/ms-secure-boot-certificates-expiration).

**AWS (EC2):** Secure Boot on EC2 is opt-in: it is only active on instances launched from an AMI registered with UEFI boot mode and a UEFI variable store (`UefiData`) containing Secure Boot keys — there is no platform-wide certificate rollout. On instances where Secure Boot is enabled with the Microsoft 2011 certificates, apply the same in-guest update (fwupd or the manual method above) and verify with `mokutil`. When building your own Secure Boot-enabled AMIs, include the 2023 certificates in the variable store at registration time. See [UEFI Secure Boot for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html).

## Caveats and warnings

- **TPM-bound disk encryption (PCR 7):** updating PK/KEK/db/dbx changes the TPM PCR 7 measurement. If you use TPM auto-unlock for LUKS bound to PCR 7 (`systemd-cryptenroll`, `clevis`), re-enroll/reseal the binding after the update, and make sure you have your LUKS passphrase available before rebooting.
- **Vendor firmware quirks:** some platforms (HP and Fujitsu are known examples) block standalone db updates from the OS. Do not force the update if it fails — check for a vendor firmware (BIOS/UEFI) update instead, which typically delivers the 2023 certificates itself.
- **Do not remove or revoke the 2011 CA.** Existing artifacts and option ROMs depend on it, and on most firmware a dbx revocation of the 2011 CA would also block dual-signed binaries. The 2011 CA is expected to remain trusted for the foreseeable future.

## References

- [Guidance for the Microsoft 2023 Secure Boot CA Transition (rhboot/shim-review#547)](https://github.com/rhboot/shim-review/issues/547)
- [Red Hat: Secure Boot certificate changes in 2026 — Guidance for RHEL environments](https://access.redhat.com/articles/7128933)
- [Red Hat Developer article version](https://developers.redhat.com/articles/2026/02/04/secure-boot-certificate-changes-2026-guidance-rhel-environments)
- [Microsoft: Windows Secure Boot certificate expiration and CA updates](https://support.microsoft.com/en-us/topic/windows-secure-boot-certificate-expiration-and-ca-updates-7ff40d33-95dc-4c3c-8725-a9b95457578e)
- [microsoft/secureboot_objects — signed update payloads](https://github.com/microsoft/secureboot_objects)
- [fwupd / LVFS](https://fwupd.org/)
