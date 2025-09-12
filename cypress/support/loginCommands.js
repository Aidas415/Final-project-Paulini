Cypress.Commands.add("loginForm", () => {
  cy.get(".css-js8cyh > :nth-child(2)");
});

Cypress.Commands.add("prisijungtiButtonOnHeader", () => {
  cy.get(".MuiTypography-inherit > .MuiTypography-root");
});

Cypress.Commands.add("loginButtonInHamburger", () => {
  cy.get(":nth-child(1) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add("loginPhoneNmbEmailField", () => {
  cy.get('input[name="loginName"]').click();
});

Cypress.Commands.add("loginPasswordField", () => {
  cy.get('input[name="password"]').click();
});

Cypress.Commands.add("loginButtonPrisijungti", () => {
cy.get('button').contains('Prisijungti').click();




  //   cy.get("#:r4: > .MuiBox-root");
  //   cy.get('.MuiGrid-direction-xs-column ').each().within(() => {
  //     cy.contains('button > div', 'Prisijungti');
  //     });
});

console.log("DISPLAY_NAME:", Cypress.env("DISPLAY_NAME"));

Cypress.Commands.add("userNameOnPage", () => {
  // cy.get('.MuiTypography-inherit > .MuiTypography-root')
  // cy.contains(Cypress.env('DISPLAY_NAME'), { timeout: 10000 }).should('be.visible');
  cy.contains(Cypress.env("DISPLAY_NAME"), { timeout: 10000 }).should("be.visible");
  // cy.get(".css-5ff4ol")
});

console.log("DISPLAY_NAME:", Cypress.env("DISPLAY_NAME"));
