// Digunakan untuk iterasi Properti pada OBJECT

const author = {               // object
    idAuthor: "12345", 
    name: "Putra", 
    year: 2025
}

for (const key in author) {
    console.log(`${key}: ${author[key]}`);
}