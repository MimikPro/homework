(function () {
    const header =  document.querySelector(".header");
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add("header_fone");
        } else {
            header.classList.remove("header_fone");
        }

    };
}());

//active menu

(function () {
    const menuItem =  document.querySelector(".adaptive-menu");
    const menu = document.querySelector(".header_menu");
    const  menuclose = document.querySelector(".header-menu-close");
    menuItem.addEventListener("click", () => {
        menu.classList.add("header-menu-active");
    });
    menuclose.addEventListener("click", () => {
        menu.classList.remove("header-menu-active");
    });
}());