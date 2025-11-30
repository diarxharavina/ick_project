class LoginComponent extends HTMLElement {
    connectedCallback() {
        this.renderLogin();
    }

    // Render Login container =============
    renderLogin() {
        this.innerHTML = `
            <div class="login-container">

                <div class="login-register-buttons">
                    <p class="signup-btn">Sign Up</p>
                    <p class="login-btn active">Log In</p>
                </div>

                <h2>Log In</h2>

                <form onsubmit="onSubmit(event)" class="login-form">
                    <div class="field">
                        <label>Username</label>
                        <input type="text" name="username" />
                    </div>

                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>

                    <div class="error-box" style="
                        display:none;
                        color:red;
                        margin:8px 0;
                        font-size:14px;
                    "></div>

                    <button type="submit" class="submit-login-btn btn">Log In</button>
                </form>
            </div>
        `;

        this.querySelector(".signup-btn")
            .addEventListener("click", () => this.renderRegister());
    }

    // Render register container ==================
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

                    <div class="error-box" style="
                        display:none;
                        color:red;
                        margin:8px 0;
                        font-size:14px;
                    "></div>

                    <button type="submit" class="submit-register-btn btn">Sign Up</button>
                </form>
            </div>
        `;

        this.querySelector(".login-btn")
            .addEventListener("click", () => this.renderLogin());
    }
}

customElements.define("custom-login", LoginComponent);
