function isArithmeticProgression(numbers){
  var hasilKurang = numbers[1]-numbers[0]
  var hasilPengecekan = true

for (var i = 1; i < numbers.length-2; i++) {
  if (numbers[i+1]-numbers[i]===hasilKurang) {
    hasilPengecekan = true
  } else {
    hasilPengecekan = false
  }
}

if (hasilPengecekan==true) {
  return true
} else {
  return false
}
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
