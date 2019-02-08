FROM nginx:alpine
EXPOSE 3333
COPY default.conf /etc/nginx/conf.d/default.conf
COPY /Users/matt/atomic-bytes/atomicbytes-marketing/public /usr/share/nginx/html
