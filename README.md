# Ajit Nayak — Personal Site

A minimal, static personal website. No build step. Three files.

## Structure

```
personal-site/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── CV_AjitNayak.pdf       (headshot goes here too)
└── README.md
```

## Hosting — my recommendation: **Vercel**

Here's how I'd decide between the three sensible options for you:

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **Vercel** | Drag-and-drop deploy, instant HTTPS, free custom domain, global CDN, zero config | Requires a (free) account | ✅ Pick this |
| **Netlify** | Same as Vercel, equally good | Same | Good alt |
| **GitHub Pages** | Free, durable | Needs git, slower propagation, clunkier custom domains | Skip unless you already live in git |
| **Cloudflare Pages** | Fastest CDN | Slightly more setup | Skip for v1 |

**Why Vercel for you:** you don't have a domain yet, don't have a git workflow set up, and want this live today. Vercel lets you drag the `personal-site` folder onto their dashboard and get a URL like `ajit-nayak.vercel.app` in ~60 seconds. Later, when you buy a domain (e.g. `ajitnayak.com` from Namecheap/Porkbun, ~$10/yr), you point it to the same Vercel project — no migration.

### Deploy in 3 steps

1. Go to https://vercel.com → sign up with Google.
2. Click **Add New → Project → Deploy without Git** (or use the drop zone). Drag this entire `personal-site` folder in.
3. Done. You'll get a live URL. Share it.

### Adding a custom domain later

1. Buy a domain (Namecheap / Porkbun / Google Domains alternatives).
2. In Vercel project → **Settings → Domains → Add**.
3. Copy the DNS records Vercel gives you into your registrar. HTTPS is automatic.

## Things to do before sharing it

- [ ] Drop a headshot at `assets/headshot.jpg` (square, 800×800 minimum). I haven't wired it into the hero yet — tell me when it's in and I'll add it.
- [ ] Confirm LinkedIn URL. I assumed `linkedin.com/in/ajit-nayak` — update in `index.html` if different.
- [ ] Review the POV section — these are distilled from your Operating Manual. Rewrite any line that doesn't sound like you.
- [ ] Books list is 10 titles pulled from your inferred interests. Swap for your actual favourites.
- [ ] CV is copied in as `CV_AjitNayak.pdf` — replace with a newer version anytime.

## Local preview

Just open `index.html` in a browser. No server needed.

For a nicer local server:
```
cd personal-site
python -m http.server 8000
# open http://localhost:8000
```

## Design notes

- **Typography:** Instrument Serif (display) + Inter (body) + JetBrains Mono (accents). All free, loaded from Google Fonts.
- **Palette:** Monochrome + a single terracotta accent (`#b4471f` light / `#e8794a` dark). Matches the accent on your CV.
- **Theme:** Light + dark, with a toggle in the top-right. Defaults to system preference; choice is remembered.
- **Influences:** Rauno Freiberg, Brian Lovin, Linear's Karri Saarinen. Generous whitespace, serif headlines, muted supporting copy, no hero illustrations.
