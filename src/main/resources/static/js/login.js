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