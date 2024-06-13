---
title: 'Oracle Cloud Infrastructure'
---
# AlmaLinux OS in Oracle Cloud Infrastructure

AlmaLinux offers images for Oracle Cloud Infrastructure across all OCI regions via the [Oracle Cloud Marketplace](https://cloudmarketplace.oracle.com/marketplace/en_US/homeLinkPage). Images are deployable for Regular, Shielded and ARM type instances via the Oracle Cloud Marketplace, Partner Image on Oracle Cloud Infrastructure Console and [OCI CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm). The images are completely free of charge regardless of the deployment channel.


## About Oracle Cloud Infrastructure
Oracle Cloud Marketplace is an online store—a one-stop shop—selling hundreds of business apps and professional services that complement your existing Oracle Cloud implementation.
All apps and services on the marketplace are offered by approved, registered, and expert partners and developers. Plus, Oracle has vetted, reviewed, and approved each product.

## Where to get the image and guidance steps

The official AlmaLinux OS images are available on [Oracle Cloud Marketplace](https://cloudmarketplace.oracle.com/marketplace/en_US/partners/125035508) at the links provided:


<table align="center">
    <tr>
        <td align="center">AlmaLinux OS 8</td>
        <td align="center"><a href="https://cloudmarketplace.oracle.com/marketplace/en_US/listing/125544666">x86_64</a></td>
        <td align="center"><a href="https://cloudmarketplace.oracle.com/marketplace/en_US/listing/125567282">AArch64</a></td>
    </tr>
    <tr>
        <td align="center">AlmaLinux OS 9</td>
        <td align="center"><a href="https://cloudmarketplace.oracle.com/marketplace/en_US/listing/127985411">x86_64</a></td>
        <td align="center"><a href="https://cloudmarketplace.oracle.com/marketplace/en_US/listing/127985893">AArch64</a></td>
    </tr>
</table>

### Oracle Cloud Infrastructure Console
In the **Image and shape** section, choose the image and shape. For instance: in the Image section, click Change image. Then, select Partner images as an Image source from the list.

### OCI CLI
You can easily deploy images using the [OCI CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm). You can list all available images and get the OCID of the image by running:
```shell
oci compute image list $OCID
```
You can then deploy by running:
```shell
oci compute instance launch --image-id
```
For a full range of options that are customizable from the CLI please check the [OCI CLI Reference Docs](https://docs.oracle.com/en-us/iaas/tools/oci-cli/latest/oci_cli_docs/index.html).

