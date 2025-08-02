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
