console.log(document.location.href)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('Companion').then((cache) => cache.addAll([
      '/Companion/Conan/index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
