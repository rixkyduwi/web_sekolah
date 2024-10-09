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