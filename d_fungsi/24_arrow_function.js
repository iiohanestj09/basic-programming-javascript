// Arrow Function adalah bentuk singkat dari Function Expression

// Satu baris
const sayHello = name => `Hello ${name}`;

let nama = sayHello("Eland'orr");
console.log(nama);
console.log(sayHello("Putra"));


// Banyak baris
const squareRoot = basis => {
    const eksponen = 2;
    return basis ** eksponen;
}

let tigaKuadrat = squareRoot(3);
console.log(tigaKuadrat);
console.log(squareRoot(4));


// Tanpa parameter
const sayHi = () => "Halooooo";

let panggil = sayHi();
console.log(panggil)
console.log(sayHi());


// Banyak parameter dan Satu baris
const multiply = (a, b) => a * b;

let result = multiply(3, 4);
console.log(result);
console.log(multiply(3, 10));


// Banyak parameter dan Banyak baris
const fullName = (first, last) => {
    const name = `${first} De ${last}`;
    return name.toLowerCase();
}
let namaLengkap = fullName("Bambang", "Sudirman");
console.log(namaLengkap);
console.log(fullName("Putra", 99))