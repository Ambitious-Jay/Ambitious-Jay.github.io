'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5c563ba58a078e416d964a01a699a65d",
"version.json": "12fdc9b25cefc408a7ee208b06392325",
"index.html": "b8a3790232b73298704d61ef2a2b40c9",
"/": "b8a3790232b73298704d61ef2a2b40c9",
"main.dart.js": "86a68326e56edd9d0b555a4d6aab1c18",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "edff6839a01e9d05c198ab4b23362864",
".git/config": "d35cfc804c8a6812f10c4991f47a3f16",
".git/objects/66/70b7a3976fc909b7cb0fcad67e837d42bca043": "a07a08f5f7563de01efe2b7e69f9025a",
".git/objects/50/d252eca542d3540042df9d3d8bd96842acafaf": "3bab5283351acdbbca4154648752cc40",
".git/objects/68/94f8192ba1dede376731384dfc45d8cf330616": "ac2a1289747004e56f8df697036e3c65",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/9b/d7f69d160dd25d8553acdaecd768b7d99db9e6": "329d869fb3fc96765078ed2dcc18fd19",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/be0c5035fec9080d288b78bf6a7581ea44d25b": "ff5aac37ac437ce520b0588f218fb7a4",
".git/objects/51/3a968c88ce74d0a9bd1841e10fe259709547f4": "407ed08115b8368e154c87443b1f758d",
".git/objects/67/da4da9f4838f6e6d86b5fb004b4bdf92b388b4": "cc721a0a37b6b901a36fe0355b97cfc0",
".git/objects/0b/f88dc3fd83649bac349b07ff19e2fd3b45a040": "1354f66d8c1e6f6ba094fd22edc0b332",
".git/objects/94/8e2c0427ed07d02bbe7b00525065cf81d02849": "a7db30936201b8409cc8224a031e233b",
".git/objects/60/6d00e993ac977a873ee257167b4df9cd1b13b1": "2d1eaebf70de0a781927fd6dfd1c7c70",
".git/objects/34/363cfe4c1017edf608d22ceae2b6a8a505a98f": "e8102a686bd9db2dbee69bf6c93102ed",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/02/9c80b2965c3e493e2f511c34a46b28f881b3b3": "9940abb8f3c0b45b750aa11ff79339f0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/aa63e98df9a3728a2901921462744cf11fa955": "bf986d9f076006b3cce404bc250ecee1",
".git/objects/bb/849d8a3f576e1e974ff4367397de27ef91d67b": "7cd9017856f3f7dc512a8534c7eb083a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/be75feecac3dcdc6218d052b76ccd43577e255": "2a3697132ef18a0ea5d7106cc9592cfb",
".git/objects/be/a852ede836a0baab849485428d80699f537fc8": "3f0697b9549a3d51ffbe44f952244e37",
".git/objects/da/6129fa2f80ea845631705e3049e2ded7b0b0a6": "d7b987fe5699d827a6aa7aef0185d683",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d1/053d38b18941326d9a01d9339b278ba64d99c3": "b666d329d4d51d6f78e567aabe427b0f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/def56cb5c7f38fa0c10e03b425b1483faff03d": "8ce1243b46a4d8f20790274b15445c82",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/cc14f932661967aace7752e26ad8987ab43d0f": "84c020347f7687d581bdc333565eb35e",
".git/objects/fe/b1b9779ad54a220ff12174ca021804ff2a6e1e": "e4637ad57e0789122efe5794364fcb73",
".git/objects/ec/4dd46a73e041110b48277e5c860de90aa85047": "391f9a8c89befde65b5fbd18723eece4",
".git/objects/4e/93ec7863e135eba46f5de92b60a847a7f6a97c": "67c68485f2226643ae3337f4093c1274",
".git/objects/11/aba31d23034382f5fb4bff91a06e5ca91c9f59": "e2cbfeb8113f1ebd3ded22b1929928df",
".git/objects/80/29ec49c71c963acc15c8af772a97864928aeb4": "c53c15935058b5b2b3332a3f0c918ad6",
".git/objects/7b/07ab4b1fdf33fdbff3c5cf7380eb3d61720c8d": "046b92af4fe7eed0245f1ff394ab10bf",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bceebd077ddcf93feb351137f119ab01fff702": "99edf679583507e6fe6e64cadbad4758",
".git/objects/10/3edfd1711d4368e5085e80e98a82e41e337695": "8a9ba0dcb06faec2610c8490fd8db4f4",
".git/objects/21/2a2dfa37362a9876b2a4e4035576bfcc4e87ba": "8452f4fa3b71e46ccd1331dab43493cb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/513a8b8345f912c637f47f263b295f91fdb215": "6756421da39e15f428dd17368fd66fa8",
".git/objects/5c/3af0cacdc03152c47f9a450d29f58107dc540e": "e5125eb6581818696055360fe3b21de9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/6cac1c3bfc63e0225d8e8960d187d40a382173": "10c3a9176976467c3058cefcb854c889",
".git/objects/54/e23339fbadffd043f903b1e3ed5eb86d842c4e": "e4b288fdd3c55ae4e615344a3af871e2",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/6d/60d2e169ee9bcce01b504e99d38d878e81c516": "d608964f23e101761bba938e948afdcc",
".git/objects/55/239c0cb7fd5dff1173c3e4afe599ce583f1d51": "6d9b89d2ee84cdcbd0ca0c8ea7e1c2d7",
".git/objects/0a/a4c2dc4561113d6d5d24af765bbe6d90031eaf": "5d3ea454d4acbc39629411c80da11b38",
".git/objects/64/a61ed5b486ae9cbba79dc8d7d4ba7c79b25181": "7a2af6743bd5e4332a2da88b133ffef0",
".git/objects/d3/5a59cbf346f59caa5797489ba024e30e29bec1": "8b03343f2dcc3cfaf5a5d5b7d34936b7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/cd51acf6a2f69b84818000e66176aec33a4b1f": "3aa77870892f496884940876f2a78dcd",
".git/objects/d5/6c5c8492159051d01a3e0e24056e482fb76621": "f8884efadb69d6f9f772a4ec46d1d430",
".git/objects/af/4d4b242bb90aa74c5e5cf68d3aa70ca4a1f8f9": "a8c60c0f6bb17a9da93628179c4c7385",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "87b0c4cbc0d8b799df3a50cce3dd305e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/be77a63ced0b426160b6d98d967857ee60b115": "c1d3e6333732925c113fd25fafc1fde6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/cd/c537b0c25a097eec822b155fa8edcbc6f4d820": "18d040fef99d60295bb5c2fad8184533",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e6/5eccd7570bec0dbb3aa68a3e04be38ba6b6eee": "643030c446ee8ac1ada03e070e8afc11",
".git/objects/f7/89a42a7e588c27390bbfefece9cf033d92983e": "a04ff157b08f82fa267babfa75356347",
".git/objects/c5/ab6fa814e8870cfcaeca086d59290231eba128": "e07c1de2af2572c280cb8e3013b98046",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f6e6520ab75a09aa3975b582dc5bbd03c2a424": "7282830a02d850a3ee2ae45fa0a5b85d",
".git/objects/2c/a10f762308fe967566380a4d72087a84d1e722": "6bacd4b6ca8997599b4173d1995c8739",
".git/objects/83/9733ed791a96c5c6bf99faabb476ff6f3bad23": "ae9600feff6766b4aa79efc685c860a0",
".git/objects/77/78f012c15debbc876f099e4703246511082b34": "e80506c3ae2a93e27729eb1ce70a13f7",
".git/objects/70/daed8560835de53e8b3b378c598b27762bc0eb": "178bddbf51f31a78a1e7f7c4a8c856ff",
".git/objects/8d/c333903d05f9d30ba54915596b4164fc06164f": "69ff464a4b95ee7f85c196137a19e383",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/49/599042353ee2e69e2c13e153bbd0479d36480e": "b7dbaace39409bb47a0a9da178adbe53",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/0a39eea7d57f9e523a39b4fbeac0683f0e27be": "d2fc15d382a68e63cb1dff8be2021bb6",
".git/objects/7a/43a1699543592b304424cdc4e3080a9a70c71a": "f71d6cf7685e98e89a12b195e2f3d9f4",
".git/objects/14/d10512ccbb5897346806d6eab3ee0b24a24bce": "84c60e32329a654aabbefad7d2a009ae",
".git/objects/8e/87a9b7530a019579995c2b6c5523622d33dda7": "b6c89f31767ad4be500f98b235814c26",
".git/objects/8e/485842034dada53105bbe02cf0489286e2be65": "8858cbf1fa3e9dbd78402b4beefbf5f2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cc984a7fc8cad5c2a2b5c1518f2b4e2",
".git/logs/refs/heads/main": "131471a103be96fe5f8181637c818edb",
".git/logs/refs/remotes/origin/main": "398eb1ea6f9921db0e8357896c58f118",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "05fa958b00cdc9ae51af50966f75ae2d",
".git/refs/remotes/origin/main": "05fa958b00cdc9ae51af50966f75ae2d",
".git/index": "f198d34f5a6caa8fad149bb87a850784",
".git/COMMIT_EDITMSG": "968ead19a0b55cdcd2c13642c4f1c215",
"assets/AssetManifest.json": "2795b1cb0116347a2d6b91ecbc7e1f6e",
"assets/NOTICES": "84a790bfaa04c503ab298f690df12baf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4e7ab9531f3e96e37f43cf0c10eb9530",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "85bed86cf1efe635f8f25922652ca4e3",
"assets/fonts/MaterialIcons-Regular.otf": "b7cb770efe1ffa7882401603c6fdad55",
"assets/assets/high_stakes_field.png": "1b77606683eae0ec7c5d0400d4ead398",
"assets/assets/blue_field_flip.jpeg": "0bfa92ad4e106bfd06c385b80d8f777f",
"assets/assets/red_field.png": "a9f67c24ef140fcedbe0c96cb3a73121",
"assets/assets/blue_field.png": "84ade8d7d5374fb46639942a071f0191",
"assets/assets/red_field_flip.png": "5c241b444da0528c3438f112bf972f2d",
"assets/assets/field.jpeg": "44e0cf02718aa348dcbac7a5753b49d5",
"assets/assets/ring.png": "8613149a3eeb4ebc122db416fd29a7da",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
