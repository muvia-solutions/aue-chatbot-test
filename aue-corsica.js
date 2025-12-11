document.addEventListener("DOMContentLoaded", function() {

    // --- 🔒 SÉCURITÉ : ALLOW ORIGIN ---
    // On récupère le nom de domaine du site actuel (ex: www.aue.corsica)
    const currentDomain = window.location.hostname;
    
    // Le domaine autorisé (sans https:// ni / à la fin)
    const allowedDomain = "www.aue.corsica";

    // Si on n'est pas sur le bon site, on arrête tout immédiatement.
    // Note: J'ai ajouté 'aue.corsica' (sans www) au cas où, pour éviter les bugs si le client oublie le www.
    if (currentDomain !== allowedDomain && currentDomain !== "aue.corsica") {
        console.warn("⛔ MUVIA Chatbot : Licence non valide pour ce domaine (" + currentDomain + ").");
        return; // Stoppe l'exécution du script ici.
    }
    // ------------------------------------


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
    // Petite sécurité supplémentaire pour ne pas planter si le body n'est pas prêt
    if (document.body) {
        const webchatDiv = document.createElement('div');
        webchatDiv.id = 'webchat';
        webchatDiv.style.width = '500px';
        webchatDiv.style.height = '500px';
        document.body.appendChild(webchatDiv);
    }

    // 4. Initialiser Botpress après que le script soit chargé
    botpressScript.onload = () => {
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
                website: {
                    title: "https://www.aue.corsica/",
                    link: "https://www.aue.corsica/"
                },
                email: {
                    title: "aue@isula.corsica",
                    link: "aue@isula.corsica"
                },
                phone: {
                    title: "04 95 10 98 64",
                    link: "04 95 10 98 64"
                },
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
});
