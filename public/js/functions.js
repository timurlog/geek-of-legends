import { archerAttackAudio, archerReloadAudio, bossAttackAudio, gameplayAudio, mageAttackAudio, mageReloadAudio, mainMenuAudio, warriorAttackAudio, warriorBigAttackAudio } from "./variables.js";


// get random number (for damage)
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Boss damage VFX function
export function bossDamageVFX(className, addDelay, removeDelay) {
    let images = document.querySelectorAll('.bossSprite');

    setTimeout(() => {
        images.forEach(image => {
            image.classList.add(className);
        });

        setTimeout(() => {
            images.forEach(image => {
                image.classList.remove(className);
            });
        }, removeDelay);
    }, addDelay);
}

// Warrior damage VFX function
export function warriorDamageVFX(className, addDelay, removeDelay) {
    let imagesW = document.querySelectorAll('.warriorSprite');
    console.log("VFX1");
  
    setTimeout(() => {
        imagesW.forEach(image => {
            image.classList.add(className);
        });
  
        setTimeout(() => {
            imagesW.forEach(image => {
                image.classList.remove(className);
            });
        }, removeDelay);
    }, addDelay);
}

// Mage damage VFX function
export function mageDamageVFX(className, addDelay, removeDelay) {
    let imagesM = document.querySelectorAll('.mageSprite');
    console.log("VFX2");

    setTimeout(() => {
        imagesM.forEach(image => {
            image.classList.add(className);
        });
  
        setTimeout(() => {
            imagesM.forEach(image => {
                image.classList.remove(className);
            });
        }, removeDelay);
    }, addDelay);
}

// Archer damage VFX function
export function archerDamageVFX(className, addDelay, removeDelay) {
    let imagesA = document.querySelectorAll('.archerSprite');
    console.log("VFX3");
  
    setTimeout(() => {
        imagesA.forEach(image => {
            image.classList.add(className);
        });
  
        setTimeout(() => {
            imagesA.forEach(image => {
                image.classList.remove(className);
            });
        }, removeDelay);
    }, addDelay);
}

// Different menu and game music functions
export function playMainMenuMusic() {
    mainMenuAudio.loop = true;
    mainMenuAudio.play();
}

export function stopMainMenuMusic() {
    mainMenuAudio.pause();
    mainMenuAudio.currentTime = 0;
}

export function playGameplayMusic() {
    gameplayAudio.loop = true;
    gameplayAudio.play();
}

export function stopGameplayMusic() {
    gameplayAudio.pause();
    gameplayAudio.currentTime = 0;
}

export function playArcherAttackEffect() {
    archerAttackAudio.loop = false;
    archerAttackAudio.play();
}

export function playArcherReloadEffect() {
    archerReloadAudio.loop = false;
    archerReloadAudio.play();
}

export function playMageAttackEffect() {
    mageAttackAudio.loop = false;
    mageAttackAudio.play();
}

export function playMageReloadEffect() {
    mageReloadAudio.loop = false;
    mageReloadAudio.play();
}

export function playWarriorAttackEffect() {
    warriorAttackAudio.loop = false;
    warriorAttackAudio.play();
}

export function playWarriorBigAttackEffect() {
    warriorBigAttackAudio.loop = false;
    warriorBigAttackAudio.play();
}

export function playBossAttackEffect() {
    bossAttackAudio.loop = false;
    bossAttackAudio.play();
}