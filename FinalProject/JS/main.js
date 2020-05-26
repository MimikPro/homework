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



// modalwindow
let modal = document.getElementById("ModalWindow");
let entermodal = document.getElementById("Login-modal");
let closemodal = document.querySelector(".close");

entermodal.onclick = function () {
    ModalWindow.style.display="block";
};

closemodal.onclick = function () {
    ModalWindow.style.display="none";
};

window.onclick = function (e) {
    if(e.target == modal) {
        ModalWindow.style.display="none";
    };
};

// document.getElementById("Login-modal").addEventListener("click", () =>{
//     const element = document.getElementById("ModalWindow");
//     console.log(element);
//     element.classList.add("Modal_Body");
// })