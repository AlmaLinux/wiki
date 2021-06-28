---
title: 'Azure'
---
# AlmaLinux OS in Azure Cloud

The images are ready, but we want to make sure we have a proper update 
infrastructure inside Azure, so that servers update from local region 
mirrors. For that we are planning to run a mirror per region - so there 
are no fees for traffic related to OS updates.

## How you can help
- terraform / ansible scripts to set up mirrors for each Azure region 
  and keep all the mirrors updated 
  - it should be easy to add new regions 
  - each mirror should have https, rsync, failtoban (typical mirror setup)
- Figure out the best way to make sure that DNF will select the mirror from 
  the same region in Azure as the server from which DNF is running

If you can help, please join us at [chat.almalinux.org/almalinux/channels/sigcloud](https://chat.almalinux.org/almalinux/channels/sigcloud) 