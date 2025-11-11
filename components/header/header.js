class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        window.openMenu = () => {
            window.document
                .querySelector('.mobileHeader .nav-links')
                .classList.add('open');
        };

        window.closeMenu = () => {
            window.document
                .querySelector('.mobileHeader .nav-links')
                .classList.remove('open');
        };

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
        <nav class="navbar container desktopHeader">
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

        <!-- Mobile Header -->
         <nav class="navbar container mobileHeader">
            <header-logo></header-logo>
            <span onclick="openMenu()" class="burger">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="white"/>
                </svg>
            </span>
            </label>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Services</a></li>
                <li>
                <custom-button type="dark-btn" name="Contact Us"></custom-button>
                </li>
                <li onclick="closeMenu()" class="closeMenu">X</li>
            </ul>
        </nav>
    </header>
        `;
    }
}
customElements.define('custom-header', HeaderComponent);
