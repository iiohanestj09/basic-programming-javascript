// Array adalah koleksi terurut elemen yang bisa berisi berbagai tipe data:
// number, string, object, bahkan array lain.

// 1. Meembuat Array
  // A. Menggunakan Literal
const awal = [];
const fruits = ["Mangga", "Apel", "Jeruk"];
const mixed = ["Putra", 20, true, 9.99, null, undefined];
//& Note: Penggunaan const pada sebuah arr itu normal
//& karena referensi ke array nya yang konstan (tidak bisa diganti), tapi isinya bisa dimodifikasi
// fruits = [1, 2, 3]       ini akan Error karena REFERENSI arr 'fruits' tidak bisa diubah (konstan)

  // B. Menggunakan Constructor
const items = new Array("Lima", 5, true);
const coba = new Array(3);  // 3 di sini bukan isi elemen, melainkan panjang -> [undefined, undefined, undefined]
console.log(coba);

//& Jadi kalau, new Arr(x)  --> Deklarasi panjang array sepanjang x
//& Kalau, new Arr(x, y, ...) --> Memasukkan nilai ke array


// 2. Akses elemen
console.log(fruits[1]);
console.log(fruits[9]);

coba[1] = "Halooo";
fruits[5] = 9;
console.log(fruits);
// Saat sebuah array berukuran x < y lalu kita ubah 'arr[y] = z;' panjang array jadi y+1
// Contoh di atas, fruits[3], lalu akses fruits[5] maka --> [.., .., .., undefined, undefined, 9]

console.log(3 in fruits);   //& Slot kosong itu sepenuhnya bukan undefined;
//& Jadi method seperti map() dan forEach() akan melewati Slot Kosong tersebut

console.log(fruits.length)
console.log(coba.length)