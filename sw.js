const m = self.serviceWorker.scriptURL.match(/^.*?Version=([0-9.]*)&Application=([a-zA-Z0-9_-]*)$/)
const Application = m[2];
const Version = m[1];
const CACHE_NAME_PREFIX = 'Companion-' + Application + '-';
const CACHE_NAME = CACHE_NAME_PREFIX + Version;

const urlsToCache = [
  Application + '/',
  Application + '/index.html',
  'engine/vendors/js/jquery-3.1.1.js',
  'engine/general/errors.1.js',
  'engine/general/utils.0.24.js'
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('Initial filling cache ' + CACHE_NAME);
    await cache.addAll(urlsToCache);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        if (e.request.url.includes("/engine/Version.json?foo="))
        {
            try
            {
                const response = await fetch(e.request);
                const serverVersion = await response.clone().json(); 
                if (serverVersion.version != Version)
                {
                    // New version released
                    console.log("A new version is available...")
                    // TODO
                }
                return response;
            }
            catch (e)
            {
                console.log("Working offline");
                return new Response(JSON.stringify({version: Version}), {headers: {'Content-Type': 'application/json'}});
            }
            
        }
        else if (e.request.method !== "POST" && e.request.url.startsWith(self.registration.scope))
    	{
            const cachedResponse = await caches.match(e.request);
            if (cachedResponse) 
            {
    	       return cachedResponse;
            }
            else
            {
                const response = await fetch(e.request);
                const cache = await caches.open(CACHE_NAME);
                cache.put(e.request, response.clone());
                return response;
            }
        }
        else
        {
            const response = await fetch(e.request);
            return response;
        }
    })());
});
/*self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});*/