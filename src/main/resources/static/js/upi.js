document.addEventListener("DOMContentLoaded", function () {

    const upiBtn = document.querySelector(".upi-btn");
    const popup = document.getElementById("upiPopup");
    const upiOptions = document.querySelectorAll(".upi-option");
    const pinBox = document.getElementById("upiPinBox");
    const payNow = document.getElementById("payNowBtn");
    const closePopup = document.getElementById("closePopup");

    if (upiBtn) {
        upiBtn.addEventListener("click", function () {
            popup.style.display = "flex";
        });
    }

    upiOptions.forEach(btn => {
        btn.addEventListener("click", function () {
            pinBox.style.display = "block";
        });
    });

    if(payNow){
    payNow.addEventListener("click", function () {
        document.querySelector("form").submit();
    });
}

    if (closePopup) {
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

});