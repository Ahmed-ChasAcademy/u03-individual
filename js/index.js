const darkLightMode = document.getElementById("toggle");
const bodyEl = document.querySelector("body");






















l








toggle.addEventListener("click", function toggler() {
    if (bodyEl.style.background === "white") {
        bodyEl.style.background = "#070a13";
        bodyEl.style.color = "white"
    } else {
        bodyEl.style.background = "white";
        bodyEl.style.color ="black"
    }
});
