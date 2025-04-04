document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-down");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 500); // Ajoute un délai entre chaque élément
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slideElements = document.querySelectorAll(".slide-in");
  
    const handleScroll = () => {
      slideElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // pour vérifier au chargement
  });

  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px'; // Masquer le panneau
        overlay.style.display = 'none'; // Masquer l'overlay
    } else {
        sidebar.style.right = '0px'; // Afficher le panneau
        overlay.style.display = 'block'; // Afficher l'overlay
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Votre code de fade-down et slide-in ici...

    // Fonction pour afficher/masquer le menu latéral
    const toggleMenu = () => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        if (sidebar.style.right === '0px') {
            sidebar.style.right = '-250px'; // Masquer le panneau
            overlay.style.display = 'none'; // Masquer l'overlay
        } else {
            sidebar.style.right = '0px'; // Afficher le panneau
            overlay.style.display = 'block'; // Afficher l'overlay
        }
    };

    // Lier la fonction au clic sur le menu hamburger
    document.querySelector('.hamburger-menu').onclick = toggleMenu;
});

document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-now");
    const popup = document.querySelector(".popup");
    const overlay = document.querySelector(".popup-overlay");
    const closePopup = document.querySelector(".close-popup");

    // Éléments du popup
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupPrice = document.getElementById("popup-price");

    orderButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const imgSrc = product.querySelector("img").src;
            const title = product.querySelector("h3").textContent;
            const price = product.querySelector("span").textContent;

            // Mettre à jour le popup
            popupImg.src = imgSrc;
            popupTitle.textContent = title;
            popupPrice.textContent = price;

            // Afficher le popup
            popup.classList.add("active");
            overlay.classList.add("active");
        });
    });

    // Fermer le popup
    closePopup.addEventListener("click", function () {
        popup.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        popup.classList.remove("active");
        overlay.classList.remove("active");
    });
});
