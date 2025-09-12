const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const envConfig = JSON.parse(fs.readFileSync("cypress.env.json"));
      config.env = { ...config.env, ...envConfig };
      return config;
    },
  },
});
