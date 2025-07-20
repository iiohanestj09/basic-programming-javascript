// Function Expression adalah cara mendefinisikan fungsi dgn menyimpannya di variabel.
// Fungsi ini bisa berupa fungsi bernama maupun anonim

const greet = function(name) {
    return `Hello ${name}`;
}

const message = greet("Putra");
console.log(message);

console.log(greet("Ucup"));