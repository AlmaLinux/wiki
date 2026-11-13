# AlmaLinux Wiki

This is the source for [wiki.almalinux.org](https://wiki.almalinux.org/).

Every page on the wiki is a Markdown file in the `docs/` directory, and we build the site with [VuePress 1](https://v1.vuepress.vuejs.org/). If you're here to write a new page or fix an existing one, head to the [contributor guide](https://wiki.almalinux.org/Contribute-to-Documentation.html) first. It walks you through running the wiki on your own machine, the page template, and our style guide. This README is about everything around the pages: how changes get published, which tools we use, and a couple of quirks you'll probably run into.

## How your change goes live

Open a pull request against `master`. A Prettier check runs, a maintainer reviews it, and once it's merged the [deploy workflow](.github/workflows/deploy-gh_pages.yml) builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves at wiki.almalinux.org. It's usually live a few minutes after the merge.

Please don't push to `gh-pages` yourself. Anything pushed there by hand skips review, and the next deploy wipes it out anyway.

## Tools

Use Node.js 22 and yarn. That's what the deploy uses, so it's what your local preview should use too.

## Yes, there are two lock files

The deploy workflow installs from `yarn.lock`. The Prettier check installs from `package-lock.json` with npm. We'd like to get down to one someday, but for now both of them matter.

This next part catches a lot of people. When you run npm locally, it also rewrites `yarn.lock` with entries for your own operating system. If you're on a Mac, that can swap out the Linux packages the deploy needs for Mac ones. So if you see `yarn.lock` in your changes and you didn't mean to touch dependencies, throw those changes away with `git checkout yarn.lock` before you commit.

When you do need to change a dependency, this order keeps both files right:

1. Update `package.json`.
2. Run `yarn install`, then `git add yarn.lock`.
3. Run `npm install --package-lock-only`.
4. Run `git checkout yarn.lock` to drop whatever npm changed, then commit both lock files.

## About the bot commits on your pull request

Prettier formats the whole repo on pull requests through our [Prettier workflow](.github/workflows/prettier.yml). When it finds something to fix, the autofix.ci bot adds an "Apply Prettier format" commit to your branch. You didn't do anything wrong! Pull your branch before you push again, or you'll get a conflict.

(If you'd rather format things before the bot does, run `npx prettier --write .` from the repo root before you push.)

## Files you don't need to edit

| File                                                                          | Where it comes from                                                                                                                                    |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `docs/cloud/AWS_AMIS.md` and `docs/.vuepress/public/ci-data/aws_amis.csv`     | Merged from the per-release AMI files by `aws_amis_md_csv_merge.sh` before every build. Git ignores them.                                              |
| `docs/cloud/AWS_AMIS_*.md` and `docs/.vuepress/public/ci-data/aws_amis_*.csv` | Updated by AlmaLinux Autobot through automated pull requests. Questions about these go to the [Cloud SIG](https://wiki.almalinux.org/sigs/Cloud.html). |
| `docs/.vuepress/dist/`                                                        | The built site. Git ignores it.                                                                                                                        |

## Stuck?

Come find us in the [Documentation channel](https://chat.almalinux.org/almalinux/channels/sigdocumentation) on AlmaLinux Chat, or [open an issue](https://github.com/AlmaLinux/wiki/issues). We're happy to help.
