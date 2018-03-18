# 0x9data
详解关于Nginx的配置服务

```
#user  nobody;
worker_processes  1;

# This default error log path is compiled-in to make sure configuration parsing
# errors are logged somewhere, especially during unattended boot when stderr
# isn't normally logged anywhere. This path will be touched on every nginx
# start regardless of error log location configured here. See
# https://trac.nginx.org/nginx/ticket/147 for more info. 
#
#error_log  /var/log/nginx/error.log;
#

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            include uwsgi_params;
            uwsgi_pass 127.0.0.1:9090;
            uwsgi_param UWSGI_PYHOME /home/HEBSJZ_96365/wechatenv;
            uwsgi_param UWSGI_SCRIPT app;
            uwsgi_param UWSGI_CHDIR /home/HEBSJZ_96365/wechat/app;
        }
	location /app {
	    include uwsgi_params;
	    uwsgi_param SCRIPT_NAME /app;
	    uwsgi_pass unix:/tmp/uwsgi.sock;	
	}

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/local/www/nginx-dist;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

server {
    listen 443;
    server_name localhost;
    ssl on;
    root html;
    index index.html index.htm;
    ssl_certificate   cert/214351792520488.pem;
    ssl_certificate_key  cert/214351792520488.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
	include uwsgi_params;            
	#uwsgi_param SCRIPT_NAME /app;
	#uwsgi_pass 127.0.0.1:8001;
	#uwsgi_param UWSGI_PYTHOME /home/HEBSJZ_93665/wechatenv/wechat;
	uwsgi_param UWSGI_CHDIR /home/HEBSJZ_93665/wechat/app;
	uwsgi_param UWSGI_SCRIPT he:app;
	#uwsgi_param UWSGI_SCHEME https;
	#uwsgi_pass unix:/home/HEBSJZ_96365/wechat/sock/wx_sock.sock;
	uwsgi_pass 127.0.0.1:8001;
	#access_log /usr/local/nginx/logs/access.log;
	if ($request_method = CONNECT){
		return 404;
	}	
    }
}

    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```
