class FaqSliderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const faq = [
            {
                title: 'How do I search for properties on Estatein?',
                description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
            {
                title: 'What documents do I need to sell my property through Estatein?',
                description: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                title: 'How can I contact an Estatein agent?',
                description: 'Discover the different ways you can get in touch with our experienced agents.'
            }
        ];

        let carouselItems = '';
        for (let i = 0; i < faq.length; i++) {
            carouselItems += `<div class="carousel-item-faq">
                                    <h2>${faq[i].title}</h2>
                                    <p>
                                        ${faq[i].description}
                                    </p>
                                    <custom-button type="ghost-btn" name="Read More"></custom-button>
                                </div>`;
        }
        this.innerHTML = carouselItems;
    }
}

customElements.define('faq-slider', FaqSliderComponent);
