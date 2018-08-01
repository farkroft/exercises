// How compare string works
// var a = 'a'
// var b = 'h'

// if (a>b) {
//   console.log('salah');
// } else {
//   console.log('bener');
// }

function sortByCharacter (text) {
  var arrayNumbers = [];
  var arrayStrings = [];

  for (var i = 0; i < text.length; i++) {
    var sorted = 0
    for (var j = 0; j < text.length; j++) {
      if (text[i] > text[j]) {
        sorted = sorted + 1
      }
    }
    arrayStrings.push('')
    arrayNumbers.push(sorted)
  }

  for (var i = 0; i < arrayNumbers.length; i++) {
    var changeValue = 0;
    for (var j = i+1; j < arrayNumbers.length; j++) {
      if (arrayNumbers[i]==arrayNumbers[j]) {
        changeValue = arrayNumbers[i] + 1
        arrayNumbers.splice(i, 1, changeValue)
      }
    }
  }

  for (var i = 0; i < arrayNumbers.length; i++) {
    arrayStrings.splice(arrayNumbers[i], 1, text[i]);
  }

  var joinString = ''
  for (var i = 0; i < arrayStrings.length; i++) {
    joinString = joinString + arrayStrings[i]
  }
  return joinString
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'
