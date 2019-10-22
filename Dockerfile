FROM node:8.15.0

RUN apt-get update
RUN apt-get install gettext-base

WORKDIR /app

COPY . .

RUN npm install
RUN npm test
RUN npm install pm2 -g

CMD ["/app/entrypoint.sh"]
