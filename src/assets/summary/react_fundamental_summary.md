# **(11) React Fundamental**

## **Resume**

Dalam materi ini, mempelajari:
1. JSX dan Struktur Direktori pada React
2. Komponen dan Lifecycle pada React
3. Render Bersyarat, Render List dan Styling

### **JSX dan Struktur Direktori pada React**

#### JSX
JSX (Javascript XML) merupakan ekstensi pada javascript.

Alasan menggunakan JSX:
- Dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Separation of Technology -> Separation of Concerns

Spesifikasi Jenis Elemen React:
- Kapitalisasi untuk komponen React
- Huruf kecil untuk komponen bawaan

Expression pada JSX:
- Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal.
- Setelah JSX dikompilasi, ekspresi JSX akan menjadi panggilan fungsi javascript biasa dan menjadi objek javascript..

Atribut dengan JSX:
- Tanda kutip untuk menentukan string literal
- Kurung kurawal untuk menyematkan ekspresi javascript
- React DOM menggunakan camelCase sebagai konvensi penamaan

Menspesifikasikan Elemen Anak dengan JSX:
- Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan />
- Tag JSX dimungkinkan untuk memiliki elemen anak

#### Struktur Direktori
React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder.

Beberapa contoh struktur direktori pada React:\
!['Struktur direktori 1'](../summary-img/struktur-direktori-1.JPG)

!['Struktur direktori 2'](../summary-img/struktur-direktori-2.JPG)

!['Struktur direktori 3'](../summary-img/struktur-direktori-3.JPG)

### **Komponen dan Lifecycle pada React**

#### Komponen React
Komponen pada React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior dan state sebagian UI.

Contoh pembagian Komponen:\
!['Pembagian Komponen'](../summary-img/pembagian-komponen.JPG)

Terdapat 2 jenis komponen:
- Function Component
- Class Component

#### Lifecycle React
!['Lifecycle React'](../summary-img/lifecycle-react.JPG)

### **Render Bersyarat, Render List dan Styling**

#### Render Bersyarat
Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja berdasarkan state.

Beberapa cara untuk melakukan render bersyarat:
- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

#### Render List
Kita dapat membangun koleksi dan beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal.

Pada list sebaiknya ditambahkan Key yang digunakan untuk membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan atau dihilangkan.

#### Styling
Beberapa styling yang bisa digunakan pada React:
- Classes dan CSS\
!['Styling React 1'](../summary-img/styling-react-1.JPG)

- Atribut Style\
!['Styling React 2-1'](../summary-img/styling-react-2-1.JPG)\
!['Styling React 2-2'](../summary-img/styling-react-2-2.JPG)


- Modul CSS\
!['Styling React 3'](../summary-img/styling-react-3.JPG)

## **Task**

### Membuat Todo List sederhana menggunakan ReactJS yang menerapkan komposisi komponen, implementasi list rendering & styling.

Hasil dari praktikum:

!['Screenshot Hasil'](./screenshots/hasil.JPG)

Link Repositori:\
https://github.com/MalvinoTan/tugas-react-fundamental.git

