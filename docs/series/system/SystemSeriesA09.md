# A09 ❯ Journalctl Persistent Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |

Jounalctl Man page: https://man7.org/linux/man-pages/man1/journalctl.1.html

# Check if the journal directory exists:
```bash
stat /var/log/journal
```

# Create the journal directory if it doesn't exist:
```bash
mkdir -p /var/log/journal
```

# Configure systemd journal settings:
**Edit the /etc/systemd/journald.conf file using a text editor like nano or vi. Ensure the following content is set:**
```bash
# This file is part of systemd.
#
# systemd is free software; you can redistribute it and/or modify it
# under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation; either version 2.1 of the License, or
# (at your option) any later version.
#
# Entries in this file show the compile time defaults.
# You can change settings by editing this file.
# Defaults can be restored by simply deleting this file.
#
# See journald.conf(5) for details.

[Journal]
#Storage=auto
#Compress=yes
#Seal=yes
#SplitMode=uid
#SyncIntervalSec=5m
#RateLimitIntervalSec=30s
#RateLimitBurst=10000
SystemMaxUse=200M
SystemKeepFree=100M
SystemMaxFileSize=20M
SystemMaxFiles=10
#RuntimeMaxUse=
#RuntimeKeepFree=
#RuntimeMaxFileSize=
#RuntimeMaxFiles=100
#MaxRetentionSec=
#MaxFileSec=1month
#ForwardToSyslog=no
#ForwardToKMsg=no
#ForwardToConsole=no
#ForwardToWall=yes
#TTYPath=/dev/console
#MaxLevelStore=debug
#MaxLevelSyslog=debug
#MaxLevelKMsg=notice
#MaxLevelConsole=info
#MaxLevelWall=emerg
#LineMax=48K
```

**This file can be modified to your preference, please see the Man page for all possible options: https://man7.org/linux/man-pages/man1/journalctl.1.html

# Ensure the systemd-journald service is running:
```bash
systemctl start systemd-journald
```

# Restart systemd-journald:
```bash
systemctl restart systemd-journald
```

**After enabling persistent Journalctl, the files will be in a rolling state up to the maximum size specfied and in the location specified**
