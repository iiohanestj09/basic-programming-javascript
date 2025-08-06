/* 1. __proto__
- Adalah properti internal milik setiap objek di JS
- Isinya adalah referensi ke objek prototype parent-nya
- Tujuannya: kalauh sebuah objek tidak memiliki properti/method yang diminta, JS akan mencari ke atas melalui __proto__. Akan berhenti jika ketemu atau tidak ada sama sekali hingga akhir.
*/

const induk = { pekerjaan: "Programmer" };
const anak = { nama: "Jonathan" };

console.log(anak.pekerjaan);    // anak tidak punya properti pekerjaan
anak.__proto__ = induk;         // Menghubungkan (chain)
console.log(anak.pekerjaan);    
// Karena propertinya tidak ada di aslinya, JS menelusuri ke Prototype Parent


// 2. Object.create(protoObj)
// Membuat object baru dan menentukan siapa "induk"-nya.
// Object baru itu akan mewarisi properti dan method dari yang ditentukan sebelumnya

const user = {
    nama: "Putra",
    umur: 20
};

const penyurat = Object.create(user);   // object baru, anak dari 'user'
penyurat.tujuan = "Drian";

user.pet = "Anjing";
console.log(user);
console.log(penyurat.pet);