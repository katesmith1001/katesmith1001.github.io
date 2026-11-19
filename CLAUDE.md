# katesmith.me — personal academic website

Static hand-written HTML served by GitHub Pages from `katesmith1001/katesmith1001.github.io`
(branch `main`, root directory). `CNAME` points the Pages site at **katesmith.me**.
A push to `main` is a publication: the live site updates about a minute later.

## Layout

| Path | What it is |
|---|---|
| `index.html` | About me — intro, News list, Affiliations, Recent research |
| `research/index.html` | Work in progress / Working papers / Published papers, with topic filters |
| `policy/index.html` | Policy work |
| `teaching/index.html` | Teaching |
| `313-2/index.html` | Redirect stub for the old WordPress policy URL — leave it |
| `404.html` | Not-found page |
| `assets/site.css`, `assets/site.js` | All styling and all JavaScript — no build step, no framework |
| `wp-content/uploads/YYYY/MM/` | PDFs and images, kept in the old WordPress paths so existing links keep working |
| `logos/` | Affiliation logos |
| `sitemap.xml`, `robots.txt` | Update `sitemap.xml` only if a new top-level page is added |

There is no generator, no templates and no dependencies: edit the HTML directly.
The sidebar, nav and footer are duplicated in each page — a change to one usually
has to be repeated in all four.

## Conventions

- British spelling; `lang="en-GB"`. Curly quotes and apostrophes (’ “ ”), en-dashes in ranges.
- External links: `target="_blank" rel="noopener"`. Internal links are relative
  (`research/` from the root, `../wp-content/...` from a subpage) — never absolute to katesmith.me.
- Paper entries are `<article class="paper" data-tags="...">` with `h4.p-title`, `p.p-meta`,
  optional abstract/press panels. `data-tags` must come from the chip list in
  `research/index.html`: taxation, inequality, firms, entrepreneurship, consumption, prices,
  sin, health. A tag not in that list is silently unfilterable.
- Abstract/press panels pair a `button.p-act` with `aria-controls="pN-abs"` and a
  `div.p-panel` with the matching `id`, starting `hidden`. **IDs must be unique within a page** —
  check the highest `pN` on the page before adding one.
- News items on `index.html` are newest first, `<span class="d">Month Year</span>` then the text.
- Paper status wording lives in `p-meta` ("Revise and resubmit, *Journal*, 2026";
  "*Journal*, forthcoming"). Update it in **both** `index.html` (Recent research) and
  `research/index.html` when a paper's status changes.
- New PDFs go in `wp-content/uploads/<year>/<month>/`, lowercase filenames, no spaces.

## Working here

- Keep diffs minimal — these pages are long single lines in places; don't reflow or reformat
  HTML that didn't need to change.
- Check `git pull` before starting: files have previously been uploaded through the GitHub
  web interface, so `main` can move without this clone knowing.
- Commit at logical checkpoints. **Never push without being asked** — pushing publishes.
- To preview, open the file in a browser or serve the folder
  (`python3 -m http.server` in the repo root) — relative links need a server to resolve `/` paths.
