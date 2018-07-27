function gcd (firstNumber, secondNumber) {
  var arrayNumber1 = []
  var arrayNumber2 = []

  for (var i = 1; i <= firstNumber; i++) {
    if (firstNumber%i===0) {
      arrayNumber1.push(i)
    }
  }

  for (var i = 1; i <= secondNumber; i++) {
    if (secondNumber%i===0) {
      arrayNumber2.push(i)
    }
  }

  var fpb = 0

  var arraySameNumber = []

  for (var i = 0; i < arrayNumber1.length-1; i++) {
    for (var j = 0; j < arrayNumber2.length-1; j++) {
      if (arrayNumber1[i]==arrayNumber2[j]) {
        arraySameNumber.push(arrayNumber1[i])
      }
    }
  }

  var max = arraySameNumber[0]

  for (var i = 0; i < arraySameNumber.length; i++) {
    if (max < arraySameNumber[i]) {
      max = arraySameNumber[i]
    }
  }
  return max
}

// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1

// Diberikan sebuah function yang menerima dua parameter angka.
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat
// membagi habis kedua bilangan tersebut.
