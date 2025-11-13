# A05 ❯ Multimedia Codecs Installation Guide

<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>

## Add EPEL:

```Bash
sudo dnf -y install epel-release
sudo dnf makecache
```

## Enable CRB:

```Bash
sudo dnf config-manager --set-enabled crb
```

## Add RPMFusion:

Starting from step 2, follow [Installing EPEL and RPM Fusion](/documentation/epel-and-rpmfusion/).

## Install multimedia codecs:

```bash
sudo dnf -y group install multimedia
sudo dnf -y install ffmpeg ffmpeg-libs ffmpeg-devel mpv
```

## Extra Audio packages

```bash
sudo dnf -y group install sound-and-video
```

## Play a DVD

```Bash
sudo dnf -y install libdvdcss
```

## Install mediaplayers like VLC, MPV or Celluloid from RPMFusion

```bash
sudo dnf install vlc
sudo dnf install mpv
sudo dnf install celluloid # Simple GTK+ frontend for mpv
```
