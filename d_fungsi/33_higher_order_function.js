/* HOF adalh fungsi yang:
- Menerima fungsi lain sebagai argumen, atau      --> Calback Function
- Mengembalikkan fungsi lain sebagai hasil
*/  

// Mengembalikkan fungsi lain sebagai hasil
function pembuatPangkat(pangkat) {
    return function (nilai) {
        return nilai ** pangkat;
    }
}

const kuadrat = pembuatPangkat(2);
console.log(kuadrat(5));

function buatUcapan(greet) {
    return nama => `${greet} ${nama}`;
}

const ucapan = buatUcapan("Horass");
console.log(ucapan("Gabriela"))