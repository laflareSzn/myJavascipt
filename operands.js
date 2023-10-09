let left_operand = 10;
let right_operand = 5;
let operator = "+";  

let answer = NaN;

if (operator === "+") {
    ans = left_operand + right_operand;
} else if (operator === "-") {
    ans = left_operand - right_operand;
} else if (operator === "*") {
    ans = left_operand * right_operand;
} else if (operator === "/") {
    if (right_operand !== 0) {
        ans = left_operand / right_operand;
    } else {
        answer = NaN;  
    }
}

console.log("Result:", answer);



// Using ternary Operators

// let left_operand = 10;
// let right_operand = 5;
// let operator = "+"; 

// let ans =
//   operator === "+"
//     ? left_operand + right_operand
//     : operator === "-"
//     ? left_operand - right_operand
//     : operator === "*"
//     ? left_operand * right_operand
//     : operator === "/"
//     ? right_operand !== 0
//       ? left_operand / right_operand
//       : NaN
//     : NaN;

// console.log("Result:", ans);