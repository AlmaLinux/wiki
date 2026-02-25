---
title: "User Guide: AlmaLinux *Software Bill of Materials (SBOM)*"
---

# AlmaLinux SBOM User Guide

## About _SBOM_

_SBOM (Software Bill of Materials)_ is a list of all open-source and third-party components used in a codebase, along with their licensing information, version numbers, and any known vulnerabilities.

[AlmaLinux Build System](https://github.com/AlmaLinux/build-system) has implemented _SBOM_ into its pipeline for security purposes, such as tracing the build process, ensuring that only trusted sources are used, and reducing the risk of data corruption.

## About immudb

The AlmaLinux SBOM data is stored in Codenotary's [immudb](https://docs.immudb.io/master/immudb.html#what-is-immudb), which ensures data integrity and provides a chain of trust and traceability. Each stage of the build process goes through authentication and notarization.

AlmaLinux OS Team has developed [alma-sbom](https://github.com/AlmaLinux/alma-sbom), the SBOM data management utility for AlmaLinux, that generates SBOM records and allows users to track a package to verify if it is notarized and trusted.

## Working with _SBOM_

### Get the AlmaLinux SBOM tool

To access the SBOM information for AlmaLinux, you need an internet connection to retrieve the records from our AlmaLinux immudb instance.
You also need to install the AlmaLinux SBOM tool:

- Clone the [alma-sbom](https://github.com/AlmaLinux/alma-sbom) repository.
- Navigate to _alma-sbom_ directory.
- Create a Python Virtual Environment:
  ```
  python3.9 -m venv env
  ```
- Activate the Virtual Environment:
  ```
  source env/bin/activate
  ```
- Install dependencies:
  ```
  pip install .
  ```
  Among installed dependencies there's [immudb-wrapper](https://github.com/AlmaLinux/immudb-wrapper), that is used to interact with our immudb database to save or get SBOM information based on the rpm package hash.

### Get the package you want to inspect

To inspect a desired package for _SBOM_ information, you need the package information that can be found in [AlmaLinux Build System](https://build.almalinux.org/). You can use the package _build-id_ or its _rpm-package-hash_.

- Navigate to [AlmaLinux Build System](https://build.almalinux.org/).
- Find the package you want to inspect in the **Feed** or by using the **Search**.
- Click **Details**.
  ![image](/images/sbom-details.webp)
- Now you can see the **build-id** and the package's **rpm-package-hash**. The cryptographic hash ensures the integrity of this SBOM, meaning it hasn't been tampered with since being stored in immudb.
  You can see and copy the hash by hovering the mouse on the _key_ sign and by clicking it.  
   ![image](/images/sbom-details2.webp)

## Using the AlmaLinux SBOM tool

Run the `python alma_sbom.py` command with the following arguments to get an SBOM record for your package:

- `--output-file` - the file name you want to save the generated SBOM to. The file format can be _JSON_ or _XML_. Without providing this argument, generated SBOM results will be shown in the terminal as an output.
- `--file-format` - indicate a desired SBOM format and file format you want to generate. _CycloneDX_ and _SPDX_ SBOM types are supported. The file format can be _JSON_ or _XML_.
- `--build-id` or `--rpm-package-hash` - define one of these arguments, you can find them in the [AlmaLinux Build System](https://build.almalinux.org/).

Here is the command example of generating an SBOM record using the build ID option:

```bash
python alma_sbom.py --output-file 17812.json --file-format cyclonedx-json --build-id 17812
```

The command example with the immudb hash of the package:

```bash
python alma_sbom.py --output-file 17812.json --file-format cyclonedx-json --rpm-package-hash 911945c71710c83cf6f760447c32d8d6cae737dc
```

##### An example output of Cyclonedx format:

:::details

```bash
{
    "$schema": "http://cyclonedx.org/schema/bom-1.4.schema.json", # schema version from CycloneDX
    "bomFormat": "CycloneDX", # SBOM format CycloneDX
    "specVersion": "1.4",
    "serialNumber": "urn:uuid:fb4f1edb-b227-4609-baae-9be629230e0e",
    "version": 2,
    "metadata": {
        "timestamp": "2024-09-13T10:05:25.686513+00:00", # timestamp when the SBOM record was generated
        "tools": [ # a list of tools and resources that were used to generate the SBOM record
            {
                "vendor": "AlmaLinux OS Foundation",
                "name": "AlmaLinux Build System",
                "version": "0.1"
            },
            {
                "vendor": "AlmaLinux OS Foundation",
                "name": "Immudb Wrapper",
                "version": "0.1.2"
            },
            {
                "vendor": "AlmaLinux OS Foundation",
                "name": "alma-sbom",
                "version": "0.0.2"
            },
            {
                "vendor": "CycloneDX",
                "name": "cyclonedx-python-lib",
                "version": "2.7.1",
                "externalReferences": [
                    {
                        "url": "https://github.com/CycloneDX/cyclonedx-python-lib/actions",
                        "type": "build-system"
                    },
                   ...
                    {
                        "url": "https://cyclonedx.org",
                        "type": "website"
                    }
                ]
            }
        ],
        "component": { # a component (package) the SBOM record was generated for
            "type": "library", # type defined according to CycloneDX
            "bom-ref": "c60e926a-11f5-483b-aadc-582ce451fb07", # BOM reference
            "author": "eabdullin1 <55892454+eabdullin1@users.noreply.github.com>", # build author
            "name": "build-17812", # the build ID
            "properties": [ # a list of the component's properties
                {
                    "name": "almalinux:albs:build:ID", # build ID
                    "value": "17812"
                },
                {
                    "name": "almalinux:albs:build:URL", # build URL
                    "value": "https://build.almalinux.org/build/17812"
                },
                {
                    "name": "almalinux:albs:build:timestamp", # timestamp when the build was created in AlmaLinux Build System
                    "value": "2024-09-03T13:17:19.527127"
                }
            ]
        }
    },
    "components": [ # a list of components (packages) that are build artifacts and package metadata
        {
            "type": "library",
            "bom-ref": "7e44ddb0-86f7-4d1f-96a4-685f0725e3da",
            "publisher": "AlmaLinux OS Foundation",
            "name": "nginx",
            "version": "1.20.1",
            "hashes": [
                {
                    "alg": "SHA-256",
                    "content": "f8e2a823ffc9fe9311dac3e3a50c349c3a0689b951656fefa955cd4405ddf510"
                }
            ],
            "cpe": "cpe:2.3:a:almalinux:nginx:1\\:1.20.1-16.el9_4.1:*:*:*:*:*:*:*",
            "purl": "pkg:rpm/almalinux/nginx@1.20.1-16.el9_4.1?arch=x86_64&epoch=1",
            "properties": [
                {
                    "name": "almalinux:albs:build:ID",
                    "value": "17812"
                },
                ...
                {
                    "name": "almalinux:albs:build:source:gitCommitImmudbHash", # each build artifact is notarized with immudb
                    "value": "911945c71710c83cf6f760447c32d8d6cae737dc"
                },
               ...
            ]
        },
        ...

```

:::

##### An example output of SPDX format:

:::details

```bash
{
    "SPDXID": "SPDXRef-DOCUMENT", # identifies as an SPDX format
    "annotations": [ # metadata related to the SBOM
        {
            "annotationDate": "2024-09-13T12:43:11Z", # timestamp when the SBOM record was generated
            "annotationType": "OTHER",
            "annotator": "Tool: alma-sbom 0.0.2",
            "comment": "almalinux:albs:build:ID=17812" # build ID
        },
        {
            "annotationDate": "2024-09-13T12:43:11Z",
            "annotationType": "OTHER",
            "annotator": "Tool: alma-sbom 0.0.2",
            "comment": "almalinux:albs:build:URL=https://build.almalinux.org/build/17812" # build URL
        },
        {
            "annotationDate": "2024-09-13T12:43:11Z",
            "annotationType": "OTHER",
            "annotator": "Tool: alma-sbom 0.0.2",
            "comment": "almalinux:albs:build:timestamp=2024-09-03T13:17:19.527127" # timestamp for when the build was created
        }
    ],
    "creationInfo": { # information about when SBOM was generated
        "created": "2024-09-13T12:43:11Z", #timestamp
        "creators": [ # tools used to generate SBOM: the AlmaLinux Build System, alma-sbom tool, immudb wrapper, and SPDX.=
            "Organization: AlmaLinux OS Foundation (cloud-infra@almalinux.org)",
            "Tool: AlmaLinux Build System 0.1",
            "Tool: alma-sbom 0.0.2",
            "Tool: Immudb Wrapper 0.1.2",
            "Tool: spdx-tools 0.8"
        ]
    },
    "dataLicense": "CC0-1.0", #  the data is public domain.
    "name": "build-17812", # the build ID being tracked
    "spdxVersion": "SPDX-2.3",
    "documentNamespace": "https://security.almalinux.org/spdx-build-17812-e1b3e264-6c82-4052-b42d-fb88de7ef2bc", # a unique URL that identifies this particular SBOM
    "packages": [
        {
            "SPDXID": "SPDXRef-0",
            "annotations": [
                {
                    "annotationDate": "2024-09-13T12:43:11Z",
                    "annotationType": "OTHER",
                    "annotator": "Tool: alma-sbom 0.0.2",
                    "comment": "almalinux:package:epoch=1"
                },
                ...
                {
                    "annotationDate": "2024-09-13T12:43:11Z",
                    "annotationType": "OTHER",
                    "annotator": "Tool: alma-sbom 0.0.2",
                    "comment":  "almalinux:sbom:immudbHash=f8e2a823ffc9fe9311dac3e3a50c349c3a0689b951656fefa955cd4405ddf510"
                    # this is the cryptographic hash stored in immudb
                },
```

:::

## Contribute

If you have a question, want to file a bug, please, create an [issue](https://github.com/AlmaLinux/alma-sbom/issues) and reach out to us trough the [SIG/Build System ](https://chat.almalinux.org/almalinux/channels/build-system) chat channel.

Interested in contributing to the project?

- Fork the [repository](https://github.com/AlmaLinux/alma-sbom).
- Create a new feature branch.
- Write your change.
- Submit a pull request.
- The SIG members will appreciate and review your contribution!
