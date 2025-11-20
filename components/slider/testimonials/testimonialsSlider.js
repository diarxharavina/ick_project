class TestimonialsSliderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const testimonials = [
            {
                stars: 5,
                title: 'Exceptional Service!',
                description:
                    "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
                avatar: '../../../assets/images/testimonialsAvatar1.png',
                user: 'Wade Warren',
                location: 'USA, California',
            },
            {
                stars: 1,
                title: 'Efficient and Reliable',
                description:
                    "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
                avatar: '../../../assets/images/testimonialsAvatar2.png',
                user: 'Emelie Thomson',
                location: 'USA, Florida',
            },
            {
                stars: 4,
                title: 'Trusted Advisors',
                description:
                    'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
                avatar: '../../../assets/images/testimonialsAvatar3.png',
                user: 'John Mans',
                location: 'USA, Nevada',
            },
            {
                stars: 5,
                title: 'Exceptional Service!',
                description:
                    "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
                avatar: '../../../assets/images/testimonialsAvatar1.png',
                user: 'Wade Warren',
                location: 'USA, California',
            },
            {
                stars: 2,
                title: 'Efficient and Reliable',
                description:
                    "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
                avatar: '../../../assets/images/testimonialsAvatar2.png',
                user: 'Emelie Thomson',
                location: 'USA, Florida',
            },
            {
                stars: 4,
                title: 'Trusted Advisors',
                description:
                    'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
                avatar: '../../../assets/images/testimonialsAvatar3.png',
                user: 'John Mans',
                location: 'USA, Nevada',
            }
        ];

        let carouselItems = '';
        
        for (let i = 0; i < testimonials.length; i++) {
            // let starsIcon = ''; 

            // for (let j = 0; j < testimonials[i].stars; j++) {
            //     starsIcon += '<my-icon iconName="star"></my-icon>';
            // }

            const starsIcon = '<my-icon iconName="star"></my-icon>'.repeat(testimonials[i].stars);


            carouselItems += `<div class="carousel-item-testimonials">
                                <div class="stars">
                                    ${starsIcon}
                                </div>
                                <div class="testimonials-text">
                                    <h2>${testimonials[i].title}</h2>
                                    <p>${testimonials[i].description}</p>
                                </div>
                                <div class="testimonials-user">
                                    <img src="${testimonials[i].avatar}" alt="">
                                    <div class="testimonials-user-info">
                                        <h3>${testimonials[i].user}</h3>
                                        <p>${testimonials[i].location}</p>
                                    </div>
                                </div>
                            </div>`;
        }
        this.innerHTML = carouselItems;
    }
}

customElements.define('testimonials-slider', TestimonialsSliderComponent);
