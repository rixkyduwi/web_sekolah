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
        teacher: '',
        audio: '1584060643254_Upacara Bendera Dimulai.mp3'
    },
    {
        day: 'Senin',
        time: '07:40 - 08:20',
        subject: 'K1',
        teacher: 'Guru K1',
        audio: '1584060560496_Pelajaran ke 2.mp3'
    },
    {
        day: 'Senin',
        time: '08:20 - 09:00',
        subject: 'K1',
        teacher: 'Guru K1',
        audio: '1584060590547_Pelajaran ke 3.mp3'
    },
    {
        day: 'Senin',
        time: '09:00 - 09:40',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060600660_Pelajaran ke 4.mp3'
    },
    {
        day: 'Senin',
        time: '09:40 - 10:20',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060611001_Pelajaran ke 5.mp3'
    },
    {
        day: 'Senin',
        time: '10:20 - 11:00',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060620488_Pelajaran ke 6.mp3'
    },
    {
        day: 'Senin',
        time: '11:00 - 11:15',
        subject: 'ISTIRAHAT',
        teacher: '',
        audio: '1584060631925_Pelajaran ke 7.mp3'
    },
    {
        day: 'Selasa',
        time: '07:00 - 07:40',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060552139_Pelajaran ke 1.mp3'
    },
    {
        day: 'Selasa',
        time: '07:40 - 08:20',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060560496_Pelajaran ke 2.mp3'
    },
    {
        day: 'Selasa',
        time: '08:20 - 09:00',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060590547_Pelajaran ke 3.mp3'
    },
    {
        day: 'Selasa',
        time: '09:00 - 09:40',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060600660_Pelajaran ke 4.mp3'
    },
    {
        day: 'Selasa',
        time: '09:40 - 10:20',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060611001_Pelajaran ke 5.mp3'
    },
    {
        day: 'Selasa',
        time: '10:20 - 11:00',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060620488_Pelajaran ke 6.mp3'
    },
    {
        day: 'Rabu',
        time: '07:00 - 07:40',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060552139_Pelajaran ke 1.mp3'
    },
    {
        day: 'Rabu',
        time: '07:40 - 08:20',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060560496_Pelajaran ke 2.mp3'
    },
    {
        day: 'Rabu',
        time: '08:20 - 09:00',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060590547_Pelajaran ke 3.mp3'
    },
    {
        day: 'Rabu',
        time: '09:00 - 09:40',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060600660_Pelajaran ke 4.mp3'
    },
    {
        day: 'Rabu',
        time: '09:40 - 10:20',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060611001_Pelajaran ke 5.mp3'
    },
    {
        day: 'Rabu',
        time: '10:20 - 11:00',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060620488_Pelajaran ke 6.mp3'
    },
    {
        day: 'Kamis',
        time: '07:00 - 07:40',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060552139_Pelajaran ke 1.mp3'
    },
    {
        day: 'Kamis',
        time: '07:40 - 08:20',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060560496_Pelajaran ke 2.mp3'
    },
    {
        day: 'Kamis',
        time: '08:20 - 09:00',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060590547_Pelajaran ke 3.mp3'
    },
    {
        day: 'Kamis',
        time: '09:00 - 09:40',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060600660_Pelajaran ke 4.mp3'
    },
    {
        day: 'Kamis',
        time: '09:40 - 10:20',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060611001_Pelajaran ke 5.mp3'
    },
    {
        day: 'Kamis',
        time: '10:20 - 11:00',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060620488_Pelajaran ke 6.mp3'
    },
    {
        day: 'Jumat',
        time: '07:00 - 07:40',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060552139_Pelajaran ke 1.mp3'
    },
    {
        day: 'Jumat',
        time: '07:40 - 08:20',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060560496_Pelajaran ke 2.mp3'
    },
    {
        day: 'Jumat',
        time: '08:20 - 09:00',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060590547_Pelajaran ke 3.mp3'
    },
    {
        day: 'Jumat',
        time: '09:00 - 09:40',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060600660_Pelajaran ke 4.mp3'
    },
    {
        day: 'Jumat',
        time: '09:40 - 10:20',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060611001_Pelajaran ke 5.mp3'
    },
    {
        day: 'Jumat',
        time: '10:20 - 11:00',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060620488_Pelajaran ke 6.mp3'
    },
    
    {
        day: 'Jumat',
        time: '11:55 - 12:00',
        subject: 'Sholat Jumat',
        teacher: '',
        audio: '1584060661658_5 Menit Awal Sholat Jum\'at.mp3'
    },
    {
        day: 'Sabtu',
        time: '07:00 - 07:40',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060552139_Pelajaran ke 1.mp3'
    },
    {
        day: 'Sabtu',
        time: '07:40 - 08:20',
        subject: 'K8',
        teacher: 'Guru K8',
        audio: '1584060560496_Pelajaran ke 2.mp3'
    },
    {
        day: 'Sabtu',
        time: '08:20 - 09:00',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060590547_Pelajaran ke 3.mp3'
    },
    {
        day: 'Sabtu',
        time: '09:00 - 09:40',
        subject: 'L9',
        teacher: 'Guru L9',
        audio: '1584060600660_Pelajaran ke 4.mp3'
    },
    {
        day: 'Sabtu',
        time: '09:40 - 10:20',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060611001_Pelajaran ke 5.mp3'
    },
    {
        day: 'Sabtu',
        time: '10:20 - 11:00',
        subject: 'C15',
        teacher: 'Guru C15',
        audio: '1584060620488_Pelajaran ke 6.mp3'
    },
    
];


// Set untuk menyimpan jadwal yang sedang ditampilkan
const notifiedSchedules = new Set();

// Function untuk memeriksa jadwal dan menampilkan notifikasi
function checkSchedule() {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('id-ID', { weekday: 'long' });
    const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();

    schedules.forEach(schedule => {
        const scheduleDay = schedule.day;
        const [startTime, endTime] = schedule.time.split(' - ').map(t => {
            const [hours, minutes] = t.split(':').map(Number);
            return hours * 60 + minutes;
        });

        const notificationTime = startTime - 5; // 5 menit sebelum pelajaran
        const endNotificationTime = endTime + 2; // 2 menit setelah pelajaran

        if (currentDay === scheduleDay && currentMinutes >= notificationTime && currentMinutes <= endNotificationTime) {
            if (!notifiedSchedules.has(schedule.subject)) {
                console.log("Notifikasi muncul: " + schedule.subject + " oleh " + schedule.teacher);

                // Tampilkan notifikasi
                self.registration.showNotification(schedule.subject, {
                    body: `Pengajaran oleh ${schedule.teacher}`,
                    // icon: 'icon-url.png', // Ganti dengan URL icon yang sesuai
                    // badge: 'badge-url.png', // Ganti dengan URL badge yang sesuai jika ada
                });

                // Memutar suara notifikasi
                // const audio = new Audio('assets/sounds/notification.mp3'); // Ganti dengan path file suara kamu
                // audio.play();

                notifiedSchedules.add(schedule.subject); // Tandai jadwal ini sudah ditampilkan
            }
        } else {
            if (currentMinutes > endNotificationTime) {
                notifiedSchedules.delete(schedule.subject);
            }
        }
    });
}

// Memanggil fungsi checkSchedule setiap menit
setInterval(checkSchedule, 60000); // Periksa setiap 60 detik
