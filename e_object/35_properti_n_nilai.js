/* 1. Properti adalah pasangan key: value
key harus berupa string (secara implisit)
value bisa berupa tipe data apa saja
*/ 
const pengguna = {
    nama: "Putra",
    umur: 20,
    greet: function() {
        return `Hallo, ini dengan ${this.nama}`
    },

    // Jika key memiliki spasi atau diawali angka, gunakan petik
    "tanggal lahir": "9 Mei 2005",
    "123eee": "abcd"
};


// 2. Mengakses Properti ada 2 cara
    // A. Dot Notation
console.log(pengguna.nama);
console.log(pengguna.greet());

    //B. Bracket Notation
console.log(pengguna["nama"]);
console.log(pengguna["greet"]());

console.log(pengguna["tanggal lahir"]);      // Kelebihan bracket notation
console.log(pengguna["123eee"]);


// 3. Menghapus Properti
delete pengguna.tahun;
delete pengguna["tanggal lahir"];


// 4. Key Dinamis
const contohKey = "judul";
const buku = {
    [contohKey]: "Belajar Js"
};
console.log(buku.judul);


// 5. Penggabungan object
const a = { name: "Putra" };
const b = { umur: 20 };
const merged = Object.assign({}, a, b);
console.log(merged);