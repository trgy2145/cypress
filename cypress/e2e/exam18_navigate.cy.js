describe('MySuite',()=>{
    it('Navigation',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store'); // Home page

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); // cameraspage

        cy.go('back') // =>(-1)
        cy.title().should('eq','Your Store'); // Home page
        cy.go('forward')  // =>(1)
        cy.get("div[id='content'] h2").should('have.text',"Cameras"); // cameraspage


    })
})