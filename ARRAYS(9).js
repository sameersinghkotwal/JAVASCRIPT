//  array declaration
let marks_class_12=[91,82,63,84, false,"not present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])

//  length of array
console.log(marks_class_12.length) 
//  length is always starts withy 1 , not 0

//  changing the values
marks_class_12[0]= 96
console.log(marks_class_12)

//  adding value to the array
marks_class_12[6]= 89
console.log(marks_class_12)
console.log(typeof marks_class_12)

//  array methods
let num =[1,2,3,4]
let b = num.toString()
console.log(b)
//  b is now a string

// pop method
let c=num.join("_")
console.log(c, typeof c)
//  pop method
num.pop()
console.log(num)
//  here 4 is out, last element is out
let r= num.pop()
console.log(num,r)
//  pop returns the popped element

//  push , it adds a new element at the end of the array
let e= num.push(56)
console.log(num,r)

//  shift, it removes the first element and returns it,and modifies the original array
let t =num.shift()
console.log(t,num)

//  unshift, it adds element to the begining, and returns new array length
let s=num.unshift(78)
console.log(s,num)

// the length of an array after and before deletion remains same  (interview question)

//  concat :- it is used to join arrays to the given array

// largest numbers
let numbers = [12, 45, 7, 89, 23];
let max = Math.max(...numbers);
console.log(max);  // Output: 89

// Math.max() returns the maximum number from a list of arguments.
// The ... (spread operator) spreads the array into individual numbers:

// unique 
let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(numbers)]; // set S is capital
console.log(unique);  // Output: [1, 2, 3, 4, 5]

// 🧠 Explanation:
// Set stores only unique values.

// ... (spread) converts the Set back into an array.
// What is Set?
// Set is a built-in object in JavaScript that:
// Stores unique values only
// Automatically removes duplicates
// Can hold any type: numbers, strings, objects, etc.
// In JavaScript, you must use new Set(...) — you cannot use just Set(...) alone.

// sort()
let numbers = [4, 2, 10, 1];
numbers.sort();
console.log(numbers);  // [1, 10, 2, 4] ❗ (not what you expect)
// sort() converts items to strings and sorts alphabetically, not numerically.
// JavaScript sorts strings based on Unicode values, and here's the order:

// Character	Unicode Value
// "A"	65
// "B"	66
// "Z"	90

// "a"	97
// "b"	98
// "z"	122

//  Capital letters (A–Z) come before lowercase (a–z).

// Ascending Order for Numbers
let nums = [5, 2, 9, 1, 4];
nums.sort((a, b) => a - b);
console.log(nums);  // [1, 2, 4, 5, 9]

// 🔍 Why a - b?
// If result is negative → a comes before b

// So this sorts numbers from low to high

// Descending Order for Numbers

let nums = [5, 2, 9, 1, 4];
nums.sort((a, b) => b - a);
console.log(nums);  // [9, 5, 4, 2, 1]

// 🔍 Why b - a?
// If result is positive → b comes before a

// So it sorts from high to low

// Reverse
let numbers = [3, -1,  3, 6, -1, 4, -2, 6]
numbers.reverse()
console.log(numbers)

// splice and slice
let num =[551,22,3,14,5,6,7,8,229]
num.splice(2, 3, 1021, 1022, 1023)
console.log(num)
// 2 means start at index 2 , and 3 means remove three elements next to index 2 and add 1021, 1022, 1023 and more numbers in place of these three

// slice :- it is a piece of array 
let num =[551,22,3,14,5,6,7,8,229]
console.log(num.slice(2,5)) // 2, means starts from 2 and upto 5 but 5 not included , like strings
// slice does not modify the orignal array , it creates a new array
