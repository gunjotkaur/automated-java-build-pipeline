# Automated Java Build Pipeline

An Automated Java CI/CD Pipeline built using **Jenkins**, **GitHub**, **Maven**, and **JUnit** to automate the software build lifecycle. The pipeline is configured to automatically fetch source code from GitHub, compile the project, execute test cases, and package the application after every successful build.

This project demonstrates the practical implementation of Continuous Integration (CI) concepts and DevOps automation using Jenkins Pipeline.

---

## Features

- Automated source code checkout from GitHub
- Continuous Integration using Jenkins Pipeline
- Java project compilation with Maven
- Automated JUnit test execution
- Maven package generation
- GitHub integration
- Webhook triggering using ngrok for local Jenkins

---

## Tech Stack

- Java
- Jenkins
- GitHub
- Maven
- JUnit
- Git
- ngrok

---

## Pipeline Workflow

1. Developer pushes code to GitHub.
2. GitHub Webhook triggers Jenkins.
3. Jenkins checks out the latest source code.
4. Maven compiles the Java project.
5. JUnit test cases are executed.
6. Maven packages the application.
7. Build status is displayed on the Jenkins dashboard.

---

## Project Structure

```
src/
├── main/
├── test/
Jenkinsfile
pom.xml
README.md
```

---

## Jenkins Pipeline Stages

- Checkout
- Build
- Test
- Package

---

## Learning Outcomes

Through this project, we gained hands-on experience with:

- Continuous Integration (CI)
- Jenkins Pipeline
- Maven Build Automation
- GitHub Integration
- GitHub Webhooks
- ngrok Tunneling
- Version Control using Git
- Automated Software Build Process

---

## Contributors

- Gunjot Kaur
- Ishtpreet Kaur

---
## Webhook Test

GitHub webhook integration tested successfully.