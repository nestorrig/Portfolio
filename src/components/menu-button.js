export class MenuButton extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <div class="menuButtons z__3 switch-theme" id="MenuButtons">
            <button class="menuButtons__item" id="OpenMenu">
                <svg class="menuButtons__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                    <path d="M16.4 9H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1c0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1c0 .553.048 1 .6 1z"></path>
                </svg>
            </button>
            <button class="menuButtons__item inactive" id="CloseMenu">
                <svg class="menuButtons__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                    <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"></path>
                </svg>
            </button>
        </div>
        `;
        return template;
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    //Metodos
    switchButtons(openMenu, closeMenu) {
        openMenu.classList.toggle("inactive");
        closeMenu.classList.toggle("inactive");
    }
    showOrHideMenu(openMenu, closeMenu, mobileMenu, main) {
        const test = closeMenu.classList.contains("inactive");
        if (test) {
            mobileMenu.style.animation = 'showMenu .3s linear both';
            main.classList.add("brightness");
        } else {
            mobileMenu.style.animation = 'hideMenu .3s linear both';
            main.classList.remove("brightness");
        }
        this.switchButtons(openMenu, closeMenu);
        main.addEventListener("click", ()=> {
            mobileMenu.style.animation = 'hideMenu .3s linear both';
            main.classList.remove("brightness");
            openMenu.classList.remove("inactive");
            closeMenu.classList.add("inactive");
        });
    }
    // Se conecta el componente
    connectedCallback() {
        this.render();

        const openMenu = this.querySelector('#OpenMenu');
        const closeMenu = this.querySelector('#CloseMenu');
        const mobileMenu = document.getElementById('MobileMenu');
        const main = document.querySelector('main');
        const navItems = document.getElementsByClassName('navBar__item');

        for (const item of navItems) {
            item.addEventListener("click", () => this.showOrHideMenu(openMenu, closeMenu, mobileMenu, main));
        }
        openMenu.addEventListener("click", () => this.showOrHideMenu(openMenu, closeMenu, mobileMenu, main));
        closeMenu.addEventListener("click", () => this.showOrHideMenu(openMenu, closeMenu, mobileMenu, main));
    }
}
customElements.define("menu-button", MenuButton);