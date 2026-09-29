self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open("kadlan-76").then((c) => c.addAll(["./icon-192.png", "./icon-512.png"])));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== "kadlan-76").map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  const url = e.request.url;
  if (url.includes("app.js") || url.includes("styles.css") || url.includes("index.html")) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
