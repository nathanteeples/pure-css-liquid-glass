# Pure CSS Liquid Glass Demo

This repository contains a single-page experiment that recreates a neon "liquid glass" interface by combining gradients, blur, and translucent layers with pure CSS.

## Interactive controls (tint, opacity, blur, refraction)
The page exposes four sliders plus a sheen toggle so you can fine-tune the glass card:

- **Glass tint** adjusts the hue that feeds the gradients.
- **Opacity** raises or lowers the translucency, which also influences the caustic highlight.
- **Blur** increases the backdrop blur radius (handy for simulating thick glass).
- **Refraction** offsets the internal highlights to mimic bending light.
- **Surface sheen** toggles the reflective outline.

Only a few lines of JavaScript (`script.js`) listen for input events and update CSS custom properties, so the visual treatment remains purely CSS. If you ever want a static snapshot, simply omit the script tag and the `script.js` file—the card will fall back to its default variable values.

## Previewing in Your Browser Without Downloading
You can view the demo directly from GitHub without cloning the project locally:

1. Copy the raw file URL for `index.html`. On GitHub, open the file, click the **Raw** button, and copy the URL from your browser bar.
2. Visit [https://htmlpreview.github.io](https://htmlpreview.github.io).
3. Paste the raw `index.html` URL at the end of `https://htmlpreview.github.io/?` so it looks like:
   ```
   https://htmlpreview.github.io/?https://raw.githubusercontent.com/<username>/pure-css-liquid-glass/main/index.html
   ```
4. Press **Enter**. The service proxies the HTML and assets straight from the repo, so you can interact with the page instantly—no downloads or local server required.

### Optional: Publish with GitHub Pages
If you expect to revisit the demo often, enable GitHub Pages for the repository (Settings → Pages → Source: Deploy from a branch). Select the default branch and root directory, then GitHub will host the site at `https://<username>.github.io/pure-css-liquid-glass/` for easy sharing.
