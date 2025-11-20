class CardsInvComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/cards/index.css"/>
        <script src="../../components/button/button.js"></script>
 <div class="all-cards">
            <div class="card-inv">
                <div class="card-inv-header">
                    <my-icon iconName="analytics"></my-icon>
                    <h1>Market Insight</h1>
                </div>
                <p>
                    Stay ahead of market trends with our expert Market Analysis.
                    We provide in-depth insights into real estate market
                    conditions
                </p>
            </div>

            <div class="card-inv">
                <div class="card-inv-header">
                    <my-icon iconName="assessment"></my-icon>
                    <h1>ROI Assessment</h1>
                </div>
                <p>
                    Make investment decisions with confidence. Our ROI
                    Assessment services evaluate the potential returns on your
                    investments
                </p>
            </div>

            <div class="card-inv">
                <div class="card-inv-header">
                    <my-icon iconName="strategies"></my-icon>
                    <h1>Customized Strategies</h1>
                </div>
                <p>
                    Every investor is unique, and so are their goals. We develop
                    Customized Investment Strategies tailored to your specific
                    needs
                </p>
            </div>
            <div class="card-inv">
                <div class="card-inv-header">
                    <my-icon iconName="mastery"></my-icon>
                    <h1>Diversification Mastery</h1>
                </div>
                <p>
                    Diversify your real estate portfolio effectively. Our
                    experts guide you in spreading your investments across
                    various property types and locations
                </p>
            </div>
        </div>
        
        
        `;
    }
}

customElements.define('cards-inv', CardsInvComponent);
