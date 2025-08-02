const user = {
    nama: "Putra",
    profile: {
        umur: 20,
        alamat: {
            jalan: "Jl. Merdeka",
            kota: "Malang"
        },
        kontak: {
            email: "putra@gmail.com",
            "no hp": "08xxxxxxxxx" 
        }
    },
    tambahan: {
        "gol darah": "z"
    }
}

// 1. Cara akses
console.log(user.profile.kontak["no hp"]);
// console.log(user.profile.kontak.ayam);   akan error dan menghentikan program


// 2. Optional Chaining
// Membuat akses lebih aman di data yang bersifat dinamis atau belum pasti
console.log(user?.profile?.alamat?.jalan.apalah); // akan undefined


// 3. Nullish Coalescing, beri nilai default
console.log(user?.tambahan?.["gol darah"]);
console.log(user?.tambahan?.apalah ?? "Kosong Broo!");  // Akan tampil 'Kosong Bro' karena key apalah tidak ada