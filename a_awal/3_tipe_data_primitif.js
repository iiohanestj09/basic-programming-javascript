// Ada 7 tipe data Primitif / Built-in di javascript:

//* String
let dataString1 = "Ucup";                                           
console.log(dataString1);
console.log(typeof dataString1)

let dataString2 = 'Putra';
console.log(dataString2)
console.log(typeof dataString2)


//* Number: Integer dan Floating Point
let dataNumber1 = 7;
console.log(dataNumber1);
console.log(typeof dataNumber1);

let dataNumber2 = -9;
console.log(dataNumber2);
console.log(typeof dataNumber2);

let dataNumber3 = 16.324;
console.log(dataNumber3);
console.log(typeof dataNumber3);

   
//* Boolean: true dan false
let dataBoolean1 = true;
console.log(dataBoolean1);
console.log(typeof dataBoolean1);

let dataBoolean2 = false;
console.log(typeof dataBoolean2);


//* Undefined: Variabel belum diberi nilai
let dataUndefined;
console.log(dataUndefined);
console.log(typeof dataUndefined);

dataUndefined = "Maman";
console.log(dataUndefined);
console.log(typeof dataUndefined);


//* Null: Nilai kosong yang ditentukan secara eksplisit
let dataNull = null
console.log(dataNull)
console.log(typeof dataNull)


//* Symbol: Identifier unik, sering dipakai di properti
let dataSymbol = Symbol("userID");
console.log(dataSymbol);
console.log(typeof dataSymbol);
    // Setiap symbol bersifat unik, meskipun deskprisinya sama
    let id1 = Symbol("id");
    let id2 = Symbol("id");
    console.log(id1 === id2);


//* Bigint: Angka besar melebihi batas Number
let dataBig1 = 12n;
console.log(dataBig1);
console.log(typeof dataBig1);
    // Perbedaan Number dan Bigint
    let dataNumber4 = 123456789012345678901234567890;   // Tanpa n == Number, akan kehilangan presisi
    console.log(dataNumber4);
    console.log(typeof dataNumber4);
    
    let dataBig2 = 123456789012345678901234567890n;     // Dengan n == Bigint
    console.log(dataBig2);
    console.log(typeof dataBig2);

    let dataBig3 = 10n;
    let dataBig4 = 5n;
    let dataNumber5 = 5;
    console.log(dataBig3 + dataBig4);
    // console.log(dataBig3 + dataNumber5);         Error