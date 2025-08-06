// 1. for in Loop
const user = {
    nama: "Putra",
    umur: 20,
    kota: "Malang"
};

for (let key1 in user) {
    console.log(key1, user[key1]);
}

// # Iterasi Khusus ini berlaku utk Object, Set, Map

// 2. Object.keys()
// Mengambil array berisi semua key milik object
const keys = Object.keys(user);
console.log(keys);

for (let key2 of keys) {
    console.log(key2, user[key2]);
}


// 3. Object.values()
// mengambil array berisi semua value milik object
const values = Object.values(user);
console.log(values);


// 4. Object.entries()
// Mengembalikkan array of array: [[key: value]...]
for (let [key, value] of Object.entries(user)) {
    console.log(key, value)
}