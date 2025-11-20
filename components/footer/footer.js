class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/footer/index.css"/>
        
<footer class="footer">
            <div class="footer1">
                <div class="footer-content">
                    <h1>Start Your Real Estate Journey Today</h1>
                    <p>
                        Your dream property is just a click away. Whether you're
                        looking for a new home, a strategic investment, or
                        expert real estate advice, Estatein is here to assist
                        you every step of the way. Take the first step towards
                        your real estate goals and explore our available
                        properties or get in touch with our team for
                        personalized assistance.
                    </p>
                </div>

                <button class="btn">Explore Properties</button>
            </div>

            <div class="footer-main">
                <div class="footer2">
                    <div class="footer-logo">
                        <my-icon iconName="estatein"></my-icon>
                        <h1>Estatein</h1>
                    </div>

                    <form class="newsletter">
                        <div class="newsletter-field">
                            <span class="icon-left">
                                <my-icon iconName="envelope"></my-icon>
                            </span>

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                            />

                            <button type="submit" class="icon-right">
                                <my-icon iconName="paperplane"></my-icon>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="footer-links">
                    <div class="footer-col">
                        <h3>Home</h3>
                        <ul>
                            <li>Hero Section</li>
                            <li>Features</li>
                            <li>Properties</li>
                            <li>Testimonials</li>
                            <li>FAQ’s</li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h3>About Us</h3>
                        <ul>
                            <li>Our Story</li>
                            <li>Our Works</li>
                            <li>How It Works</li>
                            <li>Our Team</li>
                            <li>Our Clients</li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h3>Properties</h3>
                        <ul>
                            <li>Portfolio</li>
                            <li>Categories</li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h3>Services</h3>
                        <ul>
                            <li>Valuation Mastery</li>
                            <li>Strategic Marketing</li>
                            <li>Negotiation Wizardry</li>
                            <li>Closing Success</li>
                            <li>Property Management</li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Contact Form</li>
                            <li>Our Offices</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <span>©2023 Estatein. All Rights Reserved.</span>
                    <span>Terms &amp; Conditions</span>
                </div>
                <div class="socials">
                    <my-icon iconName="facebook"></my-icon>
                    <my-icon iconName="linkedin"></my-icon>
                    <my-icon iconName="twitter"></my-icon>
                    <my-icon iconName="youtube"></my-icon>
                </div>
            </div>
        </footer>
    `;
    }
}

customElements.define('coustom-footer', FooterComponent);
