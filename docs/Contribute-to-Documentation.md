---
title: 'Documentation'
---

###### last updated: 2024-03-25

# Contribute to AlmaLinux Documentation

If you are interested in contributing to AlmaLinux Wiki Documentation, we recommend you follow these guidelines. 

## Prerequisites

### Starting the process

Before you start writing a wiki page/instruction or modifying an existing one, we strongly recommend:
* Look through existing open and closed [issues](https://github.com/AlmaLinux/wiki/issues) for similar content, to prevent duplication.
* Open an [issue](https://github.com/AlmaLinux/wiki/issues) on the repo to propose your content before you begin writing it to ensure that is appropriate for the AlmaLinux Wiki and to collaborate with the AlmaLinux OS Foundation, Team and Community. 

You are also welcome to discuss the content and share your feedback and thoughts in the [Documentation Chat Channel](https://chat.almalinux.org/almalinux/channels/sigdocumentation).

### Setting up the environment

The Wiki is powered by [VuePress](https://vuepress.vuejs.org/).

The general process to contribute to the wiki includes these steps:
* Fork the Wiki [repository](https://github.com/AlmaLinux/wiki).
* Clone your forked repository and navigate to its directory.
* Create a new branch.
* Edit or create a page.
* Check your changes on the local wiki - see the steps below.
* Commit your changes.
* Create a pull-request to the master branch as described in the GitHub [documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

There are two ways to run the wiki locally to check your changes:

**Please, note, most steps are suitable for all three Linux, Windows and macOS systems, but some commands may need some adjustments.**

#### Install yarn 

:::tip
For Windows and macOS, you may need to install [nodejs](https://nodejs.org/en) first.
:::

* Install necessary dependencies:
   ```sh
   $ yarn install
   ```
* Run a development web-server:
   ```sh
   $ yarn docs:dev
   ```
* Your local Wiki instance should be up and running on
   [http://localhost:8080/](http://localhost:8080/).

#### Use a container 

You can use a container engine like Podman or Docker to deploy a local development version of wiki inside a container.

**Requirements:** Docker or Podman

* The wiki repository contains the `Containerfile` file that is used to create a container image with development dependencies installed. The command to create the container image requires setting a container name which, for example, is *wiki_dev*:
  ```sh
  podman build -t wiki_dev .
  ```
  :::warning
  It's recommended to rebuild the container image if there is a change in the **package.json** file to make sure it matches the deployed version of `vuepress`.
  You can do it either by removing the current one and building the new one documented above or by creating a new one with a different name without removing the old one.
  ```sh
  podman rmi localhost/wiki_dev
  ```
  :::
* Clean up the first stage container image:
  ```sh
  podman image prune --filter label=stage=auto-clean-stage1
  ```
* Now you can create a container from this image whenever is needed from the image that was built above and mount *docs* to */wiki/docs* inside the container:
  ```sh
  podman run --name wiki_dev --rm -i -t -p 8080:8080 -v "$(pwd)"/docs:/wiki/docs:ro,z localhost/wiki_dev
  ```
  The options of the command are:
  * `podman/docker` - container engine
  * `run` - create a container
  * `--name wiki_dev` - name a container *wiki_dev*
  * `--rm` - remove the container once it is stopped
  * `-i -t` - an interactive terminal session where you can track the deployment process and check the logs. Stop it with `Ctrl+C`.
  * `-p 8080:8080` - map the port number 8080 inside the container to 8080 on the host
  * `-v "$(pwd)"/docs:/wiki/docs:ro,z` - mount `docs` in the current directory on `/wiki/docs` inside the container read-only (ro). **`,z` is needed only for systems that have SELinux.**
  * `localhost/wiki_dev` - the name of the container image
* The wiki instance should be up and running on [http://localhost:8080/](http://localhost:8080/).
* Don't forget to stop the container when you've finished. 

## Working with AlmaLinux documentation

:::tip
We kindly ask that all members respect each other's diverse skills and abilities by acknowledging and appreciating the unique contributions each person brings to the team. Remember to provide as much detail as possible when sharing your expertise to enhance understanding and collaboration among all members.
:::

AlmaLinux Wiki documentation is written with [Markdown](https://www.markdownguide.org/basic-syntax/). Some HTML elements can also be used.

All the content is located in the `/wiki/docs` directory. 

To create a new page:
* Navigate to the `/wiki/docs` directory. 
* Create a markdown file `page-name.md` with a clear name that corresponds to the topic of the page.
* In order to get a page displayed, enlist it in the **config.js** file that is located in the `/wiki/docs/.vuepress` directory.

### Pages style guide

When editing an existing page or writing a new one, we recommend you follow this style guide.

* The top of the page should include meta data with the page title. It should match the file/page name and topic.
  ```
  ---
  title: ' '
  ---
  ```
* If applicable (for example, when creating a new guide), fill out the form below and place it as a table at the top of the page right after the title.
    | Experience Level   | ⭑⭑⭒⭒⭒ (Intermediate) |
    |--------------------|---------------------- |
    | Last modified date | YYYY-MM-DD            | 
    
    * If possible, evaluate the level of skills and experience needed based on the target audience. Experience level options: Beginner, Intermediate, Advanced, Fluent and Proficient
    * Put the last modified or updated date below the experience level. The date format should go as **YYYY-MM-DD**.
* If using this form is not applicable here, it's preferable to write right after the page title the date when the page was last modified. Please, stick, to the following format:
  ```
  ###### last updated: YYYY-MM-DD
  ```

* Write the content of the page using [Markdown syntax](https://www.markdownguide.org/basic-syntax/). Some HTML elements are also allowed.
    * It's recommended to use clear and simple language.
    * It's preferable to divide the content into sections, including these basic ones:
        * Introduction: stating what the page is about.
        * Body: describing all the instructions.
        * Version specific directions: Remember that AlmaLinux currently more than one supported major version. If the directions differ for each release, consider dividing your instructions for each supported version into separate sections.
        * Known caveats: If there are any known or popular issues, write them as a separate section.
We encourage images in guides, but please follow the below guidelines
     * If the page includes images, put them in the `/wiki/docs/.vuepress/public/images` directory where all images are stored.
    * The image name should be clear to understand and match the topic subject it's related to. 
    * The image should not violate any trademarks or copyrights and should be relevant to the content. 
    * The image should not contain any personal information for security reasons.
    * The image should be a proper size that is clear to read. 
    * The image will serve from `/images/`, so do not change the beginning of this path.
* All the commands (even separate ones) and code blocks should be formatted as code blocks, not as inline code:
  ```
  {your command(s)/code}
  ```
    * If there's any example output/code/result, consider mentioning it right after according to the format below. Also, consider formatting it as a code block or as an image.
    
    **An example output you may see:**
    ```
    example
    ```  
* If there's anything to warn about or provide a tip, highlight it with markdown tips and warnings.
* If there are trademarks mentioned on the page, we recommend writing **Trademark notices** at the bottom of the page.
* Before committing the changes and creating a pull request, we also recommend to:
    * Make sure the page is displayed on the wiki correctly by running it on [http://localhost:8080/](http://localhost:8080/).
    * Look through the page to see if any cosmetic changes (typos, minor styling, etc) are needed.

### Review process

Any member of the AlmaLinux OS Foundation, Team and Community can take part in the review process and request any changes or updates. 
Merging the content is under the AlmaLinux OS Foundation and Team responsibility. 
