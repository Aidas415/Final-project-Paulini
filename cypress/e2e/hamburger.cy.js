/// <reference types='cypress' />

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
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
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
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.shouldSeePromoImage("BALANDIS - ŠVAROS MĖNUO!");
      cy.shouldSeePromoImage("TAPK PAULINI DRAUGU!");
      cy.shouldSeePromoImage("-50 % ATIDARYMO PROGA");
      cy.shouldSeePromoImage("SPECIALUS PASIŪLYMAS");
      cy.shouldSeePromoImage("Kupono aktyvavimas");
      cy.shouldSeePromoImage('KONKURSAS "AKTYVI VASARA"');
    });

    it('TC 03.03. - The "PASLAUGOS IR PREKĖS" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Prekės ir paslaugos";
      cy.clickHamburgerMenuItem("Paslaugos ir prekės");
      cy.checkUrlOfPage("/paieska");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.checkProductListVisible();
    });

    it('TC 03.04. - The "KREDITAI IR KUPONAI" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Kreditai ir kuponai";
      cy.clickHamburgerMenuItem("Kreditai ir kuponai");
      cy.checkUrlOfPage("/kreditai-ir-kuponai");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.shouldSeeValues(["65 Kreditai", "50.00 €"]);
      cy.shouldSeeValues(["130 Kreditų", "100.00 €"]);
      cy.shouldSeeValues(["195 Kreditai", "150.00 €"]);
      cy.buttonApmokėtiKreditaiKuponai()
        .contains("APMOKĖTI")
        .should("be.visible");
    });

    it('TC 03.05. - The "PRIĖMIMO SKYRIAI" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Priėmimo skyriai";
      cy.clickHamburgerMenuItem("Priėmimo skyriai");
      cy.checkUrlOfPage("/priemimo-skyriai");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
    });

    it('TC 03.06. - The "APIE MUS" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Apie mus";
      cy.clickHamburgerMenuItem("Apie mus");
      cy.checkUrlOfPage("/apie-mus");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.getAboutUsSection("Mūsų Misija").should(
        "contain.text",
        "PAULINI – tai daugiau nei drabužių valykla"
      );
      cy.getAboutUsSection("Kodėl PAULINI?").should(
        "contain.text",
        "aukščiausios kokybės valymo medžiagas"
      );
      cy.getAboutUsSection("Mūsų Bendruomenė").should(
        "contain.text",
        "30% nuolaida"
      );
      cy.getAboutUsSection("Aplinkos Tvarumas").should(
        "contain.text",
        "ekologiškas valymo medžiagas"
      );
      cy.getAboutUsSection("Mūsų paslaugos").should(
        "contain.text",
        "drabužių ir namų apyvokos audinių valymo paslaugas"
      );
    });

    it('TC 03.07. - The "PASIEKIMAI" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Pasiekimai";
      cy.clickHamburgerMenuItem("Pasiekimai");
      cy.checkUrlOfPage("/pasiekimai");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.getBlockByTitle("Metų kartu").should("exist").and("be.visible");
      cy.getBlockByTitle("Išmaniųjų spintų").should("exist").and("be.visible");
      cy.getBlockByTitle("Priėmimo skyriai").should("exist").and("be.visible");
      cy.getBlockByTitle("Draugų").should("exist").and("be.visible");
      cy.getBlockByTitle("Išvalytų drabužių").should("exist").and("be.visible");
    });

    it('TC 03.08. - The "PARTNERIAI" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Partneriai";
      cy.clickHamburgerMenuItem("Partneriai");
      cy.checkUrlOfPage("/partneriai");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.getAllPartnerLogos().each(($img) => {
        cy.wrap($img).scrollIntoView().should("be.visible");
      });
    });

    it('TC 03.09. - The "KLAUSKITE?" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Turite klausimų?";
      cy.clickHamburgerMenuItem("Klauskite?");
      cy.checkUrlOfPage("/pagalba");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.checkContactFormVisible();
      cy.contains("Siųsti pranešimą")
        .should("be.visible")
        .and("have.attr", "disabled");
    });

    it('TC 03.10. - The "TAISYKLĖS" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Taisyklės";
      cy.clickHamburgerMenuItem("Taisyklės");
      cy.checkUrlOfPage("/taisykles");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.contains(
        "DRABUŽIŲ VALYMO IR SKALBIMO PASLAUGŲ NAUDOJIMOSI TAISYKLĖS"
      ).should("be.visible");
    });

    it('TC 03.11. - The "PRIVATUMO POLITIKA" page is accessible from the "hamburger" menu', () => {
      const expectedBreadcrumbText = "Privatumo politika";
      cy.clickHamburgerMenuItem("Privatumo politika");
      cy.checkUrlOfPage("/privatumo-politika");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.contains("PRIVATUMO POLITIKA").should("be.visible");
    });
  });
  describe("Signed-in user", () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit("https://paulini.lt");
      cy.wait(1000);
      cy.acceptCookies();
      cy.getLoginInputField().type(Cypress.env("USER_EMAIL"));
      cy.getPasswordInputField().type(Cypress.env("USER_PASSWORD"));
      cy.getLoginButton()
        .should("be.visible")
        .should("not.be.disabled")
        .click();
    });
    it('TC 03.12. - The "UŽSAKYMŲ ISTORIJA" page is accessible from the "hamburger" menu as a logged-in user', () => {
      const expectedBreadcrumbText = "Užsakymų istorija";
      cy.wait(4000);
      cy.clickHamburgerMenuItem("Užsakymų istorija");
      cy.checkUrlOfPage("/uzsakymu-istorija");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
    });

    it('TC 03.13. - The "JŪSŲ KREPŠELIS" page is accessible from the "hamburger" menu as a logged-in user', () => {
      const expectedBreadcrumbText = "Krepšelis";
      cy.clickHamburgerMenuItem("Jūsų krepšelis");
      cy.wait(4000);
      cy.checkUrlOfPage("/krepselis");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
      cy.contains("krepšelis tuščias").should("be.visible");
    });

    it('TC 03.14. - The "PASKYROS NUSTATYMAI" page is accessible from the "hamburger" menu as a logged-in user', () => {
      const expectedBreadcrumbText = "Paskyros nustatymai";
      cy.wait(4000);
      cy.clickHamburgerMenuItem("Paskyros nustatymai");
      cy.checkUrlOfPage("/paskyros-nustatymai");
      cy.getBreadcrumbItems().should("have.length.at.least", 2);
      cy.getBreadcrumbItems().first().should("contain.text", "PAULINI");
      cy.getBreadcrumbItems()
        .last()
        .should("contain.text", expectedBreadcrumbText);
    });
  });
});
