//Demande a l'utilisateur d'écrire un nombre
let N = parseInt(prompt("Veuillez saisir un nombre:"));

let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}
alert("Le résultat du calcul est: " + sum);
