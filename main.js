const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Function to open hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Function to close hamburger menu
document.querySelectorAll(".nav-link").forEach(n = n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))
