import { archerAttackAudio, archerAttackModeBtn, archerCombatModeMenu, archerDamagePointsInput, archerDefenseModeBtn, archerHealthBar, archerHealthPointsInput,  archerNameInput, archerReloadAudio, archerSprite,bossAttackAudio,bossHealthBar, chronosBtn, chronosSprite, confirmStatsBtn, gameOverMenu, gameplay, gameplayArcherName, gameplayAudio, gameplayBossName, gameplayGameOver, gameplayMageName, gameplayWarriorName, goToMainMenuBtn1, goToMainMenuBtn2, goToRiddleBtn, goToRiddleMenu, lilithBtn, lilithSprite,  mageAttackAudio,  mageAttackModeBtn, mageCombatModeMenu, mageDamagePointsInput, mageDefenseModeBtn, mageHealthBar, mageHealthPointsInput, mageNameInput, mageReloadAudio, mageSprite, mainMenu, mainMenuAudio, mainMenuBoss, mainMenuHero, nextBtn, nextMenu, riddleOne, riddleOneFalse1Btn, riddleOneFalse2Btn, riddleOneFalse3Btn, riddleOneTrueBtn, riddleThree, riddleThreeFalse1Btn, riddleThreeFalse2Btn, riddleThreeFalse3Btn, riddleThreeTrueBtn, riddleTwo, riddleTwoFalse1Btn, riddleTwoFalse2Btn, riddleTwoFalse3Btn, riddleTwoTrueBtn, sauronBtn, sauronSprite, startGameBtn, textBoxGameplay, textBoxMenuHero, warriorAttackAudio, warriorAttackModeBtn, warriorBigAttackAudio, warriorCombatModeMenu, warriorDamagePointsInput, warriorDefenseModeBtn, warriorHealthBar, warriorHealthPointsInput, warriorNameInput, warriorSprite, youWinMenu, yourTurnBtn, yourTurnMenu } from "./variables.js";
import { Archer, Boss, Mage, Warrior } from './classes.js'
import { archerDamageVFX, bossDamageVFX, getRandomInt, mageDamageVFX, playArcherAttackEffect, playArcherReloadEffect, playBossAttackEffect, playGameplayMusic, playMageAttackEffect, playMageReloadEffect, playMainMenuMusic, playWarriorAttackEffect, playWarriorBigAttackEffect, stopGameplayMusic, stopMainMenuMusic, warriorDamageVFX } from './functions.js'

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
    riddle.style.display = 'none'
    gameOverMenu.style.display = 'none'
    youWinMenu.style.display = 'none'
    playMainMenuMusic();
});

goToMainMenuBtn1.addEventListener('click', () => {
    mainMenu.style.display = 'block';
    mainMenuBoss.style.display = 'none';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'none';
    riddle.style.display = 'none'
    gameOverMenu.style.display = 'none'
    youWinMenu.style.display = 'none'
    bossOfTheGame = []
    stopGameplayMusic();
    playMainMenuMusic();
})

goToMainMenuBtn2.addEventListener('click', () => {
    mainMenu.style.display = 'block';
    mainMenuBoss.style.display = 'none';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'none';
    riddle.style.display = 'none'
    gameOverMenu.style.display = 'none'
    youWinMenu.style.display = 'none'
    bossOfTheGame = []
    stopGameplayMusic();
    playMainMenuMusic();

})

// Boss choice menu
lilithBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    riddle.style.display = 'none'
    bossOfTheGame.push(lilith)
    textBoxMenuHero.innerHTML = "Give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

sauronBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    riddle.style.display = 'none'
    bossOfTheGame.push(sauron)
    textBoxMenuHero.innerHTML = "Give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

chronosBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    riddle.style.display = 'none'
    bossOfTheGame.push(chronos)
    textBoxMenuHero.innerHTML = "Give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

// confirmation button menu
confirmStatsBtn.addEventListener('click', () => {

    // giving and/or resetting the character stats and character names
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
    
    bossOfTheGame[0].health = bossOfTheGame[0].maxHealth

    warriorSprite.style.display = 'block'
    mageSprite.style.display = 'block'
    archerSprite.style.display = 'block'

    bossHealthBar.style.width = '100%'
    warriorHealthBar.style.width = '100%'
    mageHealthBar.style.width = '100%'
    archerHealthBar.style.width = '100%'

    bossHealthBar.style.display = 'block'
    warriorHealthBar.style.display = 'block'
    mageHealthBar.style.display = 'block'
    archerHealthBar.style.display = 'block'

    warriorCombatModeMenu.style.display = 'flex'

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

// combat mode buttons
warriorAttackModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'attack'
    warriorCombatModeMenu.style.display = 'none'
    if (rage < 4) {
        playWarriorAttackEffect();
        bossDamageVFX('damageAnim', 500, 300);
        bossOfTheGame[0].health -= (warriorDamage + (warriorDamage / 100 * 20))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
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
                nextMenu.style.display = 'flex'
                console.log('yes');
                textBoxGameplay.innerHTML = `${warriorName} dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            }
            
        }
    } else if (rage == 4){
        playWarriorBigAttackEffect();
        bossDamageVFX('damageAnim', 750, 300);
        bossOfTheGame[0].health -= ((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
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
                nextMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            }
        }
}})

warriorDefenseModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'defense'
    warriorCombatModeMenu.style.display = 'none'
    if (rage < 4) {
        playWarriorAttackEffect();
        bossDamageVFX('damageAnim', 500, 300);
        bossOfTheGame[0].health -= warriorDamage
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%` 
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
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
                nextMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt ${warriorDamage} damage!`
                rage += 1
            }
        }
    } else if (rage == 4){
        playWarriorBigAttackEffect();
        bossDamageVFX('damageAnim', 750, 300);
        bossOfTheGame[0].health -= (warriorDamage + parseInt(warriorDamage/4))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
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
                nextMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warriorName} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } 
        }
}})

mageAttackModeBtn.addEventListener('click', () => {
    mage.combatMode = 'attack'
    mageCombatModeMenu.style.display = 'none'
    if (mana > 1 && mana <= 7){
        playMageAttackEffect();
        bossDamageVFX('damageAnim', 2350, 300);
        bossOfTheGame[0].health -= parseInt(mageDamage + (mageDamage / 4))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
        } else {
            if (archerSprite.style.display != 'none'){
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
                mana -= 2
            } else {
                nextMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
                mana -= 2
            }
        }
    } else {
        if (archerSprite.style.display != 'none'){
            archerCombatModeMenu.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
            playMageReloadEffect()
        } else {
            nextMenu.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
            playMageReloadEffect()
        }
    }
})

mageDefenseModeBtn.addEventListener('click', () => {
    mage.combatMode = 'defense'
    mageCombatModeMenu.style.display = 'none'
    if (mana > 1 && mana <= 7){
        playMageAttackEffect();
        bossDamageVFX('damageAnim', 2350, 300);
        bossOfTheGame[0].health -= mageDamage
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
        } else {
            if (archerSprite.style.display != 'none'){
                archerCombatModeMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${mageDamage} damage!`
                mana -= 2
            } else {
                nextMenu.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mageName} dealt ${mageDamage} damage!`
                mana -= 2
            }
        }
    } else {
        if (archerSprite.style.display != 'none'){
            archerCombatModeMenu.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
            playMageReloadEffect()
        } else {
            nextMenu.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mageName} doesn't have enough mana! He'll have to wait another round.`
            playMageReloadEffect()
        }
    }
})

archerAttackModeBtn.addEventListener('click', () => {
    archer.combatMode = 'attack'
    archerCombatModeMenu.style.display = 'none'
    if (arrows > 0){
        playArcherAttackEffect();
        bossDamageVFX('damageAnim', 700, 300);
        bossOfTheGame[0].health -= parseInt(archerDamage + (archerDamage / 4))
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
        } else {
            nextMenu.style.display = 'flex'
            textBoxGameplay.innerHTML = `${archerName} dealt ${parseInt(archerDamage + (archerDamage / 4))} damage!`
            arrows -= 1
        }
    } else {
        playArcherReloadEffect()
        arrows = 6
        textBoxGameplay.innerHTML = `${archerName} doesn't have enough arrows! He'll have to wait another round.`
        nextMenu.style.display = 'flex'
    }
})

archerDefenseModeBtn.addEventListener('click', () => {
    archer.combatMode = 'defense'
    archerCombatModeMenu.style.display = 'none'
    if (arrows > 0){
        playArcherAttackEffect();
        bossDamageVFX('damageAnim', 700, 300);
        bossOfTheGame[0].health -= archerDamage
        bossHealthBar.style.width = `${parseInt(bossOfTheGame[0].health / bossOfTheGame[0].maxHealth * 100)}%`
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].maxHealth / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            goToRiddleMenu.style.display = 'flex'
            
        } else {
            nextMenu.style.display = 'flex'
            textBoxGameplay.innerHTML = `${archerName} dealt ${archerDamage} damage!`
            arrows -= 1
        }
    } else {
        playArcherReloadEffect()
        arrows = 6
        textBoxGameplay.innerHTML = `${archerName} doesn't have enough arrows! He'll have to wait another round.`
        nextMenu.style.display = 'flex'
    }
})

nextBtn.addEventListener('click', () => {
    playBossAttackEffect();
    nextMenu.style.display = 'none'
    let target
    let targetTarget
    if (warriorHealth > 0 && mageHealth > 0 && archerHealth > 0) {
        target = getRandomInt(1,3)
    } else if (warriorHealth <= 0 && mageHealth > 0 && archerHealth > 0 ) {
        target = getRandomInt(2,3)
    } else if (warriorHealth > 0 && mageHealth <= 0 && archerHealth > 0) {
        targetTarget =  getRandomInt(1,2)
        if (targetTarget == 1) {
            target = 1
        } else {
            target = 3
        }
    } else if(warriorHealth > 0 && mageHealth > 0 && archerHealth <= 0) {
        target = getRandomInt(1,2)
    } else if (warriorHealth > 0 && mageHealth <= 0 && archerHealth <= 0) {
        target = 1
    } else if (warriorHealth <= 0 && mageHealth > 0 && archerHealth <= 0) {
        target = 2
    } else if(warriorHealth <= 0 && mageHealth <= 0 && archerHealth > 0 ) {
        target = 3
    }
    
    switch (target){
        case 1:
            if (warrior.combatMode == 'attack' && warriorHealth > 0){
                warriorDamageVFX('damageAnimHero', 700, 300)
                warriorHealth -= bossOfTheGame[0].damage
                warriorHealthBar.style.width = `${parseInt(warriorHealth / warriorMaxHealth * 100)}%`
                if (warriorHealth > 0){
                    textBoxGameplay.innerHTML = `${warriorName} just took a hit from ${bossOfTheGame[0].name}! he lost ${parseInt(bossOfTheGame[0].damage)} health points`
                    yourTurnMenu.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${warriorName} lost all his health points! We just lost a precious warrior!`
                    warriorSprite.style.display = 'none'
                    warriorHealthBar.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameOverMenu.style.display = 'block'
                        gameplay.style.display = 'none'
                    } else {
                        yourTurnMenu.style.display = 'flex'
                    }
                }
            } else if (warrior.combatMode == 'defense' && warriorHealth > 0) {
                warriorDamageVFX('damageAnimHero', 700, 300)
                warriorHealth -= parseInt(bossOfTheGame[0].damage / 2)
                warriorHealthBar.style.width = `${parseInt(warriorHealth / warriorMaxHealth * 100)}%`
                if (warriorHealth > 0){
                    textBoxGameplay.innerHTML = `${warriorName} just took a hit from ${bossOfTheGame[0].name}! he lost ${parseInt(bossOfTheGame[0].damage / 2)} health points`
                    yourTurnMenu.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${warriorName} lost all his health points! We just lost a precious warrior!`
                    warriorHealthBar.style.display = 'none'
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameOverMenu.style.display = 'block'
                        gameplay.style.display = 'none'
                    } else {
                        yourTurnMenu.style.display = 'flex'
                    }
                }
            } else {
                yourTurnMenu.style.display = 'flex'
            }
            break
        case 2:
            if (mage.combatMode == 'attack' && mageHealth > 0){
                mageDamageVFX('damageAnimHero', 700, 300)
                mageHealth -= bossOfTheGame[0].damage
                mageHealthBar.style.width = `${parseInt(mageHealth / mageMaxHealth * 100)}%`
                if (mageHealth > 0){
                    textBoxGameplay.innerHTML = `${mageName} just took a hit from ${bossOfTheGame[0].name}! he lost ${parseInt(bossOfTheGame[0].damage)} health points`
                    yourTurnMenu.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${mageName} lost all his health points! We just lost a precious mage!`
                    mageHealthBar.style.display = 'none'
                    mageSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameOverMenu.style.display = 'block'
                        gameplay.style.display = 'none'
                    } else {
                        yourTurnMenu.style.display = 'flex'
                    }
                }
            } else if (mage.combatMode == 'defense' && mageHealth > 0) {
                mageDamageVFX('damageAnimHero', 700, 300)
                mageHealth -= parseInt(bossOfTheGame[0].damage / 2)
                mageHealthBar.style.width = `${parseInt(mageHealth / mageMaxHealth * 100)}%`
                if (mageHealth > 0){
                    textBoxGameplay.innerHTML = `${mageName} just took a hit from ${bossOfTheGame[0].name}! he lost ${parseInt(bossOfTheGame[0].damage / 2)} health points`
                    yourTurnMenu.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${mageName} lost all his health points! We just lost a precious mage!`
                    mageHealthBar.style.display = 'none'
                    mageSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameOverMenu.style.display = 'block'
                        gameplay.style.display = 'none'
                    } else {
                        yourTurnMenu.style.display = 'flex'
                    }
                }
            } else {
                yourTurnMenu.style.display = 'flex'
            }
            break
        case 3:
            if (archer.combatMode == 'attack' && archerHealth > 0){
                archerDamageVFX('damageAnimHero', 700, 300)
                archerHealth -= bossOfTheGame[0].damage
                archerHealthBar.style.width = `${parseInt(archerHealth / archerMaxHealth * 100)}%`
                if (archerHealth > 0){
                    textBoxGameplay.innerHTML = `${archerName} just took a hit from ${bossOfTheGame[0].name}! he lost ${parseInt(bossOfTheGame[0].damage)} health points`
                    yourTurnMenu.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${archerName} lost all his health points! We just lost a precious archer!`
                    archerHealthBar.style.display = 'none'
                    archerSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameOverMenu.style.display = 'block'
                        gameplay.style.display = 'none'
                    } else {
                        yourTurnMenu.style.display = 'flex'
                    }
                }
            } else if (archer.combatMode == 'defense' && archerHealth > 0){
                archerDamageVFX('damageAnimHero', 700, 300)
                archerHealth -= parseInt(bossOfTheGame[0].damage / 2)
                archerHealthBar.style.width = `${parseInt(archerHealth / archerMaxHealth * 100)}%`
                if (archerHealth > 0){
                    textBoxGameplay.innerHTML = `${archerName} just took a hit from ${bossOfTheGame[0].name}! he lost ${parseInt(bossOfTheGame[0].damage / 2)} health points`
                    yourTurnMenu.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${archerName} lost all his health points! We just lost a precious archer!`
                    archerHealthBar.style.display = 'none'
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameOverMenu.style.display = 'block'
                        gameplay.style.display = 'none'
                    } else {
                        yourTurnMenu.style.display = 'flex'
                    }
                }
            } else {
                yourTurnMenu.style.display = 'flex'
            }
            break
    }
})

yourTurnBtn.addEventListener('click', () => {
    yourTurnMenu.style.display = 'none'
    textBoxGameplay.innerHTML = 'Your turn!'
    if (warriorSprite.style.display != 'none') {
        warriorCombatModeMenu.style.display = 'flex'
    } else if (mageSprite.style.display != 'none') {
        mageCombatModeMenu.style.display = 'flex'
    } else if (archerSprite.style.display != 'none') {
        archerCombatModeMenu.style.display = 'flex'
    }
})

goToRiddleBtn.addEventListener('click', () => {
    gameplay.style.display = 'none'
    goToRiddleMenu.style.display = 'none'
    riddle.style.display = 'block'
    let riddles = getRandomInt(1,3)
            switch (riddles){
                 case 1:
                    riddleOne.style.display = 'flex'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                    break
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'flex'
                    riddleThree.style.display = 'none'
                    break
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'flex'
                    break
            }
})

riddleOneTrueBtn.addEventListener('click', () => {
    youWinMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleOneFalse1Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleOneFalse2Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleOneFalse3Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleTwoTrueBtn.addEventListener('click', () => {
    youWinMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleTwoFalse1Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleTwoFalse2Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleTwoFalse3Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleThreeTrueBtn.addEventListener('click', () => {
    youWinMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleThreeFalse1Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleThreeFalse2Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})

riddleThreeFalse3Btn.addEventListener('click', () => {
    gameOverMenu.style.display = 'block'
    riddle.style.display = 'none'
})