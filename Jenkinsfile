pipeline {
    agent {
        docker {
            image 'node:12.7.0-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 

            sh 'echo build'
            steps {
                sh 'npm install' 
                sh 'cd ..'
                sh 'ls'
            }
        }
        stage('Deploy'){
            steps {
            
                sh 'echo Deploy'  
            }
        }
    }
}