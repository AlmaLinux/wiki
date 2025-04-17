(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{458:function(e,t,s){"use strict";s.r(t);var a=s(25),i=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"a04-❯-secure-nginx-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a04-❯-secure-nginx-deployment"}},[e._v("#")]),e._v(" A04 ❯ Secure Nginx Deployment")]),e._v(" "),t("p",[t("small",[e._v("ℹ️ This article is part of AlmaLinux "),t("RouterLink",{attrs:{to:"/series/"}},[e._v("Nginx Series")]),e._v(".")],1)]),t("hr"),t("p"),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("💡")]),e._v(" "),t("th",[e._v("Experience Level")]),e._v(" "),t("th",[e._v("⭐☆☆☆☆")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("📆")]),e._v(" "),t("td",[t("small",[e._v("Last modified ")])]),e._v(" "),t("td",[e._v("2023-05-16")])]),e._v(" "),t("tr",[t("td",[e._v("🔧")]),e._v(" "),t("td",[t("small",[e._v("Tested by "),t("br"),e._v(" ↳ version | platform | date ")])]),e._v(" "),t("td",[t("small",[t("a",{attrs:{href:"mailto:psuchanecki@almalinux.org"}},[e._v("Pawel Suchanecki")]),e._v(" "),t("br"),e._v("  ↳ 9.1 | x86_64 | 2023-04-21 ")])])])])]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"🌟-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌟-introduction"}},[e._v("#")]),e._v(" 🌟 Introduction")]),e._v(" "),t("p",[e._v("As Nginx is a high-performance web server commonly used in public environments it makes it a prime target for malicious attacks. To enhance the security of your Nginx server and protect your web content, it's important to secure your system. This guide presents a few simple steps you can take to secure your Nginx server and help prevent unauthorized access.")]),e._v(" "),t("h2",{attrs:{id:"🧠-fundamental-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🧠-fundamental-concepts"}},[e._v("#")]),e._v(" 🧠 Fundamental Concepts")]),e._v(" "),t("h3",{attrs:{id:"general-protection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-protection"}},[e._v("#")]),e._v(" General Protection")]),e._v(" "),t("h4",{attrs:{id:"regular-updates-and-patches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regular-updates-and-patches"}},[e._v("#")]),e._v(" Regular Updates and Patches")]),e._v(" "),t("p",[e._v("Keeping your Nginx installation up-to-date is essential in ensuring that it is secure. Regularly check for software updates and patches from the official repository to stay informed of any vulnerabilities or bugs that could affect your Nginx server.")]),e._v(" "),t("h4",{attrs:{id:"file-and-directory-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-and-directory-permissions"}},[e._v("#")]),e._v(" File and Directory Permissions")]),e._v(" "),t("p",[e._v("Make sure that the file and directory permissions are set appropriately for your Nginx server. Only allow users with the appropriate permissions to access the files and directories.")]),e._v(" "),t("h4",{attrs:{id:"use-a-dedicated-user-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-a-dedicated-user-account"}},[e._v("#")]),e._v(" Use a Dedicated User Account")]),e._v(" "),t("p",[e._v("Running Nginx as a dedicated user account can help limit the damage caused by an attacker if your server is compromised. This is because a dedicated user account only has access to the files and directories required to run Nginx, reducing the potential damage an attacker can cause if they gain access to your server.")]),e._v(" "),t("h4",{attrs:{id:"restrict-access-to-sensitive-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restrict-access-to-sensitive-information"}},[e._v("#")]),e._v(" Restrict Access to Sensitive Information")]),e._v(" "),t("p",[e._v("To reduce the risk of exposing sensitive information, limit access to sensitive information on your server. You can do this by ensuring that only authorized users have access to sensitive files and directories.")]),e._v(" "),t("h4",{attrs:{id:"monitor-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monitor-logs"}},[e._v("#")]),e._v(" Monitor Logs")]),e._v(" "),t("p",[e._v("Monitoring your Nginx server logs can help you detect and respond to security incidents quickly. Regularly reviewing your logs can help you identify any suspicious activity or unauthorized access attempts. You can also set up alerts or notifications to receive notifications when specific events occur, such as failed login attempts.")]),e._v(" "),t("h3",{attrs:{id:"security-must-haves"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-must-haves"}},[e._v("#")]),e._v(" Security must-haves")]),e._v(" "),t("p",[e._v("⚠️  Implement a firewall to block all incoming traffic (default on AlmaLinux) except for the ports you want to allow. For a web server like Nginx, you typically want to allow ports for HTTP and HTTPS services.")]),e._v(" "),t("p",[e._v("⚠️  Use secure protocols for accessing your server, such as SSH, and disable password-based authentication in favor of public-key authentication.")]),e._v(" "),t("p",[e._v("⚠️  Use secure coding practices when developing your web application or service, such as input validation and sanitization, to prevent common web vulnerabilities like SQL injection and cross-site scripting (XSS).")]),e._v(" "),t("h3",{attrs:{id:"configuration-specific-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-specific-practices"}},[e._v("#")]),e._v(" Configuration Specific Practices")]),e._v(" "),t("p",[e._v("➡️  Enable SSL/TLS encryption to encrypt your web traffic, preventing attackers from intercepting sensitive information. Obtaining an SSL certificate from a trusted certificate authority like Let's Encrypt is recommended.")]),e._v(" "),t("p",[e._v("➡️  Implement user authentication using the "),t("code",[e._v("htpasswd")]),e._v(" tool to restrict access to your Nginx server and control access to specific areas of your site.")]),e._v(" "),t("p",[e._v("➡️  Implement rate limiting to limit the number of requests from a particular IP address over a given period, preventing denial-of-service (DoS) attacks and other malicious traffic.")]),e._v(" "),t("p",[e._v("➡️  Disable server tokens in Nginx to prevent revealing information about the software and version being used, making it harder for attackers to find potential vulnerabilities in your server.")]),e._v(" "),t("h2",{attrs:{id:"📝-key-takeaways"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📝-key-takeaways"}},[e._v("#")]),e._v(" 📝 Key Takeaways")]),e._v(" "),t("h3",{attrs:{id:"step-1-check-the-firewalld-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-check-the-firewalld-configuration"}},[e._v("#")]),e._v(" Step 1: Check The Firewalld Configuration")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("On AlmaLinux OS, the Firewalld packet filtering service is enabled by default.")])]),e._v(" "),t("p",[e._v("To allow incoming traffic on ports 80 (HTTP) and 443 (HTTPS), run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo firewall-cmd --permanent --zone=public --add-service={http,https}\n")])])]),t("p",[e._v("Then just reload the rules:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo firewall-cmd --reload\n")])])]),t("h3",{attrs:{id:"step-2-enable-ssl-tls-encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-enable-ssl-tls-encryption"}},[e._v("#")]),e._v(" Step 2: Enable SSL/TLS Encryption")]),e._v(" "),t("p",[e._v("Encrypting your web traffic using SSL/TLS is an essential step in securing your Nginx installation. To enable SSL/TLS encryption, you will need to obtain an SSL certificate and configure Nginx to use it.\nOne way to obtain an SSL certificate is to use Let's Encrypt, a free, automated, and open certificate authority.")]),e._v(" "),t("p",[e._v("To install Let's Encrypt on AlmaLinux 9.x, run the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf install certbot python3-certbot-nginx\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("python3-certbot-nginx")]),e._v(" package is from EPEL repository, so if you get error to the above, just do:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dnf install epel-release\n")])])])]),e._v(" "),t("p",[e._v("Then, obtain an SSL certificate for your domain by running the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo certbot --nginx -d almalinux.example.com\n")])])]),t("p",[e._v("Replace example.com with your domain name.")]),e._v(" "),t("h4",{attrs:{id:"example-on-success"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-on-success"}},[e._v("#")]),e._v(" Example on success:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("...\nDeploying certificate\nSuccessfully deployed certificate for almalinux.example.com to /etc/nginx/nginx.conf\nCongratulations! You have successfully enabled HTTPS on https://almalinux.example.com\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("After successful configuration, '/etc/nginx/nginx.conf' will contain these new lines:")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("DETAILS")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    listen [::]:443 ssl ipv6only=on; # managed by Certbot\n    listen 443 ssl; # managed by Certbot\n    ssl_certificate /etc/letsencrypt/live/almalinux.example.com/fullchain.pem; # managed by Certbot\n    ssl_certificate_key /etc/letsencrypt/live/almalinux.example.com/privkey.pem; # managed by Certbot\n    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot\n    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot\n    \n    \n     server {\n        if ($host = almalinux.example.com) {\n            return 301 https://$host$request_uri;\n        } # managed by Certbot\n        listen       80;\n        listen       [::]:80;\n        server_name  almalinux.example.com;\n        return 404; # managed by Certbot\n    }\n")])])])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If you get this weird error:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("...\nDeploying certificate\nCould not install certificate\nAn unexpected error occurred:\nOpenSSL.crypto.Error: [('Provider routines', '', 'invalid key length')]\nAsk for help or search for solutions at https://community.letsencrypt.org. See the logfile /var/log/letsencrypt/letsencrypt.log or re-run Certbot with -v for more details.\n")])])]),t("p",[e._v("Please check if you have FIPS mode enabled which prevents 'unauthorized' uses of OpenSSL framework (instruction in Details).")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("DETAILS")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fips-mode-setup --check\n")])])]),t("p",[e._v("Should tell you:\n"),t("code",[e._v("FIPS mode is disabled.")])]),e._v(" "),t("p",[e._v("If does not you need to disable the FIPS for the time of generation:")]),e._v(" "),t("ul",[t("li",[e._v("Disable it:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fips-mode-setup --disable\n")])])]),t("ul",[t("li",[e._v("Reboot the system!\n ")]),e._v(" "),t("li",[e._v("Regenerate the certificate (or just reinstall - "),t("code",[e._v("certbot")]),e._v(" will offer that option when runs again) with the command that previously failed (above).")]),e._v(" "),t("li",[e._v("Renable FIPS:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fips-mode-setup --enable\n")])])]),t("ul",[t("li",[e._v("Reboot the system!")])])])]),e._v(" "),t("h4",{attrs:{id:"check-if-that-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-if-that-works"}},[e._v("#")]),e._v(" Check if that works!")]),e._v(" "),t("p",[e._v("Navigate your browser to your site with "),t("code",[e._v("https")]),e._v(" protocol prefix.\n(Like: https://almalinux.example.com). "),t("u",[e._v("Now the connection is encrypted")]),e._v("(🔒).")]),e._v(" "),t("h3",{attrs:{id:"step-3-implement-user-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-implement-user-authentication"}},[e._v("#")]),e._v(" Step 3: Implement User Authentication")]),e._v(" "),t("p",[e._v("If you want to restrict access to your Nginx server, you can implement user authentication using the "),t("code",[e._v("htpasswd")]),e._v(" tool.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[t("code",[e._v("htpasswd")]),e._v(" manages user accounts and passwords for accessing restricted areas of your website, helping to add basic authentication to your Nginx server and control access to specific areas of your site.")])]),e._v(" "),t("p",[e._v("To do this, run the following command to install "),t("code",[e._v("httpd-tools")]),e._v(" package:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf install httpd-tools\n")])])]),t("p",[e._v("Then, create a password file for your user by running the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo htpasswd -c /etc/nginx/.htpasswd myuser\n")])])]),t("p",[e._v("Replace "),t("code",[e._v("myuser")]),e._v(" with your desired username.")]),e._v(" "),t("p",[e._v("Finally, add the following configuration to your Nginx server block to require authentication for all requests (lines starting with "),t("code",[e._v("auth_basic")]),e._v("):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server {\n    listen 80;\n    server_name example.com;\n    root /var/www/example.com;\n    index index.html;\n\n    auth_basic "Restricted Access";\n    auth_basic_user_file /etc/nginx/.htpasswd;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n')])])]),t("p",[e._v("Accessing the site will prompt user for username and password now.")]),e._v(" "),t("h3",{attrs:{id:"step-4-implement-rate-limiting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-implement-rate-limiting"}},[e._v("#")]),e._v(" Step 4: Implement Rate Limiting")]),e._v(" "),t("p",[e._v("Rate limiting is a technique used to limit the number of requests from a particular IP address over a given period. This can help prevent denial-of-service (DoS) attacks and other malicious traffic.")]),e._v(" "),t("p",[e._v("To implement rate limiting in Nginx, add the following configuration to your server block (lines starting with "),t("code",[e._v("limit_req*")]),e._v(")")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server {\n    listen 80;\n    server_name example.com;\n    root /var/www/example.com;\n    index index.html;\n\n    limit_req zone=one burst=5 nodelay;\n    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n")])])]),t("p",[e._v("This configuration will limit requests to one request per second per IP address, with a burst of 5 requests allowed before blocking further requests. The nodelay parameter ensures that requests exceeding the limit are blocked immediately.")]),e._v(" "),t("p",[e._v("Note: both can be added to "),t("code",[e._v("http")]),e._v(" block.")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("DETAILS")]),e._v(" "),t("p",[e._v("For more info on rate limitting please read "),t("strong",[t("a",{attrs:{href:"https://www.nginx.com/blog/rate-limiting-nginx/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" a dedicated blog post Nginx.org "),t("OutboundLink")],1)])])]),e._v(" "),t("h3",{attrs:{id:"step-5-disable-server-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-5-disable-server-tokens"}},[e._v("#")]),e._v(" Step 5: Disable Server Tokens")]),e._v(" "),t("p",[e._v("By default, Nginx includes server tokens in its response headers, which can reveal information about the software and version being used. This can be useful for attackers to find potential vulnerabilities in your server.")]),e._v(" "),t("p",[e._v("To disable server tokens in Nginx, add the following configuration to your "),t("code",[e._v("nginx.conf")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server_tokens off;\n")])])]),t("p",[e._v("As with all the changes to the configuration file you need to reload the server for this to be effective:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("systemctl reload nginx\n")])])]),t("h2",{attrs:{id:"📖-faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-faq"}},[e._v("#")]),e._v(" 📖 FAQ")]),e._v(" "),t("h4",{attrs:{id:"q-how-to-fix-nginx-stat-failed-13-permission-denied-with-selinux-enabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-how-to-fix-nginx-stat-failed-13-permission-denied-with-selinux-enabled"}},[e._v("#")]),e._v(" Q: How to fix "),t("code",[e._v("Nginx: stat() failed (13: Permission denied)")]),e._v(" with SELinux enabled?")]),e._v(" "),t("p",[e._v('Context: Nginx server is running under the user "nginx" and has access to to the files. But when I am attempting to list the contents of the /usr/share/nginx/srv/downloads/ directory on my server using a web browser. I have installed the Nginx server and set up configuration files, but when I try to access the directory, not all content is listed, and I receive a "Permission denied" error. The error message is as follows:')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('2023/04/27 17:08:54 [crit] 12839#0: *1 stat() "/usr/share/nginx/srv/downloads/file.txt" failed (13: Permission denied), client: 192.168.0.26, server: localhost, request: "GET /downloads/ HTTP/1.1", host: "localhost"\n')])])]),t("p",[e._v('The Nginx server is running under the user "nginx," which is part of the "devs" group. I have verified that the user has access to the files by running the following command:')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("su -l nginx -s /bin/stat /usr/share/nginx/srv/downloads/file.txt\n")])])]),t("p",[e._v("The output indicates that the user has the necessary permissions:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Last login: Thu Apr 28 09:30:19 CEST 2023 on pts/0\n  File: '/usr/share/nginx/srv/downloads/file.txt'\n  Size: 0           Blocks: 0          IO Block: 4096   regular empty file\nDevice: fd00h/64768d    Inode: 85524762    Links: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/    is)   Gid: ( 1000/    devs)\nContext: system_u:object_r:httpd_sys_content_t:s0\nAccess: 2023-04-28 09:45:48.393259661 +0200\nModify: 2023-04-28 09:45:48.393259661 +0200\nChange: 2023-04-28 09:45:48.393259661 +0200\n Birth: - \n")])])]),t("p",[e._v("I also tried with the user www-data, but the issue persists.")]),e._v(" "),t("p",[t("strong",[e._v("A:")])]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Reproduce the problem")]),e._v("\nThis issue is likely related to SELinux blocking access to the directory. To confirm if it's an SELinux issue, temporarily disable SELinux by running")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo setenforce 0\n")])])]),t("p",[e._v("then try loading the directory again.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[e._v("Generate SELinux policy")])])]),e._v(" "),t("p",[e._v("If this resolves the issue, you will need to adjust the context of the directory to allow Nginx access or use "),t("code",[e._v("audit2allow")]),e._v(" to identify a SELinux boolean that can be changed.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[t("code",[e._v("audit2allow")]),e._v(" - generate SELinux policy allow/dontaudit rules from logs of denied operations")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Fix the SELinux issue")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('sudo semanage fcontext -a -t httpd_sys_content_t "/usr/share/nginx/srv(/.*)?"\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo restorecon -R -v /usr/share/nginx/srv\n")])])]),t("p",[e._v("The first command tells SELinux that the "),t("code",[e._v("/usr/share/nginx/srv")]),e._v(" directory contains read-only content for an HTTP server. The second command relabels all the files in the "),t("code",[e._v("/usr/share/nginx/srv")]),e._v(" directory with the correct context.")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[e._v("Re-enable SELinux")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo setenforce 1\n")])])]),t("h2",{attrs:{id:"📚-further-reading-and-next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📚-further-reading-and-next-steps"}},[e._v("#")]),e._v(" 📚 Further reading and Next Steps")]),e._v(" "),t("p",[t("u",[e._v("Get Back:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA01.html"}},[e._v("A Beginner's Guide")])],1),e._v(" "),t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA01R8.html"}},[e._v("AlmaLinux OS 8.x Installation")])],1),e._v(" "),t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA02R91.html"}},[e._v("AlmaLinux OS 9.1 Installation")])],1),e._v(" "),t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA02R92.html"}},[e._v("AlmaLinux OS 9.2 Installation")])],1)]),e._v(" "),t("p",[t("u",[e._v("In-depth Resources:")])]),e._v(" "),t("p",[t("u",[e._v("Related Resources:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux Firewalld Series ❯ "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA02.html"}},[e._v("A Beginner's Guide")])],1),e._v(" "),t("li",[e._v("AlmaLinux System Series ❯ "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA01.html"}},[e._v("Application Streams")])],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);