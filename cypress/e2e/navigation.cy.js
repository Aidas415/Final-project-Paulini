/// <reference types='cypress' />
// / <reference types="cypress-xpath" />
// require ( 'cypress-xpath' );

describe("TS 02. From main page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt");
    cy.wait(1000);
    cy.acceptCookies();
  });

  it('TC 02.01. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from main page', () => {
    cy.clickNavLink("Priėmimo skyriai");
    cy.checkUrlOfPage("/priemimo-skyriai");
    cy.checkBreadcrumbOfPage("Priėmimo skyriai");
  });

  it('TC 02.02. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from main page', () => {
    cy.clickNavLink("Akcijos ir naujienos");
    cy.checkUrlOfPage("/akcijos-ir-naujienos");
    cy.checkBreadcrumbOfPage("Akcijos ir naujienos");
  });

  it('TC 02.03. - Page "APIE MUS" is visible and accessible from main page', () => {
    cy.clickNavLink("Apie mus");
    cy.checkUrlOfPage("/apie-mus");
    cy.checkBreadcrumbOfPage("Apie mus");
  });
});

describe("TS 02. From PRIEMIMO SKYRIAI page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/priemimo-skyriai");
    cy.acceptCookies();
  });
  it('TC 02.04. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {
    cy.clickNavLink("Akcijos ir naujienos");
    cy.checkUrlOfPage("/akcijos-ir-naujienos");
    cy.checkBreadcrumbOfPage("Akcijos ir naujienos");
  });
  it('TC 02.05. - Page "APIE MUS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {
    cy.clickNavLink("Apie mus");
    cy.checkUrlOfPage("/apie-mus");
    cy.checkBreadcrumbOfPage("Apie mus");
  });
});

describe("TC 02. From AKCIJOS IR NAUJIENOS page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/akcijos-ir-naujienos");
    cy.acceptCookies();
  });

  it('TC 02.06. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {
    cy.clickNavLink("Priėmimo skyriai");
    cy.checkUrlOfPage("/priemimo-skyriai");
    cy.checkBreadcrumbOfPage("Priėmimo skyriai");
  });
  it('TC 02.07. - Page "APIE MUS" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {
    cy.clickNavLink("Apie mus");
    cy.checkUrlOfPage("/apie-mus");
    cy.checkBreadcrumbOfPage("Apie mus");
  });
});

describe("ats 03. From APIE MUS page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/apie-mus");
    cy.acceptCookies();
  });
  it('TC 02.08. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "APIE MUS" page', () => {
    cy.clickNavLink("Priėmimo skyriai");
    cy.checkUrlOfPage("/priemimo-skyriai");
    cy.checkBreadcrumbOfPage("Priėmimo skyriai");
  });
  it('TC 02.09. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "APIE MUS" page', () => {
    cy.clickNavLink("Akcijos ir naujienos");
    cy.checkUrlOfPage("/akcijos-ir-naujienos");
    cy.checkBreadcrumbOfPage("Akcijos ir naujienos");
  });
});
