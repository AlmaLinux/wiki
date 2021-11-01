---
title: 'Mirrors'
---
# How to create a public mirror for AlmaLinux

Mirrors are extremely important to provide a fast and reliable
infrastructure, and we are very grateful to people and organizations that
help us with this. The current list of public mirrors can be found on the
[mirrors.almalinux.org](https://mirrors.almalinux.org/) website.

You can create a public AlmaLinux mirror in 5 easy steps:

1. Make sure that you have enough free space: 300GB is the absolute minimum
   but we recommend reserving at least 500GB.
2. Synchronize with the official AlmaLinux mirror via rsync:  
   ```shell
   /usr/bin/rsync -avSH -f 'R .~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/
   ```
3. Create a cron task to sync it periodically (we recommend updating the
   mirror every 3 hours):
   ```
   0 */3 * * * /usr/bin/flock -n /var/run/almalinux_rsync.lock -c "/usr/bin/rsync -avSH -f 'R .~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/"
   ```
4. Ensure the accuracy of GeoIP city, longitude, and latitude data for your mirror IP(s) with MaxMind at 
   [https://www.maxmind.com/en/geoip-demo](https://www.maxmind.com/en/geoip-demo). 
   Submit a [correction request](https://support.maxmind.com/geoip-data-correction-request/) with accurate city data 
   if the information is incorrect.

   Our mirrorlist URL tries to serve the best mirror to a client based on GeoIP data
   so having accurate GeoIP data ensures the best possible experience for users.
5. Fork the [github.com/AlmaLinux/mirrors](https://github.com/AlmaLinux/mirrors/)
   repository and create a pull request that will add a YAML file describing
   your mirror to the `mirrors.d` directory.
   You can use the [official AlmaLinux repo file](https://github.com/AlmaLinux/mirrors/blob/master/mirrors.d/repo.almalinux.org.yml)
   as an example. Your mirror does not have to provide all the protocols
   that our main mirror provides, but either HTTP or HTTPS is required.

   More information about creating a pull request can be found in the
   [GitHub documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
   After reviewing the pull request your mirror will be published at the
   [mirrors.almalinux.org](https://mirrors.almalinux.org/) page and will
   be added to the mirrorlists that dnf package manager works with.

All mirror hosts are eligible for membership to the AlmaLinux OS Foundation.
Make sure you submit your [application for membership](https://almalinux.org/foundation/members/)!

We recommend joining the [mirrors channel on Mattermost](https://chat.almalinux.org/almalinux/channels/mirrors) for any questions as well as updates from our team that impact mirror hosts.
