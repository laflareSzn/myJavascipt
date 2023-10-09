let number = null
console.log(typeof number)
console.log("Value ->", number)

let number2;
console.log("Value ->", number2)

// TYPE CONVERSION
// Boolean

// let trueVal = "true";
// let falseVal = "true";
// let value = 1;
// let vaue2 = 0;
// let nullVal = null;
// let undefinedVal = undefined;

// console.log("true ->", Number(trueVal).valueOf())
// console.log("false ->", Number(falseVal).valueOf())
// console.log("1 ->", Number(value).valueOf())
// console.log("0 ->", Number(vaue2).valueOf())
// console.log("null ->", Number(nullVal).valueOf())
// console.log("undefined ->", Number(undefinedVal).valueOf())

// Number

let trueVal = "true";
let falseVal = "true";
let value = "";
let value2 = "Hello";
let nullVal = null;
let undefinedVal = undefined;


console.log("true ->", Number(trueVal).valueOf())
console.log("false ->", Number(falseVal).valueOf())
console.log("1 ->", Number(value).valueOf())
console.log("Hello ->", Number(value2).valueOf())
console.log("null ->", Number(nullVal).valueOf())
console.log("undefined ->", Number(undefinedVal).valueOf())



let obj =  {
    name: "Ayo",
    age: 15,
    cohort: 17
}

console.log(obj.name)
console.log(obj["age"])