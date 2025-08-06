// Materi ini berkaitan dengan 40_destruction_spread_rest di object, tapi ini versi array

/* 1. Destruction
- Mengambil elemen array ke variabel langsung
*/ 
const buah = ["apel", "mangga", "jeruk"];
const [buahPertama, buahKedua] = buah;
console.log(buahPertama);
console.log(buahKedua);

// Dengan default value
const [angka1, angka2, angka3, angka4 = 9] = [3, 9];
console.log(angka1);
console.log(angka2);
console.log(angka3);
console.log(angka4);


/* 2. Spread
- Menyalin isi array
- Menggabungkan array
- menyear elemen ke parameter
*/

const angka = [11, 15, 17, 20];
const salin = [...angka];
const gabungan = [...angka, 56, 89];
console.log(salin);
console.log(gabungan);

// Dalam fungsi
const jumlah3 = (a, b, c) => a + b + c;
console.log(jumlah3(...angka));


/* 3. Rest
- Menyimpan sisa argumen fungsi
- menangkap sisa elemen array saat destructing
*/ 
const cetak = (...semuaArgumen) => console.log(semuaArgumen);
cetak(1, 2, 3, 4);

// Dalam destructing
const [awal, ...sisa] = [10, 20, 30, 40];
console.log(awal);
console.log(sisa);