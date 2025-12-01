---
title: "Mirrors"
---

# How to create a public mirror for AlmaLinux

Mirrors are extremely important to provide a fast and reliable
infrastructure, and we are very grateful to people and organizations that
help us with this. The current list of public mirrors can be found on the
[mirrors.almalinux.org](https://mirrors.almalinux.org/) website.

You can create a public AlmaLinux mirror in a few easy steps:

1. Make sure that you have enough free space: 500GB per major version is the suggested minimum. As there are currently three supported major versions (8, 9, and 10) (AlmaLinux OS Kitten being thought of separately, below) the recommended **minimum** storage space is 1.5TB. 2TB is more ideal. The current steady-state of the mirror is approximately 1TB. If you are also mirroring [AlmaLinux OS Kitten](https://wiki.almalinux.org/development/almalinux-os-kitten-10.html) we recommend 2.5TB.
   ::: tip Optional but recommended
   Use updated version of `rsync` with `xxhash` support.
   - `xxhash` provides a superior hashing algorithm to `rsync` which lightens the load on the source and destination
     servers.
     We maintain an up-to-date version
     of `rsync` in the AlmaLinux backports repository. To use this repository on EL8 and EL9 distros:
     ```shell
     curl https://repo.almalinux.org/backports/almalinux-backports-rsync.repo --output /etc/yum.repos.d/almalinux-backports-rsync.repo
     yum -y update rsync
     ```
   - You can verify that you have the expected version of `rsync` and `xxhash` support as follows:
     ```shell
     $ rsync --version |grep xxhash
     xxh128 xxh3 xxh64 (xxhash) md5 md4 sha1 none
     ```
     :::

2. Synchronize with the official AlmaLinux mirror via `rsync`:

   ```shell
   /usr/bin/rsync -rlptvSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/
   ```

   - The official tier0 rsync mirrors are in Atlanta, GA, USA; Seattle, WA, USA; Frankfurt, Germany, and Tokyo, Japan. We use geolocation-based DNS steering to send your traffic to the closest tier0 mirror.

3. Create a cron task to sync it periodically (we recommend updating the
   mirror every 3 hours):

   ```shell
   0 */3 * * * /usr/bin/flock -n /var/run/almalinux_rsync.lock -c "/usr/bin/rsync -rlptvSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/"
   ```

   ::: tip Optional Mirroring of AlmaLinux OS Kitten
   We maintain AlmaLinux OS Kitten in a separate rsync module so you can choose whether or not to sync it. It is not required to be mirrored to be an AlmaLinux mirror, but all mirroring is welcomed and appreciated. Do keep in mind that the `almalinux-kitten` module should be synced as its own top-level project and must NOT be placed inside of the main `almalinux` target on your server. AlmaLinux Kitten mirroring requires very little extra bandwidth.
   - Initial sync:
     ```shell
     /usr/bin/rsync -rlptvSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.kitten.repo.almalinux.org/almalinux-kitten/ /almalinux-kitten/dir/on/your/server/
     ```
   - Cron:
     ```shell
     0 */3 * * * /usr/bin/flock -n /var/run/almalinux_kitten_rsync.lock -c "/usr/bin/rsync -rlptvSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.kitten.repo.almalinux.org/almalinux-kitten/ /almalinux-kitten/dir/on/your/server/"
     ```
     :::

4. Ensure the accuracy of city, longitude, and latitude data for your mirror IP(s) with IPinfo at
   [https://ipinfo.io](https://ipinfo.io). Submit a [correction request](https://ipinfo.io/corrections) with accurate city data
   if the information is incorrect. Our mirrorlist URL tries to serve the best mirror to a client based on IPinfo geolocation data
   so having accurate IPinfo data ensures the best possible experience for users.

5. Join the [mirror-announce](https://lists.almalinux.org/mailman3/lists/mirror-announce.lists.almalinux.org/) mailing list to receive
   important mirror-related updates from the AlmaLinux team.

   You may also consider joining the [mirror](https://lists.almalinux.org/mailman3/lists/mirror.lists.almalinux.org/) mailing list for
   general discussion/help related to mirrors.

   We recommend joining the [mirrors channel on Mattermost](https://chat.almalinux.org/almalinux/channels/mirrors) for any questions
   as well as updates from our team that impact mirror hosts in a live interactive format.

6. Fork the [github.com/AlmaLinux/mirrors](https://github.com/AlmaLinux/mirrors/)
   repository and create a pull request that will add a YAML file describing
   your mirror to the `mirrors.d` directory.
   You can use the [official AlmaLinux repo file](https://github.com/AlmaLinux/mirrors/blob/master/mirrors.d/repo.almalinux.org.yml)
   as an example. Your mirror does not have to provide all the protocols
   that our main mirror provides, but either HTTP or HTTPS is required. Format of a mirror's config is described below.
   Also, you can validate your config to use some JSON online validator using
   [that JSON schema](https://github.com/AlmaLinux/mirrors/blob/yaml_snippets/json_schemas/mirror_config.json) and converting your config to JSON.

```YAML
---
name: <domain name of a mirror, e.g. almalinux.mirror.link>
cloud_type: <azure|aws. It'll be required if a mirror is located in AWS/Azure cloud>
address:
  http: <http URL to a mirror, e.g. http://almalinux.mirror.link/almalinux>
  https: <https URL to a mirror, e.g. https://almalinux.mirror.link/almalinux>
  rsync: <rsync URL to a mirror, e.g. rsync://almalinux.mirror.link/almalinux>
  ftp: <ftp URL to a mirror, e.g. ftp://almalinux.mirror.link/almalinux>
# if you are mirroring kitten as well provide only the protocols/URLs that you are hosting
# remove this section if you are not mirroring kitten
address_optional:
  kitten:
    http: <http URL to a mirror, e.g. http://almalinux.mirror.link/almalinux-kitten>
    https: <https URL to a mirror, e.g. https://almalinux.mirror.link/almalinux-kitten>
    rsync: <rsync URL to a mirror, e.g. rsync://almalinux.mirror.link/almalinux-kitten>
update_frequency: <update frequency of a mirror, e.g. 1h>
sponsor: <Name of a mirror's sponsor/holder, e.g. Some company name>
sponsor_url: <URL of a mirror's sponsor/holder, e.g. http://some.company.name>
email: <e-mail of a mirror's sponsor/holder, e.g. admin@some.company.name>
geolocation:
  country: <two-letter name of a country, e.g. US>
  state_province: <name of a province, e.g. New York.  Field is required even if blank.>
  city: <name of a city, e.g. New York>
private: <true|false. A mirror is available in some local network if the param is true>
monopoly: <true|false. The mirrors list contains only this private mirror for a suitable client if param is true>
# The list will be required if a mirror is local or cloud.
# It contains subnets behind which located a private mirror.
# Also, it can be string and contains URL which returns json list with subnets
subnets:
  - <network mask>
# That parameter can specify ASN which is maintained by a mirror is located in cloud
# It can be number or list of numbers:
# asn: 40162
# or
# asn:
#   - 41222
#   - 91213
# or
# asn: [12345, 98765]
asn: <ASN number or list of ASN numbers, see https://en.wikipedia.org/wiki/Autonomous_system_(Internet)>.
# The list will be required if a mirror is located in Azure/AWS cloud
cloud_regions:
  - <cloud_region of Azure/AWS, e.g. australiacentral2>
...

```

You could find more information about creating a pull request in
[GitHub documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
After reviewing the pull request your mirror will be published at the
[mirrors.almalinux.org](https://mirrors.almalinux.org/) page and will
be added to the mirrorlists that dnf package manager works with.

All mirror hosts are eligible for membership to the AlmaLinux OS Foundation.
Make sure you submit your [application for membership](https://almalinux.org/foundation/members/)!
