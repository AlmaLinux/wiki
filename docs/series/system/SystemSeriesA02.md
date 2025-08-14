# A02 ❯ Firewalld: A Beginner's Guide

<small>ℹ️ This article is part of AlmaLinux [System Series](/series/).</small>

<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-10
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ 9.1 \| x86_64 \| 2023-04-21 </small>|
<br>

## 🌟 Introduction

Firewalld is a dynamic firewall management tool that is enabled by default in AlmaLinux. It provides a flexible and powerful interface for configuring network traffic filtering rules and allows system administrators to easily manage firewall settings without needing to know the specifics of iptables or nftables. Firewalld uses zones, services, ports, source and destination, and masquerading/NAT to define firewall rules and secure network traffic. With firewalld, system administrators can create custom firewall configurations, add or remove services and ports, and manage network zones to secure their systems against unauthorized access and potential security threats.

:::tip
On AlmaLinux OS, the Firewalld packet filtering service is enabled by default.

:::details

You can verify with later described command:

```
sudo firewall-cmd --state
```

Example:

```
running
```

:::

## 🧠 Fundamental Concepts

Firewalld implements a number of fundamental concepts to provide flexible and powerful network traffic filtering. These concepts include:

**Zones:** Firewalld uses zones to define different levels of trust for network connections. Zones are predefined or custom-defined sets of rules that specify what traffic is allowed and what is not allowed. By default, Firewalld comes with three zones: public, internal, and trusted. Each zone is associated with a set of firewall rules that determine how incoming and outgoing traffic is handled.

**Services:** Firewalld uses services to group ports and protocols that are used by applications. A service is defined by a set of rules that determine what ports and protocols are associated with the service. By default, Firewalld comes with a number of predefined services, such as ssh, http, https, smtp, and dns.

**Policies:** Firewalld allows the definition of policies to control how traffic is forwarded between zones. Policies are defined rules that determine how traffic is handled when it is forwarded between different zones. Policies can be used to allow or deny traffic between zones or to modify the source or destination of traffic.

**Ports:** Firewalld uses ports to allow or deny traffic to specific ports. A port is a communication endpoint that is identified by a number. Ports are typically associated with specific protocols, such as TCP or UDP.

**Source and Destination:** Firewalld allows rules to be defined based on the source or destination of network traffic. Rules can be defined based on IP addresses, subnets, interfaces, and MAC addresses.

**Masquerading and NAT:** Firewalld provides support for Network Address Translation (NAT) and masquerading. NAT is used to map private IP addresses to public IP addresses, while masquerading is used to hide the source IP address of outgoing traffic.

## 📝 Key Takeaways

### Predefined zones

List of the predefined zones along with their respective trust levels and descriptions:

- 🟥 `drop` - Blocks all incoming connections, allows only outgoing connections.
- 🟥 `block` - Similar to drop, but rejects incoming requests.
- 🟥 `public` - Allows selective incoming connections on a case-by-case basis.
- 🟥 `external` - Enables NAT masquerading for private network accessibility.
- 🟨 `internal` - Fairly trustworthy computers, additional services may be available.
- 🟨 `dmz` - Permits specific incoming connections.
- 🟩 `work` - Trusts most computers in the network, allows more services.
- 🟩 `home` - Trusts most other computers, allows additional services.
- 🟩 `trusted` - Trusts all machines in the network, use sparingly.

:::details
List all defined zones:

```
sudo firewall-cmd --get-zones
```

:::

### Default config

By default, most of incoming traffic is denied, and only outgoing traffic is allowed in all three zones. You can add or remove services and ports from each zone as needed to configure the firewall rules for your system. By default you will have `cockpit`, `dhcpv6-client` and `ssh` enabled on default AlmaLinux installation.

By default, `firewalld` on AlmaLinux uses the `public` zone as the default zone for all network interfaces that are not explicitly assigned to another zone. This means that any incoming traffic that is not explicitly allowed or denied in another zone will be subject to the rules defined in the `public` zone.

### `firewall-cmd`

`firewall-cmd` is a command-line tool used to configure and manage firewalld, providing an easy way to configure firewall rules and zones, enable and disable services, and manage network traffic. With `firewall-cmd`, users can add, remove, and modify firewall rules in real-time, as well as make changes that persist across reboots and firewall restarts. It is recommended to use `firewall-cmd` for managing the firewall configuration, as it simplifies the process and ensures that changes are made correctly.

### The `--permanent` flag

The changes by `firewall-cmd` when adding or removing rules are temporary are only effective for the current runtime of the firewall. If the firewall service is restarted, those changes will be lost.

Using the `--permanent` option makes the changes permanent, meaning they will be saved to the firewall configuration files on disk. These configuration files are read and applied by the firewall service when it starts up, so the changes will persist across reboots and firewall restarts.

## 📖 Interacting with Firewalld

::: tip
Keep in mind that sudo privileges are required for firewall modification commands.
:::

### ➡️ Adding / removing temporary rules

Here are some basic patterns for adding and removing rules temporarily or permanently:

- To add a service to the default zone temporarily, use the command:

```
sudo firewall-cmd --add-service=<service-name>
```

- To remove a service from the default zone temporarily, use the command:

```
sudo firewall-cmd --remove-service=<service-name>
```

### ➡️ Adding / removing permanent rules

- To add a service to the default zone permanently, use the command:

```
sudo firewall-cmd --permanent --add-service=<service-name>
```

- To remove a service from the default zone permanently, use the command:

```
sudo firewall-cmd --permanent --remove-service=<service-name>
```

## 🔖 Probing settings

### ➡️ Configuration

List the current active zone (by default it is `public` zone), along with any configured rules and services for that zone:

```
sudo firewall-cmd --list-all
```

::: details
Example:

```
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: cockpit dhcpv6-client ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

:::

### ➡️ Zones

Current configuration of the firewall zones:

```
sudo firewall-cmd --get-default-zone
```

List all available zones with:

```
sudo firewall-cmd --get-zones
```

Get detailed information about a specific zone:

```
sudo firewall-cmd --info-zone=<zone> command
```

### ➡️ Services: list active services

List of services that are currently allowed in the public zone.
::: tip
If no services are allowed in the zone, the output will be empty. In example we have output for default AlmaLinux settings.
:::

```
sudo firewall-cmd --zone=public --list-services
```

::: details
Example:

```
cockpit dhcpv6-client ssh
```

:::

::: tip
Replace `public` with the name of any other zone that you want to check.
:::

## 🔖 Configuring

::: warning

If on remote connection (`ssh`)
**Do not to block all incoming traffic**, it will cut you out from the remote system.

```
DANGEROUS firewall-cmd --set-default-zone=drop  <--- dissallows ssh!
```

::: details

Your access is allowed in the zone `public`:

```
sudo firewall-cmd --zone=public --list-services
```

#### Example output:

```
cockpit dhcpv6-client ssh
```

:::

### ➡️ Selecting Zones for Interfaces

By default, each network interface is assigned to the default zone when the firewall is booted.
To change the zone of an interface during a session using the `--zone=` parameter with the `--change-interface=` parameter.

For example, to transition the eth0 interface to the `work` zone, use the following command:

```
sudo firewall-cmd --zone=work--change-interface=eth0
```

### ➡️ Changing the Default Zone

If you want to handle all your interfaces with a single zone, it's recommended to select the appropriate default zone for your configuration.
To change the default zone, use the `--set-default-zone=` parameter followed by the desired zone name.
This command will immediately update any interface using the default zone.

For example, to set the default zone to "home", use the following command:

```
sudo firewall-cmd --set-default-zone=home
```

:::details
Example:

```
success
```

:::

By adjusting the default zone, you can simplify and customize your firewall configuration.

## 📋 Table of Services

Table below lists common services and ports that can be used with the `firewall-cmd` command to add or remove them from the default zone (or other zones when using `--zone`).

| Group name            | Description                           | Service Name  | Protocol | Port       |
| --------------------- | ------------------------------------- | ------------- | -------- | ---------- |
| **Databases**         |                                       |               |          |            |
| MongoDB               | MongoDB database                      | mongodb       | TCP      | 27017      |
| MySQL                 | MySQL database                        | mysql         | TCP/UDP  | 3306       |
| PostgreSQL            | PostgreSQL database                   | postgresql    | TCP      | 5432       |
| Redis                 | Redis database                        | redis         | TCP      | 6379       |
| **Web Services**      |                                       |               |          |            |
| FTP                   | FTP service                           | ftp           | TCP      | 21         |
| HTTP                  | HTTP service                          | http          | TCP      | 80         |
| HTTPS                 | HTTPS service                         | https         | TCP      | 443        |
| IMAP                  | IMAP service                          | imap          | TCP      | 143        |
| POP3                  | POP3 service                          | pop3          | TCP      | 110        |
| SMTP                  | SMTP service                          | smtp          | TCP      | 25         |
| **Security Services** |                                       |               |          |            |
| Firewall              | Firewall Management                   | firewall      | TCP/UDP  | 9090       |
| IPsec NAT-T           | IPsec NAT Traversal                   | ipsec-nat-t   | UDP      | 4500       |
| ISAKMP/IKE            | ISAKMP/IKE                            | isakmp        | UDP      | 500        |
| LDAPS                 | Secure LDAP                           | ldaps         | TCP      | 636        |
| RADIUS accounting     | RADIUS Accounting                     | radacct       | UDP      | 1813, 1814 |
| RADIUS authentication | RADIUS Authentication                 | radius        | UDP      | 1812       |
| SNMP                  | Simple Network Management             | snmp          | UDP      | 161        |
| SNMP trap             | SNMP Trap                             | snmptrap      | UDP      | 162        |
| SSH                   | Secure Shell                          | ssh           | TCP      | 22         |
| **System Services**   |                                       |               |          |            |
| DHCP                  | Dynamic Host Configuration Protocol   | dhcp          | UDP      | 67, 68     |
| DHCPv6 client         | DHCPv6 Client                         | dhcpv6-client | UDP      | 546, 547   |
| DHCPv6 server         | DHCPv6 Server                         | dhcpv6-server | UDP      | 547        |
| DNS                   | Domain Name System                    | dns           | TCP/UDP  | 53         |
| LDAP                  | Lightweight Directory Access Protocol | ldap          | TCP      | 389        |
| NFS                   | Network File System                   | nfs           | TCP/UDP  | 2049       |
| NTP                   | Network Time Protocol                 | ntp           | UDP      | 123        |
| RDP                   | Remote Desktop Protocol               | rdp           | TCP      | 3389       |
| SMB                   | Server Message Block                  | smb           | TCP      | 445        |
| VNC server            | Virtual Network Computing Server      | vnc-server    | TCP      | 5900       |
| **Other Services**    |
| IMAPS                 | Secure IMAP                           | imaps         | TCP      | 993        |
| HTTPS Alternate       | HTTPS Alternate                       | https-alt     | TCP      | 8443       |
| LPD                   | Line Printer Daemon                   | lpd           | TCP      | 515        |
| L2TP VPN              | L2TP VPN                              | l2tp          | UDP      | 1701       |
| POP3S                 | Secure POP3                           | pop3s         | TCP      | 995        |
| POP3                  | POP3 service                          | pop3          | TCP      | 110        |
| PPTP VPN              | PPTP VPN                              | pptp          | TCP/UDP  | 1723       |
| RIP                   | Routing Information Protocol          | rip           | UDP      | 520        |
| SIP                   | Session Initiation Protocol           | sip           | TCP/UDP  | 5060       |
| SIPs                  | Secure SIP                            | sips          | TCP/UDP  | 5061       |
| Telnet                | Telnet Protocol                       | telnet        | TCP      | 23         |
| TFTP                  | Trivial File Transfer Protocol        | tftp          | UDP      | 69         |

This is not an exhaustive list, and the service names, protocols, and ports may vary depending on your specific system configuration.

::: tip
In GNU/Linux systems the `/etc/services` file contains the list of TCP & UDP network services. `grep` it to find interesting data.

```
grep mysql /etc/services
```

::: details

```
mysql           3306/tcp                        # MySQL
mysql           3306/udp                        # MySQL
mysql-cluster   1186/tcp                # MySQL Cluster Manager
mysql-cluster   1186/udp                # MySQL Cluster Manager
mysql-cm-agent  1862/tcp                # MySQL Cluster Manager Agent
mysql-cm-agent  1862/udp                # MySQL Cluster Manager Agent
mysql-im        2273/tcp                # MySQL Instance Manager
mysql-im        2273/udp                # MySQL Instance Manager
mysql-proxy     6446/tcp                # MySQL Proxy
mysql-proxy     6446/udp                # MySQL Proxy
```

:::

## 📚 Further Reading and Next Steps

<u>In-depth Resources:</u>

- Firewalld Series ❯ [Advanced Configuration Guide](#) 🚧 -- Work In Progress (5/15) -- HELP NEEDED: psuchanecki@almalinux.org

<u>Related Resources:</u>

- AlmaLinux Nginx Series ❯ [A Beginner's Guide](../nginx/NginxSeriesA01.md)
- AlmaLinux System Series ❯ [Application Streams](SystemSeriesA01.md)
