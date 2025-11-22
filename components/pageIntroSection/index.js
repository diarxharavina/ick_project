class PropertyHeroSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute("title") || "Default Title";
        const description = this.getAttribute("description") || "Default description text.";

        this.innerHTML = `
            <link rel="stylesheet" href="../../components/pageIntroSection/index.css">

            <div class="findYourDreamPropertyContainer">
                <h1 class="findYourDreamPropertyContainerH1">${title}</h1>
                <p class="findYourDreamPropertyContainerP">${description}</p>
            </div>
        `;
    }
}

customElements.define("property-hero-section", PropertyHeroSection);
