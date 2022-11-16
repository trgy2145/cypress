describe('Handle Tables',()=>{
    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/");
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()

        // customers --> customers
        cy.get("#menu-customer>a").click() // customers main menu
        cy.get("#collapse-5>li:first-child").click()// customers sub/child item


    })
    it.only('check number of rows and columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get(
          "table[class='table table-bordered table-hover']>thead>tr>td"
        ).should("have.length", "7");

    })
    it('check cell data from specific row and column',()=>{
        cy.get(
          "table[class='table table-bordered table-hover']>tbody>tr:nth-child(7)>td:nth-child(3)"
        ).contains("pr@yopmail.com");
        cy.get(
          "table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(2)"
        ).contains("!Goran Krezic!");
    })
})