import { Archer, Boss, Mage, Warrior } from "./class.js"

// menu buttons and UI
export let mainMenu = document.querySelector('#mainMenu')
export let mainMenuBoss = document.querySelector('#mainMenuBoss')
export let mainMenuHero = document.querySelector('#mainMenuHero')
export let gameplay = document.querySelector('#gameplay')
export let restartMenu = document.querySelector('#restartMenu')
export let startGameBtn = document.querySelector('#startGameBtn');
export let restartGameBtn = document.querySelector('#replayGameBtn')
export let lilithBtn = document.querySelector('#lilithBtn');
export let sauronBtn = document.querySelector('#sauronBtn');
export let chronosBtn = document.querySelector('#chronosBtn');
export let confirmStatsBtn = document.querySelector('#confirmStatsBtn');
export let textBoxMenuHero = document.querySelector('#textBoxMenuHero');
export let textBoxGameplay = document.querySelector('#textBoxGameplay');
export let warriorCombatModeMenu = document.querySelector('#warriorCombatModeMenu')
export let mageCombatModeMenu = document.querySelector('#mageCombatModeMenu')
export let archerCombatModeMenu = document.querySelector('#archerCombatModeMenu')

// character maker inputs
export let warriorNameInput = document.querySelector('#warriorNameInput')
export let mageNameInput = document.querySelector('#mageNameInput')
export let archerNameInput = document.querySelector('#archerNameInput')
export let warriorHealthPointsInput = document.querySelector('#warriorHealthPointsBtn')
export let mageHealthPointsInput = document.querySelector('#mageHealthPointsBtn')
export let archerHealthPointsInput = document.querySelector('#archerHealthPointsBtn')
export let warriorDamagePointsInput = document.querySelector('#warriorDamagePointsInput')
export let mageDamagePointsInput = document.querySelector('#mageDamagePointsInput')
export let archerDamagePointsInput = document.querySelector('#archerDamagePointsInput')
export let warriorAttackModeBtn = document.querySelector('#warriorAttackModeBtn')
export let mageAttackModeBtn = document.querySelector('#mageAttackModeBtn')
export let archerAttackModeBtn = document.querySelector('#archerAttackModeBtn')
export let warriorDefenseModeBtn = document.querySelector('#warriorDefenseModeBtn')
export let mageDefenseModeBtn = document.querySelector('#mageDefenseModeBtn')
export let archerDefenseModeBtn = document.querySelector('#archerDefenseModeBtn')

// character maker variables
export let warriorName = warriorNameInput.innerHTML
export let mageName = mageNameInput.innerHTML
export let archerName = archerNameInput.innerHTML
export let warriorHealth = warriorHealthPointsInput.innerHTML
export let mageHealth = mageHealthPointsInput.innerHTML
export let archerHealth = archerHealthPointsInput.innerHTML
export let warriorDamage = warriorDamagePointsInput.innerHTML
export let mageDamage = mageDamagePointsInput.innerHTML
export let archerDamage = archerDamagePointsInput.innerHTML

// adding hero special stats
export let rage = 0
export let mana = 7
export let arrows = 6

// creating hero objects with Hero class
export let warrior = new Warrior(warriorName, warrior.combatMode, warriorDamage, warriorHealth, rage);
export let mage = new Mage(mageName, mage.combatMode, mageDamage, mageHealth, mana);
export let archer = new Archer(archerName, archer.combatMode, archerDamage, archerHealth, arrows);

// creating boss objects with Boss class
export let lilith = new Boss('Lilith', getRandomInt(40,47), 800)
export let chronos = new Boss('Chronos', getRandomInt(35, 40), 1000)
export let sauron = new Boss('Sauron', getRandomInt(30, 35), 1150)

// array we need to start a new game
export let bossOfTheGame = []