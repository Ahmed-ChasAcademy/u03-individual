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

    // For the WORK json file
    fetch('/JSON/work.json')
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

        });



    // For the WORK json file
