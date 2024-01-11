import { gameOverMenu, riddle, riddleOneFalse1Btn, riddleOneFalse2Btn, riddleOneFalse3Btn, riddleOneTrueBtn, riddleThreeFalse1Btn, riddleThreeFalse2Btn, riddleThreeFalse3Btn, riddleThreeTrueBtn, riddleTwoFalse1Btn, riddleTwoFalse2Btn, riddleTwoFalse3Btn, riddleTwoTrueBtn, youWinMenu } from "./variables.js"

// handling all riddles possibilities
export function setupRiddleEventListeners() {
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
}