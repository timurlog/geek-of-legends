import { archer, archerAttackModeBtn, archerCombatModeMenu, archerDamage, archerDefenseModeBtn, archerHealth, archerName, archerSprite, arrows, bossOfTheGame, chronos, chronosBtn, confirmStatsBtn, gameplay, gameplayGameOver, lilith, lilithBtn, mage, mageAttackModeBtn, mageCombatModeMenu, mageDamage, mageDefenseModeBtn, mageHealth, mageName, mageSprite, mainMenu, mainMenuBoss, mainMenuHero, mana, nextBtn, rage, restartGameBtn, restartMenu, riddleOne, riddleTwo, sauron, sauronBtn, startGameBtn, textBoxGameplay, textBoxMenuHero, warrior, warriorAttackModeBtn, warriorCombatModeMenu, warriorDamage, warriorDefenseModeBtn, warriorHealth, warriorName, warriorSprite, yourTurnBtn } from "./variables.js";

// get random number (for damage)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// handling menu through event listeners
startGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenuBoss.style.display = 'block';
    mainMenuHero.style.display = 'none';
    gameplay.style.display = 'none';
    restartMenu.style.display = 'none';
});

lilithBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
    bossOfTheGame.push(lilith)
    textBoxMenuHero.innerHTML = "give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

sauronBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
    bossOfTheGame.push(sauron)
    textBoxMenuHero.innerHTML = "give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

chronosBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none'
    mainMenuBoss.style.display = 'none'
    mainMenuHero.style.display = 'block'
    gameplay.style.display = 'none'
    restartMenu.style.display = 'none'
    bossOfTheGame.push(chronos)
    textBoxMenuHero.innerHTML = "give every hero a name. Heroes Should have 300 health points all together and 150 damage points all together."
})

confirmStatsBtn.addEventListener('click', () => {
    if (warriorName != "" && mageName != "" && archerName != "" && (warriorDamage + mageDamage + archerDamage) == 150 && (warriorHealth + mageHealth + archerHealth) == 300 && warriorHealth > 0 && mageHealth > 0 && archerHealth > 0 && warriorDamage > 0 && mageDamage > 0 && archerDamage > 0) {
        mainMenu.style.display = 'none'
        mainMenuBoss.style.display = 'none'
        mainMenuHero.style.display = 'none'
        gameplay.style.display = 'block'
        restartMenu.style.display = 'none'
        textBoxGameplay.innerHTML = `let's go guys! let's fight ${bossOfTheGame[0].name}`
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
            if (mageSprite.style.display = 'block'){
                mageCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `The warrior dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            } else if (archerSprite.style.display = 'block') {
                archerCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `The warrior dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `The warrior dealt ${(warriorDamage + (warriorDamage / 100 * 20))} damage!`
                rage += 1
            }
            
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
            if (mageSprite.style.display = 'block'){
                mageCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `The warrior dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            } else if (archerSprite.style.display = 'block') {
                archerCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `The warrior dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `The warrior dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)} healt points!` 
                rage = 0
            } 
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
            if (mageSprite.style.display = 'block'){
                mageCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `The warrior dealt ${warriorDamage} damage!`
                rage += 1
            } else if (archerSprite.style.display = 'block') {
                archerCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `The warrior dealt ${warriorDamage} damage!`
                rage += 1
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `The warrior dealt ${warriorDamage} damage!`
                rage += 1
            }
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
            if (mageSprite.style.display = 'block'){
                mageCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `${warrior.name} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } else if (archerSprite.style.display = 'block') {
                archerCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `${warrior.name} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${warrior.name} dealt a critical hit which brings ${bossOfTheGame[0].name} down by ${(warriorDamage + parseInt(warriorDamage + parseInt(warriorDamage / 100 * 20))/4)} healt points!`
                rage = 0
            } 
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
            if (archerSprite.style.display = 'block'){
                archerCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `${mage.name} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
                mana -= 2
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mage.name} dealt ${parseInt(mageDamage + (mageDamage / 4))} damage!`
                mana -= 2
            }
        }
    } else {
        if (archerSprite.style.display = 'block'){
            archerCombatModeMenu.style.display = 'block'
            mana = 7
            textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        } else {
            nextBtn.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        }
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
            if (archerSprite.style.display = 'block'){
                archerCombatModeMenu.style.display = 'block'
                textBoxGameplay.innerHTML = `${mage.name} dealt ${mageDamage} damage!`
                mana -= 2
            } else {
                nextBtn.style.display = 'flex'
                textBoxGameplay.innerHTML = `${mage.name} dealt ${mageDamage} damage!`
                mana -= 2
            }
        }
    } else {
        if (archerSprite.style.display = 'block'){
            archerCombatModeMenu.style.display = 'block'
            mana = 7
            textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        } else {
            nextBtn.style.display = 'flex'
            mana = 7
            textBoxGameplay.innerHTML = `${mage.name} doesn't have enough mana! He'll have to wait another round.`
        }
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
            nextBtn.style.display = 'flex'
            textBoxGameplay.innerHTML = `${archer.name} dealt ${parseInt(archerDamage + (archerDamage / 4))} damage!`
            arrows -= 1
        }
    } else {
        arrows = 6
        textBoxGameplay.innerHTML = `${archer.name} doesn't have enough arrows! He'll have to wait another round.`
        nextBtn.style.display = 'flex'
    }
})

archerDefenseModeBtn.addEventListener('click', () => {
    archer.combatMode = 'defense'
    archerCombatModeMenu.style.display = 'none'
    if (arrows > 0){
        bossOfTheGame[0].health -= archerDamage
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
            nextBtn.style.display = 'flex'
            textBoxGameplay.innerHTML = `${archer.name} dealt ${archerDamage} damage!`
            arrows -= 1
        }
    } else {
        arrows = 6
        textBoxGameplay.innerHTML = `${archer.name} doesn't have enough arrows! He'll have to wait another round.`
        nextBtn.style.display = 'flex'
    }
})

nextBtn.addEventListener('click', () => {
    nextBtn.style.display = 'none'
    let target = getRandomInt(1,3)
    switch (target){
        case 1:
            if (warrior.combatMode == 'attack'){
                warrior.health -= bossOfTheGame[0].damage
                if (warrior.health > 0){
                    textBoxGameplay.innerHTML = `${warrior.name} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${warrior.name} lost all his health points! We just lost a precious warrior!`
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            } else {
                warrior.health -= parseInt(bossOfTheGame[0].damage / 2)
                if (warrior.health > 0){
                    textBoxGameplay.innerHTML = `${warrior.name} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage / 2} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${warrior.name} lost all his health points! We just lost a precious warrior!`
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            }
        case 2:
            if (mage.combatMode == 'attack'){
                mage.health -= bossOfTheGame[0].damage
                if (mage.health > 0){
                    textBoxGameplay.innerHTML = `${mage.name} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${mage.name} lost all his health points! We just lost a precious mage!`
                    mageSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            } else {
                mage.health -= parseInt(bossOfTheGame[0].damage / 2)
                if (mage.health > 0){
                    textBoxGameplay.innerHTML = `${mage.name} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage / 2} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${mage.name} lost all his health points! We just lost a precious mage!`
                    mageSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            }
        case 3:
            if (archer.combatMode == 'attack'){
                archer.health -= bossOfTheGame[0].damage
                if (archer.health > 0){
                    textBoxGameplay.innerHTML = `${archer.name} just took a hit from ${bossOfTheGame[0].name}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${archer.name} lost all his health points! We just lost a precious archer!`
                    archerSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            } else {
                archer.health -= parseInt(bossOfTheGame[0].damage / 2)
                if (archer.health > 0){
                    textBoxGameplay.innerHTML = `${archer.name} just took a hit from ${bossOfTheGame[0].name / 2}! he lost ${bossOfTheGame[0].damage} health points`
                    yourTurnBtn.style.display = 'flex'
                } else {
                    textBoxGameplay.innerHTML = `Oh no, ${archer.name} lost all his health points! We just lost a precious archer!`
                    warriorSprite.style.display = 'none'
                    if ((warriorSprite.style.display == 'none') && (mageSprite.style.display == 'none') && (archerSprite.style.display == 'none')) {
                        gameplayGameOver.style.display = 'block'
                    } else {
                        yourTurnBtn.style.display = 'flex'
                    }
                }
            }
    }
})

yourTurnBtn.addEventListener('click', () => {
    yourTurnBtn.style.display = 'none'
    textBoxGameplay.innerHTML = 'Your turn!'
    if (warriorSprite.style.display == 'block') {
        warriorCombatModeMenu.style.display = 'block'
    } else if (mageSprite.style.display == 'block') {
        mageCombatModeMenu.style.display = 'block'
    } else if (archerSprite.style.display == 'block') {
        archerCombatModeMenu.style.display == 'block'
    }
})

