FROM nginx:alpine
EXPOSE 3333
RUN npm build
COPY default.conf /etc/nginx/conf.d/default.conf
COPY /public /usr/share/nginx/html
