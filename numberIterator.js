function numberIterator(num) {
  var strIteration = '' + num
  if (num === 0) {
    strIteration = num
    return strIteration;
  }
 return numberIterator(num - 1) + strIteration
}

//

// TEST CASES
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'

// Diberikan sebuah function bernama numberIterator yang merupakan sebuah
// function yang menerima satu parameter berupa number. Buatlah dengan
// metode rekursif iterasi angka tersebut dari 0 sampai num.
