/// <reference types='cypress' />

beforeEach(() => {
  cy.visit("https://paulini.lt");
  cy.acceptCookies();
});

describe("TS 01. Login positive tests", () => {
  it("TC 01.01 - Positive: login with email from main page", () => {
    cy.getLoginInputField().type(Cypress.env("USER_EMAIL"));
    cy.getPasswordInputField().type(Cypress.env("USER_PASSWORD"));
    cy.getLoginButton().should("be.visible").should("not.be.disabled").click();
    cy.getLoggedInUserName().should("contain", Cypress.env("DISPLAY_NAME"));
  });

  it("TC 01.02. - Positive: login with phone number from main page", () => {
    cy.getLoginInputField().type(Cypress.env("USER_PHONE_NUMBER"));
    cy.getPasswordInputField().type(Cypress.env("USER_PASSWORD"));
    cy.getLoginButton().should("not.be.disabled").click();
    cy.getLoggedInUserName().should("contain", Cypress.env("DISPLAY_NAME"));
  });

  it("TC 01.03. - Positive: login from header", () => {
    cy.clickHeaderLoginButton();
    cy.loginForm().should("be.visible");
  });

  it("TC 01.04. - Positive: login from hamburger menu", () => {
    cy.clickOnPrisijungtiFromHamburgerMenu();
    cy.loginForm().should("be.visible");
  });
});

describe("Login negative tests", () => {
  it('TC 01.05. - Negative: login when email without "@" symbol', () => {
    cy.getLoginInputField().type("aidasambotasgmail.com");
    cy.getPasswordInputField().type(Cypress.env("USER_PASSWORD"));
    cy.getLoginButton().should("be.visible").should("not.be.disabled").click();
    cy.getLoginErrorMessage()
      .contains("Neteisingi prisijungimo duomenys")
      .should("be.visible");
  });

  it("TC 01.06. - Negative: login fails with invalid phone number", () => {
    cy.getLoginInputField().type("+56118348956");
    cy.getPasswordInputField().type(Cypress.env("USER_PASSWORD"));
    cy.getLoginButton().should("be.visible").should("not.be.disabled").click();
    cy.getLoginErrorMessage()
      .contains("Neteisingi prisijungimo duomenys")
      .should("be.visible");
  });

  it("TC 01.07. - Negative: login fails with invalid password", () => {
    cy.getLoginInputField().type("USER_EMAIL");
    cy.getPasswordInputField().type("RuDu2");
    cy.getLoginButton().should("be.visible").should("not.be.disabled").click();
    cy.getLoginErrorMessage()
      .contains("Neteisingi prisijungimo duomenys")
      .should("be.visible");
  });
});
