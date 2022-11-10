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
    })
})