var mainMenuAudio = new Audio('./public/assets/music/main-menu-sound.mp3');

function playMainMenuMusic() {
    mainMenuAudio.loop = true;
    mainMenuAudio.play();
}

function stopMainMenuMusic() {
    mainMenuAudio.pause();
    mainMenuAudio.currentTime = 0;
}

document.getElementById("startGameBtn").addEventListener("click", function() {
    playMainMenuMusic();
});

function sound() {
    var snd = new Audio('./public/assets/music/button-sound.mp3');
    snd.play();
}