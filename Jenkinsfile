pipeline {
   agent any

   tools {nodejs "NodeJS"}

   stages {
       stage('Dependencies') {
           steps {
               bat 'npm install'
           }
       }
       stage('e2e Tests') {
           steps {
               script {
                   stage('Test 1') {
                       steps {
                           bat 'npm run test'
                       }
                   }
               }
           }
       }
   }
}
