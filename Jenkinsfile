pipeline {
   agent {
      label 'linux'
   }

   tools {nodejs "NodeJS"}

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm install'
           }
       }
       stage('e2e Tests') {
           steps {
               script {
                   stage('Test 1') {
                       steps {
                           sh 'npm run test'
                       }
                   }
               }
           }
       }
   }
}
