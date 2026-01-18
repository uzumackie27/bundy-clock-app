const cacheName = 'bundy-pro-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Install and Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch from Cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});