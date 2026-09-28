# Grassroots Residences

Booking-reference website for the short-stay rental and vehicle hire side of
[Grassroots Networking](https://github.com/superkay92-collab) — Prince Kay,
Founder & Executive Director, Accra, Ghana.

The site is a showcase and enquiry point. Guests browse the residences and the
fleet, then either book through the Airbnb listing or send an enquiry. No money
changes hands on the site.

---

## What is here

| Path | What it is |
| --- | --- |
| `grassroots-stays.html` | **The site.** One self-contained file — markup, styles, logic and every photograph embedded as a data URI. Opens from disk, from a shared link or from any host, with no build step and no server. |
| `photo-studio.html` | A standalone tool for preparing photographs. Drag images in; it resizes them, fixes EXIF rotation, names them by slug and gives you either file paths or ready-to-paste embedded versions. |
| `assets/residences/` | The 16 processed residence photographs, web-sized. |
| `assets/vehicles/` | The 11 processed vehicle photographs, web-sized. |
| `index.html`, `styles.css`, `script.js`, `brand.css` | The earlier static Grassroots Networking page. |
| `react-app/src/` | A React version of the Grassroots Networking welcome page. |

`grassroots-stays.html` already contains its own copies of everything in
`assets/`. The loose files are kept so the images can be split out and lazy
loaded when the site moves to a real domain.

## Running it

Open `grassroots-stays.html` in a browser. That is the whole procedure.

The React page needs a server:

```bash
npm install
npx vite --config react-app/vite.config.js --port 5173
```

## How the page is put together

A hash-routed single-page app: `#/`, `#/residences`, `#/residence/:slug`,
`#/fleet`, `#/accra`, `#/about`, `#/enquire`.

Two `<script>` blocks. The first holds all the logic. The second holds
`var PHOTOS = { … }` — the base64 image data — followed by the call to
`render()`. **`render()` must stay in the second block**; move it to the first
and the images will not have been defined when the first paint happens.

Residences and vehicles are plain arrays of objects near the top of the first
block. Accra rates carry two published day rates, `inAccra` and `beyond`; a null
`beyond` means the vehicle is offered for city hire only.

Illustrations are generated, not drawn by hand: a seeded PRNG produces the
skyline and landscape scenes, so any residence without photographs still gets
consistent artwork derived from the brand palette.

## Brand

Sampled from the logo itself, not from the older `brand.css`, which specifies a
blue that does not appear anywhere in the mark.

| | |
| --- | --- |
| Teal | `#0E7E80` |
| Green | `#175A0F` |
| Lime | `#A4C520` |

## What is deliberately not in this repository

The raw photo libraries — `assets/gallery/`, `event-photo-1.jpeg/` and the hero
video — come to roughly 600 MB and are excluded by `.gitignore`. The masters
stay in OneDrive. If the site ever needs to serve them from here, add them
through Git LFS rather than plain Git.

## Still to do

- Replace the remaining sample residence entries with real listings.
- Add the US Airbnb listing link.
- Swap the stock vehicle photographs for photographs of the actual cars.
- Confirm what the Accra day rates include — fuel, driver's hours, overnight stays.
- Move off the single embedded file to a hosted build with lazy-loaded images.
  At 6.7 MB the page is heavy over Ghanaian mobile data.
