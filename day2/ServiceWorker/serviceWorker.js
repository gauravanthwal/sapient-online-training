//install - configure the cache
//activation -
//fetch - if connected , do nothing ! but if disconnected fetch resources from cache !

var cacheName = "v1";
var cacheAssets = [
  "Index.html",
  "About.html",
  "js/script.js",
  "css/style.css",
];
self.addEventListener("install", function (e) {
  console.log("Service Worker : Installed !");
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        console.log("Service Worker : Configuring Cache !");
        cache.addAll(cacheAssets);
      })
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", function (e) {
  console.log("Service Worker : Activated !");

  e.waitUntil(
    caches.keys().then(function (cachesNames) {
      return Promise.all(
        cachesNames.map(function (c) {
          if (c !== cacheName) {
            console.log("Deleting previous cache !");
            return caches.delete(c);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log("Service Worker: Fetching!");
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request); // fetch resource from the cache in case of n/w failure !
    })
  );
});
;
