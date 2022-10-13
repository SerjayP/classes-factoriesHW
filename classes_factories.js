// ==================== Classes and Factories ====================

// ============ Hamster ============

class Hamster{
     constructor(nameParam){
        this.Owner = ""
        this.Name = nameParam
        this.Price = 15
     }
     wheelRun(){
        console.log("squeak squeak")
     }
     eatFood(){
        console.log("nibble nibble")
     }
     getPrice(){
        return this.Price
     }
}

// ============ Person ============

class Person{
    constructor(nameParam){
        this.Name = nameParam
        this.Age = 0
        this.Height = 0
        this.Weight = 0
        this.Mood = 0
        this.Hamsters = []
        this.BankAccount = 0
    }
    getName(){
        return this.Name
    }
    getAge(){
        return this.Age
    }
    getWeight(){
        return this.Weight
    }
    greet(){
        console.log(`Hello, I am ${this.Name}!`)
    }
    eat(){
        this.Weight++
        this.Mood++
    }
    excerise(){
        this.Weight--
    }
    ageUp(){
        this.Age++
        this.Height++
        this.Weight++
        this.Mood--
        this.BankAccount+=10
    }
    buyHamster(hamster){
        this.Hamsters.push(hamster)
        this.Mood+=10
        this.BankAccount-=hamster.getPrice()
    }
}

// ============ Create a Story ============

// 1.
const timmy = new Person("Timmy")
// 2.
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
// 3.
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
// 4.
timmy.excerise()
timmy.excerise()
timmy.excerise()
timmy.excerise()
timmy.excerise()
// 5. 
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
// 6.
const gus = new Hamster("Gus")
// 7.
gus.Owner+="Timmy"
// 8.
timmy.buyHamster(gus)
// 9.
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
// 10.
timmy.eat()
timmy.eat()
// 11.
timmy.excerise()
timmy.excerise()

// console.log(timmy)

// ============ Chef Make Dinners ============

class Dinner{
    constructor(appetizerParam, entreeParam, dessertParam){
    this.Appetizer = appetizerParam
    this.Entree = entreeParam
    this.Dessert = dessertParam
    }
}
class Chef {
    static createDinner(meal1, meal2, meal3){
        console.log(new Dinner(meal1, meal2, meal3))
        
    }
}

Chef.createDinner("Salad", "Chicken Alfredo", "Ice Cream Sundae")
Chef.createDinner("Plaintains", "Jerk Chicken", "Custard")
Chef.createDinner("Empandas", "Pernil", "Tres Leches")
