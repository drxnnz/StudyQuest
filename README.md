# StudyQuest
Play. Study. Level up. A single-page study app: flashcards, quizzes, AI deck generation, offline and installable.

## Files
- `index.html` the whole app
- `sw.js` offline cache (bump `VERSION` each deploy)
- `manifest.webmanifest` + `icons/` + `favicon.ico` install support
- `vercel.json` hosting headers

## Deploy
1. Create a GitHub repo and upload everything in this folder (keep the folder structure).
2. On vercel.com choose **Add New > Project**, import the repo.
3. Framework preset: **Other**. No build command, no output directory. Deploy.
4. Open the Vercel link on your phone: Android/Chrome shows Install, iPhone uses Share > Add to Home Screen.

## Updating
Edit `index.html`, change `VERSION` in `sw.js` (e.g. `studyquest-v3`), push. Vercel redeploys automatically.

## Notes
- User data stays in each person's browser (localStorage). Nothing is sent to your server.
- AI keys are entered by each user and sent only to the provider they choose.
