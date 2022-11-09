/// <reference types ="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Radio button and Check Button", ()=>{
    const url1 = "https://itera-qa.azurewebsites.net/home/automation";
    it("radio button",()=>{
      cy.visit(url1);

      // visibility
      cy.get("input#male").should("be.visible");
      cy.get("input#female").should("be.visible");
      
      // selection radio button
      cy.get("input#male").check().should("be.checked");
      cy.get("input#female").should("not.be.checked");
      cy.wait(3000);
   
    
      

     
     
    })
    it("check button", () => {
      cy.visit(url1);

      // visibility
      /* cy.get("input#monday").should("be.visible");
      

      // selection  single check button
      cy.get("input#monday").check().should("be.checked");

      // uncheck
      cy.get("input#monday").uncheck().should("not.be.checked"); */

      // select all the checkbox
     // cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
     // cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

      // first and last box
      cy.get("input.form-check-input[type='checkbox']")
        .first().check()
        .should("be.checked");
    });
})