//  creating a string
let name ="Harry"
console.log(name)

//  length of string
console.log(name.length)

//  printing string numberwise,chacterwise
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])

// template lietrals
let boy1="ramji"
let boy2="shivji"
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

//  escape sequence characters
let fruit ='bana\'na'
console.log(fruit)
//  only ' is printed , not \ is printed
console.log(fruit.length)

//  string metohds

//  upper case, lower case

let fame = "harry";
console.log(fame.toUpperCase()) //  upper U is capital, case  C is capital
console.log(fame.toLowerCase()) //  lower L is capital, case C is capital


//  index
console.log(fame.slice(1, 3)) 
// slice(1, 3) starts at index 1 , 1 is included(which is 'a')
//It goes up to 3 but does NOT include index 3 ,before to 3 that is 2//

console.log(fame.slice(3))
// Start from index 3 (which is 'r')
//Go to the end of the string i.e 'y'

//  replace
console.log(fame.replace("har","per"))

//  strings  ko jodna
let friend="naman"
console.log(name.concat(" is a friend of ", friend))

// removal of spaces
let friend2= "      MEENA    "
console.log(friend2)
console.log(friend2.trim())

// 
let fr ="shivika"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])
console.log(fr[5])
console.log(fr[6])
let sr ="raman" + "shivika"
console.log(sr)

// reverse string
let word = "hello";
console.log(word.split("").reverse().join("")); // if one word then ("") no space is used

// split
let senten = "I am learning JavaScript";
let words = senten.split(" ");  // if more than one word than " space" is used
console.log(words);

let wording = "i am learning javascript"
let sb = (wording.split(" "))
console.log(sb)
console.log(sb[0].length) // prints lengths of "i"

// replacing all sentence with something
 console.log(name.replaceAll(' ','_')) // it relaces blank spaces with _