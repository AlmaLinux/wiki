---
title: 'AL Building'
---

# How to build AlmaLinux OS distribution on one's own

## Hardware and software requirements to a final machine 

* AlmaLinux 9
* 6+ CPU cores
* 8+ GB RAM
* 300+ GB free storage space

## Deploying a Pungi node

That Ansible scenario prepare your machine to building a distribution

1. Install Docker CE and prepare docker containers to build the distributions inside them
2. Setup systemd timer to sync a local mirror of packages. They will be used for building

## Do the following step to prepare your machine

1. Clone GitHub repository [pungi-node-public](https://github.com/AlmaLinux/pungi-node-public) 
2. Prepare Python virtual environment if you don't have installed Ansible
   1. Run command `python3 -m venv ./venv` in a suitable for you directory
   2. Activate venv by command `source ./venv/bin/activate`
   3. Install Ansible by command `pip install ansible`
3. Copy `inventories/sample` as a new Ansible inventory which should fill
   1. Open file `inventories/<name_of_your_inventory>/group_vars/all.yml` and add your public SSH key to variable `ssh_public_keys`
   2. Comment one of versions in variable `os_versions` from `inventories/<name_of_your_inventory>/hosts.yml` if you don't want to build both versions of the AL distributions
   3. Fill parameter `work_directory_path` in `inventories/<name_of_your_inventory>/host_vars/<arch>.yml` by path of directory which will contain a local mirror of packages. A storage with that directory should have at least 300 GB free space
   4. Fill parameter `ansible_host` in `inventories/<name_of_your_inventory>/hosts.yml` by IP/domain/SSH alias of your machine and parameter `ansible_user` by name of user from that machine. The user should have passwordless sudo rights
4. If you want to build another architecture than `x86_64` then replace `x86_64` in following places:
   1. In names of files from `inventories/<name_of_your_inventory>/group_vars` and `inventories/<name_of_your_inventory>/host_vars`
   2. In host groups in file `inventories/<name_of_your_inventory>/hosts.yml`
5. If you want to build more than one architecture then
   1. Copy and add files in `inventories/<name_of_your_inventory>/group_vars` and `inventories/<name_of_your_inventory>/host_vars` with architecture in a name
   2. Add and fill appropriate groups in `inventories/<name_of_your_inventory>/hosts.yml`
6. Run deploying Pungi node by command `ansible-playbook -i inventories/<name_of_your_inventory> playbooks/build_node_in_docker.yml -vv -b`
7. After deploying please check that you can connect through SSH to each deployed Docker container. Numbers of SSH port you can find here `inventories/<name_of_your_inventory>/group_vars/all.yml`
8. Sync a local mirror by command `systemctl start reposync.<arch>.service` there is "arch" is an architecture of a distribution which you try to build. This command takes a few hours at the first run, so, be patient.
9. Please, report all issues in this section of the instruction to https://github.com/AlmaLinux/pungi-node-public/issues

## Run building a distribution

1. Clone GitHub repository [pungi-node-public](https://github.com/AlmaLinux/pungi-scripts-public) into an already deployed Docker container from the previous section
2. Go to subdirectory `build_scripts` in the cloned repo
3. Run building a distribution by command
```
python3 jenkins.py --working-root-directory <working_root_directory> --arch <arch> --product-name AlmaLinux  --distribution-major-version <major_version>  --distribution-minor-version <minor_version> --beta-suffix <beta_suffix> --sigkeys-fingerprints <fingerprint_1> <fingerprint_2> --git-auth-token <git_auth_token> --git-auth-username <git_auth_username>
```
there are
   1. "working_root_directory" is value of parameter `work_directory_path` from the previous section
   2. "arch" is architecture of a distribution which you try to build, e.g. `x86_64`
   3. "major_version" and "minor_version" are value from a full version of distribution, e.g. `8.9` there are 8 - is major version, 9 - is minor version
   4. "beta_suffix" can take two values: `-beta` and empty string `""`. Please check repository [pungi-almalinux](https://git.almalinux.org/almalinux/pungi-almalinux) that it contains branch with same version and same beta suffix.
   5. "fingerprint_1", "fingerprint_2" are fingerprints of a key which was used for signing RPM packages. So, there are `B7BB94F0C9BA6CAA` and `D36CB86CB86B3716` for AlmaLinux 9. And there are `51D6647EC21AD6EA` and `488FCF7C3ABB34F8` for AlmaLinux 8.
   6. "git_auth_token" and "git_auth_username" are your auth creds from `git.almalinux.org`. You can generate a token [here](https://git.almalinux.org/user/settings/applications)
4. The building takes 1-2 hours
5. Please, report all issues in this section of the instruction to https://github.com/AlmaLinux/pungi-scripts-public/issues
