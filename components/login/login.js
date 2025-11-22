class LoginComponent extends HTMLElement {
    connectedCallback() {
        this.renderLogin();
    }

    renderLogin() {
        this.innerHTML = `

        <div class="login-container">
            <div class="login-register-buttons">
                <p class="signup-btn">Sign Up</p>
                <p class="login-btn active">Log In</p>
            </div>

            <h2>Log In</h2>
            
            <form class="login-form">
            <div class="field">
            <label>Email address</label>
            <input type="email" />
            </div>
            
            <div class="field">
            <label>Password</label>
            <input type="password" />
            </div>
            
            <button type="submit" class="submit-login-btn btn">Log In</button>
            </form>
            </div>
            `;
            
            this.querySelector(".signup-btn")
    .addEventListener("click", () => {
        console.log("CLICKED SIGN UP");
        this.renderRegister();
    });

    }

    renderRegister() {
        this.innerHTML = `
        <div class="register-container">
            <div class="login-register-buttons">
                <p class="signup-btn active">Sign Up</p>
                <p class="login-btn">Log In</p>
            </div>

            <h2>Sign Up</h2>

            <form class="register-form">
                <div class="row">
                    <div class="field">
                        <label>First name</label>
                        <input type="text" />
                    </div>

                    <div class="field">
                        <label>Last name</label>
                        <input type="text" />
                    </div>
                </div>

                <div class="field">
                    <label>Email address</label>
                    <input type="email" />
                </div>

                <div class="field">
                    <label>Password</label>
                    <input type="password" />
                </div>

                <button type="submit" class="submit-register-btn btn">Sign Up</button>
            </form>
        </div>
        `;

        this.querySelector(".login-btn")
            .addEventListener("click", () => this.renderLogin());
    }
}

customElements.define("custom-login", LoginComponent);
