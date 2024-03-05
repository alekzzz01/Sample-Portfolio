document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector(".nav");
    const closeIcon = document.getElementById("close-icon");
    const menuIcon = document.getElementById("menu-icon");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        } else {
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
    });
});





