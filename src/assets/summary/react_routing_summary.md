# **(12) React Routing**

## **Resume**

Dalam materi ini, mempelajari:
1. Routes
2. URL Parameter React
3. Hook Routing React

### **Routes**
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application).

Terdapat 2 jenis Page:
- Multi Page Application (MPA)\
Jenis aplikasi website di mana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.
- Single Page Application (SPA)\
Jenis aplikasi website di mana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

Keunggulan SPA & MPA:\
!['Keunggulan SPA & MPA'](../summary-img/keunggulan-spa-mpa.JPG)

Kekurangan SPA & MPA:\
!['Keunggulan SPA & MPA'](../summary-img/kekurangan-spa-mpa.JPG)

Cata Menginstall React Router:
_npm install react-router-dom_

**BroserRouter**
BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

**Route**
Route digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web.

**Switch**
Switch digunakan untuk membungkus kumpulan beberapa component Route

**Link**
Link digunakan untuk berpindah antar halaman, properti "to" tersebut merujuk pada path di route yang akan dituju.

### **URL Parameter React**
Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

Kegunaan URL Parameter:
- Paginasi
- Penyortiran dan Penyaringan
- Pencarian
- Menggambarkan

Perbedaan Link dan Redirect:\
!['Perbedaan Link dan Redirect'](../summary-img/perbedaan-link-redirect.JPG)

### **Hook Routing React**
**useHistory**
useHistory memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi.

Contoh Properti useHistory:\
!['Properti useHistory'](../summary-img/properti-usehistory.JPG)

**useLocation**
useLocation mengembalikan objek lokasi yang mewakili URL saat ini.

**useParams**
useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari \<Route> saat ini.

**useRouteMatch**
useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti \<Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender \<Route>.

## **Task**

### Melanjutkan hasil assignment dari react Hooks dengan menerapkan React Routing.

Hasil dari praktikum:

!['Screenshot Home 1'](./screenshots/home-1.JPG)

!['Screenshot Home 1'](./screenshots/home-2.JPG)

!['Screenshot About App'](./screenshots/about-app.JPG)

!['Screenshot About Author'](./screenshots/about-author.JPG)

!['Screenshot Not Found'](./screenshots/not-found.JPG)

Link Repositori:\
https://github.com/MalvinoTan/tugas-react-routing.git

