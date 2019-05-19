// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
// A-B-C // ABC

function toCamelCase(str){
    const re = /[^a-z]/gi;
    
    if (str === '') {
      return str
    }
    
    let arrayStr = ''
    
    replacedStr = str.replace(re, ' ')
    replacedStr = replacedStr.split('')
  
    for (i = 0; i < replacedStr.length; i++) {
      
      if (replacedStr[i] === ' ') {
        upperCased = replacedStr[i+1].toUpperCase()
        arrayStr += upperCased
        i += 1
      } else {
        arrayStr += replacedStr[i]
      }
    }
    
    
    return arrayStr
  }
  
  console.log(toCamelCase("the_stealth_warrior"))

//   function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//   }