/// <reference types='cypress' />
// / <reference types="cypress-xpath" />
// require ( 'cypress-xpath' );

// describe("TS 02. From main page", () => {
//   beforeEach(() => {
//     cy.visit("https://paulini.lt");
//     cy.acceptCookies();
//   });
//     it('TC 02.01. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from main page', () => {
//       cy.get('.MuiTypography-root .MuiTypography-body1');
//       // cy.get('');
//   cy.get('');
//   });
//   it('TC 02.02. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from main page', () => {});
//   it('TC 02.03. - Page "APIE MUS" is visible and accessible from main page', () => {});
// });

describe("ats 03. From PRIEMIMO SKYRIAI page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/priemimo-skyriai");
    cy.acceptCookies();
  });
  it('TC 02.04. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {
    // cy.get('p[class="MuiGrid-container MuiLink-underlineNone]').eq(1).contains('Akcijos ir naujienos');
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiLink-underlineNone > p').eq(1).contains("Akcijos ir naujienos");
    cy.get('.MuiTypography-inherit > .MuiTypography-root')
  });
  // it('TC 02.05. - Page "APIE MUS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {});
});

// describe("ats 03. From AKCIJOS IR NAUJIENOS page", () => {
//   beforeEach(() => {
//     cy.visit("https://paulini.lt/akcijos-ir-naujienos");
//     cy.acceptCookies();
//   });

//   it('TC 02.06. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {});
//   it('TC 02.07. - Page "APIE MUS" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {});
// });

// describe("ats 03. From APIE MUS page", () => {
//   beforeEach(() => {
//     cy.visit("https://paulini.lt/apie-mus");
//     cy.acceptCookies();
//   });
//   it('TC 02.08. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "APIE MUS" page', () => {});
//   it('TC 02.09. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "APIE MUS" page', () => {});
// });
