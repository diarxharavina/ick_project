class StepCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const step = this.getAttribute("step") || "Step 01";
        const title = this.getAttribute("title") || "Default Title";
        const description = this.getAttribute("description") || "Default description text.";

        this.innerHTML = `
            <link rel="stylesheet" href="../../components/stepsCards/index.css">

            <div class="stepCardBox">
                <h3 class="stepCardNumber">${step}</h3>
                <div class="stepCardDetails">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("step-card", StepCard);
