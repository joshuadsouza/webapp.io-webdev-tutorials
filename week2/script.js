let isPageColourWhite = true;
function changeColour() {
    const body = document.getElementById("document-body");
    const linkedin = document.getElementById("linkedin");
    const projects = document.getElementById("projects");
    const button = document.getElementById("button-mode");

    if (isPageColourWhite) {
        body.className = "BodyDark";
        linkedin.className = "LightText";
        projects.className = "LightText";
        button.innerText = "Change to Light Mode";
        isPageColourWhite = false;
    } else {
        body.className = "BodyLight";
        linkedin.className = "DarkText";
        projects.className = "DarkText";
        button.innerText = "Change to Dark Mode";
        isPageColourWhite = true;
    }
}