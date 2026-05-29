const btn = document.getElementById("darkmodeButton");

function setDarkMode(isDark) {
    document.body.classList.toggle("dark", isDark);
    btn.innerHTML = isDark ? "&#9728;" : "&#127769;";
}

// Lees vorige keuze uit browser-opslag
const savedTheme = localStorage.getItem("theme");

// Check of browser van gebruiker standaard op dark mode staat
const browserPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (btn) {
    if (savedTheme == "dark") {
        setDarkMode(true);
    } else if (savedTheme == "light") {
        setDarkMode(false);
    } else {
        setDarkMode(browserPrefersDark);
    }

    btn.addEventListener("click", function () {
        const isDarkNow = document.body.classList.contains("dark");
        setDarkMode(!isDarkNow);
        localStorage.setItem("theme", !isDarkNow ? "dark" : "light");
    });
}
