StudyQuest web app pack
FILES: index.html, manifest.json, sw.js, vercel.json, fonts/, icons/
DEPLOY (Vercel): upload this folder (or push to GitHub and import). No build step. Framework preset: Other. Output directory: root.
OFFLINE: open the site once online. The service worker saves everything. After that it opens with no internet. AI features still need internet.
INSTALL: Android Chrome/Brave: menu > Install app, or the Install app button. Desktop Chrome/Edge: icon in address bar. iPhone Safari: Share > Add to Home Screen.
MOVE DATA: Help & About > Export my data on the old device, then Import data on the new one.
UPDATE: change V in sw.js (studyquest-v2 to v3) every time you change files, then redeploy.
