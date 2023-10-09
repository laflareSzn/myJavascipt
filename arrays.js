let arr1 = new Array (5)
let arr2 = [1, 2, 4, 4, 6]
let arr3 = new Array(5, 4, 2, 5, 6)

arr1 = [3, "4", 7, 8, {name: "Laflare"}]
arr1.shift()
arr1.unshift(23)
console.log(arr1)

arr1.pop()
arr1.push(45)
console.log(arr1)

Array.prototype.laugh = "lol"
console.log(arr1.laugh)


arr1 = [3, "4", 7, 8, {name: "Laflare"}]
arr1.splice(2, 4, 5, 6, 7, 8, 9)
console.log(arr1)
console.log(arr1.slice(0, 3))


// LOOPS

let array = [5, 6, 3, 6, 8, 3]
for (let i of array){
    console.table(array)
}

for (let i of array){
    process.stdout.write('${i}')}


let obj = {
    name: "Laflare",
    age: 20,
    height: "6.2",
    cohort: 17
}

let objVal = Object.values(obj)
let objKey = Object.keys(obj)


console.log()
for(let i of objKey){
    process.stdout.write('${i}')

}