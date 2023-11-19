export class ProjectItem extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ['img', 'project', 'repo', 'live'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[attr] = newVal
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <div class="projects__item">
                <figure class="projects__item__image bg__3">
                    <img src="${this.img}" alt="${this.project} project preview">
                    <figcaption>
                    <h2>
                        ${this.project}
                    </h2>
                    </figcaption>
                </figure>
                <nav class="projects__item__links">
                    <a href="${this.repo}" target="_blank" rel="noopener noreferrer">
                    View repository
                    </a>
                    <a href="${this.live}" target="_blank" rel="noopener noreferrer">
                    Visit
                    </a>
                </nav>
            </div>
        `;
            // ${this.getStyles()}
        return template;
    }
    getStyles() {
        return
    }
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
        // this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("project-item", ProjectItem);