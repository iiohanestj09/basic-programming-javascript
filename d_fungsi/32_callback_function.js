/* Callback adalah sebuah fungsi yang dikirim sebagai argumen ke fungsi lain,
dan akan dipanggil di dalam fungsi tersebut.
Istilahnya: "Aku kirim kamu ke fungsi A, nanti kamu dijalankan dari dalam sana".
*/

// Struktur Umum
function fungsiUtama(callbackX) {
    console.log("Sebelum callback");
    callbackX();
    console.log("Setelah callback");
}

fungsiUtama(() => {
    console.log("Halo dari Fungsi bernama 'callbackX' di parameter");
})
// Memanggil fungsiUtama dengan argumen berupa Arrow Function.
// Jika memanggil seperti ini fungsiUtama(123), error, karena callbackX mestinya menerima function


function prosesData(data, callBackY) {
    console.log(`Memproses: ${data}`);
    callBackY(data.toUpperCase());
}

prosesData("Putra", hasil => {
    console.log(`Hasil: ${hasil}`);
})