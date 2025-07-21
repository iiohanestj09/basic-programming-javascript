// Anonymous function adalah fungsi tanpa nama ekspilist saat didefinisikan
/* Karena tidak memiliki nama, biasanya langsung:
- Disimpan di sebuah variabel
- Dikirim sebagai argument (callback)
- Dipakai inline (Arrow Function)
*/

const sayHi = function() {
    console.log("Halloo Semuanya");
    console.log("Hari yang Indah");
}

sayHi();
sayHi();

const multiply = (a, b) => a * b;   // arrow function
console.log(multiply(2, 3)); 