# A08 ❯ Earlyoom (Out of Memory) Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |

EarlyOOM project can be found here: [https://github.com/rfjakob/earlyoom](https://github.com/rfjakob/earlyoom)

## Install EarlyOOM:
```bash
sudo dnf install earlyoom -y
```

## Configure EarlyOOM to start at boot:
```bash
sudo systemctl enable earlyoom
```

## Configure Earlyoom Parameters:

Open the terminal on the host machine.

## Gain administrative privileges by using the sudo command:
```bash
sudo su
```

## Open the /etc/default/earlyoom file in a text editor of your choice. For example, you can use the nano editor:
```bash
sudo nano /etc/default/earlyoom
```

## Find or add the following lines to the file:
```bash
EARLYOOM_ARGS="-m 10 -s 75 -r 3600 --avoid '(^|/)(init|Xorg|ssh|gnome)$'"
```
Save the changes and exit the text editor. If you are using nano, you can press Ctrl + X, then press Y to confirm changes, and finally press Enter to exit.

**Please note that these are the options that worked in my case and may not work for all specific cases. Please refer to the command options for EarlyOOM:**
```bash
User
Command line options
earlyoom v1.6.2-34-g75a8852-dirty
Usage: ./earlyoom [OPTION]...

  -m PERCENT[,KILL_PERCENT] set available memory minimum to PERCENT of total
                            (default 10 %).
                            earlyoom sends SIGTERM once below PERCENT, then
                            SIGKILL once below KILL_PERCENT (default PERCENT/2).
  -s PERCENT[,KILL_PERCENT] set free swap minimum to PERCENT of total (default
                            10 %).
                            Note: both memory and swap must be below minimum for
```
Reference: [https://github.com/rfjakob/earlyoom](https://github.com/rfjakob/earlyoom)

## Set the owner and group of the file to root:
```bash
chown root:root /etc/default/earlyoom
```

## Set the file permissions to 0644:
```bash
chmod 0644 /etc/default/earlyoom
```

# Notify the system about the changes made by restarting the earlyoom service:
```bash
systemctl restart earlyoom
``` 
