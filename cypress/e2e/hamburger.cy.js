/// <reference types='cypress' />
// / <reference types="cypress-xpath" />
// require ( 'cypress-xpath' );

describe("TS 03. Hamburger Menu", () => {
  
beforeEach(() => {
  cy.visit("https://paulini.lt");
  cy.wait(1000);
  cy.acceptCookies();
});
  describe("User without being signed in", () => {
    beforeEach(() => {
      cy.clickOnHamburgerMenu();
    });
    it('TC 03.01. - Registration is possible from the "hamburger" menu', () => {
      cy.clickOnRegistrationFromHamburger();
      cy.registrationFirstName().should("be.visible");
      cy.registrationLastName().should("be.visible");
      cy.registrationEmail().should("be.visible");
      cy.registrationPhoneNamber().should("be.visible");
      cy.registrationBirthDate().should("be.visible");
      cy.registrationPasword().should("be.visible");
      cy.registrationRetypePassword().should("be.visible");
      cy.registrationNoriuGautiPasiulymus().should("be.visible");
      cy.registrationSutiktiSutaisyklemis().should("be.visible");
      cy.registrationPatvirtinti().should("be.visible");
    });

    it('TC 03.02. - The "AKCIJOS IR NAUJIENOS" page is accessible from the "hamburger" menu', () => {
      cy.clickOnAkcijosNaujienosFromHamburger();
      cy.breadcrumbAkcijosNaujienos().should("be.visible");
      cy.fieldAkcijosNaujienos01().should("be.visible");
      cy.fieldAkcijosNaujienos02().should("be.visible");
      cy.fieldAkcijosNaujienos03().should("be.visible");
      cy.fieldAkcijosNaujienos04().should("be.visible");
      cy.fieldAkcijosNaujienos05().should("be.visible");
      cy.fieldAkcijosNaujienos06().should("be.visible");
    });

    it('TC 03.03. - The "PASLAUGOS IR PREKĖS" page is accessible from the "hamburger" menu', () => {
      cy.clickOnPaslaugosPrekesFromHamburger();
      cy.olBreadcrumbPaslaugosPrekes().contains("PAULINI").should("be.visible");
      cy.olBreadcrumbPaslaugosPrekes().contains("Prekės ir paslaugos").should("be.visible");
      cy.divPrekesPaslaugos().contains("Prekės").should("be.visible");
      cy.divPrekesPaslaugos().contains("Paslaugos").should("be.visible");
    });

    it('TC 03.04. - The "KREDITAI IR KUPONAI" page is accessible from the "hamburger" menu', () => {
      cy.clickOnKreditaiKuponaiFromHamburger();
      cy.olBreadcrumbKreditaiKuponai().contains("PAULINI").should("be.visible");
      cy.olBreadcrumbKreditaiKuponai().contains("Kreditai ir kuponai").should("be.visible");
      cy.ValueAndPriceKreditaiKuponai(0).contains("65 Kreditai").should("be.visible");
      cy.ValueAndPriceKreditaiKuponai(1).contains("50.00 €").should("be.visible");
      cy.ValueAndPriceKreditaiKuponai(2).contains("130 Kreditų").should("be.visible");
      cy.ValueAndPriceKreditaiKuponai(3).contains("100.00 €").should("be.visible");
      cy.ValueAndPriceKreditaiKuponai(4).contains("195 Kreditai").should("be.visible");
      cy.ValueAndPriceKreditaiKuponai(5).contains("150.00 €").should("be.visible");
      cy.buttonKreditaiKuponai().contains("APMOKĖTI").should("be.visible");
    });

    it.only('TC 03.05. - The "PRIĖMIMO SKYRIAI" page is accessible from the "hamburger" menu', () => {
      cy.clickOnPriemimoSkyriaiFromHamburger();
      cy.olBreadcrumbPriemimoSkyriai().contains('PAULINI').should('exist');
      cy.olBreadcrumbPriemimoSkyriai().contains('Priėmimo skyriai').should('be.visible');
      cy.contains('PUNKTAS').should('have.text', 'PUNKTAS')
      // cy.get('p :nth-child(2) .MuiBox-root .MuiTypography-root .MuiTypography-body1').should('have.text', 'PUNKTAS');
      // cy.get('.css-1f3mmie > .MuiTypography-root').contains('PUNKTAS').should('be.visible');
      


      // cy.pauliniLocationsOfPriemimoSkyrius().contains('PUNKTAS').should('be.visible');
      // cy.pauliniLocationsOfPriemimoSkyrius().should('have.text', 'PUNKTAS');
      // cy.pauliniLocationsOfPriemimoSkyrius().eq(1).contains('MIESTAS').should('be.visible');
      // cy.pauliniLocationsOfPriemimoSkyrius().eq(2).contains('Vievis').should('be.visible');
      // cy.storeCityLocationsOfPriemimoSkyrius().eq(1).contains("Vilniaus g. 44").should("be.visible");
    });

    it('TC 03.06. - The "APIE MUS" page is accessible from the "hamburger" menu', () => {
      cy.clickOnApieMusFromHamburger();
      cy.olBreadcrumbApieMus().eq(0).contains("PAULINI").should("be.visible");
      cy.olBreadcrumbApieMus().eq(2).contains("Apie mus").should("be.visible");
      cy.descriptionApieMus().eq(0).contains("Mūsų Misija").should("be.visible");
    });

    it('TC 03.07. - The "PASIEKIMAI" page is accessible from the "hamburger" menu', () => {
      cy.clickOnPasiekimaiFromHamburger();
      cy.olBreadcrumbPasiekimai().contains("PAULINI").should("be.visible");
      cy.olBreadcrumbPasiekimai().contains("Pasiekimai").should("be.visible");
    });

    it('TC 03.08. - The "PARTNERIAI" page is accessible from the "hamburger" menu', () => {
      cy.clickOnPartneriaiFromHamburger();
      cy.olBreadcrumbPartneriai().contains("PAULINI").should("be.visible");
      cy.olBreadcrumbPartneriai().contains("Partneriai").should("be.visible");
      cy.partnerOfPaulini().eq(0).should("have.attr", "alt", "LINOS ARTELĖ");
      cy.partnerOfPaulini().eq(1).should("have.attr", "alt", 'Futbolo klubas "VILTIS"');
      cy.partnerOfPaulini().eq(2).should("have.attr", "alt", "Givertag");
      cy.partnerOfPaulini().eq(3).should("have.attr", "alt", "SUITSUPPLY");
    });

    it('TC 03.09. - The "KLAUSKITE?" page is accessible from the "hamburger" menu', () => {
      cy.clickOnKlauskiteFromHamburger();
      cy.olBreadcrumbKlauskite().contains("PAULINI").should("be.visible");
      cy.olBreadcrumbKlauskite().contains("Turite klausimų?").should("be.visible");
    });

    it('TC 03.10. - The "TAISYKLĖS" page is accessible from the "hamburger" menu', () => {
      cy.cliclOnTaisyklesFromHamburger();
      cy.olBreadcrumbTaisykles().contains("PAULINI").should("be.visible");
      cy.olBreadcrumbTaisykles().contains("Taisyklės").should("be.visible");
      cy.ruleListNameOfTaisykles().contains("DRABUŽIŲ VALYMO").should("be.visible");
    });

    it('TC 03.11. - The "PRIVATUMO POLITIKA" page is accessible from the "hamburger" menu', () => {
      cy.clickOnPrivatumoPolitika();
      cy.olBreadcrumbPrivatumoPolitika().eq(0).contains("PAULINI").should("be.visible");
      cy.olBreadcrumbPrivatumoPolitika().eq(2).contains("Privatumo politika").should("be.visible");
      cy.ruleListNameOfPrivatumoPolitika().contains("PRIVATUMO POLITIKA").should("be.visible");
    });
  });
});
