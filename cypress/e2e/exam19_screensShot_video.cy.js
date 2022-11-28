describe('mySuite',()=>{
    it('SecreesShots',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage") // we have gave a name

        cy.wait(3000)
        cy.get("img[title='Your Store'").screenshot("logo")
        
    })
})