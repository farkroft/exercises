function countLetters (word, letter) {

 if (word === '') {
   return 0;
 }

 if (word[0] === letter) {
   return 1 + countLetters(word.slice(1), letter);
 }
 return 0 + countLetters(word.slice(1), letter);
}

// SUPER HINT WORD.SLICE(1)
// Ingat ! dalam recursive yang akan berubah adalah parameternya,
// bukan yang lain. Sampai parameter bertemu dengan kondisi tertentu
// maka function akan terus memanggil dirinya sendiri.

// var word = '12104123';
// var letter = '1';
// var letterCounted = 0
//
// for (var i = 0; i < word.length; i++) {
//   if (word[i] == letter) {
//     letterCounted = letterCounted + 1
//     console.log('i', i);
//     console.log('letterCounted', letterCounted);
//   }
// }

// TEST CASES
console.log(countLetters(0));
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3

// Tersedia 2 input: suatu kata dan suatu huruf. Carilah berapa kali huruf
// muncul di dalam kata. Gunakan rekursif untuk menyelesaikan soal ini.
