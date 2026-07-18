const cacheName = 'jogo-v1';
const assets = [
  './',
  './index.html',
  './icon.png'
];

// Instala o Service Worker e guarda os arquivos do jogo no celular
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Carrega o jogo a partir do dispositivo, sem precisar de internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
