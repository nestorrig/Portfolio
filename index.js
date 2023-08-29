const main = document.querySelector('main')
const switchElements = document.getElementsByClassName("switch-theme");
const navItems = document.getElementsByClassName('header__nav__item--mobile')

const menuButtons = document.getElementById('MenuButtons')
const openMenu = document.getElementById('OpenMenu')
const closeMenu = document.getElementById('CloseMenu')
const mobileMenu = document.getElementById('MobileMenu')

const themeBoxes = document.getElementsByClassName('switchTheme__box')
const themeButtons = document.getElementsByClassName('switchTheme__icon')



for (const box of themeBoxes) {
    box.addEventListener("click", switchTheme)
}
for (const item of navItems) {
    item.addEventListener("click",showOrHideMenu)
    switchButtons()
}
menuButtons.addEventListener("click",showOrHideMenu);

function switchButtons() {
    openMenu.classList.toggle("inactive")
    closeMenu.classList.toggle("inactive")
}
function showOrHideMenu() {
    const test = closeMenu.classList.contains("inactive")
    if (test) {
        mobileMenu.style.animation = 'showMenu .3s linear both'
        main.classList.add("brightness")
    } else {
        mobileMenu.style.animation = 'hideMenu .3s linear both'
        main.classList.remove("brightness")
    }
    switchButtons()
    main.addEventListener("click", ()=> {
        mobileMenu.style.animation = 'hideMenu .3s linear both'
        main.classList.remove("brightness")
        openMenu.classList.remove("inactive")
        closeMenu.classList.add("inactive")
    })
}
function switchTheme() {
    for (const btn of themeButtons) {
        btn.classList.toggle("inactive")
        if (!btn.classList.contains("inactive")) {
            btn.style.animation = 'rotate-icon .3s linear both'
        }
    }
    for (const e of switchElements) {
        e.classList.toggle("lightTheme")
    }
}