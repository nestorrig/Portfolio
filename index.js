const interactiveElements = document.querySelectorAll(".interactive");
console.log(interactiveElements);

const iconMenu = document.getElementById('Menu-icon')
const mobileMenu = document.getElementById('Mobile-menu')

iconMenu.addEventListener("click", ()=> {blockOrNone(mobileMenu)});

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