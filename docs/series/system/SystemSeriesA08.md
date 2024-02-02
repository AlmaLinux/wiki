# A08 ❯ Earlyoom (Out of Memory) Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2024-02-02
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |

EarlyOOM project can be find here : https://github.com/rfjakob/earlyoom

# Install EarlyOOM:
```Bash
sudo dnf install earlyoom -y
```

# Configure EarlyOOM to start at boot:
```Bash
sudo systemctl enable earlyoom
```

# Configure Earlyoom Parameters:

Open the terminal on the host machine.

# Gain administrative privileges by using the sudo command:
```Bash
sudo su
```

# Open the /etc/default/earlyoom file in a text editor of your choice. For example, you can use the nano editor:
```Bash
sudo nano /etc/default/earlyoom
```

# Find or add the following lines to the file:
```Bash
EARLYOOM_ARGS="-m 10 -s 75 -r 3600 --avoid '(^|/)(init|Xorg|ssh|gnome)$'"
```

**Please note that these are the options that worked in my case and may not work for all specific case, please refer to the command options for EarlyOOM :**
```
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
# Install multimedia codecs:

```bash
sudo dnf -y group install multimedia
sudo dnf -y install ffmpeg ffmpeg-libs ffmpeg-devel mpv
```

# Extra Audio packages
```bash
sudo dnf -y group install sound-and-video
```

# Play a DVD
```Bash
sudo dnf -y install libdvdcss
```

# Install mediaplayers like VLC, MPV or Celluloid from RPMFusion
```bash
sudo dnf install vlc
sudo dnf install mpv
sudo dnf install celluloid # Simple GTK+ frontend for mpv
                            earlyoom to act.
  -M SIZE[,KILL_SIZE]       set available memory minimum to SIZE KiB
  -S SIZE[,KILL_SIZE]       set free swap minimum to SIZE KiB
  -n                        enable d-bus notifications
  -N /PATH/TO/SCRIPT        call script after oom kill
  -g                        kill all processes within a process group
  -d                        enable debugging messages
# Install multimedia codecs:

```bash
sudo dnf -y group install multimedia
sudo dnf -y install ffmpeg ffmpeg-libs ffmpeg-devel mpv
```

# Extra Audio packages
```bash
sudo dnf -y group install sound-and-video
```

# Play a DVD
```Bash
sudo dnf -y install libdvdcss
```

# Install mediaplayers like VLC, MPV or Celluloid from RPMFusion
```bash
sudo dnf install vlc
sudo dnf install mpv
sudo dnf install celluloid # Simple GTK+ frontend for mpv
  -v                        print version information and exit
  -r INTERVAL               memory report interval in seconds (default 1), set
                            to 0 to disable completely
  -p                        set niceness of earlyoom to -20 and oom_score_adj to
                            -100
  --prefer REGEX            prefer to kill processes matching REGEX
  --avoid REGEX             avoid killing processes matching REGEX
  --ignore REGEX            ignore processes matching REGEX
  --dryrun                  dry run (do not kill any processes)
  -h, --help                this help texthttps://github.com/rfjakob/earlyoom
```
Reference : https://github.com/rfjakob/earlyoom

# Save the changes and exit the text editor. If you are using nano, you can press Ctrl + X, then press Y to confirm changes, and finally press Enter to exit.

# Set the owner and group of the file to root:
```Bash
chown root:root /etc/default/earlyoom
```

# Set the file permissions to 0644:
```Bash
chmod 0644 /etc/default/earlyoom
```

# Notify the system about the changes made by restarting the earlyoom service:
```Bash
systemctl restart earlyoom
``` 
