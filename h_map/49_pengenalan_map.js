/* Map adalah struktur data yang menyimpan pasangan key-value. Mirip dengan objek {}, tapi dengan fitur tambahan:
- Bisa pakai tipe data appapun sebagai Key (termasuk objek dan fungsi)
- Menjaga urutan penambahan
- Memiliki ukuran (size) dan method khusus
*/

// 1. Cara membuat Map
const myMap1 = new Map();
const myMap2 = new Map([    // Langusng isi
    ['nama', 'Putra'],
    ['umur', 21],
    [123, 'apalah']
]);
console.log(myMap1);
console.log(myMap2);


/* 2. Perbedaan Map dan Object
Fitur                       Map     Object
- Key bisa tipe apapun      ✅      ❌  (hanya string/symbol)
- Urutan Terjaga            ✅      ❌
- Ukuran (size)             ✅      ❌
- Iterasi langsung          ✅      ❌  (perlu Object.entries)
- Untuk struktur data       ✅      ❌  (lebih cocok untuk data model)
*/
