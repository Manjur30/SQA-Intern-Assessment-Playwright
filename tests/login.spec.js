const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('Login with valid registered user credentials', async ({ page }) => {

    // Launch Automation Exercise website
    await page.goto('https://www.automationexercise.com/');

    // Verify that the home page is loaded
    await expect(page).toHaveTitle(/Automation Exercise/);
    // Navigate to the Login page
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    // Verify that the Login section is visible
    await expect(page.getByText('Login to your account')).toBeVisible();
    // Enter registered email address
    await page.locator('input[data-qa="login-email"]').fill(process.env.USER_EMAIL);
    // Enter registered password
    await page.locator('input[data-qa="login-password"]').fill(process.env.USER_PASSWORD);
    // Submit the login form
    await page.locator('button[data-qa="login-button"]').click();
    // Verify that login was successful
    await expect(page.getByText('Logged in as')).toBeVisible();

});