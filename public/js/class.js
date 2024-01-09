// importing what need to be imported
import 

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
    constructor(name, combatMode, damage, health, rage){
        super(name, combatMode, damage, health)
        this.rage = rage
    }
}

export class Mage extends Hero {
    constructor(name, combatMode, damage, health, mana){
        super(name, combatMode, damage, health)
        this.mana = mana
    }
}

export class Archer extends Hero {
    constructor(name, combatmode, damage, health, arrows){
        super(name, combatmode, damage, health)
        this.arrows = arrows
    }
}

// creating the boss class
export class Boss {
    constructor(name, damage, health){
        this.name = name,
        this.damage = damage,
        this.health = health
    }
}