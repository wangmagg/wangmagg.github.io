# wangmagg.github.io

Maggie Wang's personal site. Plain HTML/CSS/JS, no build step.

- `index.html` — the entire page (bio, header, research tabs)
- `style.css` — all styling
- `tabs.js` — the Research tab-switching logic
- `assets/img/pubs/` — placeholder paper thumbnails (swap the `src` in `index.html` for real figures as they're ready)
- `assets/pdf/MaggieWang_CV.pdf` — CV, linked from the header

## Preview locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

GitHub Pages is configured to serve directly from `master` / `(root)` — just push to `master`.

## Editing the Research section

Each paper is a `.entry` block; each has a matching entry under **Selected** (if it's a highlight) and under exactly one category tab. To add a paper, copy an existing `.entry` block into the right `<div class="panel" id="p-...">` and update the title link, authors, venue, year, and icon links (see the table in `style.css`'s comments / the site plan for the icon-to-label mapping: doi → `fa-solid fa-link`, pdf → `fa-regular fa-file-lines`, code → `fa-brands fa-github`, arxiv → `fa-solid fa-file-arrow-up`).
