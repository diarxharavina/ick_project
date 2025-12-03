class SliderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const type = this.getAttribute('type');
        const title = this.getAttribute('title');
        const text = this.getAttribute('text');

        this.innerHTML = `
       <section class="slider-wrapper">
            <div class="slider-section container">
                <div class="slider-header">
                    <my-icon iconName="sparks" class="sparks"></my-icon>
                    <div class="slider-header-text">
                        <h1>${title}</h1>
                        <p>
                            ${text}
                        </p>
                    </div>
                    <div class="slider-view-all-btn">
                        <custom-button
                            type="ghost-btn"
                            name="View All ${type}"
                        ></custom-button>
                    </div>
                </div>
                <${type.toLowerCase()}-slider class="carousel ${type.toLowerCase()}-carousel"></${type.toLowerCase()}-slider>
                <div class="slider-number">
                    <p>
                        <strong>01</strong>
                        of 10
                    </p>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('custom-slider', SliderComponent);
