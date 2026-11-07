var CACHE = 'dokan-hisab-v2';
var URLS = [
  './',
  'index.html',
  'manifest.json',
  'icon.svg',
  'dicebear-core.mjs',
  'avataaars.json',
  'avatars/a01.svg','avatars/a02.svg','avatars/a03.svg','avatars/a04.svg','avatars/a05.svg',
  'avatars/a06.svg','avatars/a07.svg','avatars/a08.svg','avatars/a09.svg','avatars/a10.svg',
  'avatars/a11.svg','avatars/a12.svg','avatars/a13.svg','avatars/a14.svg','avatars/a15.svg',
  'avatars/a16.svg','avatars/a17.svg','avatars/a18.svg','avatars/a19.svg','avatars/a20.svg'
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(URLS); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
});
self.addEventListener('fetch', function (e) {
  e.respondWith(caches.match(e.request).then(function (r) { return r || fetch(e.request); }));
});
