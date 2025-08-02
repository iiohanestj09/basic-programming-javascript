// Function adalah blok kode mandiri yang bisa dipanggil dan dieksekusi 
// Method adakah FUNCTION yang menjadi properti dari sebuah object

// Function
function sapa() {
    console.log("Halo Dunia!");
}
sapa();

const coba = {
    greet: function() {         // Method
        console.log("Halo Dunia!");
    },
    angka: 8,
    multiply: function(n) {     // Method
        return this.angka * n;
    }
}
coba.greet();
console.log(coba.multiply(2));

// Versi Function Expression sebagai object method (Lebih singkat)
const coba2 = {
    greet2() {
        console.log("Hhaalloo Dduunniiaa!!")
    },
    angka2: 8,
    multiply2(n) {
        return this.angka2 * n;
    }
}
coba2.greet2();
console.log(coba2.multiply2(2));