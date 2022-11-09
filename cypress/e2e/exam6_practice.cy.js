/// <reference types = "cypress-xpath"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Amazon practice", () => {
  it("exam1", () => {
    cy.visit("https://www.amazon.com/");
    cy.wait(10000)
    cy.xpath("//input[@id='nav-bb-search']").type("nutella");
    cy.xpath("//input[@class='nav-bb-button']").click();
    cy.xpath("//span[text()='RESULTS']").contains("RESULTS");
  });
});
