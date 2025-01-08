const url = "http://192.168.65.219/data.json";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.body.innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error("Erreur lors du fetch :", error);
    document.body.innerText = "Erreur lors du chargement des données.";
  });
const balle = document.querySelector('.balle');
const scoreDiv = document.querySelector('.score');
let score = 0;

// Taille de la fenêtre
const maxWidth = window.innerWidth - 50; // Ball width
const maxHeight = window.innerHeight - 50; // Ball height

// Fonction pour déplacer la balle à une position aléatoire
function deplaceBalle() {
  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;
  balle.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Quand l'utilisateur clique sur la balle
balle.addEventListener('click', () => {
  score++;
  scoreDiv.textContent = `Score : ${score}`;
  deplaceBalle();
});

// Déplacement initial
deplaceBalle();

// Déplacer la balle toutes les 2 secondes
setInterval(deplaceBalle, 2000);