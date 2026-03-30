document.getElementById("darkToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

function playSong() {
    alert("Playing music...");
}

function pauseSong() {
    alert("Music paused");
}

// Simple validation

document.querySelector(".subscribe").addEventListener("click", () => {
  const card = document.getElementById("cardNumber").value;
  const expiry = document.getElementById("expiry").value;
  const cvv = document.getElementById("cvv").value;

  if (card.length < 12) {
    alert("Enter valid card number");
    return;
  }

  if (!expiry.includes("/")) {
    alert("Enter valid expiry (MM/YY)");
    return;
  }

  if (cvv.length < 3) {
    alert("Enter valid CVV");
    return;
  }

  // ✅ Redirect to success page
    window.location.href = "success.html";
});

function handleContinue() {
  const phone = document.getElementById("phone").value;
  const agree = document.getElementById("agree").checked;

  // Simple validation
  if (phone === "" || phone.length < 10) {
    alert("Please enter a valid mobile number");
    return;
  }

  if (!agree) {
    alert("You must agree to the terms and conditions");
    return;
  }

  // Redirect to login page
  window.location.href = "login.html";
}

const progress = document.querySelector(".progress");
const volumeSlider = document.querySelector(".volume input");
const volumeText = document.querySelector(".volume span");

// Fake progress animation
let width = 30;
setInterval(() => {
  if (width < 100) {
    width += 1;
    progress.style.width = width + "%";
  }
}, 1000);

// Volume update
volumeSlider.addEventListener("input", () => {
  volumeText.textContent = volumeSlider.value + "%";
});

//music language drop down menu

document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("languageToggle");
    const menu = document.getElementById("languageMenu");
    const updateBtn = document.getElementById("updateBtn");

    // Safety check (important)
    if (!toggleBtn || !menu || !updateBtn) return;

    // Toggle menu
    toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    // Close on Update
    updateBtn.addEventListener("click", function () {
        menu.style.display = "none";
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
        if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = "none";
        }
    });

});
