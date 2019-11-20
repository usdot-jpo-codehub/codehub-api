#!/bin/bash
envsubst '${ELASTICSEARCH_URL}' < ./server/datasources.template.json > ./server/datasources.json
pm2 start ./server/server.js --no-daemon
