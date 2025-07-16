const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;
const media = document.media;

function setTheme(isDark) {
    if (isDark) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeIcon.src = "images/dark-mod.svg";
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeIcon.src = "images/light-mod.svg";
        localStorage.setItem("theme", "light");
    }
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");

themeBtn.addEventListener("click", () => {
    const isCurrentlyDark = body.classList.contains("dark-mode");
    setTheme(!isCurrentlyDark);
});


document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    var navLinks = document.getElementById('myLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});


const upBtn = document.getElementById('btn-up');
const downBtn = document.getElementById('btn-down');

document.addEventListener('DOMContentLoaded', () => {
    const upBtn = document.getElementById('btn-up');
    const downBtn = document.getElementById('btn-down');

    upBtn.addEventListener('click', () => {
        document.getElementById('menu-home')
            .scrollIntoView({ behavior: 'smooth' });
    });

    downBtn.addEventListener('click', () => {
        document.getElementById('menu-down')
            .scrollIntoView({ behavior: 'smooth' });
    });
});

