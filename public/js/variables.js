import { Archer, Boss, Mage, Warrior } from "./classes.js"

// menu buttons and menu UI
export let mainMenu = document.querySelector('#mainMenu')
export let mainMenuBoss = document.querySelector('#mainMenuBoss')
export let mainMenuHero = document.querySelector('#mainMenuHero')
export let gameplay = document.querySelector('#gameplay')
export let gameOverMenu = document.querySelector('#gameoverMenu')
export let youWinMenu = document.querySelector('#youWinMenu')
export let startGameBtn = document.querySelector('#startGameBtn');
export let goToMainMenuBtn1 = document.querySelector('#goToMainMenuBtn')
export let goToMainMenuBtn2 = document.querySelector('#goToMainMenuBtn2')
export let lilithBtn = document.querySelector('#lilithBtn');
export let sauronBtn = document.querySelector('#sauronBtn');
export let chronosBtn = document.querySelector('#chronosBtn');
export let confirmStatsBtn = document.querySelector('#confirmStatsBtn');
export let textBoxMenuHero = document.querySelector('#textBoxMenuHero');
export let textBoxGameplay = document.querySelector('#textBoxGameplay');
export let warriorCombatModeMenu = document.querySelector('#warriorCombatModeMenu')
export let mageCombatModeMenu = document.querySelector('#mageCombatModeMenu')
export let archerCombatModeMenu = document.querySelector('#archerCombatModeMenu')

// gameplay UI
export let sauronSprite = document.querySelector('#sauronSprite')
export let lilithSprite = document.querySelector('#lilithSprite')
export let chronosSprite = document.querySelector('#chronosSprite')
export let warriorSprite = document.querySelector('#warriorSprite')
export let mageSprite = document.querySelector('#mageSprite')
export let archerSprite = document.querySelector('#archerSprite')
export let bossHealthBar = document.querySelector('#bossHealthBar')
export let warriorHealthBar = document.querySelector('#warriorHealthBar')
export let mageHealthBar = document.querySelector('#mageHealthBar')
export let archerHealthBar = document.querySelector('#archerHealthBar')
export let nextMenu = document.querySelector('#nextDiv')
export let nextBtn = document.querySelector('#nextBtn')
export let yourTurnMenu = document.querySelector('#yourTurnDiv')
export let yourTurnBtn = document.querySelector('#yourTurnBtn')
export let gameplayBossName = document.querySelector('#gameplayBossName')
export let gameplayGameOver = document.querySelector('#gameplayGameOver')
export let gameplayWarriorName = document.querySelector('#gameplayWarriorName')
export let gameplayMageName = document.querySelector('#gameplayMageName')
export let gameplayArcherName = document.querySelector('#gameplayArcherName')


// character maker inputs
export let warriorNameInput = document.querySelector('#warriorNameInput')
export let mageNameInput = document.querySelector('#mageNameInput')
export let archerNameInput = document.querySelector('#archerNameInput')
export let warriorHealthPointsInput = document.querySelector('#warriorHealthPointsInput')
export let mageHealthPointsInput = document.querySelector('#mageHealthPointsInput')
export let archerHealthPointsInput = document.querySelector('#archerHealthPointsInput')
export let warriorDamagePointsInput = document.querySelector('#warriorDamagePointsInput')
export let mageDamagePointsInput = document.querySelector('#mageDamagePointsInput')
export let archerDamagePointsInput = document.querySelector('#archerDamagePointsInput')
export let warriorAttackModeBtn = document.querySelector('#warriorAttackModeBtn')
export let mageAttackModeBtn = document.querySelector('#mageAttackModeBtn')
export let archerAttackModeBtn = document.querySelector('#archerAttackModeBtn')
export let warriorDefenseModeBtn = document.querySelector('#warriorDefenseModeBtn')
export let mageDefenseModeBtn = document.querySelector('#mageDefenseModeBtn')
export let archerDefenseModeBtn = document.querySelector('#archerDefenseModeBtn')

// audio asset integration
export let mainMenuAudio = new Audio('./public/assets/music/main-menu-sound.mp3');
export let gameplayAudio = new Audio('./public/assets/music/gameplay-sound.mp3');
export let archerAttackAudio = new Audio('./public/assets/music/archer-attack-sound.mp3');
export let mageAttackAudio = new Audio('./public/assets/music/mage-attack-sound.mp3');
export let warriorAttackAudio = new Audio('./public/assets/music/warrior-attack-sound.mp3');
export let warriorBigAttackAudio = new Audio('./public/assets/music/warrior-big-attack-sound.mp3');
export let bossAttackAudio = new Audio('./public/assets/music/boss-attack-sound.mp3');
export let archerReloadAudio = new Audio('./public/assets/music/archer-reload-sound.mp3');
export let mageReloadAudio = new Audio('./public/assets/music/mage-reload-sound.mp3');