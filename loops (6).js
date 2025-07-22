let a = 5; // Example integer value

console.log("For loop:");
for (let i = 1; i <= a; i++) {
    console.log(i);
}

console.log("While loop:");
let j = 1;
while (j <= a) {
    console.log(j);
    j++;
}
// in while loop , first condition checks(true), then code executes

// do while loop

let n=3
let i=10
do{
console.log(i)
i++
} while (i<n)

    // 10<3 condition false, but at least once 10 is printed due to first block run 
    // in do while loop , first  block runs (means code executes first) , then condition checks(true)

// // let n=5         factorial code
// let fact = 1
// for (i=1;i<=n;i++){
// fact = fact*i
// }
// console.log(fact)