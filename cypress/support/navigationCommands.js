Cypress.Commands.add('getBreadcrumbItems', () => {
  return cy.get('.MuiBreadcrumbs-root ol li');
});

Cypress.Commands.add('checkUrlOfPage', (endpoint) => {
    cy.url().should('include', endpoint);
});

Cypress.Commands.add('clickNavLink', (label) => {
    cy.contains(label).click({ force: true });
}); 