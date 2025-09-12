Cypress.Commands.add('checkBreadcrumbOfPage', (page) => {
        cy.get('.MuiBreadcrumbs-root')
      .should('contain.text', 'PAULINI')
      .and('contain.text', page);
});

Cypress.Commands.add('checkUrlOfPage', (endpoint) => {
    cy.url().should('include', endpoint);
});

Cypress.Commands.add('clickNavLink', (label) => {
    cy.contains(label).click({ force: true });
}); 