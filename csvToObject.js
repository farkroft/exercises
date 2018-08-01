function csvToObject (text) {
  var stringSplit = text.split(',')
  var arrayDetails = ['name', 'email', 'gender'];
  var csvObject = {};

  for (var i = 0; i < arrayDetails.length; i++) {
    csvObject[arrayDetails[i]] = stringSplit[i]
  }
  return csvObject;
}

// var stringInput = 'Dimitri,dimitri@mail.com,male';
// var stringSplit = stringInput.split(',')
//
// var arrayDetails = ['name', 'email', 'gender'];
// var csvObject = {};
//
// for (var i = 0; i < arrayDetails.length; i++) {
//   csvObject[arrayDetails[i]] = stringSplit[i]
// }
// // csvObject[arrayDetails[0]] = stringSplit[0];
// // csvObject[arrayDetails[1]] = stringSplit[1];
// // csvObject[arrayDetails[2]] = stringSplit[2];
// console.log(csvObject);

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }

// Diberikan sebuah function yang menerima 1 parameter berupa string yang berisi
// value dan dipisahkan dengan koma (Comma Separated Values / CSV). Implementasikan
// function ini supaya bisa mengembalikan value object literal. Sesuaikan dengan
// format di atas.
