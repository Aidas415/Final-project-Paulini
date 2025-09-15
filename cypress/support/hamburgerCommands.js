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

Cypress.Commands.add("divPrekesPaslaugos", () => {
  cy.get(".MuiToggleButtonGroup-root");
});

Cypress.Commands.add('shouldSeeValues', (values) => {
  values.forEach((value) => {
    cy.contains(value).parent().should('be.visible');
  });
});

Cypress.Commands.add("buttonApmokėtiKreditaiKuponai", () => {
  return cy.contains('button', 'APMOKĖTI');
});








Cypress.Commands.add("clickOnPriemimoSkyriaiFromHamburger", () => {
  cy.get(":nth-child(7) > .MuiListItemText-root > .MuiTypography-root").click();
});

// Cypress.Commands.add('pauliniLocationsOfPriemimoSkyrius', () => {
//     cy.get('.MuiGrid-container .MuiTypography-root .MuiTypography-body1 > p')
// });

// Cypress.Commands.add('storeCityLocationsOfPriemimoSkyrius', () => {
//     cy.get('.MuiPaper-root .MuiBox-root > p')
// });

// Cypress.Commands.add('storeCityLocationsOfPriemimoSkyrius', () => {
//     cy.contains('.MuiPaper-root')
// });

Cypress.Commands.add("olBreadcrumbPriemimoSkyriai", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("storeAdressOfPriemimoSkyriai", () => {
  cy.get('div[class="MuiBox-root css-0"] p');
});

// Cypress.Commands.add("clickOnApieMusFromHamburger", () => {
//   cy.get(":nth-child(9) > .MuiListItemText-root > .MuiTypography-root").click();
// });

Cypress.Commands.add("olBreadcrumbApieMus", () => {
  cy.get(".MuiBreadcrumbs-ol > li");
});

Cypress.Commands.add("descriptionApieMus", () => {
  cy.get(".ql-editor");
});

Cypress.Commands.add("clickOnPasiekimaiFromHamburger", () => {
  cy.get(
    ":nth-child(10) > .MuiListItemText-root > .MuiTypography-root"
  ).click();
});

Cypress.Commands.add("olBreadcrumbPasiekimai", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("collectionOfAchievements", () => {
  cy.get(".MuiList-root + p");
});

Cypress.Commands.add("clickOnPartneriaiFromHamburger", () => {
  cy.get(
    ":nth-child(11) > .MuiListItemText-root > .MuiTypography-root"
  ).click();
});

Cypress.Commands.add("olBreadcrumbPartneriai", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("partnerOfPaulini", () => {
  cy.get(".MuiGrid-root > .css-12vr1au");
});

Cypress.Commands.add("clickOnKlauskiteFromHamburger", () => {
  cy.get(
    ":nth-child(13) > .MuiListItemText-root > .MuiTypography-root"
  ).click();
});

Cypress.Commands.add("olBreadcrumbKlauskite", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("cliclOnTaisyklesFromHamburger", () => {
  cy.get(
    ":nth-child(14) > .MuiListItemText-root > .MuiTypography-root"
  ).click();
});

Cypress.Commands.add("olBreadcrumbTaisykles", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("ruleListNameOfTaisykles", () => {
  cy.get('div[class="MuiGrid-root css-xhcsqv"]');
});

Cypress.Commands.add("clickOnPrivatumoPolitika", () => {
  cy.get(
    ":nth-child(15) > .MuiListItemText-root > .MuiTypography-root"
  ).click();
});

Cypress.Commands.add("olBreadcrumbPrivatumoPolitika", () => {
  cy.get(".MuiBreadcrumbs-ol > li");
});

Cypress.Commands.add("ruleListNameOfPrivatumoPolitika", () => {
  cy.get(".MuiGrid-root > > h2");
});

Cypress.Commands.add("clikOnUzsakymuIstorijaFromHamburger", () => {
  cy.get(":nth-child(3) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add("olBreadcrumbUsakymuIstorija", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("clickOnJusuKrepselisFromHamburgerMenu", () => {
  cy.get(":nth-child(4) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add("olBreadcrumbJusuKrepselis", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("clickOPaskyrosNustatymaiFromHamburgerMenu", () => {
  cy.get(":nth-child(5) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add("olBreadcrumbPaskyrosNustatymai", () => {
  cy.get(".MuiBreadcrumbs-ol");
});

Cypress.Commands.add("", () => {});
