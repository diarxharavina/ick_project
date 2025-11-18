class PropertyManagementComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/propertyManagement/index.css"/>
        <script src="../../components/button/button.js"></script>
<section class="property-management">

    <div class="property-management-feature">
        <div class="property-management-header">
            <my-icon iconName="analytics"></my-icon>
            <h1>Tenant Harmony</h1>
        </div>
        <p class="property-box-text">
            Discover the true worth of your property with our expert valuation services.
        </p>
    </div>

    <div class="property-management-feature">
        <div class="property-management-header">
            <my-icon iconName="analytics"></my-icon>
            <h1>Maintenance Ease</h1>
        </div>
        <p class="property-box-text">
            Discover the true worth of your property with our expert valuation services.
        </p>
    </div>

    <div class="property-management-feature">
        <div class="property-management-header">
            <my-icon iconName="analytics"></my-icon>
            <h1>Financial Peace of Mind</h1>
        </div>
        <p class="property-box-text">
            Discover the true worth of your property with our expert valuation services.
        </p>
    </div>

    <div class="property-management-feature">
        <div class="property-management-header">
            <my-icon iconName="analytics"></my-icon>
            <h1>Legal Guardian</h1>
        </div>
        <p class="property-box-text">
            Discover the true worth of your property with our expert valuation services.
        </p>
    </div>

    <div class="property-management-feature property-management-feature--wide">
        <div class="property-management-wide-text">
            <h1>Experience Effortless Property Management</h1>
            <p>
                Ready to experience hassle-free property management?
                Explore our Property Management Service categories and
                let us handle the complexities while you enjoy the benefits of property ownership.
            </p>
        </div>

        <custom-button type="dark-btn" name="Learn More"></custom-button>
    </div>

</section>

        `;
    }
}

customElements.define('property-management', PropertyManagementComponent);
