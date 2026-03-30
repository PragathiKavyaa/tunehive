const toggleBtn = document.getElementById("languageToggle");
const menu = document.getElementById("languageMenu");
const updateBtn = document.getElementById("updateBtn");

// Only run if elements exist
if (toggleBtn && menu && updateBtn) {

    toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        menu.style.display =
            menu.style.display === "block" ? "none" : "block";
    });

    updateBtn.addEventListener("click", function () {
        menu.style.display = "none";
    });

    document.addEventListener("click", function (e) {
        if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = "none";
        }
    });

}