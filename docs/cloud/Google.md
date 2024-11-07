---
title: 'Google Cloud'
---

# AlmaLinux OS Google Cloud Platform

:::warning
Note that the following images are provided by Google, not the [AlmaLinux OS SIG/Cloud](/sigs/Cloud.html). Therefore, we are not responsible for any defects that are specific to the images provided by Google.
:::

AlmaLinux OS Images for Google Cloud are available via the [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/browse?filter=partner:AlmaLinux) as well as via the `gcloud` CLI.

* [AlmaLinux OS 8](https://console.cloud.google.com/marketplace/product/almalinux-cloud/almalinux-8)
* [AlmaLinux OS 9](https://console.cloud.google.com/marketplace/product/almalinux-cloud/almalinux-9)

For `cloud` AlmaLinux OS images are available in the almalinux-cloud project. To list AlmaLinux images, use the following gcloud command:

```shell
gcloud compute images list --project almalinux-cloud --no-standard-images
```
