---
title: "Google Cloud"
---

# AlmaLinux OS on Google Cloud Platform

AlmaLinux OS is a fully supported operating system on Google Cloud Platform (GCP) and is available as a default offering in both the `gcloud` CLI and the Google Cloud Console GUI. Images are published by the AlmaLinux OS Foundation under the `almalinux-cloud` project and are completely free of license fees — you pay only for the underlying Compute Engine resources.

Google Cloud publishes official details for AlmaLinux as a supported operating system in the [Compute Engine OS details](https://docs.cloud.google.com/compute/docs/images/os-details#almalinux) documentation.

## Supported versions

The following AlmaLinux OS releases are Generally Available on Compute Engine:

| Version | x86_64 image family | ARM64 image family | End of Support |
| --- | --- | --- | --- |
| AlmaLinux 10 | `almalinux-10` | `almalinux-10-arm64` | May 2035 |
| AlmaLinux 9  | `almalinux-9`  | `almalinux-9-arm64`  | May 2032 |
| AlmaLinux 8  | `almalinux-8`  | `almalinux-8-arm64`  | May 2029 |

All image families live in the `almalinux-cloud` project.

## Image features

AlmaLinux images on Google Cloud are built by the AlmaLinux OS Foundation and are preconfigured for Compute Engine. Each image includes:

- The [Google Cloud guest environment](https://docs.cloud.google.com/compute/docs/images/guest-environment) and the `gcloud` CLI pre-installed
- [OS Login](https://docs.cloud.google.com/compute/docs/oslogin) support
- The OS Config agent for [VM Manager](https://docs.cloud.google.com/compute/docs/vm-manager) — OS inventory, OS policies, patch management, and vulnerability reporting
- Automatic security updates via `dnf-automatic` (within the same major version)
- 10 GB default boot disk with a GPT partition table and EFI support
- Grub boot timeout set to `0` for faster startup
- SSH password authentication and root login disabled by default

### Platform and hardware support

- **Disks:** SCSI and NVMe
- **Networking:** gVNIC, IDPF, multiple NICs, Tier 1 networking up to 200 Gbps, jumbo frames
- **Security:** Shielded VM, Confidential VM (AMD SEV and SEV-SNP), and Intel TDX (x86 only)
- **GPUs:** NVIDIA H200, H100, A100, L4, and T4/V100/P100/P4 on N1 machine types
- **Lifecycle:** Suspend/resume supported

## Image update cadence

The AlmaLinux OS Foundation publishes refreshed images to the `almalinux-cloud` project on the **second Tuesday of each month**, incorporating the latest security and package updates. Because image families always resolve to the most recent image, new VMs created via `--image-family=almalinux-N` automatically pick up the new build without any change to your tooling. Existing VMs continue to receive in-place security updates via `dnf-automatic` between image refreshes.

## Google Cloud Console

When creating a new VM instance in the [Cloud Console](https://console.cloud.google.com/compute/instancesAdd), choose **Boot disk → Change**, then select **AlmaLinux** from the **Operating system** drop-down. You can then pick the desired version (8, 9, or 10) and architecture (x86_64 or ARM64).

## gcloud CLI

### Listing available images

List all AlmaLinux images published in the `almalinux-cloud` project:

```shell
gcloud compute images list --project almalinux-cloud --no-standard-images
```

To get the most recent image for a specific family:

```shell
gcloud compute images describe-from-family almalinux-9 --project almalinux-cloud
```

### Creating VM instances

Reference an image family with `--image-family` and `--image-project` so new instances always use the latest published image.

#### AlmaLinux OS 10 (x86_64)

```shell
gcloud compute instances create my-vm \
  --image-family=almalinux-10 \
  --image-project=almalinux-cloud
```

#### AlmaLinux OS 9 (x86_64)

```shell
gcloud compute instances create my-vm \
  --image-family=almalinux-9 \
  --image-project=almalinux-cloud
```

#### AlmaLinux OS 8 (x86_64)

```shell
gcloud compute instances create my-vm \
  --image-family=almalinux-8 \
  --image-project=almalinux-cloud
```

#### ARM64 (AArch64)

For ARM64 instances, use the `-arm64` image family along with an ARM-capable machine type such as the `t2a` series:

```shell
gcloud compute instances create my-arm-vm \
  --image-family=almalinux-9-arm64 \
  --image-project=almalinux-cloud \
  --machine-type=t2a-standard-1
```

See the [`gcloud compute instances create` reference](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create) for the full set of options.

## Importing and migrating

AlmaLinux is a supported target for [importing virtual disks, virtual appliances, and machine images](https://docs.cloud.google.com/compute/docs/import) into Compute Engine, and for [Migrate to Virtual Machines](https://migrate.google.cloud.com/migrate-compute-engine/docs/latest/reference/supported-os-versions).

## Further reading

- [Compute Engine OS details — AlmaLinux](https://docs.cloud.google.com/compute/docs/images/os-details#almalinux)
- [OS image lifecycle](https://docs.cloud.google.com/compute/docs/images/os-image-lifecycle)
- [Support and maintenance policy](https://docs.cloud.google.com/compute/docs/images/support-maintenance-policy)
- [Guest environment overview](https://docs.cloud.google.com/compute/docs/images/guest-environment)
