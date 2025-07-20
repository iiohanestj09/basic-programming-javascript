/* Closure adalah kemampuan fungsi untuk mengakses variabel dari scope luar
mesikpun scope luarnya sudah selesai dieksekusi */

function createGreeter(name) {
    return function greet() {
        console.log(`Hello ${name}`);
    }    
}

const panggil = createGreeter("Putra");
panggil();
// greet() tetap bisa akses 'name' meski function createGreeter sudah selesai


function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(`Jumlah Saat ini: ${count}`)
    }
}

const hitung = createCounter();

hitung();       // 1
hitung();       // 2
hitung();       // 3

const coba = createCounter();
coba();         // 1
coba();         // 2
// Fungsi hasil return tetap dapat diakses meskipun functin createCounter sudah selesai dipanggil