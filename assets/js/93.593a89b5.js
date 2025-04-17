(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{404:function(e,t,a){"use strict";a.r(t);var s=a(25),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("table",[t("thead",[t("tr",[t("th",[e._v("Experience Level")]),e._v(" "),t("th",[e._v("⭐⭐☆☆☆  (Intermediate)")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Last modified date")]),e._v(" "),t("td",[e._v("2024-04-16")])])])]),e._v(" "),t("h1",{attrs:{id:"elevating-centos-6-to-centos-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elevating-centos-6-to-centos-7"}},[e._v("#")]),e._v(" ELevating CentOS 6 to CentOS 7")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),t("p",[e._v("We "),t("strong",[e._v("HIGHLY")]),e._v(" recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify that migration worked as expected before you attempt to migrate any production system. Please report any issues encountered to the "),t("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(" and/or "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat Migration Channel"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("This guide describes steps to be performed to migrate a CentOS 6 machine to CentOS 7 using the Red Hat Upgrade Tool (redhat-upgrade-tool).")]),e._v(" "),t("p",[e._v("The process consists of two steps:")]),e._v(" "),t("ol",[t("li",[e._v("Upgrading CentOS 6.10 to CentOS 7.2.1511 as this is the latest CentOS version that supports the Red Hat Upgrade Tool.")]),e._v(" "),t("li",[e._v("Upgrading CentOS 7.2.1511 to CentOS 7.9.2009.")])]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("This guide is suitable only for x86_64 architecture.")]),e._v(" "),t("li",[e._v("The most recent version of CentOS 6.10.")]),e._v(" "),t("li",[e._v("An enabled Vault repository")])]),e._v(" "),t("p",[e._v("Please, check the "),t("strong",[e._v("Details")]),e._v(" below for guidance on how to enable the CentOS Vault repositories.")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("DETAILS")]),e._v(" "),t("p",[e._v("To upgrade your CentOS 6 machine, you need working CentOS 6 repositories. Run the below command replace your CentOS-base repo file with a known-good CentOS 6.10 Vault repository configuration:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://repo.almalinux.org/elevate/el6/centos6-vault.repo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" /etc/yum.repos.d/CentOS-Base.repo\n")])])])]),e._v(" "),t("h2",{attrs:{id:"upgrade-centos-6-10-to-centos-7-2-1511"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-centos-6-10-to-centos-7-2-1511"}},[e._v("#")]),e._v(" Upgrade CentOS 6.10 to CentOS 7.2.1511")]),e._v(" "),t("h3",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("As root access is required to use the following steps, make sure that you are logged in as the root user:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("whoami")]),e._v("\n")])])]),t("h6",{attrs:{id:"expected-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-output"}},[e._v("#")]),e._v(" Expected output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("root\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Update your CentOS 6 system to get the most recent updates and verify:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum update  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /etc/centos-release \n")])])]),t("h6",{attrs:{id:"expected-output-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-output-2"}},[e._v("#")]),e._v(" Expected output:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("CentOS release "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Final"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Install the "),t("em",[e._v("elevate-release")]),e._v(" package that contains the configuration file with CentOS 6 upgrade repositories:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" https://repo.almalinux.org/elevate/elevate-release-latest-el6.noarch.rpm\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Install the "),t("code",[e._v("redhat-upgrade-tool")]),e._v(" and "),t("code",[e._v("preupgrade-assistant-contents")]),e._v(" packages that are used to perform the migration:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" redhat-upgrade-tool preupgrade-assistant-contents\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"migrate-the-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate-the-system"}},[e._v("#")]),e._v(" Migrate the system")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Run the pre-upgrade assistant as a pre-ugrade check of the system. It will generate a report file with possible problems and risks for review. No changes will be made at this phase.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("preupg\n")])])])]),e._v(" "),t("li",[t("p",[e._v("The generated "),t("strong",[e._v("result.html")]),e._v(" file is located in the "),t("em",[e._v("/root/preupgrade/")]),e._v(" directory. Inspect it carefully and consider running suitable commands and performing the recommended steps to resolve the reported issues.\nYou can check the risks from the "),t("em",[e._v("results.html")]),e._v(" using the "),t("code",[e._v("preupgr")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("preupg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--riskcheck")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verbose")]),e._v("\n")])])]),t("p",[e._v("Or using, for example, "),t("code",[e._v("lynx")]),e._v(" - a terminal-based web browser:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("lynx")]),e._v(" /root/preupgrade/result.html\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Import CentOS 7 GPG key:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--import")]),e._v(" https://vault.centos.org/7.2.1511/os/x86_64/RPM-GPG-KEY-CentOS-7  \n")])])])]),e._v(" "),t("li",[t("p",[e._v("Start an upgrade:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v(" redhat-upgrade-tool "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--network")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" --cleanup-post "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--instrepo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://vault.centos.org/7.2.1511/os/x86_64/\n")])])]),t("ul",[t("li",[e._v("The "),t("code",[e._v("--cleanup-post")]),e._v(" option will remove the CentOS 6 packages remaining after the migration.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("--network")]),e._v(" option sets the system's release version to use online repositories.")]),e._v(" "),t("li",[e._v("You can add the "),t("code",[e._v("--force")]),e._v(" option to force the migration despite the risks.\n❗️ Consider this option carefully, and remember to have a system backup.")])])]),e._v(" "),t("li",[t("p",[e._v("When the upgrade process is over, reboot the system.")]),e._v(" "),t("p",[e._v("A new entry in GRUB called "),t("code",[e._v("System Upgrade (redhat-upgrade-tool)")]),e._v(" will appear. The system will be automatically booted into it. You can monitor the remainder of the migration process in the console.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The system will reboot twice during the upgrade.")])]),e._v(" "),t("p",[e._v("After the second reboot completes and you are presented with the login screen, login to the system and verify that the current OS is now CentOS 7.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /etc/centos-release\n")])])]),t("h6",{attrs:{id:"expected-output-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-output-3"}},[e._v("#")]),e._v(" Expected output:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("CentOS Linux release "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.2")]),e._v(".1511 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])])])])]),e._v(" "),t("h3",{attrs:{id:"clean-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-up"}},[e._v("#")]),e._v(" Clean up")]),e._v(" "),t("ul",[t("li",[e._v("After the migration is complete, there may be leftover packages from the previous OS (even if you used the "),t("code",[e._v("--cleanup-post")]),e._v(" option). Consider removing or updating them manually."),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-qa")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" el6\n")])])])]),e._v(" "),t("li",[e._v("You should also check your current repo list, and disable any lingering CentOS 6 repositories."),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum repolist "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verbose")]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("Also consider removing the CentOS 6 upgrade repository package, as it is no longer needed and could cause problems in the next steps:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum remove elevate-release\n")])])])]),e._v(" "),t("li",[e._v("The "),t("em",[e._v("CentOS-Base.repo")]),e._v(" file contains CentOS 6 Vault repositories. It wasn't updated during the upgrade process to CenOS 7.2.1511 contain CentOS 7 repositories. Instead, the new "),t("em",[e._v("CentOS-Base.repo.rpmnew")]),e._v(" file was created which you need to remove:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/yum.repos.d/CentOS-Base.repo.rpmnew\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"upgrade-cenos-7-2-1511-to-centos-7-9-2009"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-cenos-7-2-1511-to-centos-7-9-2009"}},[e._v("#")]),e._v(" Upgrade CenOS 7.2.1511 to CentOS 7.9.2009")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("CentOS 7 reached its End-Of-Life meaning the repositories are now offline. To be able to update your CentOS 7.2.1511 machine to CentOS 7.9.2009 you need to update "),t("em",[e._v("CentOS-Base.repo")]),e._v(" file with the CentOS 7 Vault or you can use our CentOS 7 mirror that we've setup for use with ELevate:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" http://el7.repo.almalinux.org/centos/CentOS-Base.repo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" /etc/yum.repos.d/CentOS-Base.repo\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the "),t("code",[e._v("yum")]),e._v(" command to update your CentOS 7.2.1511 machine to the most recent version 7.9:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum update\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Reboot after the update completes and verify the system's version:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /etc/centos-release\n")])])]),t("h6",{attrs:{id:"expected-output-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-output-4"}},[e._v("#")]),e._v(" Expected output:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("CentOS Linux release "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.9")]),e._v(".2009 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])])])])]),e._v(" "),t("h2",{attrs:{id:"get-help-and-contribute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-help-and-contribute"}},[e._v("#")]),e._v(" Get Help and Contribute")]),e._v(" "),t("p",[e._v("We welcome any feedback as it helps to improve the project.")]),e._v(" "),t("p",[e._v("For any help and assistance, or if you want to share your thoughts or contribute to the ELevate project, reach out to us on the "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Community Chat"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"additional-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-documentation"}},[e._v("#")]),e._v(" Additional documentation")]),e._v(" "),t("p",[e._v("Here's the list of additional documentation that you might find useful:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/upgrades-migrations/redhat-upgrade-tool.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Red Hat Upgrade Tool"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/upgrades-migrations/preupgrade-assistant.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("A framework designed to run the Preupgrade Assistant modules"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/upgrades-migrations/preupgrade-assistant-modules.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modules used by an upgrade from CentOS 6 to CentOS 7"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://git.centos.org/sources/preupgrade-assistant-el6toel7-data/c6/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS Preupgrade Data"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"trademarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trademarks"}},[e._v("#")]),e._v(" Trademarks")]),e._v(" "),t("p",[e._v("Red Hat, Red Hat Enterprise Linux, and CentOS are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.")])])}),[],!1,null,null,null);t.default=r.exports}}]);