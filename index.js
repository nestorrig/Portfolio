const switchElements = document.getElementsByClassName("switch-theme");
const themeBoxes = document.querySelectorAll('theme-switcher')
const themeButtons = document.getElementsByClassName('switchTheme__icon')



for (const box of themeBoxes) {
    box.addEventListener("click", switchTheme)
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