---
title: "Atomic SIG"
---
# Atomic SIG

The purpose of the Atomic SIG is to explore atomic Linux technologies like bootc, to develop a modern AlmaLinux-based immutable desktop system, and to enable others to build upon our tooling. In short, the purpose of this SIG is to expand AlmaLinux's role in the atomic desktop space.

We maintain [an Atomic Desktop base image](https://github.com/AlmaLinux/atomic-desktop) (available with GNOME or KDE)
and an opinionated [Atomic Workstation](https://github.com/AlmaLinux/atomic-workstation) distribution.

We also maintain a batteries-included [Github template repo](https://github.com/AlmaLinux/atomic-respin-template) that you can use
to make your own custom Atomic AlmaLinux respin! Just click the "Use this template" button and start customizing!!

## How to Join

Joining is easy! You can show up to a meeting, pick up an issue from the list by assigning it to yourself, or ask questions in chat! Not every contributor wants to be a part of the SIG, but if you do, joining is simple.

**Where we chat**

We use [Mattermost](https://chat.almalinux.org/almalinux/channels/sigatomic) for communication.

**Where and when we meet**

We do not currently hold regular meetings, but work asynchronously in Mattermost to accomplish our goals.

## Activities, projects, and deliverables

* [atomic-desktop](https://github.com/AlmaLinux/atomic-desktop): Base desktop bootc image and ISO installer based on [Cloud SIG](https://wiki.almalinux.org/sigs/Cloud.html)'s bootc images starting with AlmaLinux 10.
* [atomic-respin-template](https://github.com/AlmaLinux/atomic-respin-template): Templates/automation/examples to guide downstream extension/customization of the base image
* [atomic-workstation](https://github.com/AlmaLinux/atomic-workstation): A workstation distribution that is opinionated, modern, and polished, based on the previous deliverables
* [atomic-ci](https://github.com/AlmaLinux/atomic-ci): Github Actions CI for common operations, used by the previous deliverables

### Help wanted

Contributions take all kinds of shapes and sizes, and we welcome everyone! If you have expertise or time and would like to help us out, please get in touch!

## SIG members

 * [Isaac Beverly](mailto:imbev@protonmail.com) - SIG lead
 	* Chat: [@imbev](https://chat.almalinux.org/almalinux/messages/@imbev)
 	* Github: [imbev](https://github.com/imbev)
 * [Alex Iribarren](mailto:alex@almalinux.org) - SIG lead
 	* Chat: [@alex.iribarren](https://chat.almalinux.org/almalinux/messages/@alex.iribarren)
 	* Github: [alexiri](https://github.com/alexiri/)
 * [James Reilly](mailto:jreilly1821@gmail.com) - SIG lead
 	* Chat: [@jreilly1821](https://chat.almalinux.org/almalinux/messages/@jreilly1821)
 	* Github: [hanthor](https://github.com/hanthor)
 * [Cameron Knauff](mailto:cameron@stillhq.io)
 	* Chat: [@cameron](https://chat.almalinux.org/almalinux/messages/@cameron)
 	* Github: [PizzaLovingNerd](https://github.com/PizzaLovingNerd)

## Additional information for SIG application approval

We hope to be able to start quickly and have at least the base image ready by Q3 2025.

We will require the creation of:
* An Atomic SIG channel on chat.almalinux.org
* Several git repositories under an AlmaLinux namespace at GitHub
* Several OCI repositories under an AlmaLinux namespace at DockerHub and Quay.io
* (Optional) Access to [openQA](https://openqa.almalinux.org/) to test our images before release
