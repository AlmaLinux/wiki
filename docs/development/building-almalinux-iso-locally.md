---
title: "Building AlmaLinux ISO locally"
---

# Building AlmaLinux ISO locally

This guide walks you through the process of building AlmaLinux OS ISO on your local AlmaLinux OS 9 machine.

## Prerequisites

### System Requirements

- AlmaLinux OS 9 machine
- At least 6 CPU cores are recommended
- 8+ GB RAM
- 300+ GB free storage space needed for the Docker container

### Software Requirements

A basic knowledge of these tools is needed for successful building of an AlmaLinux ISO image:

- Ansible
- Docker

## Get Your Machine Ready

The following steps describe how to prepare your AlmaLinux 9 machine to build an ISO image.

- Install Docker CE.
- Clone this GitHub repository [pungi-node-public](https://github.com/AlmaLinux/pungi-node-public) and switch to the repository's folder to proceed with the next steps.
- Install Ansible from the EPEL repository:
  ```bash
  dnf install epel-release #enable the repository
  dnf install ansible #install Ansible
  ```

## Setting Up an Ansible Inventory

Before building AlmaLinux OS ISO images, you need to configure Ansible parameters.

1. **Navigate to the Inventory Directory**: Change to the cloned repository and navigate to the `inventories` folder.
   ```bash
   cd ~/pungi-node-public/inventories
   ```
2. **Copy Sample Configuration**: The `inventories` directory contains a `sample` folder with default settings. Create a copy of this folder and give it a name of your choice, for example, `almalinux`.
   ```bash
   cp -r sample almalinux
   ```
3. **Edit Inventory Settings**: Switch to the newly created directory to modify the Ansible inventory.
   ```bash
   cd ~/pungi-node-public/inventories/almalinux
   ```
   :::warning
   Don't forget to replace the `almalinux` folder name with your chosen name in the following commands and examples.
   :::
4. **Add SSH Keys**: Navigate to the `inventories/almalinux/group_vars/` directory and add your public SSH key to the `ssh_public_keys` variable in the `all.yml` file.

5. **Specify Work Directory**: Change to the `inventories/almalinux/host_vars` directory and edit the `<arch>.yml` file, where `<arch>` is your system's architecture (e.g., `x86_64.yml`).

   :::tip
   Ensure that the storage containing your work directory has at least 300 GB of free space, as it will host a local mirror with packages.
   :::
   Update the `work_directory_path` parameter in this file to specify your work directory.

6. **Configure Host Parameters**: Return to the `inventories/almalinux` directory and edit the `hosts.yml` file to update the `ansible_host` and `ansible_user` parameters. Make sure that the specified user has passwordless sudo access.

:::tip
By default, the Ansible inventory is set to build ISOs for the x86_64 architecture. In case you need to build an ISO for another architecture, make these changes:

- Replace _x86_64_ with architecture of your choice in the names of files:
  - **x86_64.yml** in the _inventories/almalinux/group_vars_ directory
  - **x86_64.yml**, **x86_64-al8.yml**, **x86_64-al9.yml** files in the _inventories/almalinux/host_vars_ directory.
- Replace mentioning of the _x86_64_ with architecture of your choice in the **hosts.yml** in the _inventories/almalinux_ directory
  :::

#### Setting Ansible to build ISOs for several architectures

By default, the Ansible inventory is set to build an ISO for one architecture. But it's also possible to build ISOs for several architectures of your choice. To do so, please, make these changes:

- Make copies of the mentioned below files and rename them according to the required architecture:
  - **x86_64.yml** in the _inventories/almalinux/group_vars_ directory
  - **x86_64.yml**, **x86_64-al8.yml**, **x86_64-al9.yml** files in the _inventories/almalinux/host_vars_ directory.
- Add required architecture as parameters to the **hosts.yml** file in the _inventories/almalinux_ directory. Don't forget to fill in the necessary parameters.

#### Setting Ansible to build an ISO for one AlmaLinux OS version

By default, the inventory is set to build ISOs for both AlmaLinux OS 8 and AlmaLinux OS 9 versions. What do we do to build for only one of them? You need to edit and comment items in several configuration files.

- Go the the _inventories/almalinux/group_vars/_ directory and edit the **all.yml** file. Comment one of the **sshd_ports_in_containers** options accordingly to your needs:

  ```bash
    ---
    sshd_ports_in_containers: # lists possible AlmaLinux OS versions for building ISOs
      8: 6023 # AlmaLinux OS 8, comment this line if you don't want to build this version
      9: 6022 # AlmaLinux OS 9, comment this line if you don't want to build this version
  ```

- In the same directory edit the **hosts.yml** file. Comment lines with AlmaLinux OS version that you don't need to build an ISO for:

  ```bash
   ---
   os_versions:
     - 8
     - 9
   per_version_absent_repos:
     8:
       - "crb"
     9:
       - "powertools"
   products:
     - platform: "AlmaLinux-8"
       name: "almalinux8-beta"
       version: 8
     - platform: "AlmaLinux-9"
       name: "AlmaLinux-9-beta"
       version: 9
  ```

- Switch to the _inventories/almalinux/hosts.yml_ directory and comment a docker host in the **hosts.yml** and its variables for the architecture you don't need. For example, if you don't want to build an AlmaLinux OS 9 ISO image for the x86*64 architecture, you should comment the *x86_64-al9* host and its variables \*ansible*\*:
  ```bash
    all:
      children:
        hosts:
          hosts:
            x86_64:
        dockers:
          children:
            x86_64-dockers:
        x86_64:
          hosts:
            x86_64:
              ansible_host: "<IP/domain/ssh alias>"
              ansible_user: "<a host user>"
          children:
            x86_64-dockers:
              hosts:
                x86_64-al8: # comment these lines if you don't need to build ISOs for AlmaLinux OS 8
                  ansible_host: "<IP/domain/ssh alias>"  # the same as a host machine
                  ansible_user: "root"
                  ansible_port: "{{ sshd_ports_in_containers[8] }}"
                x86_64-al9: # comment these lines if you don't need to build ISOs for AlmaLinux OS 9
                  ansible_host: "<IP/domain/ssh alias>"  # the same as a host machine
                  ansible_user: "root"
                  ansible_port: "{{ sshd_ports_in_containers[9] }}"
  ```

## Deployment

- After you set your Ansible inventory to meet your needs, deploy the Pungi node by running the following command:
  ```bash
  ansible-playbook -i inventories/almalinux playbooks/build_node_in_docker.yml -vv -b
  ```
- After the deployment it's recommended to check that you can connect successfully through SSH to each deployed Docker container.
- Now you can sync RPM packages to a local mirror by running the following command:
  ```bash
  systemctl start reposync.<arch>.service
  ```
  :::warning
  In the command replace the **arch** part with the architecture you are building an ISO for. For example, x86_64:
  ```bash
  systemctl start reposync.x86_64.service
  ```
  :::
  Please, note, that the first sync can take up to several hours.

## Building an AlmaLinux ISO

When the sync stage is completed you can proceed with building an ISO:

- Clone GitHub repository [pungi-scripts-public](https://github.com/AlmaLinux/pungi-scripts-public) into the previously deployed Docker container.
- Switch to the _pungi-scripts-public/build_scripts_ directory.
- To build an ISO run the following command with options that meet your needs:
  ```
  python3.9 jenkins.py --working-root-directory <working_root_directory> --arch <arch> --product-name AlmaLinux  --distribution-major-version <major_version>  --distribution-minor-version <minor_version> --beta-suffix <beta_suffix> --sigkeys-fingerprints <fingerprint_1> <fingerprint_2> --git-auth-token <git_auth_token> --git-auth-username <git_auth_username>
  ```
  Command options that you need to fill:
  - **working_root_directory** - specify your work directory as you did in the very beginning in the _inventories/almalinux/host_vars/x86_64.yml_ file
  - **arch** - specify what architecture you are building an ISO for, for example, _x86_64_
  - **major_version** and **minor_version** - set the numbers that match a full version of the distribution, for example in **8.9** - 8 is a major version, and 9 is a minor version
  - **beta_suffix** - this parametr can take two values, _-beta_ and empty string _""_. Please, check the [pungi-almalinux](https://git.almalinux.org/almalinux/pungi-almalinux) repository as it contains branches with the same version and the same beta suffix.
  - **fingerprint_1** and **fingerprint_2** - these parameters are fingerprints of keys that are used to sign RPM packages.
    - For AlmaLinux OS 9:`B7BB94F0C9BA6CAA` and `D36CB86CB86B3716`
    - For AlmaLinux OS 8: `51D6647EC21AD6EA` and `488FCF7C3ABB34F8`
  - **git_auth_token** and **git_auth_username** - parameters for your auth credits that can be found at [git.almalinux.org](https://git.almalinux.org/explore/repos). To generate a token go to the [user settings/applications](https://git.almalinux.org/user/settings/applications)

:::tip
Please, note, that building an AlmaLinux ISO can take up to several hours, not including the time for syncing RPM packages to a local mirror.
:::

## Reporting issues

Should you have any issues, please report them to a corresponding project:

- Setting up an Ansible inventory and deployment - [pungi-node-public/issues](https://github.com/AlmaLinux/pungi-node-public/issues)
- Building an AlmaLinux ISO locally - [pungi-scripts-public/issues](https://github.com/AlmaLinux/pungi-scripts-public/issues)
