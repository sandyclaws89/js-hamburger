let HamburgerMenu = document.querySelector('.hamburger-menu');
let button = document.querySelector('.header-right > a');

button.addEventListener('click', function() {
    HamburgerMenu.classList.remove('.header-right > a')
})


// console.log(HamburgerMenu);