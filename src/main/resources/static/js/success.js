document.addEventListener("DOMContentLoaded", function () {

    const goPlayerBtn = document.getElementById("goPlayer");
    const viewAccountBtn = document.getElementById("viewAccount");

    if (goPlayerBtn !== null) {
        goPlayerBtn.addEventListener("click", function () {
            window.location.href = "/player";
        });
    }

    if (viewAccountBtn !== null) {
        viewAccountBtn.addEventListener("click", function () {
            window.location.href = "/account";
        });
    }

});