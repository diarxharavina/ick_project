class TestimonialsSliderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const testimonials = [
            {
                stars: '5',
                title: 'Exceptional Service!',
                description: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
                avatar: '',
                user: 'Wade Warren',
                location: 'USA, California'
            },
            {
                stars: '2',
                title: 'Efficient and Reliable',
                description: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
                avatar: '',
                user: 'Emelie Thomson',
                location: 'USA, Florida'
            },
            {
                stars: '4',
                title: 'Trusted Advisors',
                description: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
                avatar: '',
                user: 'John Mans',
                location: 'USA, Nevada'
            },
        ];
        
        let starsIcon = '';
        let carouselItems = '';

        for (let s = 0; s < stars; s++) {
            starsIcon += '<my-icon iconName="star"></my-icon>';
        }

        for (let i = 0; i < testimonials.length; i++) {
            carouselItems += `<div class="carousel-item-testimonials">
                                <div class="stars">
                                    ${starsIcon}
                                </div>
                                <div class="testimonials-text">
                                    <h2>${title}</h2>
                                    <p>${description}</p>
                                </div>
                                <div class="testimonials-user">
                                    <img src="${avatar}" alt="">
                                    <div class="testimonials-user-info">
                                        <h3>${user}</h3>
                                        <p>${location}</p>
                                    </div>
                                </div>
                            </div>`;
        }
        this.innerHTML = carouselItems;
    }
}

customElements.define('testimonials-slider', TestimonialsSliderComponent);
