const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

window.onload = function() {
    let orderButton = document.getElementById("order-button");
}
function updateCollectedItems() {
    if(sessionStorage.getItem("orderButton") !== null){
        console.log("true")
        cup.classList.replace("basketheader", "basketheader-item");
    }
}
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

// Order function to change basket picture to 1 item
orderButton.addEventListener("click", () => {
            saveToSessionStorage("orderButton", true);
            console.log("test")
            updateCollectedItems();
         });

//Function to save our keys and values to the sessionStorage.
function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}