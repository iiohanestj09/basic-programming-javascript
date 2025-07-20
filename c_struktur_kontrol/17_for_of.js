// Iterasi langsung ke nilai iterable (Array, String, Set, Map, dll). 
// Lebih bersih dari for biasa

const tools = ["Git", "Github", "VS Code"];     // array
for (const tool of tools) {
    console.log(`Menggunakan: ${tool}`);
}

const nama = "Putra Dae";                       // string
for (const huruf of nama) {
    console.log(huruf);
}