(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{400:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h6",{attrs:{id:"last-updated-2024-09-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-updated-2024-09-20"}},[e._v("#")]),e._v(" last updated: 2024-09-20")]),e._v(" "),a("h1",{attrs:{id:"elevate-offline-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elevate-offline-guide"}},[e._v("#")]),e._v(" ELevate Offline Guide")]),e._v(" "),a("p",[e._v("This guide describes steps to be performed to migrate an air-gapped machine that has no connection to the Internet but has network access to a private mirror. The process involves at least two hosts:")]),e._v(" "),a("ul",[a("li",[e._v("One with Internet access to be able to create local AlmaLinux and ELevate mirrors")]),e._v(" "),a("li",[e._v("Another machine with access to these private mirrors that will be migrated.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If there's neither access to a private mirror nor the Internet, you'll have to use a data storage device to get local AlmaLinux and ELevate mirrors.")])]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("To migrate an air-gapped machine, you have to create a local mirror to receive updates. For this purpose, the recommended "),a("strong",[e._v("storage space")]),e._v(" is at least 500GB per major version. As there are currently two supported major versions (8 and 9) the storage space should be 1TB.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Several steps must be accomplished before migrating the system.")]),e._v(" "),a("h3",{attrs:{id:"create-a-local-almalinux-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-local-almalinux-mirror"}},[e._v("#")]),e._v(" Create a local AlmaLinux mirror")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on a host with Internet access.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("rsync")]),e._v("  tool can be used to create a local mirror.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Synchronize with the official AlmaLinux mirror via "),a("code",[e._v("rsync")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("/usr/bin/rsync "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-avSH")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.~tmp~'")]),e._v(" --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/\n")])])])]),e._v(" "),a("li",[a("p",[e._v("If needed, create a cron task to sync your local mirror periodically (we recommend updating the mirror every 3 hours):")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" */3 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$((")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("RANDOM\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("))")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" /usr/bin/flock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" /var/run/almalinux_rsync.lock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"/usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/\"")]),e._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Don't forget to replace /example-almalinux-mirror/ directory with the directory you need.")])])])]),e._v(" "),a("h3",{attrs:{id:"create-a-local-elevate-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-local-elevate-mirror"}},[e._v("#")]),e._v(" Create a local ELevate mirror")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on a host with Internet access.")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Synchronize with the official AlmaLinux ELevate mirror via "),a("code",[e._v("rsync")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("/usr/bin/rsync "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-avSH")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.~tmp~'")]),e._v(" --delete-delay --delay-updates  rsync://rsync.repo.almalinux.org/almalinux-elevate/ /example-elevate-mirror/\n")])])])]),e._v(" "),a("li",[a("p",[e._v("If needed, create a cron task to sync your local mirror periodically (we recommend updating the mirror every 3 hours):")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" */3 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$((")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("RANDOM\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("))")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" /usr/bin/flock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" /var/run/almalinux_rsync.lock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"/usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux-elevate/ /example-elevate-mirror/\"")]),e._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Don't forget to replace /example-elevate-mirror/ directory with the directory you need.")])])])]),e._v(" "),a("h3",{attrs:{id:"add-access-to-the-private-elevate-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-access-to-the-private-elevate-mirror"}},[e._v("#")]),e._v(" Add access to the private ELevate mirror")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on a host with access to a private ELevate mirror that will be migrated.")])]),e._v(" "),a("p",[e._v("To be able to install ELevate packages you need to add the local ELevate mirror to your server.")]),e._v(" "),a("ul",[a("li",[e._v("Navigate to the "),a("strong",[e._v("/etc/yum.repos.d")]),e._v(" directory. Use an editor tool of choice, for example, "),a("em",[e._v("vi")]),e._v(" or "),a("em",[e._v("mcedit")]),e._v(" to create a repository "),a("em",[e._v("elevate.repo")]),e._v(" file. It should contain data from your local ELevate repository. Enter the data to the file according to the example:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" [ELevate]\n name=ELevate for EL$releasever\n baseurl=http://mirror.example.com/elevate/el$releasever/$basearch/ \n enabled=1\n gpgcheck=1\n gpgkey=http://mirror.example.com/elevate/RPM-GPG-KEY-ELevate\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"migrate-centos-7-to-almalinux-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-centos-7-to-almalinux-8"}},[e._v("#")]),e._v(" Migrate CentOS 7 to AlmaLinux 8")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on a host with access to private mirrors that will be migrated.")])]),e._v(" "),a("h3",{attrs:{id:"install-elevate-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-elevate-packages"}},[e._v("#")]),e._v(" Install ELevate packages")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install leapp packages and migration data for the target OS you want to upgrade to from the private mirror:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y leapp-upgrade leapp-data-almalinux\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Navigate to the "),a("strong",[e._v("/etc/leapp/files/")]),e._v(" directory to update the leapp configuration file.")])]),e._v(" "),a("li",[a("p",[e._v("Open the "),a("strong",[e._v("leapp_upgrade_repositories.repo")]),e._v(" file and use an editor tool of choice, for example "),a("em",[e._v("vi")]),e._v(" or "),a("em",[e._v("mcedit")]),e._v(", to replace "),a("code",[e._v("baseurl")]),e._v(" link for each repository with a local AlmaLinux mirror directory. Pay attention, that links should belong to a major version you want your system to migrate to.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[almalinux8-baseos] \nname=AlmaLinux 8 - BaseOS\nbaseurl=http://mirror.example.com/almalinux/el$releasever/$basearch/ \nenabled=1\ngpgcheck=1\ngpgkey=http://mirror.example.com/almalinux/RPM-GPG-KEY-AlmaLinux\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"perform-the-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perform-the-migration"}},[e._v("#")]),e._v(" Perform the migration")]),e._v(" "),a("p",[e._v("Once you've edited the "),a("strong",[e._v("leapp_upgrade_repositories.repo")]),e._v(" file to match your local mirror, you can start the migration to AlmaLinux 8.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Start a preupgrade check. In the meanwhile, the Leapp utility creates a special "),a("em",[e._v("/var/log/leapp/leapp-report.txt")]),e._v(" file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Preupgrade check will fail as the default install doesn't meet all requirements for migration.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp preupgrade\n")])])]),a("p",[e._v("This summary report will help you get a picture of whether it is possible to continue the upgrade.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In certain configurations, Leapp generates "),a("em",[e._v("/var/log/leapp/answerfile")]),e._v(" with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.")])])]),e._v(" "),a("li",[a("p",[e._v("The following fixes from "),a("em",[e._v("the /var/log/leapp/leapp-report.txt")]),e._v(" file are the most popular for CentOS 7, but it's recommended to review the whole file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo rmmod pata_acpi\necho PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config\nsudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True\n")])])]),a("p",[e._v("Check the "),a("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page for known and frequent issues and guidance steps to solve them.")])]),e._v(" "),a("li",[a("p",[e._v("Start an upgrade. You'll be offered to reboot the system after this process is completed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp upgrade\nsudo reboot\n")])])])]),e._v(" "),a("li",[a("p",[e._v("A new entry in GRUB called "),a("code",[e._v("ELevate-Upgrade-Initramfs")]),e._v(" will appear. The system will be automatically booted into it.\nSee how the update process goes in the console.")])]),e._v(" "),a("li",[a("p",[e._v("After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /etc/redhat-release\ncat /etc/os-release\nrpm -qa | grep el7 \ncat /var/log/leapp/leapp-report.txt\ncat /var/log/leapp/leapp-upgrade.log\n")])])])]),e._v(" "),a("li",[a("p",[e._v("If your next stage is to migrate to AlmaLinux 9 proceed with the next steps to prepare your system.")])])]),e._v(" "),a("h3",{attrs:{id:"prepare-the-system-for-migration-to-almalinux-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-system-for-migration-to-almalinux-9"}},[e._v("#")]),e._v(" Prepare the system for migration to AlmaLinux 9")]),e._v(" "),a("p",[e._v("When successfully migrated to AlmaLinux 8 OS, consider performing these steps to prepare your system for migration to AlmaLinux 9:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Navigate to the "),a("strong",[e._v("/etc/")]),e._v(" directory and use an editor of your choice to edit the "),a("strong",[e._v("yum.conf")]),e._v(" file. You need to remove everything from the "),a("strong",[e._v("exclude")]),e._v(" line especially that refers to elevate or leapp.")]),e._v(" "),a("h5",{attrs:{id:"an-example-of-yum-conf-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-example-of-yum-conf-file"}},[e._v("#")]),e._v(" An example of yum.conf file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("installonly_limit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("clean_requirements_on_remove")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("best")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("skip_if_unavailable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("False\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("python2-leapp,snactor,leapp-upgrade-el7toel8,leapp\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then navigate to the "),a("em",[e._v("/etc/dnf/")]),e._v(" directory and use an editor of your choice to do the same in the "),a("strong",[e._v("dnf.conf")]),e._v(" file.")])]),e._v(" "),a("li",[a("p",[e._v("Now you can remove/manually upgrade packages left from CentOS 7 without any conflicts.")])]),e._v(" "),a("li",[a("p",[e._v("Check packages left from CentOS 7:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -qa | grep el7\n")])])]),a("h5",{attrs:{id:"an-example-output-with-a-list-of-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-example-output-with-a-list-of-packages"}},[e._v("#")]),e._v(" An example output with a list of packages:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("leapp-upgrade-el7toel8-0.16.0-6.el7.elevate.17.noarch\nyum-plugin-fastestmirror-1.1.31-54.el7_8.noarch\npython2-leapp-0.14.0-1.el7.noarch\nleapp-data-almalinux-0.1-6.el7.noarch\nkernel-3.10.0-1160.102.1.el7.x86_64\nkernel-3.10.0-1160.el7.x86_64\njava-1.7.0-openjdk-headless-1.7.0.261-2.6.22.2.el7_8.x86_64\nbtrfs-progs-4.9.1-1.el7.x86_64\nelevate-release-1.0-2.el7.noarch\nleapp-0.14.0-1.el7.noarch\n")])])]),a("p",[e._v("As mentioned above, consider removing these packages or upgrading them manually to proceed with migration to AlmaLinux 9.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you face difficulties while removing the packages, the following command might help you:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -e --nodeps <package_name>\n")])])])])]),e._v(" "),a("li",[a("p",[e._v("You can also check for the packages left from the migration process and remove them:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -qa | grep elevate\nrpm -qa | grep leapp\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Check whether you have the "),a("em",[e._v("/root/tmp_leapp_py3")]),e._v(" directory created and if so delete it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo rm -fr /root/tmp_leapp_py3\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Clean up your machine.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf clean all\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You may also have to remove old RSA/SHA1 GPG keys. List the keys:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\\t%{SUMMARY}\\n'\n")])])]),a("p",[e._v("To remove them, use use the "),a("code",[e._v("rpm -e")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -e [keyname]\n")])])])])]),e._v(" "),a("p",[e._v("After these preparations are completed, you can migrate your AlmaLinux 8 machine to AlmaLinux 9.")]),e._v(" "),a("h2",{attrs:{id:"migrate-almalinux-8-to-almalinux-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-almalinux-8-to-almalinux-9"}},[e._v("#")]),e._v(" Migrate AlmaLinux 8 to AlmaLinux 9")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on a host with access to private mirrors that will be migrated.")])]),e._v(" "),a("p",[e._v("If you previously migrated your airgapped system to AlmaLinux 8, your local repositories of AlmaLinux and ELevate should still be present.\nIf this migration is the first one, you have to "),a("a",{attrs:{href:"#prerequisites"}},[e._v("create your local mirrors")]),e._v(" first to proceed with the migration.")]),e._v(" "),a("h3",{attrs:{id:"install-elevate-packages-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-elevate-packages-2"}},[e._v("#")]),e._v(" Install ELevate packages")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install leapp packages and migration data for the target OS you want to upgrade to from the private mirror:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y leapp-upgrade leapp-data-almalinux\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Navigate to the "),a("strong",[e._v("/etc/leapp/files/")]),e._v(" directory to update the leapp configuration file.")])]),e._v(" "),a("li",[a("p",[e._v("Open the "),a("strong",[e._v("leapp_upgrade_repositories.repo")]),e._v(" file and use an editor tool of choice, for example "),a("em",[e._v("vi")]),e._v(" or "),a("em",[e._v("mcedit")]),e._v(", to replace "),a("code",[e._v("baseurl")]),e._v(" link for each repository with a local AlmaLinux mirror directory. Pay attention, that links should belong to a major version you want your system to migrate to.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[almalinux9-baseos] \nname=AlmaLinux 9 - BaseOS\nbaseurl=http://mirror.example.com/almalinux/el$releasever/$basearch/ \nenabled=1\ngpgcheck=1\ngpgkey=http://mirror.example.com/almalinux/RPM-GPG-KEY-AlmaLinux\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"perform-the-migration-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perform-the-migration-2"}},[e._v("#")]),e._v(" Perform the migration")]),e._v(" "),a("p",[e._v("Once you've edited the "),a("strong",[e._v("leapp_upgrade_repositories.repo")]),e._v(" file to match your local mirror, you can start the migration to AlmaLinux 9.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Start a preupgrade check. In the meanwhile, the Leapp utility creates a special "),a("em",[e._v("/var/log/leapp/leapp-report.txt")]),e._v(" file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Preupgrade check will fail as the default install doesn't meet all requirements for migration.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp preupgrade\n")])])]),a("p",[e._v("This summary report will help you get a picture of whether it is possible to continue the upgrade.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In certain configurations, Leapp generates "),a("em",[e._v("/var/log/leapp/answerfile")]),e._v(" with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.")])])]),e._v(" "),a("li",[a("p",[e._v("The following fixes from "),a("em",[e._v("the /var/log/leapp/leapp-report.txt")]),e._v(" file are the most popular fixes for RHEL8-based operating systems:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/"')]),e._v(" /etc/firewalld/firewalld.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" leapp answer "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--section")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("check_vdo.confirm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n")])])]),a("p",[e._v("You might also find the following issue in the "),a("strong",[e._v("leapp-report")]),e._v(" file that can interfere with the migration. Consider removing the file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v(" Network configuration "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" unsupported device types detected\n Summary: RHEL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(" does not support the legacy network-scripts package that was deprecated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" RHEL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" favor of NetworkManager. Files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" device types that are not supported by NetworkManager are present "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the system. Files with the problematic configuration:\n   - /etc/sysconfig/network-scripts/ifcfg-eth0\n")])])]),a("p",[e._v("Check the "),a("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page for known and frequent issues and guidance steps to solve them.")])]),e._v(" "),a("li",[a("p",[e._v("Start an upgrade. You'll be offered to reboot the system after this process is completed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp upgrade\nsudo reboot\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You might want to remove the "),a("strong",[e._v("make-devel")]),e._v(" package as it conflicts when running "),a("code",[e._v("leapp upgrade")]),e._v(" and thus this step fails.")])])]),e._v(" "),a("li",[a("p",[e._v("A new entry in GRUB called "),a("code",[e._v("ELevate-Upgrade-Initramfs")]),e._v(" will appear. The system will be automatically booted into it.\nSee how the update process goes in the console.")])]),e._v(" "),a("li",[a("p",[e._v("After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /etc/redhat-release\ncat /etc/os-release\nrpm -qa | grep el8\ncat /var/log/leapp/leapp-report.txt\ncat /var/log/leapp/leapp-upgrade.log\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"get-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-help"}},[e._v("#")]),e._v(" Get Help")]),e._v(" "),a("p",[e._v("For more help and assistance reach out to us in the ~migration channel on the "),a("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Community Chat"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);