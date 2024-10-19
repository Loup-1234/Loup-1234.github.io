function fr() {
  if (
    window.location.pathname == "/en/projects.html" ||
    window.location.pathname == "/fr/projets.html"
  ) {
    window.location.href = "../fr/projets.html";
  } else {
    window.location.href = "../fr/accueil.html";
  }
}

function en() {
  if (
    window.location.pathname == "/fr/projets.html" ||
    window.location.pathname == "/en/projects.html"
  ) {
    window.location.href = "../en/projects.html";
  } else {
    window.location.href = "../en/home.html";
  }
}

/* Source : https://lukelowrey.com/css-variable-theme-switcher */

var toggle = document.getElementById("theme-toggle");

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
