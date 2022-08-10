---
title: 'Azure'
permalink: /cloud/Azure
---
# AlmaLinux OS in Azure Cloud

AlmaLinux offers images for Azure across all Azure regions via the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/almalinux.almalinux). Images are deployable via the marketplace, portal and CLI and for both Gen1 and Gen2 machines. The images are completely free of charge regardless of the deployment channel. 

The AlmaLinux team and community would like to thank Microsoft Azure for their sponsorship of AlmaLinux which helped make this, and other initiatives possible.

## Contributing
You can find more information about how these, and other cloud images are built on our [Cloud Images GitHub Repository](https://github.com/AlmaLinux/cloud-images). Join our [Cloud SIG on Mattermost](https://chat.almalinux.org/almalinux/channels/sigcloud) to help out with the effort or for support. You can also discuss on our [Cloud SIG Forum](https://almalinux.discourse.group/c/sigs/cloud-sig/10) and on our [AlmaLinux Community Reddit](https://www.reddit.com/r/AlmaLinux).

## Azure Marketplace
The Azure Marketplace is a curated digital catalog used to find, deploy and manage software offerings. All Azure Marketplace products undergo thorough review and vetting by the Azure team to ensure security and quality. Additionally, the AlmaLinux image has gone through significant automated testing with Microsoft's test suite to ensure compatibility across a wide range of Azure compute resources.

The [official AlmaLinux OS 8 image](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/almalinux.almalinux) is available via the Azure Marketplace at the link provided.

## Azure Portal
When deploying a new Virtual Machine instance in the Azure portal, Select Image -> See All Images, and in the marketplace pop search for AlmaLinux.

## Azure CLI
You can easily deploy images using the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest). You can list all available images by running ` az vm image list --all --publisher almalinux`. You can then deploy by running `az vm create -n MyVm -g MyResourceGroup --image almalinux:almalinux:8_4:8.4.20210729`. For a full range of options that are customizable from the CLI please check the [Azure CLI Reference Docs](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest).
