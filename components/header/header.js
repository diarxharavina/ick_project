class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const isLoggedIn = () => {
            console.log(localStorage.getItem('accessToken'));
            return !!localStorage.getItem('accessToken');
        };

        window.logOut = () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        };

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

        window.closeBanner = () => {
            window.document
                .querySelector('.header .banner')
                .classList.add('hidden');
        };

        this.innerHTML = `
        <link rel="stylesheet" href="../../components/header/index.css"/>
        <header class="header">
        <div class="banner">
            <div></div>
            <p>✨Discover Your Dream Property with Estatein <a href="#">Learn More</a></p>
            <button class="banner-close" onclick="closeBanner()">
                <my-icon iconName="close"></my-icon>
            </button>
        </div>
        <nav class="navbar container desktopHeader">
            <header-logo></header-logo>
            <ul class="nav-links">
                <li><a href="../../pages/home/index.html">Home</a></li>
                <li><a href="../../pages/about/index.html">About Us</a></li>
                <li><a href="../../pages/properties/index.html">Properties</a></li>
                <li><a href="../../pages/services/index.html">Services</a></li>
                <li><a href="../../pages/contact/index.html">Contact Us</a></li>
            </ul>
            ${
                isLoggedIn()
                    ? `<a href="../../pages/login/index.html"><custom-button type="dark-btn" name="Log out" onclick="logOut()"></custom-button></a>`
                    : `
                        <a href="../../pages/login/index.html"><custom-button type="purple-btn" name="Log In"></custom-button></a>
                    `
            }

        </nav>

        <!-- Mobile Header -->
         <nav class="navbar container mobileHeader">
            <header-logo></header-logo>
            <my-icon iconName="burger" onclick="openMenu()" class="burger"></my-icon>
            <ul class="nav-links">
                <li><a href="../../pages/home/index.html">Home</a></li>
                <li><a href="../../pages/about">About Us</a></li>
                <li><a href="../../pages/properties/index.html">Properties</a></li>
                <li><a href="../../pages/services/index.html">Services</a></li>
                <li><a href="../../pages/contact/index.html">Contact Us</a></li>
                <li>
                ${
                isLoggedIn()
                    ? `<a href="../../pages/login/index.html"><custom-button type="dark-btn" name="Log out" onclick="logOut()"></custom-button></a>`
                    : `
                        <a href="../../pages/login/index.html"><custom-button type="purple-btn" name="Log In"></custom-button></a>
                    `
            }
                </li>
                <my-icon iconName="burger" onclick="closeMenu()" class="closeMenu"></my-icon>
            </ul>
        </nav>
    </header>
        `;

        document.querySelectorAll('.nav-links a').forEach(link => {
            const navLink = link.href.replace('index.html', '');
            const location = window.location.href.replace('index.html', '');
            if (navLink === location) {
                link.classList.add('active');
            }
        });
    }
}
customElements.define('custom-header', HeaderComponent);
