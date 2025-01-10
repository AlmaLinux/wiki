---
title: 'Packaging'
parent: 'Contribute'
---

###### last updated: 2024-09-20

<Breadcrumbs />

# Contribute to Packaging

AlmaLinux OS is, at its base, a collection of packages. For anyone who would like to contribute to the operating system, we have a collection of ways to help!

* [Building packages for the Community](#community-repositories)
* [Submitting patches](#submit-patches)

## Community Repositories

The [AlmaLinux Build System](/development/AlmaLinux-Build-System) supports Community repositories, allowing users to create packages of their projects and share them with others. 

If they are useful for the AlmaLinux community at large, these packages can also be released to the [Synergy](/repos/Synergy) repository. Not all packages are a good fit for Synergy, but we are happy to consider them! Once your package is building successfully, you can ask for it to be considered to be included in the [SIG/Core](https://chat.almalinux.org/almalinux/channels/sigcore) room on [chat.almalinux.org](https://chat.almalinux.org)

If you are interested in building packages as a community repository, please use the [AlmaLinux Build System User Guide](https://github.com/AlmaLinux/build-system/wiki/ALBS:-Guide-for-Authorised-Users#community-repositories).

## Submit patches 

AlmaLinux OS source packages are stored and managed in Git repositories on [git.almalinux.org](https://git.almalinux.org/).

If you'd like to submit a patch, please follow these steps: 

* Login to [git.almalinux.org](https://git.almalinux.org/).

* Find a package [repository](https://git.almalinux.org/explore/repos), you'd like to submit a patch for.

* Fork the repository.

* Apply your changes. 

* When you are ready to create a pull request, please check the **[commit guidelines](#commit-guidelines)** to keep our commit messages consistent across all repositories.

* The [Core SIG](/sigs/Core) members will review your patch.

## Commit Guidelines

When you are ready to create a pull request with your suggested changes, please follow the guidelines below to make our commit messages consistent across all repositories around the AlmaLinux Build System. Every contributor could use this document to make commits that:
* Make sense (grammatically).
* Are meaningful/clear enough -> describe the change(s) made to the code.
* Include references to an issue (whenever possible).
* This guide also aims to cover not only atomic commits made by contributors but also how merge commits must be performed.

### Commit messages

For this first iteration, we aim to focus on these two main goals:
* Commit messages must be precise about the changes made so other developers understand what happened in that commit.
* A person can identify the issue that motivated such change. If possible link the issue that the commit(s) fixed or resolved. 

**Remember**, these goals apply to both regular and merge commits.

### Structure
Depending on the context, a commit message might have specific needs in different situations, i.e.:

* There is only a single commit that fixes a single issue.
* When there is a list of meaningful commits that fixes one or several issues at a time.
* When there's no issue involved.

Even if we don't want to be very pedantic about how commits look (unless we decide to strengthen the policy for other reasons), we'd like to be more or less consistent with the goals described above.

#### A very detailed commit message

The commit message should meet the requirements:
* Should contain a short (72 chars or less) summary.
* Should contain more detailed explanatory text. Wrap it to 72 characters. The blank line separating the summary from the body is critical (unless you omit the body entirely).
* Further paragraphs come after blank lines.
* Bullet points are okay, too.
    * Typically a hyphen or asterisk is used for the bullet, followed by a single space. Use a hanging indent.

#### Summary

The perfect summary will meet these requirements: 
* Short commit title, 72 chars or less.
* Commit summary, 72 chars or less per line.
    * Keep it meaningful in a short way. Remember that you can add more details later.
    * Using the imperative or simple past tenses is acceptable, but please be consistent.

It's optional, and can be used only when the commit message is short enough to fit in 72 characters.

#### Body

The body is a more detailed explanatory text. Wrap it to 72 characters. The blank line separating the summary from the body is critical (unless you omit the body entirely).

Further paragraphs come after blank lines.

* Bullet points are okay, too.
* Typically a hyphen or asterisk is used for the bullet, followed by a single space. Use a hanging indent.

When writing the body part, you can add as many details as you want to the commit message. Just remember:
* The body is optional if the subject is enough to describe the commit.
* Wrap lines to 72 characters.
* Using the imperative or simple past tenses is acceptable, but please be consistent.
* Feel free to describe what you think it's worth being described as if you were your colleague (who is more or less familiar with the code) and would like to understand what happened by just reading a few lines.


## Get Help

Join the ~SIG/Core System [chat channel](https://chat.almalinux.org/almalinux/channels/sigcore) for any talk and assistance.

