// sw.js
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          './',
          './index.html',
          './css/style.css',
          './js/script.js',
          // Tambahkan file lain yang perlu dicache
        ]);
      })
    );
  });
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated.');
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new message!',
        icon: './icon.png',
        vibrate: [200, 100, 200],
    };
  
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });