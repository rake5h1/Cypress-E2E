pipeline {
   agent any

   tools {nodejs "NodeJS"}

   stages {
       stage('Checkout SCM') {
           steps {
               script {
                   // Replace 'sh' with 'bat' for Windows
                   bat 'git.exe rev-parse --resolve-git-dir .git'
                   bat 'git.exe config remote.origin.url https://github.com/rake5h1/Cypress-E2E'
                   bat 'git.exe fetch --tags --force --progress -- https://github.com/rake5h1/Cypress-E2E +refs/heads/*:refs/remotes/origin/*'
                   bat 'git.exe checkout -f main'
               }
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
