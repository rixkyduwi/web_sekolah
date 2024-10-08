// sw.js
self.addEventListener('install', function(event) {
    console.log('Service Worker installed.');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated.');
  });
  
  self.addEventListener('push', function(event) {
    const options = {
      body: event.data ? event.data.text() : 'You have a new message!',
      icon: '/icon.png',
      badge: '/badge.png'
    };
  
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });
  