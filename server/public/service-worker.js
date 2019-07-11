/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
)

importScripts('/precache-manifest.8ab7533fecdf9e67f481971325ab978d.js')

// workbox.core.setCacheNameDetails({ prefix: 'kyronus' })

// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [].concat(self.__precacheManifest || [])
// workbox.precaching.suppressWarnings()
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// self.addEventListener('install', function(event) {
//   console.log('[PWA] Installing service worker')
//   self.skipWaiting()
// })

// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       console.log('cache', cacheNames)
//       self.clients.claim()
//     })
//   )
// })

// workbox.routing.registerRoute(
//   /\.(?:js|css)$/,
//   new workbox.strategies.StaleWhileRevalidate()
// )

// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
//       })
//     ]
//   })
// )
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

self.addEventListener("install", function (event) {
  console.log("[PWA] Installing service worker");
  self.skipWaiting()
});

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
); 

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
); 

// Cache the Google Fonts webfont files
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
); 
