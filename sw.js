const Application = self.registration.scope.match(/^.*\/([a-zA-Z0-9-_]*)\/$/)[1];
const Version = self.serviceWorker.scriptURL.match(/^.*?Version=([0-9.]*)$/)[1];
const CACHE_NAME = 'Companion-' + Application + '-' + Version;

const urlsToCache = [
  Application + '/',
  'engine/vendors/js/jquery-3.1.1.js',
  'engine/general/errors.1.js',
  'engine/general/utils.0.21.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
        caches.open(CACHE_NAME)
              .then(function(cache) {
        console.log('Filling cache ' + CACHE_NAME);
        return cache.addAll(urlsToCache);
  }));
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
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
