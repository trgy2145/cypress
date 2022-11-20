describe("Mouse Operations",()=>{
    it("MouseHover",()=>{
        cy.visit("https://demo.opencart.com/");
          cy.get(
            "body > main:nth-child(6) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
          ).should("not.be.visible");
        cy.get(
          ".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']"
        ).trigger('mouseover').click()
        cy.get(
          "body > main:nth-child(6) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
        ).should('be.visible')
    })
})