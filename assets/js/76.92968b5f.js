(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{386:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h6",{attrs:{id:"last-updated-2025-04-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-updated-2025-04-11"}},[e._v("#")]),e._v(" last updated: 2025-04-11")]),e._v(" "),a("h1",{attrs:{id:"almalinux-migration-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-migration-guide"}},[e._v("#")]),e._v(" AlmaLinux Migration Guide")]),e._v(" "),a("p",[e._v("This guide describes how to convert your operating system to AlmaLinux using the "),a("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Migration tool"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("What OSes can be converted:")]),e._v(" "),a("ul",[a("li",[e._v("CentOS 8")]),e._v(" "),a("li",[e._v("CentOS Stream 8, 9")]),e._v(" "),a("li",[e._v("Miracle Linux 8, 9")]),e._v(" "),a("li",[e._v("Oracle Linux 8, 9")]),e._v(" "),a("li",[e._v("RHEL 8, 9")]),e._v(" "),a("li",[e._v("Rocky Linux 8, 9")]),e._v(" "),a("li",[e._v("Virtuozzo Linux (VZLinux) 8, 9")])]),e._v(" "),a("p",[e._v("This tool also supports cPanel, Plesk and DirectAdmin panels.")]),e._v(" "),a("p",[e._v("The minimal supported version of EL8 operating systems is 8.4. In case your OS version is lower, please, upgrade it.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("It's recommended to have a backup or snapshot of your system. There'll be a restore point if something goes wrong.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Make sure you are using reliable console access to your system. It's recommended that the migration tool is run from inside main console or via ssh.")])]),e._v(" "),a("h2",{attrs:{id:"migrating-using-almalinux-public-repositories-online-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-using-almalinux-public-repositories-online-systems"}},[e._v("#")]),e._v(" Migrating using AlmaLinux public repositories (Online Systems)")]),e._v(" "),a("p",[e._v("These steps are suitable for standard migrations on online systems that can access official AlmaLinux repositories during the migration process.")]),e._v(" "),a("p",[e._v("Convert your EL8 or EL9 system to AlmaLinux using CLI:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Run the following command to update your operating system if needed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf update -y\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Run the following command to download "),a("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),a("OutboundLink")],1),e._v(" script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Run the script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash almalinux-deploy.sh\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Check the output for any errors. If the conversion went without any issues, you'll see that "),a("code",[e._v("Migration to AlmaLinux is completed")]),e._v(" in the output.")])]),e._v(" "),a("li",[a("p",[e._v("Reboot the system to boot with AlmaLinux kernel:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo reboot\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Ensure that your system was successfully converted:")]),e._v(" "),a("ul",[a("li",[e._v("Check the release file:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat /etc/redhat-release\nAlmaLinux release 8.7 (Stone Smilodon)\n")])])])]),e._v(" "),a("li",[e._v("Check that the system boots with AlmaLinux kernel by default:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ sudo grubby --info DEFAULT | grep AlmaLinux\ntitle="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"\n')])])])])])])]),e._v(" "),a("h2",{attrs:{id:"migrating-an-air-gapped-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-an-air-gapped-machine"}},[e._v("#")]),e._v(" Migrating an air-gapped machine")]),e._v(" "),a("p",[e._v("These steps are recommended for migrating air-gapped machines that have no internet connection but have network access to a private mirror or access to a data storage device with a mirror.")]),e._v(" "),a("p",[e._v("The process involves at least two hosts:")]),e._v(" "),a("ul",[a("li",[e._v("A system with internet access to create a local AlmaLinux mirror or to store the mirror on a data storage device.")]),e._v(" "),a("li",[e._v("The target system that will be migrated.")])]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("To migrate an air-gapped machine, you have to create a local mirror to receive updates. For this purpose, the recommended storage space is at least 500GB per major version.")]),e._v(" "),a("h3",{attrs:{id:"create-a-local-private-almalinux-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-local-private-almalinux-mirror"}},[e._v("#")]),e._v(" Create a local, private AlmaLinux mirror")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on a host with Internet access.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("rsync")]),e._v("  tool can be used to create a mirror.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Synchronize with the official AlmaLinux mirror via "),a("code",[e._v("rsync")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("/usr/bin/rsync "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-avSH")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.~tmp~'")]),e._v(" --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/\n")])])])]),e._v(" "),a("li",[a("p",[e._v("If needed, create a cron task to sync your mirror periodically (we recommend updating the mirror every 3 hours):")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" */3 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$((")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("RANDOM\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("))")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" /usr/bin/flock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" /var/run/almalinux_rsync.lock "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"/usr/bin/rsync -avSH --exclude='.~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /example-almalinux-mirror/\"")]),e._v("\n")])])]),a("p",[e._v("The "),a("code",[e._v("/example-almalinux-mirror/")]),e._v(" can be located on an external data storage device, so the device can be used on systems that don’t have direct access to the mirror you created.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Don't forget to replace /example-almalinux-mirror/ directory with the directory you need.")])])])]),e._v(" "),a("h3",{attrs:{id:"if-the-local-mirror-is-on-a-device-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-the-local-mirror-is-on-a-device-storage"}},[e._v("#")]),e._v(" If the local mirror is on a device storage")]),e._v(" "),a("p",[e._v("If there's no access to a private mirror or the internet, you'll have to use a data storage device with a local private mirror created using the steps above. Ensure the device with the mirror is directly accessible to the migrating system, for example, by mounting it to the "),a("code",[e._v("/opt")]),e._v(" directory.")]),e._v(" "),a("p",[e._v("Make sure the mirror on the device follows the AlmaLinux repository directory structure. Example for AlmaLinux 8, x86-64 arch:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/opt\n├── almalinux-release-latest-8.x86_64.rpm\n├── RPM-GPG-KEY-AlmaLinux-8\n└── 8\n    ├── AppStream\n    │   └── x86_64\n    │       └── os\n    │           ├── Packages\n    │           └── repodata\n    ├── BaseOS\n    │   └── x86_64\n    │       └── os\n    │           ├── Packages\n    │           └── repodata\n    ├── PowerTools\n    .   └── x86_64\n    .       └── os\n    .           ├── Packages\n                └── repodata\n")])])]),a("p",[e._v("where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Packages")]),e._v(" - folder with corresponding repository, all packages")]),e._v(" "),a("li",[a("code",[e._v("repodata")]),e._v(" - folder with repository metadata")])]),e._v(" "),a("p",[e._v("Note, it's mandatory you download the "),a("code",[e._v("almalinux-release")]),e._v(" package and public GPG key corresponding to your release, like "),a("code",[e._v("almalinux-release-latest-8.x86_64.rpm")]),e._v(" and "),a("code",[e._v("RPM-GPG-KEY-AlmaLinux-8")]),e._v(" for AlmaLinux 8 x86_64, from "),a("a",{attrs:{href:"https://repo.almalinux.org/almalinux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.almalinux.org/almalinux/"),a("OutboundLink")],1),e._v(" and place them into the root of "),a("code",[e._v("/opt")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"perform-the-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perform-the-migration"}},[e._v("#")]),e._v(" Perform the migration")]),e._v(" "),a("p",[a("strong",[e._v("These steps are to be performed on the target system that will be migrated.")])]),e._v(" "),a("p",[e._v("Convert your EL8 or EL9 system to AlmaLinux using CLI:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("It's highly recommended that your operating system have all the most recent packages.")])]),e._v(" "),a("li",[a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),a("OutboundLink")],1),e._v(" script is available on your system.")])]),e._v(" "),a("li",[a("p",[e._v("Run the script using one of the following methods:")]),e._v(" "),a("ul",[a("li",[e._v("If your AlmaLinux private local mirror is accessible via network, for example, at http://mirror.example.com/example-almalinux-mirror:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash almalinux-deploy.sh --local-repo=http://mirror.example.com/example-almalinux-mirror\n")])])]),a("ul",[a("li",[e._v("If your AlmaLinux private mirror is stored locally in the file-system, for example, in the "),a("code",[e._v("/opt")]),e._v(" directory:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash almalinux-deploy.sh --local-repo=file:///opt\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Check the output for any errors. If the conversion went without any issues, you'll see that "),a("code",[e._v("Migration to AlmaLinux is completed")]),e._v(" in the output.")])]),e._v(" "),a("li",[a("p",[e._v("Reboot the system to boot with AlmaLinux kernel:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo reboot\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Ensure that your system was successfully converted:")]),e._v(" "),a("ul",[a("li",[e._v("Check the release file:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat /etc/redhat-release\nAlmaLinux release 8.7 (Stone Smilodon)\n")])])])]),e._v(" "),a("li",[e._v("Check that the system boots with AlmaLinux kernel by default:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ sudo grubby --info DEFAULT | grep AlmaLinux\ntitle="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"\n')])])])])])])]),e._v(" "),a("h2",{attrs:{id:"migrating-from-centos-versions-lower-than-8-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-centos-versions-lower-than-8-4"}},[e._v("#")]),e._v(" Migrating from CentOS versions lower than 8.4")]),e._v(" "),a("p",[e._v("There are a few additional moments when you are converting your CentOS System.\nCentOS 8.4 or 8.5 is required to convert to AlmaLinux. If your CentOS version is lower, it is recommended to update it to 8.5 before converting to AlmaLinux. Though, it's not necessary if your CentOS version is at least CentOS 8.4.")]),e._v(" "),a("ul",[a("li",[e._v("As of January 31, 2022, the CentOS 8 mirror lists are offline. To successfully perform "),a("code",[e._v("dnf update -y")]),e._v(" you need to update your "),a("code",[e._v("dnf")]),e._v(" config files to point to a valid mirror. You can use the following "),a("code",[e._v("sed")]),e._v(" commands for convenience to restore dnf to a functional state that will let you update to 8.5 and subsequently AlmaLinux.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[baseos\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/BaseOS/$basearch/os' /etc/yum.repos.d/CentOS-Linux-BaseOS.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[appstream\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/AppStream/$basearch/os' /etc/yum.repos.d/CentOS-Linux-AppStream.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[cr\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/ContinuousRelease/$basearch/os' /etc/yum.repos.d/CentOS-Linux-ContinuousRelease.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[devel\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/Devel/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Devel.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[extras\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/extras/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Extras.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[fasttrack\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/fasttrack/$basearch/os' /etc/yum.repos.d/CentOS-Linux-FastTrack.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[ha\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/HighAvailability/$basearch/os' /etc/yum.repos.d/CentOS-Linux-HighAvailability.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[plus\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/centosplus/$basearch/os' /etc/yum.repos.d/CentOS-Linux-Plus.repo\nsudo sed -i -e '/mirrorlist=http:\\/\\/mirrorlist.centos.org\\/?release=$releasever&arch=$basearch&repo=/ s/^#*/#/' -e '/baseurl=http:\\/\\/mirror.centos.org\\/$contentdir\\/$releasever\\// s/^#*/#/' -e '/^\\[powertools\\]/a baseurl=https://mirror.rackspace.com/centos-vault/8.5.2111/PowerTools/$basearch/os' /etc/yum.repos.d/CentOS-Linux-PowerTools.repo\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Alternatively, you can use the "),a("code",[e._v("-f")]),e._v(" flag to handle this for you when running the "),a("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),a("OutboundLink")],1),e._v(" script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash almalinux-deploy.sh -f\n")])])])]),e._v(" "),a("ul",[a("li",[e._v("Run the following command to update your operating system:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf update -y\n")])])]),a("ul",[a("li",[e._v("Reboot the system after the updating:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo reboot\n")])])]),a("ul",[a("li",[e._v("Run the following command to download "),a("a",{attrs:{href:"https://github.com/AlmaLinux/almalinux-deploy/blob/master/almalinux-deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-deploy.sh"),a("OutboundLink")],1),e._v(" script:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh\n")])])]),a("ul",[a("li",[e._v("Run the script:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo bash almalinux-deploy.sh\n")])])]),a("ul",[a("li",[e._v("Ensure that your system was successfully converted:\n"),a("ul",[a("li",[e._v("check the release file")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat /etc/redhat-release\nAlmaLinux release 8.7 (Stone Smilodon)\n")])])]),a("ul",[a("li",[e._v("check that the system boots with AlmaLinux kernel by default")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ sudo grubby --info DEFAULT | grep AlmaLinux\ntitle="AlmaLinux (4.18.0-425.3.1.el8.x86_64) 8.7 (Stone Smilodon)"\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"get-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-help"}},[e._v("#")]),e._v(" Get Help")]),e._v(" "),a("p",[e._v("For more help and assistance reach out to us in the ~migration channel on the "),a("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Community Chat"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);