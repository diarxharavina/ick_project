class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/header/index.css"/>
        <header class="header">
        <div class="banner">
            <div></div>
            <p>✨Discover Your Dream Property with Estatein <a href="#">Learn More</a></p>
            <button class="banner-close">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 12.75L12.75 0.750001M0.75 0.75L12.75 12.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <nav class="navbar container">
            <header-logo></header-logo>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Services</a></li>
                <!-- <li><a href="#">Contact Us</a></li> -->
            </ul>
            <custom-button type="dark-btn" name="Contact Us"></custom-button>
        </nav>
    </header>
        `
    }
}
customElements.define('custom-header', HeaderComponent)