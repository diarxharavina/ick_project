class LoginComponent extends HTMLElement {
    connectedCallback() {
        this.renderLogin();
    }

    // Validation =====================
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    validatePassword(password) {
        return password.length >= 6;
    }

    validateRequired(form) {
        return [...form.querySelectorAll("input")].every(
            input => input.value.trim() !== ""
        );
    }

    // Error message ====================
    showError(msg) {
        const box = this.querySelector(".error-box");
        if (!box) return;
        box.textContent = msg;
        box.style.display = msg ? "block" : "none";
    }

    clearErrorOnType(form) {
        form.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => this.showError(""));
        });
    }

    // Local Storage ====================
    getAccounts() {
        return JSON.parse(localStorage.getItem("accounts") || "[]");
    }

    saveAccounts(accounts) {
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    createAccount(data) {
        const accounts = this.getAccounts();

        if (accounts.some(acc => acc.email === data.email)) {
            return { success: false, message: "Email already registered." };
        }

        accounts.push(data);
        this.saveAccounts(accounts);

        return { success: true };
    }

    loginAccount(email, password) {
        const accounts = this.getAccounts();
        const user = accounts.find(
            acc => acc.email === email && acc.password === password
        );

        if (!user) {
            return { success: false, message: "Invalid email or password." };
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        return { success: true, user };
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

                <form class="login-form">
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

                    <button type="submit" class="purple-btn btn">Log In</button>
                </form>
            </div>
        `;

        this.querySelector(".signup-btn")
            .addEventListener("click", () => this.renderRegister());

        const form = this.querySelector(".login-form");
        this.clearErrorOnType(form);

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!this.validateRequired(form)) {
                this.showError("Please fill in all fields.");
                return;
            }

            const email = form.querySelector("input[type=email]").value.trim();
            const password = form.querySelector("input[type=password]").value.trim();

            const result = this.loginAccount(email, password);

            if (!result.success) {
                this.showError(result.message);
                return;
            }

            this.showError("");
            alert("Logged in successfully!");
        });
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

                    <button type="submit" class="purple-btn btn">Sign Up</button>
                </form>
            </div>
        `;

        this.querySelector(".login-btn")
            .addEventListener("click", () => this.renderLogin());

        const form = this.querySelector(".register-form");
        this.clearErrorOnType(form);

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!this.validateRequired(form)) {
                this.showError("Please fill in all fields.");
                return;
            }

            const inputs = [...form.querySelectorAll("input")];
            const first = inputs[0].value.trim();
            const last = inputs[1].value.trim();
            const email = inputs[2].value.trim();
            const password = inputs[3].value.trim();

            if (!this.validateEmail(email)) {
                this.showError("Please enter a valid email.");
                return;
            }

            if (!this.validatePassword(password)) {
                this.showError("Password must be at least 6 characters long.");
                return;
            }

            const result = this.createAccount({ first, last, email, password });

            if (!result.success) {
                this.showError(result.message);
                return;
            }

            this.showError("");
            this.renderLogin();
        });
    }
}

customElements.define("custom-login", LoginComponent);
