---
title: "Oracle Cloud Infrastructure"
---

# AlmaLinux OS in Oracle Cloud Infrastructure

AlmaLinux offers images for Oracle Cloud Infrastructure across all OCI regions via the [Oracle Cloud Marketplace](https://marketplace.oracle.com/). Images are deployable for Regular, Shielded and ARM type instances via the Oracle Cloud Marketplace, Partner Image on Oracle Cloud Infrastructure Console and [OCI CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm). The images are completely free of charge regardless of the deployment channel.

## About Oracle Cloud Infrastructure

Oracle Cloud Marketplace is an online store—a one-stop shop—selling hundreds of business apps and professional services that complement your existing Oracle Cloud implementation.
All apps and services on the marketplace are offered by approved, registered, and expert partners and developers. Plus, Oracle has vetted, reviewed, and approved each product.

## Where to get the image and guidance steps

The official AlmaLinux OS images are available on [Oracle Cloud Marketplace](https://marketplace.oracle.com/partnerHomes/125035508), one listing per AlmaLinux OS version and architecture. Each listing holds all published versions of the image, the latest being the default:

| Listing                         | Marketplace page                                               | Listing ID                                                                                 |
| ------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| AlmaLinux OS 8 (x86_64)         | [125544666](https://marketplace.oracle.com/listings/125544666) | `ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyaluymfoirbzvdk4wd4zhmvqnsqeccbjxmpupjoi7nlzua` |
| AlmaLinux OS 8 (AArch64)        | [125567282](https://marketplace.oracle.com/listings/125567282) | `ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyaeh76qyvjkhpqtauq7f7ap34uzggghsnskdvj2kj5kzvq` |
| AlmaLinux OS 9 (x86_64)         | [127985411](https://marketplace.oracle.com/listings/127985411) | `ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyah2jjobsx33jeohf6cgaonlykxrrtjrjr6lknnnnekaqa` |
| AlmaLinux OS 9 (AArch64)        | [127985893](https://marketplace.oracle.com/listings/127985893) | `ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyawn27nqjsbxh4xwqgyhqzjniaio57n3dwibgzb5b4wodq` |
| AlmaLinux OS 10 (x86_64)        | [189119150](https://marketplace.oracle.com/listings/189119150) | `ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyadqutnu6o4pr54h5c6ctigrnrtenr63qwk4pr7gqykpgq` |
| AlmaLinux OS 10 (AArch64/ARM64) | [189119919](https://marketplace.oracle.com/listings/189119919) | `ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyavtqq2zm2dezcdmxqq2uys57x6ol4ulx2lb7c2cgfoirq` |

The images are Marketplace (partner) images. They are not listed by `oci compute image list`, which shows only the Oracle platform images and the custom images in your compartment, and the Marketplace page number is a listing ID, not an image OCID.

### Oracle Cloud Infrastructure Console

On the Marketplace page of the listing, click **Get App**, or, when creating an instance, in the **Image and shape** section click **Change image**, select **Partner images** as the image source and search for AlmaLinux. Review and accept the terms; the Console does this once per compartment.

### OCI CLI

You can deploy the images using the [OCI CLI](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm). The steps below need [jq](https://jqlang.org/) for step 2.

1. Get the image OCID of a listing's latest version. Use the listing ID from the table above; the Marketplace page number works too:

   ```shell
   LISTING_ID=ocid1.mktpublisting.oc1.iad.amaaaaaac2u4zjyadqutnu6o4pr54h5c6ctigrnrtenr63qwk4pr7gqykpgq  # AlmaLinux OS 10 (x86_64)
   VERSION=$(oci marketplace listing get --listing-id "$LISTING_ID" \
     --query 'data."default-package-version"' --raw-output)
   IMAGE_ID=$(oci marketplace package get --listing-id "$LISTING_ID" --package-version "$VERSION" \
     --query 'data."image-id"' --raw-output)
   echo "$VERSION $IMAGE_ID"
   ```

   The image OCID is the same in all regions. To pick an older version, list them with `oci marketplace package list --listing-id "$LISTING_ID" --all --query 'data[]."package-version"'` and set `VERSION` to the one you need.

2. Accept the image terms, once per compartment and image version (skip it if you already did it in the Console):

   ```shell
   COMPARTMENT_ID=<your compartment OCID>
   APP_LISTING_ID=$(oci marketplace package get --listing-id "$LISTING_ID" --package-version "$VERSION" \
     --query 'data."app-catalog-listing-id"' --raw-output)
   AGREEMENTS=$(oci compute pic agreements get --listing-id "$APP_LISTING_ID" --resource-version "$VERSION")
   oci compute pic subscription create --compartment-id "$COMPARTMENT_ID" \
     --listing-id "$APP_LISTING_ID" --resource-version "$VERSION" \
     --signature "$(echo "$AGREEMENTS" | jq -r '.data.signature')" \
     --eula-link "$(echo "$AGREEMENTS" | jq -r '.data."eula-link"')" \
     --oracle-tou-link "$(echo "$AGREEMENTS" | jq -r '.data."oracle-terms-of-use-link"')" \
     --time-retrieved "$(echo "$AGREEMENTS" | jq -r '.data."time-retrieved"')"
   ```

3. Launch an instance from the image, for example:

   ```shell
   oci compute instance launch --compartment-id "$COMPARTMENT_ID" \
     --availability-domain <availability domain> --subnet-id <subnet OCID> \
     --shape VM.Standard.E5.Flex --shape-config '{"ocpus": 1, "memoryInGBs": 8}' \
     --image-id "$IMAGE_ID" --assign-public-ip true \
     --ssh-authorized-keys-file ~/.ssh/id_ed25519.pub
   ```

   For the AArch64 images use an Ampere shape, such as `VM.Standard.A1.Flex`. Log in as the `opc` user.

For a full range of options that are customizable from the CLI please check the [OCI CLI Reference Docs](https://docs.oracle.com/en-us/iaas/tools/oci-cli/latest/oci_cli_docs/index.html).
