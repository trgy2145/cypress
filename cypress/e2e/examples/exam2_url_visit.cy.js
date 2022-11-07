/// <reference types = "Cypress"/>
context("first test",()=>{
    it("Visit",()=>{
        cy.visit(Cypress.config("baseUrl"));
    })
    it("url verify",()=>{
        cy.url().should("include",Cypress.config("baseUrl"));
  
    })
     it("protokol",()=>{
        cy.location("protocol").should("eq","https:")
  
    })
})