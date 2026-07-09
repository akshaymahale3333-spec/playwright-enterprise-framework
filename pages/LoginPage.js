class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
}


}
module.exports = LoginPage;