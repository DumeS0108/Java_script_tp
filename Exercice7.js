// Fonction d'addition qui prend deux paramètres et retourne leur somme
function addition(a, b) {
    return a + b;
}

// Demander à l'utilisateur de saisir un nombre 
let N = parseInt(prompt("Veuillez saisir un nombre:"));

// Initialiser la somme
let sum = 0;

// Utiliser la fonction d'addition dans la boucle pour calculer la somme de 1 à N
for (let i = 1; i <= N; i++) {
    sum = addition(sum, i);
}

// Afficher le résultat dans une alerte
alert("Le résultat du calcul est: " + sum);
