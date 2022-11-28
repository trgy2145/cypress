describe('Custom commands',()=>{
    it("handling links",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        //! direckt - without using custom command
        // cy.get("body > div:nth-child(9) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)").click()
        //!using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");

       
        cy.get("div[class='product-name'] h1").should(
          "have.text",
          "Apple MacBook Pro 13-inch"
        );
    })
    it.only('Login App',()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink("Log in")
        cy.loginApp("test@gmail.com","test123")
    })
})