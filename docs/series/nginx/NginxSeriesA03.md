# A03 ❯ Default Configuration Guide 
<small>ℹ️ This article is part of AlmaLinux [Nginx Series](/series/).</small>
<hr>
| 💡 | Experience Level  | ⭐⭐☆☆☆ |
|--- | --------- | --------|
| 📆 | <small>Last modified </small>| 2023-05-15
| 🔧 | <small>Tested by <br> ↳ version \| platform \| date </small>| <small>[Pawel Suchanecki](mailto:psuchanecki@almalinux.org) <br>  ↳ 9.1 \| x86_64 \| 2023-04-21 </small>|
<br> 

## 🌟 Intoduction
By understanding each line in the default configuration, you can modify the settings to better suit your needs. Be sure to carefully review any changes you make to the configuration and test them before deploying in a production environment. This will help ensure that your Nginx server on AlmaLinux is properly configured and running optimally.
## 🧠 Fundamental Concepts

### Nginx Configuration File Structure

The main Nginx configuration file, typically named `nginx.conf`, <u>is organized into a hierarchy of configuration blocks</u>. The top-level block is the main block, which can contain `http`, `events`, and `stream` blocks. The `http` block can contain one or more `server` blocks, which in turn can contain multiple `location`, if, and other directive blocks.

### Directives

<u>Directives</u> are the building blocks of the Nginx configuration file. They define the behavior of the web server and can be set at various levels within the configuration hierarchy. Directives have a name and one or more parameters, and they end with a semicolon.

### Contexts

<u>Contexts</u> are configuration blocks that group directives based on their functionality. Common contexts include `http`, `server`, `location`, and `events`. Directives can only be used within the appropriate context, and some directives can be used in multiple contexts.

### Inheritance and Directive Precedence

Directives set in a parent context are inherited by child contexts unless overridden by a more specific directive within the child context. When multiple directives with the same name are defined, the one in the most specific context takes precedence.

### Variables

Nginx provides a variety of built-in variables that can be used within the configuration file to store and reference values. These variables can be used to customize logging, rewrite URLs, or manipulate request and response headers.

### Rewrite and Redirect Rules

Nginx provides directives for creating rewrite and redirect rules, such as `rewrite`, `return`, and `error_page`. These rules can be used to manipulate incoming URLs and redirect clients to different resources based on specific conditions.

## 📝 Key take aways

### ➡️ Basic Configuration

- System user account Nginx runs as:
```
user nginx;
```
- Number of worker processes for handling requests (auto-detects CPU cores):
```
worker_processes auto;
```
- Error log file path:
```
error_log /var/log/nginx/error.log;
```
- Process ID (PID) file path:
```
pid /run/nginx.pid;
```
- Included dynamically loaded modules:
```
include /usr/share/nginx/modules/*.conf;
```

### ➡️ Performance and Connection Settings

- Maximum connections per worker process:
```
worker_connections 1024;
```

- Enables efficient file sending to clients:
```
sendfile on;
```

- Improves performance by sending small data packets without delay¹: 
```
tcp_nopush on;
```

- Improves performance by sending larger data packets without delay²:
```
tcp_nodelay on;
```

- Time before an idle connection is closed:
```
keepalive_timeout 65;
```

¹ [Details of tcp_nopush option (nginx.org)](http://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nopush)<br>
² [Details of tcp_nodelay option (nginx.org)](http://nginx.org/en/docs/http/ngx_http_core_module.html#tcp_nodelay)<br>
  [About Neagle's algorithm (wikipedia.org)](https://en.wikipedia.org/wiki/Nagle%27s_algorithm)

### 📖 Deep dive on `worker_connections`

`worker_connections` directive is used to set the maximum number of simultaneous connections that a single worker process can handle. A worker process is a separate operating system process that handles the processing of client requests. The worker_connections directive is set within the events block of the Nginx configuration file.

Each connection requires a file descriptor, and the operating system has a limit on the number of file descriptors that can be opened simultaneously. The `worker_connections` value should be set according to the available system resources, the expected number of concurrent connections, and the system’s file descriptor limit.

Keep in mind that the total number of connections the server can handle is determined by the number of worker processes (`worker_processes` directive) multiplied by the number of `worker_connections`. For example, if you have 4 worker processes and 1024 worker connections, your server can handle up to 4096 simultaneous connections.

It’s important to find the right balance between the number of worker processes and worker connections to optimize the performance of your Nginx server based on your specific use case and hardware resources.


### ➡️ MIME Types and Logging

- Maximum size of the MIME types hash table:
```
types_hash_max_size 4096; 
```

::: tip
The hash table allows for faster lookups of MIME types when processing requests for different files. A larger `types_hash_max_size` value will increase memory consumption but can improve performance for lookups in cases where there are a large number of MIME type.
:::

- Included MIME types file:
```
include /etc/nginx/mime.types;
```

- Default MIME type when undetermined.
```
default_type application/octet-stream;
```

- Access log file path and format.
```
access_log /var/log/nginx/access.log main;
```
- Log format used by Nginx
```
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';
```
### 📖 Break down the the default `log_format`

- The IP address of the client making the request:
```
$remote_addr
```
- The authenticated user (if any) making the request. This value will be available only if authentication is enabled:
```
$remote_user
```
- The local time when the request was received, enclosed in square brackets. The format is typically `"day/month/year:hour:minute:second timezone"`:
```
[$time_local]
```
- The full HTTP request line, enclosed in double quotes. It includes the HTTP method, the requested URI, and the HTTP version used by the client (e.g., ``"GET /index.html HTTP/1.1"``):
```
"$request"
```
- The HTTP status code returned by the server for the request:
```
$status
``` 
- The number of bytes sent in the response body (excluding headers) to the client:
```
$body_bytes_sent
```
- The HTTP referer header, enclosed in double quotes. This is the URL of the page that linked to the requested resource (if available):
```
"$http_referer"
```
- The HTTP user agent header, enclosed in double quotes. This contains information about the client's browser and operating system:
```
"$http_user_agent"
```
- The HTTP X-Forwarded-For header, enclosed in double quotes. This header is used to identify the originating IP address of a client when the request is made through a proxy or load balancer:
```
"$http_x_forwarded_for"
```

### ➡️ HTTP Server Block

- Included configuration files for additional server blocks:
```
include /etc/nginx/conf.d/*.conf;
```
- HTTP requests listened on port 80:
```
listen 80;
```
- IPv6 requests listened on port 80:
```
listen [::]:80;
```
- Default server name when unspecified:
```
server_name _;
```
- Server's file root directory:
```
root /usr/share/nginx/html;
```
- Included default server block configuration files:
```
include /etc/nginx/default.d/*.conf;
```
- URL redirect for 404 errors:
```
error_page 404 /404.html;
```
- Empty location block for 404 error page:
```
location = /40x.html { }
```
- URL redirect for 500, 502, 503, or 504 errors:
```
error_page 500 502 503 504 /50x.html;
```
- Empty location block for 500 error page:
```
location = /50x.html { }
```

### ➡️ HTTPS Server Block Specific

- HTTPS requests listened on port 443 (SSL and HTTP/2 protocols):
```
listen 443 ssl http2;
```
- IPv6 HTTPS requests listened on port 443 (SSL and HTTP/2 protocols):
```
listen [::]:443 ssl http2;
```
- SSL certificate file path:
```
ssl_certificate "/etc/pki/nginx/server.crt";
```
- SSL certificate key file path:
```
ssl_certificate_key "/etc/pki/nginx/private/server.key";
```
- Shared SSL session cache:
```
ssl_session_cache shared:SSL:1m;
```
- SSL session timeout value:
```
ssl_session_timeout 10m;
```
- Prefers server's cipher suite over client's.
```
ssl_prefer_server_ciphers on;
```
- Cipher suites for SSL connections.
```
ssl_ciphers PROFILE=SYSTEM;
```

### 📖 More about `ssl_ciphers` setting
The `ssl_ciphers` directive in Nginx is used to specify the list of available ciphers that can be used for SSL/TLS connections. The order of ciphers in the list affects their priority during the SSL/TLS handshake between the server and the client.

`ssl_ciphers PROFILE=SYSTEM;` tells Nginx to use the system's default cipher list for SSL/TLS connections. The system default cipher list is determined by the OpenSSL library installed on your system.

Using `PROFILE=SYSTEM` can be useful when you want to rely on the system-wide cipher configuration rather than specifying a custom list of ciphers in your Nginx configuration. This approach can simplify your Nginx configuration and ensure that your server uses the recommended ciphers for your system.


## 📚 Further reading and Next Steps

<u>Get Back:</u>
- AlmaLinux Nginx Series ❯ [A Beginner's Guide](NginxSeriesA01)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 8.x Installation Examples](NginxSeriesA02R8)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.1 Installation Examples](NginxSeriesA02R91)
- AlmaLinux Nginx Series ❯ [AlmaLinux OS 9.2 Installation Examples](NginxSeriesA02R92)

<u>In-depth Resources:</u>

- AlmaLinux Nginx Series ❯ [Secure Nginx Deployment](NginxSeriesA04P1)

<u>Related Resources:</u>
- AlmaLinux Firewalld Series ❯ [A Beginner's Guide](../system/FirewalldSeriesA01)
- AlmaLinux System Series ❯ [Application Streams](../system/SystemSeriesA01)
 
