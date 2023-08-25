const switchElements = document.querySelectorAll(".switch-theme");
const main = document.querySelector('main')
const navItems = document.getElementsByClassName('header__nav__item--mobile')

const menuButtons = document.getElementById('MenuButtons')
const openMenu = document.getElementById('OpenMenu')
const closeMenu = document.getElementById('CloseMenu')
const mobileMenu = document.getElementById('MobileMenu')

for (const item of navItems) {
    item.addEventListener("click",showOrHideMenu)
    switchButtons(openMenu, closeMenu)
}
menuButtons.addEventListener("click",showOrHideMenu);

function switchButtons() {
    openMenu.classList.toggle("inactive")
    closeMenu.classList.toggle("inactive")
}
function showOrHideMenu() {
    const test = mobileMenu.classList.contains("hide-menu")
    if (test) {
        mobileMenu.classList.remove("hide-menu")
        main.classList.add("brightness")
    } else {
        mobileMenu.classList.add("hide-menu")
        main.classList.remove("brightness")
    }
    switchButtons()
    main.addEventListener("click", ()=> {
        mobileMenu.classList.add("hide-menu")
        main.classList.remove("brightness")
        openMenu.classList.remove("inactive")
        closeMenu.classList.add("inactive")
    })
}