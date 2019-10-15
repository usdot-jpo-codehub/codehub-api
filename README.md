![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiL3VJMHFKZmYxWXZLUU02d1o0Y2JBUkRjOGxpQzJMTWlrWEhaSjI1b2pwOWZMcXQ1QXdKbnhEWEwrbjdkZHVTRDAveHpGQjN5T0ZFUUZEaFZzN01NOVlrPSIsIml2UGFyYW1ldGVyU3BlYyI6IlZDWk5yKzdoTlI4Z1dHLzgiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

# codehub-api

This is the backend application-programming interface (API) for the United States Department of Transportation (U.S. DOT) Joint Program Office (JPO) Intelligent Transit Systems (ITS) CodeHub website located at [https://its.dot.gov/code](https://its.dot.gov/code).

## Getting Started

The CodeHub API is a Dockerized application. While it is possible to run this application natively, we strongly recommend that you use Docker to abstract away the complications of Node version management and package installation.

### Prerequisites

- Docker Version 19.03 (or higher)

### Installing

The API requires a running ElasticSearch instance to which it can connect. We recommend using the [Official Docker ElasticSearch Image](https://hub.docker.com/_/elasticsearch).

1. Set the `ELASTICSEARCH_URL` to the full URL and port of your ElasticSearch instance.
2. Run the `./build-and-run-docker.sh` script present in the top level of this repository.

## Running the tests

The API currently has unit tests that can be run using `npm test`.

## Deployment

Deployment of the API is as simple as building and running the Docker image in your environment of choice.

## Built With

* [Docker](https://www.docker.com/) - Containerization Platform
* [Node](https://nodejs.org/en/) - JavaScript Runtime Environment
* [PM2](http://pm2.keymetrics.io/) - Node Process Manager

## Contributing

Please contribute to this repository using GitHub Pull Requests and GitHub Issues.

## Authors

The Developers of ITS CodeHub.

## License

This project is licensed under the Apache 2.0 License.

## Code.gov Registration Info

Agency: DOT
Short Description: The backend API for the ITS CodeHub repository-sharing website.
Status: Beta
Tags: transportation, connected vehicles, intelligent transportation systems, javascript, api
Labor Hours: 0
Contact Name: Brian Brotsos
Contact Phone:
