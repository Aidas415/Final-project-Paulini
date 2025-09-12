const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.USER_EMAIL = process.env.USER_EMAIL; 
      config.env.USER_PHONE_NUMBER = process.env.USER_PHONE_NUMBER; 
      config.env.USER_PASSWORD = process.env.USER_PASSWORD; 
      config.env.DISPLAY_NAME = process.env.DISPLAY_NAME; 
      try {
      const envConfig = JSON.parse(fs.readFileSync("cypress.env.json"));
      config.env = { ...config.env, ...envConfig };
      }catch (err) {
        console.warn("⚠️ cypress.env.json not found – skipping local env injection");
      }
      return config;
    },
  },
});
