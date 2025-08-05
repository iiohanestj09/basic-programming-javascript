// 1. Konversi dari String ke Array -> .split()
// Memecah string menjadi array berdasarkan pemisah tertentu
const teks1 = "Yohanes,Putra,P.,Muwa,Dae";
const result1 = teks1.split(",");
console.log(result1);


// 2. Konversi dari Array ke String -> .join()
// Menggabungkan semua elemen array menjadi satu string dengan pemisah tertentu
const teks2A = ["Apel", "Mangga", "Anggur"];
const result2A = teks2A.join(" | ");
console.log(result2A);

const teks2B = ["+", 6, 2];
const result2B = teks2B.join("");
console.log(result2B);


// 3. Mengurutkan isi Array -> .sort()
const angka1 = [1, 5, 3, 10];
console.log(angka1.sort());     // Method ini defaulnya untuk string comparasion

// Solusi sorting number -> Bisa pakai Insertion Sort
angka1.sort((a, b) => a - b);
// arti a dan b merupakan 2 elemen array (b di samping kanan a -> index b lebih besar dari a)
// Arti a - b,  Jika hasilnya Negatif   -> a dulu baru b    (a, b)
//              Jika hasilnya 0         -> tetap (kedua nilai sama)
//              Jika hasilnya positif   -> b dulu baru a    (b, a)
console.log(angka1);

