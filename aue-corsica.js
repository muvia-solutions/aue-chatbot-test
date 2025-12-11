(function() {
    // Fonction principale qui lance tout
    function initBotpress() {
        console.log("🚀 Lancement du script Botpress MUVIA...");

        // --- 🔒 SÉCURITÉ : ALLOW ORIGIN ---
        const currentDomain = window.location.hostname;
        const allowedDomains = ["www.aue.corsica", "aue.corsica"];

        // On affiche le domaine détecté pour le débug
        console.log("Domaine détecté :", currentDomain);

        // Vérification (Si le domaine n'est pas dans la liste, on arrête)
        if (!allowedDomains.includes(currentDomain)) {
            console.warn("⛔ MUVIA Chatbot : Licence non valide pour ce domaine (" + currentDomain + ").");
            // return; // <-- DÉCOMMENTE CETTE LIGNE UNE FOIS QUE TU ES SÛR QUE ÇA MARCHE
        } else {
            console.log("✅ Domaine autorisé.");
        }

        // 1. Ajouter le script Botpress
        const botpressScript = document.createElement('script');
        botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
        document.head.appendChild(botpressScript);

        // 2. Ajouter le style
        const style = document.createElement('style');
        style.textContent = `
          #webchat .bpWebchat {
            position: unset;
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
          }
          #webchat .bpFab {
            display: none;
          }
        `;
        document.head.appendChild(style);

        // 3. Créer le conteneur du webchat
        // On vérifie si le conteneur existe déjà pour éviter les doublons
        if (!document.getElementById('webchat') && document.body) {
            const webchatDiv = document.createElement('div');
            webchatDiv.id = 'webchat';
            webchatDiv.style.width = '500px';
            webchatDiv.style.height = '500px';
            document.body.appendChild(webchatDiv);
        }

        // 4. Initialiser Botpress
        botpressScript.onload = () => {
            console.log("✅ Script Botpress chargé, initialisation...");
            window.botpress.on("webchat:ready", () => {
                window.botpress.open();
            });

            window.botpress.init({
                botId: "46410ae8-5483-4f3d-a1f2-5a27a4d77b7b",
                configuration: {
                    version: "v2",
                    composerPlaceholder: "Posez votre question...",
                    botName: "AUE Corsica",
                    botAvatar: "https://files.bpcontent.cloud/2025/12/02/16/20251202162524-1N7JDPS9.jpeg",
                    botDescription: "L'assistant de l'AUE Corsica.",
                    website: { title: "https://www.aue.corsica/", link: "https://www.aue.corsica/" },
                    email: { title: "aue@isula.corsica", link: "aue@isula.corsica" },
                    phone: { title: "04 95 10 98 64", link: "04 95 10 98 64" },
                    termsOfService: {},
                    privacyPolicy: {},
                    color: "#87a128",
                    variant: "solid",
                    additionalStylesheetUrl: "https://files.bpcontent.cloud/2025/12/02/16/20251202162355-SADQ2Z77.css",
                    headerVariant: "solid",
                    themeMode: "light",
                    fontFamily: "AR One Sans",
                    radius: 1.1,
                    feedbackEnabled: false,
                    footer: "[Développé par MUVIA. 🚀](https://muvia-solutions.fr/)",
                    storageLocation: "sessionStorage",
                    soundEnabled: true,
                    proactiveMessageEnabled: true,
                    proactiveBubbleMessage: "Besoin d'aide ?👋",
                    proactiveBubbleTriggerType: "afterDelay",
                    proactiveBubbleDelayTime: 1
                },
                clientId: "c0d815c2-ddf9-42b6-8bbe-4a767724f20c",
                selector: "#webchat"
            });
        };
    }

    // --- CORRECTION DU TIMING ---
    // Si la page est déjà chargée ("complete" ou "interactive"), on lance tout de suite.
    if (document.readyState === "complete" || document.readyState === "interactive") {
        initBotpress();
    } else {
        // Sinon, on attend que la page soit prête
        document.addEventListener("DOMContentLoaded", initBotpress);
    }
})();
