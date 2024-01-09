// importing what needs to be imported
import {Boss, Warrior, Mage, Archer, Hero} from './class.js';

// menu buttons
let mainMenu = document.querySelector('#mainMenu');
let mainMenuBoss = document.querySelector('#mainMenuBoss');
let mainMenuHero = document.querySelector('#mainMenuHero');
let gameplay = document.querySelector('#gameplay');
let restartMenu = document.querySelector('#restartMenu');
let startGameBtn = document.querySelector('#startGameBtn');
let restartGameBtn = document.querySelector('#replayGameBtn');
let lilithBtn = document.querySelector('#lilithBtn');
let sauronBtn = document.querySelector('#sauronBtn');
let chronosBtn = document.querySelector('#chronosBtn');
let confirmStatsBtn = document.querySelector('#confirmStatsBtn');

// character maker inputs
let warriorNameInput = document.querySelector('#warriorNameInput');
let mageNameInput = document.querySelector('#mageNameInput');
let archerNameInput = document.querySelector('#archerNameInput');
let warriorHealthPointsInput = document.querySelector('#warriorHealthPointsBtn');
let mageHealthPointsInput = document.querySelector('#mageHealthPointsBtn');
let archerHealthPointsInput = document.querySelector('#archerHealthPointsBtn');
let warriorDamagePointsInput = document.querySelector('#warriorDamagePointsInput');
let mageDamagePointsInput = document.querySelector('#mageDamagePointsInput');
let archerDamagePointsInput = document.querySelector('#archerDamagePointsInput');
let warriorAttackModeMenuBtn = document.querySelector('#warriorAttackModeMenuBtn');
let mageAttackModeMenuBtn = document.querySelector('#mageAttackModeMenuBtn');
let archerAttackModeMenuBtn = document.querySelector('#archerAttackModeMenuBtn');
let warriorDefenseModeMenuBtn = document.querySelector('#warriorDefenseModeMenuBtn');
let mageDefenseModeMenuBtn = document.querySelector('#mageDefenseModeMenuBtn');
let archerDefenseModeMenuBtn = document.querySelector('#archerDefenseModeMenuBtn');

// character maker variables
let warriorName = warriorNameInput.innerHTML;
let mageName = mageNameInput.innerHTML;
let archerName = archerNameInput.innerHTML;
let warriorHealth = warriorHealthPointsInput.innerHTML;
let mageHealth = mageHealthPointsInput.innerHTML;
let archerHealth = archerHealthPointsInput.innerHTML;
let warriorDamage = warriorDamagePointsInput.innerHTML;
let mageDamage = mageDamagePointsInput.innerHTML;
let archerDamage = archerDamagePointsInput.innerHTML;

// event listeners for the combat mode in the menu
warriorAttackModeMenuBtn.addEventListener('click', () => {
    warrior.combatMode = 'attack'
});

warriorDefenseModeMenuBtn.addEventListener('click', () => {
    warrior.combatMode = 'defense'
});

mageAttackModeMenuBtn.addEventListener('click', () => {
    mage.combatMode = 'attack'
});

mageDefenseModeMenuBtn.addEventListener('click', () => {
    mage.combatMode = 'defense'
});

archerAttackModeMenuBtn.addEventListener('click', () => {
    archer.combatMode = 'attack'
});

archerDefenseModeMenuBtn.addEventListener('click', () => {
    archer.combatMode = 'defense'
});

// adding hero special stats
let rage = 0;
let mana = 7;
let arrows = 6;

// creating hero objects with Hero class
let warrior = new Warrior(warriorName, warrior.combatMode, warriorDamage, warriorHealth, rage);
let mage = new Mage(mageName, mage.combatMode, mageDamage, mageHealth, mana);
let archer = new Archer(archerName, archer.combatMode, archerDamage, archerHealth, arrows);

// creating boss objects with Boss class
let lilith = new Boss('Lilith', 30, 900);
let chronos = new Boss('Chronos', 30, 1000);
let sauron = new Boss('Sauron', 25, 1150);

// handling menu through event listeners
startGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'block';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'none';
    restartMenu.style.display = 'none';
});

lilithBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'none';
    mainMenuHero.style.display = 'block';
    gameplay.style.display = 'none';
    restartMenu.style.display = 'none';
});

sauronBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'none';
    mainMenuHero.style.display = 'block';
    gameplay.style.display = 'none';
    restartMenu.style.display = 'none';
});

chronosBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'none';
    mainMenuHero.style.display = 'block';
    gameplay.style.display = 'none';
    restartMenu.style.display = 'none';
});

confirmStatsBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'none';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'block';
    restartMenu.style.display = 'none';
});

restartGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'block';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'none';
    restartMenu.style.display = 'none';
});