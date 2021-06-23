# We strive to be transparent.

The AlmaLinux OS Foundation is 501(c)6 non-profit organization. It was setup by CloudLinux to create an an independent organization that will own all assets related to AlmaLinux OS.

As of Jun 23, 2021 the foundation has a six directors board.
- Simon Phipps - former president of the Open Source Initiative
- Igor Seletskiy, CEO of CloudLinux
- Eugene Zamriy, Release Engineering @ CloudLinux
- Jack Aboutboul, Community Leader @ AlmaLinux, employed by CloudLinux
- Jesse Asklund, WebPros
- benny Vasquez, progress.com

## The plans for the board
- The board is currently working on a membership structure. This is pending legal review of the membership structure and bylaws and should be enacted by the end of July or August of 2021
- Igor Seletskiy will step down from the board around that time. (ETA early August to September of 2021)
- The board will be expended to up to 13 directors (as new members arrive) to make sure that no single company controls the AlmaLinux OS Foundation.

## Assets and build environment
The complete build environment is yet to be fully open-sourced, but it will be in Q3 of 2021, as we get rid of some key tie-ins into CloudLinux infrastructure. We are planning to use AWS, Azure, GCE & Equinix Metal and others for our build/test environments.

All the code we release is under GPL3 or MIT license.
All the trademarks and assets are owned by AlmaLinux OS Foundation.

Some assets that were either transfered from CloudLinux, or yet to be transferred to AlmaLinux

| asset | What needs to be done | Status |
|:--- |:--- |:--- |
| almalinux.org domain | Assign the rights to AlmaLinux, in theory, we can leave the control over it at CloudLinux IT falks, same as over the rest AlmaLinux infrastructure | DONE as of May 24, 2021 |
| AlmaLinux OS trademark sublicense | Request CloudLinux Foundation to re-assign AlmaLinux OS from CL to AlmaLinux OS Foundation | DONE, Sublicense ID number 20210506-0001 |
| social media accounts | Reassign them to AlmaLinux OS Foundation. Need to create a full list |  DONE |
| github almalinux account | Already open-sourced, nothing needs to be done | DONE |
| Build/Test system | Work has started to open source it, but it will require some time. ETA - end of Q2 or Q3 | In Progress |
| RPM signing keys | Need to be "assigned" as belonging to AlmaLinux OS Foundation, need to come up with signing ceremony, who controls it | Q3: Need to come up with rules for holding keys 
| EV certificate for Secure Boot | Currently, we use the same EV certificate for both CloudLinux and AlmaLinux shim bootloaders. It is registered to CloudLinux Inc. If we want to have a separate bootloader/certificate for AlmaLinux, we need to buy another EV key, put it into a bare metal server, build a new shim, get it reviewed by Red Hat, and signed by Microsoft again. |  Q3: Need to buy new EV cert and register it |
| Logo License for the foundation | Transfer documents, and initial acquisition document uploaded into a Logo Transfer folder, transfer document signed | DONE| 

