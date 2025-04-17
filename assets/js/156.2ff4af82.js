(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{467:function(a,s,t){"use strict";t.r(s);var e=t(25),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"a05-❯-multimedia-codecs-installation-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a05-❯-multimedia-codecs-installation-guide"}},[a._v("#")]),a._v(" A05 ❯ Multimedia Codecs Installation Guide")]),a._v(" "),s("p",[s("small",[a._v("ℹ️ This article is part of AlmaLinux "),s("RouterLink",{attrs:{to:"/series/"}},[a._v("System Series")]),a._v(".")],1)]),s("hr"),s("p"),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("💡")]),a._v(" "),s("th",[a._v("Experience Level")]),a._v(" "),s("th",[a._v("⭐☆☆☆☆")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("📆")]),a._v(" "),s("td",[s("small",[a._v("Last modified ")])]),a._v(" "),s("td",[a._v("2024-06-11")])]),a._v(" "),s("tr",[s("td",[a._v("🔧")]),a._v(" "),s("td",[s("small",[a._v("Tested by "),s("br"),a._v(" ↳ version | platform | date ")])]),a._v(" "),s("td",[a._v("NOT TESTED YET")])])])]),a._v(" "),s("h2",{attrs:{id:"add-epel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-epel"}},[a._v("#")]),a._v(" Add EPEL:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" epel-release\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf makecache\n")])])]),s("h2",{attrs:{id:"enable-crb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-crb"}},[a._v("#")]),a._v(" Enable CRB:")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf config-manager --set-enabled crb\n")])])]),s("h2",{attrs:{id:"add-rpmfusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-rpmfusion"}},[a._v("#")]),a._v(" Add RPMFusion:")]),a._v(" "),s("p",[a._v("Starting from step 2, follow "),s("RouterLink",{attrs:{to:"/documentation/epel-and-rpmfusion/"}},[a._v("Installing EPEL and RPM Fusion")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"install-multimedia-codecs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-multimedia-codecs"}},[a._v("#")]),a._v(" Install multimedia codecs:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" group "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" multimedia\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ffmpeg ffmpeg-libs ffmpeg-devel mpv\n")])])]),s("h2",{attrs:{id:"extra-audio-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extra-audio-packages"}},[a._v("#")]),a._v(" Extra Audio packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" group "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sound-and-video\n")])])]),s("h2",{attrs:{id:"play-a-dvd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#play-a-dvd"}},[a._v("#")]),a._v(" Play a DVD")]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libdvdcss\n")])])]),s("h2",{attrs:{id:"install-mediaplayers-like-vlc-mpv-or-celluloid-from-rpmfusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-mediaplayers-like-vlc-mpv-or-celluloid-from-rpmfusion"}},[a._v("#")]),a._v(" Install mediaplayers like VLC, MPV or Celluloid from RPMFusion")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vlc\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mpv\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" celluloid "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Simple GTK+ frontend for mpv")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);