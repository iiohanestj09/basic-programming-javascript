// 1. Destruction
// Menarik data spesifik dari object/arr dan menyimpannya ke variabel baru

const user1 = {
    nama1: "Putra",
    umur1: 20,
    kota1: "Malang"
};
const { nama1, umur1 } = user1;
console.log(nama1);


// 2. Spread Operator
// Digunakan untuk menyalin isi object/arr ke tempat lain

const user2 = {
    nama2: "Jason",
    umur2: 18,
    kota2: "Jakarta"
};
const profile = { ...user2, status2: "Active" };
console.log(profile);


// 3. Rest Operator 
// Digunakan untuk mengumpulkan sisa data yang tidak diambil saat destructuring
const user3 = {
    nama3: "Drian",
    umur3: 35,
    kota3: "Jakarta",
    status3: "Active"
};
const { nama3, umur3, ...lainnya } = user3;
console.log(lainnya)