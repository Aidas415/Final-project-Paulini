Cypress.Commands.add("loginForm", () => {
  return cy.get(".css-js8cyh > :nth-child(2)");
});

Cypress.Commands.add("clickHeaderLoginButton", () => {
  cy.get(".MuiTypography-inherit > .MuiTypography-root").click();
});

Cypress.Commands.add("loginButtonInHamburger", () => {
  cy.get(":nth-child(1) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add("getLoginInputField", () => {
  cy.get('input[name="loginName"]').click();
});

Cypress.Commands.add("getPasswordInputField", () => {
  cy.get('input[name="password"]').click();
});

Cypress.Commands.add("getLoginButton", () => {
  return cy.get("button.MuiLoadingButton-root").contains("Prisijungti");
});

Cypress.Commands.add("getLoggedInUserName", () => {
  return cy
    .contains(Cypress.env("DISPLAY_NAME"), { timeout: 10000 })
    .should("be.visible");
});

Cypress.Commands.add("getLoginErrorMessage", () => {
cy.contains('.MuiBox-root', 'Neteisingi prisijungimo duomenys').should('exist');
});
