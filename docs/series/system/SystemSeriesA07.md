---
title: 'Change from Wayland to Xorg Installation Guide'
parent: 'Howto Series'
grandparent: 'Documentation'
child: 'System Series'
---

<Breadcrumbs />

# A07 ❯ Change from Wayland to Xorg Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |

In some case Wayland may interfere with software installed and require Xorg instead. This is the way to rollback to Xorg.

# Open the terminal on the host machine.

# Gain administrative privileges by using the sudo command:
```Bash
sudo su
```

# Navigate to the /etc/gdm/ directory:
```Bash
cd /etc/gdm/
```

# Open the custom.conf file in a text editor of your choice. For example, you can use the nano editor:
```Bash
Ensure that these lines are within the block that starts with # {mark} ANSIBLE MANAGED BLOCK.
sudo nano custom.conf
```

# Find or add the following lines to the file:
```Bash
WaylandEnable=false
DefaultSession=gnome-xorg.desktop
```

# Save the changes and exit the text editor. If you are using nano, you can press Ctrl + X, then press Y to confirm changes, and finally press Enter to exit.

# Restart the system or the display manager for the changes to take effect.
