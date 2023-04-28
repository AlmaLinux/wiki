# AlmaLinux Nginx Series ❙ Article 01
#### Getting Started with Nginx: ++A Beginner's Guide++ 

| 💡 | Experience Level  | ⭐☆☆☆☆ `1/5` |
|--- | --------- | -------- |
| 📆 | Last modified | 2023-04-25
| 🔧 |  Tested by <br> ↳ version\|platform\|date | 👨‍💻 [Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ **9.1\|x86_64\|2023-04-21** | 
  

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


▱ **Strengthen Server Security**: Adopt security best practices, including firewalls, intrusion detection systems, and regular software updates, to safeguard your server from potential attacks.
▱ **Implement HTTPS**: Ensure SSL/TLS certificates are in place to encrypt traffic between your server and users.
▱ **Enhance Performance**: Employ caching and load balancing techniques to optimize your server's performance and scalability.

## 🧠 Fundamental Concepts 

### Nginx Installation Variants

There are three ways of installing Nginx on AlmaLinux 8.x and 9.x:

 ▱ **AppStream non-module**
 ▰ Installs the default, non-module version from the AppStream repository
    
 ▱ **AppStream module**
 ▰ Installs the module version from the AppStream repository
 ▰ Allows installation of a specific version for compatibility reasons

  ▱ **F5 Networks repository** 
  ▰ Involves defining a new repository data for your system
  ▰ Installs a latest RPM package from external main-line repository
  ▰ Allows always running the latest version of Nginx



## 📝 Key Takeaways

### ➡️ Installing
▱  **Update System Packages**: Ensure your system packages are up-to-date before installing Nginx by running:
```
sudo dnf update
```
▱ **Configure Firewall**: Allow incoming traffic on TCP ports 80(HTTP) & 443(HTTPS) traffic: 
    
```
sudo firewall-cmd --permanent --add-service={http,https} 
sudo firewall-cmd --reload
```
:::warning
ℹ️ On AlmaLinux OS, the `Firewalld` packet filtering service is enabled by default 
:::
 

▱ **Install Nginx**: Install Nginx using one of the three variants: default package repository, Appstream module, or Nginx repository.

   <u>Compatibility Matrix++</u>
   | Install Variant | 8.7 | 9.1|
   |---------------- | ----|----|
   | I. AppStream non-module  |  ❗^1^ |  ✅ |
   | II. AppStream module |  ✅ |  ❌ |
   | III. Mainline repo  |  ✅ |  ✅ | 
    
:::warning 
  ^[1]^ On 8.7, this will actually install the AppStream module.
:::


### ➡️ Testing
▱ **Start Nginx Service**: After installation, start the Nginx service with:
```
sudo systemctl start nginx
``` 

▱ **Check Nginx Status**: Verify if Nginx is running properly by running: 
 ```
 sudo systemctl status nginx
 ```

▱ **Check Firewall Status**: make sure `http` & `https` services are enabled (open ports):

```
sudo firewall-cmd --list-services 
```

▱ **Test Nginx Installation**: Open web browser of your choice and enter your server's IP address or hostname to see the default Nginx welcome page. E.g.:
 ```
 lynx http://localhost/ 
 ```
 
 :::info
 > `Lynx` is a text-based web browser for use on cursor-addressable character (cell) terminals. 
 :::
 
 :::warning
 **TIP**
 ℹ️ To exit `Lynx` press `q` and then `y` to confirm.
 :::


### ➡️ Configuring
▱ **Configure Nginx**: To serve your own content, edit the Nginx configuration file at:
  ```
  /etc/nginx/nginx.conf
  ```
  
▱ **Test Nginx Configuration**: Before reloading Nginx, test the configuration file for syntax errors using 
  ```
  sudo nginx -t
  ```
    

### ➡️ Management
▱ **Reload Nginx**: Reload Nginx to apply configuration changes with:
  ```
  sudo systemctl reload nginx
  ```
  
▱ **Stop Nginx Service**: To stop the Nginx service, execute the command: 
 ```
 sudo systemctl stop nginx
```

▱ **Enable Nginx at Boot**: To start Nginx automatically at system boot, run:
```
sudo systemctl enable nginx
```


## 📖 Release-Specific Installation

   :::info
   **Note:** For version-specific examples, please refer to the corresponding sub-pages:
   - 🔖 Getting Started with Nginx ❯ **[AlmaLinux OS 8.x Installation Examples](https://hackmd.io/@almalinux/ByRCf18Mh)**     
   - 🔖 Getting Started with Nginx ❯ **[AlmaLinux OS 9.x Installation Examples](https://hackmd.io/@almalinux**/r1oe9mLf2)**
   :::


## 📚 Further reading and Next Steps
After successfully setting up Nginx, you can configure it to better suit your requirements and enhance its security features. Check out these in-depth resources to learn more:

▰ Getting Started with Nginx ❯ **[ Default Configuration Guide](https://hackmd.io/@almalinux/rydHoLbRo)** 
▰ Getting Started with Nginx ❯ **[How to Secure Your Nginx - Part 1](https://hackmd.io/@almalinux/HJjNRUW0i)**
▰ Getting Started with Firewalld ❯ **[A Beginner's Guide (Cheat-sheet)](https://hackmd.io/@almalinux/H1H_Xl8G2)**
▰ AlmaLinux System Series ❙ Application Streams ❯ **[Getting Started with Appstream modules](https://hackmd.io/@almalinux/SyMhps8Mn)**

----    
   
##### Trademark notices
:::warning
**Linux®** is the registered trademark of Linus Torvalds in the U.S. and other countries.

**macOS** are trademarks of Apple Inc., registered in the U.S. and other countries.

**Windows** is a registered trademark of Microsoft Corporation in the United States and other countries.
:::
