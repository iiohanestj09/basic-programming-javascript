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
- .splice(x, y) --> Menghapus elemen sesuai index juga banyaknya elemen ke kanan.
                --> Menghapus elemen dari index x ke kanan sebanyak y 
                --> Method ini mempengaruhi array asli.
- .splice(x, y, z)  --> Menghapus dari index x sebanyak y
                    --> Menambah value z di index x
*/ 


// .map()
const angka = [2, 4, 6];
const kuadrat = angka.map(n => n ** 2);
console.log(angka);
console.log(kuadrat);

// .filter()
const nilai = [80, 65, 90, 57];
const kkm = nilai.filter(n => n >= 70);
console.log(nilai); 
console.log(kkm);

// .reduce()
const coba = [1, 2, 3, 4];
const kurang = coba.reduce((result, num) => result - num, 10);
console.log(coba);
console.log(kurang);

// .splice(x, y)    -> Menghapus
const coba2 = [3, 5, 7, 9];
coba2.splice(1, 2);
console.log(coba2);
coba2.splice(0, 1);
console.log(coba2);

// .splice(x, y, z)
const coba3 = ["p", 99, true, "ayam", 100];
coba3.splice(1, 0, "utra");
console.log(coba3);
coba3.splice(4, 1, "Geprek");
console.log(coba3);
coba3.splice(9, 0, "Woilah");
console.log(coba3);    // Tidak ada empty slot jika akses diluar batas