importScripts("/precache-manifest.67fe3f2b260a91cb5ed491a8131101aa.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute(self.__precacheManifest);

} 
else {
  console.log(`Workbox didn't load`);
}
