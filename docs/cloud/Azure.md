---
title: 'Azure'
---
# AlmaLinux OS in Azure Cloud

AlmaLinux offers images for Azure across all Azure regions via the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/almalinux.almalinux). Images are deployable via the marketplace, portal and CLI and for both Gen1 and Gen2 machines. The images are completely free of charge regardless of the deployment channel.

The AlmaLinux team and community would like to thank Microsoft Azure for their sponsorship of AlmaLinux which helped make this, and other initiatives possible.

## Contributing
You can find more information about how these, and other cloud images are built on our [Cloud Images GitHub Repository](https://github.com/AlmaLinux/cloud-images). Join our [Cloud SIG on Mattermost](https://chat.almalinux.org/almalinux/channels/sigcloud) to help out with the effort or for support. You can also discuss on our [Cloud SIG Forum](https://almalinux.discourse.group/c/sigs/cloud-sig/10) and on our [AlmaLinux Community Reddit](https://www.reddit.com/r/AlmaLinux).

## Azure Community Gallery

Azure Community Galleries allow anyone to publicly share virtual machine images. The AlmaLinux Foundation uploads images to the gallery `almalinux-56b45196-f8a2-4e53-858a-bc4d0ebca440`. Microsoft [provides examples](https://docs.microsoft.com/en-us/azure/virtual-machines/vm-generalized-image-version?#create-a-vm-from-a-community-gallery-image) of using community gallery images via `az` CLI, the portal, and REST.

To use an image in a program, you will need to send an [ImageReference](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.management.compute.models.imagereference) like this one to the API:

```json
"imageReference": {
  "communityGalleryImageId": "/CommunityGalleries/almalinux-56b45196-f8a2-4e53-858a-bc4d0ebca440/Images/almalinux-9-gen2/Versions/latest"
}
```

## Azure Marketplace
The Azure Marketplace is a curated digital catalog used to find, deploy and manage software offerings. All Azure Marketplace products undergo thorough review and vetting by the Azure team to ensure security and quality. Additionally, the AlmaLinux image has gone through significant automated testing with Microsoft's test suite to ensure compatibility across a wide range of Azure compute resources.

The [official AlmaLinux OS 8 image](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/almalinux.almalinux) is available via the Azure Marketplace at the link provided.

The Azure Marketplace makes new images available more slowly than the Community Gallery.  It also requires each subscription using AlmaLinux for the first time to accept a EULA before successfully creating any VM with the offering.

## Azure Portal
When deploying a new Virtual Machine instance in the Azure portal, Select Image -> See All Images, and in the marketplace pop search for AlmaLinux.

## Azure CLI
You can easily deploy images using the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest). You can list all available images by running:
```shell
az vm image list --all --publisher almalinux
```
You can then deploy by running:
```shell
az vm create -n MyVm -g MyResourceGroup --image almalinux:almalinux:8_4:8.4.20210729
```
For a full range of options that are customizable from the CLI please check the [Azure CLI Reference Docs](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest).
