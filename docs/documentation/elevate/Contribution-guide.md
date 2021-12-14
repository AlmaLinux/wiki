# ELevate Contribution Guide

:::warning
This guide contains information for the current Package Evolution Service set. There might be some changes soon.
:::


## About Package Evolution Service

AlmaLinux launched the [Package Evolution Service (PES)](https://pes.almalinux.org/) to collect bug reports and issues and let the Community take part in the Project. This service provides the information for migration from one RHEL-based distribution to another between different major versions.

This guide describes how a user can contribute to the ELevate Project and helps one to proceed. 

## Service review

You need to login via a GitHub account to use Package Evolution Service. If you are in any organization on GitHub, make sure that your status is public so your organization can be displayed on Package Evolution Service.

Let's start with the menu review to understand where to start. There are mentioned options:

* Bulk upload
* Dump
* Add an action
* List actions
* List of registered users 
* Actions history

Let's talk a bit about each item.

So, **BULK UPLOAD** option is only for AlmaLinux developers. It's not available for other users to work there. You'll have this result:

![image](/images/elevate_bulk-result.png)

**DUMP** item allows you to choose what JSON to dump. There are a few more options. Source OS allows you to choose from what system you migrate. Target OS allows you to choose what system you want to migrate to - AlmaLinux, CentOS Stream, Oracle Linux and Rocky Linux. The next option is GitHub organization, where you can choose migration rules for JSON. If you are in any organization that has its own migration rules, you can choose between AlmaLinux's rules and the organization's rules, or  choose all. If you are not in any organization, there are only AlmaLinux rules available. 

![image](/images/elevate_dump-json.png)

After dumping is completed, the page will be automatically updated, and you'll see a JSON file. Here is an example of what you can have:

![image](/images/elevate_dump-result.png)

**ADD ACTION** allows you to create a new action (rule) for migration and describe it. If you are not in any organization, AlmaLinux might approve your added action. If you are in an organization, you can add an already approved action.
Let's see what you have to fill in. Here's an example:

![image](/images/elevate_add-action.png)

First, you need to choose `action type` depending on the action purpose. 

![image](/images/elevate_action-type.png)

* Present type indicates that a package is present already in the new version of the system you are migrating.
* Removed type indicates that a package was removed from the OS you want to migrate, but it was present in its previous version.
* Deprecated type indicates that a package is considered deprecated and may be removed later.
* Replaced type indicates that a package was replaced with another in the new OS version. 
* Split type indicates that a package was split in the new OS version.
* Merged type indicates that a few packages from the previous version were merged into one in the new OS version. 
* Moved type indicates that a package was moved to another repository in the new OS version. 
* Renamed type indicates that a package was renamed in the new OS version. 

The next step is to choose a `GitHub organization` that displays what organization rules you can choose. If you are not in any organization, you have only AlmaLinux here. If you are, then you also have a list of your organizations additionally to AlmaLinux. 

`Description` item is designed to comment and describe anything about your action that helps get information about it.

`Source OS` offers you to choose from what operating system you migrate. You also need to enter the system version here.

`Target OS` offers you to choose to what operating system you are migrating. You can choose between AlmaLinux, CentOS Stream, Oracle Linux and Rocky Linux. Again, enter the system version nearby.

:::tip
If you are adding action and the new rule works for all systems, you need to mark fields `source is generic` and `target is generic`. If the rule works only for chosen systems, don't mark these fields. 
![image](/images/elevate_source.png)
:::
Type your `architecture` next or put them as a list via separating each item by a comma. Both x86_64 and arm64/aarch64 architectures are supported.

Specify what package you suggest replacing and what package removing in `in package set` and `out package set` options. Each package should be input as a separate row. The format of the row is name, repository, module_name, module_stream. Just leave an empty item if a package doesn't belong to a module. 

:::tip
Removed and Present action types don't have `out package set`.
:::

**LIST OF ACTIONS** allows you to see all the added actions, no matter their type and status. You can change all non-organization unapproved actions here if needed.

![image](/images/elevate_list-of-actions.png)

The *"eye"* sign shows you all information about the action.

![image](/images/elevate_action-ID.png)

The *"clock"* sign shows you the action's history if any changes have been made.

You'll also have the *"pen"* sign that will allow editing all non-organization unapproved actions.

![image](/images/elevate_edit-an-action.png)

After editing is done, make sure you save it.

You can also search by package name - you'll see all the results for the packages that contain the name you put in the search line.

![image](/images/elevate_search-an-action.png)

**LIST OF REGISTERED USERS** allows you to see who has signed at all, no matter being in any organization. Username item links to a user's GitHub account, organization item links to an organization's GitHub account. History changes can show you what was done by the chosen user.

![image](/images/elevate_list-of-users.png)

:::warning
`Back to the list` gets you to the `list of actions`, not to the `list of the registered users`.
:::

**ACTIONS HISTORY** displays all changes that users did. Username will get you user's GitHub account. Action ID will display all information about this action.

![image](/images/elevate_actions-history.png)

:::warning
`Back to the list` gets you to the `list of actions`, not to the `actions history`.
:::

## Extra details

Also, Package Evolution Service is useful that you can report an [issue](https://github.com/AlmaLinux/pes), visit [AlmaLinux home web-site](https://almalinux.org/) and [AlmaLinux Blog](https://almalinux.org/blog//), report any [bug](https://bugs.almalinux.org/my_view_page.php) and visit [AlmaLinux GitHub](https://github.com/AlmaLinux/). 

![image](/images/elevate_homebar.png)

For more help and assistance, or if you want to discuss anything, you are very welcome on the [AlmaLinux Community Chat](https://chat.almalinux.org/almalinux/channels/migration).