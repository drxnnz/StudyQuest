StudyQuest web app pack
FILES: index.html, manifest.json, sw.js, offline.html, icons/
RUN: needs https or localhost (service worker rule). Example: python3 -m http.server 8080 then open http://localhost:8080
DEPLOY: upload the whole folder to Netlify, Vercel, Cloudflare Pages, GitHub Pages or any https host. Keep all files in the same folder.
INSTALL: Android Chrome/Brave: menu > Install app, or the in-app Install app button. Desktop Chrome/Edge: install icon in address bar. iPhone Safari: Share > Add to Home Screen.
OFFLINE: open once online. After that the app loads without internet. Study data stays in the browser on that device.
UPDATE: change V in sw.js (studyquest-v1 to studyquest-v2) each time you change files.
