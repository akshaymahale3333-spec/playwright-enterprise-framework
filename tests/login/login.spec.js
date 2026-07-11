const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const users = require('../../fixtures/users.json');

let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});

test('Valid Login', async () => {

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await expect(loginPage.page).toHaveURL(/inventory/);
});

test('Locked User Login', async () => {

    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );

    await expect(loginPage.page.locator('[data-test="error"]'))
        .toContainText('Sorry, this user has been locked out.');
});

test('Invalid Login', async () => {

    await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
    );

    await expect(loginPage.page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match any user in this service');
})