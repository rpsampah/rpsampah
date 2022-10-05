'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "24f95592f8148b1b4cadd2a5ce522b07",
"assets/assets/back_arrow.png": "3019675b8692c8202527efc8be8af22b",
"assets/assets/back_arrow_white.png": "09077b7f7f86517c16b5d52755d448fd",
"assets/assets/home.png": "69f7594aab7f384dad69b06ca04fc808",
"assets/assets/home_normal.png": "398da79dbda63eb5f9191bffe77502c4",
"assets/assets/icon.png": "62b3d8fa7df466c0af5363a46550eaeb",
"assets/assets/ic_home_normal.png": "c63123a4a26a8dd4ebb9998f7a20ce4b",
"assets/assets/ic_order.png": "8045690805ce3ffa96de1364dc4ac38e",
"assets/assets/ic_order_normal.png": "290c746f46132a2e9faeb123548f47c3",
"assets/assets/image.png": "b16d2609c76f7a71c603b31b996ec473",
"assets/assets/loading.gif": "d71d8ccb7264fb1ca4a4ec9a871849d1",
"assets/assets/person.png": "c064d8a09757841f8d05c6fad78b5f58",
"assets/assets/person_normal.png": "fca142756483473aa34b1f67162e7c45",
"assets/assets/qr_code.png": "b321a29320ad2b10c183be5339a9ccd5",
"assets/assets/qr_code_normal.png": "9312ba6fd90cff4711814b4f7fae4c87",
"assets/assets/receipt.png": "cc1ddd7959e8c14b80adfb4432674b59",
"assets/assets/receipt_normal.png": "f0fe0c6f2f798312d5a9654dd35f7582",
"assets/assets/right_arrow.png": "4b8d1ace53db0b99786929be8b3aa4e2",
"assets/assets/store-solid.png": "7a86fe2098259d202cd960f81d2d467b",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7082dc5ced302461298f86f63322ce81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"favicon.png": "62b3d8fa7df466c0af5363a46550eaeb",
"icons/Icon-192.png": "0fa335932ff6642d55c20327de14ca82",
"icons/Icon-512.png": "4e438abc954460b36c037f60f2b07981",
"icons/Icon-maskable-192.png": "0fa335932ff6642d55c20327de14ca82",
"icons/Icon-maskable-512.png": "4e438abc954460b36c037f60f2b07981",
"index.html": "7d28fcfd9701cd4d9a92f96fd2952ccf",
"/": "7d28fcfd9701cd4d9a92f96fd2952ccf",
"main.dart.js": "839ef9ecc0031f6e76e18ab07d728983",
"manifest.json": "184fb21d217b9679802536a7f6137543",
"version.json": "2e8dcd3e7cffaff6e84da0960970c030"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
