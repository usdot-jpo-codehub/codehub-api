FROM node:8.15.0
MAINTAINER Nate Solomon <solomon_nathaniel@bah.com>

# Create app directory
RUN mkdir -p /opt/dot-task4/v.2/dot-task4-webapp

WORKDIR /opt/dot-task4/v.2/dot-task4-webapp

# Bundle app source
COPY . /opt/dot-task4/v.2/dot-task4-webapp

# Install app dependencies
RUN npm install
RUN npm audit fix
RUN npm install pm2 -g

EXPOSE 3000 3001
#ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["./docker-entrypoint.sh"]
