FROM nginx:alpine
EXPOSE 3333
COPY default.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html
COPY main.css /usr/share/nginx/html/main.css