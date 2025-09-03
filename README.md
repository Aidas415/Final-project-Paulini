# Website Testing Project with Cypress, Jira, and GitHub Actions

This project is designed to automate website testing using [Cypress](https://www.cypress.io/) and manage test scenarios through [Jira](https://www.atlassian.com/software/jira). The tests are executed and monitored via GitHub Actions for continuous integration.

## 📋 Project Overview

- **Testing Tool:** Cypress
- **Test Management:** Jira
- **CI/CD:** GitHub Actions
- **Documentation:** Markdown files for scenario execution

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies
Make sure you have Node.js installed.

```bash
npm install
```

3. Run Cypress tests

```
npx cypress open
```

Or to run in headless mode:

```
npx cypress run
```

🧪 Test Scenarios
Detailed instructions for each test scenario are available in the following files:
• 	Login Scenario
• 	Checkout Scenario
• 	Error Handling Scenario
Each file includes:
• 	Scenario description
• 	Steps to reproduce
• 	Expected results
• 	Jira ticket reference


⚙️ GitHub Actions
This project uses GitHub Actions to automatically run Cypress tests on every push or pull request. The workflow file is located at

```
.github/workflows/test.yml
```

You can view the test results directly in the Actions tab of your GitHub repository.

📂 Project Structure

```
├── cypress/
│   ├── integration/
│   └── support/
├── docs/
│   ├── login-scenario.md
│   ├── checkout-scenario.md
│   └── error-handling.md
├── .github/
│   └── workflows/
│       └── test.yml
├── .env
├── package.json
└── README.md
```


👤 Author
Created by Aidas
📧 Email: your-email@example.com
🌐 GitHub: your-username
