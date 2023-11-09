pipeline {
   agent any

   tools {nodejs "NodeJS"}

   stages {
       stage('Checkout SCM') {
    steps {
        // Use the 'checkout' step for Git operations
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/rake5h1/Cypress-E2E']]])
        }
}
       stage('Dependencies') {
           steps {
               // Replace 'sh' with 'bat' for Windows
               bat 'npm install'
           }
       }

       stage('e2e Tests') {
           steps {
               script {
                   stage('Test 1') {
                       steps {
                           // Replace 'sh' with 'bat' for Windows
                           bat 'npm run test'
                       }
                   }
               }
           }
       }
   }
}
