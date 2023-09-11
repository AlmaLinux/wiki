# A04 ❯ Secure Nginx Deployment
<small>ℹ️ This article is part of AlmaLinux [Nginx Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-16
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ 9.1 \| x86_64 \| 2023-04-21 </small>|
<br> 


## 🌟 Introduction
As Nginx is a high-performance web server commonly used in public environments it makes it a prime target for malicious attacks. To enhance the security of your Nginx server and protect your web content, it's important to secure your system. This guide presents a few simple steps you can take to secure your Nginx server and help prevent unauthorized access.

## 🧠 Fundamental Concepts

### General Protection

#### Regular Updates and Patches

Keeping your Nginx installation up-to-date is essential in ensuring that it is secure. Regularly check for software updates and patches from the official repository to stay informed of any vulnerabilities or bugs that could affect your Nginx server.

#### File and Directory Permissions

Make sure that the file and directory permissions are set appropriately for your Nginx server. Only allow users with the appropriate permissions to access the files and directories.

#### Use a Dedicated User Account

Running Nginx as a dedicated user account can help limit the damage caused by an attacker if your server is compromised. This is because a dedicated user account only has access to the files and directories required to run Nginx, reducing the potential damage an attacker can cause if they gain access to your server.

#### Restrict Access to Sensitive Information

To reduce the risk of exposing sensitive information, limit access to sensitive information on your server. You can do this by ensuring that only authorized users have access to sensitive files and directories.

####  Monitor Logs

Monitoring your Nginx server logs can help you detect and respond to security incidents quickly. Regularly reviewing your logs can help you identify any suspicious activity or unauthorized access attempts. You can also set up alerts or notifications to receive notifications when specific events occur, such as failed login attempts.

### Security must-haves
  
⚠️  Implement a firewall to block all incoming traffic (default on AlmaLinux) except for the ports you want to allow. For a web server like Nginx, you typically want to allow ports for HTTP and HTTPS services.

⚠️  Use secure protocols for accessing your server, such as SSH, and disable password-based authentication in favor of public-key authentication.

⚠️  Use secure coding practices when developing your web application or service, such as input validation and sanitization, to prevent common web vulnerabilities like SQL injection and cross-site scripting (XSS).

### Configuration Specific Practices

➡️  Enable SSL/TLS encryption to encrypt your web traffic, preventing attackers from intercepting sensitive information. Obtaining an SSL certificate from a trusted certificate authority like Let's Encrypt is recommended.

➡️  Implement user authentication using the `htpasswd` tool to restrict access to your Nginx server and control access to specific areas of your site.

➡️  Implement rate limiting to limit the number of requests from a particular IP address over a given period, preventing denial-of-service (DoS) attacks and other malicious traffic.

➡️  Disable server tokens in Nginx to prevent revealing information about the software and version being used, making it harder for attackers to find potential vulnerabilities in your server.




## 📝 Key Takeaways


### Step 1: Check The Firewalld Configuration

:::warning
On AlmaLinux OS, the Firewalld packet filtering service is enabled by default.


:::

To allow incoming traffic on ports 80 (HTTP) and 443 (HTTPS), run:
```
sudo firewall-cmd --permanent --zone=public --add-service={http,https}
```
Then just reload the rules:
```
sudo firewall-cmd --reload
```

### Step 2: Enable SSL/TLS Encryption

Encrypting your web traffic using SSL/TLS is an essential step in securing your Nginx installation. To enable SSL/TLS encryption, you will need to obtain an SSL certificate and configure Nginx to use it.
One way to obtain an SSL certificate is to use Let's Encrypt, a free, automated, and open certificate authority. 

To install Let's Encrypt on AlmaLinux 9.x, run the following command:

```
sudo dnf install certbot python3-certbot-nginx
```

::: tip
The `python3-certbot-nginx` package is from EPEL repository, so if you get error to the above, just do:
```
dnf install epel-release
```
:::

Then, obtain an SSL certificate for your domain by running the following command:

```
sudo certbot --nginx -d almalinux.example.com
```
Replace example.com with your domain name.

#### Example on success:
```
...
Deploying certificate
Successfully deployed certificate for almalinux.example.com to /etc/nginx/nginx.conf
Congratulations! You have successfully enabled HTTPS on https://almalinux.example.com
```

::: tip
After successful configuration, '/etc/nginx/nginx.conf' will contain these new lines:

:::details

```
    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/almalinux.example.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/almalinux.example.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    
    
     server {
        if ($host = almalinux.example.com) {
            return 301 https://$host$request_uri;
        } # managed by Certbot
        listen       80;
        listen       [::]:80;
        server_name  almalinux.example.com;
        return 404; # managed by Certbot
    }
```
:::


:::warning
If you get this weird error:
```
...
Deploying certificate
Could not install certificate
An unexpected error occurred:
OpenSSL.crypto.Error: [('Provider routines', '', 'invalid key length')]
Ask for help or search for solutions at https://community.letsencrypt.org. See the logfile /var/log/letsencrypt/letsencrypt.log or re-run Certbot with -v for more details.
```
Please check if you have FIPS mode enabled which prevents 'unauthorized' uses of OpenSSL framework (instruction in Details).

:::details
```
fips-mode-setup --check
```
Should tell you:
```FIPS mode is disabled.```

If does not you need to disable the FIPS for the time of generation:

* Disable it:
```
fips-mode-setup --disable
```
* Reboot the system!
&nbsp;
* Regenerate the certificate (or just reinstall - `certbot` will offer that option when runs again) with the command that previously failed (above).
* Renable FIPS:
```
fips-mode-setup --enable
```
* Reboot the system!
:::


#### Check if that works!

Navigate your browser to your site with `https` protocol prefix. 
(Like: https://almalinux.example.com). <u>Now the connection is encrypted</u>(🔒).


### Step 3: Implement User Authentication

If you want to restrict access to your Nginx server, you can implement user authentication using the `htpasswd` tool.

::: tip
`htpasswd` manages user accounts and passwords for accessing restricted areas of your website, helping to add basic authentication to your Nginx server and control access to specific areas of your site.
:::

To do this, run the following command to install `httpd-tools` package:

```
sudo dnf install httpd-tools
```

Then, create a password file for your user by running the following command:

```
sudo htpasswd -c /etc/nginx/.htpasswd myuser
```
Replace `myuser` with your desired username.

Finally, add the following configuration to your Nginx server block to require authentication for all requests (lines starting with `auth_basic`):

```
server {
    listen 80;
    server_name example.com;
    root /var/www/example.com;
    index index.html;

    auth_basic "Restricted Access";
    auth_basic_user_file /etc/nginx/.htpasswd;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Accessing the site will prompt user for username and password now.


### Step 4: Implement Rate Limiting

Rate limiting is a technique used to limit the number of requests from a particular IP address over a given period. This can help prevent denial-of-service (DoS) attacks and other malicious traffic.

To implement rate limiting in Nginx, add the following configuration to your server block (lines starting with `limit_req*`)

```
server {
    listen 80;
    server_name example.com;
    root /var/www/example.com;
    index index.html;

    limit_req zone=one burst=5 nodelay;
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

This configuration will limit requests to one request per second per IP address, with a burst of 5 requests allowed before blocking further requests. The nodelay parameter ensures that requests exceeding the limit are blocked immediately. 

Note: both can be added to `http` block.

:::details
 For more info on rate limitting please read **[ a dedicated blog post Nginx.org ]( https://www.nginx.com/blog/rate-limiting-nginx/)**
:::

### Step 5: Disable Server Tokens

By default, Nginx includes server tokens in its response headers, which can reveal information about the software and version being used. This can be useful for attackers to find potential vulnerabilities in your server.

To disable server tokens in Nginx, add the following configuration to your `nginx.conf` file:

```
server_tokens off;
```

As with all the changes to the configuration file you need to reload the server for this to be effective:
```
systemctl reload nginx
```

## 📖 FAQ

#### Q: How to fix `Nginx: stat() failed (13: Permission denied)` with SELinux enabled?

Context: Nginx server is running under the user "nginx" and has access to to the files. But when I am attempting to list the contents of the /usr/share/nginx/srv/downloads/ directory on my server using a web browser. I have installed the Nginx server and set up configuration files, but when I try to access the directory, not all content is listed, and I receive a "Permission denied" error. The error message is as follows:

```
2023/04/27 17:08:54 [crit] 12839#0: *1 stat() "/usr/share/nginx/srv/downloads/file.txt" failed (13: Permission denied), client: 192.168.0.26, server: localhost, request: "GET /downloads/ HTTP/1.1", host: "localhost"
```

The Nginx server is running under the user "nginx," which is part of the "devs" group. I have verified that the user has access to the files by running the following command:

```
su -l nginx -s /bin/stat /usr/share/nginx/srv/downloads/file.txt
```

The output indicates that the user has the necessary permissions:

```
Last login: Thu Apr 28 09:30:19 CEST 2023 on pts/0
  File: '/usr/share/nginx/srv/downloads/file.txt'
  Size: 0           Blocks: 0          IO Block: 4096   regular empty file
Device: fd00h/64768d    Inode: 85524762    Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/    is)   Gid: ( 1000/    devs)
Context: system_u:object_r:httpd_sys_content_t:s0
Access: 2023-04-28 09:45:48.393259661 +0200
Modify: 2023-04-28 09:45:48.393259661 +0200
Change: 2023-04-28 09:45:48.393259661 +0200
 Birth: - 
```

I also tried with the user www-data, but the issue persists.

**A:**

1. **Reproduce the problem**
This issue is likely related to SELinux blocking access to the directory. To confirm if it's an SELinux issue, temporarily disable SELinux by running 

```
sudo setenforce 0
```

then try loading the directory again.

2. **Generate SELinux policy**

If this resolves the issue, you will need to adjust the context of the directory to allow Nginx access or use `audit2allow` to identify a SELinux boolean that can be changed.

  :::tip
  `audit2allow` - generate SELinux policy allow/dontaudit rules from logs of denied operations
  :::

3. **Fix the SELinux issue**
```
sudo semanage fcontext -a -t httpd_sys_content_t "/usr/share/nginx/srv(/.*)?"
```

```
sudo restorecon -R -v /usr/share/nginx/srv
```


The first command tells SELinux that the `/usr/share/nginx/srv` directory contains read-only content for an HTTP server. The second command relabels all the files in the `/usr/share/nginx/srv` directory with the correct context.

4. **Re-enable SELinux**
```
sudo setenforce 1
```


## 📚 Further reading and Next Steps

<u>Get Back:</u>
- AlmaLinux Nginx Series ❯ [A Beginner's Guide](NginxSeriesA01)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 8.x Installation](NginxSeriesA01R8)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.1 Installation](NginxSeriesA02R91)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.2 Installation](NginxSeriesA02R92)

<u>In-depth Resources:</u>

<u>Related Resources:</u>
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](../system/SystemSeriesA02)
- AlmaLinux System Series ❯ [Application Streams](../system/SystemSeriesA01)

