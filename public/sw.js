// Lightweight network-only service worker to satisfy PWA installability requirements
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Always query the network directly - prevents caching stale portfolio updates
  event.respondWith(fetch(event.request));
});
