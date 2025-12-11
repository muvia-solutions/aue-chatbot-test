(function() {
    // --- TON CODE ---
    
    // 1. Ajouter le script Botpress
    const botpressScript = document.createElement('script');
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    botpressScript.async = true; // Important pour ne pas bloquer le site du client
    document.head.appendChild(botpressScript);

    // 2. Ajouter le style (Ton style personnalisé)
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
    const webchatDiv = document.createElement('div');
    webchatDiv.id = 'webchat';
    // Attention : J'ai mis ces styles ici, mais tu pourras les modifier à distance !
    webchatDiv.style.width = '500px'; 
    webchatDiv.style.height = '500px';
    webchatDiv.style.position = 'fixed'; // Pour le fixer à l'écran si besoin
    webchatDiv.style.bottom = '20px';
    webchatDiv.style.right = '20px';
    webchatDiv.style.zIndex = '9999'; // Pour passer au dessus du site
    document.body.appendChild(webchatDiv);

    // 4. Initialiser Botpress
    botpressScript.onload = () => {
        window.botpress.on("webchat:ready", () => {
            window.botpress.open();
        });

        window.botpress.init({
            botId: "46410ae8-5483-4f3d-a1f2-5a27a4d77b7b",
            clientId: "c0d815c2-ddf9-42b6-8bbe-4a767724f20c",
            selector: "#webchat",
            configuration: {
                version: "v2",
                composerPlaceholder: "Posez votre question...",
                botName: "AUE Corsica",
                botAvatar: "https://files.bpcontent.cloud/2025/12/02/16/20251202162524-1N7JDPS9.jpeg",
                botDescription: "L'assistant de l'AUE Corsica.",
                website: { title: "https://www.aue.corsica/", link: "https://www.aue.corsica/" },
                email: { title: "aue@isula.corsica", link: "aue@isula.corsica" },
                phone: { title: "04 95 10 98 64", link: "04 95 10 98 64" },
                color: "#87a128",
                variant: "solid",
                themeMode: "light",
                fontFamily: "AR One Sans",
                radius: 1.1,
                feedbackEnabled: false,
                footer: "[Développé par MUVIA. 🚀](https://muvia-solutions.fr/)",
                soundEnabled: true,
                proactiveMessageEnabled: true,
                proactiveBubbleMessage: "Besoin d'aide ?👋"
                // ... le reste de ta config
            }
        });
    };
})();
