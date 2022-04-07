# **(17) Testing**

## **Resume**

Dalam materi ini, mempelajari:
1. Testing Introduction
2. Basic Testing dengan React Testing Library (RTL)
3. Testing Custom Hooks

### **Testing Introduction**
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

Manfaat Testing:
- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

Secara umum, cara mengetes di React terbagi menjadi dua kategori:
- Rendering component trees\
Di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
- Menjalankan aplikasi lengkap\
Di dalam environment peramban (browser) asli. Ini dikenal sebagai tes “end-to-end”.

Tools Testing:
- Jest\
Test runner pada JavaScript yang memungkinkan kita mengakses DOM melalui jsdom.
- React Testing Library (RTL)\
Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya.

Jika kita menginstall React menggunakan create-react-app, Jest dan RTL akan secara default sudah terinstall.

### **Basic Testing dengan React Testing Library (RTL)**

#### Render dan Debug

Fungsi **render** RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi **debug** RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.

!['Render dan Debug'](../summary-img/render-debug.JPG)

#### Memilih Elemen
React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.

Contoh:
- getByText
- getByLabelText
- getByPlaceholderText
- getByAltText
- getByDisplayValue

!['Memilih Elemen'](../summary-img/memilih-elemen.JPG)

#### Handle Event

!['Handle Event'](../summary-img/handle-event.JPG)

#### Handle Asynchronous
Digunakan ketika hendak mengetes fetch sebuah API.

!['Skenario Berhasil'](../summary-img/skenario-berhasil.JPG)

!['Skenario Gagal'](../summary-img/skenario-gagal.JPG)

### **Testing Custom Hooks**
Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library yang akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.

Cara install:
_npm install -D @testing-library/react-hooks_

**Testing Value**

!['Testing Value'](../summary-img/testing-value.JPG)

**Testing Callback**

!['Testing Callback'](../summary-img/testing-callback.JPG)

**Testing Re-render**

!['Testing Re-render'](../summary-img/testing-rerender.JPG)

## **Task**

### Membuat file testing dan membuat skenario testing dari source code yang diberikan.

Hasil dari praktikum:

!['Screenshot Hasil'](./screenshots/hasil.JPG)

Link Repositori:\
https://github.com/MalvinoTan/tugas-testing.git

