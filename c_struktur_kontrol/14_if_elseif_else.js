const score = 87;
let keterangan;

if (score === 100) {
  keterangan = "Nilai Sempurna, Anda hebat";
} else if (90 <= score) {
  keterangan = "Anda mendapat A";
} else if (80 <= score) {
  keterangan = "Anda mendapat B";
} else if (70 <= score) {
  keterangan = "Anda mendapat C";
} else {
  keterangan = "Belajar Lagi!";
}

console.log(keterangan);

// Operator Ternary
const age = 19;
const access = age >= 18? "Allowed" : "Denied";
console.log(`You're ${access}, because your age is ${age}`)