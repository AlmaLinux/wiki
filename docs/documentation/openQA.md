---
title: "openQA"
---

## About openQA in the AlmaLinux Project

AlmaLinux places great importance on thorough testing. This guide outlines the implementation and use of the openQA tool for automating the testing of the AlmaLinux OS installation process across all supported architectures.

Accessible at [openqa.almalinux.org](https://openqa.almalinux.org/), the openQA tool uses virtual machines to reproduce the installation process and check the output (both serial console and graphics output).

Detailed information about openQA can be found at [open.qa](https://open.qa/) and [open.qa/docs](https://open.qa/docs/).

#### Supported Architectures

- x86-64
- aarch64
- ppc64le
- s390x

#### AlmaLinux openQA repositories

There are three GitHub repositories involved in AlmaLinux OpenQA Testing:

- [openqa-infra](https://github.com/AlmaLinux/openqa-infra) - contains the install and configuration scripts and essential documentation
- [os-autoinst-distri-almalinux](https://github.com/AlmaLinux/os-autoinst-distri-almalinux) - openQA test scripts
- [openqa-createhdds](https://github.com/AlmaLinux/openqa-createhdds) - utility project to create hard-disk image files from KickStarts files

## User Guide

This User Guide describes what information can be found on the [openqa.almalinux.org](https://openqa.almalinux.org/)

To begin with, navigate your browser to https://openqa.almalinux.org.
You will find yourself on the main page. You can see the [latest tested jobs](#latest-tests-on-the-main-page) and their test statuses.
![image](/images/openQA-main_page.png)

:::tip
You can see the **_Learn more_** button on the main page. It leads you directly to **[open.qa](https://open.qa/)**.
:::

:::tip
**Log in** is available only for members of the AlmaLinux Organization on GitHub, but all the tests, their results and logs are also available for an unauthorized user.
:::

OpenQA test suites are executed in separate processes, referred to as "jobs," with each job focusing on testing a specific piece of installer functionality.

You can use the **search** field to find:

- job templates by name or description
- job modules by filename
- test modules within the test distributions, either by filename or source code.

![image](/images/openQA-Search.png)

### Latest tests on the main page

The main page shows the latest tested jobs with the statuses. Clicking on the build (a version of a product) or a test status scale lead you to a _Test result overview_.
![image](/images/openQA-Test_Result_Overview.png)

#### Summary of Test Result Overview

The test result overview provides the following details:

- Total number of test jobs performed
- Job result statuses, which typically include:
  - Passed - No critical failures detected during the process
  - Failed - At least one critical assertion not satisfied
  - Soft-Failed - At least one known, non-critical issue found
  - Skipped - Job not started due to failed dependencies
  - Flavors - Specific variants of a product
- A test suite for each flavor, is accompanied by a job result icon.

#### Result details

- You can view the tests conducted, their statuses, and screenshots. By clicking on the test icon, you will be directed to the job's **Details** page, which displays the screenshots and the time taken to complete the job.
  ![image](/images/openQA-Test_Details.png)

- Clicking on a screenshot will enlarge it and display a "needle" – a mechanism used to determine the state of the virtual machine by detecting the presence of specific elements on the machine's output (screen).
  ![image](/images/openQA-needle.png)
  :::tip
  There's a small camera icon that will take you to a video recording of the executed test.
  Example:
  ![image](/images/openQA-video_recording.png)
  :::

- The **Logs and Assets** section enables you to download result files and the product that was tested (an iso file).
- Moreover, there're **Settings** section for job's settings, **Comments**, and the **Next&Previous** results for the latest job for this scenario.

### All Tests

The **All Tests** option leads to a list of jobs that are running (in the process), scheduled and the last 500 finished jobs. The last 500 finished jobs can be filtered by the result status.
![image](/images/openQA-All_Tests.png)

:::tip
openQA is employed to evaluate diverse combinations of actions and configurations in the AlmaLinux installer. By establishing a virtual machine, executing a sequence of steps, and generating a result for each unique combination, openQA ensures comprehensive testing. These runs, known as 'jobs,' are assigned a numeric identifier and are governed by various settings that determine their behavior.
:::

Numerous job parameters are involved in the process:

- `Medium`: Represents the "tested product" and consists of a name along with a set of variables that characterize the product.
- `Test`: Displays a job status icon and ID. Hovering over the status icon reveals the status description, such as done, failed, etc. Hovering over the branch icon after the test name highlights the job's children in blue and parents in red (if present on the same page).
  :::tip
  Clicking on the status icon will lead you to the test overview page.
  :::

  :::tip
  Clicking on the test icons for an ongoing job will take you to a live video feed of the test in progress.

  Example:
  ![image](/images/openQA-Live_View.png)
  :::

- `Progress`: Indicates the percentage of test completion through a progress scale.
- `Priority`: A value used by the scheduler to determine the next job in line.
- `Result`: Displays the "result overview" icon set, including the number of passed and failed modules, dependencies, and the presence of bugs, among others.
- `Started`: Timestamp indicating when a job began.
- `Created`: Timestamp indicating when a job was created.
- `Finished`: Timestamp indicating when a job was completed.

### Job Groups

The **Job Groups** option opens a menu.
![image](/images/openQA-Job_Groups.png)

Each job is assigned to a group based on its respective architecture. _Updates_ groups pertain to jobs associated with products that have updates. When selecting a job group, you'll be shown the most recent tested builds for that group, accompanied by a test results scale.

## Contribute and Get Help

If you feel like getting involved or for questions and discussions, please, join us the in the [Mattermost Chat](https://chat.almalinux.org/almalinux/channels/town-square) and check the [openQA repositories](#about-openqa-in-the-almalinux-project).
