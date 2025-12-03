class PropertiesSliderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const properties = [
            {
                image: '../../assets/images/sliderImage1.png',
                title: 'Seaside Serenity Villa',
                description:
                    'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                info: {
                    bedroom: 4,
                    bathroom: 3,
                    villa: true,
                },
                price: '$550,000',
            },
            {
                image: '../../assets/images/sliderImage2.png',
                title: 'Metropolitan Haven',
                description:
                    'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                info: {
                    bedroom: 2,
                    bathroom: 2,
                    villa: false,
                },
                price: '$240,000',
            },
            {
                image: '../../assets/images/sliderImage3.png',
                title: 'Rustic Retreat Cottage',
                description:
                    'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                info: {
                    bedroom: 3,
                    bathroom: 3,
                    villa: true,
                },
                price: '$340,000',
            },
            {
                image: '../../assets/images/sliderImage1.png',
                title: 'Seaside Serenity Villa',
                description:
                    'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                info: {
                    bedroom: 4,
                    bathroom: 3,
                    villa: true,
                },
                price: '$550,000',
            },
            {
                image: '../../assets/images/sliderImage2.png',
                title: 'Metropolitan Haven',
                description:
                    'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                info: {
                    bedroom: 2,
                    bathroom: 2,
                    villa: false,
                },
                price: '$240,000',
            },
            {
                image: '../../assets/images/sliderImage3.png',
                title: 'Rustic Retreat Cottage',
                description:
                    'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                info: {
                    bedroom: 3,
                    bathroom: 3,
                    villa: true,
                },
                price: '$340,000',
            },
            {
                image: '../../assets/images/sliderImage1.png',
                title: 'Seaside Serenity Villa',
                description:
                    'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                info: {
                    bedroom: 4,
                    bathroom: 3,
                    villa: true,
                },
                price: '$550,000',
            },
            {
                image: '../../assets/images/sliderImage2.png',
                title: 'Metropolitan Haven',
                description:
                    'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                info: {
                    bedroom: 2,
                    bathroom: 2,
                    villa: false,
                },
                price: '$240,000',
            },
            {
                image: '../../assets/images/sliderImage3.png',
                title: 'Rustic Retreat Cottage',
                description:
                    'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                info: {
                    bedroom: 3,
                    bathroom: 3,
                    villa: true,
                },
                price: '$340,000',
            },
        ];

        let carouselItems = '';
        for (let i = 0; i < properties.length; i++) {
            carouselItems += `<div class="carousel-item-properties">
                        <img src="${properties[i].image}" alt="">
                        <div class="carousel-item-properties-text">
                            <h2>${properties[i].title}</h2>
                            <p>
                                ${properties[i].description} <a>Read More</a>
                            </p>
                        </div>
                        <div class="carousel-item-properties-info">
                            <div class="carousel-item-properties-info-box">
                                <my-icon iconName="bed"></my-icon>
                                <p>${properties[i].info.bedroom}-bedroom</p>
                            </div>
                            <div class="carousel-item-properties-info-box">
                                <my-icon iconName="bath"></my-icon>
                                <p>${properties[i].info.bedroom}-bathroom</p>
                            </div>
                            ${
                                properties[i].info.villa
                                    ? `<div class="carousel-item-properties-info-box">
                                <my-icon iconName="villa"></my-icon> <p>Villa</p>
                            </div>`
                                    : ''
                            }
                            
                        </div>
                        <div class="carousel-item-properties-price">
                            <div>
                                <p>Price</p>
                                <h2>${properties[i].price}</h2>
                            </div>
                            <custom-button
                                type="purple-btn"
                                name="View Property Details"
                            ></custom-button>
                        </div>
                    </div>`;
        }
        this.innerHTML = carouselItems;
        const detailButtons = this.querySelectorAll('custom-button');
        detailButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                window.location.href = '../../pages/propertyDetails/index.html';
            });
        });
    }
}

customElements.define('properties-slider', PropertiesSliderComponent);
