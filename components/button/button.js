class ButtonComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const type = this.getAttribute('type');
        const name = this.getAttribute('name');
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/button/index.css"/>
            <button class="btn ${type}">
                ${name}
            </button>
        `
    }
}
{

}
customElements.define('custom-button', ButtonComponent);
