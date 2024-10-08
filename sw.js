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
  // Daftar jadwal pelajaran
const schedules = [
    {
        day: 'Senin',
        time: '07:00 - 07:40',
        subject: 'Upacara',
        teacher: 'Guru Upacara'
    },
    {
        day: 'Selasa', // Ubah sesuai hari ini
        time: '18:00 - 19:00', // Waktu uji coba
        subject: 'Jadwal Uji Coba',
        teacher: 'Guru Uji Coba'
    },
    {
        day: 'Selasa', // Ubah sesuai hari ini
        time: '19:00 - 19:30', // Waktu uji coba
        subject: 'Jadwal Uji Coba',
        teacher: 'Guru Uji Coba'
    },    {
        day: 'Selasa', // Ubah sesuai hari ini
        time: '19:30 - 20:00', // Waktu uji coba
        subject: 'Jadwal Uji Coba',
        teacher: 'Guru Uji Coba'
    },    {
        day: 'Selasa', // Ubah sesuai hari ini
        time: '20:00 - 20:30', // Waktu uji coba
        subject: 'Jadwal Uji Coba',
        teacher: 'Guru Uji Coba'
    }
];

// Function untuk memeriksa jadwal dan menampilkan notifikasi
function checkSchedule() {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('id-ID', { weekday: 'long' }); // Mengambil hari saat ini
    const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();
    
    // Cek setiap entri jadwal
    schedules.forEach(schedule => {
        const scheduleDay = schedule.day;
        const [startTime, endTime] = schedule.time.split(' - ').map(t => {
            const [hours, minutes] = t.split(':').map(Number);
            return hours * 60 + minutes;
        });

        if (currentDay === scheduleDay && currentMinutes >= startTime && currentMinutes < endTime) {
            console.log("Notifikasi akan muncul: " + schedule.subject + " oleh " + schedule.teacher);
            self.registration.showNotification(schedule.subject, {
                body: `Pengajaran oleh ${schedule.teacher}`,
                icon: 'icon-url.png', // Ganti dengan URL icon yang sesuai
                badge: 'badge-url.png', // Ganti dengan URL badge yang sesuai jika ada
            });
        }
    });
}

// Memanggil fungsi checkSchedule setiap menit
setInterval(checkSchedule, 60000); // Periksa setiap 60 detik
