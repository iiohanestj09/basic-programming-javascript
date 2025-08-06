// Materi ini berfokus pada beberapa kemungkinan kesalahan yang akan terjadi saat menggunakan array & object

// 1. Mutable vs Immutable
  // A. Mutable  -> Data bisa diubah langsung tanpa membuat salinan baru
  const arr1 = [1, 2, 3];
  arr1.push(4);
  console.log(arr1);

  const obj1 = { a: 1 };
  obj1.a = 2;
  console.log(obj1);
  // Risiko: - Perubahan bisa berdampak ke semua referensi yang menunjuk ke data tsb
  //         - Sulit dilacak dalam kode besar atau kolaboratif 

  // B. Immutable  -> Data tidak diubah langsung, melainkan dibuat salinan baru
  const arr2 = [5, 6, 7];
  const arr2Salin = [...arr2, 8];
  console.log(arr2);
  console.log(arr2Salin);

  const obj2 = { b: 2 };
  const obj2Salin = { ...obj2, b: 3 };
  console.log(obj2);
  console.log(obj2Salin);


// 2. Shallow Copy vs Deep Copy
  // A. Shallow Copy  -> Menyalin dari level pertama arr/obj. Referensi nested tetap sama dari aslinya
  const arr3 = [1, 2, 3, ["apel", "anggur"]];
  const arr3Salin = [...arr3];
  arr3Salin[0] = 9;
  arr3Salin[3][1] = "ayam";     // "anggur" akan diganti "ayam" pada versi asli dan salin 
  console.log(arr3);
  console.log(arr3Salin);
  

  const obj3 = { a: 2, b: { c: 3 } };
  const obj3Salin = { ...obj3 };
  obj3Salin.b.c = 9;            // 3 akan diganti 9 pada versi asli dan salin
  console.log(obj3);
  console.log(obj3Salin);

  // B. Deep Copy  -> Menyalin semua level termasuk nested arr/obj. Tidak ada referensi yg dibagikan
  const arr4 = [5, 6, 7, ["merah", "biru"]];
  const arr4Salin = structuredClone(arr4);
  arr4[3][1] = "kuning";
  console.log(arr4);
  console.log(arr4Salin);

  const obj4 = { a: 1, b: { c: 3 } };
  const obj4Salin = structuredClone(obj4);
  obj4Salin.b.c = 999;
  console.log(obj4);
  console.log(obj4Salin);