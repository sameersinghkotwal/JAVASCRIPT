let a = 18; // Example integer value for age

if (a >= 18) {
    console.log("You are eligible to vote.");
} else if (a > 0 && a < 18) {
    console.log("You are not eligible to vote yet.");
} else {
    console.log("Invalid age entered.");
}

// This code checks:
// If a is 18 or more, the person is eligible to vote.
// If a is between 1 and 17, they are not eligible yet.
// If a is less than or equal to 0, it's considered an invalid age.
// && means both conditions needs to be true it,s like (multiply *):- 0 && 0 =0, 1 && 1=1,1 && 0=0, 0 && 1=0
// || means atleast one condition  needs to be true for the result to be true its like (addition +)
// 0||1=1, 1||0=1, 1||1=1
// 1 means true and 0 means false
