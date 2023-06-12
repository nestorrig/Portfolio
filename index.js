const interactiveElements = document.querySelectorAll(".interactive");
const switchElements = document.querySelectorAll(".switch-theme");
console.log(switchElements);

const iconMenu = document.getElementById('Menu-icon')
const mobileMenu = document.getElementById('Mobile-menu')
const mobileToggleSwitch = document.getElementById('toggle-mobile')
const desktopToggleSwitch = document.getElementById('toggle-desktop')

iconMenu.addEventListener("click", ()=> {blockOrNone(mobileMenu)});
mobileToggleSwitch.addEventListener("click", ()=> {switchThemeMobile()});
desktopToggleSwitch.addEventListener("click", ()=> {switchThemeDesktop()});

function blockOrNone(element) {//https://platzi.com/comentario/3856000/
    if (element.classList.contains("inactive") === true) {
        displayNoneAll()
        element.classList.remove("inactive")
    } else {
        //displayNoneAll()
        element.classList.add("inactive")
    }
}
function displayNoneAll() {
    interactiveElements.forEach(function(interactiveElement){
        if (interactiveElement.classList.contains("inactive") === false) {
            interactiveElement.classList.add("inactive");
        }
    })
}
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