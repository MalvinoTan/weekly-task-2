# **(16) Global State Management and Data Fetching**

## **Resume**

Dalam materi ini, mempelajari:
1. Redux
2. Persisted State
3. Data Fetching

### **Redux**
Redux adalah library untuk manajemen state global. Redux menggunakan struktur _one-way data flow_. Redux menggunakan beberapa tipe code

Saat yang tepat untuk menggunakan Redux:
- Banyak state yang perlu ditaruh di banyak tempat
- State pada aplikasi sering berubah
- Logic untuk mengubah state kompleks
- Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
- Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

Redux Libraries dan Tools
- React-Redux
- Redux Toolkit
- Redux DevTools Extension

Komponen penting di Redux:
- Actions\
Digunakan untuk memberikan informasi dari aplikasi ke store
- Reducer\
Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
- Store\
Objek sentral yang menyimpan state pada aplikasi

Cara memakai dan mengubah state:
- Hooks
- Connect

Redux Thunk yaitu Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action serta digunakan untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data.

### **Persisted State**
Persisted State yaitu state yang disimpan pada storage sehingga state bisa disimpan secara permanen.

### **Data Fetching**
Cara - cara untuk fetching data di React:
- Fetch API
- Axios
- React Query Library

## **Task**

### Menerapkan Redux dan Redux Persist dari task sebelumnya.

Hasil dari praktikum:

!['Screenshot Hasil'](./screenshots/hasil.JPG)

Link Repositori:\
https://github.com/MalvinoTan/tugas-global-state.git

