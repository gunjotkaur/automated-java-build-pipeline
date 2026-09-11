const JENKINS_URL = "http://localhost:8080";
const JOB_NAME = "Automated-Java-Build_Pipeline";

async function updateBuildInfo() {

    try {

        const response = await fetch(
            `${JENKINS_URL}/job/${JOB_NAME}/lastBuild/api/json`
        );

        if (!response.ok) {
            throw new Error("Unable to connect to Jenkins");
        }

        const data = await response.json();

        const buildNumber = `#${data.number}`;

        // Update Latest Build in status card
        document.getElementById("buildNumber").textContent = buildNumber;

        // Update Latest Build in build information
        document.getElementById("latestBuild").textContent = buildNumber;

        console.log("Latest Jenkins Build:", buildNumber);

    } catch (error) {

        console.error("Jenkins connection error:", error);

    }
}


// Run when dashboard opens
updateBuildInfo();


// Check Jenkins every 10 seconds
setInterval(updateBuildInfo, 10000);