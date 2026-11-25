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

const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");

if (heure >= 5 && heure < 12) {
    salutation.textContent = "Bonjour !";
} else if (heure >= 12 && heure < 18) {
    salutation.textContent = "Bon après-midi !";
} else {
    salutation.textContent = "Bonsoir !";
}


const resultat = document.querySelector("#resultat");

 document.querySelector("#bouton-calculer").addEventListener("click", function() {
    const nb_page = Number(document.querySelector("#nombre-pages").value);
    const pd_page = Number(document.querySelector("#poids-page").value);

    const calcul = Math.round(nb_page * pd_page * 365.25);

    resultat.textContent = "Le poids total du document est d'environ : " + calcul + " Mo par année";
});