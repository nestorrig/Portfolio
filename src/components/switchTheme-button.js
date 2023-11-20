export class SwitchThemeButton extends HTMLElement {
    constructor() {
        super();
    }
    static get observedAttributes() {
        return ['device'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[attr] = newVal
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <button class="switchTheme switchTheme--${this.device}">
                <svg class="switchTheme__icon inactive" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 8 8">
                    <path d="M4 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5S4.28 0 4 0zM1.5 1c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zM4 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zM.5 3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zM1.5 6c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zM4 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5S4.28 7 4 7z"></path>
                </svg>
                <svg class="switchTheme__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                    <path d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"></path>
                </svg>
            </button>
        `;
        return template;
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("theme-switcher", SwitchThemeButton);