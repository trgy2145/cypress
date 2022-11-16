/// <reference types ="Cypress"/>

describe("Tabs", () => {
  it.skip("handle tabs method 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example >a").invoke("removeAttr", "target").click(); // bu attri kaldırdık aynı sayfada acılır
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(3000);
    cy.go("back");
  });
  it("handle tabs method 2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example >a").then((e) => {
      //  yeni sekmede acılan sub domain aldık
      let url = e.prop("href");
      cy.visit(url);
    });
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(3000);
    cy.go("back");
  });
});
