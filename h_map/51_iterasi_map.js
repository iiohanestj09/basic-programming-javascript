// 1. for of
// Berbeda dengan Object yg menggunakan for in, walau Map dan Object memiliki key-value
const myMap1 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of myMap1) {
    console.log(`${key}: ${value}`);
}


// 2. .forEach()
myMap1.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});


// 3. .keys()
for (const key of myMap1.keys()) {
    console.log(key);
}


// 4. .values()
for (const val of myMap1.values()) {
    console.log(val);
}


// 5. .entries()
for (const [key, val] of myMap1.entries()) {
    console.log(`${key}: ${val}`);
}
// Ini sama dengan 1. for of di atas, karena Map secara default mengiterasi entries()