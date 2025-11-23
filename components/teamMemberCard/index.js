class TeamCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute("name") || "John Doe";
        const role = this.getAttribute("role") || "Position";
        const image = this.getAttribute("image") || "path/to/default.jpg";

        this.innerHTML = `
            <link rel="stylesheet" href="../../components/teamMemberCard/index.css">
            <script src="../../components/icons/icons.js"></script>

            <div class="teamCard">
                <div class="imageWrapper">
                    <img src="${image}" alt="${name}">
                    <div class="twitterIcon">
                        <my-icon iconName="twitterLogo"></my-icon>
                    </div>
                </div>
                <h2>${name}</h2>
                <p class="role">${role}</p>
                <div class="helloBox">
                    <span>Say Hello</span>
                    <div class="sendIcon">
                        <my-icon iconName="paperplane"></my-icon>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("team-card", TeamCard);
