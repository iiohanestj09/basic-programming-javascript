// Label adalah identifier yang biasa digunakan di sebuah blok atau loop
// Bisa mengontrol alurnya menggunakan break dan continue yg merujuk ke label tsb

// Break dengan Label
outerLoop:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            if (i == 0 && j == 1 && k == 2) break outerLoop;      // Keluar dari loop terluar

            console.log(`${i}, ${j}, ${k}`);
        }
    }
}


// Continue dengan label
for (let i = 0; i < 2; i++) {
    innerLoop:
    for (let j = 0; j < 2; j++) {
        if (i == 0 && j == 0) continue innerLoop;
        
        console.log(`${i} dan ${j}`)
    }
}