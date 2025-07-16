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

const btn = document.getElementById('boom');
let clicks = 0;
const MAX_CLICKS = 2;

const pieces = ['images/boom.jpg', 'images/boom.jpg', 'images/boom.jpg'];
const STICK_COUNT = 8;

btn.addEventListener('click', () => {
    clicks++;
    if (clicks === MAX_CLICKS) {
        explode();
        clicks = 0;
    }
});

function explode() {
    pieces.forEach((src, i) => makeShard(src, i === 0 ? -30 : 30));
    for (let i = 0; i < STICK_COUNT; i++) {
        makeStick(Math.random() * 360);
    }
}

function makeShard(src, angleDeg) {
    const img = document.createElement('img');
    img.src = src;

    img.className = 'shard';
    const rad = angleDeg * Math.PI / 180;
    const dist = 100;
    const signX = Math.random() < 0.5 ? 1 : -1;
    const signY = Math.random() < 0.5 ? 1 : -1;

    const x = Math.cos(rad) * dist * signX;
    const y = Math.sin(rad) * dist * signY;
    img.style.setProperty('--tx', x + 'px');
    img.style.setProperty('--ty', y + 'px');

    btn.appendChild(img);
    img.addEventListener('animationend', () => img.remove());

    img.src = src;
    img.className = 'shard';
    img.style.width = '200px';
    img.style.height = '100px';
}

function makeStick(angleDeg) {
    const div = document.createElement('div');
    div.className = 'stick';
    div.style.setProperty('--angle', angleDeg + 'deg');
    btn.appendChild(div);
    div.addEventListener('animationend', () => div.remove());
}