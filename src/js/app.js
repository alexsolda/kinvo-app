// MENU ACCORDEON
const menuItems = document.querySelectorAll('.menu__content');
const menuAccordeon = document.querySelectorAll('.menu__accordeon');
const menuLink = document.querySelectorAll('.menu__content-link');
const menuIcon = document.querySelectorAll('.icon__accordeon');

function activeAccordeon(indice) {

    if (menuAccordeon[indice].classList.contains('active')) {
        menuAccordeon[indice].classList.remove('active');
        menuLink[indice].classList.remove('active');
        menuIcon[indice].classList.remove('active');
        return
    }

    menuIcon.forEach(icon => {
        icon.classList.remove('active');
    })

    menuLink.forEach(menu => {
        menu.classList.remove('active');
    })

    menuAccordeon.forEach(menu => {
        menu.classList.remove('active');
    })
    menuAccordeon[indice].classList.add('active');  
    menuLink[indice].classList.add('active');
    menuIcon[indice].classList.add('active');
}

menuItems.forEach((menu, i) => {
    menu.addEventListener('click', () => activeAccordeon(i))
})

