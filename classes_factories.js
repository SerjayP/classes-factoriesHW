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