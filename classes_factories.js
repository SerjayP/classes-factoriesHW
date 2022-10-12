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
        this.BankAccount-=getPrice()
    }
}