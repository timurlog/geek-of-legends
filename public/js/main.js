import { archer, archerAttackModeBtn, archerCombatModeMenu, archerDamage, archerDefenseModeBtn, archerHealth, archerName, arrows, bossOfTheGame, chronos, chronosBtn, confirmStatsBtn, gameplay, lilith, lilithBtn, mage, mageAttackModeBtn, mageCombatModeMenu, mageDamage, mageDefenseModeBtn, mageHealth, mageName, mainMenu, mainMenuBoss, mainMenuHero, mana, rage, restartGameBtn, restartMenu, riddleOne, riddleTwo, sauron, sauronBtn, startGameBtn, textBoxGameplay, textBoxMenuHero, warrior, warriorAttackModeBtn, warriorCombatModeMenu, warriorDamage, warriorDefenseModeBtn, warriorHealth, warriorName } from "./variables.js";

// get random number (for damage)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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
        bossOfTheGame[0].health -= (warriorDamage + (warriorDamage / 100 * 20))
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            mageCombatModeMenu.style.display = 'block'
            textBoxGameplay.innerHTML = `The warrior dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
            rage += 1
        }
    } else if (rage == 4){
        bossOfTheGame[0].health -= ((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            mageCombatModeMenu.style.display = 'block'
            textBoxGameplay.innerHTML = `The warrior dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
        }
}})

warriorDefenseModeBtn.addEventListener('click', () => {
    warrior.combatMode = 'defense'
    warriorCombatModeMenu.style.display = 'none'
    if (rage < 4) {
        bossOfTheGame[0].health -= warriorDamage
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            mageCombatModeMenu.style.display = 'block'
            textBoxGameplay.innerHTML = `${warrior.name} dealt ${warriorDamage} damage!`
            rage += 1
        }
    } else if (rage == 4){
        bossOfTheGame[0].health -= (warriorDamage + parseInt(warriorDamage/4))
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            mageCombatModeMenu.style.display = 'block'
            textBoxGameplay.innerHTML = `${warrior.name} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!` 
        }
}})

mageAttackModeBtn.addEventListener('click', () => {
    mage.combatMode = 'attack'
    mageCombatModeMenu.style.display = 'none'
    if (mana > 1 && mana <= 7){
        bossOfTheGame[0].health -= parseInt(mageDamage + (mageDamage / 4))
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            archerCombatModeMenu.style.display = 'block'
            textBoxGameplay.innerHTML = `${mage.name} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
            mana -= 2
        }
    } else {
        mana = 7
        textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        archerCombatModeMenu.style.display = 'block'
    }
})

mageDefenseModeBtn.addEventListener('click', () => {
    mage.combatMode = 'defense'
    mageCombatModeMenu.style.display = 'none'
    if (mana > 1 && mana <= 7){
        bossOfTheGame[0].health -= mageDamage
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            archerCombatModeMenu.style.display = 'block'
            textBoxGameplay.innerHTML = `${mage.name} dealt ${mageDamage} damage!`
            mana -= 2
        }
    } else {
        mana = 7
        textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        archerCombatModeMenu.style.display = 'block'
    }
})

archerAttackModeBtn.addEventListener('click', () => {
    archer.combatMode = 'attack'
    archerCombatModeMenu.style.display = 'none'
    if (arrows > 0){
        bossOfTheGame[0].health -= parseInt(archerDamage + (archerDamage / 4))
        if (bossOfTheGame[0].health <= (bossOfTheGame[0].health / 100 * 20)){
            textBoxGameplay.innerHTML = "You're almost there! A good response will guide you to victory, a bad one means you lost."
            let riddle = getRandomInt(1,3)
            switch (riddle){
                case 1:
                    riddleOne.style.display = 'block'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'none'
                case 2:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'block'
                    riddleThree.style.display = 'none'
                case 3:
                    riddleOne.style.display = 'none'
                    riddleTwo.style.display = 'none'
                    riddleThree.style.display = 'block'
            }
        } else {
            nextBtn.style.display = 'block'
            textBoxGameplay.innerHTML = `${archer.name} dealt ${parseInt(archerDamage + (archerDamage / 4))} damage!`
            mana -= 2
        }
    } else {
        mana = 7
        textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        archerCombatModeMenu.style.display = 'block'
    }
})

archerDefenseModeBtn.addEventListener('click', () => {
    archer.combatMode = 'defense'
    archerCombatModeMenu.style.display = 'none'
    arrows -= 1
})

