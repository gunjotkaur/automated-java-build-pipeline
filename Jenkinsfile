pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm //downloading the latest code from github
            }
        }

        stage('Build') {
            steps {
                bat 'mvn clean compile' //removing the older things and building newly to avoid confusions
            }
        }

        stage('Test') {
            steps {
                bat 'mvn test' //to test the code, if it fails then pipeline stops, else it continues
            }
        }

        stage('Package') {
            steps {
                bat 'mvn package' //After compilation and testing,

the application is bundled into a distributable file. maven usually use .jar extension file
            }
        }
    }
}