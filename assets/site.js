const SITE = {
  contact: "support@jaxmaxdelta.com",
  baseUrl: "https://jaxmaxdelta.com",
  langs: ["en", "fr", "es"],
  posts: [
    "second-screen-dashboard",
    "different-from-telemetry-app",
    "league-race-weekend",
    "fanatec-wheel-tips"
  ]
};

const copy = {
  en: {
    meta: {
      title: "Jax Max Delta - Virtual Pit Wall Crew for Sim Racers",
      description: "Jax Max Delta turns your phone or tablet into race data, voice alerts, session memory, and virtual pit wall support for sim racers."
    },
    nav: {
      home: "Home",
      features: "Features",
      how: "How to Use",
      support: "Support",
      blog: "Blog",
      roadmap: "Roadmap",
      privacy: "Privacy",
      terms: "Terms"
    },
    common: {
      parent: "Camilore",
      app: "Jax Max Delta",
      eyebrow: "Sim racing companion app",
      ctaJoin: "Join TestFlight",
      ctaTry: "Try Jax",
      ctaFeatures: "View Features",
      ctaHow: "Learn How It Works",
      ctaBlog: "Read the Blog",
      ctaSupport: "Contact Support",
      placeholder: "Placeholder link - update when the final App Store or TestFlight URL is ready.",
      disclaimer: "Jax Max Delta is an independent sim racing companion app and is not affiliated with or endorsed by EA, Codemasters, Formula 1, FIA, Microsoft, Sony, Fanatec, or any other referenced brand.",
      footerLead: "Your virtual pit wall crew, personal race engineer, and racing journal.",
      readPost: "Read post"
    },
    home: {
      kicker: "Second screen. Voice alerts. Pit wall support.",
      title: "Your virtual pit wall crew.",
      position: "Jax Max Delta turns your phone or tablet into the race data, voice alerts, session memory, and strategy support your cockpit is missing.",
      intro: "Race with more than a dashboard. Jax brings together live telemetry, race-engineer style voice alerts, session history, setup memory, and racing insights so you feel supported every lap.",
      telemetry: [["Delta", "-0.284"], ["Tyres", "Medium 41%"], ["Fuel", "+1.8 laps"], ["Next alert", "Box window"]],
      whoTitle: "Who Jax is for",
      whoIntro: "Jax is built around real sim racing problems, especially on console rigs where the cockpit view and wheel can hide critical information.",
      who: [
        ["Wheel blocks the dash", "Run the data you need on a second screen without changing camera view."],
        ["Console-first racers", "Designed for Xbox and PlayStation players using telemetry output from supported racing games."],
        ["League racers", "Keep a history of sessions, setups, tyres, fuel, penalties, weather, and progress."],
        ["Drivers chasing consistency", "Use session memory to find what worked on each track and improve over time."]
      ],
      benefitsTitle: "Race with a team",
      benefitsIntro: "From cockpit to pit wall to post-session review, Jax helps you race smarter and remember what worked.",
      benefits: [
        ["The team your cockpit is missing", "Critical race information stays visible on a phone or tablet when your wheel or cockpit blocks the game HUD."],
        ["Your race engineer in your ear", "Voice alerts can call out tyres, fuel, deltas, penalties, and important session events without claiming to drive the strategy for you."],
        ["Your team notebook", "Save notes, setups, compounds, and outcomes so every race weekend teaches the next one."]
      ],
      featuresTitle: "What Jax does",
      featuresIntro: "Live dashboard, voice alerts, virtual pit wall context, session history, setup and tyre memory, and the tools to race smarter over time.",
      pillars: [
        ["Live Dashboard", "Race data on your phone or tablet when your wheel or cockpit blocks the in-game display."],
        ["Jax Voice Alerts", "Race-engineer style alerts for the moments you should not have to look away from the track."],
        ["Virtual Pit Wall Crew", "The missing team behind your cockpit: context, reminders, and support without claiming automated strategy."],
        ["Session History", "A post-session record of laps, notes, events, and progress."],
        ["Setup & Tyre Memory", "Remember what setup, compound, and stint choices worked on each track."],
        ["Race Smarter Over Time", "Turn each session into knowledge you can use next race weekend."]
      ],
      earlyTitle: "Early access",
      earlyBody: "Jax is moving through early access while the product grows from second-screen dashboard into a deeper race engineer and racing journal. TestFlight and App Store links are placeholders until final links are available.",
      supportedTitle: "Supported games and platforms",
      supportedBody: "Jax works with telemetry data from supported racing games. Current focus is EA SPORTS F1 titles with UDP telemetry on iPhone and iPad, including console setups on the same local network.",
      quickLinksTitle: "Keep going",
      quickLinks: [
        ["Features", "Explore live dashboard, voice alerts, virtual pit wall support, setup tracking, tyres, fuel, penalties, flags, weather, and racing journal tools.", "features.html"],
        ["How to Use", "Configure UDP telemetry, connect your phone or tablet, start a session, and troubleshoot common issues.", "how-to.html"],
        ["Support", "FAQ, known issues, tester feedback, and contact information.", "support.html"],
        ["Privacy", "Plain-language privacy details for telemetry, sessions, local storage, and future sync.", "privacy.html"]
      ]
    },
    features: {
      title: "Race with more than a dashboard.",
      intro: "Jax Max Delta is your cockpit display, race-engineer voice alerts, virtual pit wall crew, and team notebook for sim racers who want useful information without losing focus.",
      current: "Current and grounded",
      future: "Future roadmap",
      items: [
        ["Live Dashboard", "Your cockpit display on a phone or tablet: speed, gear, throttle, brake, delta, tyre state, fuel, session timing, and the critical information your cockpit can hide."],
        ["Jax Voice Alerts", "Your race engineer layer: useful voice alerts for tyres, fuel, deltas, penalties, flags, weather changes, and session events."],
        ["Virtual Pit Wall Crew", "A lightweight pit wall view of the race context around you, designed to support decisions without overclaiming automated strategy."],
        ["Session History", "Your team notebook after the flag. Review laps, sectors, race outcomes, notes, and progression instead of relying on memory."],
        ["Setup & Tyre Memory", "Your garage memory. Remember what setup, compound, stint length, and tyre behavior worked on each track and condition."],
        ["Tyre and Compound Tracking", "Track compounds, stint length, wear patterns, and how tyre choices affected pace."],
        ["Fuel and Strategy Insights", "Keep fuel and race strategy visible so you can make decisions before the problem is obvious."],
        ["Penalties, Flags, Weather, and Events", "Capture the context around a session: penalties, safety events, changing weather, and race notes."],
        ["Race Smarter Over Time", "Turn each race weekend into a record you can revisit before your next league event."]
      ],
      roadmap: [
        ["Smarter post-session review", "More structured comparisons across tracks, setups, tyres, and weather."],
        ["Cloud sync", "Optional sync for drivers who want their racing journal across devices."],
        ["Expanded game support", "Additional racing titles where reliable telemetry support makes sense."],
        ["Deeper pit wall intelligence", "Future coaching and strategy features will be framed clearly as roadmap until released."]
      ]
    },
    how: {
      title: "How to use Jax",
      intro: "Set up telemetry once, keep your phone or tablet on the same network, and let Jax become your second screen, voice alert layer, and session memory.",
      steps: [
        ["Install or open Jax", "Install Jax Max Delta through TestFlight or the App Store once the public link is available, then open it before you enter the track."],
        ["Use the same network", "Connect your console or PC and your iPhone or iPad to the same local Wi-Fi or network segment."],
        ["Enable UDP telemetry", "In supported EA SPORTS F1 games, open telemetry settings, enable UDP telemetry, set the destination IP to your phone or tablet, and use the telemetry port required by the game."],
        ["Start a live session", "Open Jax before entering the track, then start a practice, qualifying, race, or league session."],
        ["Use the dashboard", "Keep your device visible near your wheel or cockpit so key data stays readable without changing camera view."],
        ["Use voice alerts", "Choose the alerts you want to hear and keep your eyes on the track while Jax calls out useful information."],
        ["Review afterward", "After the session, check laps, notes, setup choices, tyres, fuel, penalties, weather, and what you want the team notebook to remember."]
      ],
      troubleTitle: "Common troubleshooting",
      trouble: [
        ["No telemetry", "Confirm UDP telemetry is enabled, the IP address matches your device, both devices share the same network, and the UDP port is not blocked."],
        ["Data stops mid-session", "Check that the device stayed on Wi-Fi, low power mode did not interrupt the app, and the console did not switch networks."],
        ["Wrong device IP", "Phone and tablet IP addresses can change. Recheck Wi-Fi settings and update the game telemetry destination if needed."],
        ["Voice alerts not playing", "Check device volume, silent mode, app audio settings, and whether voice alert categories are enabled."]
      ]
    },
    support: {
      title: "Support for Jax Max Delta",
      intro: "Find setup help, FAQ answers, common UDP and voice alert issues, and a simple way to send tester feedback.",
      faqTitle: "FAQ",
      faq: [
        ["Does Jax work on console?", "Yes. Jax is designed with console racers in mind. The key requirement is that your game can send supported telemetry data and your phone or tablet is on the same network."],
        ["Is Jax officially affiliated with EA, F1, Codemasters, Fanatec, PlayStation, or Xbox?", "No. Jax Max Delta is independent and uses telemetry data from supported games where available."],
        ["Is this only a telemetry dashboard?", "No. The dashboard is one part of the product. Jax is also your virtual pit wall crew, voice alert layer, personal race engineer, and racing journal for sessions, setups, tyres, fuel, penalties, weather, and progress."],
        ["Where is my data stored?", "Session data may be stored locally on your device. If cloud sync is added later, it will be optional and described clearly in the app and privacy policy."],
        ["How do I report feedback as a tester?", "Send the device model, game title, console or PC, session type, and what happened to support@jaxmaxdelta.com."]
      ],
      knownTitle: "Known issues",
      known: [
        "No UDP data received because telemetry output is disabled in the game.",
        "Phone or tablet is not on the same network as the console or PC.",
        "Wrong game UDP destination IP, port, or telemetry format.",
        "Voice alerts not playing because device volume, silent mode, or alert categories need adjustment."
      ],
      feedbackTitle: "Tester feedback",
      feedbackBody: "Useful reports include your game, platform, device, app version, telemetry settings, and a short description of what you expected versus what happened."
    },
    privacy: {
      title: "Privacy Policy",
      intro: "This policy explains how Jax Max Delta handles telemetry, session history, settings, support messages, and future cloud features in plain language.",
      updated: "Last updated: June 8, 2026",
      sections: [
        ["Data Jax receives", "Jax can receive telemetry data from supported racing games on your local network. This may include speed, throttle, brake, gear, lap timing, tyre state, fuel, penalties, flags, weather, and race events."],
        ["Session and journal data", "The app may store session history, setup notes, tyre choices, fuel information, penalties, weather, and track notes locally on your device so you can review past sessions."],
        ["Local storage and future sync", "Current session and journal features are designed around local storage. If optional cloud sync is enabled later, the app will explain what syncs and will update this policy before those features are used."],
        ["Support messages", "If you contact support, we receive the information you choose to send, such as your email address, device, app version, and issue details."],
        ["No sale of personal data", "Camilore does not sell your personal data. Jax is not an advertising product."],
        ["Third-party services", "App distribution, purchases, crash reports, analytics, or beta testing may involve platform providers such as Apple or other service providers. These services process data under their own terms and privacy policies."],
        ["Your choices", "You can delete local app data by using in-app delete controls where available or by removing the app from your device. Contact support for privacy questions."],
        ["Contact", "For privacy questions, contact support@jaxmaxdelta.com."]
      ]
    },
    terms: {
      title: "Terms of Use",
      intro: "These basic terms explain the rules for using Jax Max Delta.",
      sections: [
        ["Independent product", "Jax Max Delta is an independent product by Camilore and is not affiliated with EA, Formula 1, FIA, Codemasters, Fanatec, Sony, Microsoft, Xbox, PlayStation, or any other referenced brand."],
        ["Use of the app", "Use Jax responsibly and only where second-screen telemetry and audio alerts are allowed by your event, league, platform, and game rules."],
        ["No guarantee of race outcome", "Jax provides information and coaching prompts, but you remain responsible for driving decisions, strategy calls, and setup choices."],
        ["Telemetry compatibility", "Compatibility depends on supported racing games, telemetry settings, local network conditions, devices, and platform behavior. Features may change over time."],
        ["Early access and placeholders", "Some links, services, and roadmap items may be placeholders during early access and may change before public release."],
        ["Contact", "Questions about these terms can be sent to support@jaxmaxdelta.com."]
      ]
    },
    roadmap: {
      title: "Roadmap",
      intro: "Jax is being built in stages. This page separates what exists now from what is next and what remains future work.",
      groups: [
        ["R1 / Current", ["Second-screen live dashboard", "Voice coaching and race-engineer style alerts", "Session history", "Setup tracking", "Tyre, fuel, penalties, flags, weather, and race event context", "Track memory and racing journal foundations"]],
        ["R2 / Next", ["More post-session review tools", "Better setup comparison by track and conditions", "Expanded tester feedback workflow", "More polished early access onboarding", "Clearer dashboard layouts for phone and tablet"]],
        ["Future", ["Optional cloud sync", "Expanded telemetry game support", "Deeper coaching intelligence once validated", "League weekend preparation tools", "Richer long-term driver progress trends"]]
      ]
    },
    blog: {
      title: "Jax Max Delta Blog",
      intro: "Notes for console sim racers, league drivers, and anyone building better race habits with a second screen and racing journal.",
      posts: {
        "second-screen-dashboard": {
          title: "Why Your Sim Racing Cockpit Needs a Virtual Pit Wall",
          date: "Starter post",
          summary: "Cockpit views and wheels can hide the information you need most. A virtual pit wall puts race data, voice alerts, and session memory back where you can use it.",
          body: [
            ["The blocked-dashboard problem", "Many console racers run cockpit view, a wheel rim, or a screen position that hides fuel, tyre, delta, or warning information. The result is simple: you are making race decisions with missing context."],
            ["Why a phone or tablet helps", "A second-screen dashboard keeps the critical data visible without forcing you to change camera view or look through clutter. Jax adds the pit wall layer: readable data, useful voice alerts, and support from the side of the track."],
            ["Beyond live data", "The bigger win is that the session becomes part of your racing history. Once you know what happened, what tyres worked, and what setup felt right, your next session starts with better team memory."]
          ]
        },
        "different-from-telemetry-app": {
          title: "What Makes Jax Different From a Telemetry App",
          date: "Starter post",
          summary: "Jax is not only about numbers. It combines dashboard, voice alerts, virtual pit wall context, and racing journal into one driver-focused workflow.",
          body: [
            ["Telemetry is the input", "Telemetry data is useful, but raw numbers alone do not make a driver faster. The product needs to turn data into timing, prompts, history, and decisions."],
            ["The race engineer layer", "Jax voice alerts are designed to call out useful information while you keep your eyes on the track: tyre state, fuel, deltas, penalties, flags, and session events."],
            ["The team notebook layer", "A session history is what helps you remember which setup, compound, and strategy worked on a track instead of starting from scratch every race weekend."]
          ]
        },
        "league-race-weekend": {
          title: "How to Prepare for a League Race Weekend",
          date: "Starter post",
          summary: "Use your past sessions, setup notes, tyre plans, and weather context to arrive at race day with fewer unknowns.",
          body: [
            ["Review the track", "Start with what you already know: previous lap times, setup notes, tyre behavior, fuel usage, penalties, and weather from older sessions."],
            ["Build a simple plan", "Know your starting setup, first stint compound, fuel target, and the alerts you want to hear before the session begins."],
            ["Capture what changes", "After the event, write down what surprised you. League racing improvement comes from keeping the details you would otherwise forget."]
          ]
        },
        "fanatec-wheel-tips": {
          title: "Fanatec Wheel Tips for F1 Console Racers",
          date: "Starter post",
          summary: "A few practical setup habits for console racers whose wheel hardware can make the in-game dashboard harder to see.",
          body: [
            ["Keep the screen readable", "Wheel position, field of view, and cockpit camera settings can block important UI. A second screen gives you more freedom to run the view you actually like."],
            ["Map what matters", "Put frequent actions where your hands naturally rest: differential, brake bias, overtake, radio, and menu navigation."],
            ["Use Jax for the missing layer", "Let the wheel handle driving inputs and let Jax handle readable race data, useful alerts, and session memory."]
          ]
        }
      }
    }
  },
  fr: {
    meta: {
      title: "Jax Max Delta - Equipe virtuelle au muret des puits pour sim racers",
      description: "Jax Max Delta transforme votre telephone ou tablette en donnees de course, alertes vocales, memoire de session et soutien au muret des puits."
    },
    nav: { home: "Accueil", features: "Fonctions", how: "Utilisation", support: "Support", blog: "Blogue", roadmap: "Feuille de route", privacy: "Confidentialite", terms: "Conditions" },
    common: {
      parent: "Camilore", app: "Jax Max Delta", eyebrow: "Application compagnon de sim racing", ctaJoin: "Rejoindre TestFlight", ctaTry: "Essayer Jax", ctaFeatures: "Voir les fonctions", ctaHow: "Voir comment ca marche", ctaBlog: "Lire le blogue", ctaSupport: "Contacter le support",
      placeholder: "Lien temporaire - a remplacer quand le lien App Store ou TestFlight final sera pret.",
      disclaimer: "Jax Max Delta est une application compagnon de sim racing independante. Elle n'est pas affiliee a EA, Codemasters, Formula 1, FIA, Microsoft, Sony, Fanatec ni a toute autre marque mentionnee, et n'est pas approuvee par celles-ci.",
      footerLead: "Votre equipe virtuelle au muret des puits, votre ingenieur de course personnel et votre carnet de course.", readPost: "Lire l'article"
    },
    home: {
      kicker: "Second ecran. Alertes vocales. Muret des puits.",
      title: "Votre equipe virtuelle au muret des puits.",
      position: "Jax Max Delta transforme votre telephone ou tablette en donnees de course, alertes vocales, memoire de session et soutien strategique que votre cockpit ne vous montre pas toujours.",
      intro: "Roulez avec plus qu'un tableau de bord. Jax rassemble telemetrie en direct, alertes vocales de style ingenieur, historique de session, memoire des reglages et insights de course pour que vous vous sentiez accompagne a chaque tour.",
      telemetry: [["Delta", "-0.284"], ["Pneus", "Medium 41 %"], ["Essence", "+1,8 tour"], ["Prochaine alerte", "Fenetre d'arret"]],
      whoTitle: "Pour qui Jax est fait",
      whoIntro: "Jax part de vrais irritants de sim racing, surtout sur console quand la vue cockpit ou le volant cache des informations critiques.",
      who: [["Le volant cache le dash", "Affichez les donnees utiles sur un second ecran sans changer de camera."], ["Pilotes console", "Pense pour les joueurs Xbox et PlayStation qui utilisent la telemetrie des jeux compatibles."], ["Coureurs de ligue", "Gardez l'historique des sessions, reglages, pneus, essence, penalites, meteo et progres."], ["Pilotes qui veulent progresser", "Utilisez la memoire de session pour retrouver ce qui a marche sur chaque circuit."]],
      benefitsTitle: "Roulez avec une equipe",
      benefitsIntro: "Du cockpit au muret des puits jusqu'a l'analyse apres session, Jax vous aide a mieux courir et a retenir ce qui a fonctionne.",
      benefits: [["L'equipe qui manque a votre cockpit", "Les infos critiques restent visibles sur telephone ou tablette quand le volant bloque le HUD."], ["Votre ingenieur dans l'oreille", "Des alertes vocales peuvent signaler pneus, essence, deltas, penalites et evenements importants sans pretendre decider toute la strategie."], ["Votre carnet d'equipe", "Sauvegardez notes, reglages, gommes et resultats pour apprendre d'une course a l'autre."]],
      featuresTitle: "Ce que fait Jax",
      featuresIntro: "Tableau de bord en direct, alertes vocales, contexte de muret des puits, historique de session, memoire des reglages et pneus, et outils pour progresser avec le temps.",
      pillars: [["Live Dashboard", "Les donnees de course sur telephone ou tablette quand le volant ou le cockpit cache l'affichage du jeu."], ["Jax Voice Alerts", "Des alertes de style ingenieur pour les moments ou vous ne devriez pas quitter la piste des yeux."], ["Equipe virtuelle au muret des puits", "L'equipe qui manque a votre cockpit : contexte, rappels et soutien sans pretendre automatiser la strategie."], ["Historique des sessions", "Un dossier apres session avec tours, notes, evenements et progression."], ["Memoire reglages et pneus", "Retenez quel reglage, compose et relais ont fonctionne sur chaque piste."], ["Progresser avec le temps", "Transformez chaque session en connaissance utile pour le prochain week-end."]],
      earlyTitle: "Acces anticipe", earlyBody: "Jax evolue en acces anticipe, du tableau de bord second ecran vers une equipe virtuelle au muret des puits, un ingenieur de course personnel et un carnet de course. Les liens TestFlight et App Store sont temporaires pour le moment.",
      supportedTitle: "Jeux et plateformes compatibles", supportedBody: "Jax fonctionne avec les donnees de telemetrie des jeux compatibles. L'objectif actuel est les titres EA SPORTS F1 avec telemetrie UDP sur iPhone et iPad, incluant les consoles sur le meme reseau local.",
      quickLinksTitle: "Continuer", quickLinks: [["Fonctions", "Explorez tableau de bord, alertes vocales, muret des puits virtuel, reglages, pneus, essence, penalites, drapeaux, meteo et journal.", "features.html"], ["Utilisation", "Configurez la telemetrie UDP, connectez votre appareil et depannez les problemes courants.", "how-to.html"], ["Support", "FAQ, problemes connus, retours de testeurs et contact.", "support.html"], ["Confidentialite", "Details clairs sur la telemetrie, les sessions, le stockage local et une future synchro.", "privacy.html"]]
    },
    features: {
      title: "Plus qu'un tableau de bord.",
      intro: "Jax Max Delta est votre affichage cockpit sur second ecran, vos alertes vocales de style ingenieur, votre equipe virtuelle au muret des puits et votre carnet d'equipe.",
      current: "Actuel et concret", future: "Feuille de route",
      items: [["Live Dashboard", "Votre affichage cockpit sur telephone ou tablette : vitesse, rapport, acceleration, frein, delta, pneus, essence, chronos et les infos que votre cockpit peut cacher."], ["Jax Voice Alerts", "Votre couche ingenieur de course : alertes vocales utiles pour pneus, essence, deltas, penalites, drapeaux, meteo et evenements."], ["Equipe virtuelle au muret des puits", "Une vue legere du contexte de course autour de vous, concue pour soutenir vos decisions sans surpromettre une strategie automatisee."], ["Historique des sessions", "Votre carnet d'equipe apres le drapeau : tours, secteurs, resultats, notes et progression."], ["Memoire reglages et pneus", "Votre memoire de garage. Retenez quel reglage, compose, relais et comportement pneu ont fonctionne par piste et condition."], ["Essence et strategie", "Gardez l'essence et la strategie visibles pour decider avant que le probleme soit evident."], ["Penalites, drapeaux, meteo et evenements", "Conservez le contexte complet d'une session."], ["Progresser avec le temps", "Transformez chaque week-end de course en reference pour le prochain."]],
      roadmap: [["Analyse apres session", "Comparaisons plus structurees par piste, reglages, pneus et meteo."], ["Synchro nuage", "Synchronisation optionnelle pour garder le journal sur plusieurs appareils."], ["Plus de jeux", "Ajout d'autres titres quand la telemetrie le permet de facon fiable."], ["Intelligence de muret des puits", "Les fonctions avancees de coaching et strategie resteront clairement marquees comme feuille de route jusqu'a leur sortie."]]
    },
    how: {
      title: "Comment utiliser Jax",
      intro: "Configurez la telemetrie une fois, gardez votre telephone ou tablette sur le meme reseau, et utilisez Jax comme second ecran, couche d'alertes vocales et memoire de session.",
      steps: [["Installer ou ouvrir Jax", "Installez Jax Max Delta via TestFlight ou l'App Store quand le lien public sera disponible, puis ouvrez l'app avant d'entrer en piste."], ["Utiliser le meme reseau", "Connectez votre console ou PC et votre iPhone ou iPad au meme reseau Wi-Fi ou segment local."], ["Activer la telemetrie UDP", "Dans les jeux EA SPORTS F1 compatibles, activez la telemetrie UDP, entrez l'adresse IP de votre telephone ou tablette et utilisez le port requis par le jeu."], ["Demarrer une session", "Ouvrez Jax avant d'entrer en piste, puis lancez une pratique, qualification, course ou session de ligue."], ["Utiliser le tableau de bord", "Placez l'appareil pres du volant ou du cockpit pour garder les donnees lisibles."], ["Utiliser les alertes vocales", "Choisissez les alertes que vous voulez entendre pendant que vous gardez les yeux sur la piste."], ["Revoir apres la session", "Apres, consultez tours, notes, reglages, pneus, essence, penalites, meteo et ce que le carnet doit retenir."]],
      troubleTitle: "Depannage courant", trouble: [["Aucune telemetrie UDP", "Verifiez que la telemetrie UDP est activee dans le jeu, que l'adresse IP est celle de l'appareil et que le port est correct."], ["Telephone hors reseau", "Assurez-vous que le telephone ou la tablette est sur le meme Wi-Fi que la console ou le PC."], ["Mauvais reglages UDP", "Revoyez l'adresse de destination, le port et le format de telemetrie dans le jeu."], ["Alertes vocales muettes", "Verifiez le volume, le mode silencieux, les reglages audio de l'app et les categories d'alertes activees."]]
    },
    support: {
      title: "Support Jax Max Delta", intro: "Aide de configuration, FAQ, problemes connus et retour des testeurs.",
      faqTitle: "FAQ", faq: [["Jax fonctionne-t-il sur console ?", "Oui. Jax est pense pour les pilotes console. Il faut un jeu qui envoie une telemetrie compatible et un appareil sur le meme reseau."], ["Jax est-il officiel ou affilie ?", "Non. Jax Max Delta est independant et utilise les donnees de telemetrie disponibles dans les jeux compatibles."], ["Est-ce seulement un tableau de bord ?", "Non. Jax est aussi votre equipe virtuelle au muret des puits, votre couche d'alertes vocales, votre ingenieur de course personnel et votre carnet de course."], ["Ou sont mes donnees ?", "Les donnees de session peuvent etre stockees localement. Une eventuelle synchro nuage sera optionnelle et clairement expliquee."], ["Comment envoyer un retour ?", "Envoyez l'appareil, le jeu, la plateforme, le type de session et ce qui s'est passe a support@jaxmaxdelta.com."]],
      knownTitle: "Problemes connus", known: ["Aucune donnee UDP recue parce que la telemetrie est desactivee dans le jeu.", "Telephone ou tablette pas sur le meme reseau que la console ou le PC.", "Adresse IP, port ou format UDP incorrect dans les reglages du jeu.", "Alertes vocales muettes a cause du volume, du mode silencieux ou des categories d'alertes."],
      feedbackTitle: "Retour des testeurs", feedbackBody: "Un bon rapport inclut jeu, plateforme, appareil, version de l'app, reglages de telemetrie et resultat attendu."
    },
    privacy: null, terms: null, roadmap: null, blog: null
  },
  es: {
    meta: { title: "Jax Max Delta - Equipo virtual en el muro de pits para sim racers", description: "Jax Max Delta convierte tu telefono o tablet en datos de carrera, alertas de voz, memoria de sesiones y apoyo de muro de pits." },
    nav: { home: "Inicio", features: "Funciones", how: "Como usar", support: "Soporte", blog: "Blog", roadmap: "Roadmap", privacy: "Privacidad", terms: "Terminos" },
    common: { parent: "Camilore", app: "Jax Max Delta", eyebrow: "App companera de sim racing", ctaJoin: "Unirse a TestFlight", ctaTry: "Probar Jax", ctaFeatures: "Ver funciones", ctaHow: "Aprender como funciona", ctaBlog: "Leer el blog", ctaSupport: "Contactar soporte", placeholder: "Enlace temporal - actualizar cuando el link final de App Store o TestFlight este listo.", disclaimer: "Jax Max Delta es una app independiente para sim racing y no esta afiliada ni respaldada por EA, Codemasters, Formula 1, FIA, Microsoft, Sony, Fanatec ni ninguna otra marca mencionada.", footerLead: "Tu equipo virtual en el muro de pits, ingeniero de carrera personal y diario de carreras.", readPost: "Leer articulo" },
    home: {
      kicker: "Segunda pantalla. Alertas de voz. Muro de pits.", title: "Tu equipo virtual en el muro de pits.", position: "Jax Max Delta convierte tu telefono o tablet en los datos de carrera, alertas de voz, memoria de sesiones y apoyo de estrategia que le falta a tu cockpit.", intro: "Corre con mas que un tablero. Jax une telemetria en vivo, alertas de voz estilo ingeniero, historial de sesiones, memoria de setups e insights de carrera para que te sientas apoyado en cada vuelta.",
      telemetry: [["Delta", "-0.284"], ["Neumaticos", "Medio 41 %"], ["Combustible", "+1.8 vueltas"], ["Proxima alerta", "Ventana de parada"]],
      whoTitle: "Para quien es Jax", whoIntro: "Jax resuelve problemas reales de sim racing, especialmente en consola cuando la vista cockpit o el volante ocultan informacion critica.",
      who: [["El volante tapa el dashboard", "Lleva los datos clave a una segunda pantalla sin cambiar la camara."], ["Pilotos de consola", "Pensado para Xbox y PlayStation con telemetria de juegos compatibles."], ["Pilotos de liga", "Guarda historial de sesiones, setups, neumaticos, combustible, penalizaciones, clima y progreso."], ["Pilotos que buscan consistencia", "Usa la memoria de sesiones para recordar que funciono en cada circuito."]],
      benefitsTitle: "Corre con un equipo", benefitsIntro: "Del cockpit al muro de pits y a la revision post-sesion, Jax te ayuda a correr mejor y recordar que funciono.",
      benefits: [["El equipo que le falta a tu cockpit", "La informacion critica queda visible en telefono o tablet cuando el volante bloquea el HUD."], ["Tu ingeniero en el oido", "Las alertas de voz pueden avisar sobre neumaticos, combustible, deltas, penalizaciones y eventos sin prometer estrategia automatica."], ["Tu cuaderno de equipo", "Guarda notas, setups, compuestos y resultados para aprender de una carrera a otra."]],
      featuresTitle: "Lo que hace Jax", featuresIntro: "Dashboard en vivo, alertas de voz, contexto de muro de pits, historial de sesiones, memoria de setups y neumaticos, y herramientas para mejorar con el tiempo.",
      pillars: [["Live Dashboard", "Datos de carrera en tu telefono o tablet cuando el volante o cockpit tapa el display del juego."], ["Jax Voice Alerts", "Alertas estilo ingeniero para momentos en los que no deberias apartar la vista de la pista."], ["Equipo virtual en el muro de pits", "El equipo que le falta a tu cockpit: contexto, recordatorios y apoyo sin prometer estrategia automatizada."], ["Historial de sesiones", "Un registro post-sesion con vueltas, notas, eventos y progreso."], ["Memoria de setups y neumaticos", "Recuerda que setup, compuesto y stint funcionaron en cada pista."], ["Mejorar con el tiempo", "Convierte cada sesion en conocimiento para el siguiente fin de semana."]],
      earlyTitle: "Acceso anticipado", earlyBody: "Jax esta creciendo desde dashboard de segunda pantalla hacia equipo virtual en el muro de pits, ingeniero de carrera personal y diario completo. Los enlaces TestFlight y App Store son temporales hasta tener links finales.",
      supportedTitle: "Juegos y plataformas", supportedBody: "Jax funciona con datos de telemetria de juegos compatibles. El foco actual son titulos EA SPORTS F1 con telemetria UDP en iPhone y iPad, incluyendo consolas en la misma red local.",
      quickLinksTitle: "Seguir explorando", quickLinks: [["Funciones", "Dashboard, alertas de voz, muro de pits virtual, setups, neumaticos, combustible, penalizaciones, banderas, clima y diario.", "features.html"], ["Como usar", "Configura UDP, conecta el dispositivo y resuelve problemas comunes.", "how-to.html"], ["Soporte", "FAQ, problemas conocidos, feedback de testers y contacto.", "support.html"], ["Privacidad", "Detalles claros sobre telemetria, sesiones, almacenamiento local y futura sincronizacion.", "privacy.html"]]
    },
    features: {
      title: "Mas que un tablero.", intro: "Jax Max Delta es tu display de cockpit en segunda pantalla, alertas de voz estilo ingeniero, equipo virtual en el muro de pits y cuaderno de equipo.", current: "Actual y concreto", future: "Roadmap futuro",
      items: [["Live Dashboard", "Tu display de cockpit en telefono o tablet: velocidad, marcha, acelerador, freno, delta, neumaticos, combustible, tiempos y datos que tu cockpit puede ocultar."], ["Jax Voice Alerts", "Tu capa de ingeniero de carrera: alertas de voz utiles para neumaticos, combustible, deltas, penalizaciones, banderas, clima y eventos."], ["Equipo virtual en el muro de pits", "Una vista ligera del contexto de carrera, pensada para apoyar decisiones sin prometer estrategia automatizada."], ["Historial de sesiones", "Tu cuaderno de equipo despues de la bandera: vueltas, sectores, resultados, notas y progreso."], ["Memoria de setups y neumaticos", "Tu memoria de garage. Recuerda que setup, compuesto, stint y comportamiento de neumaticos funcionaron por pista y condicion."], ["Combustible y estrategia", "Mantiene combustible y estrategia visibles antes de que el problema sea obvio."], ["Penalizaciones, banderas, clima y eventos", "Guarda el contexto completo de cada sesion."], ["Mejorar con el tiempo", "Convierte cada fin de semana de carrera en referencia para el siguiente."]],
      roadmap: [["Revision post-sesion", "Comparaciones por pista, setup, neumaticos y clima."], ["Cloud sync", "Sincronizacion opcional entre dispositivos."], ["Mas juegos", "Soporte para mas titulos cuando la telemetria sea confiable."], ["Inteligencia de muro de pits", "Funciones futuras de coaching y estrategia se marcaran como roadmap hasta estar listas."]]
    },
    how: {
      title: "Como usar Jax", intro: "Configura la telemetria una vez, mantén el telefono o tablet en la misma red y usa Jax como segunda pantalla, capa de alertas de voz y memoria de sesion.",
      steps: [["Instalar o abrir Jax", "Instala Jax Max Delta por TestFlight o App Store cuando el enlace publico este disponible, luego abre la app antes de salir a pista."], ["Misma red", "Conecta la consola o PC y el iPhone o iPad a la misma red Wi-Fi o segmento local."], ["Activar telemetria UDP", "En juegos EA SPORTS F1 compatibles, activa telemetria UDP, ingresa la IP del telefono o tablet y usa el puerto requerido."], ["Iniciar sesion", "Abre Jax antes de salir a pista y empieza practica, qualy, carrera o liga."], ["Usar dashboard", "Coloca el dispositivo cerca del volante para leer datos sin cambiar de vista."], ["Usar alertas de voz", "Elige las alertas que quieres escuchar mientras miras la pista."], ["Revisar despues", "Despues, revisa vueltas, notas, setups, neumaticos, combustible, penalizaciones, clima y lo que el cuaderno debe recordar."]],
      troubleTitle: "Problemas comunes", trouble: [["Sin datos UDP", "Verifica que la telemetria UDP este activa en el juego, que la IP sea la del dispositivo y que el puerto sea correcto."], ["Telefono fuera de red", "Asegurate de que el telefono o tablet este en el mismo Wi-Fi que la consola o PC."], ["Ajustes UDP incorrectos", "Revisa direccion de destino, puerto y formato de telemetria en el juego."], ["Alertas de voz sin sonido", "Revisa volumen, modo silencio, ajustes de audio de la app y categorias de alertas activadas."]]
    },
    support: {
      title: "Soporte de Jax Max Delta", intro: "Ayuda de configuracion, FAQ, problemas conocidos y feedback de testers.",
      faqTitle: "FAQ", faq: [["Funciona en consola?", "Si. Jax esta pensado para consola. Necesitas un juego con telemetria compatible y el dispositivo en la misma red."], ["Jax esta afiliado oficialmente?", "No. Jax Max Delta es independiente y usa telemetria disponible en juegos compatibles."], ["Es solo un dashboard?", "No. Jax tambien es tu equipo virtual en el muro de pits, capa de alertas de voz, ingeniero de carrera personal y diario de carreras."], ["Donde estan mis datos?", "Los datos pueden guardarse localmente. Si llega cloud sync, sera opcional y se explicara con claridad."], ["Como envio feedback?", "Envia dispositivo, juego, plataforma, tipo de sesion y que paso a support@jaxmaxdelta.com."]],
      knownTitle: "Problemas conocidos", known: ["No se reciben datos UDP porque la telemetria esta desactivada en el juego.", "Telefono o tablet no esta en la misma red que la consola o PC.", "IP, puerto o formato UDP incorrecto en los ajustes del juego.", "Alertas de voz sin sonido por volumen, modo silencio o categorias de alertas."],
      feedbackTitle: "Feedback de testers", feedbackBody: "Un buen reporte incluye juego, plataforma, dispositivo, version de app, ajustes de telemetria y resultado esperado."
    },
    privacy: null, terms: null, roadmap: null, blog: null
  }
};

copy.fr.privacy = cloneLocalizedLegal("fr", copy.en.privacy);
copy.fr.terms = cloneLocalizedLegal("fr", copy.en.terms);
copy.fr.roadmap = cloneLocalizedRoadmap("fr", copy.en.roadmap);
copy.fr.blog = cloneLocalizedBlog("fr", copy.en.blog);
copy.es.privacy = cloneLocalizedLegal("es", copy.en.privacy);
copy.es.terms = cloneLocalizedLegal("es", copy.en.terms);
copy.es.roadmap = cloneLocalizedRoadmap("es", copy.en.roadmap);
copy.es.blog = cloneLocalizedBlog("es", copy.en.blog);

function cloneLocalizedLegal(lang, source) {
  if (lang === "fr" && source.title === "Privacy Policy") {
    return {
      title: "Politique de confidentialite",
      intro: "Cette politique explique simplement comment Jax Max Delta traite la telemetrie, l'historique de session, les reglages, les messages de support et les futures fonctions nuage.",
      updated: "Derniere mise a jour : 8 juin 2026",
      sections: source.sections.map(([title, body]) => [translateLegalTitle(lang, title), translateLegalBody(lang, body)])
    };
  }
  if (lang === "es" && source.title === "Privacy Policy") {
    return {
      title: "Politica de privacidad",
      intro: "Esta politica explica de forma clara como Jax Max Delta maneja telemetria, historial de sesiones, ajustes, mensajes de soporte y futuras funciones en la nube.",
      updated: "Ultima actualizacion: 8 de junio de 2026",
      sections: source.sections.map(([title, body]) => [translateLegalTitle(lang, title), translateLegalBody(lang, body)])
    };
  }
  if (lang === "fr") {
    return {
      title: "Conditions d'utilisation",
      intro: "Ces conditions de base expliquent les regles d'utilisation de Jax Max Delta.",
      sections: source.sections.map(([title, body]) => [translateTermsTitle(lang, title), translateTermsBody(lang, body)])
    };
  }
  return {
    title: "Terminos de uso",
    intro: "Estos terminos basicos explican las reglas para usar Jax Max Delta.",
    sections: source.sections.map(([title, body]) => [translateTermsTitle(lang, title), translateTermsBody(lang, body)])
  };
}

function cloneLocalizedRoadmap(lang, source) {
  if (lang === "fr") return {
    title: "Feuille de route",
    intro: "Jax est construit par etapes. Cette page separe ce qui existe maintenant, ce qui arrive ensuite et ce qui reste futur.",
    groups: [
      ["R1 / Actuel", ["Tableau de bord second ecran en direct", "Coaching vocal et alertes de style ingenieur de course", "Historique des sessions", "Suivi des reglages", "Contexte pneus, essence, penalites, drapeaux, meteo et evenements de course", "Bases de memoire de piste et journal de course"]],
      ["R2 / Prochain", ["Plus d'outils d'analyse apres session", "Meilleure comparaison des reglages par piste et conditions", "Flux de retour testeur plus complet", "Onboarding d'acces anticipe plus soigne", "Mises en page plus claires pour telephone et tablette"]],
      ["Futur", ["Synchro nuage optionnelle", "Support de telemetrie pour plus de jeux", "Coaching plus approfondi une fois valide", "Outils de preparation de week-end de ligue", "Tendances de progression pilote a long terme"]]
    ]
  };
  return {
    title: "Roadmap",
    intro: "Jax se construye por etapas. Esta pagina separa lo actual, lo siguiente y el trabajo futuro.",
    groups: [
      ["R1 / Actual", ["Dashboard de segunda pantalla en vivo", "Coaching de voz y alertas estilo ingeniero de carrera", "Historial de sesiones", "Seguimiento de setups", "Contexto de neumaticos, combustible, penalizaciones, banderas, clima y eventos", "Bases de memoria de pista y diario de carreras"]],
      ["R2 / Siguiente", ["Mas herramientas de revision post-sesion", "Mejor comparacion de setups por pista y condiciones", "Flujo de feedback de testers mas completo", "Onboarding de acceso anticipado mas pulido", "Layouts mas claros para telefono y tablet"]],
      ["Futuro", ["Cloud sync opcional", "Soporte de telemetria para mas juegos", "Coaching mas profundo cuando este validado", "Herramientas para preparar fines de semana de liga", "Tendencias de progreso del piloto a largo plazo"]]
    ]
  };
}

function cloneLocalizedBlog(lang, source) {
  if (lang === "fr") return {
    title: "Blogue Jax Max Delta",
    intro: "Notes pour pilotes console, ligues et pilotes qui veulent progresser avec un second ecran et un journal de course.",
    posts: {
      "second-screen-dashboard": {
        title: "Pourquoi votre cockpit de sim racing a besoin d'un muret des puits virtuel",
        date: "Article de depart",
        summary: "La vue cockpit et le volant peuvent cacher les informations les plus utiles. Un muret des puits virtuel remet donnees, alertes vocales et memoire de session au bon endroit.",
        body: [
          ["Le probleme du tableau de bord cache", "Beaucoup de pilotes console utilisent une vue cockpit, un volant ou une position d'ecran qui cache l'essence, les pneus, le delta ou les avertissements. Le resultat est simple : vous prenez des decisions avec trop peu de contexte."],
          ["Pourquoi un telephone ou une tablette aide", "Un tableau de bord second ecran garde les donnees critiques visibles sans changer de camera ni ajouter du bruit visuel. Jax ajoute la couche muret des puits : donnees lisibles, alertes utiles et soutien pendant la course."],
          ["Au-dela des donnees en direct", "Le vrai gain arrive quand la session devient une partie de votre historique. Savoir ce qui s'est passe, quels pneus ont fonctionne et quel reglage etait bon donne une meilleure memoire d'equipe pour la prochaine session."]
        ]
      },
      "different-from-telemetry-app": {
        title: "Ce qui distingue Jax d'une application de telemetrie",
        date: "Article de depart",
        summary: "Jax ne se limite pas aux chiffres. Il combine tableau de bord, alertes vocales, contexte de muret des puits et carnet de course.",
        body: [
          ["La telemetrie est le point de depart", "Les donnees de telemetrie sont utiles, mais les chiffres bruts ne rendent pas un pilote plus rapide a eux seuls. Le produit doit transformer les donnees en timing, alertes, historique et decisions."],
          ["La couche ingenieur de course", "Les alertes vocales de Jax sont concues pour annoncer l'information utile pendant que vous gardez les yeux sur la piste : pneus, essence, deltas, penalites, drapeaux et evenements."],
          ["La couche carnet d'equipe", "L'historique de session aide a retenir quel reglage, compose et plan de course ont fonctionne au lieu de repartir de zero chaque week-end."]
        ]
      },
      "league-race-weekend": {
        title: "Comment preparer un week-end de course en ligue",
        date: "Article de depart",
        summary: "Utilisez vos sessions passees, notes de reglages, plans pneus et contexte meteo pour arriver mieux prepare.",
        body: [
          ["Revoir la piste", "Commencez par ce que vous savez deja : chronos, notes de reglages, comportement des pneus, essence, penalites et meteo des anciennes sessions."],
          ["Construire un plan simple", "Ayez un reglage de depart, un compose pour le premier relais, une cible d'essence et les alertes vocales voulues avant d'entrer en piste."],
          ["Capturer ce qui change", "Apres l'evenement, notez ce qui vous a surpris. En ligue, le progres vient souvent des details qu'on aurait oublies."]
        ]
      },
      "fanatec-wheel-tips": {
        title: "Conseils Fanatec pour pilotes F1 sur console",
        date: "Article de depart",
        summary: "Quelques habitudes pratiques pour les pilotes console dont le volant peut cacher le tableau de bord du jeu.",
        body: [
          ["Garder l'ecran lisible", "La position du volant, le champ de vision et la camera cockpit peuvent cacher des infos importantes. Un second ecran donne plus de liberte pour utiliser la vue que vous preferez."],
          ["Mapper ce qui compte", "Placez les actions frequentes la ou vos mains tombent naturellement : differentiel, repartition de freinage, overtake, radio et navigation."],
          ["Utiliser Jax pour la couche manquante", "Laissez le volant gerer les entrees de pilotage et laissez Jax gerer les donnees lisibles, les alertes utiles et la memoire de session."]
        ]
      }
    }
  };
  return {
    title: "Blog de Jax Max Delta",
    intro: "Notas para pilotos de consola, ligas y quienes quieren mejorar con segunda pantalla y diario de carreras.",
    posts: {
      "second-screen-dashboard": {
        title: "Por que tu cockpit de sim racing necesita un muro de pits virtual",
        date: "Articulo inicial",
        summary: "La vista cockpit y el volante pueden ocultar la informacion mas importante. Un muro de pits virtual pone datos, alertas de voz y memoria de sesiones donde sirven.",
        body: [
          ["El problema del dashboard oculto", "Muchos pilotos de consola usan vista cockpit, aro de volante o una posicion de pantalla que oculta combustible, neumaticos, delta o avisos. El resultado es simple: tomas decisiones con contexto incompleto."],
          ["Por que ayuda un telefono o tablet", "Un dashboard de segunda pantalla mantiene visibles los datos criticos sin cambiar camara ni llenar la vista de ruido. Jax suma la capa de muro de pits: datos legibles, alertas utiles y apoyo durante la carrera."],
          ["Mas alla de los datos en vivo", "La mayor mejora llega cuando la sesion pasa a ser parte de tu historial. Saber que paso, que neumaticos funcionaron y que setup se sintio bien crea una mejor memoria de equipo para la siguiente sesion."]
        ]
      },
      "different-from-telemetry-app": {
        title: "Que hace diferente a Jax de una app de telemetria",
        date: "Articulo inicial",
        summary: "Jax no trata solo de numeros. Combina dashboard, alertas de voz, contexto de muro de pits y diario de carreras.",
        body: [
          ["La telemetria es el punto de partida", "Los datos de telemetria son utiles, pero los numeros brutos por si solos no hacen mas rapido a un piloto. El producto debe convertir datos en timing, alertas, historial y decisiones."],
          ["La capa de ingeniero de carrera", "Las alertas de voz de Jax estan pensadas para comunicar informacion util mientras miras la pista: neumaticos, combustible, deltas, penalizaciones, banderas y eventos."],
          ["La capa de cuaderno de equipo", "El historial de sesiones ayuda a recordar que setup, compuesto y estrategia funcionaron en una pista en vez de empezar desde cero cada fin de semana."]
        ]
      },
      "league-race-weekend": {
        title: "Como preparar un fin de semana de carrera en liga",
        date: "Articulo inicial",
        summary: "Usa tus sesiones pasadas, notas de setup, plan de neumaticos y clima para llegar mejor preparado.",
        body: [
          ["Revisar la pista", "Empieza por lo que ya sabes: tiempos anteriores, notas de setup, comportamiento de neumaticos, combustible, penalizaciones y clima de sesiones pasadas."],
          ["Crear un plan simple", "Define setup inicial, compuesto para el primer stint, objetivo de combustible y alertas de voz antes de salir a pista."],
          ["Registrar lo que cambia", "Despues del evento, anota lo que te sorprendio. En ligas, mejorar suele depender de conservar detalles que normalmente olvidarias."]
        ]
      },
      "fanatec-wheel-tips": {
        title: "Consejos Fanatec para pilotos F1 de consola",
        date: "Articulo inicial",
        summary: "Habitos practicos para pilotos de consola cuyo volante puede ocultar el dashboard del juego.",
        body: [
          ["Mantener la pantalla legible", "La posicion del volante, el campo de vision y la camara cockpit pueden tapar informacion importante. Una segunda pantalla te da mas libertad para usar la vista que prefieres."],
          ["Mapear lo importante", "Pon las acciones frecuentes donde tus manos descansan naturalmente: diferencial, balance de freno, overtake, radio y navegacion."],
          ["Usar Jax para la capa faltante", "Deja que el volante maneje los inputs de conduccion y que Jax maneje datos legibles, alertas utiles y memoria de sesion."]
        ]
      }
    }
  };
}

function translateLegalTitle(lang, title) {
  const fr = { "Data Jax receives": "Donnees recues par Jax", "Session and journal data": "Donnees de session et journal", "Local storage and future sync": "Stockage local et future synchro", "Support messages": "Messages au support", "No sale of personal data": "Aucune vente de donnees personnelles", "Third-party services": "Services tiers", "Your choices": "Vos choix", "Contact": "Contact" };
  const es = { "Data Jax receives": "Datos que recibe Jax", "Session and journal data": "Datos de sesion y diario", "Local storage and future sync": "Almacenamiento local y futura sincronizacion", "Support messages": "Mensajes de soporte", "No sale of personal data": "No vendemos datos personales", "Third-party services": "Servicios de terceros", "Your choices": "Tus opciones", "Contact": "Contacto" };
  return (lang === "fr" ? fr : es)[title] || title;
}

function translateLegalBody(lang, body) {
  if (lang === "fr") return body
    .replace("Jax can receive telemetry data from supported racing games on your local network. This may include speed, throttle, brake, gear, lap timing, tyre state, fuel, penalties, flags, weather, and race events.", "Jax peut recevoir des donnees de telemetrie de jeux compatibles sur votre reseau local. Cela peut inclure vitesse, acceleration, frein, rapport, chronos, pneus, essence, penalites, drapeaux, meteo et evenements.")
    .replace("The app may store session history, setup notes, tyre choices, fuel information, penalties, weather, and track notes locally on your device so you can review past sessions.", "L'app peut stocker localement l'historique de session, les notes de reglages, les choix de pneus, l'essence, les penalites, la meteo et les notes de piste.")
    .replace("Current session and journal features are designed around local storage. If optional cloud sync is enabled later, the app will explain what syncs and will update this policy before those features are used.", "Les fonctions actuelles sont concues autour du stockage local. Si une synchro nuage optionnelle est ajoutee, l'app expliquera ce qui est synchronise et cette politique sera mise a jour.")
    .replace("If you contact support, we receive the information you choose to send, such as your email address, device, app version, and issue details.", "Si vous contactez le support, nous recevons les informations que vous choisissez d'envoyer, comme votre courriel, appareil, version de l'app et details du probleme.")
    .replace("Camilore does not sell your personal data. Jax is not an advertising product.", "Camilore ne vend pas vos donnees personnelles. Jax n'est pas un produit publicitaire.")
    .replace("App distribution, purchases, crash reports, analytics, or beta testing may involve platform providers such as Apple or other service providers. These services process data under their own terms and privacy policies.", "La distribution, les achats, rapports de crash, analyses ou tests beta peuvent impliquer Apple ou d'autres fournisseurs, selon leurs propres conditions et politiques.")
    .replace("You can delete local app data by using in-app delete controls where available or by removing the app from your device. Contact support for privacy questions.", "Vous pouvez supprimer les donnees locales avec les controles de l'app lorsqu'ils existent ou en retirant l'app de votre appareil. Contactez le support pour toute question.")
    .replace("For privacy questions, contact support@jaxmaxdelta.com.", "Pour les questions de confidentialite, contactez support@jaxmaxdelta.com.");
  return body
    .replace("Jax can receive telemetry data from supported racing games on your local network. This may include speed, throttle, brake, gear, lap timing, tyre state, fuel, penalties, flags, weather, and race events.", "Jax puede recibir telemetria de juegos compatibles en tu red local. Esto puede incluir velocidad, acelerador, freno, marcha, tiempos, neumaticos, combustible, penalizaciones, banderas, clima y eventos.")
    .replace("The app may store session history, setup notes, tyre choices, fuel information, penalties, weather, and track notes locally on your device so you can review past sessions.", "La app puede guardar localmente historial de sesiones, notas de setup, neumaticos, combustible, penalizaciones, clima y notas de pista.")
    .replace("Current session and journal features are designed around local storage. If optional cloud sync is enabled later, the app will explain what syncs and will update this policy before those features are used.", "Las funciones actuales estan pensadas para almacenamiento local. Si luego hay cloud sync opcional, la app explicara que se sincroniza y esta politica se actualizara.")
    .replace("If you contact support, we receive the information you choose to send, such as your email address, device, app version, and issue details.", "Si contactas soporte, recibimos la informacion que eliges enviar, como email, dispositivo, version de app y detalles del problema.")
    .replace("Camilore does not sell your personal data. Jax is not an advertising product.", "Camilore no vende tus datos personales. Jax no es un producto publicitario.")
    .replace("App distribution, purchases, crash reports, analytics, or beta testing may involve platform providers such as Apple or other service providers. These services process data under their own terms and privacy policies.", "La distribucion, compras, reportes de fallos, analitica o beta testing pueden involucrar Apple u otros proveedores, bajo sus propias politicas.")
    .replace("You can delete local app data by using in-app delete controls where available or by removing the app from your device. Contact support for privacy questions.", "Puedes borrar datos locales usando controles de la app si existen o eliminando la app del dispositivo. Contacta soporte por privacidad.")
    .replace("For privacy questions, contact support@jaxmaxdelta.com.", "Para preguntas de privacidad, contacta support@jaxmaxdelta.com.");
}

function translateTermsTitle(lang, title) {
  const fr = { "Independent product": "Produit independant", "Use of the app": "Utilisation de l'app", "No guarantee of race outcome": "Aucune garantie de resultat", "Telemetry compatibility": "Compatibilite telemetrie", "Early access and placeholders": "Acces anticipe et liens temporaires", "Contact": "Contact" };
  const es = { "Independent product": "Producto independiente", "Use of the app": "Uso de la app", "No guarantee of race outcome": "Sin garantia de resultado", "Telemetry compatibility": "Compatibilidad de telemetria", "Early access and placeholders": "Acceso anticipado y placeholders", "Contact": "Contacto" };
  return (lang === "fr" ? fr : es)[title] || title;
}

function translateTermsBody(lang, body) {
  if (lang === "fr") return body
    .replace("Jax Max Delta is an independent product by Camilore and is not affiliated with EA, Formula 1, FIA, Codemasters, Fanatec, Sony, Microsoft, Xbox, PlayStation, or any other referenced brand.", "Jax Max Delta est un produit independant de Camilore et n'est pas affilie a EA, Formula 1, FIA, Codemasters, Fanatec, Sony, Microsoft, Xbox, PlayStation ou toute autre marque mentionnee.")
    .replace("Use Jax responsibly and only where second-screen telemetry and audio alerts are allowed by your event, league, platform, and game rules.", "Utilisez Jax de facon responsable et seulement lorsque la telemetrie second ecran et les alertes audio sont permises par votre ligue, plateforme et jeu.")
    .replace("Jax provides information and coaching prompts, but you remain responsible for driving decisions, strategy calls, and setup choices.", "Jax fournit des informations et alertes, mais vous restez responsable de vos decisions de pilotage, strategie et reglages.")
    .replace("Compatibility depends on supported racing games, telemetry settings, local network conditions, devices, and platform behavior. Features may change over time.", "La compatibilite depend des jeux, reglages de telemetrie, reseau local, appareils et plateformes. Les fonctions peuvent changer.")
    .replace("Some links, services, and roadmap items may be placeholders during early access and may change before public release.", "Certains liens, services et elements de feuille de route peuvent etre temporaires durant l'acces anticipe.")
    .replace("Questions about these terms can be sent to support@jaxmaxdelta.com.", "Les questions peuvent etre envoyees a support@jaxmaxdelta.com.");
  return body
    .replace("Jax Max Delta is an independent product by Camilore and is not affiliated with EA, Formula 1, FIA, Codemasters, Fanatec, Sony, Microsoft, Xbox, PlayStation, or any other referenced brand.", "Jax Max Delta es un producto independiente de Camilore y no esta afiliado con EA, Formula 1, FIA, Codemasters, Fanatec, Sony, Microsoft, Xbox, PlayStation ni otra marca mencionada.")
    .replace("Use Jax responsibly and only where second-screen telemetry and audio alerts are allowed by your event, league, platform, and game rules.", "Usa Jax responsablemente y solo donde telemetria de segunda pantalla y alertas de audio esten permitidas.")
    .replace("Jax provides information and coaching prompts, but you remain responsible for driving decisions, strategy calls, and setup choices.", "Jax ofrece informacion y prompts, pero las decisiones de manejo, estrategia y setup siguen siendo tuyas.")
    .replace("Compatibility depends on supported racing games, telemetry settings, local network conditions, devices, and platform behavior. Features may change over time.", "La compatibilidad depende de juegos, ajustes de telemetria, red local, dispositivos y plataformas. Las funciones pueden cambiar.")
    .replace("Some links, services, and roadmap items may be placeholders during early access and may change before public release.", "Algunos enlaces, servicios y items del roadmap pueden ser temporales durante acceso anticipado.")
    .replace("Questions about these terms can be sent to support@jaxmaxdelta.com.", "Preguntas sobre estos terminos: support@jaxmaxdelta.com.");
}

function route(lang, file = "index.html") {
  const depth = window.location.pathname.includes("/blog/") ? "../" : "";
  return `${depth}${file}`;
}

function asset(path) {
  return window.location.pathname.includes("/blog/") ? `../../assets/${path}` : `../assets/${path}`;
}

function boot() {
  const root = document.getElementById("app");
  const lang = document.documentElement.lang || "en";
  const page = document.body.dataset.page || "home";
  const slug = document.body.dataset.slug || "";
  const t = copy[lang];
  document.title = pageTitle(t, page, slug);
  setMeta("description", pageDescription(t, page, slug));
  setOg(t, page, slug);
  root.innerHTML = `${header(t, lang, page)}<main>${renderPage(t, lang, page, slug)}</main>${footer(t, lang)}`;
  setupMobileNav();
}

function pageTitle(t, page, slug) {
  if (page === "post") return `${t.blog.posts[slug].title} - Jax Max Delta`;
  const titles = { home: t.meta.title, features: t.features.title, how: t.how.title, support: t.support.title, blog: t.blog.title, privacy: t.privacy.title, terms: t.terms.title, roadmap: t.roadmap.title };
  return page === "home" ? t.meta.title : `${titles[page]} - Jax Max Delta`;
}

function pageDescription(t, page, slug) {
  if (page === "post") return t.blog.posts[slug].summary;
  const descriptions = { home: t.meta.description, features: t.features.intro, how: t.how.intro, support: t.support.intro, blog: t.blog.intro, privacy: t.privacy.intro, terms: t.terms.intro, roadmap: t.roadmap.intro };
  return descriptions[page] || t.meta.description;
}

function setMeta(name, value) {
  const node = document.querySelector(`meta[name="${name}"]`);
  if (node) node.setAttribute("content", value);
}

function setOg(t, page, slug) {
  const values = {
    "og:title": pageTitle(t, page, slug),
    "og:description": pageDescription(t, page, slug),
    "twitter:title": pageTitle(t, page, slug),
    "twitter:description": pageDescription(t, page, slug)
  };
  Object.entries(values).forEach(([property, value]) => {
    const selector = property.startsWith("twitter") ? `meta[name="${property}"]` : `meta[property="${property}"]`;
    const node = document.querySelector(selector);
    if (node) node.setAttribute("content", value);
  });
}

function header(t, lang, page) {
  const links = [["home", "index.html"], ["features", "features.html"], ["how", "how-to.html"], ["support", "support.html"], ["blog", "blog.html"], ["roadmap", "roadmap.html"]];
  const blogSlug = document.body.dataset.slug ? `${document.body.dataset.slug}.html` : "blog.html";
  const file = page === "post" ? `blog/${blogSlug}` : (page === "how" ? "how-to.html" : `${page}.html`).replace("home.html", "index.html");
  return `
    <header class="site-header">
      <div class="wrap nav">
        <a class="brand" href="${route(lang)}" aria-label="Jax Max Delta">
          <img class="brand-mark" src="${asset("jax_helmet.png")}" alt="">
          <span class="brand-parent">${t.common.parent}</span>
          <span class="brand-name">JAX MA<span class="brand-x">X</span> DELTA</span>
        </a>
        <button class="mobile-nav-toggle" type="button" aria-label="Menu" aria-expanded="false"><span></span></button>
        <div class="nav-right">
          <nav class="nav-links" aria-label="Main navigation">
            ${links.map(([key, href]) => `<a href="${route(lang, href)}" ${page === key || (page === "post" && key === "blog") ? 'aria-current="page"' : ""}>${t.nav[key]}</a>`).join("")}
          </nav>
          <div class="lang-switcher" aria-label="Language">
            ${SITE.langs.map((code) => `<a class="${code === lang ? "active" : ""}" href="${langSwitchHref(code, file)}">${code.toUpperCase()}</a>`).join("")}
          </div>
        </div>
      </div>
    </header>`;
}

function setupMobileNav() {
  const headerNode = document.querySelector(".site-header");
  const toggle = document.querySelector(".mobile-nav-toggle");
  if (!headerNode || !toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = headerNode.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-locked", isOpen);
  });
  document.querySelectorAll(".nav-links a, .lang-switcher a").forEach((link) => {
    link.addEventListener("click", () => {
      headerNode.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-locked");
    });
  });
}

function langSwitchHref(lang, file) {
  const depth = window.location.pathname.includes("/blog/") ? "../../" : "../";
  return `${depth}${lang}/${file}`;
}

function footer(t, lang) {
  return `
    <footer class="footer">
      <div class="wrap footer-inner">
        <div>
          <strong>${t.common.app}</strong>
          <p>${t.common.footerLead}</p>
        </div>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="${route(lang, "features.html")}">${t.nav.features}</a>
          <a href="${route(lang, "how-to.html")}">${t.nav.how}</a>
          <a href="${route(lang, "support.html")}">${t.nav.support}</a>
          <a href="${route(lang, "privacy.html")}">${t.nav.privacy}</a>
          <a href="${route(lang, "terms.html")}">${t.nav.terms}</a>
        </nav>
        <p class="footer-disclaimer">${t.common.disclaimer}</p>
      </div>
    </footer>`;
}

function renderPage(t, lang, page, slug) {
  const renderers = { home, features, how, support, blog, privacy, terms, roadmap, post };
  return renderers[page](t, lang, slug);
}

function home(t, lang) {
  return `
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <div class="eyebrow">${t.home.kicker}</div>
          <h1>${t.home.title}</h1>
          <p class="hero-position">${t.home.position}</p>
          <p class="hero-subtitle">${t.home.intro}</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#early">${t.common.ctaJoin}</a>
            <a class="btn btn-secondary" href="${route(lang, "features.html")}">${t.common.ctaFeatures}</a>
            <a class="btn btn-secondary" href="${route(lang, "how-to.html")}">${t.common.ctaHow}</a>
          </div>
        </div>
        <div class="hero-visual" aria-label="Jax Max Delta app visuals">
          <div class="device-stage">
            <div class="phone phone-main"><img src="${asset(lang === "fr" ? "jax_fr_splashscreen.png" : lang === "es" ? "jax_es_splashscreen.png" : "jax_en_splashscreen.png")}" alt="Jax Max Delta app screen"></div>
            <div class="phone phone-side"><img src="${asset("jax_en_splashscreen.png")}" alt="Jax Max Delta dashboard preview"></div>
            <div class="helmet-float"><img src="${asset("jax_helmet.png")}" alt="Jax Max Delta helmet"></div>
            <div class="telemetry-card">${t.home.telemetry.map(([k, v]) => `<div class="telemetry-row"><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>
          </div>
        </div>
      </div>
    </section>
    ${section(t.home.whoTitle, t.home.whoIntro, cards(t.home.who))}
    ${splitSection(t.home.benefitsTitle, t.home.benefitsIntro, t.home.benefits, "jax.png", "Jax Max Delta visual")}
    ${section(t.home.featuresTitle, t.home.featuresIntro, featureCards(t.home.pillars || t.features.items.slice(0, 6)))}
    <section class="section" id="platforms"><div class="wrap split"><div><div class="section-kicker">${t.home.supportedTitle}</div><h2>${t.home.supportedTitle}</h2><p class="lead">${t.home.supportedBody}</p><div class="logo-strip"><span class="pill">iPhone</span><span class="pill">iPad</span><span class="pill">Xbox</span><span class="pill">PlayStation</span><span class="pill">PC</span><span class="pill">UDP telemetry</span><span class="pill">Supported racing games</span></div></div><div class="media-panel"><img src="${asset("jax_baseball_cap _and_more.png")}" alt="Jax Max Delta brand merchandise"></div></div></section>
    <section class="section" id="early"><div class="wrap"><div class="panel"><div class="section-kicker">${t.home.earlyTitle}</div><h2>${t.home.earlyTitle}</h2><p class="lead">${t.home.earlyBody}</p><div class="cta-row"><a class="btn btn-primary" href="https://testflight.apple.com/join/placeholder">${t.common.ctaJoin}</a><a class="btn btn-secondary" href="https://apps.apple.com/app/id-placeholder">${t.common.ctaTry}</a><a class="btn btn-secondary" href="${route(lang, "support.html")}">${t.common.ctaSupport}</a></div><p class="notice">${t.common.placeholder}</p></div></div></section>
    ${section(t.home.quickLinksTitle, "", cards(t.home.quickLinks.map(([a,b,c]) => [a,b,route(lang,c)]), true))}
  `;
}

function features(t) {
  return `${pageHero(t.common.eyebrow, t.features.title, t.features.intro)}${section(t.features.current, "", featureCards(t.features.items))}${section(t.features.future, "", cards(t.features.roadmap))}`;
}

function how(t) {
  return `${pageHero(t.common.eyebrow, t.how.title, t.how.intro)}<section class="section"><div class="wrap"><div class="step-list">${t.how.steps.map(([a,b], i) => `<article class="step-item"><span class="step-num">${i + 1}</span><h3>${a}</h3><p>${b}</p></article>`).join("")}</div></div></section>${section(t.how.troubleTitle, "", cards(t.how.trouble))}`;
}

function support(t, lang) {
  return `${pageHero(t.common.eyebrow, t.support.title, t.support.intro)}<section class="section"><div class="wrap page-grid"><div><h2>${t.support.faqTitle}</h2><div class="faq-list">${t.support.faq.map(([q,a]) => `<details class="faq-item"><summary><strong>${q}</strong></summary><p>${a}</p></details>`).join("")}</div></div><aside class="panel"><h2>${t.support.feedbackTitle}</h2><p>${t.support.feedbackBody}</p><p><a href="mailto:${SITE.contact}">${SITE.contact}</a></p><a class="btn btn-primary" href="mailto:${SITE.contact}">${t.common.ctaSupport}</a><h2>${t.support.knownTitle}</h2><ul>${t.support.known.map((x) => `<li>${x}</li>`).join("")}</ul><a href="${route(lang, "how-to.html")}">${t.nav.how}</a> · <a href="${route(lang, "privacy.html")}">${t.nav.privacy}</a></aside></div></section>`;
}

function blog(t, lang) {
  return `${pageHero(t.common.eyebrow, t.blog.title, t.blog.intro)}<section class="section"><div class="wrap grid-2">${SITE.posts.map((slug) => postCard(t, lang, slug)).join("")}</div></section>`;
}

function post(t, lang, slug) {
  const p = t.blog.posts[slug] || t.blog.posts[SITE.posts[0]];
  return `${pageHero(t.blog.title, p.title, p.summary)}<section class="section"><div class="wrap page-grid"><article class="panel prose"><p class="post-meta">${p.date}</p>${p.body.map(([h,b]) => `<h2>${h}</h2><p>${b}</p>`).join("")}</article><aside class="panel"><h2>${t.blog.title}</h2>${SITE.posts.filter((s) => s !== slug).map((s) => `<p><a href="${s}.html">${t.blog.posts[s].title}</a></p>`).join("")}<a class="btn btn-secondary" href="../blog.html">${t.nav.blog}</a></aside></div></section>`;
}

function privacy(t) {
  return legalPage(t.common.eyebrow, t.privacy);
}

function terms(t) {
  return legalPage(t.common.eyebrow, t.terms);
}

function roadmap(t) {
  return `${pageHero(t.common.eyebrow, t.roadmap.title, t.roadmap.intro)}<section class="section"><div class="wrap timeline">${t.roadmap.groups.map(([name, items]) => `<article class="timeline-item"><span class="timeline-tag">${name}</span><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></article>`).join("")}</div></section>`;
}

function legalPage(kicker, data) {
  return `${pageHero(kicker, data.title, data.intro)}<section class="section"><div class="wrap"><article class="panel legal">${data.updated ? `<p class="post-meta">${data.updated}</p>` : ""}${data.sections.map(([h,b]) => `<h2>${h}</h2><p>${b}</p>`).join("")}</article></div></section>`;
}

function pageHero(kicker, title, intro) {
  return `<section class="page-hero"><div class="wrap"><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${intro}</p></div></section>`;
}

function section(title, intro, body) {
  return `<section class="section"><div class="wrap"><div class="section-heading"><div><div class="section-kicker">Jax Max Delta</div><h2>${title}</h2></div>${intro ? `<p>${intro}</p>` : "<span></span>"}</div>${body}</div></section>`;
}

function cards(items, linked = false) {
  return `<div class="grid-4">${items.map(([title, body, href]) => `<article class="card"><div class="card-accent"></div><h3>${linked && href ? `<a href="${href}">${title}</a>` : title}</h3><p>${body}</p></article>`).join("")}</div>`;
}

function featureCards(items) {
  return `<div class="grid-2">${items.map(([title, body]) => `<article class="feature-card"><div class="card-accent"></div><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>`;
}

function splitSection(title, intro, items, image, alt) {
  return `<section class="section"><div class="wrap split"><div><div class="section-kicker">Jax Max Delta</div><h2>${title}</h2><p class="lead">${intro}</p><div class="problem-list">${items.map(([a,b]) => `<article class="problem-item"><h3>${a}</h3><p>${b}</p></article>`).join("")}</div></div><div class="media-panel"><img src="${asset(image)}" alt="${alt}"></div></div></section>`;
}

function postCard(t, lang, slug) {
  const p = t.blog.posts[slug];
  return `<article class="post-card"><p class="post-meta">${p.date}</p><h3>${p.title}</h3><p>${p.summary}</p><a class="btn btn-secondary" href="${route(lang, `blog/${slug}.html`)}">${t.common.readPost}</a></article>`;
}

document.addEventListener("DOMContentLoaded", boot);
