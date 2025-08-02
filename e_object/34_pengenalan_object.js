// Object adalah Struktur Data yang menyimpan pasangan Key Value
// Mirip seperti Struct pada beberapa bahasa pemrograman, hanya saja Object lebih fleksibel dan kaya Fitur

// Membuat Object dengan Literal
const user = {
    nama: "Putra",
    umur: 20,
    ucapan: function() {
        console.log(`Halo, saya ${this.nama}`)
    }                                           // Kalau arrow func, tidak punya keyword this sendiri, sehingga nantinya dia akan ambil dari sekitar tempat didefinisikan.
}
console.log(user);
console.log(user.umur);
user.ucapan();

// Membuat Object dengan constructor
const buku = new Object();
buku.nama = "Pemro Dasar Js";
buku.tahun = 2025;
buku.tampilkan = function() {
    return `${this.nama} dibuat pada tahun ${this.tahun}`
}
buku.tambahan = `Buku ${buku.nama} terbaikkk!`
console.log(buku);
console.log(buku.tampilkan());