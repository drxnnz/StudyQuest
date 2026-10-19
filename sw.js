/* StudyQuest service worker: caches the app so it opens offline.
   Bump VERSION on every deploy so devices pick up the new copy. */
const VERSION="studyquest-v2",FILES=["./","./index.html","./manifest.webmanifest","./favicon.ico","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png","./icons/icon.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const r=e.request;
 if(r.method!=="GET"||!r.url.startsWith(self.location.origin))return; /* never touch AI API calls */
 /* Network first so updates show up; fall back to cache when offline. */
 e.respondWith(fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(VERSION).then(c=>c.put(r,copy)).catch(()=>{})}return res}).catch(()=>caches.match(r).then(m=>m||caches.match("./index.html"))));
});
