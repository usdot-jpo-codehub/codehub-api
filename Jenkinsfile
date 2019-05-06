node {
    environment {
      DOCKER_LOGIN='(aws ecr get-login --no-include-email --region us-east-1)'
      dockerImage = ''
    }
     stage('Git Checkout') {
          deleteDir()
          dir ('App'){
              git(
                branch: 'development',
                url: 'https://github.com/usdot-jpo-codehub/codehub-api.git'
            )
          }

        }

    stage('Unit Test') {
        nodejs('node') {
            dir ('App'){
              script {
                sh 'npm install'
                sh 'node node_modules/.bin/mocha'
                sh 'echo Unit Testing is Complete!!'
            }
          }
  }
  }

      stage('Static Code Analysis'){
        dir ('App'){

        script {
            def scannerHome = tool 'SonarQube Scanner 2.8';
            withSonarQubeEnv('SonarQube') {
                    sh 'cat /var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarQube_Scanner_2.8/conf/sonar-scanner.properties'
                    sh "${scannerHome}/bin/sonar-scanner -X  -Dsonar.projectName=codehub-api -Dsonar.projectVersion=1.0.0 -Dsonar.projectKey=codehub-api -Dsonar.sources=common,ops,server,test"
                }
            }
        }
      }

    stage('Integration Test') {
      dir ('App'){
          script {

              sh 'docker-compose up -d'
              sh 'docker-compose logs --tail="all"'
              sh 'docker-compose down'
              sh 'echo Integration Test is complete'
          }
      }
    }

      stage('Build Codehub-UI Image') {
      dir ('App'){
          script {
            withAWS(region:'us-east-1') {
              sh 'eval $(aws ecr get-login --no-include-email) > login'
              dockerImage=docker.build("797335914619.dkr.ecr.us-east-1.amazonaws.com/dev-codehub/codehub-api" + ":latest")
          }
            sh 'echo "Completing image build"'
          }
      }
}

      stage('Publish Codehub-API Image') {
      dir ('App'){
          script {
            withAWS(region:'us-east-1') {
              sh 'eval $(aws ecr get-login --no-include-email) > login'
              dockerImage.push()
          }
            sh 'echo "Completing image build"'
          }
      }
}
      stage('Register TaskDefinition Updates') {
      dir ('App'){
          script {
              sh 'aws ecs register-task-definition --cli-input-json file://codehub-api-taskDefinition.json --region us-east-1'
              sh 'echo Service is Updated'
          }
      }
      }
      stage('Deploy Service') {
      dir ('App'){
      nodejs('node') {
            script {
            sh './process_deployment.sh'
          }
        }
}
}

}
