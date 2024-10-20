/*
Bouton theme
Source : https://lukelowrey.com/css-variable-theme-switcher
*/

/* Chercher la valeur que l'on a stocker dans "theme" ou le theme de l'appareil puis attribue la valeur à la variable "themeStocker" */
var themeStocker =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

/*
Si il y a une valeur dans la variable "themeStocker",
    Attribuer la valeur à l'attribue "data-theme" de la balise html
*/
if (themeStocker) {
  document.documentElement.setAttribute("data-theme", themeStocker);
  console.log("Thème: " + themeStocker);
}

/*
Si "bouton-theme" est cliquer,
    Attribuer la valeur de l'attribue "data-theme" de la balise html à la variable "themeActuel"
    Attribuer la valeur "light" à la variable "themeCible"

    Si la valeur la variable "themeActuel" est égal à "light",
        Attribuer la valeur "dark" à la variable "themeCible"

    Attribuer la valeur de la variable "themeCible" à l'attribue "data-theme" de la balise html
    Stocker la valeur de la variable "themeCible" dans "theme"
*/
document.getElementById("bouton-theme").onclick = function () {
  var themeActuel = document.documentElement.getAttribute("data-theme");
  var themeCible = "light";

  if (themeActuel === "light") {
    themeCible = "dark";
  }

  document.documentElement.setAttribute("data-theme", themeCible);
  localStorage.setItem("theme", themeCible);
  console.log("Thème: " + themeCible);
};

/* Bouton couleurs */

/* Chercher la valeur que l'on a stocker dans "couleurs-actuel" puis attribue la valeur à la variable "couleursStocker" */
var couleursStocker = localStorage.getItem("couleurs-actuel");

/*
Si il y a une valeur dans la variable "couleursStocker",
    Exécuter la fonction "couleurs()"
*/
if (couleursStocker) {
  couleurs();
}

/*
Si il y a une valeur dans la variable "couleursStocker" et égal à l'une des couleurs,
    Remplacer le css dans le div "div-couleurs" avec la couleur selectionner
*/
function couleurs() {
  if (couleursStocker == "orange") {
    document.getElementById("div-couleurs").innerHTML =
      '<link rel="stylesheet" href="../css/couleurs/orange_light.css">' +
      '<link rel="stylesheet" href="../css/couleurs/orange_dark.css">';
    localStorage.setItem("couleurs-stocker", "cyan");
    localStorage.setItem("couleurs-actuel", "orange");
  } else if (couleursStocker == "cyan") {
    document.getElementById("div-couleurs").innerHTML =
      '<link rel="stylesheet" href="../css/couleurs/cyan_light.css">' +
      '<link rel="stylesheet" href="../css/couleurs/cyan_dark.css">';
    localStorage.setItem("couleurs-stocker", "green");
    localStorage.setItem("couleurs-actuel", "cyan");
  } else if (couleursStocker == "green") {
    document.getElementById("div-couleurs").innerHTML =
      '<link rel="stylesheet" href="../css/couleurs/green_light.css">' +
      '<link rel="stylesheet" href="../css/couleurs/green_dark.css">';
    localStorage.setItem("couleurs-stocker", "indigo");
    localStorage.setItem("couleurs-actuel", "green");
  } else if (couleursStocker == "indigo") {
    document.getElementById("div-couleurs").innerHTML =
      '<link rel="stylesheet" href="../css/couleurs/indigo_light.css">' +
      '<link rel="stylesheet" href="../css/couleurs/indigo_dark.css">';
    localStorage.setItem("couleurs-stocker", "orange");
    localStorage.setItem("couleurs-actuel", "indigo");
  }

  couleursStocker = localStorage.getItem("couleurs-stocker");

  console.log("Couleurs: " + localStorage.getItem("couleurs-actuel"));
}

/* Bouton langue */

/*
Si le nom du chemin est égal à "/en/projects.html" ou à "/fr/projets.html"
    Afficher "../fr/projets.html"
Sinon
    Afficher "../fr/accueil.html"
*/
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

/*
Si le nom du chemin est égal à "/fr/projets.html"" ou à "/en/projects.html
    Afficher "../en/projects.html"
Sinon
    Afficher "../en/home.html"
*/
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
