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

/* 2. Method Transformasi dan Iterasi
- .map()    --> melakukan transformasi pada setiap elemen dan mengembalikkan array baru. (Tidak mengubah array asli)
- .filter() --> Mengambil elemen yang memenuhi kondisi tertentu
- .reduce() --> Menggabungkan semua nilai menjadi satu nilai akhir (akumulasi)
*/ 

const angka = [2, 4, 6];
const kuadrat = angka.map(n => n ** 2);
console.log(angka);
console.log(kuadrat);


const nilai = [80, 65, 90, 57];
const kkm = nilai.filter(n => n >= 70);
console.log(nilai); 
console.log(kkm);


const coba = [1, 2, 3, 4];
const kurang = coba.reduce((result, num) => result - num, 10);
console.log(coba);
console.log(kurang);