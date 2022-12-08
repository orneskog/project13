const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const selected = document.querySelector('.selected');
const options = document.querySelector('.options');
const optionList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
    options.classList.toggle('active')
})

const selected2 = document.querySelector('.selected2');
const options2 = document.querySelector('.options2');
const optionList2 = document.querySelectorAll('.option2');

selected2.addEventListener('click', () => {
    options2.classList.toggle('active')
})

const selected3 = document.querySelector('.selected3')
const options3 = document.querySelector('.options3')
const optionList3 = document.querySelectorAll('.option3')

selected3.addEventListener('click', () => {
    options3.classList.toggle('active')
})

optionList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('span').innerText
         options.classList.remove("active")
    })
})

optionList2.forEach(option2 => {
    option2.addEventListener('click', () => {
        selected2.innerHTML = option2.querySelector('span').innerText
         options2.classList.remove("active")
    })
})

optionList3.forEach(option3 => {
    option3.addEventListener('click', () => {
        selected3.innerHTML = option3.querySelector('span').innerText
         options3.classList.remove("active")
    })
})

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
