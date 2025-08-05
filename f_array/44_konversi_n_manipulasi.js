// 1. Konversi dari String ke Array -> .split()
const teks1 = "Yohanes,Putra,P.,Muwa,Dae";
const result1 = teks1.split(",");
console.log(result1);


// 2. Konversi dari Array ke String -> .join()
const teks2A = ["Apel", "Mangga", "Anggur"];
const result2A = teks2A.join(" | ");
console.log(result2A);

const teks2B = ["+", 6, 2];
const result2B = teks2B.join("");
console.log(result2B);


// 3. Mengurutkan isi Array -> .sort() [ascending, terkecil ke terbesar]  {Mempengaruhi array asli}
const angka1 = [1, 5, 3, 10];
console.log(angka1.sort());     // Method ini defaulnya untuk string comparasion

// Solusi sorting number -> Bisa pakai Insertion Sort
angka1.sort((a, b) => a - b);
// arti a dan b merupakan 2 elemen array (b di samping kanan a -> index b lebih besar dari a)
// Arti a - b,  Jika hasilnya Negatif   -> a dulu baru b    (a, b)
//              Jika hasilnya 0         -> tetap (kedua nilai sama)
//              Jika hasilnya positif   -> b dulu baru a    (b, a)
console.log(angka1);

const teks3 = ["ayam", "anggur", "kambing", "jerapah", "zebra", true, 55, undefined];   // "5" = 53, "a" = 97  
console.log(teks3.sort())

// 4. Membalik isi array -> .reverse()  {Mempengaruhi array asli}
const teks4 = ["domba", "sapi", "harimau", "tikus"];
console.log(teks4.reverse());

const angka2 = [5, 2, 8, 0, 7, 4, 17, 13, 19, 14, 13];
angka2.sort((a, b) => a - b);
angka2.reverse();
console.log(angka2);