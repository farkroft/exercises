var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

var countMode = 0
var mode = 0
var mode2 = 0

for (var i = 0; i < numbers.length; i++){
  var checkNumber = numbers[i]
  var countNumber = 0
  // console.log('angka =' + checkNumber)
  for (var j = 0; j < numbers.length; j++){
    if(checkNumber==numbers[j]){
      countNumber = countNumber + 1
      mode = numbers[j]
    }
  }
  if(countMode < countNumber){
    countMode = countNumber
    mode2 = mode
  }
  // console.log('kemunculan =' + countNumber)
  // console.log('Modus =' + mode2)
}
console.log('Modus =' + mode2)
