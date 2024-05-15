---
title: 'AWS'
---
# AlmaLinux OS Amazon Web Services AMIs

AlmaLinux OS offers Amazon Machine Images in a number of formats and regions for consumption on AWS. All AlmaLinux OS AMIs are completely free of charge regardless of the deployment channel. 

:::tip
To learn more about AWS AMIs please see the [AWS EC2 Documentation on AMIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html). There are currently 2 deployment channels available: [Marketplace](#aws-marketplace) and [Community](#community-amis).
:::

## Contributing
You can find more information about how these, and other cloud images are built on our [Cloud Images GitHub Repository](https://github.com/AlmaLinux/cloud-images). Join our [Cloud SIG on Mattermost](https://chat.almalinux.org/almalinux/channels/sigcloud) to help out with the effort or for support. You can also discuss on our [Cloud SIG Forum](https://forums.almalinux.org/c/sigs/cloud-sig/10) and on our [AlmaLinux Community Reddit](https://www.reddit.com/r/AlmaLinux).

## AWS Marketplace
The AWS Marketplace is a curated digital catalog used to find, deploy and manage software offerings. All AWS Marketplace products undergo thorough review and vetting by the AWS team to ensure security and quality.

The AlmaLinux OS Foundation's [official AlmaLinux OS images](https://aws.amazon.com/marketplace/seller-profile?id=529d1014-352c-4bed-8b63-6120e4bd3342) are available via the AWS Marketplace at the links provided:

<table align="center">
    <tr>
        <td align="center">AlmaLinux OS 8</td>
        <td align="center"><a href="https://aws.amazon.com/marketplace/pp/prodview-mku4y3g4sjrye">x86_64</a></td>
        <td align="center"><a href="https://aws.amazon.com/marketplace/pp/prodview-zgsymdwitnxmm">arm64</a></td>
    </tr>
    <tr>
        <td align="center">AlmaLinux OS 9</td>
        <td align="center"><a href="https://aws.amazon.com/marketplace/pp/prodview-ykmb6re2rcouy">x86_64</a></td>
        <td align="center"><a href="https://aws.amazon.com/marketplace/pp/prodview-pvttztrj2uzjk">arm64</a></td>
    </tr>
</table>

## Community AMIs

Community AMIs are images that are shared directly by the AlmaLinux OS Foundation for others to utilize directly within their infrastructure. Below is a complete list of currently published AMIs and their corresponding IDs. For purposes of automation and integration into build tools and CI/CD pipelines, this list is also available as a [CSV](https://wiki.almalinux.org/ci-data/aws_amis.csv) file.

***Additional Regions Coming Soon***

<Content :page-key="$site.pages.find(p => p.path === '/cloud/AWS_AMIS.html').key"/>
