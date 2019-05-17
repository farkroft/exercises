// descending order
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

const descendingOrder = (n) => {
    if (n === 0 || n === 1) {
        return n
    }

    stringed = n.toString()
    splittedInput = stringed.split('')
    sortedArr = []
    let descNumber;
    while (splittedInput.length !== 0) {
        if (splittedInput.length === 1) {
            sortedArr.push(splittedInput[0])
            splittedInput.splice(0, 1)
            break;
        }
        
        maxNumber = Math.max(...splittedInput)
        console.log(splittedInput.length)
        splittedInput.map((index) => {
        if (maxNumber == splittedInput[index]) {
            splittedInput.splice(index, 1)
            sortedArr.push(maxNumber)
        }
        })
    }
    descNumber = sortedArr.join('')
    return parseInt(descNumber)
}
  
// simple approach
// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }
  
  console.log(descendingOrder(123456789))
  
  
  
  
  
  
  
  
  