# rozakter18.github.io

Personal academic portfolio of Roza Akter. Plain HTML, CSS and JavaScript: no build step.

## Put it online (first time)

1. On GitHub, create a **public** repository named exactly `rozakter18.github.io`.
2. Upload everything in this folder (keep the folder structure: `assets/`, `images/`, `files/`).
3. Go to **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After 1–3 minutes the site is live at **https://rozakter18.github.io**.

## Photo and CV

- Photo: `images/profile.jpg` (already added)
- CV: the Download CV button links to the auto-built PDF from the `rozakter18/cv` repo (see that repo's README). Nothing to update here when the CV changes.

## Edit content

All text lives in **`assets/js/data.js`**. Change the words inside the quotes, keep the quotes, commas and brackets, save, and refresh.

| To change | Look for in data.js |
|---|---|
| Badge, greeting, typing line, bio | `badge`, `greeting`, `typingLine`, `bio` |
| Social links | `links` (empty url = icon hidden) |
| Home cards | `focusAreas`, `currentWork`, `onMyDesk` |
| About page | `beliefLine`, `aboutParagraphs`, `skills` |
| Education page | `education`, `englishTest`, `coursework`, `thesis`, `achievements` |
| Research page | `researchStatement`, `research` |
| Publications | `publications` |
| Projects | `projectCategories`, `projects` |
| Menu | `NAV` (at the bottom) |

Colors are at the top of `assets/css/style.css` (`--accent` is the burnt orange).

If a page goes blank after an edit, a comma, quote or bracket is usually missing near your last change.

## To-do

- [ ] Set up the `rozakter18/cv` repo so the Download CV link works
- [ ] After IELTS: fill in `englishTest` (the section appears automatically)
- [ ] After Dec 3: ECG paper — set `status` to the published state, add DOI to `paper`, add `bibtex` (both in `research` and `publications`)
- [ ] Push ECG code and add the link
- [ ] Add Google Scholar link to `links` once the profile exists
- [ ] Optional: project thumbnails in `images/projects/`, third "Currently Working On" card
