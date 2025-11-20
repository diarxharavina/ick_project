class PropertyValueComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/propertyValue/index.css"/>
        <script src="../../components/button/button.js"></script>

        <section class="property-value">

            <div class="property-value-feature">
                <div class="propety-value-box-header">
                    <my-icon iconName="analytics"></my-icon>
                    <h1>Valuation Mastery</h1>
                </div>
                <p class="property-value-box-text">
                    Discover the true worth of your property with our expert valuation services.
            </div>

            <div class="property-value-feature">
                <div class="propety-value-box-header">
                    <my-icon iconName="maintenance"></my-icon>
                    <h1>Strategic Marketing</h1>
                </div>
                <p class="property-value-box-text">
                    Selling a property requires more than just a listing; it demands a strategic marketing approach.
                </p>
            </div>

            <div class="property-value-feature">
                <div class="propety-value-box-header">
                    <my-icon iconName="financial"></my-icon>
                    <h1>Negotiation Wizardry</h1>
                </div>
                <p class="property-value-box-text">
                    Negotiating the best deal is an art, and our negotiation experts are masters of it.
                </p>
            </div>

            <div class="property-value-feature">
                <div class="propety-value-box-header">
                    <my-icon iconName="legal"></my-icon>
                    <h1>Closing Success</h1>
                </div>
                <p class="property-value-box-text">
                   A successful sale is not complete until the closing. We guide you through the intricate closing process.
                </p>
            </div>
            
            <div class="property-value-feature property-value-feature--wide ">
                <div class="property-value-feature-wide-text">
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

customElements.define('property-value', PropertyValueComponent);
