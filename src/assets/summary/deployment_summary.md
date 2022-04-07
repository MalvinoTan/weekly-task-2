# **(18) Deployment**

## **Resume**

Dalam materi ini, mempelajari:
1. Build React App
2. Perkenalan Deployment
3. Deployment dengan Surge dan Netlify CLI

### **Build React App**
Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat.

Build akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.

Cara build:\
_npm run build_

Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve. Caranya:\
_npm install -g serve_ , kemudian _serve -s build_

### **Perkenalan Deployment**
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

### **Deployment dengan Surge dan Netlify CLI**

#### Surge
Surge adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers.

Website statik yang menggunakan surge akan memiliki subdomain *.surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

Cara menginstall surge:\
_npm install --global surge_

Cara deploy menggunakan surge:\
Jalankan perintah _surge_ di terminal

Cara membuat offline:\
_surge teardown *.surge.sh_

#### Netlify CLI
Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. 

Netlify memungkinkan kita untuk mempublish website statis secara gratis. 

Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.

Cara menginstall Netlify CLI:\
_npm install netlify-cli -g_

Cara deploy menggunakan Netlify CLI:
- Jalankan perintah _netlify deploy_ di terminal.
- Verify akun melalui browser, pilih Authorize.
- Pilih "Create & configure a new site".
- Untuk team, pilih yang sudah tersedia. Site name opsional.
- Pilih lokasi file yang akan di deploy. Pilih ./build.

## **Task**

### Mendeploy code create-react-app yang sedikit diubah menggunakan Surge/Netlify

Hasil dari praktikum:

!['Screenshot Hasil'](./screenshots/hasil.JPG)

Link Website:\
https://taskdeploy-malvinoaustintanura.surge.sh/

Link Repositori:\
https://github.com/MalvinoTan/tugas-deployment.git



