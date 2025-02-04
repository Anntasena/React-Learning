The project: Leleno
-------------------
Leleno --> 🟢 leleno adalah butik hotel dengan berberapa kabin kayu yang mewah
       --> 🟢 App ini memerlukan aplikasi khusus dimana mereka dapat mengelola segala sesuatu tentang hotel mereka, seperti booking, kabin dan guest 
       --> 🟢 Pada dasarnay ini adalah aplikasi internal yang akan digunakan oleh bisnis didalam hotel untuk melakukan check-in pada tamu saat mereka tiba
       --> 🟢 App ini memerlukan API karna saat ini app ini belum memiliki apa apa
       --> 🟢 Kemudian saat app ini lebih stabil secara bisnis, app ini menerapkan "customer-facing website" dimana customer dapat memesan kamar sendiri dan ini akan bekerja dengan API yang sama
       

Review: How to plan a react application
---
1. Kita perlu mengumpulkan persyaratan bisnis dan fitur yang harus diterapkan
2. Membagi aplikasi menjadi berberapa "pages", pada dasarnya memikirkan UI dan bagaiman kita membagi semua menjadi komponen
3. Membagi aplikasi juga kedalam katagori fitur yang berbeda atau disebut "feature categories"
4. Memutuskan "library" yang digunakan (diskusi teknologi)


Project requirements from the business
---
🌸 1. Authentication
🌸 2. Cabins features
🌸 3. Booking features
🌸 4. Check-in/out features
🌸 5. Guest features
🌸 6. Dashboard features
🌸 7. Setting features


⚪ > User app adalah karyawan hotel, mereka perlu login untuk masuk ke aplikasi untuk menjalankan tugas
🟠 > New user hanya bisa daftar di dalam aplikasi
⚪ > User harus upload foto sebagai avatar, dan merubah nama + passwordnya
🟠 > App butuh tabel yang melihat semua kabin, yang di dalamnya menampilkan foto kabin, nama, kapasitas, harga, dan diskon saat ini
⚪ > User mampu mengupdate atau menghapus kabin, dan membuat kabin baru (termasuk upload foto)
🟠 > App memerlukan tabel yang melihat semua booking, menampilkan tanggal tiba dan keberangkatan, status, dan biaya yang harus di bayar, tentunya data kabin berserta tamu
⚪ > Booking status bisa "unconfirmed" (sudah di pesan tetapi belum checkin), "checkin" atau "checkout". tabel harus bisa di filter sesuai booking status
🟠 > Data booking lainnya termasuk, nomer tamu, jumlah nomer permalam, observasi tamu, apakah tamu memesan breakfast", harga breakfast
⚪ > User harus bisa untuk "delete", check-in, check-out booking saat mereka tiba
🟠 > Booking mungking belum dibayar saat kedatangan tamu, karna itu, saat check-in, user perlu menerima pembayaran (diluar applikasi), dan konfirmasi pembayaran akan diterima di dalam app
⚪ > Saat check-in, tamu harus bisa mempunyai kemampuan untuk menambahkan breakfast selama masa menginap, jika mereka belum melakukannya
🟠 > Data tamu harus berisi: fullname, email, national ID, nationality, dan bendera negara untuk mempermudah identifikasi
⚪ > Layar aplikasi awal harus dashboard, untuk menampilkan informasi penting seperti 7, 30, 90 hari terakhir
      > 🪶 Daftar tamu yang check-in dan check-out di hari ini. user harus bisa untuk melakukan tugas dari sini
      > 🪶 Statistik booking terkini, sales, check-in dan tingkat hunian (occupacy rates)
      > 🪶 Chart untuk menampilkan penjualan hotel harian, menampilkan kedua "total" sales dan "extra" sales (hanya breakfast untuk saat ini)
      > 🪶 Char untuk menampilkan durasi, karna ini adalah matrik terpenting untuk hotel saat ini
🟠 > User harus dapat mendefinisikan berberapa pengaturan diseluruh applikasi: harga breakfast, min/max booking, max guest/booking
⚪ > App bisa dark mode


Featrues + Pages
---
💿 Feature categories
🌸 1. Authentication
🌸 2. Cabins features
🌸 3. Booking features
🌸 4. Check-in/out features
🌸 5. Guest features
🌸 6. Dashboard features
🌸 7. Setting features

💾 Pages yang diperlukan
🌻 1. Dashboard "/dashboard"
🌻 2. Bookings "/bookings"
🌻 3. Cabin "/cabin"
🌻 4. Booking check-in "/checkin/:bookingID"
🌻 5. App settings "/settings"
🌻 6. User sign up "/users" 
🌻 7. Login "/login"
🌻 8. Account settings "/account"

Tech decision (CSR / SSR)
---
App menggunakan CSR (client side rendering)

🌿 > Rounting (React router)
🌿 > Styling (Styled component)
🌿 > Remote state management (React Query)
🌿 > UI state management (Context API)
🌿 > Form management (React Hook Form)
🌿 > Other tools (React icons / React hot toast "notification" / Recharts / date-fns "date manipulation" / Supabase)
🌿 >
🌿 >