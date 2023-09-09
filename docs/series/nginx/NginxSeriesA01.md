# A01 ❯ A Beginner's Guide
<small>ℹ️ This article is part of AlmaLinux [Nginx Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐☆☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-10
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ 9.1 \| x86_64 \| 2023-04-21 </small>| 
<br>

## 🌟 Introduction

In this guide, we offer a detailed walk-through of Nginx installation, exploring three potential installation methods with examples for AlmaLinux OS 8.x and 9.x. You'll gain insights into essential Nginx interactions, and we'll present a tailored-learning path crafted to assist you in mastering Nginx and achieving proficiency in its utilization.


### About Nginx 

Nginx is a popular open-source, powerful web server and reverse proxy that is known for its high performance and stability. It can be used to serve static and dynamic content, load balance traffic, and optimize performance and scalability. 


### Architecture 
Nginx is based on an event-driven architecture, which differs from traditional thread-based web servers by handling multiple connections simultaneously without creating a separate thread for each one. This approach enables Nginx to efficiently manage a large number of connections with minimal overhead, resulting in improved performance, especially under high load conditions.


### Primary components
The primary components of Nginx include the master process, worker processes, and configuration files. The master process is responsible for reading and validating the configuration file, managing worker processes, and handling signals. Worker processes handle incoming client requests, process them, and send responses back to the clients. Configuration files define the behavior of Nginx, specifying how it should handle different types of requests, route traffic, and manage other settings.

### Best practices

In this series, we will delve into best practices and uncover new aspects of Nginx to accelerate your learning and develop practical skills. Here is a basic set of best practices:


- **Strengthen Server Security**: Adopt security best practices, including firewalls, intrusion detection systems, and regular software updates, to safeguard your server from potential attacks.
- **Implement HTTPS**: Ensure SSL/TLS certificates are in place to encrypt traffic between your server and users.
- **Enhance Performance**: Employ caching and load balancing techniques to optimize your server's performance and scalability.

## 🧠 Fundamental Concepts 

### Nginx Installation Variants

There are three ways of installing Nginx on AlmaLinux 8.x and 9.x:

 - **AppStream non-module**
  -- Installs the default, non-module version from the AppStream repository 
 - **AppStream module**
  -- Installs the module version from the AppStream repository
  -- Allows installation of a specific version for compatibility reasons
 - **F5 Networks repository** 
 -- Involves defining a new repository data for your system
 -- Installs a latest RPM package from external main-line repository
 -- Allows always running the latest version of Nginx


## 📝 Key Takeaways

### ➡️ Installing
-  **Update System Packages**: Ensure your system packages are up-to-date before installing Nginx by running:
```
sudo dnf update
```
- **Configure Firewall**: Allow incoming traffic on TCP ports for HTTP & HTTPS services (80 & 443, respectively): 

:::warning
On AlmaLinux OS, the `Firewalld` packet filtering service is enabled by default 
:::
    
```
sudo firewall-cmd --permanent --add-service={http,https} 
sudo firewall-cmd --reload
```


- **Install Nginx**: Install Nginx using one of the three variants: default package repository, Appstream module, or Nginx repository.

   <u>Compatibility Matrix</u>
   | Install Variant | 8.7 | 9.1|
   |---------------- | ----|----|
   | I. AppStream non-module  |  ❗¹ |  ✅ |
   | II. AppStream module |  ✅ |  ❌ |
   | III. Mainline repo  |  ✅ |  ✅ | 
    
  ¹ On 8.7, this will actually install the AppStream module.



### ➡️ Testing
- **Start Nginx Service**: After installation, start the Nginx service with:
```
sudo systemctl start nginx
``` 

- **Check Nginx Status**: Verify if Nginx is running properly by running: 
 ```
 sudo systemctl status nginx
 ```

- **Check Firewall Status**: make sure `http` & `https` services are enabled (open ports):

```
sudo firewall-cmd --list-services 
```

- **Test Nginx Installation**: Navigate a web browser of your choice to your server's hostname or IP address to check for the default page.

**Example:** we use `lynx` to be able to perform the check from command-line-interface:
 ```
 lynx http://localhost/ 
 ```
 
 ::: details
 `lynx` is a text-based web browser for use on cursor-addressable character (cell) terminals. 

  Install it with `dnf install lynx`.
 :::
 
 ::: tip 
 To exit `lynx` press `q` and then `y` to confirm.
 :::


### ➡️ Configuring
- **Configure Nginx**: To serve your own content, edit the Nginx configuration file at:
  ```
  /etc/nginx/nginx.conf
  ```
  
- **Test Nginx Configuration**: Before reloading Nginx, test the configuration file for syntax errors using: 
  ```
  sudo nginx -t
  ```
    

### ➡️ Management
- **Reload Nginx**: Reload Nginx to apply configuration changes with:
  ```
  sudo systemctl reload nginx
  ```
  
- **Stop Nginx Service**: To stop the Nginx service, execute the command: 
 ```
 sudo systemctl stop nginx
 ```

- **Enable Nginx at Boot**: To start Nginx automatically at system boot, run:
 ```
 sudo systemctl enable nginx 
 ```


## 📖 Release-Specific Installation

<u>AlmaLinux version-specific examples:</u>
   
   - Getting Started with Nginx ❯ **[AlmaLinux OS 8.x Installation Examples](NginxSeriesA01R8.html)**
   - Getting Started with Nginx ❯ **[AlmaLinux OS 9.x Installation Examples](NginxSeriesA01R9.html)**
   


## 📚 Further reading and Next Steps

<u>In-depth Resources:</u>

- AlmaLinux Nginx Series ❯ [Default Configuration Guide](NginxSeriesA02)
- AlmaLinux Nginx Series ❯ [Secure Nginx Deployment](NginxSeriesA03P1)


<u>Related Resources:</u>
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](../system/FirewalldSeriesA01)
- AlmaLinux System Series ❯ [Application Streams](../system/../system/SystemSeriesA01)

