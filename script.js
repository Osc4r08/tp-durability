const boutonTheme = document.querySelector("#bouton-theme");
console.log(boutonTheme);

boutonTheme.addEventListener("click", function() {
    if (document.body.classList.contains("sombre")) {
        document.body.classList.remove("sombre");
        boutonTheme.textContent = "Mode sombre";
    } else {
        document.body.classList.add("sombre");
        boutonTheme.textContent = "Mode clair";
    }
});

const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");

curseur.addEventListener("input", function() {
    const taille = curseur.value;
    document.body.style.fontSize = curseur.value + "%";
    valeurTaille.textContent = curseur.value + "%";
});