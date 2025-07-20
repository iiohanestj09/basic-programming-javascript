// Hoisting adalah mekanisme di mana deklarasi var, function dan class diangkat ke atas oleh JS sebelum kode dieksekusi

// Var
console.log(x);     // undefined. Meski di-hoist tapi nilainya undefines
var x = 15;

// console.log(y)      Tanpa deklarasi variabel y, baris kode ini akan error

// console.log(z);     Error, berada di "Temporal Dead Zone" 
// let z = 12;


// Function
console.log(sayHi());

function sayHi() {
    return "Hola People!";
}
