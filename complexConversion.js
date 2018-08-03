function complexConversion (text) {
  var strSplit = text.split(',');
  var cvrsnObject = {};
  var arrKeyValue = [];

  for (var i = 0; i < strSplit.length; i++) {
    var strKeySplit = strSplit[i].split(':');
    arrKeyValue.push(strKeySplit);
    cvrsnObject[arrKeyValue[i][0]] = arrKeyValue[i][1]
  }
  return cvrsnObject;
}

// var stringInput = 'name:Dimitri,email:dimitri@mail.com';
// var strSplit = stringInput.split(',');
// // console.log('array strSplit', strSplit);
// var cvrsnObject = {};
// var arrKeyValue = [];
//
// for (var i = 0; i < strSplit.length; i++) {
//   // console.log(i);
//   var strKeySplit = strSplit[i].split(':');
//   // console.log(strKeySplit);
//   arrKeyValue.push(strKeySplit);
//   // console.log(arrKeyValue);
//   cvrsnObject[arrKeyValue[i][0]] = arrKeyValue[i][1]
// }
// console.log(cvrsnObject);
// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }

// Implementasikan function di atas agar mengembalikan object baru sesuai
// dengan pattern yang diberikan di test cases
