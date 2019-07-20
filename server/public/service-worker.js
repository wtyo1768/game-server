importScripts("/precache-manifest.93a3848a9532f5753275f7d56d0cc371.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'kyronus' })

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function(event) {
  console.log('[PWA] Installing service worker')
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        console.log('cache', cacheNames)
        return Promise.all(
          cacheNames.map(cacheToDelete => {
            return caches.delete(cacheToDelete)
          })
        )
      })
      .then(() => self.clients.claim())
  )
})


workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate()
)

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)
