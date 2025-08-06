/* 1. Method Menambah & Menghapus elemen (Basic) 
- Menambah di akhir .push()
- Menghapus di akhir .pop()
- Menambah di awal .unshift()
- Menghapus di akhir .shift()
*/ 

const contoh = [1, 2, 3];
contoh.push("tambahAkhir");
contoh.unshift("tambahAwal");
console.log(contoh);
contoh.pop();
console.log(contoh);

// 2. Method Transformasi dan Iterasi
// .map()  -> melakukan transformasi pada setiap elemen dan mengembalikkan array baru. (Tidak mengubah array asli)
const angka = [2, 4, 6];
const kuadrat = angka.map(n => n ** 2);
console.log(angka);
console.log(kuadrat);


// .filter() -> Mengambil elemen yang memenuhi kondisi tertentu
const nilai = [80, 65, 90, 57];
const kkm = nilai.filter(n => n >= 70);
console.log(nilai); 
console.log(kkm);


// .reduce() -> Menggabungkan semua nilai menjadi satu nilai akhir (akumulasi)
const coba = [1, 2, 3, 4];
const kurang = coba.reduce((result, num) => result - num, 10);
console.log(coba);
console.log(kurang);


// .splice(x, y) -> Menghapus elemen sesuai index juga banyaknya elemen ke kanan.
//               -> Menghapus elemen dari index x ke kanan sebanyak y 
//               -> Method ini mempengaruhi array asli.
const coba2 = [3, 5, 7, 9];
coba2.splice(1, 2);
console.log(coba2);
coba2.splice(0, 1);
console.log(coba2);

// .splice(x, y, z)  -> Menghapus dari index x sebanyak y
//                   -> Menambah value z di index x
const coba3 = ["p", 99, true, "ayam", 100];
coba3.splice(1, 0, "utra");
console.log(coba3);
coba3.splice(4, 1, "Geprek");
console.log(coba3);
coba3.splice(9, 0, "Woilah");
console.log(coba3);    // Tidak ada empty slot jika akses diluar batas


// .indexof()  -> Menemukan index sebuah elemen pertama dari kanan array juga sebuah substring (5_operasi_string)
const mixed = [10, undefined ,"ayam", 20, true, "ayam", 300, "ayam", "ayam", false, null];
console.log(mixed.indexOf("ayam"));

// Solusi Pencarian semua kemunculan
const posisi = [];
let index = mixed.indexOf("ayam");

while (index !== -1) {
    posisi.push(index);
    index = mixed.indexOf("ayam", index + 1);   // Cari mulai dari setelah posisi sebelumnya
                                                // Hingga di index 8, saat dicari lagi akan return -1 dan loop berhenti
}
console.log(posisi);