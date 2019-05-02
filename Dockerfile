FROM node:8.15.0
MAINTAINER Nate Solomon <solomon_nathaniel@bah.com>

WORKDIR /app

# Bundle app source
COPY . /app

# Install app dependencies
RUN npm install
RUN npm audit fix
RUN npm install pm2 -g

EXPOSE 3000 3001
CMD ["./docker-entrypoint.sh"]
