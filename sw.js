self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open("buildil-11").then((c) => c.addAll(["./index.html", "./icon.svg"])));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== "buildil-11").map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  if (e.request.url.includes("app.js")) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
