# Kaur Financial Insights - Simple Site

A lightweight, vanilla JS static website inspired by the structure of [klubfin.com](https://klubfin.com/) with a light orange theme.

## Run locally

Open `index.html` directly in your browser, or serve the folder:

```bash
# macOS (Python)
python3 -m http.server 5173 --directory "."
# then visit http://localhost:5173
```

## Edit
- Update colors and spacing in `styles.css`.
- Modify content and sections in `index.html`.
- Basic interactions (smooth scroll, FAQ) are in `script.js`.

## Google Calendar integration
- The appointment form opens a prefilled Google Calendar event (30-minute slot) in a new tab using the Calendar template URL.
- Fields included: title (service), start/end based on selected date/time, and details (name, email, phone, notes).
- This is client-side only and does not require API keys.

## Calendly embed
- Inline scheduler is embedded via `<div class="calendly-inline-widget" data-url="https://calendly.com/your-username/consultation">` in `index.html`.
- Popup scheduler uses the official script and `Calendly.initPopupWidget` bound to the "Open Popup Scheduler" button.
- Replace `your-username/consultation` with your actual Calendly scheduling link.

## Deploy
You can deploy this folder to any static host (GitHub Pages, Netlify, Vercel).

### GitHub Pages
1. Create a new repo and push this folder.
2. In GitHub: Settings → Pages → Build and deployment → Deploy from branch → `main` branch, `/root`.
3. Wait for the page to build; your site will be available at the provided URL.

### Netlify
1. Go to Netlify → Add new site → Deploy manually.
2. Drag-and-drop the project folder or connect the GitHub repo.
3. Use default settings; site deploys automatically.

## Credits
- Design inspiration: [klubfin.com](https://klubfin.com/)
