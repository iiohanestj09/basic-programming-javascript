/* Set adalah struktur data bawaan Js yang menyimpan nilai unik
-> Cocok untuk filter duplikat, cek keanggotaan, dan operasi himpunan. 
*/

// 1. Cara membuat Set
const angka = new Set([1, 2, 3, 2, 1]);
console.log(angka);

// Set tidak punya indeks sehingga tidak bisa mengkases elemen langsung tertentu.


// 2. Method Penting
  // A. .add(val)  -> Menambah nilai
  angka.add(4);
  console.log(angka);

  // B. .delete(val)  -> Menghapus nilai
  angka.delete(3);
  console.log(angka);

  // C. .has(val)  -> Mengecek apakah nilai ada
  console.log(angka.has(2));

  // D. .size  -> Jumlah elemen dalam set
  console.log(angka.size);

  // E. .clear()  -> Menghapus semua isi
  angka.clear();
  console.log(angka);
