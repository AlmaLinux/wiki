# A09 ❯ Chrony Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |

# Chrony Man page : https://chrony-project.org/doc/3.4/chrony.conf.html

# Install Chrony:
```Bash
dnf install chrony -y
```

# Configure Chrony conf file:
# Edit the /etc/chrony.conf file using a text editor like nano or vi. Ensure the following content is set:
```Bash
# chrony.conf

# Use Google's NTP server
server time.google.com iburst

# Local clock as a fallback source
server 127.127.1.0 iburst

# Set the time zone
rtcsync

maxdistance 16.0

# Driftfile
driftfile /var/lib/chrony/drift

# Allow larger adjustments to the system clock
makestep 1.0 3

# Leap seconds configuration
leapsec tz right/UTC

# Adjust the following line to allow systems in the XXX.XXX.XXX.XXX/XX subnet to access this client.
# Ensure to modify the XXX.XXX.XXX.XXX/XX part based on your network configuration.
allow XXX.XXX.XXX.XXX/XX

# Logging
log tracking measurements statistics
logdir /var/log/chrony

For more details on configuring Chrony, you can refer to the [Chrony Configuration Reference](https://chrony-project.org/doc/3.4/chrony.conf.html).
```

# Restart Chrony service:
```Bash
systemctl restart chronyd
```
