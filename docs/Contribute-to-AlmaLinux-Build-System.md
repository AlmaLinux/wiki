---
title: 'AlmaLinux Build System'
---

###### last updated: 2024-09-20

# Contribute to AlmaLinux Build System

The AlmaLinux Build System is managed by the [SIG/Build System](/sigs/Build-System) SIG. 

The project is open for community contributions. If you are interested to contributing the Build System project, we recommend you start by checking the AlmaLinux Build System project [milestones](https://github.com/AlmaLinux/build-system/milestones) for ongoing tasks and following the guidelines below.

When you are ready to create a pull request with your suggested changes, please follow the **[commit guidelines](#commit-guidelines)** to keep our commit messages consistent across all repositories around the AlmaLinux Build System. 

## Contribute to the codebase

To contribute to development we recommend deploying the AlmaLinux Build System [locally](https://github.com/AlmaLinux/build-system/wiki/Deploy-on-local-and-remote-machines) and follow these guide steps for possible modifications and commit guidelines.

#### A new service's config
* Add template to `roles/dev_deploy/templates` for config of a service. The name of the file should be `<name_of_target_config_file>.j2`.
* Add description of config to `roles/dev_deploy/defaults/main/configs.yml`.

#### A new directory
* Add description to `roles/dev_deploy/defaults/main/common.yml`.

#### A new docker container
* Add a new description of a container's docker image to `roles/dev_deploy/defaults/main/docker_images.yml`.
* Add a new description of a docker container to `roles/dev_deploy/defaults/main/docker_containers.yml`.

## Commit Guidelines

When you are ready to create a pull request with your suggested changes, we'd like to provide some commit guidelines in order to make our commit messages consistent across all repositories around the AlmaLinux Build System. Every contributor could use this document to make commits that:
* Make sense (grammatically).
* Are meaningful/clear enough -> describe the change(s) made to the code.
* Include references to Github issue (whenever possible).
* Include references to fixed (or resolved) issue(s).
* This guide also aims to cover not only atomic commits made by contributors but also how merge commits must be performed.

### Commit messages
For this first iteration, we aim to focus on these main two goals:
* Commit messages must be precise about the changes made so other developers understand what happened in that commit.
* A person can identify the ticket in Github that motivated such change. If possible link a GitHub issue that the commit(s) fixed or resolved. 

**Remember**, these goals apply to both regular and merge commits.

### Structure
Depending on the context, a commit message might have specific needs in different situations, i.e.:

* There is only a single commit that fixes a single issue.
* When there is a list of meaningul commits that fixes one or several issues at a time.
* When there's no issue involved.

Even if we don't want to be very pedantic about how commits look like (unless we decide to strengthen the policy for other reasons), we'd like to be more or less consistent with the goals described above.

#### A very detailed commit message

The commit message should meet the requirements:
* Should contain short (72 chars or less) summary.
* Should contain more detailed explanatory text. Wrap it to 72 characters. The blank line separating the summary from the body is critical (unless you omit the body entirely).
* Further paragraphs come after blank lines.
* Bullet points are okay, too.
    * Typically a hyphen or asterisk is used for the bullet, followed by a single space. Use a hanging indent.
* If want to add references to fixed or resolved issue(s), do it at the end as in the exmaple: 
  ```
  Fixes: https://github.com/AlmaLinux/build-system/issues/80.
  ```
  or 
  ```
  Resolves: https://github.com/AlmaLinux/build-system/issues/80.
  ```

Ideally, every commit message should look like this, but we try to be flexible enough.

#### Summary

Perfect summary should meet further requirements: 
* Short commit title, 72 chars or less.
* Commit summary, 72 chars or less per line.
    * Keep it meaningful in a short way. Remember that you can add more details later.
    * Using the imperative or simple past tenses is acceptable, but please be consistent.
* Link a fixed/resolved issue:
  ```
  Fixes: https://github.com/AlmaLinux/build-system/issues/80
  ```
  or
  ```
  Resolves: AlmaLinux/build-system/issues/80
  ```
  It's optional, and can be used only when the commit message is short enough to fit in 72 characters.

#### Body

Body is a more detailed explanatory text. Wrap it to 72 characters. The blank line separating the summary from the body is critical (unless you omit the body entirely).

Further paragraphs come after blank lines.

* Bullet points are okay, too.
* Typically a hyphen or asterisk is used for the bullet, followed by a single space. Use a hanging indent.

When writing the body part, you can add as much details as you want on the commit message. Just remember:
* The body is optional if the subject is enough to describe the commit.
* Wrap lines to 72 characters.
* Using the imperative or simple past tenses is acceptable, but please be consistent.
* Feel free to describe what you think it's worth being described as if you were your colleague (that is more or less familiar to the code) that would like to understand what happened by just reading a few lines.

#### Footer

Footer is a perfect place to add references as links to fixed or resolved issue(s). If have not referenced issues in the subject, then they can be added here:
```
Fixes https://github.com/AlmaLinux/build-system/issues/80
```
or 
```
Resolves https://github.com/AlmaLinux/build-system/issues/80
```

Remember:
* Not having referenced issues is a possibility in case of dependency version updates and so on.
* Can use a bullet list for the list of references.
* Although using Github's abbreviations is okay, we privilege using the full URL as it will be meaningful if somebody is not reading the commit message through Github's interface.

### Everyday Use cases

#### The simplest commit message

```
Fixed create_module_by_payload (#123)
```
As you can see, simple commit messages like this one are ok. Even if not providing a good description in the commit message, it:

* Describes that there was a fix in `create_module_by_payload`.
* References a github issue (#123).

However, this structure might not fit as `#123` will refer to issues/pull request within the same repository. That reference needs to be more specific.

#### A tad more complex one

```
Added some missing AlmaLinux beta repositories

We are adding missing AlmaLinux 8 RT repos for s390x and ppc64le
Also, adding aarch64 NFV repos for AlmaLinux 9

Resolves: https://github.com/AlmaLinux/build-system/issues/80
```

#### A little bit about merge commits

Some commits might not be meaningul, others might not include references, some can ollow the same structure or are not fully descriptive. Since 99% of the time we merge pull requests (hereinafter PRs), we should add the relevant data in the mere commit message. By relevant data we understand the branch the code is coming from and the information we would like to know about the commits as described earlier in the document.

#### Single commit PRs

Sometimes, a PR has a single and meaningful commit message that doesn't require to reference an issue, i.e.:

`Bump Pydantic from 1.10.7 to 1.10.8`

In this case, we can do a squash and merge for the commit to end up in the repository in the following way:

`Bump Pydantic from 1.10.7 to 1.10.8 (#562)`

You can also create a merge commit message this way.
```
Merge pull request #562 from javihernandez:pydantic-1.10.8

Bump Pydantic from 1.10.7 to 1.10.8
```

Of course, and as always, ensure that if the change is motivated by a Github issue, please do add a reference in the commit message as described in the previous section of the document.

#### Several commits PRs
Usually, PRs involve more than one single commit. Ideally, they all should follow the structure described through this document, but sometimes this is not the case. We can see commit messages like:

* Addressed review comments.
* Fixed typo.
* etc.
Which, for obvious reasons, do not provide a lot of information about the commit. For this reason, all our merge commit messages must:

* Reference the branch being merged.
* Reference the pull request.
As optional things to add, merge commit messages can also (and we encourage to) include:

* Highlight, description or main goal of the PR.
* Add references to fixed or resolved issues as described earlier.

## Get Help

Join the ~SIG/Build System [chat channel](https://chat.almalinux.org/almalinux/channels/build-system) for any talk and assistance.
