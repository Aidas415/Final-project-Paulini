/// <reference types='cypress' />

// beforeEach(() => {
//   cy.visit('/');
// });

beforeEach(() => {
  cy.visit("https://paulini.lt");
  cy.acceptCookies();
});

describe("Login positive tests", () => {
  it("TC 02.03. - Positive: login from header", () => {
    cy.prisijungtiButtonOnHeader().click();
    cy.loginForm().should("be.visible");
  });

  it("TC 02.04. - Positive: login from hamburger menu", () => {
    cy.clickOnHamburgerMenu();
    // cy.loginButtonInHamburger();
    cy.loginForm().should("be.visible");
  });
});

describe("Login negative tests", () => {
  // it('TC 02.08. - Negative: login when email without "@" symbol', () => {});
//   it('TC 02.09. - Negative: login fails with invalid phone number', () => {});
  it('TC 02.10. - Negative: login fails with invalid password', () => {
    cy.loginPhoneNmbEmailField().type("aidasambotas@gmail.com");
    cy.loginPasswordField().type("RuDu2");
    cy.loginButtonPrisijungti().should("not.be.disabled").click();
    cy.falseDataReport().eq(7).contains('Neteisingi prisijungimo duomenys').should('be.visible');
    // cy.userNameOnPage().contains("Aidas");
  });
});
