class Component extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const type = this.getAttribute('type');

        this.innerHTML = `
        <link rel="stylesheet" href="../../components/slider/index.css"/>
        <section>
            <div class="slider-section container">
                <my-icon iconName="sparks"></my-icon>
                <div class="slider-header">
                    <h1>Featured Properties</h1>
                    <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                </div>
                <div class="slider-view-all-btn">
                    <custom-button type="ghost-btn" name="View All ${type}"></custom-button>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('custom-slider', Component);
