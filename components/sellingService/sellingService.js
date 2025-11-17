class SellingServiceComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/sellingService/index.css"/>

        <section class="selling-service">
            <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="analytics"></my-icon>
                    <h1>Tenant Harmony</h1>
                </div>
                <p class="selling-box-text">
                    Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.
                </p>
            </div>

            <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="maintenance"></my-icon>
                    <h1>Maintenance Ease</h1>
                </div>
                <p class="selling-box-text">
                    Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.
                </p>
            </div>

            <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="financial"></my-icon>
                    <h1>Financial Peace of Mind</h1>
                </div>
                <p class="selling-box-text">
                    Managing property finances can be complex. Our financial experts take care of rent collection.
                </p>
            </div>
             <div class="selling-feature">
                <div class="selling-box-header">
                    <my-icon iconName="legal"></my-icon>
                    <h1>Legal Guardian</h1>
                </div>
                <p class="selling-box-text">
                    Stay compliant with property laws and regulations effortlessly.
                </p>
            </div>
        </section>
        `;
    }
}

customElements.define('selling-service', SellingServiceComponent);
