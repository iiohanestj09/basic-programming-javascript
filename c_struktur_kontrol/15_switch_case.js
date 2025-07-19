// Switch expression === Case label

const day = "Thursday";

switch (day) {         // Switch expressionnya bisa String, sedangkan di C/C++ String tidak bisa
    case "Monday":     // Case label nya juga String --> String === String
        console.log("Start Working!");
        break;
    case "Sunday":
        console.log("Rest Day.");
        break;
    default:
        console.log("Just Another Day");
}

const score = 87;
let keterangan;

switch (true) {
  case score === 100:   // Case labelnya menghasilkan Boolean --> true === true/false
    keterangan = "Nilai Sempurna, Anda hebat";
    break;
  case score >= 90:
    keterangan = "Anda mendapat A";
    break;
  case score >= 80:
    keterangan = "Anda mendapat B";
    break;
  case score >= 70:
    keterangan = "Anda mendapat C";
    break;
  default:
    keterangan = "Belajar Lagi!";
}

console.log(keterangan);