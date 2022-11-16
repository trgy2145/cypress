import "cypress-iframe"; 

describe('Iframe',()=>{
    it('method one',()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)
            iframe.clear().type("merhaba {ctrl+a}")
            cy.get("[aria-label='Bold']").click()
    })
    it('method two- by using custom method',()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.getIframe("#mce_0_ifr").clear().type("hacı naber");
        cy.get("[aria-label='Bold']").click();
    })
    it.only("method three- by using iframe plugin", () => {
      cy.visit("http://the-internet.herokuapp.com/iframe");
      cy.frameLoaded("#mce_0_ifr"); // sadece yukler interaktif değil
      cy.iframe("#mce_0_ifr").clear().type("bu da güzel");
       cy.get("[aria-label='Bold']").click();
    });
})