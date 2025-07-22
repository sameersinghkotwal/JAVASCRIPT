// 1.function definition
function meeting() // function use (meeting)
{
console.log("teachers");
}

//  _ function call (meeting)
meeting();

// 2. write a function to print  numbers from 1 to  100 
function printcounting()
{
for (let i=1;i<=100;i++)
{
console.log(i)
}
} 
printcounting()

// 3. print argument in function
function printNumber(num) 
{
console.log("printing Number:",num)
}
printNumber(4)
//  num is an argument of the function and (5) is function call

// 4.  multiple parameters
function getAverage(num1,num2){
let Avg=(num1+num2)/2
console.log("Average:",Avg)
}

getAverage(3,7)

// 5. return functuons
function getMyName(firstName, lastName)
{
let fullName= firstName +" " +lastName
return fullName
}
let fullName =getMyName("love", "babar")
console.log("full Name:", fullName)
//  return value is always stored in the space, thats why let fullName=getMyName("love", "babar") is assigned . to store the return value (sum)

//  6.unreachable statements 
// below return no code will executes. after that it will goes to after } wala line code.

// 7. arrow function 

const sum =(a,b)=>
{
let c=a+b
return c
}
let y=sum(1,3)
console.log(y)


