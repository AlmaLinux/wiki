---
title: "ELevate Contribution Guide"
---

###### last updated: 2025-06-05

# Contribute to the ELevate project

We welcome contributors to the ELevate project. You can help with:

- [Adding more 3rd party repositories support](#third-party-vendors-support)
- [Testing](#contribute-to-testing)

## Third-party vendors support

Currently, the ELevate project supports the following of 3rd party repositories:

- EPEL support is currently available for upgrades to AlmaLinux OS only. **Note**, that the support works only for those packages from EL 9 that are currently available for EL 10. Unavailable packages from EL 9 will remain on the system after the upgrade.
- Docker CE - for all supported operating systems.
- MariaDB - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- nginx - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- PostgreSQL - for all supported operating systems.
- Imunify - for upgrades to EL 8.
- KernelCare - for supported operating systems excluding AlmaLinux 10, AlmaLinux Kitten 10, and CentOS Stream 10.
- TuxCare - for all supported operating systems.

This guide provides steps to integrate 3rd party repository packages into the ELevate upgrade process.
:::danger
Note, that all your 3rd party packages must be signed.
:::

- Clone the [leapp-data](https://github.com/AlmaLinux/leapp-data) repository.
- Navigate to the `vendors.d` folder. It contains the necessary files for each supported 3rd party repository.
- To add a new 3rd party repository to the ELevate process, you must create separate files and fill them out. These files **must** have the same _<vendor_name>_ part in their names:
  - `<vendor_name>_map.json` - [repository mapping file](#repository-mapping-file).
  - `<vendor_name>.repo` - [package repository information](#package-repository-file).
  - `<vendor_name>.sigs` - [list of package signatures of vendor repositories](#package-signatures-list).
  - `<vendor_name>_pes.json` - [package migration event list](#package-migration-event-list).

### Repository mapping file

The mapping `.json` file provides information on mappings between source system repositories (repositories present on the system being upgraded) and target system repositories (package repositories to be used during the upgrade).

In case the 3rd party repository is designed for 2 migration directions, you must prepare 2 mapping JSON files:

- <vendor_name>\_map.json.el8 - repository mapping file for upgrades to EL8.
- <vendor_name>\_map.json.el9 - repository mapping file for upgrades to EL9.

The mapping JSON file structure includes:

- **datetime** - a generated date-time stamp, for example: `202306191741Z`.
- **version** - version of the database, you can check the current version in the [leapp-data repository](https://github.com/AlmaLinux/leapp-data).
- Two sections, described below:
  - **mapping**
  - **repositories**

:::warning
The mapping file defines whether a vendor's packages will be included in the upgrade process. If at least one source repository listed in the file is present on the system, the vendor is considered active, and package repositories/PES events are enabled - otherwise, they **will not** affect the upgrade process.
:::

#### Mapping section

The mapping section establishes connections between repositories.

This section defines a mapping between major system versions. It contains the following elements:

- `source_major_version` - defines a major system version from which the system would be upgraded, `7` or`8`.
- `target_major_version` - defines a major system version to which the system would be elevated, `8` or`9`.
- `entries` - defines a list of repository mappings.
  - `source` - defines a source repository that will be found on a pre-upgrade system.
  - `target` - defines a target upgrade repository (or a list of repositories) that will contain new versions of packages.
  - Each source repository can map to one or multiple target repositories.
  - `source` and `target` repositories must be listed and defined in the _repository_ section and the `.pes` file, and their IDs must match.

:::tip
You can refer to MariDB examples: [mariadb_map.json.el8](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb_map.json.el8) and [mariadb_map.json.el9](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb_map.json.el9).
:::

#### Repositories section

The repositories section provides both source and target repositories information.

Each repository should contain its own unique information:

- `pesid` - ID specific to mapping/PES files, if it doesn't match, the upgrade will fail with a corresponding error.
- `entires`:
  - `major_version` - defines a major system version.
  - `repoid` - defines a repository ID. It must match its ID from its `.repo` file, but it doesn't have to match its 'pesid`.
  - `arch` - defines the system architecture for which this repository is relevant.
  - `channel` - Red Hat specific argument, defines one of the following repository channels:
    - ga - general availability (stable) repositories; the most used one.
    - beta - beta/testing repositories.
    - eus, e4s, aus, tus - stand for Extended Update Support, Update Services for SAP Solutions, Advanced Update Support, and Telco Extended Update Support respectively.
  - `repo_type` - defines one of the following repository types:
    - rpm - for RPM packages.
    - srpm - for source packages.
    - debuginfo - for packages with debug information.

:::tip
You can refer to MariDB examples: [mariadb_map.json.el8](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb_map.json.el8) and [mariadb_map.json.el9](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb_map.json.el9).
:::

### Package repository file

The package repository` .repo` file defines the vendor's package repositories that will be used during the upgrade.

In case the 3rd party repository is designed for 2 migration directories, you must prepare 2 repository files:

- <vendor_name>.repo.el8 - repository information for upgrades to EL8.
- <vendor_name>.repo.el9 - repository information for upgrades to EL9.

The repository file has the same format that is typical for YUM/DNF package repository files:

```
[repository ID]
name = repository name
baseurl = repository baseurl
gpgkey = GPG Key directory
gpgcheck = 1
enabled = 1
```

:::tip
You can also refer to MariDB examples: [mariadb.repo.el8](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb.repo.el8) and [mariadb.repo.el9](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb.repo.el9).
:::

**NOTE:** The repositories listed in this repo file are only used _during_ the upgrade. Package repositories on the post-upgrade system should be provided through updated packages or custom repository deployment.

### Package signatures list

The package signature `.sigs` file should contain the list of public signature headers that the packages are signed with.

You can find signature headers for your packages by running the following command:

```
rpm -qip <PACKAGE_NAME> | grep Signature
```

##### An example output:

```
Signature   : DSA/SHA1, Mon Aug 23 08:17:13 2021, Key ID 8c55a6628608cb71
```

The `Key ID` value after - `8c55a6628608cb71` from the example - is the public signature header you must put into the signature file.
The file format is designed to have _one signature per line_.

:::tip
You can also refer to MariDB examples: [mariadb.sigs](https://github.com/AlmaLinux/leapp-data/blob/main/vendors.d/mariadb.sigs).
:::

### Package migration event list

The package migration event list is used for complex specific package actions that can not be handled by DNF.

Typically this data can be found in the `leapp-data/vendors.d/<vendor_name>_pes.json` file in the [GitHub repository](https://github.com/AlmaLinux/leapp-data) and the `/etc/leapp/files/vendors.d/<vendor_name>_pes.json` file on a system that is being upgraded.

:::warning
Actions from PES JSON files will be in effect only for those packages that are signed **and** have their signatures in one of the active <vendor_name>.sigs files. Unsigned packages will be updated only if some signed package requires a new version, otherwise, they will be left as they are.
:::

#### Creating a `pes.json`

If your 3rd party packages don't require any additional actions, stick to the following format to create your pes.json file:

```
{
    "legal_notice": "",
    "packageinfo": [],
    "provided_data_streams": [
        "2.0"
    ],
    "timestamp": "202408081321Z"
}
```

If the packages require additional action, fill in the file to add the information for the upgrade.

- Add a new entry to the `packageinfo` array.
- `action` - defines which of the following actions will be performed for your 3rd party vendor packages. Actions **1**, **3**, **4** and **5** are the most used ones.
  - `0` - present;
    - keep the packages in `in_packageset` to ensure the repo they reside in on the target system gets enabled.
  - `1` - removed;
    - remove all packages in `in_packageset`.
  - `2` - deprecated;
    - keep the packages in `in_packageset` to ensure the repo they reside in on the target system gets enabled.
  - `3` - replaced;
    - remove all packages in `in_packageset`.
    - install parts of the `out_packageset` that are not present on the system.
    - keep the packages from `out_packageset` that are already installed.
  - `4` - split
    - install parts of the `out_packageset` that are not present on the system
    - keep the present `out_packageset`.
    - remove packages from `in_packageset` that are not present in `out_packageset`.
    - in case of package X being split into Y and Z, package X will be removed.
    - in case of package X being split into X and Y, package X will **not** be removed.
    ##### An example action structure:
    :::details
    ```
       {
        "action": 4,
        "architectures": [
            "aarch64",
            "ppc64le",
            "s390x",
            "x86_64"
        ],
        "id": 23,
        "in_packageset": {
            "package": [
                {
                    "modulestreams": [
                        null
                    ],
                    "name": "ntp",
                    "repository": "base"
                }
            ],
            "set_id": 29
        },
        "initial_release": {
            "major_version": 7,
            "minor_version": 7,
            "os_name": "CentOS"
        },
        "modulestream_maps": [
            {
                "in_modulestream": null,
                "out_modulestream": null
            }
        ],
        "out_packageset": {
            "package": [
                {
                    "modulestreams": [
                        null
                    ],
                    "name": "chrony",
                    "repository": "almalinux8-baseos"
                },
                {
                    "modulestreams": [
                        null
                    ],
                    "name": "ntpstat",
                    "repository": "almalinux8-appstream"
                }
            ],
            "set_id": 30
        },
        "release": {
            "major_version": 8,
            "minor_version": 0,
            "os_name": "AlmaLinux"
        }
    },
    ```
    :::
  - `5` - merged
    - install packages from the `out_packageset` that are not present on the system.
    - remove packages from `in_packageset` that are not present in `out_packageset`.
    - in case of packages Y and Z being merged to X, packages Y and Z will be removed.
    - in case of packages Y and Z are not being merged to X, packages Y and Z will **not** be removed .
    ##### An example action structure:
    :::details
    ```
       {
        "action": 5,
        "architectures": [
            "aarch64",
            "ppc64le",
            "s390x",
            "x86_64"
        ],
        "id": 93,
        "in_packageset": {
            "package": [
                {
                    "modulestreams": [
                        null
                    ],
                    "name": "infiniband-diags",
                    "repository": "base"
                },
                {
                    "modulestreams": [
                        null
                    ],
                    "name": "libibmad",
                    "repository": "base"
                }
            ],
            "set_id": 118
        },
        "initial_release": {
            "major_version": 7,
            "minor_version": 7,
            "os_name": "CentOS"
        },
        "modulestream_maps": [
            {
                "in_modulestream": null,
                "out_modulestream": null
            }
        ],
        "out_packageset": {
            "package": [
                {
                    "modulestreams": [
                        null
                    ],
                    "name": "infiniband-diags",
                    "repository": "almalinux8-baseos"
                }
            ],
            "set_id": 9451
        },
        "release": {
            "major_version": 8,
            "minor_version": 0,
            "os_name": "AlmaLinux"
        }
    },
    ```
    :::
  - `6` - moved to new repository
    - keep the package to make sure the repo it's in on the target system gets enabled.
    - nothing happens to `in_packageset` as it always contains one package - the same as the "out" package.
  - `7` - renamed
    - remove the `in_packageset` and install the `out_packageset` if not installed.
    - if already installed, keep the `out_packageset` as-is.
  - `8` - reinstalled
    - reinstall the `in_packageset` package during the upgrade transaction.
    - mostly useful for packages that have the same version string between major versions, and thus won't be upgraded automatically.

  :::warning
  Additional notes and exceptions:
  - any event except `present` is ignored if any of the packages in `in_packageset` are marked for removal.
  - any event except `merged` is ignored if any of the packages in `in_packageset` are neither installed nor marked for installation.
  - for `merged` events it is sufficient to have at least one package from `in_packageset` either installed or marked for installation.
    :::

- `architectures` - defines what system architectures the listed actions are effective for. \*` id` - defines entry ID, must be unique; use the scripts below to check your ID.
- `in_packageset` - defines a set of packages on the system to be upgraded.
  - The `repository` field defines the package repository the package was installed from on the source system.
- `out_packageset` - defines a set of packages to switch to.
  - The `repository` field for packages should be the same as the "Target system repo name in PES" field in the associated vendor repository mapping file.
- `initial_release` - defines a system that is to be upgraded, must include OS major and minor versions, and OS name.

* `release` - defines target system, must include OS major and minor versions, and OS name.

:::tip
The Leapp-tool doesn't force packages from `out_packageset` to be installed from the specific repository. Instead, it enables repo from `out_packageset` and then DNF installs the latest package version from all enabled repos.
:::

When creating `in_packageset` and `out_packageset` lists, please, stick to the following format:

```json
      "in_packageset": {
        "package": [
          {
            "module_stream": null,
            "name": "PackageKit",
            "repository": "base"
          },
          {
            "module_stream": null,
            "name": "PackageKit-yum",
            "repository": "base"
          }
        ],
        "set_id": 1592
      },
```

#### Validate `pes.json` and ID

- You can run the following scripts that will validate your package migration events file` pes.json` and check ID for duplication:

  ```
  #!/bin/bash

  DISTRO=$1
  PWD=$( pwd )

  if [ -z "$DISTRO" ]; then
      echo "$0 almalinux|centos|oraclelinux|rocky"
      exit 1
  fi

  JSON_FILES=$(find ${PWD}/files/${DISTRO}/ -path "./tests" -prune -o -name "*pes*.json" -print0 | xargs -0 echo)
  JSON_FILES="${JSON_FILES} $(find ${PWD}/vendors.d/ -path "./tests" -prune -o -name "*pes*.json*" -print0 | xargs -0 echo)"


  echo "Validating ${JSON_FILES} for the ${DISTRO}"
  echo

  echo "... run tests/validate_json.py"
  python3 tests/validate_json.py tests/pes-events-schema.json $JSON_FILES ||   exit 1
  echo

  echo "... run tests/validate_ids.py"
  python3 tests/validate_ids.py $JSON_FILES || exit 1
  echo

  echo "... run tests/check_debranding.py"
  python3 tests/check_debranding.py ${PWD}/files/${DISTRO}/pes-events.json || exit 1
  echo

  echo "$DISTRO - OK"
  exit 0
  ```

- Check ID for duplication and fix it:

```
  #!/bin/bash

  DISTRO=$1
  PWD=$( pwd )

  if [ -z "$DISTRO" ]; then
      echo "$0 almalinux|centos|oraclelinux|rocky"
      exit 1
  fi

  JSON_FILES=$( find ${PWD}/vendors.d/ -path "./tests" -prune -o -name "*pes*.json*" -print0 | xargs -0 echo )

  python3 tools/id_uniquifier.py ./files/${DISTRO}/pes-events.json $JSON_FILES || exit 1

  echo "$DISTRO - OK"
```

### Creating a pull request

Once you've prepared the vendor data for migration and tested the upgrade process, create a pull request to [leapp-data repository](https://github.com/AlmaLinux/leapp-data) to make it publicly available.

:::warning
If your v3rd party repository data is intended only for a specific OS and not all supported OSes, please put it in the `files/<target_OS>/vendors.d/` direction.

When testing on your system, put your vendor files to the `/etc/leapp/files/vendors.d/` direction before starting the upgrade.
:::

Next, when the pull request is submitted, the AlmaLinux Team will review it.

## Contribute to Testing

We are also seeking contributors to test new ELevate features and upgrade directions.

The current ELevate process is the following:

![image](/images/elevate-testing-scheme.svg)

- ELevate NG is designed to collect community contributions such as new support, features and bugfixes, leapp-repository, and leapp-data new versions. We test these enhancements first and welcome the community to test them. If you are interested please refer to the [ELevate NG Testing Guide](https://wiki.almalinux.org/elevate/ELevate-NG-testing-guide.html).
- ELevate NG goes to the general testing. If you are interested please refer to the [ELevate Testing Guide](https://wiki.almalinux.org/elevate/ELevate-testing-guide.html). Meanwhile, ELevate NG gathers new data, features and improvements.
- When the updated process is tested and approved, the Almainux Team releases it to ELevate Stable and publishes the announcement via [AlmaLinux Blog](https://almalinux.org/blog/), Social Media and [Mailing List](https://lists.almalinux.org/mailman3/lists/?all-lists) which you can subscribe not the miss the news!

## Get Help

For more help and assistance reach out to us in the ~migration channel on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).
