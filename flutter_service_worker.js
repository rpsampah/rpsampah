'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "63f40e22f27526380f60c7293665c27f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8177017cbb2c309de48daa68e38a00f8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "629e07ef9c642f224fc698b825d4214c",
".git/logs/refs/heads/main": "3d73740e6aa236b3e15d884e64928e01",
".git/objects/05/369feeaaa45811096ccb93f9ddeaf4c445b4fc": "b9e511ba271238d63d349a2d9d59ffd5",
".git/objects/12/e72113a494849eefb411d79d0b3cb748e66950": "3a36e3350dcb9fdb6b1fbd969ba166a0",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/23/1eff786fd1a5ccfd99840e5fd8ba9eb899858a": "a9aae1bc7dafe5c9bcac57e803b29ace",
".git/objects/2b/7e4a2d9ac1d36d05f9f74f6a1e1d1c4c489254": "59a3430bcbe46e50a464dd84eeb9f515",
".git/objects/2b/a72533a4e6f82521667c07880bdd0f120f4f0a": "1883f54a6751a1591e0b17d8ca1202b0",
".git/objects/2c/69325ade8da1f41adff90fc81b7a7de93679dc": "0b30f06b9ebff7f1e56f8197e9357a1d",
".git/objects/2c/a6d08df4cb6da32586a924d32485dc5690585c": "d7d9752d1699b651e63bd1660633e7df",
".git/objects/31/b73ce12e104a38f8ee1e675edf377657254946": "39db80af7c01c9fbfb7ab2f8c70a4736",
".git/objects/37/010f46a313851531fe46baa0695f6118378b83": "478c2bff01828c71077663ffb789c9be",
".git/objects/38/fb8551980cada9b1dd7e258cdb8721baca6faa": "f8f19de1a49dba14b36587e3c76a9426",
".git/objects/3a/1859668fea048cc6c53be5189519e9b80d8624": "a15caaaafb18274b778889455ce96448",
".git/objects/3c/27dcd22d76785d15193eecc787b043a60c19f8": "6cd6784b7abc32b636b43d54d9ab0a5b",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4b/e26bbc3e86dc7e85596115d6c1e676717851e8": "276e44c55ca590d1b1d109f58707f32f",
".git/objects/4e/28532032d04a3bdb1dd3ab4e48a0d5c9716977": "c7815e9d8eed897220a346ac492ade28",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/880b39992b37c4dbb53f5b28902ee5559b9166": "b28bb41bfb424571f2e1d5c08902b14c",
".git/objects/7e/5c71dca482f7bbb79cd9a7d5d9535e3db6b9f4": "46da9af9f042d7c8576b142e6e045639",
".git/objects/86/38aa7180e5c42d866a2921f131aaa396f214ff": "84c7da7c3cb13866ad926b36a2b934be",
".git/objects/86/55ec5eff908595f52bbd8edb11b81ba8fd133d": "7b421668bb4d7535c5cc18b633c94439",
".git/objects/91/01647d42a136af768a97748af97341b12387ad": "5f33ca06ee99deb67a39adf90ab07394",
".git/objects/92/5c1d9689df3a3a456e702b5eab509e31fd1cdc": "46f9dfb9601b4f414e7b259ea5931e8f",
".git/objects/94/de9ac32b77a7a90cd2f1a5b541489c1668518b": "ca5e0002ef97d0bd53fb9679e31641a4",
".git/objects/95/d5789d8212d82ac0970b628a199d42ee69a467": "abf517e308eed4274a2c370bd842ca9b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/e4d756c6a81518bd9d1515d68d887193742930": "e060fd346b874898affeb82c98114c69",
".git/objects/b8/7d628d2c5b74e3424b53125f7d3d07a2267552": "84a1f7919986fc398ed6e15029b80f4a",
".git/objects/bd/cce949d5e5e0aeb1ac63b96c6914f49a24cf1e": "66a4dd83709764c18b2690d2ab8260bf",
".git/objects/c1/52fd677f2dd6fa7b1bdc0f0d99b5d11dcd4e05": "0484ee9ed9b642ae424a1f1bea1e450a",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/93f0ec1e6dc2375bc6d389a6ff9eb09a1609b1": "f388d18436c4fb36bcf836eb56e8b2e1",
".git/objects/d1/cf1543c66d7c992f052937dd5243b70a03547d": "85f76448d5f10dd130b5141cdd5474b5",
".git/objects/d4/0f2c3b4061aa4a7eda9c2684f306280c6fa2fc": "0689a9c9aff83a25c838b18c928a7379",
".git/objects/d9/2883796c882328f308d070fe553a0565afa548": "0a3d9ec47bbbdfcfe7504268ff94a389",
".git/objects/d9/e65753d918bd8f17f8e09dbbd93bc45e295e06": "368828130234580f525c1815397e8cc2",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/c5293235ad21873e4a7a092e4446df320e9cfe": "c081977457e317c637c04a5e0fc8df89",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/ff/61e462262b06ca151846b93632de21fb92d287": "f1a6ae6bbdf958b06cdb7311d3c12273",
".git/refs/heads/main": "845b22f302ebebbe4ed5a4c403a968e3",
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
"assets/NOTICES": "988f8e184e2ac94e9f66510c2a86b53b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "62b3d8fa7df466c0af5363a46550eaeb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "0fa335932ff6642d55c20327de14ca82",
"icons/Icon-512.png": "4e438abc954460b36c037f60f2b07981",
"icons/Icon-maskable-192.png": "0fa335932ff6642d55c20327de14ca82",
"icons/Icon-maskable-512.png": "4e438abc954460b36c037f60f2b07981",
"index.html": "92ed2d8f395129511ea1e015b2615df8",
"/": "92ed2d8f395129511ea1e015b2615df8",
"main.dart.js": "243672dea0ec9eadf6df92acfa1965c1",
"manifest.json": "184fb21d217b9679802536a7f6137543",
"version.json": "2e8dcd3e7cffaff6e84da0960970c030"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
