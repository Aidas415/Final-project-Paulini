/// <reference types='cypress' />
// / <reference types="cypress-xpath" />
// require ( 'cypress-xpath' );

beforeEach(() => {
  cy.visit("https://paulini.lt");
  cy.acceptCookies();
});

describe("TS 01. Login positive tests", () => {
    it.only("TC 02.01 - Positive: login with email from main page", () => {
    cy.loginPhoneNmbEmailField().type("USER_EMAIL");
    cy.loginPasswordField().type("USER_PASSWORD");
    cy.loginButtonPrisijungti();
    cy.userNameOnPage().should("contain", Cypress.env("DISPLAY_NAME"));
  });

  it("TC 02.02. - Positive: login with phone number from main page", () => {
    cy.loginPhoneNmbEmailField().type("USER_PHONE_NUMBER");
    cy.loginPasswordField().type("USER_PASSWORD");
    cy.loginButtonPrisijungti().should("not.be.disabled").click();
    cy.userNameOnPage().contains("USER_NAME");
  });

  it("TC 01.03. - Positive: login from header", () => {
    cy.prisijungtiButtonOnHeader().click();
    cy.loginForm().should("be.visible");
  });

  it("TC 01.04. - Positive: login from hamburger menu", () => {
    cy.clickOnHamburgerMenu();
    // cy.loginButtonInHamburger();
    cy.loginForm().should("be.visible");
  });
});

describe("Login negative tests", () => {
  // it('TC 02.08. - Negative: login when email without "@" symbol', () => {});
//   it('TC 02.09. - Negative: login fails with invalid phone number', () => {});
  it('TC 01.10. - Negative: login fails with invalid password', () => {
    cy.loginPhoneNmbEmailField().type("USER_EMAIL");
    cy.loginPasswordField().type("RuDu2");
    cy.loginButtonPrisijungti().should("not.be.disabled").click();
    cy.falseDataReport().eq(7).contains('Neteisingi prisijungimo duomenys').should('be.visible');
    // cy.userNameOnPage().contains("USER_NAME");
  });
});
