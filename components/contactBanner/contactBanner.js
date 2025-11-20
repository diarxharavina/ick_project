class ContactBannerComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/contactBanner/index.css"/>
         <section class="contact-banner">
            <div class="contact-box">
                <my-icon iconName="arrow" class="contact-box-arrow"></my-icon>
                <my-icon iconName="email"></my-icon>
                <p>info@estatein.com</p>
            </div>
            <div class="contact-box">
                <my-icon iconName="arrow" class="contact-box-arrow"></my-icon>
                <my-icon iconName="number"></my-icon>
                <p>+1 (123) 456-7890</p>
            </div>
            <div class="contact-box">
                <my-icon iconName="arrow" class="contact-box-arrow"></my-icon>
                <my-icon iconName="location"></my-icon>
                <p>Main Headquarters</p>
            </div>
            <div class="contact-box">
                <my-icon iconName="arrow" class="contact-box-arrow"></my-icon>
                <my-icon iconName="social"></my-icon>
                <p>Instagram LinkedIn Facebook</p>
            </div>
        </section>
        `;
    }
}
customElements.define('contact-banner', ContactBannerComponent);
