function toggleAudio() {
    var video = document.getElementById("veoVideo");
    var btn = document.querySelector(".audio-control-btn");

    if (!video || !btn) {
        return;
    }

    if (video.muted) {
        video.muted = false;
        btn.innerHTML = "🔇 Couper le son";
    } else {
        video.muted = true;
        btn.innerHTML = "🔊 Activer le son";
    }
}

// Chargement et injection asynchrone des composants Header / Footer
fetch('/header.html')
    .then(r => r.text())
    .then(data => {
        var header = document.getElementById('header');
        if (header) {
            header.innerHTML = data;
        }
    })
    .catch(() => {});

fetch('/en/footer.html')
    .then(r => r.text())
    .then(data => {
        var footer = document.getElementById('footer');
        if (footer) {
            footer.innerHTML = data;
        }
    })
    .catch(() => {});

// Gestion de l'automatisation des structures d'images pour le zoom et le flux
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.container div[style*="text-align:center"] img:not([src*="ACCUEIL"])');

    images.forEach(img => {
        if (img.closest('.img-flux-wrapper')) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'img-flux-wrapper';

        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);

        img.addEventListener('click', (e) => {
            e.stopPropagation();

            if (wrapper.classList.contains('active')) {
                wrapper.classList.remove('active');
            } else {
                document.querySelectorAll('.img-flux-wrapper.active').forEach(w => {
                    w.classList.remove('active');
                });

                wrapper.classList.add('active');
            }
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.img-flux-wrapper.active').forEach(wrapper => {
            wrapper.classList.remove('active');
        });
    });
});
// =========================================================
// LETTRINES AUTOMATIQUES — AGIBIOSPHERIC.NET
// 
// Syntaxe pour Michel : écrire [X]suite du texte
// où X est n'importe quelle lettre de l'alphabet (A-Z, a-z, 
// incluant les lettres accentuées : À, É, È, Ê, Ç, etc.)
// 
// Exemple : [L]a Bibliothèque → le L devient une lettrine
//           [E]lle est un référentiel → le E devient une lettrine
//
// Fonctionne dans les balises : p, h2, h3, h4, h5, h6
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les éléments susceptibles de contenir une lettrine
    const elements = document.querySelectorAll('.container p, .container h2, .container h3, .container h4, .container h5, .container h6');

    elements.forEach(el => {
        // Regex qui détecte [X] en début de contenu texte de l'élément
        // Supporte toutes les lettres : A-Z, a-z et les accentuées (À-ÖØ-öø-ÿ)
        const regex = /^\s*\[([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF])\]/;

        // On travaille sur le textContent pour la détection
        const match = el.textContent.match(regex);

        if (match) {
            const lettre = match[1];

            // On remplace dans le innerHTML le pattern [X] par le span lettrine
            // Utilisation d'une regex sur innerHTML qui gère les éventuelles balises
            // entre le crochet et la lettre (ex: <em>, <strong>, etc.)
            const htmlRegex = /^\s*\[([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF])\]/;
            const newHTML = el.innerHTML.replace(htmlRegex, `<span class="lettrine">${lettre}</span>`);

            if (newHTML !== el.innerHTML) {
                el.innerHTML = newHTML;
            }
        }
    });
});
