function convert (data) {
  var title = ['id', 'firstName', 'lastName', 'email']
  var groups = [];

  for (var i = 0; i < data.length; i++) {
    groups.push({})
    for (var j = 0; j < title.length; j++) {
      groups[i][title[j]] = data[i][j]
    }
  }
  return groups;
}

// console.log(convert());

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert([]));
// []

// Diberikan sebuah function yang menerima parameter array multidimensi,
// buatlah sebuah program JavaScript untuk mengubah input menjadi format
// array of objects seperti di contoh.
