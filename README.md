# Paulini Website Testing Project with Cypress, Jira, and GitHub Actions

This project is designed to automate website testing using [Cypress](https://www.cypress.io/) and manage test scenarios through [Jira](https://www.atlassian.com/software/jira). The tests are executed and monitored via GitHub Actions for continuous integration. At this project you will need to use envirouments. This project website https://paulini.lt/

## 📋 Project Overview

- **Testing Tool:** Cypress
- **Test Management:** Jira
- **CI/CD:** GitHub Actions
- **Documentation:** Markdown files for scenario execution

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Aidas415/Final-project-Paulini.git
cd Final-project-Paulini
```

2. Install dependencies


```bash
npm install
```

1. Run Cypress tests

```
npx cypress open
```

npx cypress run
```

🧪 Test Scenarios
TS 2. Login
TS 3. Navigation menu
TS 4. Hamburger menu


⚙️ GitHub Actions
This project uses GitHub Actions to automatically run Cypress tests on every push or pull request. The workflow file is located at

```
.github/workflows/node.yml
```

You can view the test results directly in the Actions tab of your GitHub repository.

📂 Project Structure

```
<!-- ├── cypress/
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
└── README.md -->
```


👤 Author
Created by Aidas
📧 Email: aidasambotas@gmail.com
🌐 GitHub: https://github.com/Aidas415
