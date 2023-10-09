//  temprtaure <= 10degree C
//  var Obj = ( name =String Population = Number, temp = Number, currency = String);

let array = []

let row1 = []
let row2 = []
let row3 = []

let laflare1 = {
    name: "Lagos",
    population: 1000,
    temp: 8,
    currency: "Naira"
};


let laflare2 = {
    name: "Los Angeles",
    population: 9000,
    temp: 4,
    currency: "Dollar"
};


let laflare3 = {
    name: "Lens",
    population: 700,
    temp: -9,
    currency: "Franc"
};

row1.push(laflare1)
row1.push(laflare2)
row1.push(laflare3)
array.push(row1)

let laflare4 = {
    name: "Sydney",
    population: 290,
    temp: 30,
    currency: "AUS"
};


let laflare5 = {
    name: "Madrid",
    population: 250,
    temp: -90,
    currency: "Euro"
};


let laflare6 = {
    name: "California",
    population: 200,
    temp: 8,
    currency: "Dollar"
};
// row2.push("null")
row2.push(laflare4)
row2.push(laflare5)
row2.push(laflare6)
array.push(row2)

let laflare7 = {
    name: "Florida",
    population: 210,
    temp: 7,
    currency: "Dollar"
};


let laflare8 = {
    name: "Manchester",
    population: 2100,
    temp: 9,
    currency: "Pounds"
};


let laflare9 = {
    name: "Port Harcourt",
    population: 200,
    temp: 2,
    currency: "Naira"

};

row3.push(laflare7)
row3.push(laflare8)
row3.push(laflare9)
array.push(row3)
console.table(array)

let totalPopulation = 0

for (let i = 0; i < array.length; i++){
    for(let index = 0; index < array[i].length; index++) {
        let laflare = array[i] [index]
        if (laflare && laflare.temp <= 10) {
            totalPopulation += laflare.population;
        } 
    }

    }

console.log('Total population: <= 10C ' + totalPopulation)