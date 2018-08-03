function deleteUndefinedKeys (object) {
  var arrayEntry = Object.entries(object);
  var resultObject = {};

  for (var i = 0; i < arrayEntry.length; i++) {
    for (var j = 0; j < arrayEntry[i].length; j++) {
      if (arrayEntry[i][j]==undefined) {
        arrayEntry.splice(i, 1, '')
      }
    }
  }

  for (var i = 0; i < arrayEntry.length; i++) {
    if (arrayEntry[i]!='') {
      resultObject[arrayEntry[i][0]] = arrayEntry[i][1];
    }
  }
  return resultObject;
}

// var arrayCoba = [undefined, undefined, undefined]
// console.log(arrayCoba.length);

// var undefObject = {
//   name: 'Dimitri',
//   age: undefined,
//   email: 'dimitri@mail.com',
// };

// var arrayEntry = Object.entries(undefObject);
// console.log(arrayEntry);
// for (var i = 0; i < arrayEntry.length; i++) {
//   for (var j = 0; j < arrayEntry[i].length; j++) {
//     if (arrayEntry[i][j]==undefined) {
//       arrayEntry.splice(i, 1)
//     }
//   }
// }
// if (arrayEntry[1][1]==undefined) {
//   arrayEntry.splice(1, 1)
// }
// console.log(arrayEntry);
//
// var resultObject = {};
// for (var i = 0; i < arrayEntry.length; i++) {
//     resultObject[arrayEntry[i][0]] = arrayEntry[i][1];
// }
// resultObject[arrayEntry[0][0]] = arrayEntry[0][1];
// resultObject[arrayEntry[1][0]] = arrayEntry[1][1];
// console.log(resultObject);
// arrayEntry[[0]]
// for (var values in undefObject) {
//   if (Object.values(undefObject)==undefined) {
//     delete undefObject.keys;
//   }
//   // console.log(Object.keys(undefObject));
// }
// console.log(Object.values(undefObject));
// for (let key of undefObject) {
//   console.log(1);
// }
// Object.values(undefObject);
// Object.keys(undefObject);

// delete undefObject.age;
// console.log(undefObject);
// TEST CASE
console.log(deleteUndefinedKeys({
  name: 'Dimitri',
  age: undefined,
  email: 'dimitri@mail.com'
}));
// // { name: 'Dimitri', email: 'dimitri@mail.com' }
//
console.log(deleteUndefinedKeys({
  name: undefined,
  age: undefined,
  email: undefined
}));
// {}

// Implementasikan function di atas agar mengembalikan key yang memiliki
// value saja (bukan undefined)
