class ServiceBannerComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/serviceBanner/index.css"/>
        <section class="service-banner">
            <div class="service-box">
                <my-icon iconName="arrow" class="service-box-arrow"></my-icon>
                <my-icon iconName="home" ></my-icon>
                <p>Find Your Dream Home</p>
            </div>
            <div class="service-box">
                <my-icon iconName="arrow" class="service-box-arrow"></my-icon>
                <my-icon iconName="money" ></my-icon>
                <p>Unlock Property Value</p>
            </div>
            <div class="service-box">
                <my-icon iconName="arrow" class="service-box-arrow"></my-icon>
                <my-icon iconName="apartment" ></my-icon>
                <p>Effortless Property Management</p>
            </div>
            <div class="service-box">
                <my-icon iconName="arrow" class="service-box-arrow"></my-icon>
                <my-icon iconName="sun" ></my-icon>
                <p>Smart Investments, Informed Decisions</p>
            </div>
        </section>
        `;
    }
}
customElements.define('service-banner', ServiceBannerComponent);
