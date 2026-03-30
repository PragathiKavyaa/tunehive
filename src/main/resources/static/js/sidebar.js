document.querySelectorAll(".menu-title").forEach(menu => {

    menu.addEventListener("click", () => {

        let submenu = menu.nextElementSibling;

        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }

    });

});