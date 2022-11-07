/// <reference types = "Cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
context("Go and Forward",()=>{
    const url1 = "https://www.google.com/";
    const url2 = "https://www.amazon.de/";
    https: it("go back", () => {
        cy.visit("url1");
        cy.wait(2000);
        cy.visit("url2")
        cy.go("back")// (-1)
        cy.url().should("include", "google");
    });
    it("forward", () => {
        cy.wait(2000);
        cy.visit(url2);//(1)
        cy.url().should("include", "de");
     
     });
     it("reload",()=>{
        cy.pause();
        cy.reload();
     });
})