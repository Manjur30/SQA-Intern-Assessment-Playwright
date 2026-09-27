# Automation Exercise Login Test

This project contains a Playwright automation test for the login functionality of the Automation Exercise website.

The test uses a manually registered user account and verifies that a registered user can successfully log in with valid credentials.

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Automated Test Scenario

1. Launch the Automation Exercise website.
2. Navigate to the Signup / Login page.
3. Enter the registered email address.
4. Enter the registered password.
5. Submit the login form.
6. Verify that the login was successful.

## How to Run the Project

### 1. Install dependencies
```bash
npm install
```
### 2. Create environment file
Create a `.env` file in the project root and add your registered Automation Exercise credentials:
```env
USER_EMAIL=your_registered_email
USER_PASSWORD=your_registered_password
```
### 3. Run the login test
```bash
npx playwright test tests/login.spec.js --project=chromium --headed
```
