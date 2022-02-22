// HO ASSOCIATO LA VARIABILE HamburgerMenu ALLA CLASSE hamburger-menu 
let HamburgerMenu = document.querySelector('.hamburger-menu');

// HO ASSOCIATO A button LA CLASSE FA-BARS(L'SVG HAMBURGER)
let button = document.querySelector('.fa-bars');

// ASCOLTA SE AVVIENE UN CLICK SU BUTTON, IN QUEL CASO, AD OGNI CLICK TOGLI E RIMETTI LA CLASSE hamburger-menu SULLA MIA VARIABILE HamburgerMenu
button.addEventListener('click', function() {
    HamburgerMenu.classList.toggle('hamburger-menu')
    // PERCHE' QUI ORA NON C'E' BISOGNO DEL PUNTO PRIMA DELLA CLASSE E PRIMA SI?
})


// console.log(HamburgerMenu);