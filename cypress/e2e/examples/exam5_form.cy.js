
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
context("Selector", () => {

  it.skip("select", () => {
    cy.visit("https://www.amazon.de/");
    cy.get("input#twotabsearchtextbox").type(text);
    cy.get("input#nav-search-submit-button").click();
  });

});
