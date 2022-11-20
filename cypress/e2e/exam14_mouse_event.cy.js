import 'cypress-iframe'
import "@4tw/cypress-drag-drop";

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

    it("Right click event",()=>{
         cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
        //! method one
       
       /*  cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get(".context-menu-icon-copy > span").should("be.visible") */

        //! method two

        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-icon-copy > span").should("be.visible")

    })
    it("double click",()=>{
      cy.visit(
        "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
      );
      cy.frameLoaded("#iframeResult"); //! just load the frame

      //! method one
      /* cy.iframe("#iframeResult")
        .find("button[ondblclick='myFunction()']")
        .trigger("dblclick");
      cy.iframe("#iframeResult")
        .find("#field2")
        .should("have.value", "Hello World!"); */

      //! method two
      cy.iframe("#iframeResult")
        .find("button[ondblclick='myFunction()']")
        .dblclick()
      cy.iframe("#iframeResult")
        .find("#field2")
        .should("have.value", "Hello World!");
    })
    it.only('Drag an Drop  using plugin',()=>{
        //! npm den plugin indir
        cy.visit(
          "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
        );
        cy.get("#box6").should('be.visible') 
        cy.get("#box106").should('be.visible') 
        cy.get(3000)
        cy.get("#box6").drag("#box106",{force:true}) 


    })
})