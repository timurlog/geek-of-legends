import { archer, archerAttackModeBtn, archerCombatModeMenu, archerDamage, archerDefenseModeBtn, archerHealth, archerName, arrows, bossOfTheGame, chronos, chronosBtn, confirmStatsBtn, gameplay, lilith, lilithBtn, mage, mageAttackModeBtn, mageCombatModeMenu, mageDamage, mageDefenseModeBtn, mageHealth, mageName, mainMenu, mainMenuBoss, mainMenuHero, mana, rage, restartGameBtn, restartMenu, sauron, sauronBtn, startGameBtn, textBoxMenuHero, warrior, warriorAttackModeBtn, warriorCombatModeMenu, warriorDamage, warriorDefenseModeBtn, warriorHealth, warriorName } from "./variables.js";

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
    mageCombatModeMenu.style.display = 'block'
    if (rage < 4) {
        bossOfTheGame[0].health -= (warriorDamage + (warriorDamage / 100 * 20))
        
        rage += 1
    } else if (rage == 4){
        bossOfTheGame[0].health -= ((warriorDamage + (warriorDamage / 100 * 20)) + (warriorDamage + (warriorDamage / 100 * 20))/4)
        rage = 0
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

