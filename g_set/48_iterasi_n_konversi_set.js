// 1. Iterasi Set
// Untuk akses elemen Set, gunakan looping untuk setiap elemen
  // A. for of
  const buah = new Set(["Apel", "Mangga", "Anggur", "Apel"]);
  for (const item of buah) {
    console.log(item);
  }

  // B. .forEach()
  buah.forEach((item) => console.log(item));

  // C. .values()
  for (const item of buah.values()) {
    console.log(item);
  }

  // D. .keys(), di Set .values() dan .keys() SAMA
  for (const item of buah.keys()) {
    console.log(item);
  }

  // E. .entries(), mengembalikan [value, value] karena tidak ada key
  for (const [key, val] of buah.entries()) {
    console.log(`${key} -> ${val}`)
  }
  
  
// 2. Konversi Array <-> Set
  // A. Array -> Set  (Harus duplikat)
  const data = [1, 2, 2, 3];
  const unik = new Set(data);
  console.log(unik);

  // B. Set -> Array  (Pakai Array.from())
  const setBuah = new Set(["apel", "mangga"]);
  const arrBuah = Array.from(setBuah);

  //C. Array -> Set -> Array  (Biasanya untuk hapus duplikat)
  const arrContoh = [1, 2, 3, 4, 3, 2, 5, 4, 6, 3];
  const arrHasil = [...new Set(arrContoh)];
  console.log(arrHasil);