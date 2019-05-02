#!/bin/bash

npm install js-yaml -g
npm install js-yaml
node process_appspec.js $(aws ecs list-task-definitions --region us-east-1 --family-prefix codehub-api | jq -r ".taskDefinitionArns[-1]")
aws s3 cp appspec.yaml s3://codehub-dev-api
aws deploy wait deployment-successful --region us-east-1 --deployment-id $(aws deploy create-deployment --cli-input-json file://codehub-api-create-deployment.json --region us-east-1 | jq -r ".deploymentId")
echo CodeHub API Successfull Deployment Confirmed!!
