// Cypress.Commands.add('acceptCookies', () => {
//   cy.contains('PATVIRTINTI VISUS').click();
// });

Cypress.Commands.add("acceptCookies", () => {
  cy.get(
    ".MuiSnackbarContent-action > .MuiGrid-container > :nth-child(3) > :nth-child(1)"
  ).click();
});

Cypress.Commands.add("clickOnHamburgerMenuIcon", () => {
  cy.get('[data-testid="MenuIcon"]').click({ force: true });
});

Cypress.Commands.add("clickHamburgerMenuItem", (label) => {
  cy.contains(label).click({ force: true });
});

Cypress.Commands.add("shouldSeeField", (fieldName) => {
  cy.get(`[name="${fieldName}"]`);
});

Cypress.Commands.add("shouldSeeRegistrationOption", (label) => {
  cy.contains(label).should('be.visible');
});

Cypress.Commands.add("shouldSeePromoImage", (altText) => {
  const escaped = Cypress.$.escapeSelector(altText);
  cy.get(`img[alt="${escaped}"]`).should('be.visible');
});

Cypress.Commands.add('checkProductListVisible', () => {
  cy.url().should('include', '/paieska');
  cy.get('ul.MuiList-root li').should('have.length.greaterThan', 5);
});

Cypress.Commands.add('shouldSeeValues', (values) => {
  values.forEach((value) => {
    cy.contains(value).parent().should('be.visible');
  });
});

Cypress.Commands.add("buttonApmokėtiKreditaiKuponai", () => {
  return cy.contains('button', 'APMOKĖTI');
});

Cypress.Commands.add('getAboutUsSection', () => {
  return cy.get('.ql-editor');
});

Cypress.Commands.add('getBlockByTitle', (title) => {
  return cy.contains('p', title, { timeout: 6000 }).closest('li');
});

Cypress.Commands.add('getAllPartnerLogos', () => {
  return cy.get('img[alt]');
});

Cypress.Commands.add('checkContactFormVisible', () => {
  cy.contains('Siųsti pranešimą').should('be.visible');
});
