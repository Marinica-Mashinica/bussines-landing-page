//Selectors:
const themeToggleBtn = document.querySelector(".theme-toggle");
//State:
const theme = localStorage.getItem("theme");
//on mount:
theme && document.body.classList.add("theme");
//Handlers:
const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.removeItem("theme");
    }
};

themeToggleBtn.addEventListener("click", handleThemeToggle);
