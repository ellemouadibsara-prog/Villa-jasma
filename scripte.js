
console.log("Le site Villa Serena fonctionne !");

// =========================
// DONNÉES DES ESPACES
// =========================

// Chambre
const espacesImages = {
    chambre: [
        "img/6455aac8-6920-47cc-ab42-c5f237dfb2a8.jpg",
        "img/feb2ce62-d9b4-4685-8f8c-3428c88cacdd.jpg"
    ]
};

const espacesNoms = {
    chambre: "Chambre"
};


// Salon
const espacesImages1 = {
    salon: [
        "img/95db0414-fab3-4478-9ff0-03df1810d2f8.jpg",
        "img/130000e7-601a-44db-865f-ab760ce9ad87.jpg"
    ]
};

const espacesNoms1 = {
    salon: "Le salon"
};


// Coin salon
const espacesImages2 = {
    "coin salon": [
        "img/80d84010-4761-4ece-9697-ea259375bb4e.jpg",
        "img/82a1d6f3-4c87-483f-b87f-271c256cd6db.jpg"
    ]
};

const espacesNoms2 = {
    "coin salon": "Le coin salon"
};


// =========================
// LOGIQUE DE LA GALERIE
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCounter = document.getElementById("lightboxCounter");

const btnClose = document.getElementById("lightboxClose");
const btnPrev = document.getElementById("lightboxPrev");
const btnNext = document.getElementById("lightboxNext");

let currentEspace = null;
let currentIndex = 0;


// =========================
// OUVRIR LA GALERIE
// =========================

function openGallery(espace) {
    currentEspace = espace;
    currentIndex = 0;

    updateLightboxImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =========================
// AFFICHER L'IMAGE
// =========================

function updateLightboxImage() {

    let images;
    let nom;

    if (currentEspace === "chambre") {
        images = espacesImages.chambre;
        nom = espacesNoms.chambre;
    }

    if (currentEspace === "salon") {
        images = espacesImages1.salon;
        nom = espacesNoms1.salon;
    }

    if (currentEspace === "coin salon") {
        images = espacesImages2["coin salon"];
        nom = espacesNoms2["coin salon"];
    }

    lightboxImage.src = images[currentIndex];
    lightboxImage.alt = nom;
    lightboxTitle.textContent = nom;

    lightboxCounter.textContent =
        (currentIndex + 1) + " / " + images.length;
}


// =========================
// IMAGE SUIVANTE
// =========================

function showNext() {

    let images;

    if (currentEspace === "chambre") {
        images = espacesImages.chambre;
    }

    if (currentEspace === "salon") {
        images = espacesImages1.salon;
    }

    if (currentEspace === "coin salon") {
        images = espacesImages2["coin salon"];
    }

    currentIndex =
        (currentIndex + 1) % images.length;

    updateLightboxImage();
}


// =========================
// IMAGE PRÉCÉDENTE
// =========================

function showPrev() {

    let images;

    if (currentEspace === "chambre") {
        images = espacesImages.chambre;
    }

    if (currentEspace === "salon") {
        images = espacesImages1.salon;
    }

    if (currentEspace === "coin salon") {
        images = espacesImages2["coin salon"];
    }

    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    updateLightboxImage();
}


// =========================
// FERMER LA GALERIE
// =========================

function closeGallery() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";
}


// =========================
// CLIQUER SUR LES CARDS
// =========================

document.querySelectorAll(".espace-card").forEach(card => {

    card.addEventListener("click", () => {

        const espace = card.getAttribute("data-espace");

        openGallery(espace);

    });

});


// =========================
// BOUTONS
// =========================

btnClose.addEventListener("click", closeGallery);
btnNext.addEventListener("click", showNext);
btnPrev.addEventListener("click", showPrev);


// =========================
// CLIQUER À L'EXTÉRIEUR
// =========================

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        closeGallery();
    }

});


// =========================
// CLAVIER
// =========================

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (e.key === "Escape") {
        closeGallery();
    }

    if (e.key === "ArrowRight") {
        showNext();
    }

    if (e.key === "ArrowLeft") {
        showPrev();
    }

});
