// creating hero class
export class Hero {
    constructor(name, combatMode, damage, health, maxHealth){
        this.name = name,
        this.combatMode = combatMode,
        this.damage = damage,
        this.health = health
        this.maxHealth = maxHealth
    }
}

// creating the different heroes classes
export class Warrior extends Hero {
    constructor(name, combatMode, damage, health, maxHealth, rage){
        super(name, combatMode, damage, health, maxHealth)
        this.maxHealth = maxHealth,
        this.rage = rage
    }
}

export class Mage extends Hero {
    constructor(name, combatMode, damage, health, maxHealth, mana){
        super(name, combatMode, damage, health, maxHealth)
        this.maxHealth = maxHealth,
        this.mana = mana
    }
}

export class Archer extends Hero {
    constructor(name, combatMode, damage, health, maxHealth, arrows){
        super(name, combatMode, damage, health, maxHealth)
        this.maxHealth = maxHealth,
        this.arrows = arrows
    }
}

// creating the boss class
export class Boss {
    constructor(name, damage, health, maxHealth){
        this.name = name,
        this.damage = damage,
        this.health = health,
        this.maxHealth = maxHealth
    }
}