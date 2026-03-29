# PWA.TS.Framework

A comprehensive Playwright TypeScript automation testing framework for [Automation Exercise](https://automationexercise.com/).

## Project Structure

```
├── PagesObjects/          # Page Object Models
│   ├── account.page.ts
│   ├── auth.page.ts
│   ├── home.page.ts
│   ├── signup.page.ts
│   └── pageObjectManager.ts
├── tests/                 # Test Specifications
│   ├── login.spec.ts
│   ├── loginNegative.spec.ts
│   ├── logout.spec.ts
│   ├── register.spec.ts
│   ├── registerExistingUser.spec.ts
│   └── fixtures/
│       └── baseTest.ts
├── utils/                 # Utility Functions
│   ├── userData.ts
│   └── userFlows.ts
├── playwright.config.ts   # Playwright Configuration
├── tsconfig.json          # TypeScript Configuration
└── package.json           # Project Dependencies
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SaravananJST/PWA.TS.Framework.git
cd PWA.TS.Framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser UI)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run specific test file
```bash
npx playwright test tests/login.spec.ts
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Configuration

The framework includes the following configurations in `playwright.config.ts`:

- **Base URL**: https://automationexercise.com/
- **Timeout**: 30 seconds per test
- **Reporters**: HTML report with traces, screenshots, and videos
- **Screenshots**: Captured on test failures only
- **Videos**: Retained on test failures only
- **Viewport**: 1280x720

## Test Report

After running tests, open the HTML report:
```bash
npx playwright show-report
```

## Features

✅ Page Object Model (POM) design pattern  
✅ Reusable test fixtures with base test setup  
✅ User data management utilities  
✅ Common user flows for testing  
✅ Cross-browser testing support (Chromium, Firefox, WebKit)  
✅ Detailed HTML reports with traces  

## Environment Variables

Set custom base URL using environment variables:
```bash
BASE_URL=https://your-url.com npm test
```

Default: `https://automationexercise.com/`

## Contributing

Feel free to open issues or pull requests for improvements.

## License

MIT
