document.getElementById("servicesBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action
    var dropdown = document.getElementById("dropdown");
    // Toggle dropdown visibility
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('#servicesBtn') && !event.target.matches('#dropdown') && !event.target.matches('#dropdown a')) {
        var dropdown = document.getElementById("dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
};