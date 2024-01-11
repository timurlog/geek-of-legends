import { playMainMenuMusic, stopGameplayMusic } from "./functions.js";
import { chronos, lilith, sauron } from "./main.js";
import { chronosBtn, gameOverMenu, gameplay, goToMainMenuBtn1, goToMainMenuBtn2, lilithBtn, mainMenu, mainMenuBoss, mainMenuHero, riddle, sauronBtn, startGameBtn, textBoxMenuHero, youWinMenu } from "./variables.js";

// handling menu through event listeners
export let bossOfTheGame = []
export function setupMenuEventListeners() {
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
}