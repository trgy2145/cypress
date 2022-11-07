/// <reference types = "Cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

context("Selector",()=>{
    
    const text = "nutella";
    const date = "10 Kasım 2022 Pazartesi";
    const from = "DİYARBAKIR";
    const to = "İZMİR";
    it.skip("select",()=>{
        cy.visit("https://www.amazon.de/");
        cy.get("input#twotabsearchtextbox").type(text);
        cy.get("input#nav-search-submit-button").click();
        
        
    })
    it("ranorex",()=>{
        cy.visit("https://www.ozdiyarbakir.com.tr/");
        cy.wait(10000);
        cy.xpath('//input[@id="tbTarih_dateInput"]').type(date);
        cy.xpath("//div[@id='ddlKalkis_chosen']").type(from);
        cy.xpath("//div[@id='ddlVaris_chosen']").type(to);
        cy.xpath("//img[@id='rbDevamEt']").click();
        cy.xpath("//span[text()='10 Kasım 2022 Salı']").should(
          "include.text",
          "10 Kasım 2022 Salı"
        );

    })
})