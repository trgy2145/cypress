/// <reference types ="Cypress"/>

describe("Dropdowns", ()=>{
    it('Dropdowns with select',()=> {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('Italy').should("have.value",'Italy')
        cy.wait(2000)
    })

     it('Dropdowns without select',()=> { // bootstrap tarzı dropdownlar icin
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy') // burda text value degil..
    })
      it("Auto suggest dropdown", () => {
        
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion.title').contains('Delhi University').click() // cıkan tavsiyelerin sayısı bu classla aldık

       
      });
         it("dynamic dropdown", () => {
           cy.visit("https://www.google.org/");
           cy.get("input[name='q']").type("cypress automation");

           cy.wait(2000)
           cy.get("div.wM6W7d>span").should("have.length","11")
           // cy.get("div.wM6W7d>span").contains("cypress automation").click(); 
           cy.get("div.wM6W7d>span").each(($el,index,$list)=>{ // bir üstteki kod ile aynı işi yapar
            if($el.text() ==='cypress automation tutorial'){
                cy.wrap($el).click() //el element demek 
            }
           })

           cy.get("input[name='q'").should(
             "have.value",
             "cypress automation tutorial"
           );
        
        
        });
})