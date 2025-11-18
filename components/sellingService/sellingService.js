class SellingServiceComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/sellingService/index.css"/>
        <script src="../../components/button/button.js"></script>
        <section class="selling-service">

            <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="analytics"></my-icon>
                    <h1>Valuation Mastery</h1>
                </div>
                <p class="selling-box-text">
                    Discover the true worth of your property with our expert valuation services.
            </div>

            <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="maintenance"></my-icon>
                    <h1>Strategic Marketing</h1>
                </div>
                <p class="selling-box-text">
                    Selling a property requires more than just a listing; it demands a strategic marketing approach.
                </p>
            </div>

            <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="financial"></my-icon>
                    <h1>Negotiation Wizardry</h1>
                </div>
                <p class="selling-box-text">
                    Negotiating the best deal is an art, and our negotiation experts are masters of it.
                </p>
            </div>
             <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="legal"></my-icon>
                    <h1>Closing Success</h1>
                </div>
                <p class="selling-box-text">
                   A successful sale is not complete until the closing. We guide you through the intricate closing process.
                </p>
            </div>
            
            <div class="selling-feature selling-feature--wide">
             <div class="selling-feature-wide-text">
            <h1>Unlock the Value of Your Property Today</h1>
            <p>
                Ready to unlock the true value of your property? Explore our Property Selling
                Service categories and let us help you achieve the best deal possible for your
                valuable asset.
            </p>
        </div>

         <custom-button type="dark-btn" name="Learn More"></custom-button>
        </section>
        `;
    }
}

customElements.define('selling-service', SellingServiceComponent);
