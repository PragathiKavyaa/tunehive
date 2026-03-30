document.addEventListener("DOMContentLoaded", function () {

    const audio = document.getElementById("audioPlayer");
    const playBtn = document.getElementById("playBtn");

    let isPlaying = false;

    playBtn.addEventListener("click", function () {

        if (!isPlaying) {
            audio.play();
            playBtn.classList.remove("fa-play");
            playBtn.classList.add("fa-pause");
            isPlaying = true;
        } else {
            audio.pause();
            playBtn.classList.remove("fa-pause");
            playBtn.classList.add("fa-play");
            isPlaying = false;
        }

    });

});