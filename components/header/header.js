class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        window.openMenu = () => {
            window.document
                .querySelector('.mobileHeader .nav-links')
                .classList.add('open');
        }

        window.closeMenu = () => {
            window.document
                .querySelector('.mobileHeader .nav-links')
                .classList.remove('open');
        }


        this.innerHTML = `
        <link rel="stylesheet" href="../../components/header/index.css"/>
        <header class="header">
        <div class="banner">
            <div></div>
            <p>✨Discover Your Dream Property with Estatein <a href="#">Learn More</a></p>
            <button class="banner-close">
                <my-icon iconName="close"></my-icn
            </button>
        </div>
        <nav class="navbar container desktopHeader">
            <header-logo></header-logo>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Services</a></li>
                <!-- <li><a href="#">Contact Us</a></li> -->
            </ul>
            <custom-button type="dark-btn" name="Log In"></custom-button>

        </nav>

        <!-- Mobile Header -->
         <nav class="navbar container mobileHeader">
            <header-logo></header-logo>
            <my-icon iconName="burger" onclick="openMenu()" class="burger"></my-icon>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Services</a></li>
                <li>
                <custom-button type="dark-btn" name="Log In"></custom-button>
                </li>
                <my-icon iconName="burger" onclick="closeMenu()" class="closeMenu"></my-icon>
            </ul>
        </nav>
    </header>
        `;
    }
}
customElements.define('custom-header', HeaderComponent);
