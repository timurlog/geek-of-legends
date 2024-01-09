// importing what needs to be imported
import {Boss, Warrior, Mage, Archer} from './class.js';

// get random number (for damage)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// menu buttons and UI
let mainMenu = document.querySelector('#mainMenu')
let mainMenuBoss = document.querySelector('#mainMenuBoss')
let mainMenuHero = document.querySelector('#mainMenuHero')
let gameplay = document.querySelector('#gameplay')
let restartMenu = document.querySelector('#restartMenu')
let startGameBtn = document.querySelector('#startGameBtn');
let restartGameBtn = document.querySelector('#replayGameBtn')
let lilithBtn = document.querySelector('#lilithBtn');
let sauronBtn = document.querySelector('#sauronBtn');
let chronosBtn = document.querySelector('#chronosBtn');
let confirmStatsBtn = document.querySelector('#confirmStatsBtn');
let textBoxMenuHero = document.querySelector('#textBoxMenuHero');
let textBoxGameplay = document.querySelector('#textBoxGameplay');
let warriorCombatModeMenu = document.querySelector('#warriorCombatModeMenu')
let mageCombatModeMenu = document.querySelector('#mageCombatModeMenu')
let archerCombatModeMenu = document.querySelector('#archerCombatModeMenu')

// character maker inputs
let warriorNameInput = document.querySelector('#warriorNameInput')
let mageNameInput = document.querySelector('#mageNameInput')
let archerNameInput = document.querySelector('#archerNameInput')
let warriorHealthPointsInput = document.querySelector('#warriorHealthPointsBtn')
let mageHealthPointsInput = document.querySelector('#mageHealthPointsBtn')
let archerHealthPointsInput = document.querySelector('#archerHealthPointsBtn')
let warriorDamagePointsInput = document.querySelector('#warriorDamagePointsInput')
let mageDamagePointsInput = document.querySelector('#mageDamagePointsInput')
let archerDamagePointsInput = document.querySelector('#archerDamagePointsInput')
let warriorAttackModeBtn = document.querySelector('#warriorAttackModeBtn')
let mageAttackModeBtn = document.querySelector('#mageAttackModeBtn')
let archerAttackModeBtn = document.querySelector('#archerAttackModeBtn')
let warriorDefenseModeBtn = document.querySelector('#warriorDefenseModeBtn')
let mageDefenseModeBtn = document.querySelector('#mageDefenseModeBtn')
let archerDefenseModeBtn = document.querySelector('#archerDefenseModeBtn')

// character maker variables
let warriorName = warriorNameInput.innerHTML
let mageName = mageNameInput.innerHTML
let archerName = archerNameInput.innerHTML
let warriorHealth = warriorHealthPointsInput.innerHTML
let mageHealth = mageHealthPointsInput.innerHTML
let archerHealth = archerHealthPointsInput.innerHTML
let warriorDamage = warriorDamagePointsInput.innerHTML
let mageDamage = mageDamagePointsInput.innerHTML
let archerDamage = archerDamagePointsInput.innerHTML

// adding hero special stats
let rage = 0
let mana = 7
let arrows = 6

// creating hero objects with Hero class
let warrior = new Warrior(warriorName, warrior.combatMode, warriorDamage, warriorHealth, rage);
let mage = new Mage(mageName, mage.combatMode, mageDamage, mageHealth, mana);
let archer = new Archer(archerName, archer.combatMode, archerDamage, archerHealth, arrows);

// creating boss objects with Boss class
let lilith = new Boss('Lilith', getRandomInt(40,47), 800)
let chronos = new Boss('Chronos', getRandomInt(35, 40), 1000)
let sauron = new Boss('Sauron', getRandomInt(30, 35), 1150)

// array we need to start a new game
let bossOfTheGame = []

// handling menu through event listeners
startGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'block'
    mainMenuHero.style.display = 'none'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
})

lilithBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
    singleGame.push(lilith)
    textBoxMenuHero.innerHTML = "give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

sauronBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
    singleGame.push(sauron)
    textBoxMenuHero.innerHTML = "give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

chronosBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
    singleGame.push(chronos)
    textBoxMenuHero.innerHTML = "give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

confirmStatsBtn.addEventListener('click', () => {
    if (warriorName != "" && mageName != "" && archerName != "" && (warriorDamage + mageDamage + archerDamage) == 150 && (warriorHealth + mageHealth + archerHealth) == 300) {
        mainMenu.style.display = 'none'
        mainMenuBoss.style.display = 'none'
        mainMenuHero.style.display = 'none'
        gameplay.style.display = 'block'
        restartMenu.style.display = 'none'
    } else {
       textBoxMenuHero.innerHTML = "Every hero should have a name and they need to have 300 health points and 150 attack points all together "
    }
})

restartGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'block'
    mainMenuHero.style.display = 'none'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
})

// combat mode buttons
warriorAttackModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'attack'
    warriorCombatModeMenu.style.display = 'none'
    if (rage < 4) {
        bossOfTheGame[0].health -= warriorDamage
        rage += 1
    } else if (rage == 4){
        bossOfTheGame[0].health -= (warriorDamage + (warriorDamage / 100 * 20))
    }
})

warriorDefenseModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'defense'
    warriorCombatModeMenu.style.display = 'none'
    rage += 1
})

mageAttackModeBtn.addEventListener('click', () => {
    mage.combatMode = 'attack'
    mageCombatModeMenu.style.display = 'none'
    mana -= 2
})

mageDefenseModeBtn.addEventListener('click', () => {
    mage.combatMode = 'defense'
    mageCombatModeMenu.style.display = 'none'
    mana -= 2
})

archerAttackModeBtn.addEventListener('click', () => {
    archer.combatMode = 'attack'
    archerCombatModeMenu.style.display = 'none'
    arrows -= 1
})

archerDefenseModeBtn.addEventListener('click', () => {
    archer.combatMode = 'defense'
    archerCombatModeMenu.style.display = 'none'
    arrows -= 1
})
