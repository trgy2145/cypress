import "cypress-file-upload";

describe("File Upload", () => {
  //! önce plugin yükle
  it.only("Single File upload", () => {

    cy.visit("the-internet.herokuapp.com/upload")
    //! attach direk fixtures klasöründe bu dosyayı arar
    cy.get("#file-upload").attachFile("kelimeler.txt")
    cy.get("#file-submit").click();
    cy.wait(3000)
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");


  });
  it("File upload--Rename", () => {
     cy.visit("the-internet.herokuapp.com/upload");
     //! yeniden isimlendirdik
     cy.get("#file-upload").attachFile({filePath:"kelimeler.txt",fileName:"mywords.txt"});
     cy.get("#file-submit").click();
     cy.wait(3000);
     cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it("Single File upload", () => {});
  it("Single File upload", () => {});
  it("Single File upload", () => {});
});
