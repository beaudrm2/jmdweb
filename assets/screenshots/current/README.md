# Current app screenshots

Drop current Jax Max Delta captures here, then set the matching `file` in the
`SHOTS` table at the top of `assets/site.js`. Until a slot has a file, the site
shows a styled "Current screenshot coming soon" placeholder in its place.

| Slot (`SHOTS` key)     | Suggested file name            | Orientation |
|------------------------|--------------------------------|-------------|
| `home`                 | `home.png`                     | landscape   |
| `prepare`              | `prepare-session.png`          | portrait    |
| `dashboard`            | `dashboard.png`                | landscape   |
| `pitWallTiming`        | `pit-wall-timing.png`          | landscape   |
| `pitWallMap`           | `pit-wall-map.png`             | landscape   |
| `pitWallGame`          | `pit-wall-game.png`            | landscape   |
| `sessionHistory`       | `session-history.png`          | portrait    |
| `raceResults`          | `race-results.png`             | portrait    |
| `raceReplayPortrait`   | `race-replay-portrait.png`     | portrait    |
| `raceReplayLandscape`  | `race-replay-landscape.png`    | landscape   |

Slots assume an iPhone Pro Max capture (2868 × 1320 landscape, 1320 × 2868
portrait). For other sizes, add `w` and `h` to the slot so the page reserves
the right space. A slot can also take one file per language:
`file: { en: "dashboard-en.png", fr: "dashboard-fr.png", es: "dashboard-es.png" }`.

Keep each file reasonably small (under ~400 KB): PNG from the device, or a
high-quality JPEG/WebP export.
