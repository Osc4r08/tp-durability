const boutonTheme = document.querySelector("#bouton-theme");
console.log(boutonTheme);
boutonTheme.addEventListener("click", function() {
  document.body.classList.toggle("sombre");
});