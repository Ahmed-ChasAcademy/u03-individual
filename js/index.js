document.addEventListener("DOMContentLoaded", () => {
    // Apply colors to enrollment statuses
    const enrollmentStatus = document.querySelector("#status");
    if (enrollmentStatus) {
        const statusText = enrollmentStatus.textContent.trim();
        switch (statusText) {
            case "Full-time":
                enrollmentStatus.style.color = "green";
                break;
            case "Part-time": 
                enrollmentStatus.style.color = "orange";
                break;
            case "Ended":
                ;
                enrollmentStatus.style.color = "red";
                break;
        }
    }

    // Fetch and render work experience
    fetch('../JSON/work.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const experienceContainer = document.getElementById("experience");
            if (!experienceContainer) {
                console.error("Experience container not found.");
                return;
            }

            data.workExperience.forEach(job => {
                // Create container for each job
                const jobDiv = document.createElement("div");
                jobDiv.classList.add("work");

                // Add job details
                const createJobDetail = (id, text) => {
                    const element = document.createElement("p");
                    element.id = id;
                    element.textContent = text;
                    return element;
                };

                const position = createJobDetail("position", job.position);
                const status = createJobDetail("status", job.status);
                const company = createJobDetail("company", job.company);
                const location = createJobDetail("location", job.location);
                const date = createJobDetail("date", job.date);

                // Apply color to status dynamically
                switch (job.status.trim()) {
                    case "Full-time":
                        status.style.color = "green";
                        break;
                    case "Part-time":
                        
                        status.style.color = "orange";
                        break;
                    case "Ended":
                        
                        status.style.color = "red";
                        break;
                }

                // Append details to the job container
                [position, status, company, location, date].forEach(detail => jobDiv.appendChild(detail));

                // Add the job to the experience container
                experienceContainer.appendChild(jobDiv);
                experienceContainer.appendChild(document.createElement("hr"));
            });
        })
        .catch(error => console.error("Error fetching the data:", error));

    // Dark/Light mode toggle
    const insta = document.getElementById("instagram");
    const darkLightMode = document.getElementById("toggle");
    const bodyEl = document.querySelector("body");

    if (darkLightMode) {
        darkLightMode.addEventListener("click", () => {
            const currentBackground = window.getComputedStyle(bodyEl).backgroundColor;

            if (currentBackground === "rgb(255, 255, 255)") { // Light mode
                bodyEl.style.background = "#070a13";
                bodyEl.style.color = "white";
                if (insta) insta.src = "/images/icons/icons8-insta-48.png";
            } else { // Dark mode
                bodyEl.style.background = "white";
                bodyEl.style.color = "black";
                if (insta) insta.src = "/images/icons/github.svg";
            }
        });
    }
});
