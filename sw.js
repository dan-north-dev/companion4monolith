const Application = self.registration.scope.match(/^.*\/([a-zA-Z0-9-_]*)\/$/)[1];
const Version = self.serviceWorker.scriptURL.match(/^.*?Version=([0-9.]*)$/)[1];
const CACHE_NAME = 'Companion-' + Application + '-' + Version;

const urlsToCache = [
  Application + '/index.html',
  'engine/vendors/js/jquery-3.1.1.js',
  'engine/general/errors.1.js',
  'engine/general/utils.0.21.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('Initial filling cache ' + CACHE_NAME);
    await cache.addAll(urlsToCache);
  })());  
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    if (e.request.method !== "POST")
    {
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
    }
    return response;
  })());
});

/*self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'START') 
  {

  }
});*/

self.addEventListener('activate', function(event) {
    event.waitUntil(new Promise(() => {
        // Become available to all pages
        self.clients.claim(); // TODO instead notify of a new version
         
        // Remove obsolete caches
        caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
            if(CACHE_NAME.indexOf(key) === -1) 
            {
                console.log('Removing old cache ' + key);
                return caches.delete(key);
            }
          }));
        });
    })); 
});
