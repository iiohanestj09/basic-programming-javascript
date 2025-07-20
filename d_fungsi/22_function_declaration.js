/* Ciri khas Fungsi Deklarasi ini:
- Di-Hoist --> Bisa dipanggil sebelum baris deklarasinya
- Nama fungsi wajib ada
- Cocok untuk fungsi global dan reusable
*/

function sayHello(name) {
    return `Hello ${name}`;
}

let panggil = sayHello("Dani");
console.log(panggil)

let angka = sayHello(3536);
console.log(angka)

let coba = sayHello(true)
console.log(coba)

console.log(sayHello(3.14))