/// <reference types='cypress' />

describe("TS 02. From main page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt");
    cy.wait(1000);
    cy.acceptCookies();
  });

  it('TC 02.01. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from main page', () => {
    const expectedBreadcrumbText = "Priėmimo skyriai";
    cy.clickNavLink("Priėmimo skyriai");
    cy.checkUrlOfPage("/priemimo-skyriai");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });

  it('TC 02.02. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from main page', () => {
    const expectedBreadcrumbText = "Akcijos ir naujienos";
    cy.clickNavLink("Akcijos ir naujienos");
    cy.checkUrlOfPage("/akcijos-ir-naujienos");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });

  it('TC 02.03. - Page "APIE MUS" is visible and accessible from main page', () => {
    const expectedBreadcrumbText = "Apie mus";
    cy.clickNavLink("Apie mus");
    cy.checkUrlOfPage("/apie-mus");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });
});

describe("TS 02. From PRIEMIMO SKYRIAI page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/priemimo-skyriai");
    cy.acceptCookies();
  });
  it('TC 02.04. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {
    const expectedBreadcrumbText = "Akcijos ir naujienos";
    cy.clickNavLink("Akcijos ir naujienos");
    cy.checkUrlOfPage("/akcijos-ir-naujienos");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });
  it('TC 02.05. - Page "APIE MUS" is visible and accessible from "PRIĖMIMO SKYRIAI" page', () => {
    const expectedBreadcrumbText = "Apie mus";
    cy.clickNavLink("Apie mus");
    cy.checkUrlOfPage("/apie-mus");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });
});

describe("TC 02. From AKCIJOS IR NAUJIENOS page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/akcijos-ir-naujienos");
    cy.acceptCookies();
  });

  it('TC 02.06. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {
    const expectedBreadcrumbText = "Priėmimo skyriai";
    cy.clickNavLink("Priėmimo skyriai");
    cy.checkUrlOfPage("/priemimo-skyriai");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });
  it('TC 02.07. - Page "APIE MUS" is visible and accessible from "AKCIJOS IR NAUJIENOS" page', () => {
    const expectedBreadcrumbText = "Apie mus";
    cy.clickNavLink("Apie mus");  
    cy.checkUrlOfPage("/apie-mus");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });
});

describe("ats 03. From APIE MUS page", () => {
  beforeEach(() => {
    cy.visit("https://paulini.lt/apie-mus");
    cy.acceptCookies();
  });

  it('TC 02.08. - Page "PRIĖMIMO SKYRIAI" is visible and accessible from "APIE MUS" page', () => {
    const expectedBreadcrumbText = "Priėmimo skyriai";
    cy.clickNavLink("Priėmimo skyriai");
    cy.checkUrlOfPage("/priemimo-skyriai");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });

  it('TC 02.09. - Page "AKCIJOS IR NAUJIENOS" is visible and accessible from "APIE MUS" page', () => {
    const expectedBreadcrumbText = "Akcijos ir naujienos";
    cy.clickNavLink("Akcijos ir naujienos");
    cy.checkUrlOfPage("/akcijos-ir-naujienos");
    cy.getBreadcrumbItems().should("have.length.at.least", 2);
    cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
  });
});
