# A05 ❯ Multimedia Codecs Installation Guide
<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-06-22
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| NOT TESTED YET |


# Enable CRB:
```Bash
sudo dnf config-manager --set-enabled crb
```
# Add EPEL9:

```Bash
sudo dnf -y install epel-release
sudo dnf makecache
```

# Add RPMFusion:
```Bash
sudo dnf -y install --nogpgcheck https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-$(rpm -E %rhel).noarch.rpm https://mirrors.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-$(rpm -E %rhel).noarch.rpm
sudo dnf -y install rpmfusion-free-release-tainted rpmfusion-nonfree-release-tainted
sudo dnf makecache
```

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
```
