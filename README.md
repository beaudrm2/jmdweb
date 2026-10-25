# Jax Max Delta website

Static multilingual website for [Jax Max Delta](https://jaxmaxdelta.com), a
product owned and operated by [Camilore Inc.](https://camilore.com).

Customer support, feedback, privacy and subscription questions use
`support@jaxmaxdelta.com`. Do not substitute a personal address or the Camilore
corporate mailbox.

## Local validation

There is no dependency installation or compilation step. GitHub Pages serves the
HTML, CSS, JavaScript and assets directly.

```sh
python3 scripts/validate_site.py
python3 -m http.server 4173
```

Where Node.js is available, also run `node --check assets/site.js`. This checkout
does not require Node to build or deploy.

The validator checks local links, sitemap targets, support destinations, legal
routes, corporate attribution, publisher metadata and JSON-LD. Browser testing
should cover desktop and mobile widths in English, French and Spanish.

Deployment, legal-review status, App Store checks and repository-transfer steps
are documented in [`docs/CAMILORE_OWNERSHIP_MIGRATION.md`](docs/CAMILORE_OWNERSHIP_MIGRATION.md).
