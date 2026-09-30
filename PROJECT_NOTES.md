# EBUCA Portfolio — Project Record

This file is the running handoff record for the EBUCA portfolio. Update it when the site or its integrations change.

## Where the project lives

- GitHub repository: https://github.com/Ebukaenyinnaya7/ebuca
- Live website: https://ebuca.vercel.app
- Local Windows folder (current computer): `C:\Users\HP\Desktop\React Projects\ebuca`
- Production deploys are connected to the GitHub `main` branch through Vercel.

## What we have built

- Responsive React portfolio with Home, About, Skills, and Contact pages.
- EBUCA logo and emblem stored in `public/logo/`.
- About page with Ebuka's introduction, learning journey, and contact call-to-action.
- Skills page with separate HTML, CSS, JavaScript, and React sections and images in `public/images/`.
- Home page with hero, About and Skills previews, contact call-to-action, and a five-shot penalty shootout mini-game.
- Contact page with email and WhatsApp links plus a form that sends submissions through EmailJS.
- Vercel rewrite in `vercel.json` so direct visits to React routes work.

## Important implementation files

- `src/App.jsx` — routes and Home page composition.
- `src/Abouts.jsx` — About page composition.
- `src/Skill.jsx` — Skills page content.
- `src/Contact.jsx` and `src/Contact.css` — contact form, EmailJS integration, and page styling.
- `src/components/PenaltyShootout.jsx` and `src/components/PenaltyShootout.css` — Home page game.
- `src/components/` — shared page sections, navigation, hero, footer, and styles.
- `public/logo/` and `public/images/` — brand and page image assets.
- `package.json` and `package-lock.json` — dependencies and reproducible install versions.
- `vercel.json` — Vercel single-page-app route fallback.

## Restore the project on another computer

1. Install Git and Node.js.
2. Clone the GitHub repository:

   ```bash
   git clone https://github.com/Ebukaenyinnaya7/ebuca.git
   cd ebuca
   npm install
   npm run dev
   ```

3. To publish future changes, commit them and push to `main`. Vercel will build and deploy from GitHub.

The `dist/` build output and `node_modules/` are intentionally not stored in Git; the build and dependencies can be recreated with `npm run build` and `npm install`.

## Email delivery setup

The contact form uses the EmailJS browser SDK. The website contains the public service/template configuration needed to invoke the saved template; EmailJS's private credentials are not stored in this repository. On a new computer, sign in to the same EmailJS account to manage the Gmail connection and review messages in Email History.

## Backup reminder

The GitHub repository is the off-device backup for the tracked project source and assets. Keep access to the GitHub, Vercel, Google/Gmail, and EmailJS accounts available. Account passwords and private keys should stay in a password manager, not in this project record.
