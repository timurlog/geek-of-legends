// importing what need to be imported


// creating hero class
export class Hero {
    constructor(name, combatMode, damage, health){
        this.name = name,
        this.combatMode = combatMode,
        this.damage = damage,
        this.health = health
    }
}

// creating the different heroes classes
export class Warrior extends Hero {
    constructor(name, combatMode, damage, health, rage)
}