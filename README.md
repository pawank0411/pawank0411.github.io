# Navratri Memories

A bilingual Navratri memories website with an animated dandiya couple in the hero section and Pawan's festive profile portrait.

## Run locally
Open `index.html` in a browser.

## Deploy
Upload the contents of this folder to Netlify or another static website host.

## Profile photo
Pawan's profile image is bundled at `images/pawan-profile.png` and is referenced by `index.html`.


Branding update: the navigation logo now uses the supplied Birla White logo image at `images/birla-white-logo.jpg`. Keep the `images` folder alongside `index.html` when deploying.

## Day-wise Navdurga names and photo placeholders
The nine day cards now show the traditional Navdurga names in English and Hindi. To add a photo to a card, place a JPG image in `images/` using these exact filenames:
- `day-01.jpg` — Maa Shailputri
- `day-02.jpg` — Maa Brahmacharini
- `day-03.jpg` — Maa Chandraghanta
- `day-04.jpg` — Maa Kushmanda
- `day-05.jpg` — Maa Skandamata
- `day-06.jpg` — Maa Katyayani
- `day-07.jpg` — Maa Kalaratri
- `day-08.jpg` — Maa Mahagauri
- `day-09.jpg` — Maa Siddhidatri

Until a file is added, each card displays a photo placeholder with the expected filename.
## Layout and security notes

- Night 10 (Dussehra / Vijayadashami) is centered on its own row on mobile and desktop.
- Netlify response security headers are configured in `netlify.toml`. Redeploy the folder contents for them to take effect.
- This is a static website: security headers help reduce common browser-based risks, but they do not make public photos private. Anyone who can view a publicly hosted image may be able to save or screenshot it.
- To keep photos private, store them in a private Google Drive folder and grant access only to approved people, or use an authenticated photo service. Do not put passwords, API keys, or private credentials in HTML/JavaScript.
- Protect website editing by enabling two-factor authentication on the Netlify/GitHub account, using a strong unique password, and limiting collaborator access. Only account/repository owners with write access should be able to deploy changes.
## Deploying to GitHub Pages (`username.github.io`)

1. Create a public repository named exactly `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. In Settings → Pages, choose deployment from the `main` branch and `/ (root)` if required.
4. Visit `https://YOUR-USERNAME.github.io`.

## Security and privacy

- GitHub Pages is static hosting and does not apply Netlify `netlify.toml` headers. This package intentionally omits that file.
- A public Pages site and its repository contents are public. Do not upload private photos, passwords, API keys, or other secrets.
- Browser-side code cannot prevent visitors from saving or screenshotting photos that are visible to them.
- Protect editing by enabling two-factor authentication on GitHub, using a unique strong password, and reviewing repository collaborators and deploy workflows.
- If you need a private gallery, use an authenticated service/storage solution; GitHub Pages alone cannot enforce viewer login for the site.
## Configuration (no editable placeholders in `index.html`)

All changeable values are in `site-config.js`: 10 Google Drive album links, 10 card image paths, one LinkedIn URL. The page reads this file and does not display “Add photo” or “Add album link” placeholder text.

1. `site-config.js` is included as a starting template; edit it with your real values.
2. Fill in the ten `driveUrl` values, ten image paths, `linkedinUrl`.
3. Put day images in `images/` using `day-01.jpg` through `day-10.jpg`.

**GitHub Pages caveat:** There is no `.gitignore` in this version, so `site-config.js` and the day images can be committed and deployed with the site. Public images, album links, and LinkedIn URL are visible to visitors once deployed; do not place sensitive information here.
