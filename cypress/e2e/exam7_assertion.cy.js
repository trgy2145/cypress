/// <reference types = "Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Assertions", () => {
  const url1 = "https://www.automationexercise.com/";
  it.skip("assertion", () => {
    cy.visit(url1);
    /* cy.url().should("contain", "automationexercise.com");
  cy.url().should("include", "automationexercise");
  cy.url().should("eq", "https://www.automationexercise.com/");*/
    // anathor way
    /*
  cy.url()
    .should("contain", "automationexercise.com")
    .should("include", "automationexercise")
    .should("eq", "https://www.automationexercise.com/");*/
    cy.url()
      .should("contain", "automationexercise.com")
      .and("include", "automationexercise")
      .and("not.include", "automatnexercise") // negative assertion
      .and("eq", "https://www.automationexercise.com/");

    cy.title().should("include", "Exercise").and("contain", "Auto");

    cy.get("a > img")
      .should("be.visible") // logo visivble or not
      .and("exist"); // logo exist or not

    cy.xpath("//a").should("have.length", "147"); // number of link
    cy.get("li>a[href='/login']").click();
    cy.wait(2000);
    cy.get("input[name='name']").type("haydar");
    cy.wait(2000);
    cy.get("input[name='name']").should("have.value", "haydar"); // value check
  });
  it("expect BDD and assert TDD", () => {
    cy.visit(url1);
    cy.get("li>a[href='/login']").click();
    cy.get("[data-qa='signup-name']").type("trgyffff");
    cy.get("[data-qa='signup-email']").type("tgvdgdfghytrt@gmail.com");
    cy.get("[data-qa='signup-button']").click();
    cy.get("a > img").should("be.visible").and("exist");

    let expName = "trgfff";
    let expEmail = "tgvdgdfghy@gmail.com";

    cy.get("[data-qa='name']").then((x) => {
      let actName = x.text();

      expect(actName).to.not.equal(expName);
      assert.notEqual(actName, expName);
    });

    cy.get("[data-qa='email']").then((y) => {
      let actEmail = y.text();
      expect(actEmail).to.not.equal(expEmail);
      assert.notEqual(actEmail, expEmail);
    });
  });
});
