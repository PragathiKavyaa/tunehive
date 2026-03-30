//search

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const songs = document.querySelectorAll(".song");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("keyup", function () {

        let value = searchInput.value.toLowerCase();

        // SEARCH SONGS
        songs.forEach(song => {
            let title = song.querySelector(".song-title").textContent.toLowerCase();

            if (title.includes(value)) {
                song.style.display = "flex";
            } else {
                song.style.display = "none";
            }
        });

        // SEARCH ALBUM CARDS
        cards.forEach(card => {
            let title = card.querySelector(".album-title").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });

});