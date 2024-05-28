console.log("connected");

class Animal {
    constructor (name,age,diet,type){
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.type=type;
    }
}
const skittles = new Animal("Skittles", 2, "fish","cat");
const roger = new Animal("Roger", 2, "bones","dog"); 
console.log(skittles);
const cat = {name: "john", lastName: "Snowden"};

console.log(cat);

// Exercise 1

class Vehicle {
    constructor (model, manufacturer, year,colour){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.colour = colour;

    }


printColour() {
    console.log(this.colour);
}
}

const car = new Vehicle("Supra", "Toyota", "1996", "red")

car.printColour();

// Fuller
class City {
    constructor (name, traveled) {
        this.name = name;
        this.traveled = traveled;
    }

    travel () {
        this.traveled = true;
    }
}

class CoastalCity extends City{
    constructor(name,traveled,coastLineLength){
       super(name, traveled);
        this.coastLineLength = coastLineLength;
    }
    visitBeach() {
        console.log(`The coast line is ${this.coastLineLength}km long.`);
    }
}

const tau = new CoastalCity("Tauranga", false, 20);
tau.travel()
console.log(tau);