# **(14) React Hook**

## **Resume**

Dalam materi ini, mempelajari:
1. Introduction to React Hooks
2. useState & useEffect
3. Custom Hooks

### **Introduction to React Hooks**
Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

Motivasi React Hooks:
- Kesulitan untuk menggunakan kembali stateful logic antar komponen
- Komponen kompleks menjadi sulit untuk dimengerti
- Kelas membingungkan manusia dan mesin

Hooks dasar:
- useState
- useEffect
- useContext

Hooks tambahan:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Aturan pada React Hooks:
- Hanya panggil Hooks di Tingkat Atas
- Hanya panggil Hooks dari Fungsi-Fungsi React

### **useState & useEffect**
Penggunaan useState:

!['Penggunaan useState-1'](../summary-img/penggunaan-hooks.JPG)

!['Penggunaan useState-2'](../summary-img/penggunaan-hooks-2.JPG)

Penggunaan useEffect:
Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component.

componentDidMount, componentDidUpdate, dan componentWillUnmount ≈ useEffect.

Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan.

!['Penggunaan useEffect-1'](../summary-img/penggunaan-useeffect-1.JPG)

!['Penggunaan useEffect-2'](../summary-img/penggunaan-useeffect-2.JPG)

### **Custom Hooks**
Membuat Hook Kita sendiri memungkinkan Kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.

!['Penggunaan Custom Hooks-1'](../summary-img/custom-hooks-1.JPG)

!['Penggunaan Custom Hooks-2'](../summary-img/custom-hooks-2.JPG)

!['Penggunaan Custom Hooks-3'](../summary-img/custom-hooks-3.JPG)

## **Task**

### Melanjutkan task event handling dengan mengubah class component menjadi functional component dan menrapkan Hooks.

Hasil dari praktikum:

!['Screenshot Hasil'](./screenshots/hasil.JPG)

Link Repositori:\
https://github.com/MalvinoTan/tugas-react-hook.git

