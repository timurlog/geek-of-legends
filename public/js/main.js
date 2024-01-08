// importing what needs to be imported
import {Hero, Boss} from './class.js';

// menu buttons
export let startGameBtn = document.querySelector('#startGameBtn');
export let replayGameBtn = document.querySelector('#replayGameBtn')
export let lilithBtn = document.querySelector('#lilithBtn');
export let sauronBtn = document.querySelector('#sauronBtn');
export let chronosBtn = document.querySelector('#chronosBtn');
export let confirmStatsBtn = document.querySelector('#confirmStatsBtn');

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
export let warriorAttackModeMenuBtn = document.querySelector('#warriorAttackModeMenuBtn')
export let mageAttackModeMenuBtn = document.querySelector('#mageAttackModeMenuBtn')
export let archerAttackModeMenuBtn = document.querySelector('#archerAttackModeMenuBtn')
export let warriorDefenseModeMenuBtn = document.querySelector('#warriorDefenseModeMenuBtn')
export let mageDefenseModeMenuBtn = document.querySelector('#mageDefenseModeMenuBtn')
export let archerDefenseModeMenuBtn = document.querySelector('#archerDefenseModeMenuBtn')

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

// creating hero objects with Hero class
export let warrior = new Hero();
export let mage = new Hero();
export let archer = new Hero();

// creating boss objects with Boss class
export let lilith = new Boss('Lilith', 30, 900)
export let chronos = new Boss('Chronos', 30, 1000)
export let sauron = new Boss('Sauron', 25, 1150)