## Lindblum Design website

Static marketing page for Lindblum Design, showcasing capabilities and projects with a filterable, lightbox-enabled gallery and a “coming soon” roadmap.

### Structure
- `index.html` — page markup and section ordering.
- `style.css` — visuals, layout, animations.
- `script.js` — project data, filter logic, lightbox carousel, and link extraction from project text files.
- `projects/` — image assets and per-project `.txt` notes used for link extraction.

### Running
Open `index.html` in a browser. No build step or dependencies are required.

### Editing notes
- Project cards: update/add items in the `projects` array in `script.js`. Each entry supports `images` (array), `textPath` (for link scraping), `links` (inline links), and `tags`.
- If you add new project assets, place them under `projects/<category>/<project>/` and reference relative paths in `script.js`.
- Lightbox: clicking a card opens the carousel; arrow keys and dots navigate; ESC closes.
- Coming soon: content lives in the “coming-soon” section of `index.html`.

### Styling cues
- Colors and typography are defined in `style.css` under the `:root` variables.
- Landing animations use the `.reveal` class and the `page-loaded` body class set in `script.js`.

### Quick checks
- After edits, reload `index.html` to verify images load and animations play.
- Ensure any new external links are present either inline in `script.js` (`links`) or inside the corresponding `.txt` file so cards render them.
