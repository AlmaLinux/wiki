(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{466:function(e,a,t){"use strict";t.r(a);var s=t(25),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"a03-r9-❯-nvidia-installation-on-9-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a03-r9-❯-nvidia-installation-on-9-x"}},[e._v("#")]),e._v(" A03 R9 ❯ NVIDIA: Installation on 9.x")]),e._v(" "),a("p",[a("small",[e._v("ℹ️ This article is part of AlmaLinux "),a("RouterLink",{attrs:{to:"/series/"}},[e._v("System Series")]),e._v(".")],1)]),a("hr"),a("p"),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("💡")]),e._v(" "),a("th",[e._v("Experience Level")]),e._v(" "),a("th",[e._v("⭐☆☆☆☆")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("📆")]),e._v(" "),a("td",[a("small",[e._v("Last modified ")])]),e._v(" "),a("td",[e._v("2024-02-02")])]),e._v(" "),a("tr",[a("td",[e._v("🔧")]),e._v(" "),a("td",[a("small",[e._v("Tested by "),a("br"),e._v(" ↳ version | platform | date ")])]),e._v(" "),a("td",[a("small",[a("a",{attrs:{href:"mailto:none@almalinux.org"}},[e._v("none")]),e._v(" "),a("br"),e._v("  ↳ 9.x | x86_64 | 2023-05-xx ")])])])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"🌟-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🌟-introduction"}},[e._v("#")]),e._v(" 🌟 Introduction")]),e._v(" "),a("p",[e._v("This is a dedicated example for the AlmaLinux 9.x series, demonstrating how to install NVIDIA graphics driver using one of three variants:")]),e._v(" "),a("ul",[a("li",[e._v("Variant I: Precompiled/Binary Driver")]),e._v(" "),a("li",[e._v("Variant II: Compile Driver Source")]),e._v(" "),a("li",[e._v("Variant III: NVIDIA .run Driver Installation Guide")])]),e._v(" "),a("h2",{attrs:{id:"🔖-variant-i-install-binary-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔖-variant-i-install-binary-driver"}},[e._v("#")]),e._v(" 🔖 Variant I: Install Binary Driver")]),e._v(" "),a("p",[e._v("➡️  Enable PowerTools:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf config-manager --set-enabled powertools\nsudo dnf makecache\n")])])]),a("p",[e._v("➡️  Add EPEL9")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf -y install epel-release\nsudo dnf upgrade\n")])])]),a("p",[e._v("➡️  Add NVIDIA Repository:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo\nsudo dnf makecache\n")])])]),a("p",[e._v("➡️  Install the latest NVIDIA driver:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf module install nvidia-driver:latest\n")])])]),a("p",[e._v("➡️  Install third-party libraries for CUDA:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf install freeglut-devel libX11-devel libXi-devel libXmu-devel make mesa-libGLU-devel freeimage-devel libglfw3-devel\n")])])]),a("h2",{attrs:{id:"🔖-variant-ii-compile-driver-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔖-variant-ii-compile-driver-source"}},[e._v("#")]),e._v(" 🔖 Variant II: Compile Driver Source")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Installing NVIDIA drivers on AlmaLinux 9 requires using ELRepo Mainline kernel.")])]),e._v(" "),a("h3",{attrs:{id:"elrepo-releated-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elrepo-releated-steps"}},[e._v("#")]),e._v(" ELRepo releated steps")]),e._v(" "),a("p",[e._v("➡️ Enable CodeReady Builder & add EPEL9:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf config-manager --set-enabled crb\nsudo dnf makecache && sudo dnf -y install epel-release\nsudo dnf makecache\n")])])]),a("p",[e._v("➡️  Add ELRepo:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\nsudo dnf -y install https://www.elrepo.org/elrepo-release-9.el9.elrepo.noarch.rpm\nsudo dnf makecache\n")])])]),a("p",[e._v("➡️  Enable ELRepo Mainline Kernel Repo:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf config-manager --set-enabled elrepo-kernel\nsudo dnf makecache\n")])])]),a("p",[e._v("➡️  Install ELrepo Mainline kernel:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf -y install kernel-ml kernel-ml-modules kernel-ml-modules-extra kernel-ml-devel kernel-headers\n")])])]),a("h3",{attrs:{id:"nvidia-driver-build-related-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-driver-build-related-steps"}},[e._v("#")]),e._v(" NVIDIA driver build related steps")]),e._v(" "),a("p",[e._v("➡️  Add NVIDIA repository:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo\nsudo dnf makecache\n")])])]),a("p",[e._v("➡️  Install NVIDIA DKMS Drivers:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf module install nvidia-driver:latest-dkms\n")])])]),a("p",[e._v("➡️  Disable Nouveau:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("printf 'blacklist nouveau\\n' | sudo tee /etc/modprobe.d/nouveau-blacklist.conf\nsudo dracut -f --regenerate-all\nlsmod | grep -Ei '(nouv|nvidia)'\n")])])]),a("p",[e._v("➡️  Reboot to runlevel 3:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl set-default multi-user.target\nsudo reboot\nsudo systemctl set-default graphical.target\nsudo reboot\n")])])]),a("h2",{attrs:{id:"🔖-variant-iii-nvidia-run-driver-installation-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔖-variant-iii-nvidia-run-driver-installation-guide"}},[e._v("#")]),e._v(" 🔖 Variant III: NVIDIA .run Driver Installation Guide")]),e._v(" "),a("p",[e._v("➡️  Enable needed repository :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf install epel-release\nsudo dnf config-manager --enable crb\nsudo dnf config-manager --set-enabled extras\n")])])]),a("p",[e._v("➡️  Install needed packages :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf install kernel-devel\nsudo dnf install kernel-headers\nsudo dnf install dkms\nsudo dnf install redhat-lsb-core\nsudo dnf install vulkan\nsudo dnf install vulkan-tools\nsudo dnf install vulkan-headers\nsudo dnf install vulkan-loader-devel\n")])])]),a("p",[e._v("➡️  Disable Nouveau :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sudo touch /etc/modprobe.d/nouveau-blacklist.conf\necho "blacklist nouveau" | sudo tee /etc/modprobe.d/nouveau-blacklist.conf\necho "options nouveau modeset=0" | sudo tee -a /etc/modprobe.d/nouveau-blacklist.conf\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dracut --force\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo grub2-mkconfig -o /boot/grub2/grub.cfg\nsudo grub2-mkconfig -o /boot/efi/EFI/almalinux/grub.cfg\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo reboot\n")])])]),a("p",[e._v("➡️  Install the .run driver :")]),e._v(" "),a("p",[a("strong",[e._v("Download the latest driver ("),a("strong",[e._v("Verify compatibility with your GPU")]),e._v("):")])]),e._v(" "),a("p",[e._v("https://www.nvidia.com/en-us/drivers/unix/linux-amd64-display-archive/")]),e._v(" "),a("p",[e._v("➡️  Go into the downloaded driver directory ("),a("strong",[e._v("Replace /path/to/driver with the actual path")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /path/to/driver\n")])])]),a("p",[e._v("➡️  Make the driver executable ("),a("strong",[e._v("XXX.XXX.XX Is the driver version")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo chmod +x NVIDIA-LINUX-x86_64-XXX.XXX.XX.run\n")])])]),a("p",[e._v("➡️  Switch to Run Level 3 :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo init 3\n")])])]),a("p",[e._v("➡️  .run Driver installation options :")]),e._v(" "),a("p",[a("strong",[e._v("Choose either Option 1 or Option 2 based on your preference.")])]),e._v(" "),a("p",[a("strong",[e._v("Option 1")]),e._v(" :")]),e._v(" "),a("p",[e._v("Install via the Console Text UI by following the prompt:\n"),a("strong",[e._v("Replace XXX.XXX.XX with the actual driver version.")])]),e._v(" "),a("p",[e._v("sudo ./NVIDIA-LINUX-x86_64-XXX.XXX.XX.run")]),e._v(" "),a("p",[a("strong",[e._v("Option 2")]),e._v(" :")]),e._v(" "),a("p",[e._v("Install silently via console :\n"),a("strong",[e._v("Replace XXX.XXX.XX with the actual driver version.")])]),e._v(" "),a("p",[e._v("sudo ./NVIDIA-Linux-x86_64-XXX.XXX.XX.run --accept-license --silent --run-nvidia-xconfig --dkms")]),e._v(" "),a("p",[e._v("➡️  Update the initramfs ("),a("strong",[e._v("This is needed as of 535.XXX.XX drivers")]),e._v(") :\nUpdate the initramfs to ensure the changes made by the NVIDIA driver installation are reflected.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dracut -f\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo grub2-mkconfig -o /boot/grub2/grub.cfg\nsudo grub2-mkconfig -o /boot/efi/EFI/almalinux/grub.cfg\n")])])]),a("p",[e._v("➡️  Set the default target to graphical for a desktop environment & Set the default target back to multi-user for a server or command-line environment.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl set-default graphical.target\nsudo systemctl set-default multi-user.target\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo reboot\n")])])]),a("h2",{attrs:{id:"known-issue-with-nvidia-settings-desktop-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-issue-with-nvidia-settings-desktop-icon"}},[e._v("#")]),e._v(" Known issue with NVIDIA-Settings Desktop Icon** :")]),e._v(" "),a("h3",{attrs:{id:"create-nvidia-settings-desktop-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-nvidia-settings-desktop-icon"}},[e._v("#")]),e._v(" Create NVIDIA Settings desktop icon :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sudo echo "[Desktop Entry]" | sudo tee /usr/share/applications/nvidia-settings.desktop\nsudo echo "Type=Application" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\nsudo echo "Name=NVIDIA Settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\nsudo echo "Comment=Configure NVIDIA Settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\nsudo echo "Exec=nvidia-settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\nsudo echo "Icon=nvidia-settings" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\nsudo echo "Terminal=false" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\nsudo echo "Categories=System;Settings;X-Red-Hat-Base-Utilities;" | sudo tee -a /usr/share/applications/nvidia-settings.desktop\n')])])]),a("h2",{attrs:{id:"📚-further-reading-and-next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📚-further-reading-and-next-steps"}},[e._v("#")]),e._v(" 📚 Further Reading and Next Steps")]),e._v(" "),a("p",[a("u",[e._v("Get Back:")])]),e._v(" "),a("ul",[a("li",[e._v("AlmaLinux System Series ❯ "),a("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03.html"}},[e._v("NVIDIA Driver Installation Guide")])],1)]),e._v(" "),a("p",[a("u",[e._v("In-depth Resources:")])]),e._v(" "),a("ul",[a("li",[e._v("AlmaLinux System Series ❯ "),a("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R8.html"}},[e._v("NVIDIA: Installation on 8.x")])],1)]),e._v(" "),a("p",[a("u",[e._v("Related Resources:")])]),e._v(" "),a("ul",[a("li",[e._v("AlmaLinux Nginx Series ❯ "),a("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA01.html"}},[e._v("A Beginner's Guide")])],1),e._v(" "),a("li",[e._v("AlmaLinux Firewalld Series ❯ "),a("RouterLink",{attrs:{to:"/series/system/SystemSeriesA0.html"}},[e._v("A Beginner's Guide")])],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);