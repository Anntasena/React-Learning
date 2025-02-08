## What is React query

======================

## React Query

> React query adalah library yang powerfull untuk mengelola remote (server) state

> Banyak developer bahkan mendeskripsikan React query sebagai fetching data library yang tidak dimiliki oleh react itu sendiri

> Memungkinkan kita untuk menulis lebih sedikit kode untuk fetching data dari API dan mengelola semua data tersebut, pada saat yang sama bahkan membuat pengalaman aplikasi (UX) kita menjadi lebih baik

    -> Data yang diambil dan disimpan di "cache"
        1. Cache di React Query adalah tempat penyimpanan sementara untuk data yang telah di-fetch. Jika data tersebut sudah ada dalam cache, maka React Query bisa langsung mengambilnya tanpa harus melakukan request ulang ke server.
        2. Cache ini berfungsi untuk mengurangi jumlah request, meningkatkan responsivitas aplikasi, dan memberikan pengalaman pengguna yang lebih baik.

    -> Loading otomatis dan error state

    -> React query juga secara otomatis re-fetching (mengambil ulang) data di situasi tertentu dan membuatnya tetap singkron

    -> Pre-fetching data yang berarti fetch data yang kita tau akan diperlukan nanti, tetapi sebelum data tersebut benar-benar ditampilkan di layar
      1. Contoh: Pagination dimana kita bisa melakukan pre-fetching data tidak hanya untuk halaman saat ini, tetapi dihalaman berikutnya

    -> Easy remote state mutation (updating)

    -> Offline support

> Dibutuhkan karna pada dasarnya semua remote state itu berbeda dengan UI state, ini bersifat asynchronous dan biasanya digunakan bersama oleh banyak user

## HOW TO INSTAL React Querry / Tanstack

[Disebut @tanstack karna ini bekerja untuk svelte dan vue framework bukan hanya react]

> Versi terbaru

- npm install @tanstack/react-query

> Versi 4

- npm install @tanstack/react-query@4

## HOW TO INSTAL React Querry Devtools

[Pasang devtools sesuai versi libray yang di install]

> Versi 4

- npm install @tanstack/react-query-devtools@4
