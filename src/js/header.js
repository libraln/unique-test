    const btnMenu = document.querySelector(".headerbrg");
    const menu = document.querySelector(".menu");
    const toggleMenu = function () {
        menu.classList.toggle("show");
        document.getElementById("overlay").style.display = "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    };
    btnMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleMenu();
    });
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == btnMenu;
        const menu_is_active = menu.classList.contains("show");

        if (!its_menu && !its_btnMenu && menu_is_active) {
            toggleMenu();
            document.getElementById("overlay").style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "scroll";
        }
    });
