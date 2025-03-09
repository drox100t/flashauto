document.addEventListener("DOMContentLoaded", function () {
    console.log("Flash Auto - Site chargé avec succès !");

    /** ✨ Effet d'apparition progressive au scroll (sections `.reveal`) **/
    let elements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Vérifie au chargement

    /** 🎭 Animation de zoom au survol des boutons CTA **/
    let ctaButtons = document.querySelectorAll(".cta-buttons .btn");
    ctaButtons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    /** 🔝 Gestion du bouton "Retour en haut" **/
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /** ⭐ Slider des témoignages **/
    const avis = document.querySelectorAll(".avis");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;

    function showAvis(i) {
        avis.forEach(a => a.classList.remove("active"));
        avis[i].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
        index = (index === 0) ? avis.length - 1 : index - 1;
        showAvis(index);
    });

    nextBtn.addEventListener("click", () => {
        index = (index === avis.length - 1) ? 0 : index + 1;
        showAvis(index);
    });

    showAvis(index);
});
