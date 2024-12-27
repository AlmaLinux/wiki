---
title: 'Deploy a LAMP server'
parent: 'Howto Series'
grandparent: 'Documentation'
---

<Breadcrumbs />

# Deploy a LAMP server

| Experience Level   | ⭑⭑         |
|--------------------|------------|
| Last modified date | 2024-05-18 |

The **LAMP** stack, comprising **L**inux, **A**pache, **M**ySQL, and **P**HP owes much of its popularity and versatility to its open-source nature.

- **L**inux, the operating system at its core, embodies collaborative development, providing a stable foundation for web servers.

- **A**pache, the iconic web server software, benefits from a community-driven approach, ensuring flexibility and reliability.

- **M**ySQL, the relational database management system, democratizes access to robust database technology, thanks to its open-source ethos.

- **P**HP, thrives on community contributions, facilitating dynamic and interactive web experiences.

Together, the LAMP stack exemplifies the power of open-source collaboration, empowering developers worldwide to create scalable, cost-effective web applications that drive the modern internet.

## Introduction

For the sake of this guide we'll focus on a **LAMP** server that is composed of these four components:

| Name | Description |
|----------|----------|
| (**L**) AlmaLinux    | The operating system, in this case AlmaLinux 8   |
| **A**pache 2   | A trusted open-source web server software known for its reliability and scalability.  |
| **M**ariaDB  | A popular open-source database system for managing structured data efficiently.   |
| **P**HP, php-fpm   | A widely-used web scripting language known for its simplicity, flexibility, and strong community.   |

### Requirements

* A privileged user (*sudoer*) or access to the root user.
* RHEL based OS, AlmaLinux 8 or 9.

## First step - install Apache 2

Apache is a project designed to develop and maintain an open source HTTP server for modern operating systems along with high security with efficient resource consumption and meeting HTTP standards.
It first appeared in 1995 and since 1996 the most popular web server in the world.

* **Install Apache 2:**
    ```sh
    sudo dnf install -y httpd
    ```

* **Allow traffic on port 80:**
    ```sh
    sudo firewall-cmd --add-port=80/tcp --permanent
    sudo firewall-cmd --reload
    ```

* **Enable and start apache 2:**
    ```sh
    sudo systemctl enable httpd
    sudo systemctl start httpd
    ```

You can test that Apache runs properly by accessing http://YOUR-IP (**YOUR-IP** being your ip address), you should get the following page:

![AlmaLinux-Apache-Default-page](/images/HowTo-LAMP-server-1.png)

## Second step - install MariaDB

MariaDB is one of the major relational databases in the market, built by the developers of MySQL, ensuring to remain open-source, with a large part of the cloud utilizing it for data management purposes.


* **To use a newer repo of MariaDB (To install a newer version) run the following in your cmd:**
    ```sh
    cat <<EOF>/etc/yum.repos.d/MariaDB.repo
    [mariadb]
    name = MariaDB
    baseurl = https://rpm.mariadb.org/11.3/rhel/8/x86_64/
    module_hotfixes = 1
    gpgkey = https://rpm.mariadb.org/RPM-GPG-KEY-MariaDB
    gpgcheck = 1
    EOF
    ```

* **Then install, enable and start MariaDB:**
    ```sh
    sudo dnf install -y MariaDB-server
    sudo systemctl enable mariadb
    sudo systemctl start mariadb
    ```

* **Next, run the mariadb-secure-installation:**
    ```sh
    mariadb-secure-installation
    ```

    Enter the following input:

    | Step | Input |
    |----------|----------|
    | Enter current password for root (enter for none) | Press enter |
    | Switch to unix_socket authentication \[Y/n\]  | Y   |
    | Change the root password? \[Y/n\] | Y |
    | Remove anonymous users? \[Y/n\] | Y |
    | Disallow root login remotely? \[Y/n\] | Y |
    | Remove test database and access to it? \[Y/n\] | Y |
    | Reload privilege tables now? [Y/n] | Y |

## Third step - install php-fpm

PHP-FPM, or PHP FastCGI Process Manager, is a versatile and efficient PHP processor that separates PHP processes from the web server, enabling better resource management and scalability.
It's widely favored by developers for its flexibility and performance, seamlessly integrating with popular web servers like Nginx and Apache (Like in here) to optimize PHP execution across different deployment environments.

* **Enable remi repos:**
    ```sh
    sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
    ```

* **Enable php 8.3:**
    ```sh
    sudo dnf module enable php:remi-8.3 -y
    ```

* **Install, enable and start php-fpm:**
    ```sh
    sudo dnf install php-fpm
    sudo systemctl enable php-fpm
    sudo systemctl start php-fpm
    ```

## Optional step - adding a website

* **Make a user in which the site would belong to and add the needed directories:**
    ```sh
    useradd almasite
    cd /home/almasite/
    mkdir logs public_html
    ```

* **Fix the privileges:**
    ```sh
    chown almasite:almasite logs public_html
    ```

* **Create a configuration file in `/etc/httpd/conf.d/` named almasite.conf:**
    ```sh
    <VirtualHost *:80>
        # The domain
        ServerName almasite.com
        # The domains alias
        ServerAlias www.almasite.com
        # Full path to the website files
        DocumentRoot /home/almasite/public_html
        # Full path to the error log file
        ErrorLog /home/almasite/logs/error.log
        # A custom log to record requests to the website
        CustomLog /home/almasite/logs/access.log combined
        # Apply directives only on a given directory
        <Directory /home/almasite/public_html>
            # Enables the server to follow symbolic links within directories
            Options Indexes FollowSymLinks
            # Permits the use of .htaccess files to override server configuration settings
            AllowOverride All
            # Allow access to the specified directory and its contents to all users
            Require all granted
            # Specifies default file for directory access
            DirectoryIndex index.php
        </Directory>
        # Route requests based on patterns
        ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://127.0.0.1:9000/home/almasite/public_html/
    </VirtualHost>
    ```
    Notice the comments explaining each directive.

* **Add a php-fpm pool**
    ```sh
    cp /etc/php-fpm.d/www.conf /etc/php-fpm.d/almasite.conf
    ```

    Open the newly created file with your preferred text editor and change the following:
    - **\[www\]** - with the pools name (.e.g almasite)
    - **user = apache** - your user (.i.e almasite)
    - **group = apache** - your group (.i.e almasite)
    - **listen = /run/php-fpm/www.soc** - your listening method, in this case we use port 9000 (listen = 9000)

* **Add the websites files: (or file in this case ;))**
    ```sh
    touch /home/almasite/public_html/index.php
    ```

    Open your preferred text editor and add the following:
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello world!</title>
        </head>
        <body>
            <?php $now = date("H:i:s", time()); echo "<h1>Hello world!<br>This message is sent from PHP, the time now is $now</h1>" ?>
        </body>
    </html>
    ```

* **Manipulate your hosts file to view your newly created website:**

    ::: tip
    While I cant tell you your **IP** address, I can tell you that the domain is almasite.com and the alias is www.almasite.com. (That is if you followed my guide exactly)

    ```sh
    YOUR-IP-ADDRESS www.almasite.com almasite.com
    ```
    :::

    <br>

    *<ins>Linux</ins>:*

    Edit your hosts file using vim:
    ```sh
    sudo vim /etc/hosts
    ```

    Then press `i` to enter insert mode and add the following line **end** of the file:

    ```sh
    [IP ADDRESS] [DOMAIN]
    ```

    <br>

    *<ins>Windows</ins>:*

    Open Notepad as administrator and open the hosts file:

    > path: **c:\Windows\System32\Drivers\etc\hosts**

    Add the following line at the end of the file:

    ```sh
    [IP ADDRESS] [DOMAIN]
    ```
    And save.

* **Results:**

    You should get a similar result:
    ![LAMP-server-results](/images/HowTo-LAMP-server-2.png)
