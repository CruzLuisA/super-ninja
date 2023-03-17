class Ninja {
    constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strenght = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.health, this.speed, this.strenght)
    }
    drinkSake(){
        this.health += 10
    }
}
const harry = new Ninja('harry', 10)

harry.sayName();
harry.showStats();
harry.drinkSake();
harry.showStats();

class Sensei extends Ninja {
    constructor (name){
        super(name, 200)
        this.speed = 10
        this.strenght = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}
const upgraded = new Sensei('carson', 200)

upgraded.sayName();
upgraded.showStats();
upgraded.speakWisdom();
upgraded.showStats();