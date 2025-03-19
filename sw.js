const CACHE_NAME = 'tic-tac-toe-pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/favicon-16x16.png',
  '/favicon-32x32.png'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS);
      })
      .catch((err) => {
        console.error('Failed to cache assets:', err);
      })
  );
});

// Fetch cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
