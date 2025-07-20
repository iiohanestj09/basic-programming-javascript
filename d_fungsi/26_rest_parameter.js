/* 
Rest parameter memungkinkan sebuah fungsi menerima jumlah argumen tak terbatas
dan menggabungkannya jadi satu array
*/

function sumX(...numbers) {
    let total = 0;
    for (num of numbers) total += num;
    return total;
}

console.log(sumX(1, 2, 3, 4, 5));

// Bisa juga pakai .reduce() untuk menangkap banyak argumen
/* X.reduce(function, init);
X           --> array 

function    --> Fungsi untuk operasi penggabungan elemen2 array. {HARUS FUNGSI}
                (Penjumlahan, Pengurangan, Penggabungan string, dkk)
            --> Isi function ini ==> (Accumulator, currentValue);
                              Contoh (total, num)

init        --> Value awal dari operasi yang akan dijalankan
*/
function sumY(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumY(1, 2, 3, 4, 5));


// Mengunakan Rest Parameter di Arrow Function
const combineNames = (...names) => names.join(" ");
console.log(combineNames("Gabriela", "De", "Capucina", "El", "Armas"));


// Menggabungkan Parameter Biasa dengan Rest Parameter
function greetX(greeting, ...names) {
    names.forEach(name => console.log(`${greeting} ${name}`));
}
greetX("Hollaa", "Putra", "Putri", "Putro");


// Versi Arrow Function
const greetY = (greeting, ...names) => names.forEach(name => console.log(`${greeting} ${name}`));
greetY("Horass", "Ucup", "Icip");
