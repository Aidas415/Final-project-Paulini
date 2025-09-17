# Paulini Website Testing Project with Cypress, Jira, and GitHub Actions

This project is designed to automate website testing using [Cypress](https://www.cypress.io/) and manage test scenarios through [Jira](https://www.atlassian.com/software/jira). The tests are executed and monitored via GitHub Actions for continuous integration. At this project you will need to use enviroments. Project website https://paulini.lt/

## 📖 Project Overview

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

### 2. Install dependencies

```bash
npm install
```

### 3. Run Cypress tests

```
npx cypress open

npx cypress run
```

## 🧪 Test Scenarios

- **TS 1.** Login
- **TS 2.** Navigation menu
- **TS 3.** Hamburger menu

## 🔐 Environment Variables

Some test cases require sensitive user data, which must be provided via environment variables. These variables **must not be committed to version control** and should be configured locally or via CI/CD secrets.

### Required Variables

```env
USER_EMAIL=your_test_email@example.com
USER_PHONE_NUMBER=+37060000000
USER_PASSWORD=your_secure_password
DISPLAY_NAME=Test User
```

## 📌 Usage Scope

These variables are only used in the following test scenarios:

- **TS 01** - General user authentication tests
- **TC 03.12** - Profile update with valid credentials
- **TC 03.13** - Password change flow
- **TC 03.14** - Display name verification

> ⚠️ **Note:** If these variables are not set, the above test cases will fail or be skipped. Use mock/test accounts only.

## ▶️ ️ GitHub Actions
This project uses GitHub Actions to automatically run Cypress tests on every push or pull request. The workflow file is located at

```
.github/workflows/node.yml
```

You can view the test results directly in the Actions tab of your GitHub repository.

## 🧩 Project Structure

### Icon meanings
- 📁 –  folder
- 📄 – file
- 📁📷 –  folder containing screenshots
- 🖼️ – main image directory

```
├── 📁 .github\workflows
│   └── 📄 node.js.yml
├── 📁 cypress
│   ├── 📁 downloads
│   │   └── 📄 downloads.htm
│   ├── 📁 e2e
│   │   ├── 📄 hamburger.cy.js
│   │   ├── 📄 login.cy.js
│   │   └── 📄 navigation.cy.js
│   ├── 📁 fixtures
│   │   └── 📄 example.json
│   └── 📁 support
│       ├── 📄 commands.js
│       ├── 📄 loginCommands.js
│       ├── 📄 navigationCommands.js
│       ├── 📄 hamburgerCommands.js
│       └── 📄 e2e.js
├── 🖼️ pictures
│   ├── 📁📷 hamburgerImg
│   ├── 📁📷 img
│   ├── 📁📷 login.img
│   └── 📁📷 navigation.img   
├── 📄 .gitignore
├── 📄 cypress.config 
├── 📄 jira.md
├── 📄 package-lock.json
├── 📄 package.json 
├── 📄 plan.txt
├── 📄 README.md 
└── 📄 testCases.md
```

## 👤 Author

```
Created by Aidas
📧 Email: aidasambotas@gmail.com
🌐 GitHub: https://github.com/Aidas415
```