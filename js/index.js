document.addEventListener("DOMContentLoaded", () => {
    fetch('../JSON/experience.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const experienceContainer = document.getElementById("experience");

            data.workExperience.forEach(job => {
                // Create a container for each job
                const jobDiv = document.createElement("div");
                jobDiv.classList.add("work");

                // Create and populate elements
                const position = document.createElement("p");
                position.id = "position";
                position.textContent = job.position;

                const status = document.createElement("p");
                status.id = "status";
                status.textContent = job.status;

                const company = document.createElement("p");
                company.id = "company";
                company.textContent = job.company;

                const location = document.createElement("p");
                location.id = "location";
                location.textContent = job.location;

                const date = document.createElement("p");
                date.id = "date";
                date.textContent = job.date;

                // Append elements to the job container
                jobDiv.appendChild(position);
                jobDiv.appendChild(status);
                jobDiv.appendChild(company);
                jobDiv.appendChild(location);
                jobDiv.appendChild(date);

                // Append a horizontal line
                const hr = document.createElement("hr");

                // Add the job container and HR line to the experience container
                experienceContainer.appendChild(jobDiv);
                experienceContainer.appendChild(hr);
            });
        })
        .catch(error => console.error("Error fetching the data: ", error));
});

/* Coloring the status is screwing up needs fixing when json entries*/
document.addEventListener("DOMContentLoaded", () => {
    const enrollmentStatus = document.querySelector("#status");
    if (enrollmentStatus.innerHTML.trim() === "Full-time") {
        enrollmentStatus.style.backgroundColor = "Green";
    } else if (enrollmentStatus.innerHTML.trim() === "Part-time") {
        enrollmentStatus.style.backgroundColor = "yellow";
        enrollmentStatus.style.color = "black";
    } else if (enrollmentStatus.innerHTML.trim() === "ENDED") {
        enrollmentStatus.style.backgroundColor = "red";
    }
});





const darkLightMode = document.getElementById("toggle");
const bodyEl = document.querySelector("body");

toggle.addEventListener("click", function toggler() {
    if (bodyEl.style.background === "white") {
        bodyEl.style.background = "#070a13";
        bodyEl.style.color = "white"
    } else {
        bodyEl.style.background = "white";
        bodyEl.style.color ="black"
    }
}); 
