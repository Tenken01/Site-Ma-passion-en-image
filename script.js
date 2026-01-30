document.addEventListener("DOMContentLoaded",function() {
var tab= ["Dessin", "Jeu video", "Création de contenu"];
console.log(tab);
console.log(tab[0]+": Esquisse réalisée dans le cadre d'une animation ")
console.log(tab[1]+": Illustration reprenant le design d'une manette PS4 ")
console.log(tab[2]+": Logo du réseau social Twitch")
//Petit tableau inutile, juste pour se remettre dedans


// ZOOM

const toutesLesImages = document.querySelectorAll(".zoomable");
function agrandir(event) {
    event.target.style.transform = "scale(1.05)";
    event.target.style.transition = "transform 0.3s";
}

function retrecir(event) {
    event.target.style.transform = "scale(1)";
}

toutesLesImages.forEach(image => {
    image.addEventListener("mouseenter", agrandir);
    image.addEventListener("mouseleave", retrecir);
});


// POP-UP

const overlay = document.getElementById('overlay');
const imagePopup = document.getElementById('imagePopup');
const imagesZoomables = document.querySelectorAll('.zoomable');

// Fonction pour ouvrir la pop-up
imagesZoomables.forEach(image => {
    image.addEventListener("click", () => {
        imagePopup.src = image.src; // Copie la source de l'image (source : IA)
        overlay.style.display = "flex"; // Affiche le fond noir
    });
});

// Fonction pour fermer la pop-up
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});





// Je prends les éléments
const inputUrl = document.getElementById('inputUrl');
const inputText = document.getElementById('inputText');

// Je lui dis ce que je veux
const previewImg = document.getElementById('preview-img');
const previewText = document.getElementById('preview-text');

// Je lui dis comment "écouter" un lien
inputUrl.addEventListener('input', () => {
    previewImg.src = inputUrl.value;
    previewImg.style.display = "block";
});

// Je lui dis comment "écouter" un texte...
inputText.addEventListener('input', () => {
    previewText.textContent = inputText.value;
});




}
)