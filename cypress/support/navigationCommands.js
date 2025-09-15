// Cypress.Commands.add('checkBreadcrumbOfPage', (expectedText) => {
//         cy.get('.MuiBreadcrumbs-root')
//       .should('contain.text', 'PAULINI')
//       .and('contain.text', expectedText);
// });

Cypress.Commands.add('getBreadcrumbItems', () => {
  return cy.get('.MuiBreadcrumbs-root ol li');
});

// Cypress.Commands.add('checkBreadcrumbOfPage', (expectedText) => {
//   cy.get('.MuiBreadcrumbs-root')
//     .should('contain.text', 'PAULINI')
//     .find('span')
//     .last()
//     .should('contain.text', expectedText);
// });


Cypress.Commands.add('checkUrlOfPage', (endpoint) => {
    cy.url().should('include', endpoint);
});

Cypress.Commands.add('clickNavLink', (label) => {
    cy.contains(label).click({ force: true });
}); 