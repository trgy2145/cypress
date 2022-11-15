/// <reference types ="Cypress"/>

describe('Alerts',()=>{
    it.skip('Js Alert',()=>{
        cy.visit(
          "https://the-internet.herokuapp.com/javascript_alerts"
        );
        cy.wait(2000)
        // cy.get("#accept-choices").click();
        cy.get("button[onclick='jsAlert()']").click();
        
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })

        // alert window automatically closed by cypress
        cy.get("#result").should(
          "have.text",
          "You successfully clicked an alert"
        );
    })
    // js confirm "ok" or "cancel"
    it("Js Alert", () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
      cy.wait(2000);
      // cy.get("#accept-choices").click();
      cy.get("button[onclick='jsConfirm()']").click();

      cy.on("window:confirm", (t) => {
        expect(t).to.contains("I am a JS Confirm");
      });

      // alert window automatically closed by using ok button-default
      cy.get("#result").should(
        "have.text",
        "You clicked: Ok"
      );
    });
})