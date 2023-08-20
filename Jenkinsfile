pipeline {
  agent any
  stages {
    stage("run frontend") {
      steps {
        echo 'executing yarn...'
        nodejs('Node-16') {
          sh 'yarn install'
        }
      }  
    }
  }
}
