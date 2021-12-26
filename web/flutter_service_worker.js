'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8192457a1970f74ea31434968843f7f0",
"index.html": "275bccbcc07c4966993037d1bd2a2ce8",
"/": "275bccbcc07c4966993037d1bd2a2ce8",
"main.dart.js": "824b9b161908d3f22e85b76047aad98d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "265f4c72259692e78a58ec9ac1e9ac4b",
"assets/AssetManifest.json": "db6e49ae99b67f41b25c3cede86ab687",
"assets/NOTICES": "b0e4661f7a7d204ea2c9346be91612ab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/tarot/TAROT42.jpeg": "a4991cd8026917085fe3252e2ca039b7",
"assets/tarot/TAROT15.jpeg": "6c1d269d95a7dfcfd434523176674d32",
"assets/tarot/TAROT03.jpeg": "c878a14a6fc104a41df22c89bacfe19c",
"assets/tarot/TAROT39.jpeg": "84ec42ab25973949d2824b4f3bffc6a2",
"assets/tarot/TAROT020.jpeg": "cdefd819b5c66bbc355949b918f1dfaa",
"assets/tarot/TAROT112.jpeg": "8770206d640e61018f21885a024b55c1",
"assets/tarot/TAROT19.jpeg": "7cbd20542e718e8f668187c47a73c1df",
"assets/tarot/TAROT016.jpeg": "a608c3d204fe678bba24a7085238e981",
"assets/tarot/TAROT411.jpeg": "a89cd3c68ef96dfa6d911bf8c13c4eb7",
"assets/tarot/TAROT313.jpeg": "3a888c0495135abe998dfe2b710f6d6d",
"assets/tarot/TAROT23.jpeg": "b64d912e34dd5e6da60d17a64a4bc518",
"assets/tarot/TAROT35.jpeg": "05b4e1bd1ca4be97b172024e467f53ab",
"assets/tarot/TAROT34.jpeg": "f0a9ee38399cb97bdc8c053d45a81ab0",
"assets/tarot/TAROT312.jpeg": "515a4183cb776db5df1d8e9741d916e6",
"assets/tarot/TAROT22.jpeg": "ef03c6d158f2c2c846926120ed7291e6",
"assets/tarot/TAROT410.jpeg": "7f924fe761eb498670d4cebe3ba84798",
"assets/tarot/TAROT017.jpeg": "a969545d241e2958e9015ef65e3d1fec",
"assets/tarot/TAROT18.jpeg": "b00898b615a4bf2e7fdf16e7f3eb9868",
"assets/tarot/TAROT113.jpeg": "4add4786f5cbbb1dd2bc0f653a8d553e",
"assets/tarot/TAROT021.jpeg": "ac5ec33d1e561231c980ce4c0c1015d3",
"assets/tarot/TAROT38.jpeg": "1f3798a204d11c06ba04b4b262c252e5",
"assets/tarot/TAROT02.jpeg": "43340a5932f9271a0d437efb779caaaf",
"assets/tarot/TAROT14.jpeg": "d05ebe6027365a7defb07b28f415243a",
"assets/tarot/TAROT43.jpeg": "d8a4c74159c5ec15e8fd1834cbb985a4",
"assets/tarot/TAROT114.jpeg": "d67a8f2cb5b1bd30ce19b51d01033233",
"assets/tarot/TAROT48.jpeg": "8ba92bfe6b8c697b72c44872cd2b5408",
"assets/tarot/TAROT010.jpeg": "adcab878e56df435f5044d613bd8da27",
"assets/tarot/TAROT09.jpeg": "1a9a2a389242cc01da99cc30510574b3",
"assets/tarot/TAROT25.jpeg": "225581210ff3aaef4040698fcdba7a34",
"assets/tarot/TAROT211.jpeg": "18b47fe9517093aa870b82cea13fec1c",
"assets/tarot/TAROT33.jpeg": "8f2755537c6b9069c885df8e5a2dc34d",
"assets/tarot/TAROT44.jpeg": "2b3fc477b90a99e1be38f9118ddcc1e8",
"assets/tarot/TAROT13.jpeg": "35d8b6e587fb96c31e14d488b91353ee",
"assets/tarot/TAROT05.jpeg": "7576d2ef7a1768d35d13fe43ce2a72fb",
"assets/tarot/TAROT29.jpeg": "03bdc737600429b0c7678a21ac7c3253",
"assets/tarot/TAROT28.jpeg": "10f54556b5d1fa8f6dc7c44fa63bd5b7",
"assets/tarot/TAROT04.jpeg": "74710361b0e8bef8dcfdc3310c3346ad",
"assets/tarot/TAROT12.jpeg": "a668d50e2b38afa241dc75bf5895e6f4",
"assets/tarot/TAROT45.jpeg": "511e3a0cbf51de78e4187612251da6dd",
"assets/tarot/TAROT32.jpeg": "96a4383db03b0da3d8324d4831056942",
"assets/tarot/TAROT210.jpeg": "132fb6aac42486e1bc5d7cb35c19b308",
"assets/tarot/TAROT314.jpeg": "19f11dc4644bc8364b9e645be9d65eb1",
"assets/tarot/TAROT24.jpeg": "5bf8ee962300ec6987568bb7a1108ea0",
"assets/tarot/TAROT08.jpeg": "9abe19f520340d746dc62d0372122ec3",
"assets/tarot/TAROT011.jpeg": "1248d02bca2854bc85782ef03a83bbf1",
"assets/tarot/TAROT49.jpeg": "23dc189583ec43d07fd95c6e3e0273e8",
"assets/tarot/TAROT31.jpeg": "09c8693fdc5b88daeba9d7e3901dd64e",
"assets/tarot/TAROT213.jpeg": "509195ccf9b9c4fd19ef5e5023b7ef35",
"assets/tarot/TAROT27.jpeg": "f0d464e5e7338c15a86c7d5fd6a08c9b",
"assets/tarot/TAROT012.jpeg": "84c5c17f515fc7b8cfdc05a201c45c17",
"assets/tarot/TAROT07.jpeg": "7d7eef71a3b61613119acaf173d94d16",
"assets/tarot/TAROT11.jpeg": "09680248e60885906765eeaec6b60aad",
"assets/tarot/TAROT46.jpeg": "8510ec844cabf267fca30c76c936691b",
"assets/tarot/TAROT47.jpeg": "8888a44a95a27eb5dfc104a493788543",
"assets/tarot/TAROT06.jpeg": "a5d8d68d650310134436c6ae34844b46",
"assets/tarot/TAROT013.jpeg": "b799c405fa47c2b5d7a34a1f33fce6b0",
"assets/tarot/TAROT414.jpeg": "02b8d5a398cb7eb8e7e0d49b083b4665",
"assets/tarot/TAROT26.jpeg": "33eb38798a0c2806bb1c44c8372f84c3",
"assets/tarot/TAROT212.jpeg": "913ebdd6a91554cd84dab175525e1826",
"assets/tarot/TAROT022.jpeg": "1de626798027545eeb0e28a343c48db6",
"assets/tarot/TAROT018.jpeg": "d1cf23e29047be3328904012765ff6f1",
"assets/tarot/TAROT01.jpeg": "dffac73846612ce203474561c3e91a8d",
"assets/tarot/TAROT17.jpeg": "1442e3cdd6203ea87f98c766f6020702",
"assets/tarot/TAROT37.jpeg": "848b424b8c2fc394bfbbfe1d5087b302",
"assets/tarot/TAROT311.jpeg": "146e0254b8bdbefed5ac3bfb3050b25a",
"assets/tarot/TAROT21.jpeg": "ec4d104c30f9b6dbbd0d121038dc21a6",
"assets/tarot/TAROT413.jpeg": "24374f246724834450eac3d9d9e834b5",
"assets/tarot/TAROT014.jpeg": "b1b8c6ebd90e89d99934ebd2253153f3",
"assets/tarot/TAROT110.jpeg": "c4cd0e32a130c134472a0da077d52c42",
"assets/tarot/TAROT111.jpeg": "482de3a1dbf100d8b38b25212ee9bdb8",
"assets/tarot/TAROT015.jpeg": "b07c0c6780661bbf270a9663521caacc",
"assets/tarot/TAROT412.jpeg": "f294632e2bfd8dbfb7ae940a37b4d39f",
"assets/tarot/TAROT310.jpeg": "3301a7b0e5cb6d1c378d96a7dbc1d0ab",
"assets/tarot/TAROT214.jpeg": "500f6ca49584a132096084472c7cdb95",
"assets/tarot/TAROT36.jpeg": "791f69a7774ca15addfbeab584192cb1",
"assets/tarot/TAROT41.jpeg": "033d3ad12208a91b2c89281678eafa28",
"assets/tarot/TAROT16.jpeg": "bc4bbe0910fc7b241e6e7b559aaec90f",
"assets/tarot/TAROT00.jpeg": "f53e8f64aa7eeb9530e2aecba38a51fe",
"assets/tarot/TAROT019.jpeg": "d29fdec67b90b8f0f230c2823838128d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
