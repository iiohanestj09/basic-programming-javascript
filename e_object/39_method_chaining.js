// Method chaining adalah teknik di mana kita memanggil beberapa method secara berurutan dalam satu ekspresi
// Dengan syarat, setiap method harus 'return this', supaya object aslinya bisa teris dogunakan untuk chain berikutnya.

const calc = {
    value: 0,
    tambah(n) {
        this.value += n;
        return this;
    },
    kurang(n) {
        this.value -= n;
        return this;
    },
    kali(n) {
        this.value *= n;
        return this;
    },
    bagi(n) {
        this.value /= n;
        return this;
    },
    cetak() {
        console.log(`Nilai saat ini: ${this.value}`);
    }
};

calc.tambah(4).kurang(2).kali(6).bagi(3).cetak();