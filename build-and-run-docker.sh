#!/bin/bash
docker build -t codehub-api:latest .
docker run --rm -d -p 3000:3000 -e ELASTICSEARCH_URL=$ELASTICSEARCH_URL codehub-api:latest
