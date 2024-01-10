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

document.getElementById("startGameBtn").addEventListener("click", function() {
    playMainMenuMusic();
});

function sound() {
    var snd = new Audio('./public/assets/music/button-sound.mp3');
    snd.play();
}