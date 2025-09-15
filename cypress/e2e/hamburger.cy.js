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
      cy.clickOnHamburgerMenuIcon();
    });
    it('TC 03.01. - Registration is possible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Registracija";
      cy.clickHamburgerMenuItem("Registracija");
      cy.checkUrlOfPage("/registracija");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
      cy.shouldSeeField("firstName").should("be.visible");
      cy.shouldSeeField("lastName").should("be.visible");
      cy.shouldSeeField("emailAddress").should("be.visible");
      cy.shouldSeeField("mobileNumber").should("be.visible");
      cy.shouldSeeField("gender").should("have.value", "Unspecified");
      cy.shouldSeeField("birthDate").should("be.visible");
      cy.shouldSeeField("password").should("be.visible");
      cy.shouldSeeField("retypePsw").should("be.visible");
      cy.shouldSeeRegistrationOption("Noriu gauti ypatingus pasiūlymus").should(
        "be.visible"
      );
      cy.contains("Sutikti su ").should("be.visible");
      cy.contains("taisyklėmis").should("be.visible");
      cy.contains("PATVIRTINTI REGISTRACIJĄ").should("be.visible");
    });

    it('TC 03.02. - The "AKCIJOS IR NAUJIENOS" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Akcijos ir naujienos";
      cy.clickHamburgerMenuItem("Akcijos ir naujienos");
      cy.checkUrlOfPage("/akcijos-ir-naujienos");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
      cy.shouldSeePromoImage("BALANDIS - ŠVAROS MĖNUO!");
      cy.shouldSeePromoImage("TAPK PAULINI DRAUGU!");
      cy.shouldSeePromoImage("-50 % ATIDARYMO PROGA");
      cy.shouldSeePromoImage("SPECIALUS PASIŪLYMAS");
      cy.shouldSeePromoImage("Kupono aktyvavimas");
      cy.shouldSeePromoImage('KONKURSAS "AKTYVI VASARA"');
    });

    // it('TC 03.03. - The "PASLAUGOS IR PREKĖS" page is accessible from the "hamburger" menu', () => {
    //   const expectedBreadcrumbText = "Prekės ir paslaugos";
    //   // cy.contains('Paslaugos ir prekės').debug();

    //   // cy.get('ul').contains('Paslaugos ir prekės').click({ force: true });

    //   cy.clickHamburgerMenuItem("Paslaugos ir prekės");

    //   cy.checkUrlOfPage("/paieska");
    //         cy.getBreadcrumbItems().should("have.length.at.least", 2);
    //   cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
    //   cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
    //   cy.clickOnPaslaugosPrekesFromHamburger();
    //   cy.olBreadcrumbPaslaugosPrekes().contains("PAULINI").should("be.visible");
    //   cy.olBreadcrumbPaslaugosPrekes()
    //     .contains("Prekės ir paslaugos")
    //     .should("be.visible");
    //   cy.divPrekesPaslaugos().contains("Prekės").should("be.visible");
    //   cy.divPrekesPaslaugos().contains("Paslaugos").should("be.visible");
    // });

    it.only('TC 03.04. - The "KREDITAI IR KUPONAI" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Kreditai ir kuponai";
      cy.clickHamburgerMenuItem("Kreditai ir kuponai");
      cy.checkUrlOfPage("/kreditai-ir-kuponai");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems().last().should("contain.text", expectedBreadcrumbText);
      cy.shouldSeeValues(['65 Kreditai', '50.00 €']);
      cy.shouldSeeValues(['130 Kreditų', '100.00 €']);
      cy.shouldSeeValues(['195 Kreditai', '150.00 €']);
      cy.buttonApmokėtiKreditaiKuponai().contains("APMOKĖTI").should("be.visible");
    });

    // it.only('TC 03.05. - The "PRIĖMIMO SKYRIAI" page is accessible from the "hamburger" menu', () => {
    //   cy.clickHamburgerMenuItem("Registracija");
    //   cy.olBreadcrumbPriemimoSkyriai().contains('PAULINI').should('exist');
    //   cy.olBreadcrumbPriemimoSkyriai().contains('Priėmimo skyriai').should('be.visible');
    //   cy.contains('PUNKTAS').should('have.text', 'PUNKTAS')
    // cy.get('p :nth-child(2) .MuiBox-root .MuiTypography-root .MuiTypography-body1').should('have.text', 'PUNKTAS');
    // cy.get('.css-1f3mmie > .MuiTypography-root').contains('PUNKTAS').should('be.visible');

    // cy.pauliniLocationsOfPriemimoSkyrius().contains('PUNKTAS').should('be.visible');
    // cy.pauliniLocationsOfPriemimoSkyrius().should('have.text', 'PUNKTAS');
    // cy.pauliniLocationsOfPriemimoSkyrius().eq(1).contains('MIESTAS').should('be.visible');
    // cy.pauliniLocationsOfPriemimoSkyrius().eq(2).contains('Vievis').should('be.visible');
    // cy.storeCityLocationsOfPriemimoSkyrius().eq(1).contains("Vilniaus g. 44").should("be.visible");
  });

  // it.only('TC 03.06. - The "APIE MUS" page is accessible from the "hamburger" menu', () => {
  //   cy.clickHamburgerMenuItem("Registracija");
  //   cy.olBreadcrumbApieMus().eq(0).contains("PAULINI").should("be.visible");
  //   cy.olBreadcrumbApieMus().eq(2).contains("Apie mus").should("be.visible");
  //   cy.descriptionApieMus().eq(0).contains("Mūsų Misija").should("be.visible");
  // });

  // it.only('TC 03.07. - The "PASIEKIMAI" page is accessible from the "hamburger" menu', () => {
  //   cy.clickOnPasiekimaiFromHamburger();
  //   cy.olBreadcrumbPasiekimai().contains("PAULINI").should("be.visible");
  //   cy.olBreadcrumbPasiekimai().contains("Pasiekimai").should("be.visible");
  // });

  it('TC 03.08. - The "PARTNERIAI" page is accessible from the "hamburger" menu', () => {
    cy.clickOnPartneriaiFromHamburger();
    cy.olBreadcrumbPartneriai().contains("PAULINI").should("be.visible");
    cy.olBreadcrumbPartneriai().contains("Partneriai").should("be.visible");
    cy.partnerOfPaulini().eq(0).should("have.attr", "alt", "LINOS ARTELĖ");
    cy.partnerOfPaulini()
      .eq(1)
      .should("have.attr", "alt", 'Futbolo klubas "VILTIS"');
    cy.partnerOfPaulini().eq(2).should("have.attr", "alt", "Givertag");
    cy.partnerOfPaulini().eq(3).should("have.attr", "alt", "SUITSUPPLY");
  });

  it('TC 03.09. - The "KLAUSKITE?" page is accessible from the "hamburger" menu', () => {
    cy.clickOnKlauskiteFromHamburger();
    cy.olBreadcrumbKlauskite().contains("PAULINI").should("be.visible");
    cy.olBreadcrumbKlauskite()
      .contains("Turite klausimų?")
      .should("be.visible");
  });

  it('TC 03.10. - The "TAISYKLĖS" page is accessible from the "hamburger" menu', () => {
    cy.cliclOnTaisyklesFromHamburger();
    cy.olBreadcrumbTaisykles().contains("PAULINI").should("be.visible");
    cy.olBreadcrumbTaisykles().contains("Taisyklės").should("be.visible");
    cy.ruleListNameOfTaisykles()
      .contains("DRABUŽIŲ VALYMO")
      .should("be.visible");
  });

  it('TC 03.11. - The "PRIVATUMO POLITIKA" page is accessible from the "hamburger" menu', () => {
    cy.clickOnPrivatumoPolitika();
    cy.olBreadcrumbPrivatumoPolitika()
      .eq(0)
      .contains("PAULINI")
      .should("be.visible");
    cy.olBreadcrumbPrivatumoPolitika()
      .eq(2)
      .contains("Privatumo politika")
      .should("be.visible");
    cy.ruleListNameOfPrivatumoPolitika()
      .contains("PRIVATUMO POLITIKA")
      .should("be.visible");
  });
});
