const toggleBtn = document.querySelector(".toggle-btn");
const dropdown = document.querySelector(".dropdown-menu")
toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle('top-16')
})