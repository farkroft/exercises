var numbers = [80, 45, 90, 65, 74, 100, 85, 30];

var groups = {
  evens: [],
  odds: [],
}

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i]%2===0) {
    groups.evens.push(numbers[i])
  }else {
    groups.odds.push(numbers[i])
  }
}

console.log(groups);
