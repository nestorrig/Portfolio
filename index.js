const interactiveElements = document.querySelectorAll(".interactive");
const switchElements = document.querySelectorAll(".switch-theme");
const main = document.querySelector('main')
console.log(switchElements);

const menuButtons = document.getElementById('MenuButtons')
const openMenu = document.getElementById('OpenMenu')
const closeMenu = document.getElementById('CloseMenu')
const mobileMenu = document.getElementById('MobileMenu')
// const mobileToggleSwitch = document.getElementById('toggle-mobile')
// const desktopToggleSwitch = document.getElementById('toggle-desktop')

console.log({
    openMenu, closeMenu, mobileMenu
});

menuButtons.addEventListener("click", ()=> {blockOrNone(mobileMenu)});
menuButtons.addEventListener("click", ()=> switchButtons(openMenu, closeMenu));

function switchButtons(btn1,  btn2) {
    if (btn1.classList.contains("inactive") === true) {
        btn1.classList.remove("inactive")
        btn2.classList.add("inactive")
        main.style.filter = 'none'
    } else {
        btn1.classList.add("inactive")
        btn2.classList.remove("inactive")
        main.style.filter = 'brightness(0.5)'
    }
}


function blockOrNone(element) {
    if (element.classList.contains("inactive") === true) {
        element.classList.remove("inactive")
    } else {
        element.classList.add("inactive")
    }
}
// function displayNoneAll() {
//     interactiveElements.forEach(function(interactiveElement){
//         if (interactiveElement.classList.contains("inactive") === false) {
//             interactiveElement.classList.add("inactive");
//         }
//     })
// }
function switchThemeDesktop() {
    if (desktopToggleSwitch.checked) {
        switchElements.forEach(element => {
            element.classList.add("black-theme")
        });
    } else {
        switchElements.forEach(element => {
            element.classList.toggle("black-theme")
        });
    }
}
function switchThemeMobile() {
    if (mobileToggleSwitch.checked) {
        switchElements.forEach(element => {
            element.classList.add("black-theme")
        });
    } else {
        switchElements.forEach(element => {
            element.classList.toggle("black-theme")
        });
    }
}