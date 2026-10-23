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


## Photo-led hero and highlight carousel

The homepage now has a photo-led hero and a row of 10 highlight cards above the existing day/Drive album cards. The existing Drive album card section and its `days[].driveUrl` links are unchanged.

Edit `site-config.js`:
- `heroImages`: add 3 direct, public image URLs (`src`) for the large hero collage/slideshow.
- `highlights`: each card has `coverUrl` for its thumbnail and `photos` for its full-screen carousel.
- Add about 10–15 photo objects per highlight, e.g. `{ src: "https://example.com/photo.jpg", href: "https://example.com/original", alt: "Garba night" }`. `href` is optional.
- `tint` sets the colour wash on each thumbnail. The thumbnail uses a CSS gradient overlay above the live image URL, so it stays colourful without needing to download or sample the image pixels. This works even when an image host blocks canvas pixel access.

You can paste normal Google Drive *file* share links (for example `https://drive.google.com/file/d/FILE_ID/view?usp=drive_link`) directly into `coverUrl` and `photos`; the website extracts the file ID and converts it to a Drive thumbnail image URL. Set each image to General access → Anyone with the link. Folder links are not individual photos. Drive may still block hotlinking in some cases; if an image fails, host it on a static image host or use a supported embed/proxy. Keep the Drive album folder links in `days[].driveUrl` as before.
