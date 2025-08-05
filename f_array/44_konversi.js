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