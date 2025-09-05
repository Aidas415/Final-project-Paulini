/// <reference types='cypress' />
// / <reference types="cypress-xpath" />

// const cypress = require("cypress");

// const cypress = require("cypress");

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("acceptCookies", () => {
  cy.get('.MuiSnackbarContent-action > .MuiGrid-container > :nth-child(3) > :nth-child(1)').click();
});

Cypress.Commands.add("loginForm", () => {
  cy.get(".css-js8cyh > :nth-child(2)");
});

Cypress.Commands.add('prisijungtiButtonOnHeader', () => {
    cy.get(".MuiTypography-inherit > .MuiTypography-root");
});

Cypress.Commands.add("loginButtonInHamburger", () => {
  cy.get(":nth-child(1) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add("clickOnHamburgerMenu", () => {
//   cy.get('.MuiSnackbarContent-action > .MuiGrid-container > :nth-child(3) > :nth-child(1)').click();
  cy.get('svg[data-testid="MenuIcon"]').click();
});

Cypress.Commands.add('loginPhoneNmbEmailField', () => {
    cy.get('input[name="loginName"]').click();
});

Cypress.Commands.add('loginPasswordField', () => {
    cy.get('input[name="password"]').click();
});

Cypress.Commands.add('loginButtonPrisijungti', () => {
    cy.get("button.MuiLoadingButton-root");
});

Cypress.Commands.add('userNameOnPage', () => {
    cy.get(".css-5ff4ol")
});

Cypress.Commands.add('falseDataReport', () => {
    cy.get('div[class="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-28ln3p"]')
});

Cypress.Commands.add("clickOnRegistrationFromHamburger", () => {
  cy.get(":nth-child(2) > .MuiListItemText-root > .MuiTypography-root").click();
});

Cypress.Commands.add('registrationFirstName', () => {
    cy.get('[name="firstName"]')
});

Cypress.Commands.add('clickOnAkcijosNaujienosFromHamburger', () => {
    cy.get('div:nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('registrationLastName', () => {
    cy.get('[name="lastName"]')
});

Cypress.Commands.add('registrationEmail', () => {
    cy.get('[name="emailAddress"]')
});

Cypress.Commands.add('registrationPhoneNamber', () => {
    cy.get('[name="mobileNumber"]')
});

Cypress.Commands.add('registrationBirthDate', () => {
    cy.get('[name="birthDate"]')
});

Cypress.Commands.add('registrationPasword', () => {
    cy.get('[name="password"]')
});

Cypress.Commands.add('registrationRetypePassword', () => {
    cy.get('[name="retypePsw"]')
});

Cypress.Commands.add('registrationNoriuGautiPasiulymus', () => {
    cy.get(":nth-child(9) > .MuiTypography-root")
});

Cypress.Commands.add('registrationSutiktiSutaisyklemis', () => {
    cy.get(":nth-child(10) > .css-0 > :nth-child(1)")
});

Cypress.Commands.add('registrationPatvirtinti', () => {
    cy.get(".css-1hdnp4o")
});

Cypress.Commands.add('breadcrumbAkcijosNaujienos', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('fieldAkcijosNaujienos01', () => {
    cy.get(':nth-child(1) > .css-bip5xf > .css-1dsezww')
});

Cypress.Commands.add('fieldAkcijosNaujienos02', () => {
    cy.get(':nth-child(2) > .css-bip5xf > .css-1dsezww')
});

Cypress.Commands.add('fieldAkcijosNaujienos03', () => {
    cy.get(':nth-child(3) > .css-bip5xf > .css-1dsezww')
});

Cypress.Commands.add('fieldAkcijosNaujienos04', () => {
    cy.get(':nth-child(4) > .css-bip5xf > .css-1dsezww')
});

Cypress.Commands.add('fieldAkcijosNaujienos05', () => {
    cy.get(':nth-child(5) > .css-bip5xf > .css-1dsezww')
});

Cypress.Commands.add('fieldAkcijosNaujienos06', () => {
    cy.get(':nth-child(6) > .css-bip5xf > .css-1dsezww')
});

Cypress.Commands.add('clickOnPaslaugosPrekesFromHamburger', () => {
    cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbPaslaugosPrekes', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('divPrekesPaslaugos', () => {
    cy.get('.MuiToggleButtonGroup-root')
});

Cypress.Commands.add('clickOnKreditaiKuponaiFromHamburger', () => {
    cy.get(':nth-child(6) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbKreditaiKuponai', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('ValueAndPriceKreditaiKuponai', () => {
    cy.get('div[class="MuiGrid-root MuiGrid-container css-1b1jvye"] > div')
});

Cypress.Commands.add('buttonKreditaiKuponai', () => {
    cy.get('div[class="MuiGrid-root MuiGrid-container css-1cn3yto"] button')
});

Cypress.Commands.add('clickOnPriemimoSkyriaiFromHamburger', () => {
    cy.get(':nth-child(7) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('pauliniLocationsOfPriemimoSkyrius', () => {
    cy.get('.MuiPaper-root')
});

// Cypress.Commands.add('storeCityLocationsOfPriemimoSkyrius', () => {
//     cy.get('.MuiPaper-root .MuiBox-root > p')
// });

// Cypress.Commands.add('storeCityLocationsOfPriemimoSkyrius', () => {
//     cy.contains('.MuiPaper-root')
// });

Cypress.Commands.add('olBreadcrumbPriemimoSkyriai', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('storeAdressOfPriemimoSkyriai', () => {
    cy.get('div[class="MuiBox-root css-0"] p')
});

Cypress.Commands.add('clickOnApieMusFromHamburger', () => {
    cy.get(':nth-child(9) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbApieMus', () => {
    cy.get('.MuiBreadcrumbs-ol > li')
});

Cypress.Commands.add('descriptionApieMus', () => {
    cy.get('.ql-editor')
});

Cypress.Commands.add('clickOnPasiekimaiFromHamburger', () => {
    cy.get(':nth-child(10) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbPasiekimai', () => {
    cy.get('.MuiBreadcrumbs-ol');
});

Cypress.Commands.add('collectionOfAchievements', () => {
    cy.get('.MuiList-root + p')
});

Cypress.Commands.add('clickOnPartneriaiFromHamburger', () => {
    cy.get(':nth-child(11) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbPartneriai', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('partnerOfPaulini', () => {
    cy.get('.MuiGrid-root > .css-12vr1au')
});

Cypress.Commands.add('clickOnKlauskiteFromHamburger', () => {
    cy.get(':nth-child(13) > .MuiListItemText-root > .MuiTypography-root').click()
});

Cypress.Commands.add('olBreadcrumbKlauskite', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('cliclOnTaisyklesFromHamburger', () => {
    cy.get(':nth-child(14) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbTaisykles', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('ruleListNameOfTaisykles', () => {
    cy.get('div[class="MuiGrid-root css-xhcsqv"]')
});

Cypress.Commands.add('clickOnPrivatumoPolitika', () => {
    cy.get(':nth-child(15) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbPrivatumoPolitika', () => {
    cy.get('.MuiBreadcrumbs-ol > li')
});

Cypress.Commands.add('ruleListNameOfPrivatumoPolitika', () => {
    cy.get('.MuiGrid-root > > h2')
});

Cypress.Commands.add('clikOnUzsakymuIstorijaFromHamburger', () => {
    cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
});

Cypress.Commands.add('olBreadcrumbUsakymuIstorija', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('clickOnJusuKrepselisFromHamburgerMenu', () => {
    cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbJusuKrepselis', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('clickOPaskyrosNustatymaiFromHamburgerMenu', () => {
    cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root').click();
});

Cypress.Commands.add('olBreadcrumbPaskyrosNustatymai', () => {
    cy.get('.MuiBreadcrumbs-ol')
});

Cypress.Commands.add('', () => {});



