StudyQuest web app pack
FILES: index.html, manifest.json, sw.js, vercel.json, fonts/, icons/
DEPLOY (Vercel): upload this folder (or push to GitHub and import). No build step. Framework preset: Other. Output directory: root.
OFFLINE: open the site once online. The service worker saves everything. After that it opens with no internet. AI features still need internet.
INSTALL: Android Chrome/Brave: menu > Install app, or the Install app button. Desktop Chrome/Edge: icon in address bar. iPhone Safari: Share > Add to Home Screen.
MOVE DATA: Help & About > Export my data on the old device, then Import data on the new one.
UPDATE: change V in sw.js (studyquest-v3 to v4) every time you change files, then redeploy.
INTER FONT: this pack could not include Inter. Download InterVariable.woff2 from https://rsms.me/inter/ and put it in fonts/ (name: InterVariable.woff2). Without it the app uses the bundled fallback font. With it, the app caches it for offline.
