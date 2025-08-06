// 1. .set(key, value)  --> Menambahkan / Mengupdate pasangan key-value
const myMap1 = new Map();
myMap1.set('nama', 'Putra');
myMap1.set(111, 234);

const greet = () => console.log("Hello world!");
myMap1.set(greet, 'holaa');
console.log(myMap1);


// 2. .get(key)  --> Mengambil nilai berdasarkan key
console.log(myMap1.get('nama'));
console.log(myMap1.get(111));
console.log(myMap1.get(greet));


// 3. .has(key)  --> Mengecek apakah key ada
console.log(myMap1.has(111));
console.log(myMap1.has('umur'));


// 4. .delete(key)  -> Menghapus pasangan berdasarkan key
myMap1.delete(111);
console.log(myMap1);


// 5. .size  --> Jumlah pasangan dalam Map
console.log(myMap1.size);


// 6. .clear()  --> Menghapus semua pasangan
myMap1.clear();
console.log(myMap1);