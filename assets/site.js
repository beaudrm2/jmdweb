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
        ["Privacy", "Plain-language details on telemetry, on-device storage, iCloud Backup, and what never leaves your phone.", "privacy.html"]
      ]
    },
    features: {
      title: "Race with more than a dashboard.",
      intro: "Jax Max Delta is your cockpit display, race-engineer voice alerts, virtual pit wall crew, and team notebook for sim racers who want useful information without losing focus.",
      current: "Current and grounded",
      future: "Future roadmap",
      groups: [
        {
          title: "Live Dashboard",
          body: "Your full cockpit display on a second screen. Keep critical race data visible without changing camera view or cluttering your in-game HUD.",
          items: [
            "Speed, gear, throttle, and brake in real time",
            "Tyre temperatures and wear for all four corners — with colour-coded heat warnings",
            "Fuel laps remaining with surplus or deficit at a glance",
            "Delta to leader or reference lap",
            "Current, last, personal best, and session fastest lap times",
            "Sector splits S1/S2/S3 per lap",
            "Flag state, ERS and boost bar, and pit window"
          ],
          screenshots: [
            ["main_dash_yellow.png", "Yellow flag at Catalunya — full dashboard view"],
            ["main_dash_hot_tyre.png", "Tyre heat warning — rear left running hot"]
          ]
        },
        {
          title: "Jax Voice Alerts",
          body: "Your race engineer in your ear. Jax calls out the information you need at the moment you need it, without requiring you to look away from the track.",
          items: [
            "Tyre temperature and wear alerts by corner",
            "Fuel delta and strategy prompts",
            "Lap delta and consistency callouts",
            "Penalty and flag announcements",
            "Safety Car and VSC entry and exit notifications",
            "Pit window and session event reminders"
          ],
          screenshots: [
            ["main_dash_green.png", "Green flag lap — race engineer voice layer active"]
          ]
        },
        {
          title: "Virtual Pit Wall",
          body: "The full race view your cockpit does not have. Six tabs cover everything a real pit wall would track across a race.",
          items: [
            "Full race leaderboard with positions, gaps, sector splits, and tyre compounds",
            "Live track map showing every car's position on the circuit",
            "VSC Delta overlay to help you manage your gap during safety car periods",
            "Car setup reference for the current session",
            "Game-level session metadata and telemetry",
            "Technique coaching cards for corner work, ERS, and DRS"
          ],
          screenshots: [
            ["pit_wall_timing_2.png", "Timing — Catalunya race leaderboard with compounds"],
            ["pit_wall_map_monaco.png", "Map — live car positions at Monaco"]
          ]
        },
        {
          title: "Lap Trace and Analysis",
          body: "Inspect your driving inputs lap by lap. See throttle, brake, and steering across the full circuit, or compare two laps side by side to find where time is gained or lost.",
          items: [
            "Throttle, brake, and steering trace per lap",
            "Speed trace across the lap distance",
            "DRS and ERS activation zones per lap",
            "Lap-to-lap delta comparison — select any two laps",
            "Zoom and scrub to any section of the circuit",
            "Fastest lap highlighted as reference"
          ],
          screenshots: [
            ["pit_wall_trace_2.png", "Trace — throttle, brake, and steering at Catalunya"],
            ["pit_wall_coach_1.png", "Coach — technique cards for corner work and ERS"]
          ]
        },
        {
          title: "Session History and Racing Journal",
          body: "Every completed session is saved automatically. Review what happened lap by lap, how your setups performed, and what the conditions were — so your next weekend starts with memory instead of guesswork.",
          items: [
            "Chronological race event log: Jax launch notes, fastest laps, pit stops, setup changes, penalties, and damage updates",
            "Named setups by lap range with all parameters: wings, differential, brake bias, ride height, and tyre pressures",
            "Weather timeline — conditions and temperatures by lap range",
            "Session rules: AI difficulty, damage mode, safety car, and parc fermé settings",
            "Result, fastest lap, and race outcome summary",
            "League and season tracking across sessions"
          ],
          screenshots: [
            ["past_session_highlights.png", "Highlights — race event log at Monza"],
            ["past_session_setups.png", "Setup — named setups by lap range"]
          ]
        },
        {
          title: "Setup Memory and Race Context",
          body: "Track your setup choices, tyre compounds, fuel loads, and race conditions across every session. Build the memory a real team notebook would keep.",
          items: [
            "Setup parameters saved per session and lap range",
            "Tyre compound, stint length, and wear pattern tracking",
            "Fuel load and usage history",
            "VSC Delta overlay — real-time gap management during Virtual Safety Car",
            "Penalty and flag event log per session",
            "Session conditions recorded for future reference"
          ],
          screenshots: [
            ["past_session_conditions.png", "Conditions — weather timeline and session rules"],
            ["vsc_delta_orange.png", "VSC Delta — live gap management during safety car"]
          ]
        }
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
      sections: [
        {
          kicker: "Getting started",
          title: "Starting the App",
          intro: "Install Jax and open it before you go on track. The start screen gives you two paths: connect to a live session or review your session history.",
          steps: [
            ["Install Jax", "Install Jax Max Delta through TestFlight or the App Store, then open it on your iPhone or iPad before you enter the track."],
            ["Enter a live session", "Tap Enter Live Session to open the connection screen. Jax starts listening for telemetry from your game immediately."],
            ["Or review past sessions", "Tap Session History to browse your saved sessions, setups, lap traces, conditions, and race event logs."]
          ],
          portrait: true,
          screenshots: [["main_screen.png", "Start screen — Enter Live Session or Session History"]]
        },
        {
          kicker: "UDP setup",
          title: "Setting up UDP and Jax",
          intro: "Jax receives telemetry from your game over your local Wi-Fi network using the UDP protocol. This is a one-time setup in your game settings.",
          steps: [
            ["Same network", "Connect your console or PC and your iPhone or iPad to the same local Wi-Fi network or network segment."],
            ["Find your device IP", "On your iPhone or iPad, go to Settings → Wi-Fi → tap your network name to see your local IP address. You will need this for the game."],
            ["Enable UDP in your game", "In your EA SPORTS F1 game, open Settings → Telemetry Settings and enable UDP Telemetry Output."],
            ["Set the destination", "Enter your device's local IP address as the telemetry IP destination. Set the UDP port to 20777."],
            ["Confirm in Jax", "The Live Session screen shows Listening on 0.0.0.0:20777. Once your game sends data, the session type and track are detected automatically and the Open Live Dashboard button activates."]
          ],
          portrait: true,
          screenshots: [["waiting_for_live_session.png", "Live Session screen — listening for telemetry on port 20777"]]
        },
        {
          kicker: "Live data",
          title: "Main Dashboard",
          intro: "The dashboard displays live race data across three panels. Keep your device visible near your wheel so you can read it without looking away from the track.",
          steps: [
            ["Left panel — car state", "Tyre temperatures and wear for all four corners (FL/FR/RL/RR), brake bias (BB), differential (DIFF), wing angle (WING), damage (DMG), and air and track temperatures."],
            ["Center panel — flag and lap", "The current flag state (GREEN/YELLOW/SC/VSC), lap type (Outlap, Flying, Pit), lap number, speed in km/h, and the ERS or boost bar."],
            ["Right panel — lap times", "Fuel laps remaining (positive means surplus), current lap (NOW), last lap (LAST), personal best (BEST), session fastest (FASTEST), and sector splits S1/S2/S3."],
            ["Top bar", "Position, lap count, per-tyre wear at a glance, and the delta to the leader or reference lap."]
          ],
          legend: [
            ["BB", "Brake bias — front/rear split (%)"],
            ["DIFF", "Differential — on/off throttle (%)"],
            ["FL/FR", "Front Left/Right tyre temp + wear"],
            ["RL/RR", "Rear Left/Right tyre temp + wear"],
            ["WING", "Front wing angle"],
            ["DMG", "Car body damage (%)"],
            ["AIR", "Air temperature"],
            ["TRK", "Track temperature"],
            ["ERS", "Energy recovery — charge level / mode"],
            ["DRS", "Drag Reduction System — active / inactive"],
            ["FUEL", "Fuel laps remaining (+ = surplus)"],
            ["PIT", "Pit window / stop number"],
            ["PEN", "Time penalty in seconds"],
            ["W%", "Rain / weather intensity"],
            ["SC", "Safety Car on track"],
            ["VSC", "Virtual Safety Car active"],
            ["S1/S2/S3", "Sector 1, 2, 3 split times"]
          ],
          screenshots: [
            ["main_dash_yellow.png", "Dashboard — yellow flag at Catalunya"],
            ["main_dash_green.png", "Dashboard — green flag with ERS boost active"]
          ]
        },
        {
          kicker: "Pit wall",
          title: "Pit Wall",
          intro: "The Pit Wall gives you a full race overview in six tabs. Access it from the dashboard or from the start screen.",
          tabs: ["TIMING", "MAP", "TRACE", "SETUP", "GAME", "COACH"],
          steps: [
            ["Timing", "Full race leaderboard: position, driver, best lap, gap to leader, sector splits, current lap, tyre compound, and stint status for every car on track."],
            ["Map", "A live track map showing the position of every car on the circuit, updating in real time."],
            ["Trace", "Throttle, brake, and steering inputs plotted lap by lap. Select any lap to inspect it, or compare two laps side by side to find a time delta."],
            ["Setup", "Your car setup values for reference during the session. A VSC Delta overlay appears automatically during Virtual Safety Car periods to help you manage your gap."],
            ["Game", "Game-level telemetry and session metadata from the current session."],
            ["Coach", "On-screen technique cards: Corner Entry, Corner Exit, Defending, Wet Driving, ERS, and DRS — reminders you can act on without leaving the session."]
          ],
          screenshots: [
            ["pit_wall_timing_1.png", "Timing — race leaderboard with gaps and compounds"],
            ["pit_wall_map_monaco.png", "Map — live car positions at Monaco"],
            ["pit_wall_trace_1.png", "Trace — lap comparison with throttle and brake"],
            ["pit_wall_coach_1.png", "Coach — technique cards for corner work and ERS"]
          ]
        },
        {
          kicker: "Session history",
          title: "Past Sessions",
          intro: "Every completed session is saved automatically. Open Session History from the start screen to review any past race, qualifying, or practice.",
          tabs: ["OVERVIEW", "RESULT", "SETUP", "CONDITIONS", "HIGHLIGHTS"],
          steps: [
            ["Overview", "Track name, session type, formula, start and end time, duration, laps completed, and the league or season the session belongs to."],
            ["Result", "Your finishing position, fastest lap time, and race outcome summary."],
            ["Setup", "Named setups used during the session, organized by lap range — wing angles, differential, brake bias, ride height, and tyre pressures for each stint."],
            ["Conditions", "Session rules captured at race time: AI difficulty, car damage mode, collision settings, safety car rules, parc fermé, and the full weather timeline by lap range."],
            ["Highlights", "A chronological race event log: Jax launch note, fastest laps set by you or the field, pit stops, setup changes, penalties, damage updates, and rival events."]
          ],
          screenshots: [
            ["past_session_highlights.png", "Highlights — race event log at Monza"],
            ["past_session_setups.png", "Setup — named setups by lap range"],
            ["past_session_conditions.png", "Conditions — session rules and weather timeline"],
            ["Past_session_overview.png", "Overview — full session summary"]
          ]
        },
        {
          kicker: "Configuration",
          title: "Settings",
          intro: "Tap the gear icon on the start screen to open settings. Key areas are the dashboard abbreviations guide, Jax voice alert settings, and UDP port configuration.",
          steps: [
            ["Dashboard abbreviations guide", "The Plus tab shows the meaning of every abbreviation used on the live dashboard — BB, DIFF, W, PEN, SC, VSC, ERS, DRS — so nothing on screen is a mystery."],
            ["Jax voice alerts", "In the Jax tab, choose which alert categories to hear: tyres, fuel, delta, penalties, flags, and session events. Adjust volume and timing thresholds per category."],
            ["UDP port", "The default port is 20777. If your game version uses a different port, update it here. The Live Session screen always shows your device's current listening address."],
            ["Audio troubleshooting", "If voice alerts are not playing, check that your device is not in silent mode, the in-app volume is not muted, and the relevant alert categories are enabled in Jax settings."]
          ],
          portrait: true,
          screenshots: [["IMG_8682.png", "Settings — dashboard abbreviations guide and UDP information"]]
        }
      ],
      troubleTitle: "Common troubleshooting",
      trouble: [
        ["No telemetry received", "Confirm UDP telemetry is enabled in your game, the destination IP matches your device, both devices are on the same network, and the UDP port is 20777."],
        ["Data stops mid-session", "Check that the device stayed on Wi-Fi, low power mode did not interrupt the app, and the console did not switch networks."],
        ["Wrong device IP", "Phone and tablet IP addresses can change between sessions. Recheck your Wi-Fi settings and update the telemetry destination in the game if needed."],
        ["Voice alerts not playing", "Check device volume, silent mode, app audio settings, and whether the relevant voice alert categories are enabled in Jax settings."]
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
        ["Where is my data stored?", "On your device. Session history, lap traces and setups live in the app's private storage. If iCloud is available, the app can also back up your session history and leagues into your own private iCloud container, which we cannot read. See the privacy policy for details."],
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
      intro: "Jax Max Delta has no accounts and asks you for no personal information. This policy explains what stays on your device, the few things that leave it — crash diagnostics, purchases, and a backup into your own private iCloud container — and how to delete everything.",
      updated: "Effective date: August 17, 2026",
      sections: [
        ["The short version", "Jax Max Delta has <strong>no user accounts</strong> and asks you for <strong>no personal information</strong>. Your telemetry, lap data, session history and car setups are stored <strong>on your device</strong>. We do not sell, rent or share your data, and we do not use it for advertising. Three things leave your device: <strong>crash diagnostics</strong>, <strong>purchase transactions</strong>, and — only if your device has iCloud available — a <strong>backup of your session history into your own private iCloud container</strong>, which we cannot read. You can delete everything at any time from inside the app, or by deleting the app."],
        ["What the app receives from your game", "Jax Max Delta listens on your local network for the UDP telemetry your F1 game broadcasts (EA F1 24, F1 25 and F1 26). That traffic travels only across your own network, from your console or PC to your phone. It is received by the app and never sent onward by it. It contains race data — lap times, speed, tyre state, positions, the names the game assigns to drivers in your session — and no information about you personally. The app does not transmit telemetry to us or to anyone else."],
        ["What is stored on your device", "The following stay in the app's private storage on your device: session history (tracks, session types, lap and sector times, positions, results, events, penalties, weather); lap traces (throttle, brake, steering, speed, gear, ERS, DRS samples); car setups captured from your sessions and your ratings of them; and your app preferences (connection host and port, game selection, language, units, Jax voice and coaching settings, data-retention setting). You control how long the heavier data is kept through <strong>Settings → SUPPORT</strong> (data capture and retention), and you can delete individual sessions or all of them at any time."],
        ["Purchases", "Subscriptions are sold by Apple and managed for us by RevenueCat, Inc. When you subscribe or restore a purchase, Apple and RevenueCat process the transaction and an anonymous app-installation identifier so the app knows whether your subscription is active. We never receive your payment details — Apple handles payment entirely. See <a href=\"https://www.apple.com/legal/privacy/\">Apple's privacy policy</a> and <a href=\"https://www.revenuecat.com/privacy\">RevenueCat's privacy policy</a>."],
        ["Crash and stability diagnostics", "The app uses Google Firebase Crashlytics to report crashes and errors so we can fix them. A crash report contains technical information — the error, the code path, device model, operating-system version, app version and an anonymous installation identifier. It does not contain your telemetry, your session history, your setups, or anything that identifies you personally. We do not use this data for advertising and it is not linked to an identity. See <a href=\"https://firebase.google.com/support/privacy\">Firebase privacy information</a>."],
        ["iCloud Backup of your session history", "If your device has iCloud enabled and available, the app can back up your session history and league data into <strong>the app's own private iCloud container</strong> (<code>iCloud.com.camilore.jaxmaxdelta</code>) inside <strong>your</strong> iCloud account. This is a shipped feature, so this policy states it plainly. The backup contains session records and leagues; it does <strong>not</strong> contain lap-trace or race-data files, which remain only on the device that captured them. The container belongs to your Apple Account and Apple provides the storage — <strong>we have no access to it</strong>, and we cannot read, list or recover your backups. The app keeps the most recent backup plus up to five dated copies and prunes older ones. Before restoring, the app writes a local safety copy on your device so a restore can be undone, and restoring never overwrites a session already on the device. To remove these backups, delete the app's data from iCloud in iOS Settings, or delete the app. Apple's handling of iCloud data is governed by Apple's privacy policy."],
        ["Exports you initiate", "You can export your session history to a file and share it through the iOS share sheet (Files, AirDrop, Messages, and so on). This happens only when you ask for it, the file goes wherever you send it, and it does not pass through us."],
        ["Support messages", "If you contact support, we receive only what you choose to send us — typically your email address, device model, app version and a description of the issue. We use it to answer you and to fix the problem, and for nothing else."],
        ["What we do not do", "No accounts, no sign-up, no email collection. No advertising, no ad identifiers, no IDFA, no ad networks. No cross-app or cross-site tracking, and no App Tracking Transparency prompt, because we do not track. No product analytics or behavioural telemetry sent to us. No selling, renting or sharing of your data with third parties. No location collection — the app does not request location access. No contacts, photos, microphone or camera access."],
        ["Legal bases (EEA/UK users)", "Where the GDPR applies, we rely on <strong>contract</strong> — processing purchase and subscription status so we can give you the features you paid for — and <strong>legitimate interests</strong> — crash diagnostics, to keep the app from failing on your device, balanced against the fact that the data is technical and not identity-linked. We do not process special categories of data and we do not carry out automated decision-making that produces legal effects."],
        ["Retention", "Data on your device is kept until you delete it, either by deleting sessions in the app, letting your retention setting prune trace data, or deleting the app. iCloud backups are kept in your own container until you delete them; the app itself keeps the latest plus five dated copies. Crash reports are retained by Firebase according to Google's published Crashlytics retention periods. Purchase records are retained by Apple and RevenueCat under their own policies."],
        ["Your rights", "Because we hold no account and no directory of users, most of your data is under your direct control: you can see it, export it and delete it inside the app. For the limited data our processors hold (crash diagnostics, purchase status), you can contact us at support@jaxmaxdelta.com and we will help you exercise your rights of access, correction, deletion, restriction, objection and portability where they apply. If you are in the EEA or UK you also have the right to complain to your data-protection authority. California residents: we do not sell or share personal information as those terms are defined by the CCPA/CPRA, and we do not offer financial incentives for data."],
        ["Children", "Jax Max Delta is rated 4+ and is safe for general audiences, but it is designed for sim racers and is not directed at children. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will delete it."],
        ["Android", "This section takes effect only when an Android version is published. When Jax Max Delta ships on Android, session data will be stored on the device in the same way, and Android's own backup mechanism (Android Auto Backup / Backup by Google One) may include app data in the backup held in your own Google account, under Google's terms and outside our access — the same posture as iCloud Backup on iOS."],
        ["International transfers", "Our processors (Apple, Google, RevenueCat) operate globally and may process data in the United States and elsewhere, under their own published safeguards and standard contractual clauses."],
        ["Changes to this policy", "If this policy changes, we will update the effective date at the top and publish the new version at this address. Material changes will also be noted in the app's release notes."],
        ["Contact", "Marc Beaudry, operating as Camilore — 47 rue de l'Etoile, Gatineau, Quebec, Canada, J9A 2X5. Email: support@jaxmaxdelta.com."]
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
      quickLinksTitle: "Continuer", quickLinks: [["Fonctions", "Explorez tableau de bord, alertes vocales, muret des puits virtuel, reglages, pneus, essence, penalites, drapeaux, meteo et journal.", "features.html"], ["Utilisation", "Configurez la telemetrie UDP, connectez votre appareil et depannez les problemes courants.", "how-to.html"], ["Support", "FAQ, problemes connus, retours de testeurs et contact.", "support.html"], ["Confidentialite", "Details clairs sur la telemetrie, le stockage sur l'appareil, la sauvegarde iCloud et ce qui ne quitte jamais votre telephone.", "privacy.html"]]
    },
    features: {
      title: "Plus qu'un tableau de bord.",
      intro: "Jax Max Delta est votre affichage cockpit sur second ecran, vos alertes vocales de style ingenieur, votre equipe virtuelle au muret des puits et votre carnet d'equipe.",
      current: "Actuel et concret",
      future: "Feuille de route",
      groups: [
        {
          title: "Tableau de bord en direct",
          body: "Votre affichage cockpit complet sur un second ecran. Gardez les donnees critiques visibles sans changer de camera ni encombrer le HUD du jeu.",
          items: [
            "Vitesse, rapport, acceleration et freinage en temps reel",
            "Temperatures et usure des pneus sur les quatre roues — avec alertes de chaleur en couleur",
            "Tours d'essence restants avec surplus ou deficit d'un coup d'oeil",
            "Delta par rapport au leader ou au tour de reference",
            "Tour actuel, dernier tour, meilleur personnel et plus rapide de la session",
            "Secteurs S1/S2/S3 par tour",
            "Etat du drapeau, barre ERS et boost, et fenetre d'arret"
          ],
          screenshots: [
            ["main_dash_yellow.png", "Drapeau jaune a Catalunya — tableau de bord complet"],
            ["main_dash_hot_tyre.png", "Alerte de chaleur pneu — arriere gauche en surchauffe"]
          ]
        },
        {
          title: "Alertes vocales Jax",
          body: "Votre ingenieur de course dans l'oreille. Jax annonce les informations utiles au bon moment, sans que vous ayez besoin de quitter la piste des yeux.",
          items: [
            "Alertes de temperature et d'usure des pneus par roue",
            "Alertes de delta d'essence et suggestions de strategie",
            "Alertes de delta au tour et de regularite",
            "Annonces de penalites et de drapeaux",
            "Notifications d'entree et de sortie de safety car et VSC",
            "Rappels de fenetre d'arret et d'evenements de session"
          ],
          screenshots: [
            ["main_dash_green.png", "Tour en vert — couche d'alertes vocales active"]
          ]
        },
        {
          title: "Muret des puits virtuel",
          body: "La vue de course complete que votre cockpit n'a pas. Six onglets couvrent tout ce qu'un vrai muret des puits suivrait pendant la course.",
          items: [
            "Classement complet avec positions, ecarts, secteurs et gommes",
            "Carte de piste en direct montrant la position de chaque voiture",
            "Overlay VSC Delta pour gerer votre ecart pendant les periodes de safety car virtuelle",
            "Reference des reglages de voiture pour la session en cours",
            "Metadonnees de session et telemetrie au niveau du jeu",
            "Fiches techniques pour les virages, l'ERS et le DRS"
          ],
          screenshots: [
            ["pit_wall_timing_2.png", "Timing — classement de course a Catalunya avec gommes"],
            ["pit_wall_map_monaco.png", "Map — positions en direct a Monaco"]
          ]
        },
        {
          title: "Trace et analyse de tour",
          body: "Inspectez vos entrees de pilotage tour par tour. Visualisez acceleration, freinage et direction sur tout le circuit, ou comparez deux tours pour trouver le delta.",
          items: [
            "Trace acceleration, freinage et direction par tour",
            "Trace de vitesse sur la distance du tour",
            "Zones d'activation DRS et ERS par tour",
            "Comparaison delta tour a tour — selectionnez deux tours",
            "Zoom et defilement sur n'importe quelle section du circuit",
            "Tour le plus rapide mis en evidence comme reference"
          ],
          screenshots: [
            ["pit_wall_trace_2.png", "Trace — acceleration, freinage et direction a Catalunya"],
            ["pit_wall_coach_1.png", "Coach — fiches techniques pour les virages et l'ERS"]
          ]
        },
        {
          title: "Historique et journal de course",
          body: "Chaque session terminee est sauvegardee automatiquement. Revoyez ce qui s'est passe tour par tour, comment vos reglages ont fonctionne et quelles etaient les conditions.",
          items: [
            "Journal d'evenements chronologique : notes Jax, meilleurs tours, arrets, changements de reglages, penalites et degats",
            "Reglages nommes par plage de tours avec tous les parametres : ailerons, differentiel, repartition de freinage, hauteur de caisse, pressions pneus",
            "Timeline meteo — conditions et temperatures par plage de tours",
            "Regles de session : difficulte IA, mode degats, safety car, parc ferme",
            "Resultat, meilleur tour et resume de course",
            "Suivi de ligue et de saison entre sessions"
          ],
          screenshots: [
            ["past_session_highlights.png", "Highlights — journal d'evenements a Monza"],
            ["past_session_setups.png", "Setup — reglages nommes par plage de tours"]
          ]
        },
        {
          title: "Memoire des reglages et contexte de course",
          body: "Suivez vos choix de reglages, gommes, charges d'essence et conditions de course sur toutes vos sessions. Constituez la memoire qu'un vrai carnet d'equipe tiendrait.",
          items: [
            "Parametres de reglage sauvegardes par session et plage de tours",
            "Suivi des gommes, longueur de relais et usure",
            "Historique de charge et consommation d'essence",
            "Overlay VSC Delta — gestion de l'ecart en temps reel pendant la voiture de securite virtuelle",
            "Journal de penalites et d'evenements drapeaux par session",
            "Conditions de session enregistrees pour reference future"
          ],
          screenshots: [
            ["past_session_conditions.png", "Conditions — timeline meteo et regles de session"],
            ["vsc_delta_orange.png", "VSC Delta — gestion de l'ecart en direct pendant la safety car"]
          ]
        }
      ],
      roadmap: [
        ["Analyse apres session", "Comparaisons plus structurees par piste, reglages, pneus et meteo."],
        ["Synchro nuage", "Synchronisation optionnelle pour garder le journal sur plusieurs appareils."],
        ["Plus de jeux", "Ajout d'autres titres quand la telemetrie le permet de facon fiable."],
        ["Intelligence de muret des puits", "Les fonctions avancees de coaching et strategie resteront clairement marquees comme feuille de route jusqu'a leur sortie."]
      ]
    },
    how: {
      title: "Comment utiliser Jax",
      intro: "Configurez la telemetrie une fois, gardez votre telephone ou tablette sur le meme reseau, et utilisez Jax comme second ecran, couche d'alertes vocales et memoire de session.",
      sections: [
        {
          kicker: "Demarrage",
          title: "Demarrer l'application",
          intro: "Installez Jax et ouvrez-le avant d'entrer en piste. L'ecran d'accueil propose deux options : demarrer une session en direct ou consulter l'historique des sessions.",
          steps: [
            ["Installer Jax", "Installez Jax Max Delta via TestFlight ou l'App Store, puis ouvrez-le sur votre iPhone ou iPad avant d'aller en piste."],
            ["Entrer en session live", "Appuyez sur Entrer en session live pour ouvrir l'ecran de connexion. Jax commence immediatement a ecouter la telemetrie de votre jeu."],
            ["Consulter les sessions passees", "Appuyez sur Historique des sessions pour naviguer dans vos sessions enregistrees, reglages, traces de tours, conditions et journaux d'evenements."]
          ],
          portrait: true,
          screenshots: [["main_screen.png", "Ecran d'accueil — Entrer en session live ou Historique des sessions"]]
        },
        {
          kicker: "Configuration UDP",
          title: "Configurer UDP et Jax",
          intro: "Jax recoit la telemetrie de votre jeu via votre reseau Wi-Fi local en utilisant le protocole UDP. Cette configuration ne se fait qu'une seule fois.",
          steps: [
            ["Meme reseau", "Connectez votre console ou PC et votre iPhone ou iPad au meme reseau Wi-Fi local ou segment reseau."],
            ["Trouver l'IP de votre appareil", "Sur iPhone ou iPad : Reglages → Wi-Fi → appuyez sur votre reseau pour voir votre adresse IP locale. Vous en aurez besoin dans le jeu."],
            ["Activer UDP dans le jeu", "Dans votre jeu EA SPORTS F1, ouvrez Reglages → Parametres de telemetrie et activez la sortie UDP."],
            ["Definir la destination", "Entrez l'adresse IP de votre appareil comme destination de telemetrie. Reglez le port UDP sur 20777."],
            ["Confirmer dans Jax", "L'ecran Session live affiche En ecoute sur 0.0.0.0:20777. Des que le jeu envoie des donnees, le type de session et le circuit sont detectes automatiquement et le bouton Ouvrir le tableau de bord s'active."]
          ],
          portrait: true,
          screenshots: [["waiting_for_live_session.png", "Ecran Session live — en ecoute de la telemetrie sur le port 20777"]]
        },
        {
          kicker: "Donnees en direct",
          title: "Tableau de bord principal",
          intro: "Le tableau de bord affiche les donnees de course en temps reel en trois panneaux. Gardez l'appareil visible pres de votre volant pour lire les infos sans quitter la piste des yeux.",
          steps: [
            ["Panneau gauche — etat de la voiture", "Temperatures et usure des pneus sur les quatre roues (FL/FR/RL/RR), repartition de freinage (BB), differentiel (DIFF), angle d'aileron (WING), degats (DMG), temperature d'air et de piste."],
            ["Panneau central — drapeau et tour", "Etat du drapeau (VERT/JAUNE/SC/VSC), type de tour (Outlap, Flying, Pit), numero de tour, vitesse en km/h et barre ERS ou boost."],
            ["Panneau droit — chronos", "Tours d'essence restants (positif = surplus), tour actuel (NOW), dernier tour (LAST), meilleur personnel (BEST), plus rapide de la session (FASTEST) et secteurs S1/S2/S3."],
            ["Barre superieure", "Position, compteur de tours, usure pneu par roue en un coup d'oeil et delta par rapport au leader ou a la reference."]
          ],
          legend: [
            ["BB", "Repartition de freinage — avant/arriere (%)"],
            ["DIFF", "Differentiel — acceleration/deceleration (%)"],
            ["FL/FR", "Temp + usure pneu avant gauche/droit"],
            ["RL/RR", "Temp + usure pneu arriere gauche/droit"],
            ["WING", "Angle d'aileron avant"],
            ["DMG", "Degats carrosserie (%)"],
            ["AIR", "Temperature de l'air"],
            ["TRK", "Temperature de la piste"],
            ["ERS", "Energie — niveau de charge / mode"],
            ["DRS", "Systeme de reduction de trainee — actif / inactif"],
            ["FUEL", "Tours d'essence restants (+ = surplus)"],
            ["PIT", "Fenetre d'arret / numero d'arret"],
            ["PEN", "Penalite en secondes"],
            ["W%", "Intensite de la pluie / meteo"],
            ["SC", "Safety Car en piste"],
            ["VSC", "Voiture de securite virtuelle active"],
            ["S1/S2/S3", "Temps de secteur 1, 2, 3"]
          ],
          screenshots: [
            ["main_dash_yellow.png", "Tableau de bord — drapeau jaune a Catalunya"],
            ["main_dash_green.png", "Tableau de bord — tour lance avec boost ERS actif"]
          ]
        },
        {
          kicker: "Muret des puits",
          title: "Muret des puits",
          intro: "Le muret des puits offre une vue complete de la course en six onglets. Accedez-y depuis le tableau de bord ou depuis l'ecran d'accueil.",
          tabs: ["TIMING", "MAP", "TRACE", "SETUP", "GAME", "COACH"],
          steps: [
            ["Timing", "Classement complet : position, pilote, meilleur tour, ecart au leader, secteurs, tour en cours, gomme et statut de relais pour chaque voiture."],
            ["Map", "Carte du circuit en direct avec la position de chaque voiture mise a jour en temps reel."],
            ["Trace", "Acceleration, freinage et direction traces tour par tour. Selectionnez un tour pour l'analyser, ou comparez deux tours pour trouver un delta."],
            ["Setup", "Les valeurs de reglage de votre voiture pour reference pendant la session. Un overlay VSC Delta s'affiche automatiquement lors des periodes VSC."],
            ["Game", "Telemetrie et metadonnees de session au niveau du jeu."],
            ["Coach", "Fiches techniques : Entree en virage, Sortie de virage, Defense, Conduite sous la pluie, ERS et DRS — des rappels pour les moments critiques."]
          ],
          screenshots: [
            ["pit_wall_timing_1.png", "Timing — classement avec ecarts et gommes"],
            ["pit_wall_map_monaco.png", "Map — positions en direct a Monaco"],
            ["pit_wall_trace_1.png", "Trace — comparaison de tours avec acceleration et freinage"],
            ["pit_wall_coach_1.png", "Coach — fiches techniques pour les virages et l'ERS"]
          ]
        },
        {
          kicker: "Historique",
          title: "Sessions passees",
          intro: "Chaque session terminee est sauvegardee automatiquement. Ouvrez l'historique depuis l'ecran d'accueil pour revoir n'importe quelle course, qualif ou practice.",
          tabs: ["OVERVIEW", "RESULT", "SETUP", "CONDITIONS", "HIGHLIGHTS"],
          steps: [
            ["Overview", "Nom du circuit, type de session, formule, heures de debut et de fin, duree, tours completes et ligue ou saison associee."],
            ["Result", "Votre position finale, meilleur tour et resume de course."],
            ["Setup", "Les reglages nommes utilises pendant la session, organises par plage de tours — aileron, differentiel, repartition de freinage, hauteur de caisse et pressions de pneus."],
            ["Conditions", "Regles de session capturees au moment de la course : difficulte IA, degats, collisions, safety car, parc ferme et timeline meteo par plage de tours."],
            ["Highlights", "Journal chronologique des evenements : note de depart Jax, meilleurs tours (vous ou le peloton), arrets aux stands, changements de reglages, penalites, degats et evenements rivaux."]
          ],
          screenshots: [
            ["past_session_highlights.png", "Highlights — journal d'evenements a Monza"],
            ["past_session_setups.png", "Setup — reglages nommes par plage de tours"],
            ["past_session_conditions.png", "Conditions — regles de session et timeline meteo"],
            ["Past_session_overview.png", "Overview — resume complet de session"]
          ]
        },
        {
          kicker: "Configuration",
          title: "Parametres",
          intro: "Appuyez sur l'icone engrenage depuis l'ecran d'accueil pour acceder aux parametres. Les zones cles sont le guide des abreviations, les alertes vocales Jax et la configuration UDP.",
          steps: [
            ["Guide des abreviations", "L'onglet Plus affiche la signification de chaque abreviation du tableau de bord — BB, DIFF, W, PEN, SC, VSC, ERS, DRS — pour qu'aucun indicateur ne reste mysterieux."],
            ["Alertes vocales Jax", "Dans l'onglet Jax, choisissez quelles categories d'alertes entendre : pneus, essence, delta, penalites, drapeaux et evenements. Ajustez le volume et les seuils par categorie."],
            ["Port UDP", "Le port par defaut est 20777. Si votre version du jeu utilise un port different, mettez-le a jour ici. L'adresse d'ecoute actuelle est affichee sur l'ecran Session live."],
            ["Depannage audio", "Si les alertes vocales ne se lancent pas, verifiez que le mode silence est desactive, que le volume de l'app n'est pas a zero et que les categories d'alertes sont activees dans les parametres Jax."]
          ],
          portrait: true,
          screenshots: [["IMG_8682.png", "Parametres — guide du tableau de bord et informations UDP"]]
        }
      ],
      troubleTitle: "Depannage courant",
      trouble: [
        ["Aucune telemetrie recue", "Verifiez que la telemetrie UDP est activee dans le jeu, que l'adresse IP est celle de l'appareil, que les deux appareils sont sur le meme reseau et que le port est 20777."],
        ["Donnees coupees en session", "Verifiez que l'appareil est reste sur Wi-Fi, que le mode economie d'energie n'a pas interrompu l'app et que la console n'a pas change de reseau."],
        ["Mauvaise adresse IP", "L'adresse IP du telephone ou de la tablette peut changer entre les sessions. Revoyez les reglages Wi-Fi et mettez a jour la destination de telemetrie dans le jeu si necessaire."],
        ["Alertes vocales muettes", "Verifiez le volume, le mode silencieux, les reglages audio de l'app et les categories d'alertes activees dans les parametres Jax."]
      ]
    },
    support: {
      title: "Support Jax Max Delta", intro: "Aide de configuration, FAQ, problemes connus et retour des testeurs.",
      faqTitle: "FAQ", faq: [["Jax fonctionne-t-il sur console ?", "Oui. Jax est pense pour les pilotes console. Il faut un jeu qui envoie une telemetrie compatible et un appareil sur le meme reseau."], ["Jax est-il officiel ou affilie ?", "Non. Jax Max Delta est independant et utilise les donnees de telemetrie disponibles dans les jeux compatibles."], ["Est-ce seulement un tableau de bord ?", "Non. Jax est aussi votre equipe virtuelle au muret des puits, votre couche d'alertes vocales, votre ingenieur de course personnel et votre carnet de course."], ["Ou sont mes donnees ?", "Sur votre appareil. L'historique de sessions, les traces de tour et les reglages restent dans le stockage prive de l'app. Si iCloud est disponible, l'app peut aussi sauvegarder votre historique et vos ligues dans votre propre conteneur iCloud prive, que nous ne pouvons pas lire."], ["Comment envoyer un retour ?", "Envoyez l'appareil, le jeu, la plateforme, le type de session et ce qui s'est passe a support@jaxmaxdelta.com."]],
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
      quickLinksTitle: "Seguir explorando", quickLinks: [["Funciones", "Dashboard, alertas de voz, muro de pits virtual, setups, neumaticos, combustible, penalizaciones, banderas, clima y diario.", "features.html"], ["Como usar", "Configura UDP, conecta el dispositivo y resuelve problemas comunes.", "how-to.html"], ["Soporte", "FAQ, problemas conocidos, feedback de testers y contacto.", "support.html"], ["Privacidad", "Detalles claros sobre telemetria, almacenamiento en el dispositivo, copia en iCloud y lo que nunca sale de tu telefono.", "privacy.html"]]
    },
    features: {
      title: "Mas que un tablero.",
      intro: "Jax Max Delta es tu display de cockpit en segunda pantalla, alertas de voz estilo ingeniero, equipo virtual en el muro de pits y cuaderno de equipo.",
      current: "Actual y concreto",
      future: "Roadmap futuro",
      groups: [
        {
          title: "Dashboard en Vivo",
          body: "Tu display de cockpit completo en una segunda pantalla. Mantén los datos criticos visibles sin cambiar la camara ni saturar el HUD del juego.",
          items: [
            "Velocidad, marcha, acelerador y freno en tiempo real",
            "Temperaturas y desgaste de neumaticos en las cuatro ruedas — con advertencias de calor por color",
            "Vueltas de combustible restantes con sobrante o deficit de un vistazo",
            "Delta respecto al lider o vuelta de referencia",
            "Vuelta actual, ultima vuelta, mejor personal y mas rapida de la sesion",
            "Parciales S1/S2/S3 por vuelta",
            "Estado de bandera, barra ERS y boost, y ventana de parada"
          ],
          screenshots: [
            ["main_dash_yellow.png", "Bandera amarilla en Catalunya — dashboard completo"],
            ["main_dash_hot_tyre.png", "Advertencia de calor en neumatico — trasero izquierdo sobrecalentado"]
          ]
        },
        {
          title: "Alertas de Voz Jax",
          body: "Tu ingeniero de carrera en el oido. Jax anuncia la informacion que necesitas en el momento justo, sin que tengas que apartar la vista de la pista.",
          items: [
            "Alertas de temperatura y desgaste de neumaticos por rueda",
            "Alertas de delta de combustible y sugerencias de estrategia",
            "Alertas de delta por vuelta y consistencia",
            "Anuncios de penalizaciones y banderas",
            "Notificaciones de entrada y salida de Safety Car y VSC",
            "Recordatorios de ventana de parada y eventos de sesion"
          ],
          screenshots: [
            ["main_dash_green.png", "Vuelta en verde — capa de alertas de voz activa"]
          ]
        },
        {
          title: "Muro de Pits Virtual",
          body: "La vista completa de carrera que tu cockpit no tiene. Seis pestanas cubren todo lo que un muro de pits real seguiria durante la carrera.",
          items: [
            "Clasificacion completa con posiciones, diferencias, parciales y compuestos",
            "Mapa del circuito en vivo con la posicion de cada coche",
            "Overlay VSC Delta para gestionar tu diferencia durante periodos de safety car virtual",
            "Referencia de setup del coche para la sesion en curso",
            "Metadatos de sesion y telemetria a nivel del juego",
            "Fichas de tecnica de conduccion para curvas, ERS y DRS"
          ],
          screenshots: [
            ["pit_wall_timing_2.png", "Timing — clasificacion de carrera en Catalunya con compuestos"],
            ["pit_wall_map_monaco.png", "Map — posiciones en vivo en Monaco"]
          ]
        },
        {
          title: "Traza y Analisis de Vuelta",
          body: "Inspecciona tus inputs vuelta a vuelta. Ve acelerador, freno y direccion en todo el circuito, o compara dos vueltas para encontrar el delta.",
          items: [
            "Traza de acelerador, freno y direccion por vuelta",
            "Traza de velocidad a lo largo de la distancia de la vuelta",
            "Zonas de activacion de DRS y ERS por vuelta",
            "Comparacion de delta vuelta a vuelta — selecciona dos vueltas",
            "Zoom y desplazamiento por cualquier seccion del circuito",
            "Vuelta mas rapida resaltada como referencia"
          ],
          screenshots: [
            ["pit_wall_trace_2.png", "Trace — acelerador, freno y direccion en Catalunya"],
            ["pit_wall_coach_1.png", "Coach — fichas de tecnica para curvas y ERS"]
          ]
        },
        {
          title: "Historial de Sesiones y Diario de Carreras",
          body: "Cada sesion completada se guarda automaticamente. Revisa lo que paso vuelta a vuelta, como funcionaron tus setups y cuales eran las condiciones.",
          items: [
            "Registro cronologico de eventos: notas Jax, vueltas rapidas, paradas, cambios de setup, penalizaciones y danos",
            "Setups con nombre por rango de vueltas con todos los parametros: alerones, diferencial, balance de freno, altura al suelo, presiones de neumaticos",
            "Linea de tiempo del clima — condiciones y temperaturas por rango de vueltas",
            "Reglas de sesion: dificultad IA, modo de danos, safety car, parc ferme",
            "Resultado, vuelta rapida y resumen de carrera",
            "Seguimiento de liga y temporada entre sesiones"
          ],
          screenshots: [
            ["past_session_highlights.png", "Highlights — registro de eventos en Monza"],
            ["past_session_setups.png", "Setup — setups con nombre por rango de vueltas"]
          ]
        },
        {
          title: "Memoria de Setup y Contexto de Carrera",
          body: "Registra tus elecciones de setup, compuestos, cargas de combustible y condiciones de carrera en cada sesion. Construye la memoria que llevaria un cuaderno de equipo real.",
          items: [
            "Parametros de setup guardados por sesion y rango de vueltas",
            "Seguimiento de compuesto de neumaticos, duracion del stint y patron de desgaste",
            "Historial de carga y consumo de combustible",
            "Overlay VSC Delta — gestion del delta en tiempo real durante el coche de seguridad virtual",
            "Registro de penalizaciones y eventos de bandera por sesion",
            "Condiciones de sesion registradas para referencia futura"
          ],
          screenshots: [
            ["past_session_conditions.png", "Conditions — linea de tiempo del clima y reglas de sesion"],
            ["vsc_delta_orange.png", "VSC Delta — gestion del delta en vivo durante el safety car"]
          ]
        }
      ],
      roadmap: [
        ["Revision post-sesion", "Comparaciones por pista, setup, neumaticos y clima."],
        ["Cloud sync", "Sincronizacion opcional entre dispositivos."],
        ["Mas juegos", "Soporte para mas titulos cuando la telemetria sea confiable."],
        ["Inteligencia de muro de pits", "Funciones futuras de coaching y estrategia se marcaran como roadmap hasta estar listas."]
      ]
    },
    how: {
      title: "Como usar Jax",
      intro: "Configura la telemetria una vez, mantén el telefono o tablet en la misma red y usa Jax como segunda pantalla, capa de alertas de voz y memoria de sesion.",
      sections: [
        {
          kicker: "Primeros pasos",
          title: "Iniciar la App",
          intro: "Instala Jax y abrela antes de salir a pista. La pantalla de inicio ofrece dos opciones: conectarte a una sesion en vivo o revisar tu historial de sesiones.",
          steps: [
            ["Instalar Jax", "Instala Jax Max Delta desde TestFlight o el App Store y abrela en tu iPhone o iPad antes de ir a pista."],
            ["Entrar a sesion en vivo", "Toca Entrar a sesion en vivo para abrir la pantalla de conexion. Jax comenzara a escuchar la telemetria de tu juego de inmediato."],
            ["Revisar sesiones pasadas", "Toca Historial de sesiones para explorar tus sesiones guardadas, setups, trazas de vuelta, condiciones y registros de eventos."]
          ],
          portrait: true,
          screenshots: [["main_screen.png", "Pantalla de inicio — Entrar a sesion en vivo o Historial de sesiones"]]
        },
        {
          kicker: "Configuracion UDP",
          title: "Configurar UDP y Jax",
          intro: "Jax recibe la telemetria de tu juego a traves de tu red Wi-Fi local usando el protocolo UDP. Esta configuracion se hace una sola vez.",
          steps: [
            ["Misma red", "Conecta tu consola o PC y tu iPhone o iPad a la misma red Wi-Fi local o segmento de red."],
            ["Encontrar la IP del dispositivo", "En iPhone o iPad: Ajustes → Wi-Fi → toca el nombre de tu red para ver tu IP local. La necesitaras en el juego."],
            ["Activar UDP en el juego", "En tu juego EA SPORTS F1, ve a Ajustes → Configuracion de telemetria y activa la salida UDP."],
            ["Establecer el destino", "Introduce la IP local de tu dispositivo como destino de telemetria. Establece el puerto UDP en 20777."],
            ["Confirmar en Jax", "La pantalla Sesion en vivo muestra Escuchando en 0.0.0.0:20777. Cuando el juego envia datos, el tipo de sesion y el circuito se detectan automaticamente y el boton Abrir dashboard en vivo se activa."]
          ],
          portrait: true,
          screenshots: [["waiting_for_live_session.png", "Pantalla Sesion en vivo — escuchando telemetria en el puerto 20777"]]
        },
        {
          kicker: "Datos en vivo",
          title: "Dashboard Principal",
          intro: "El dashboard muestra datos de carrera en tiempo real en tres paneles. Mantén el dispositivo visible cerca del volante para leer sin apartar la vista de la pista.",
          steps: [
            ["Panel izquierdo — estado del coche", "Temperaturas y desgaste de neumaticos en las cuatro ruedas (FL/FR/RL/RR), balance de freno (BB), diferencial (DIFF), angulo de aleron (WING), danos (DMG), y temperatura de aire y pista."],
            ["Panel central — bandera y vuelta", "Estado de la bandera (VERDE/AMARILLA/SC/VSC), tipo de vuelta (Outlap, Flying, Pit), numero de vuelta, velocidad en km/h y barra ERS o boost."],
            ["Panel derecho — tiempos", "Vueltas de combustible restantes (positivo = sobrante), vuelta actual (NOW), ultima vuelta (LAST), mejor personal (BEST), mas rapida de la sesion (FASTEST) y parciales S1/S2/S3."],
            ["Barra superior", "Posicion, contador de vueltas, desgaste por neumatico de un vistazo y delta respecto al lider o referencia."]
          ],
          legend: [
            ["BB", "Balance de freno — reparto delantero/trasero (%)"],
            ["DIFF", "Diferencial — en aceleracion/deceleracion (%)"],
            ["FL/FR", "Temp + desgaste neumatico delantero izq/der"],
            ["RL/RR", "Temp + desgaste neumatico trasero izq/der"],
            ["WING", "Angulo del aleron delantero"],
            ["DMG", "Danos en la carroceria (%)"],
            ["AIR", "Temperatura del aire"],
            ["TRK", "Temperatura de la pista"],
            ["ERS", "Energia — nivel de carga / modo"],
            ["DRS", "Sistema de reduccion de resistencia — activo / inactivo"],
            ["FUEL", "Vueltas de combustible restantes (+ = sobrante)"],
            ["PIT", "Ventana de parada / numero de parada"],
            ["PEN", "Penalizacion en segundos"],
            ["W%", "Intensidad de lluvia / clima"],
            ["SC", "Safety Car en pista"],
            ["VSC", "Virtual Safety Car activo"],
            ["S1/S2/S3", "Tiempos de sector 1, 2, 3"]
          ],
          screenshots: [
            ["main_dash_yellow.png", "Dashboard — bandera amarilla en Catalunya"],
            ["main_dash_green.png", "Dashboard — vuelta lanzada con ERS boost activo"]
          ]
        },
        {
          kicker: "Muro de pits",
          title: "Muro de Pits",
          intro: "El Muro de Pits ofrece una vista completa de la carrera en seis pestanas. Accede desde el dashboard o desde la pantalla de inicio.",
          tabs: ["TIMING", "MAP", "TRACE", "SETUP", "GAME", "COACH"],
          steps: [
            ["Timing", "Clasificacion completa: posicion, piloto, mejor vuelta, diferencia al lider, parciales, vuelta actual, compuesto y estado de stint para cada coche."],
            ["Map", "Mapa del circuito en vivo con la posicion de cada coche actualizada en tiempo real."],
            ["Trace", "Acelerador, freno y direccion graficados vuelta a vuelta. Selecciona cualquier vuelta para analizarla o compara dos vueltas para encontrar un delta."],
            ["Setup", "Los valores de setup de tu coche para referencia durante la sesion. Un overlay VSC Delta aparece automaticamente durante periodos VSC para ayudarte a gestionar el delta."],
            ["Game", "Telemetria y metadatos de sesion a nivel del juego."],
            ["Coach", "Fichas de tecnica de conduccion: Entrada en curva, Salida de curva, Defensa, Conduccion en lluvia, ERS y DRS — recordatorios para cuando mas los necesitas."]
          ],
          screenshots: [
            ["pit_wall_timing_1.png", "Timing — clasificacion con diferencias y compuestos"],
            ["pit_wall_map_monaco.png", "Map — posiciones en vivo en Monaco"],
            ["pit_wall_trace_1.png", "Trace — comparacion de vueltas con acelerador y freno"],
            ["pit_wall_coach_1.png", "Coach — fichas de tecnica para curvas y ERS"]
          ]
        },
        {
          kicker: "Historial",
          title: "Sesiones Pasadas",
          intro: "Cada sesion completada se guarda automaticamente. Abre el Historial de sesiones desde la pantalla de inicio para revisar cualquier carrera, qualy o practica pasada.",
          tabs: ["OVERVIEW", "RESULT", "SETUP", "CONDITIONS", "HIGHLIGHTS"],
          steps: [
            ["Overview", "Nombre del circuito, tipo de sesion, formula, hora de inicio y fin, duracion, vueltas completadas y la liga o temporada a la que pertenece."],
            ["Result", "Tu posicion final, vuelta rapida y resumen del resultado."],
            ["Setup", "Setups con nombre usados durante la sesion, organizados por rango de vueltas — alerones, diferencial, balance de freno, altura al suelo y presiones de neumaticos."],
            ["Conditions", "Reglas de sesion capturadas: dificultad IA, modo de danos, colisiones, safety car, parc ferme y la linea de tiempo del clima por rango de vueltas."],
            ["Highlights", "Registro cronologico de eventos: nota de salida de Jax, vueltas rapidas (tuyas o del campo), paradas en boxes, cambios de setup, penalizaciones, danos y eventos de rivales."]
          ],
          screenshots: [
            ["past_session_highlights.png", "Highlights — registro de eventos en Monza"],
            ["past_session_setups.png", "Setup — setups con nombre por rango de vueltas"],
            ["past_session_conditions.png", "Conditions — reglas de sesion y clima"],
            ["Past_session_overview.png", "Overview — resumen completo de sesion"]
          ]
        },
        {
          kicker: "Configuracion",
          title: "Ajustes",
          intro: "Toca el icono de engranaje en la pantalla de inicio para acceder a los ajustes. Las areas clave son la guia de abreviaturas del dashboard, las alertas de voz Jax y la configuracion UDP.",
          steps: [
            ["Guia de abreviaturas", "La pestana Plus muestra el significado de cada abreviatura del dashboard — BB, DIFF, W, PEN, SC, VSC, ERS, DRS — para que nada en pantalla sea un misterio."],
            ["Alertas de voz Jax", "En la pestana Jax, elige que categorias de alerta escuchar: neumaticos, combustible, delta, penalizaciones, banderas y eventos. Ajusta el volumen y umbrales por categoria."],
            ["Puerto UDP", "El puerto por defecto es 20777. Si tu version del juego usa otro puerto, actualizalo aqui. La direccion de escucha actual se muestra en la pantalla Sesion en vivo."],
            ["Problemas de audio", "Si las alertas de voz no suenan, verifica que el modo silencio este desactivado, el volumen de la app no este en cero y las categorias de alertas esten habilitadas en los ajustes de Jax."]
          ],
          portrait: true,
          screenshots: [["IMG_8682.png", "Ajustes — guia del dashboard e informacion UDP"]]
        }
      ],
      troubleTitle: "Problemas comunes",
      trouble: [
        ["Sin telemetria recibida", "Verifica que la telemetria UDP este activa en el juego, que la IP sea la del dispositivo, que ambos esten en la misma red y que el puerto sea 20777."],
        ["Datos cortados en sesion", "Verifica que el dispositivo siguio en Wi-Fi, que el modo ahorro de energia no interrumpio la app y que la consola no cambio de red."],
        ["IP del dispositivo incorrecta", "La IP del telefono o tablet puede cambiar entre sesiones. Revisa los ajustes Wi-Fi y actualiza el destino de telemetria en el juego si es necesario."],
        ["Alertas de voz sin sonido", "Revisa volumen, modo silencio, ajustes de audio de la app y categorias de alertas activadas en los ajustes de Jax."]
      ]
    },
    support: {
      title: "Soporte de Jax Max Delta", intro: "Ayuda de configuracion, FAQ, problemas conocidos y feedback de testers.",
      faqTitle: "FAQ", faq: [["Funciona en consola?", "Si. Jax esta pensado para consola. Necesitas un juego con telemetria compatible y el dispositivo en la misma red."], ["Jax esta afiliado oficialmente?", "No. Jax Max Delta es independiente y usa telemetria disponible en juegos compatibles."], ["Es solo un dashboard?", "No. Jax tambien es tu equipo virtual en el muro de pits, capa de alertas de voz, ingeniero de carrera personal y diario de carreras."], ["Donde estan mis datos?", "En tu dispositivo. El historial de sesiones, las trazas de vuelta y los setups viven en el almacenamiento privado de la app. Si iCloud esta disponible, la app tambien puede respaldar tu historial y tus ligas en tu propio contenedor privado de iCloud, que nosotros no podemos leer."], ["Como envio feedback?", "Envia dispositivo, juego, plataforma, tipo de sesion y que paso a support@jaxmaxdelta.com."]],
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
      intro: "Jax Max Delta n'a aucun compte et ne vous demande aucune information personnelle. Cette politique explique ce qui reste sur votre appareil, le peu qui en sort — diagnostics de plantage, achats et une sauvegarde dans votre propre conteneur iCloud prive — et comment tout supprimer.",
      updated: "Date d'entree en vigueur : 17 aout 2026",
      sections: privacySections("fr")
    };
  }
  if (lang === "es" && source.title === "Privacy Policy") {
    return {
      title: "Politica de privacidad",
      intro: "Jax Max Delta no tiene cuentas y no te pide ninguna informacion personal. Esta politica explica que se queda en tu dispositivo, lo poco que sale de el — diagnosticos de fallos, compras y una copia de seguridad en tu propio contenedor privado de iCloud — y como borrarlo todo.",
      updated: "Fecha de entrada en vigor: 17 de agosto de 2026",
      sections: privacySections("es")
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

function privacySections(lang) {
  const fr = [
    ["La version courte", "Jax Max Delta n'a <strong>aucun compte utilisateur</strong> et ne vous demande <strong>aucune information personnelle</strong>. Votre telemetrie, vos donnees de tour, votre historique de sessions et vos reglages de voiture sont stockes <strong>sur votre appareil</strong>. Nous ne vendons, ne louons et ne partageons pas vos donnees, et nous ne les utilisons pas a des fins publicitaires. Trois choses sortent de votre appareil : les <strong>diagnostics de plantage</strong>, les <strong>transactions d'achat</strong> et — uniquement si iCloud est disponible sur votre appareil — une <strong>sauvegarde de votre historique de sessions dans votre propre conteneur iCloud prive</strong>, que nous ne pouvons pas lire. Vous pouvez tout supprimer a tout moment depuis l'app, ou en supprimant l'app."],
    ["Ce que l'app recoit de votre jeu", "Jax Max Delta ecoute sur votre reseau local la telemetrie UDP diffusee par votre jeu F1 (EA F1 24, F1 25 et F1 26). Ce trafic circule uniquement sur votre propre reseau, de votre console ou PC vers votre telephone. Il est recu par l'app et n'est jamais retransmis par elle. Il contient des donnees de course — chronos, vitesse, etat des pneus, positions, les noms que le jeu attribue aux pilotes de votre session — et aucune information vous concernant personnellement. L'app ne transmet la telemetrie ni a nous ni a qui que ce soit."],
    ["Ce qui est stocke sur votre appareil", "Les elements suivants restent dans le stockage prive de l'app sur votre appareil : l'historique des sessions (pistes, types de session, temps au tour et aux secteurs, positions, resultats, evenements, penalites, meteo) ; les traces de tour (echantillons d'acceleration, freinage, direction, vitesse, rapport, ERS, DRS) ; les reglages de voiture captures dans vos sessions et vos evaluations de ceux-ci ; et vos preferences d'app (hote et port de connexion, choix du jeu, langue, unites, reglages de voix et de coaching Jax, reglage de conservation des donnees). Vous controlez la duree de conservation des donnees les plus lourdes dans <strong>Reglages → SUPPORT</strong> (capture et conservation des donnees), et vous pouvez supprimer des sessions individuelles ou toutes les sessions a tout moment."],
    ["Achats", "Les abonnements sont vendus par Apple et geres pour nous par RevenueCat, Inc. Lorsque vous vous abonnez ou restaurez un achat, Apple et RevenueCat traitent la transaction ainsi qu'un identifiant d'installation anonyme afin que l'app sache si votre abonnement est actif. Nous ne recevons jamais vos donnees de paiement — Apple gere entierement le paiement. Voir la <a href=\"https://www.apple.com/legal/privacy/\">politique de confidentialite d'Apple</a> et la <a href=\"https://www.revenuecat.com/privacy\">politique de confidentialite de RevenueCat</a>."],
    ["Diagnostics de plantage et de stabilite", "L'app utilise Google Firebase Crashlytics pour signaler les plantages et les erreurs afin que nous puissions les corriger. Un rapport de plantage contient des informations techniques — l'erreur, le chemin de code, le modele d'appareil, la version du systeme d'exploitation, la version de l'app et un identifiant d'installation anonyme. Il ne contient ni votre telemetrie, ni votre historique de sessions, ni vos reglages, ni quoi que ce soit qui vous identifie personnellement. Nous n'utilisons pas ces donnees a des fins publicitaires et elles ne sont liees a aucune identite. Voir les <a href=\"https://firebase.google.com/support/privacy\">informations de confidentialite de Firebase</a>."],
    ["Sauvegarde iCloud de votre historique de sessions", "Si iCloud est active et disponible sur votre appareil, l'app peut sauvegarder votre historique de sessions et vos donnees de ligue dans <strong>le conteneur iCloud prive de l'app</strong> (<code>iCloud.com.camilore.jaxmaxdelta</code>), a l'interieur de <strong>votre</strong> compte iCloud. C'est une fonction reellement livree, et cette politique le dit clairement. La sauvegarde contient les enregistrements de sessions et les ligues ; elle ne contient <strong>pas</strong> les fichiers de traces de tour ni de donnees de course, qui restent uniquement sur l'appareil qui les a captures. Le conteneur appartient a votre compte Apple et Apple fournit le stockage — <strong>nous n'y avons aucun acces</strong> : nous ne pouvons ni lire, ni lister, ni recuperer vos sauvegardes. L'app conserve la sauvegarde la plus recente plus jusqu'a cinq copies datees, et elimine les plus anciennes. Avant une restauration, l'app ecrit une copie de securite locale sur votre appareil afin qu'une restauration puisse etre annulee, et une restauration n'ecrase jamais une session deja presente sur l'appareil. Pour supprimer ces sauvegardes, supprimez les donnees de l'app dans iCloud via les Reglages iOS, ou supprimez l'app. Le traitement des donnees iCloud par Apple est regi par la politique de confidentialite d'Apple."],
    ["Exportations que vous lancez", "Vous pouvez exporter votre historique de sessions dans un fichier et le partager via la feuille de partage iOS (Fichiers, AirDrop, Messages, etc.). Cela ne se produit que si vous le demandez, le fichier va la ou vous l'envoyez, et il ne passe pas par nous."],
    ["Messages au support", "Si vous contactez le support, nous recevons uniquement ce que vous choisissez de nous envoyer — en general votre courriel, le modele d'appareil, la version de l'app et une description du probleme. Nous l'utilisons pour vous repondre et corriger le probleme, et pour rien d'autre."],
    ["Ce que nous ne faisons pas", "Aucun compte, aucune inscription, aucune collecte de courriel. Aucune publicite, aucun identifiant publicitaire, aucun IDFA, aucun reseau publicitaire. Aucun suivi entre apps ou entre sites, et aucune demande App Tracking Transparency, parce que nous ne faisons pas de suivi. Aucune analyse produit ni telemetrie comportementale envoyee vers nous. Aucune vente, location ou partage de vos donnees avec des tiers. Aucune collecte de localisation — l'app ne demande pas l'acces a la localisation. Aucun acces aux contacts, aux photos, au microphone ou a la camera."],
    ["Bases legales (utilisateurs EEE/Royaume-Uni)", "Lorsque le RGPD s'applique, nous nous appuyons sur le <strong>contrat</strong> — traiter l'achat et le statut d'abonnement pour vous donner les fonctions que vous avez payees — et sur les <strong>interets legitimes</strong> — les diagnostics de plantage, pour eviter que l'app ne defaille sur votre appareil, mis en balance avec le fait que ces donnees sont techniques et non liees a une identite. Nous ne traitons pas de categories particulieres de donnees et nous ne prenons pas de decision automatisee produisant des effets juridiques."],
    ["Conservation", "Les donnees sur votre appareil sont conservees jusqu'a ce que vous les supprimiez, en supprimant des sessions dans l'app, en laissant votre reglage de conservation elaguer les traces, ou en supprimant l'app. Les sauvegardes iCloud restent dans votre propre conteneur jusqu'a ce que vous les supprimiez ; l'app conserve la plus recente plus cinq copies datees. Les rapports de plantage sont conserves par Firebase selon les durees de conservation publiees par Google pour Crashlytics. Les enregistrements d'achat sont conserves par Apple et RevenueCat selon leurs propres politiques."],
    ["Vos droits", "Comme nous ne detenons ni compte ni annuaire d'utilisateurs, l'essentiel de vos donnees est sous votre controle direct : vous pouvez les consulter, les exporter et les supprimer dans l'app. Pour les donnees limitees detenues par nos sous-traitants (diagnostics de plantage, statut d'achat), vous pouvez nous ecrire a support@jaxmaxdelta.com et nous vous aiderons a exercer vos droits d'acces, de rectification, d'effacement, de limitation, d'opposition et de portabilite lorsqu'ils s'appliquent. Si vous etes dans l'EEE ou au Royaume-Uni, vous avez aussi le droit de porter plainte aupres de votre autorite de protection des donnees. Residents de Californie : nous ne vendons ni ne partageons de renseignements personnels au sens du CCPA/CPRA, et nous n'offrons aucune incitation financiere en echange de donnees."],
    ["Enfants", "Jax Max Delta est classe 4+ et convient au grand public, mais il est concu pour les pilotes de sim racing et ne s'adresse pas aux enfants. Nous ne collectons pas sciemment de renseignements personnels aupres d'enfants. Si vous pensez qu'un enfant nous a fourni des renseignements personnels, contactez-nous et nous les supprimerons."],
    ["Android", "Cette section ne prend effet que lorsqu'une version Android est publiee. Lorsque Jax Max Delta sortira sur Android, les donnees de session seront stockees sur l'appareil de la meme facon, et le mecanisme de sauvegarde d'Android (Android Auto Backup / Backup by Google One) pourra inclure les donnees de l'app dans la sauvegarde detenue dans votre propre compte Google, selon les conditions de Google et hors de notre acces — la meme posture que la sauvegarde iCloud sur iOS."],
    ["Transferts internationaux", "Nos sous-traitants (Apple, Google, RevenueCat) operent a l'echelle mondiale et peuvent traiter des donnees aux Etats-Unis et ailleurs, selon leurs propres garanties publiees et clauses contractuelles types."],
    ["Modifications de cette politique", "Si cette politique change, nous mettrons a jour la date d'entree en vigueur en haut de page et publierons la nouvelle version a cette adresse. Les changements importants seront aussi indiques dans les notes de version de l'app."],
    ["Contact", "Marc Beaudry, operant aussi sous Camilore — 47 rue de l'Etoile, Gatineau, Quebec, Canada, J9A 2X5. Courriel : support@jaxmaxdelta.com."]
  ];
  const es = [
    ["La version corta", "Jax Max Delta no tiene <strong>ninguna cuenta de usuario</strong> y no te pide <strong>ninguna informacion personal</strong>. Tu telemetria, tus datos de vuelta, tu historial de sesiones y tus setups se guardan <strong>en tu dispositivo</strong>. No vendemos, alquilamos ni compartimos tus datos, y no los usamos para publicidad. Tres cosas salen de tu dispositivo: los <strong>diagnosticos de fallos</strong>, las <strong>transacciones de compra</strong> y — solo si tu dispositivo tiene iCloud disponible — una <strong>copia de seguridad de tu historial de sesiones en tu propio contenedor privado de iCloud</strong>, que nosotros no podemos leer. Puedes borrarlo todo en cualquier momento desde la app, o eliminando la app."],
    ["Lo que la app recibe de tu juego", "Jax Max Delta escucha en tu red local la telemetria UDP que emite tu juego de F1 (EA F1 24, F1 25 y F1 26). Ese trafico viaja solo por tu propia red, desde tu consola o PC hasta tu telefono. La app lo recibe y nunca lo reenvia. Contiene datos de carrera — tiempos de vuelta, velocidad, estado de neumaticos, posiciones, los nombres que el juego asigna a los pilotos de tu sesion — y ninguna informacion sobre ti personalmente. La app no transmite telemetria ni a nosotros ni a nadie mas."],
    ["Lo que se guarda en tu dispositivo", "Lo siguiente permanece en el almacenamiento privado de la app en tu dispositivo: el historial de sesiones (circuitos, tipos de sesion, tiempos de vuelta y de sector, posiciones, resultados, eventos, penalizaciones, clima); las trazas de vuelta (muestras de acelerador, freno, direccion, velocidad, marcha, ERS, DRS); los setups capturados en tus sesiones y tus valoraciones de ellos; y tus preferencias de la app (host y puerto de conexion, juego seleccionado, idioma, unidades, ajustes de voz y coaching de Jax, ajuste de retencion de datos). Tu controlas cuanto tiempo se conservan los datos mas pesados en <strong>Ajustes → SUPPORT</strong> (captura y retencion de datos), y puedes borrar sesiones individuales o todas en cualquier momento."],
    ["Compras", "Las suscripciones las vende Apple y las gestiona para nosotros RevenueCat, Inc. Cuando te suscribes o restauras una compra, Apple y RevenueCat procesan la transaccion y un identificador anonimo de instalacion para que la app sepa si tu suscripcion esta activa. Nunca recibimos tus datos de pago — Apple gestiona el pago por completo. Consulta la <a href=\"https://www.apple.com/legal/privacy/\">politica de privacidad de Apple</a> y la <a href=\"https://www.revenuecat.com/privacy\">politica de privacidad de RevenueCat</a>."],
    ["Diagnosticos de fallos y estabilidad", "La app usa Google Firebase Crashlytics para reportar fallos y errores y poder corregirlos. Un reporte de fallo contiene informacion tecnica — el error, la ruta de codigo, el modelo de dispositivo, la version del sistema operativo, la version de la app y un identificador anonimo de instalacion. No contiene tu telemetria, ni tu historial de sesiones, ni tus setups, ni nada que te identifique personalmente. No usamos estos datos para publicidad y no estan vinculados a una identidad. Consulta la <a href=\"https://firebase.google.com/support/privacy\">informacion de privacidad de Firebase</a>."],
    ["Copia de seguridad en iCloud de tu historial de sesiones", "Si tu dispositivo tiene iCloud activado y disponible, la app puede respaldar tu historial de sesiones y tus datos de liga en <strong>el contenedor privado de iCloud de la propia app</strong> (<code>iCloud.com.camilore.jaxmaxdelta</code>), dentro de <strong>tu</strong> cuenta de iCloud. Es una funcion ya publicada, y esta politica lo dice con claridad. La copia contiene registros de sesiones y ligas; <strong>no</strong> contiene archivos de trazas de vuelta ni de datos de carrera, que permanecen solo en el dispositivo que los capturo. El contenedor pertenece a tu cuenta de Apple y Apple provee el almacenamiento — <strong>nosotros no tenemos acceso</strong>: no podemos leer, listar ni recuperar tus copias. La app conserva la copia mas reciente mas hasta cinco copias fechadas, y elimina las mas antiguas. Antes de restaurar, la app escribe una copia de seguridad local en tu dispositivo para que la restauracion se pueda deshacer, y restaurar nunca sobrescribe una sesion que ya esta en el dispositivo. Para eliminar estas copias, borra los datos de la app en iCloud desde los Ajustes de iOS, o elimina la app. El tratamiento de los datos de iCloud por parte de Apple se rige por la politica de privacidad de Apple."],
    ["Exportaciones que tu inicias", "Puedes exportar tu historial de sesiones a un archivo y compartirlo mediante la hoja de comparticion de iOS (Archivos, AirDrop, Mensajes, etc.). Esto ocurre solo cuando tu lo pides, el archivo va a donde tu lo envies, y no pasa por nosotros."],
    ["Mensajes de soporte", "Si contactas con soporte, recibimos unicamente lo que eliges enviarnos — normalmente tu email, el modelo de dispositivo, la version de la app y una descripcion del problema. Lo usamos para responderte y solucionar el problema, y para nada mas."],
    ["Lo que no hacemos", "Sin cuentas, sin registro, sin recogida de emails. Sin publicidad, sin identificadores publicitarios, sin IDFA, sin redes de anuncios. Sin seguimiento entre apps ni entre sitios, y sin aviso de App Tracking Transparency, porque no hacemos seguimiento. Sin analitica de producto ni telemetria de comportamiento enviada a nosotros. Sin venta, alquiler ni comparticion de tus datos con terceros. Sin recogida de ubicacion — la app no solicita acceso a la ubicacion. Sin acceso a contactos, fotos, microfono ni camara."],
    ["Bases legales (usuarios del EEE/Reino Unido)", "Cuando se aplica el RGPD, nos basamos en el <strong>contrato</strong> — tratar la compra y el estado de la suscripcion para darte las funciones que has pagado — y en el <strong>interes legitimo</strong> — los diagnosticos de fallos, para evitar que la app falle en tu dispositivo, ponderado frente al hecho de que esos datos son tecnicos y no estan vinculados a una identidad. No tratamos categorias especiales de datos y no realizamos decisiones automatizadas con efectos juridicos."],
    ["Conservacion", "Los datos en tu dispositivo se conservan hasta que los borres, ya sea eliminando sesiones en la app, dejando que tu ajuste de retencion depure las trazas, o eliminando la app. Las copias de iCloud permanecen en tu propio contenedor hasta que las borres; la app conserva la mas reciente mas cinco copias fechadas. Los reportes de fallos los conserva Firebase segun los periodos de retencion publicados por Google para Crashlytics. Los registros de compra los conservan Apple y RevenueCat segun sus propias politicas."],
    ["Tus derechos", "Como no tenemos cuentas ni un directorio de usuarios, la mayor parte de tus datos esta bajo tu control directo: puedes verlos, exportarlos y borrarlos dentro de la app. Para los datos limitados que tienen nuestros encargados (diagnosticos de fallos, estado de compra), puedes escribirnos a support@jaxmaxdelta.com y te ayudaremos a ejercer tus derechos de acceso, rectificacion, supresion, limitacion, oposicion y portabilidad cuando correspondan. Si estas en el EEE o el Reino Unido, tambien tienes derecho a reclamar ante tu autoridad de proteccion de datos. Residentes de California: no vendemos ni compartimos informacion personal segun define la CCPA/CPRA, y no ofrecemos incentivos economicos por datos."],
    ["Ninos", "Jax Max Delta tiene clasificacion 4+ y es apto para publico general, pero esta disenado para pilotos de sim racing y no esta dirigido a ninos. No recogemos conscientemente informacion personal de ninos. Si crees que un nino nos ha facilitado informacion personal, contactanos y la borraremos."],
    ["Android", "Esta seccion entra en vigor solo cuando se publique una version para Android. Cuando Jax Max Delta llegue a Android, los datos de sesion se guardaran en el dispositivo de la misma forma, y el propio mecanismo de copia de seguridad de Android (Android Auto Backup / Backup by Google One) podra incluir datos de la app en la copia alojada en tu propia cuenta de Google, bajo los terminos de Google y fuera de nuestro acceso — la misma postura que la copia de iCloud en iOS."],
    ["Transferencias internacionales", "Nuestros encargados (Apple, Google, RevenueCat) operan globalmente y pueden tratar datos en Estados Unidos y otros paises, bajo sus propias salvaguardas publicadas y clausulas contractuales tipo."],
    ["Cambios en esta politica", "Si esta politica cambia, actualizaremos la fecha de entrada en vigor en la parte superior y publicaremos la nueva version en esta direccion. Los cambios importantes tambien se indicaran en las notas de version de la app."],
    ["Contacto", "Marc Beaudry, que opera tambien como Camilore — 47 rue de l'Etoile, Gatineau, Quebec, Canada, J9A 2X5. Email: support@jaxmaxdelta.com."]
  ];
  return lang === "fr" ? fr : es;
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
    ${section(t.home.featuresTitle, t.home.featuresIntro, featureCards(t.home.pillars))}
    <section class="section" id="platforms"><div class="wrap split"><div><div class="section-kicker">${t.home.supportedTitle}</div><h2>${t.home.supportedTitle}</h2><p class="lead">${t.home.supportedBody}</p><div class="logo-strip"><span class="pill">iPhone</span><span class="pill">iPad</span><span class="pill">Xbox</span><span class="pill">PlayStation</span><span class="pill">PC</span><span class="pill">UDP telemetry</span><span class="pill">Supported racing games</span></div></div><div class="media-panel"><img src="${asset("jax_baseball_cap _and_more.png")}" alt="Jax Max Delta brand merchandise"></div></div></section>
    <section class="section" id="early"><div class="wrap"><div class="panel"><div class="section-kicker">${t.home.earlyTitle}</div><h2>${t.home.earlyTitle}</h2><p class="lead">${t.home.earlyBody}</p><div class="cta-row"><a class="btn btn-primary" href="https://testflight.apple.com/join/placeholder">${t.common.ctaJoin}</a><a class="btn btn-secondary" href="https://apps.apple.com/app/id-placeholder">${t.common.ctaTry}</a><a class="btn btn-secondary" href="${route(lang, "support.html")}">${t.common.ctaSupport}</a></div><p class="notice">${t.common.placeholder}</p></div></div></section>
    ${section(t.home.quickLinksTitle, "", cards(t.home.quickLinks.map(([a,b,c]) => [a,b,route(lang,c)]), true))}
  `;
}

function features(t) {
  return `
    ${pageHero(t.common.eyebrow, t.features.title, t.features.intro)}
    <section class="section">
      <div class="wrap">
        <div class="section-heading">
          <div><div class="section-kicker">Jax Max Delta</div><h2>${t.features.current}</h2></div>
          <span></span>
        </div>
      </div>
      ${t.features.groups.map((g, i) => featureGroup(g, i % 2 === 1)).join("")}
    </section>
    ${section(t.features.future, "", cards(t.features.roadmap))}
  `;
}

function featureGroup(g, flip) {
  const shots = g.screenshots || [];
  const mediaHtml = shots.length ? `
    <div class="how-media">
      ${shots.length === 1
        ? howShot(shots[0][0], shots[0][1])
        : `<div class="how-shots-grid">${shots.map(([f, c]) => howShot(f, c)).join("")}</div>`
      }
    </div>` : "";

  const itemsHtml = g.items ? `<ul class="feat-list">${g.items.map(x => `<li>${x}</li>`).join("")}</ul>` : "";

  const contentHtml = `
    <div class="feat-content">
      <div class="card-accent"></div>
      <h3>${g.title}</h3>
      <p>${g.body}</p>
      ${itemsHtml}
    </div>`;

  return `
    <div class="feat-group">
      <div class="wrap how-split${flip ? " feat-flip" : ""}">
        ${flip ? `${mediaHtml}${contentHtml}` : `${contentHtml}${mediaHtml}`}
      </div>
    </div>`;
}

function how(t) {
  return `
    ${pageHero(t.common.eyebrow, t.how.title, t.how.intro)}
    ${t.how.sections.map(sec => howSection(sec)).join("")}
    ${section(t.how.troubleTitle, "", cards(t.how.trouble))}
  `;
}

function howSection(sec) {
  const stepsHtml = (sec.steps || []).map(([a, b], i) =>
    `<article class="step-item"><span class="step-num">${i + 1}</span><h3>${a}</h3><p>${b}</p></article>`
  ).join("");

  const legendHtml = sec.legend ? `
    <div class="dash-legend">
      ${sec.legend.map(([k, v]) => `<div class="legend-item"><span class="legend-key">${k}</span><span class="legend-val">${v}</span></div>`).join("")}
    </div>` : "";

  const tabsHtml = sec.tabs ? `
    <div class="tab-pills">
      ${sec.tabs.map(t => `<span class="tab-pill">${t}</span>`).join("")}
    </div>` : "";

  const contentHtml = `<div class="how-content">${tabsHtml}<div class="step-list">${stepsHtml}</div>${legendHtml}</div>`;

  const shots = sec.screenshots || [];
  const screenshotsHtml = shots.length ? `
    <div class="how-media">
      ${shots.length === 1
        ? howShot(shots[0][0], shots[0][1])
        : `<div class="how-shots-grid">${shots.map(([f, c]) => howShot(f, c)).join("")}</div>`
      }
    </div>` : "";

  const splitClass = `how-split${sec.portrait ? " how-split--portrait" : ""}`;

  return `
    <section class="how-section">
      <div class="wrap">
        <div class="how-section-header">
          <span class="section-kicker">${sec.kicker}</span>
          <h2>${sec.title}</h2>
          <p class="lead">${sec.intro}</p>
        </div>
        <div class="${splitClass}">
          ${contentHtml}
          ${screenshotsHtml}
        </div>
      </div>
    </section>`;
}

function howShot(file, caption) {
  return `<figure class="how-shot"><img src="${asset("screenshots/" + file)}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;
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
