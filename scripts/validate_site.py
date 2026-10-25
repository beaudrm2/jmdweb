#!/usr/bin/env python3
"""Zero-dependency integrity checks for the static Jax Max Delta website."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent
FAILURES: list[str] = []


def check(condition: bool, message: str) -> None:
    if not condition:
        FAILURES.append(message)


def exists_as_page(path: Path) -> bool:
    return path.is_file() or (path.is_dir() and (path / "index.html").is_file())


all_files = [
    path
    for path in ROOT.rglob("*")
    if path.is_file()
    and not any(part in {".git", "node_modules", "dist", "build"} for part in path.parts)
]
public_html = [
    path
    for path in all_files
    if path.suffix == ".html" and path.relative_to(ROOT).parts[0] in {"en", "fr", "es"}
]
text_files = [
    path
    for path in all_files
    if path.suffix.lower() in {".html", ".js", ".css", ".md", ".xml", ".txt", ".yml", ".yaml", ".json"}
]

for path in public_html:
    source = path.read_text(encoding="utf-8")
    label = path.relative_to(ROOT)
    check('<link rel="canonical"' in source, f"{label}: missing canonical URL")
    check('property="og:title"' in source, f"{label}: missing Open Graph title")
    check(
        '<meta name="publisher" content="Camilore Inc.">' in source,
        f"{label}: missing publisher metadata",
    )

    for target in re.findall(r'(?:href|src)="([^"]+)"', source):
        if re.match(r"^(?:https?:|mailto:|#|data:)", target):
            continue
        bare = re.split(r"[?#]", target, maxsplit=1)[0]
        if not bare:
            continue
        resolved = (path.parent / unquote(bare)).resolve()
        check(exists_as_page(resolved), f"{label}: missing local target {target}")

for lang in ("en", "fr", "es"):
    source = (ROOT / lang / "index.html").read_text(encoding="utf-8")
    block = re.search(
        r'<script type="application/ld\+json">\s*([\s\S]*?)\s*</script>', source
    )
    check(block is not None, f"{lang}/index.html: missing JSON-LD")
    if block:
        try:
            structured = json.loads(block.group(1))
            check(
                structured.get("@type") == "SoftwareApplication",
                f"{lang}/index.html: JSON-LD is not SoftwareApplication",
            )
            check(
                structured.get("publisher", {}).get("name") == "Camilore Inc.",
                f"{lang}/index.html: JSON-LD publisher mismatch",
            )
        except json.JSONDecodeError as error:
            FAILURES.append(f"{lang}/index.html: invalid JSON-LD ({error})")

published = "\n".join(
    path.read_text(encoding="utf-8")
    for path in text_files
    if path.relative_to(ROOT).parts[0] != "scripts"
)
check(
    re.search(r"Marc Beaudry|47 rue de l['’]Etoile|support@camilore\.com", published, re.I)
    is None,
    "personal or wrong support identity remains in published text",
)
check(re.search(r"<form\b", published, re.I) is None, "unexpected contact form found")

emails = re.findall(r"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", published, re.I)
for email in sorted(set(value.lower() for value in emails)):
    check(email == "support@jaxmaxdelta.com", f"unexpected customer-facing email: {email}")

site_js = (ROOT / "assets" / "site.js").read_text(encoding="utf-8")
check('contact: "support@jaxmaxdelta.com"' in site_js, "support destination is incorrect")
check(
    "Jax Max Delta is a product of Camilore Inc." in site_js,
    "English product attribution missing",
)
check(
    "© 2026 Camilore Inc. All rights reserved." in site_js,
    "English copyright missing",
)
check("Legal review status:" in site_js, "English legal review notice missing")
check((ROOT / "en" / "privacy.html").is_file(), "English privacy route missing")
check((ROOT / "en" / "terms.html").is_file(), "English terms route missing")

sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
for raw_path in re.findall(r"<loc>https://jaxmaxdelta\.com([^<]*)</loc>", sitemap):
    url_path = urlsplit(unquote(raw_path)).path
    local = f"{url_path}index.html" if url_path.endswith("/") else url_path
    check(exists_as_page(ROOT / local.lstrip("/")), f"sitemap target missing: {url_path}")

if FAILURES:
    print(f"Site validation failed ({len(FAILURES)}):", file=sys.stderr)
    for failure in FAILURES:
        print(f"- {failure}", file=sys.stderr)
    raise SystemExit(1)

print(
    f"Site validation passed: {len(public_html)} localized pages, "
    f"{len(emails)} email references, support/legal/metadata checks clean."
)
