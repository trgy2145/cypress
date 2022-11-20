describe("Fixtures", () => {
  /* it("fixture1", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture("example.json").then((data) => {
      cy.get("input[placeholder='Username']").type(data.name);
      cy.get("input[placeholder='Password']").type(data.pass);
      cy.get("button[type='submit']").click();
      cy.wait(5000);
      cy.get(":nth-child(2) > .oxd-main-menu-item").click();
      cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
        "have.text",
        data.expected
      );
    });
  }); */

  //! by using hook ,take the data
  let userData;
  before(() => {
    cy.fixture("example.json").then((data) => {
      userData = data;
    });
    it("fixtures2", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      cy.get("input[placeholder='Username']").type(userData.name);
      cy.get("input[placeholder='Password']").type(userData.pass);
      cy.get("button[type='submit']").click();
      cy.wait(5000);
      cy.get(":nth-child(2) > .oxd-main-menu-item").click();
      cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
        "have.text",
        userData.expected
      );
    });
  });
});
