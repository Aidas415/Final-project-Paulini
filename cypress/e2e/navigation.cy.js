/// <reference types='cypress' />

beforeEach(() => {
  cy.visit("https://paulini.lt");
  cy.acceptCookies();
  cy.loginPhoneNmbEmailField().click();
  cy.loginPhoneNmbEmailField().type("aidasambotas@gmail.com");
  cy.loginPasswordField().click();
  cy.loginPasswordField().type("BALtija1");
  cy.loginButtonPrisijungti().click();
  cy.userNameOnPage().contains('Aidas').should('be.visible');
});

describe("TS 03. Navigation Menu", () => {
  // it('TC 03.01. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from main page', () => {});
  // it('TC 03.02. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from main page', () => {});
  // it('TC 03.03. - Page "APIE MUS" is visible and accessible from main page', () => {});
  // it('TC 03.04. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {});
  // it('TC 03.05. - Page "APIE MUS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {});
  // it('TC 03.06. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {});
  // it('TC 03.07. - Page "APIE MUS" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {});
  // it('TC 03.08. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "APIE MUS" page', () => {});
  // it('TC 03.09. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "APIE MUS" page', () => {});
});
