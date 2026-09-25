# Preview video

Drop the Race Replay preview clip here, then set `video` on the
`raceReplayLandscape` slot in the `SHOTS` table at the top of `assets/site.js`:

```js
raceReplayLandscape: { file: "race-replay-landscape.png", orientation: "landscape",
                       video: "jmd-preview.mp4", videoWebm: "jmd-preview.webm" }
```

- `video` (required): H.264 MP4, about 1280px wide, 25–30 s, no audio track
  needed (it always plays muted). Aim for 3–5 MB.
- `videoWebm` (optional): a WebM version; browsers that support it load it first.
- `videoW` / `videoH` (optional): the clip's pixel size, if it isn't the
  iPhone 2868 × 1320 ratio. This reserves the right space before it loads.
- The slot's screenshot (`file`) becomes the poster frame, so set it too;
  with a poster the video isn't downloaded until it's needed.
- Per-language clips work like screenshots:
  `video: { en: "preview-en.mp4", fr: "preview-fr.mp4", es: "preview-es.mp4" }`.

Behaviour: plays muted and looping while on screen, pauses off screen, has a
play/pause button, and never autoplays for visitors who prefer reduced motion.
The clip appears wherever that slot is used: the homepage Race Replay section,
Features → Race Replay, and How It Works step 10.

Any other slot can take a `video` the same way.
