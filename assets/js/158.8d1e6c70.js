(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{469:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"a07-❯-change-from-wayland-to-xorg-installation-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a07-❯-change-from-wayland-to-xorg-installation-guide"}},[t._v("#")]),t._v(" A07 ❯ Change from Wayland to Xorg Installation Guide")]),t._v(" "),e("p",[e("small",[t._v("ℹ️ This article is part of AlmaLinux "),e("RouterLink",{attrs:{to:"/series/"}},[t._v("System Series")]),t._v(".")],1)]),e("hr"),e("p"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("💡")]),t._v(" "),e("th",[t._v("Experience Level")]),t._v(" "),e("th",[t._v("⭐☆☆☆☆")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("📆")]),t._v(" "),e("td",[e("small",[t._v("Last modified ")])]),t._v(" "),e("td",[t._v("2024-02-02")])]),t._v(" "),e("tr",[e("td",[t._v("🔧")]),t._v(" "),e("td",[e("small",[t._v("Tested by "),e("br"),t._v(" ↳ version | platform | date ")])]),t._v(" "),e("td",[t._v("NOT TESTED YET")])])])]),t._v(" "),e("p",[t._v("In some case Wayland may interfere with software installed and require Xorg instead. This is the way to rollback to Xorg.")]),t._v(" "),e("h1",{attrs:{id:"open-the-terminal-on-the-host-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-the-terminal-on-the-host-machine"}},[t._v("#")]),t._v(" Open the terminal on the host machine.")]),t._v(" "),e("h1",{attrs:{id:"gain-administrative-privileges-by-using-the-sudo-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gain-administrative-privileges-by-using-the-sudo-command"}},[t._v("#")]),t._v(" Gain administrative privileges by using the sudo command:")]),t._v(" "),e("div",{staticClass:"language-Bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\n")])])]),e("h1",{attrs:{id:"navigate-to-the-etc-gdm-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigate-to-the-etc-gdm-directory"}},[t._v("#")]),t._v(" Navigate to the /etc/gdm/ directory:")]),t._v(" "),e("div",{staticClass:"language-Bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/gdm/\n")])])]),e("h1",{attrs:{id:"open-the-custom-conf-file-in-a-text-editor-of-your-choice-for-example-you-can-use-the-nano-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-the-custom-conf-file-in-a-text-editor-of-your-choice-for-example-you-can-use-the-nano-editor"}},[t._v("#")]),t._v(" Open the custom.conf file in a text editor of your choice. For example, you can use the nano editor:")]),t._v(" "),e("div",{staticClass:"language-Bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Ensure that these lines are within the block that starts with "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {mark} ANSIBLE MANAGED BLOCK.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" custom.conf\n")])])]),e("h1",{attrs:{id:"find-or-add-the-following-lines-to-the-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find-or-add-the-following-lines-to-the-file"}},[t._v("#")]),t._v(" Find or add the following lines to the file:")]),t._v(" "),e("div",{staticClass:"language-Bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WaylandEnable")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DefaultSession")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gnome-xorg.desktop\n")])])]),e("h1",{attrs:{id:"save-the-changes-and-exit-the-text-editor-if-you-are-using-nano-you-can-press-ctrl-x-then-press-y-to-confirm-changes-and-finally-press-enter-to-exit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#save-the-changes-and-exit-the-text-editor-if-you-are-using-nano-you-can-press-ctrl-x-then-press-y-to-confirm-changes-and-finally-press-enter-to-exit"}},[t._v("#")]),t._v(" Save the changes and exit the text editor. If you are using nano, you can press Ctrl + X, then press Y to confirm changes, and finally press Enter to exit.")]),t._v(" "),e("h1",{attrs:{id:"restart-the-system-or-the-display-manager-for-the-changes-to-take-effect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restart-the-system-or-the-display-manager-for-the-changes-to-take-effect"}},[t._v("#")]),t._v(" Restart the system or the display manager for the changes to take effect.")])])}),[],!1,null,null,null);e.default=n.exports}}]);