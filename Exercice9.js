// Fonction pour modifier le texte de toutes les divs ayant name="lesdivs"
function modifierToutesLesDivs() {
    // Sélectionner toutes les divs avec l'attribut name="lesdivs"
    let lesDivs = document.querySelectorAll('div[name="lesdivs"]');

    // Parcourir toutes les divs et modifier leur contenu
    lesDivs.forEach(div => {
        div.textContent = "hello";
    });
}

// Appeler la fonction pour effectuer la modification
modifierToutesLesDivs();

