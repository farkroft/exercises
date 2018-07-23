function square (number) {
  return number * number
}

function pi () {
  return 3.14
}


var area = pi() * square(7);
// console.log(typeof area);
console.log(Math.ceil(area));
