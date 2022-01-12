class Ninja {
    constructor(name,health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake() {
        this.health += 50;
    }
}

const ninja1 = new Ninja("Hyabusa", 20);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
