/// <reference types ="Cypress"/>

describe("Alerts", () => {
  it.skip("Js Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.wait(2000);
    // cy.get("#accept-choices").click();
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });

    // alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
  // js confirm "ok" or "cancel"
  it.skip("Js Alert ok button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.wait(2000);
    // cy.get("#accept-choices").click();
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    //! alert window automatically closed by using ok button-default
    cy.get("#result").should("have.text", "You clicked: Ok");
  });
  it.skip("Js Alert cancel button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.wait(2000);
    //! cy.get("#accept-choices").click();
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); //! alert window automatically closed by using cansel button-default
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("Js promp alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    //! automatically close prompted alert -it will use ok button- by default
    cy.on("window:prompt", () => false); //  cancel yapmak istersek "you clicked: null" asagı koda ekle
    cy.get("#result").should("have.text", "You clicked: welcome");
  });
});
