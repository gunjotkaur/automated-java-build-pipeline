pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Downloading the latest code from GitHub
            }
        }

        stage('Build') {
            steps {
                bat 'mvn clean compile' // Removes previous build files and compiles the project
            }
        }

        stage('Test') {
            steps {
                bat 'mvn test' // Runs all test cases. If any test fails, the pipeline stops.
            }
        }

        stage('Package') {
            steps {
                bat 'mvn package' // Creates the distributable JAR file after successful build and testing.
            }
        }
    }
}