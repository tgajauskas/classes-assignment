// 1 UŽDUOTIS
// Naudojant ES5 sintakse sukurkite objekto Filmas (Movie) objekto konstruktoriu, kuris turės šias savybes: name, year, director, budget, income ir pridėkite prototype metodus:
// * getIntroduction(), kuris grąžins filmo pilną pavadinimą (su name, year, director);
// * getProfit(), kuris grąžins sumą, kurią uždirbo (pelną) filmas.

// 2.1 UŽDUOTIS
// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: marke, model, year
// ir metodus:
// * getIntroduction(), kuris grąžins pilną pavadinimą (su marke ir model).
// * getAge(), kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).

// 2.2 UŽDUOTIS
// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: wheels (kurio vertė bus number) ir metodą. Ir metodą: 
// * getWheelsNumber(), kuris grąžins “motociklas turi tris ratus”, jei wheels vertė bus 3 ir “motociklas turi du ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių arba switch).

// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1 užduotis
function Movie(name, year, director, budget, income){
    this.name = name
    this.year = year
    this.director = director
    this.budget = budget
    this.income = income
    this.getIntroduction = function(){
        console.log(`Šio filmo pavadinimas yra ${this.name}, kuris buvo sukurtas ${this.year} metais. Šio filmo režisierius yra ${this.director}.`)
    }
    this.getProfit = function(){
        const profit = (this.income - this.budget) / 1000000
        console.log(`Šis filmas atnešė $${profit.toFixed(1)} mln. pelno.`)
    }
} 

const movie1 = new Movie("Gladiator", 2000, "Ridley Scott", 103000000, 503200000)
const movie2 = new Movie("The Social Network", 2010, "David Fincher", 40000000, 203000000)

console.log(`------------------`)
console.log(`1 užduotis`)
console.log(`------------------`)
movie1.getIntroduction()
movie1.getProfit()

movie2.getIntroduction()
movie2.getProfit()
console.log(`------------------`)

// 2.1 užduotis
class Car {
    constructor(marke, model, year){
        this.marke = marke
        this.model = model
        this.year = year
    }
    getIntroduction(){
        console.log(`Šis automobilis yra ${this.marke} ${this.model}.`)
    }
    getAge(){
        const currentYear = new Date().getFullYear()
        const carAge = currentYear - this.year
        console.log(carAge <= 10 ? `${this.marke} ${this.model} yra 10 metų arba naujesnis automobilis`:`${this.marke} ${this.model} yra 11 metų arba senesnis automobilis`) 
    }
}

const car1 = new Car("Audi", "100", 1968)
const car2 = new Car("Tesla", "Cybertruck", 2023)

console.log(`2.1 užduotis`)
console.log(`------------------`)
car1.getIntroduction()
car1.getAge()
car2.getIntroduction()
car2.getAge()

// 2.2 užduotis
class Motorcycle extends Car {
    constructor(marke, model, year, wheels){
        super(marke, model, year)
        this.wheels = wheels
    }
    getWheelsNumber(){
        if(this.wheels === 3){
            console.log(`${this.marke} ${this.model} motociklas turi tris ratus`)
        }
        if(this.wheels === 2){
            console.log(`${this.marke} ${this.model} motociklas turi du ratus`)
        }
        if(this.wheels < 2 || this.wheels >= 5) {
            console.log(`Įveskite tinkamą ratų skaičių`)
        }
        if(this.wheels === 4){
            console.log(`${this.marke} ${this.model} yra keturratis motociklas`)
        }
}
}

const motorcycle1 = new Motorcycle("Honda", "Super Cub", 1958, 2)
const motorcycle2 = new Motorcycle("Yamaha", "Tricity 125", 2014, 3)

console.log(`------------------`)
console.log(`2.2 užduotis`)
console.log(`------------------`)
motorcycle1.getWheelsNumber()
motorcycle2.getWheelsNumber()