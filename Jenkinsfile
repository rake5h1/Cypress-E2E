pipeline {
   agent any

   tools {nodejs "Node12"}


   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
         {
             stage('Test 1') {
                  steps {
                sh 'npm run test'
                  }
               }
             
             

       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}
}