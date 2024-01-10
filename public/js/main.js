import { archerAttackModeBtn, archerCombatModeMenu, archerDamagePointsInput, archerDefenseModeBtn, archerHealthBar, archerHealthPointsInput,  archerNameInput, archerSprite,bossHealthBar, chronosBtn, chronosSprite, confirmStatsBtn, gameplay, gameplayArcherName, gameplayBossName, gameplayGameOver, gameplayMageName, gameplayWarriorName, lilithBtn, lilithSprite,  mageAttackModeBtn, mageCombatModeMenu, mageDamagePointsInput, mageDefenseModeBtn, mageHealthBar, mageHealthPointsInput, mageNameInput, mageSprite, mainMenu, mainMenuBoss, mainMenuHero, nextBtn, sauronBtn, sauronSprite, startGameBtn, textBoxGameplay, textBoxMenuHero, warriorAttackModeBtn, warriorCombatModeMenu, warriorDamagePointsInput, warriorDefenseModeBtn, warriorHealthBar, warriorHealthPointsInput, warriorNameInput, warriorSprite, yourTurnBtn } from "./variables.js";

import { Archer, Boss, Mage, Warrior } from './class.js'

// get random number (for damage)
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var mainMenuAudio = new Audio('./public/assets/music/main-menu-sound.mp3');
var gameplayAudio = new Audio('./public/assets/music/gameplay-sound.mp3');

function playMainMenuMusic() {
    mainMenuAudio.loop = true;
    mainMenuAudio.play();
}

function stopMainMenuMusic() {
    mainMenuAudio.pause();
    mainMenuAudio.currentTime = 0;
}

function playGameplayMusic() {
    gameplayAudio.loop = true;
    gameplayAudio.play();
}

function stopGameplayMusic() {
    gameplayAudio.pause();
    gameplayAudio.currentTime = 0;
}
// character maker variables
export let mageName
export let archerName
export let warriorName
export let warriorDamage
export let mageDamage
export let archerDamage
export let warriorHealth
export let mageHealth
export let archerHealth
export let warriorMaxHealth
export let mageMaxHealth
export let archerMaxHealth

// riddles
let riddleOne = document.querySelector('#riddleOne')
let riddleTwo = document.querySelector('#riddleTwo')
let riddleThree = document.querySelector('#riddleThree')


// adding hero special stats
let rage = 0
let mana = 7
let arrows = 6

// creating hero objects with Hero class
export let warrior = new Warrior(warriorName, 'neutral', warriorDamage, warriorHealth, warriorMaxHealth, rage);
export let mage = new Mage(mageName, 'neutral', mageDamage, mageHealth, mageMaxHealth, mana);
export let archer = new Archer(archerName, 'neutral', archerDamage, archerHealth, archerMaxHealth, arrows);

// creating boss objects with Boss class
export let lilith = new Boss('Lilith', getRandomInt(40,47), 1100, 1100)
export let chronos = new Boss('Chronos', getRandomInt(35, 40), 1300, 1300)
export let sauron = new Boss('Sauron', getRandomInt(30, 35), 1550, 1550)

// array we need to start a new game
export let bossOfTheGame = []

// handling menu through event listeners
startGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'block';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'none';
    // restartMenu.style.display = 'none';
    playMainMenuMusic();
});

lilithBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    // restartMenu.style.display = 'none'
    bossOfTheGame.push(lilith)
    textBoxMenuHero.innerHTML = "Give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

sauronBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    // restartMenu.style.display = 'none'
    bossOfTheGame.push(sauron)
    textBoxMenuHero.innerHTML = "Give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

chronosBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    // restartMenu.style.display = 'none'
    bossOfTheGame.push(chronos)
    textBoxMenuHero.innerHTML = "Give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

confirmStatsBtn.addEventListener('click', () => {
    mageName = mageNameInput.value;
    archerName = archerNameInput.value;
    warriorName = warriorNameInput.value;
    warriorDamage = parseInt(warriorDamagePointsInput.value);
    mageDamage = parseInt(mageDamagePointsInput.value);
    archerDamage = parseInt(archerDamagePointsInput.value);
    warriorHealth = parseInt(warriorHealthPointsInput.value);
    warriorMaxHealth = parseInt(warriorHealthPointsInput.value);
    mageHealth = parseInt(mageHealthPointsInput.value);
    mageMaxHealth = parseInt(mageHealthPointsInput.value);
    archerHealth = parseInt(archerHealthPointsInput.value);
    archerMaxHealth = parseInt(archerHealthPointsInput.value);

    let i = true;
    let allDamage = mageDamage + warriorDamage + archerDamage;
    let allHealth = mageHealth + warriorHealth + archerHealth;
    let j = 150;
    let k = 300;
    let l = 0;

    rage = 0
    mana = 7
    arrows = 6

    while (i == true){
        if (mageName != "" && warriorName != "" && archerName != "" && allDamage == j && allHealth == k && warriorHealth > l && mageHealth > l && archerHealth > l && warriorDamage > l && mageDamage > l && archerDamage > l) {
            stopMainMenuMusic();
            playGameplayMusic();
            switch (bossOfTheGame[0]){
                case lilith:
                    lilithSprite.style.display = 'block'
                    sauronSprite.style.display = 'none'
                    chronosSprite.style.display = 'none'
                    mainMenu.style.display = 'none'
                    mainMenuBoss.style.display = 'none'
                    mainMenuHero.style.display = 'none'
                    gameplay.style.display = 'block'
                    // restartMenu.style.display = 'none'
                    textBoxGameplay.innerHTML = `let's go guys! let's fight ${bossOfTheGame[0].name}`
                    gameplayBossName.innerHTML = bossOfTheGame[0].name
                    gameplayWarriorName.innerHTML = warriorName
                    gameplayMageName.innerHTML = mageName
                    gameplayArcherName.innerHTML = archerName
                    rage = 0
                    mana = 7
                    arrows = 6
                    console.log("4");
                    i = false
                    break
                case sauron:
                    lilithSprite.style.display = 'none'
                    sauronSprite.style.display = 'block'
                    chronosSprite.style.display = 'none'
                    mainMenu.style.display = 'none'
                    mainMenuBoss.style.display = 'none'
                    mainMenuHero.style.display = 'none'
                    gameplay.style.display = 'block'
                    // restartMenu.style.display = 'none'
                    textBoxGameplay.innerHTML = `let's go guys! let's fight ${bossOfTheGame[0].name}`
                    gameplayBossName.innerHTML = bossOfTheGame[0].name
                    gameplayWarriorName.innerHTML = warriorName
                    gameplayMageName.innerHTML = mageName
                    gameplayArcherName.innerHTML = archerName
                    console.log("3");
                    i = false
                    break
                case chronos:
                    lilithSprite.style.display = 'none'
                    sauronSprite.style.display = 'none'
                    chronosSprite.style.display = 'block'
                    mainMenu.style.display = 'none'
                    mainMenuBoss.style.display = 'none'
                    mainMenuHero.style.display = 'none'
                    gameplay.style.display = 'block'
                    // restartMenu.style.display = 'none'
                    textBoxGameplay.innerHTML = `let's go guys! let's fight ${bossOfTheGame[0].name}`
                    gameplayBossName.innerHTML = bossOfTheGame[0].name
                    gameplayWarriorName.innerHTML = warriorName
                    gameplayMageName.innerHTML = mageName
                    gameplayArcherName.innerHTML = archerName
                    rage = 0
                    mana = 7
                    arrows = 6
                    console.log("2");
                    i = false
                    break
            }
        } else {
           textBoxMenuHero.innerHTML = "Every hero should have a name and they need to have 300 health points and 150 attack points all together "
           console.log("1");
           i = true
           break
        }
    }
})

// restartGameBtn.addEventListener('click', () => {
//     mainMenu.style.display = 'none'
//     mainMenuBoss.style.display = 'block'
//     mainMenuHero.style.display = 'none'
//     gameplay.style.display = 'none'
//     restartMenu.style.display = 'none'
// })

// combat mode buttons
warriorAttackModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'attack'
    warriorCombatModeMenu.style.display = 'none'
    if (rage < 4) {
        bossOfTheGame[0].health -= (warriorDamage + (warriorDamage / 100 * 20))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            if (mageSprite.style.display != 'none'){
                mageCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            } else if (archerSprite.style.display != 'none' && mageSprite.style.display == 'none') {
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            } else {
                nextBtn.style.display = 'flex'
                console.log('yes');
                textBoxGameplay.innerHTML = `${warriorName} dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            }
            
        }
    } else if (rage == 4){
        bossOfTheGame[0].health -= ((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            if (mageSprite.style.display != 'none'){
                mageCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            } else if (archerSprite.style.display != 'none' && mageSprite.style.display == 'none') {
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            }
        }
}})

warriorDefenseModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'defense'
    warriorCombatModeMenu.style.display = 'none'
    if (rage < 4) {
        bossOfTheGame[0].health -= warriorDamage
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%` 
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            if (mageSprite.style.display != 'none'){
                mageCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt ${warriorDamage} damage!`
                rage += 1
            } else if (archerSprite.style.display != 'none' && mageSprite.style.display == 'none') {
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt ${warriorDamage} damage!`
                rage += 1
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt ${warriorDamage} damage!`
                rage += 1
            }
        }
    } else if (rage == 4){
        bossOfTheGame[0].health -= (warriorDamage + parseInt(warriorDamage/4))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            if (mageSprite.style.display != 'none'){
                mageCombatModeMenu.style.display = 'flex'
                archerCombatModeMenu.style.display = 'none'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } else if (archerSprite.style.display != 'none' && mageSprite.style.display == 'none') {
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } 
        }
}})

mageAttackModeBtn.addEventListener('click', () => {
    mage.combatMode = 'attack'
    mageCombatModeMenu.style.display = 'none'
    if (mana > 1 && mana <= 7){
        bossOfTheGame[0].health -= parseInt(mageDamage + (mageDamage / 4))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            if (archerSprite.style.display != 'none'){
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
                mana -= 2
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
                mana -= 2
            }
        }
    } else {
        if (archerSprite.style.display != 'none'){
            archerCombatModeMenu.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
        } else {
            nextBtn.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
        }
    }
})

mageDefenseModeBtn.addEventListener('click', () => {
    mage.combatMode = 'defense'
    mageCombatModeMenu.style.display = 'none'
    if (mana > 1 && mana <= 7){
        bossOfTheGame[0].health -= mageDamage
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            if (archerSprite.style.display != 'none'){
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${mageDamage} damage!`
                mana -= 2
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${mageDamage} damage!`
                mana -= 2
            }
        }
    } else {
        if (archerSprite.style.display != 'none'){
            archerCombatModeMenu.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
        } else {
            nextBtn.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
        }
    }
})

archerAttackModeBtn.addEventListener('click', () => {
    archer.combatMode = 'attack'
    archerCombatModeMenu.style.display = 'none'
    if (arrows > 0){
        bossOfTheGame[0].health -= parseInt(archerDamage + (archerDamage / 4))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            nextBtn.style.display = 'flex'
            textBoxGameplay.innerHTML = `${archerName} dealt ${parseInt(archerDamage + (archerDamage / 4))} damage!`
            arrows -= 1
        }
    } else {
        arrows = 6
        textBoxGameplay.innerHTML = `${archerName} doesn't have enough arrows! He'll have to wait another round.`
        nextBtn.style.display = 'flex'
    }
})

archerDefenseModeBtn.addEventListener('click', () => {
    archer.combatMode = 'defense'
    archerCombatModeMenu.style.display = 'none'
    if (arrows > 0){
        bossOfTheGame[0].health -= archerDamage
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
                    break
            }
        } else {
            nextBtn.style.display = 'flex'
            textBoxGameplay.innerHTML = `${archerName} dealt ${archerDamage} damage!`
            arrows -= 1
        }
    } else {
        arrows = 6
        textBoxGameplay.innerHTML = `${archerName} doesn't have enough arrows! He'll have to wait another round.`
        nextBtn.style.display = 'flex'
    }
})

nextBtn.addEventListener('click', () => {
    nextBtn.style.display = 'none'
    let target = getRandomInt(1,3)
    switch (target){
        case 1:
            if (warrior.combatMode == 'attack'){
                warriorHealth -= bossOfTheGame[0].damage
                warriorHealthBar.style.width = `${parseInt(warriorHealth / warriorMaxHealth * 100)}%`
                if (warriorHealth > 0){
                    textBoxGameplay.innerHTML = `${warriorName} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${warriorName} lost all his health points! We just lost a precious warrior!`
                    warriorSprite.style.display = 'none'
                    warriorHealthBar.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            } else {
                warriorHealth -= parseInt(bossOfTheGame[0].damage / 2)
                warriorHealthBar.style.width = `${parseInt(warriorHealth / warriorMaxHealth * 100)}%`
                if (warriorHealth > 0){
                    textBoxGameplay.innerHTML = `${warriorName} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage / 2} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${warriorName} lost all his health points! We just lost a precious warrior!`
                    warriorHealthBar.style.display = 'none'
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            }
            break
        case 2:
            if (mage.combatMode == 'attack'){
                mageHealth -= bossOfTheGame[0].damage
                mageHealthBar.style.width = `${parseInt(mageHealth / mageMaxHealth * 100)}%`
                if (mageHealth > 0){
                    textBoxGameplay.innerHTML = `${mageName} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${mageName} lost all his health points! We just lost a precious mage!`
                    mageHealthBar.style.display = 'none'
                    mageSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            } else {
                mageHealth -= parseInt(bossOfTheGame[0].damage / 2)
                mageHealthBar.style.width = `${parseInt(mageHealth / mageMaxHealth * 100)}%`
                if (mageHealth > 0){
                    textBoxGameplay.innerHTML = `${mageName} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage / 2} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${mageName} lost all his health points! We just lost a precious mage!`
                    mageHealthBar.style.display = 'none'
                    mageSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            }
            break
        case 3:
            if (archer.combatMode == 'attack'){
                archerHealth -= bossOfTheGame[0].damage
                archerHealthBar.style.width = `${parseInt(archerHealth / archerMaxHealth * 100)}%`
                if (archerHealth > 0){
                    textBoxGameplay.innerHTML = `${archerName} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${archerName} lost all his health points! We just lost a precious archer!`
                    archerHealthBar.style.display = 'none'
                    archerSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            } else {
                archerHealth -= parseInt(bossOfTheGame[0].damage / 2)
                archerHealthBar.style.width = `${parseInt(archerHealth / archerMaxHealth * 100)}%`
                if (archerHealth > 0){
                    textBoxGameplay.innerHTML = `${archerName} just took a hit from ${bossOfTheGame[0].name / 2}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${archerName} lost all his health points! We just lost a precious archer!`
                    archerHealthBar.style.display = 'none'
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            }
            break
    }
})

yourTurnBtn.addEventListener('click', () => {
    yourTurnBtn.style.display = 'none'
    textBoxGameplay.innerHTML = 'Your turn!'
    if (warriorSprite.style.display != 'none') {
        warriorCombatModeMenu.style.display = 'flex'
    } else if (mageSprite.style.display != 'none') {
        mageCombatModeMenu.style.display = 'flex'
    } else if (archerSprite.style.display != 'none') {
        archerCombatModeMenu.style.display = 'flex'
    }
})

