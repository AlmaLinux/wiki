---
title: Using almapeople.org
description: How to obtain and use your personal space on almapeople.org.
---

# almapeople.org

This page covers the details on how to obtain and use your personal space on almapeople.org, a site where AlmaLinux contributors can upload files to share with the world.

## Forbidden contents

Do NOT distribute anything on almapeople.org that AlmaLinux itself cannot distribute for legal reasons. Nothing that infringes on copyright or trademark, nothing that AlmaLinux is barred from redistributing, and nothing that violates the [AlmaLinux Code of Conduct](https://almalinux.org/code-of-conduct/).

Also do not distribute anything that violates AlmaLinux's [trademark usage policy](https://almalinux.org/p/the-almalinux-os-trademark-usage-policy/).

Do NOT upload your private SSH keys or private keys of any kind.

## Accessing your almapeople.org space

You need an AlmaLinux account and meet the following criteria:

- Active AlmaLinux OS Foundation membership.
- At least one approved SIG group (currently `almalinux_sigs`).

Manage your account and group memberships at [accounts.almalinux.org](https://accounts.almalinux.org). If you need to join a group, ask your SIG lead.

### Generate an SSH key

If you don't already have one:

```sh
ssh-keygen -t ed25519 -C "your@email.example"
```

This creates `~/.ssh/id_ed25519` (private — never share this) and `~/.ssh/id_ed25519.pub` (public).

### Upload your public key to AlmaLinux accounts

Log in to [accounts.almalinux.org](https://accounts.almalinux.org), edit your user profile, and paste the contents of `~/.ssh/id_ed25519.pub` under **SSH public keys**. Multiple keys are supported.

Your authorized keys on almapeople.org come from your AlmaLinux account and only your AlmaLinux account. There is no separate settings page on almapeople.org. To rotate or revoke a key, update it at [https://accounts.almalinux.org](https://accounts.almalinux.org).

### Verify the host key

The first time you connect, SSH will show you a host key fingerprint. Confirm it matches before accepting it. The current fingerprints are published at TODO: pending.

If a fingerprint changes unexpectedly, do not connect; report it to the infra team.

### Connect

```sh
ssh <your-username>@almapeople.org
```

Use your AlmaLinux account username, not your local username.

### Set up your public_html directory

```sh
mkdir ~/public_html
chmod 755 ~/public_html
```

Anything in `~/public_html/` is served at:

```
https://<your-username>.almapeople.org/
```

So if your AlmaLinux account username is `jonathan`:

```
~/public_html/index.html      ->  https://jonathan.almapeople.org/
~/public_html/files/notes.txt ->  https://jonathan.almapeople.org/files/notes.txt
```

The apex site, [almapeople.org](https://almapeople.org), lists every contributor with content in their `public_html`. The list regenerates hourly.

## Common answers

Each contributor has 100 GB of quota-controlled space.

```sh
quota -s
```

If you run out of space, you should clean up files you don't need. If you cannot clean anything up, you should contact the AlmaLinux Infrastructure team to raise your quota.

Files need to be world-readable for Apache to serve them: at least mode `644` for files and `755` for directories. The server umask is `022` so anything created on the server is fine by default. If you transfer files from a machine with a tighter umask, force sane modes:

```sh
rsync -avz --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r site/ user@almapeople.org:public_html/
```

To make a publicly viewable space, create a `public_html` directory and set its permissions to `755`.

Everything in `public_html` is public. Do not put anything sensitive there. Keep private files in `~/private/` or anywhere outside `public_html` — Apache will not serve them. Keep in mind this should still not be treated as truly private space.

almapeople.org is NOT to be used for development, build infrastructure, CI workers, long-running daemons, or git repository hosting. `/home` is mounted `noexec`, so binaries you upload cannot be run. There is no git web interface; use [git.almalinux.org](https://git.almalinux.org) for repositories.

Server-side code execution is disabled. PHP, CGI, SSI, mod_perl, and mod_ruby are not installed and are explicitly blocked at the Apache level. Files with `.php`, `.cgi`, `.pl`, `.py`, `.rb`, `.asp`, or `.jsp` extensions are served as plain text. `.htaccess` is honored only for `FileInfo`, `AuthConfig`, and `Indexes` directives.

DO NOT try to use `sudo`. You do not have sudo access.

Upload files using `scp`, `sftp`, or `rsync`. For most workflows, rsync over SSH is the right tool:

```sh
rsync -avz --delete site/ <your-username>@almapeople.org:public_html/
```

`--delete` mirrors the local tree exactly. Drop it to add files without removing existing ones. Any standard SFTP client also works — WinSCP, Cyberduck, FileZilla, lftp.

If you are removed from the gating AlmaLinux account groups, your SSH access is revoked at the next deploy and your subdomain returns 404. Your files remain on disk; if you rejoin the groups later, content is restored automatically. To have your data deleted, contact the infra team.

## Policies

### Resource use

Each user session has soft caps applied via systemd:

- Memory: 512 MB soft / 1 GB hard
- Maximum processes: 64
- CPU weight: 50 (half of system default)

These exist to keep one user from accidentally disrupting others. If you find yourself bumping into them, the kind of work you are doing probably belongs somewhere other than almapeople.org.

### Reporting issues

For service issues, security concerns, key-fingerprint anomalies, or quota requests, open an issue against the AlmaLinux infra project or reach out in the [AlmaLinux community chat](https://chat.almalinux.org/almalinux/channels/infrastructure).
