# **(15) React Form**

## **Resume**

Dalam materi ini, mempelajari:
1. Basic Form
2. Controlled & Uncontrolled Component
3. Form Validation

### **Basic Form**
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.

Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.

Macam-macam form:
- Elemen \<input>\
Biasanya digunakan inputan yang tidak terlalu panjang.\
Contoh type pada elemen \<input>:
    - Radio Button\
    Merupakan salah satu type di elemen \<input>. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton.
    - Checkbox\
    Merupakan salah satu type di elemen \<input>. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.
- Elemen \<textarea>\
Biasanya digunakan inputan yang cukup panjang. Semisal deskripsi.
- Elemen \<select>\
Biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.

Type - type pada elemen \<input>:
- text (default)
- button
- color
- checkbox
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit 
- tel
- time
- url
- week

### **Controlled & Uncontrolled Component**

#### Controlled Component
Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.

Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.

#### Uncontrolled Component
Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value

Kita bisa menggunakan defaultChecked untuk \<input type="checkbox"> dan \<input type="radio">, serta defaultValue untuk \<select> dan \<textarea>.

Pada HTML, sebuah \<input type="file"> memungkinkan pengguna untuk memilih satu atau beberapa flle dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API.

Dalam React, sebuah \<input type="file" /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

Controlled vs Uncrontrolled:\
![Controlled vs Uncrontrolled](../summary-img/controlledvsuncontrolled.JPG)

### **Basic Validation**
Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :
- Mencari input data yang benar dan sesuai format.\
Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- Melindungi akun pengguna.\
Misalnya, membuat pengguna untuk memasukkan data password yang aman
- Melindungi sistem/aplikasi\
Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

#### Client-side Validation
Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.

Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.

#### Server-side Validation
Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit.

Form validation bisa dengan 2 cara:
1. Built-in Form Validation:
    - required\
    Digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.
    - minlength dan maxlength\
    Digunakan untuk menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan. Jika kurang dari minlength akan muncul pemberitahuan, dan tidak bisa melebihi maxlength.
    - min dan max\
    Digunakan untuk menentukan nilai minimum dan maksimum angka yang bisa dimasukkan.
    - type\
    Digunakan untuk menentukan apakah data berupa angka, email, atau type yang lainnya.
    - pattern\
    Digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan.
2. Javascript:
    - Ketika ada perubahan di form. Ketika ada perubahan, akan mentrigger event onChange. Kelebihannya validasi akan cukup real-time berdasarkan perubahan data, namun fungsi akan terus dipanggil selama ada perubahan. Bisa dikombinasikan dengan disable button.
    - Ketika menekan tombol submit. Ketika menekan tombol submit, akan mentrigger event onSubmit. Kelebihannya validasi cukup sekali, namun tidak akan real-time memvalidasi form. 

## **Task**

### Membuat formulir yang berjudul "Pendaftaran Peserta Coding Bootcamp" dengan ketentuan tertentu.

Hasil dari praktikum:

![Screenshot hasil](./screenshots/hasil.JPG)

Link Repositori:\
https://github.com/MalvinoTan/tugas-react-form.git
