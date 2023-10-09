let obj =  {
    Id: "101",
    available: "true",
    count: "5",
    name: "Laflare",
    author: "LaflareSzn",

}

obj.Id = Number(obj.Id).valueOf()
obj.available = Boolean(obj.available).valueOf()
obj.count = Number(obj.count).valueOf()
obj.name = "Laflare"
obj.author = "LaflareSzn"

console.log(obj)

// Control Statement

let value = 1;

if (value == 1) {
    value = 0;
}

else if(value == 0){
    value = 1;
} 

 else {

    value = 1;
    
}
console.log(value)
  

let value1 =1;
value1 = value1 == 1 ? 0
: value1 == 0 ? 1
: value1 == 1 ? 0
: 1;
console.log(value1)


// 