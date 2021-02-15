// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

var temp1 = 85
var temp2 = 350
var temp3 = 212

//***psudo***
// need a function that takes a number
// compare input to set boiling temp to determine if its over, under, or at temp
// return a string that lets user know if temp given is over, under or at temp

const isBoiling = (temp) => {
  if(temp === 212){
    return `${temp} is at boiling point`
  } else if(temp < 212) {
    return `${temp} is below boiling point`
  } else if(temp > 212) {
    return `${temp} is above boiling point`
  } else {
    return 'IDK what is happening'
  }
}

console.log('Q1:',isBoiling(temp1))
console.log('Q1:',isBoiling(temp2))
console.log('Q1:',isBoiling(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]


//***psudo***
// needs a function that takes in an array
// need a variable that will hold new array
// iterate through array
// multiply each iteration by 5 and push in new array
// output the new array

const timesFive = (arr) => {
  let newArr = []
  for(i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 5)
  }
  return newArr
}

console.log('Q2:',timesFive(myForNumbers1))
console.log('Q2:',timesFive(myForNumbers2))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

//***psudo***
//function that takes an array
//create a variable to hold new array
//use map to multiply each number by 5

// const timesFiveMap = (array) => {
//   let mappedFive = array.map(value => {
//     return value * 5
//   })
//   return mappedFive
// }

// **refactor without variable**

const timesFiveMap = (array) => {
  return array.map(value => {
    return value * 5
  })
}

console.log('Q3:',timesFiveMap(myMapNumbers1))
console.log('Q3:',timesFiveMap(myMapNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// ***psudo*** 
// function that takes a string 
// make string an array 
// iterate though new array
// filter out vowels 
// return array as a string without vowels

const onlyVowels = (str) => {
  let strArr = str.split('')
  return strArr.filter(value => {
    return value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u' 
  }).join('')
}

console.log('Q4:',onlyVowels(stringWithVowels1))
console.log('Q4:',onlyVowels(stringWithVowels2))

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

// ***psudo***
// refactor to look for different data types 


// const onlyVowelsRefactor = (data) => {
//   if(typeof data !== 'string'){
//     return `${data} is not a string`
//   }else {
//     let strArr = data.split('')
//     return strArr.filter(value => {
//       return value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u' 
//     }).join('')
//   }
// }

// **refactor for capital vowels**
// const onlyVowelsRefactor = (data) => {
//   if(typeof data !== 'string'){
//     return `${data} is not a string`
//   }else {
//     let strArr = data.split('')
//     return strArr.filter(value => {
//       return value.toLocaleLowerCase() !== 'a' && value.toLocaleLowerCase() !== 'e' && value.toLocaleLowerCase() !== 'i' && value.toLocaleLowerCase() !== 'o' && value.toLocaleLowerCase() !== 'u' 
//     }).join('')
//   }
// }

// **refactor for cleaner code**
const onlyVowelsRefactor = (data) => {
  if(typeof data !== 'string'){
    return `${data} is not a string`
  }else {
    let strArr = data.split('')
    return strArr.filter(value => {
      let lower = value.toLocaleLowerCase()
      return lower !== 'a' && lower !== 'e' && lower !== 'i' && lower !== 'o' && lower !== 'u' 
    }).join('')
  }
}


console.log('Q5:',onlyVowelsRefactor(refactorTester1))
console.log('Q5:',onlyVowelsRefactor(refactorTester2))
console.log('Q5:',onlyVowelsRefactor(refactorTester3))

// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

// ***psudo***
//function that takes an array of strings
//iterate through array 
//find string with most caracters
//output string with most caracters

const mostChars = (arr) => {
  let most = 0
  let banana = 0
  arr.forEach((value, i) => {
    if(value.length > most) {
      // console.log(value.length, i) visualizing data
      most = value.length // didnt have this line so it didnt work at first
      banana = i
    }
  })
  // console.log('most:', most, 'banana', banana) vidualizing data 
  return `${arr[banana]}`
}

console.log('Q6:',mostChars(utensils))
console.log('Q6:',mostChars(vessels))

// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]


// ***psudo***
// function that takes array of strings
// iterate through array - map
// remove last letter from each 
// output new array with last letter removed

const choppedButt = (arr) => {
  return arr.map(value => {
    // return value.split('').pop().join('')
    // console.log('here',value.split('').pop())
    // console.log('here',value.split('').slice(0,value.length - 1).join(''))
    // console.log('here',value.slice(0,value.length - 1)) did this and line 217 cause forgot that it makes a new array i saw it in the console as strings
    // return value.slice(0,value.length - 1) another answer that works
    return value.split('').slice(0,value.length - 1).join('') // tried this and it worked too
  })
}

console.log('7:', choppedButt(mario))
console.log('7:', choppedButt(pacman))