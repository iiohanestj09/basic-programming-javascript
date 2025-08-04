// Method modern, Lebih deklaratif daripada loop klasik.
// Tidak bisa pakai break atau continue.

const langs = ["C++", "C", "Go", "Python", "Javascript"];

langs.forEach((lang, index) => {
    console.log(`${index + 1}. ${lang}`);
});