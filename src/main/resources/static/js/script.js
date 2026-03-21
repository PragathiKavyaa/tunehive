document.getElementById("darkToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

function playSong() {
    alert("Playing music...");
}

function pauseSong() {
    alert("Music paused");
}


const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach(btn => {

    btn.addEventListener("click", function () {

        const content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
        }

    });

});

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

function handleLogin() {
  const code = document.getElementById("code").value;

  // Simple validation (optional)
  if (code.length !== 6) {
    alert("Please enter a valid 6-digit code");
    return;
  }

  // Redirect to index page
  window.location.href = "index.html";
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

