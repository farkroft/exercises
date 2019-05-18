/**
 * You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

[5, 3, 2, 8, 1, 4] [1, 3, 2, 8, 5, 4]
[5, 3, 1, 8, 0] [1, 3, 5, 8, 0]
[1, 3, 2, 8, 5, 4, 11] [1, 11, 2, 8, 3, 4, 5]
[] []
 */

function sortArray(array) {
    // Return a sorted array.
    if (array.length === 0) {
      return array
    }
  
    let oddsArr = [];
    result = [...array];

    array.map((data, index) => {
      let oddsObj = {};
        if (data % 2 === 1) {
          oddsObj.id = index
          oddsObj.value = data;
          oddsArr.push(oddsObj)
        }
    })
    oddsArrVal = [];
  
    oddsArr.map(data => {
      oddsArrVal.push(data.value)
    })
    
    sortedVal = oddsArrVal.sort((a, b) => a - b)

    sortedVal.map((data, index) => {
      oddsArr[index].value = data
    })

    oddsArr.map(data => {
      result[data.id] = data.value
    })
    
    return result
}

console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }
  