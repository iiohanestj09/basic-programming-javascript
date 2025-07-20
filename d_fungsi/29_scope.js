// Scope menentukan di mana sebuah variabel dapat diakses
/* Jenis Scope:
- Global Scope => Variabel tersedia di seluruh program
- Local Scope  => Variabel hanya tersedia di blok fungsi
- Block Scope  => Berlaku untuk let dan const dalam Blok / {}
*/

let globalVar = "Luar";

function tesScope() {
    let localVar = "Lokal";
    console.log(globalVar);     // Bisa diakses
    console.log(localVar);      // Bisa diakses
}

// console.log(localVar);          Tidak bisa diakses

for (let i = 0; i < 2; i++) {
    let blockVar = "Block";
    console.log(blockVar);      // Bisa diakses
}

// console.log(blockVar);          Tidak bisa diakses