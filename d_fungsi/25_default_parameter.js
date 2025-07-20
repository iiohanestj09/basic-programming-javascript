// Default parameter digunakan untuk memberikan nilai awal atau bawaan ke parameter fungsi
// Berguna saat pemanggilan fungsi tanpa argumen

function greet(name = "Anomali") {      // Parameter 'name'
    return `Hello ${name}`;
}

let panggil = greet("Ling");            // Argumen 'Ling'
console.log(panggil);
console.log(greet());

// Misal terdapat 3 Parameter
function fullName(first = "Kim", mid = "de", last) {
    return `${first} ${mid} ${last}`;
}
// console.log(fullName(,,"Juan"))      Error
console.log(fullName(undefined, undefined, "Juan"));
console.log(fullName("Gabriela", undefined, "Larosa"))
console.log(fullName())