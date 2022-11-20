import "cypress-file-upload";

describe("File Upload", () => {
  //! önce plugin yükle
  it.only("Single File upload", () => {
    cy.visit("the-internet.herokuapp.com/upload");
    //! attach direk fixtures klasöründe bu dosyayı arar
    cy.get("#file-upload").attachFile("kelimeler.txt");
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it("File upload--Rename", () => {
    cy.visit("the-internet.herokuapp.com/upload");
    //! yeniden isimlendirdik
    cy.get("#file-upload").attachFile({
      filePath: "kelimeler.txt",
      fileName: "mywords.txt",
    });
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it("File upload drag and drop", () => {
    cy.visit("the-internet.herokuapp.com/upload");
    cy.get("drag-drop-upload").attachFile("kelimeler.txt", {
      subjectType: "drag-n-drop",
    });
    cy.wait(3000);
    cy.get("drag-drop-upload > .dz-details > .dz-filename > span").contains(
      "kelimeler.txt"
    );
  });
  it("Multiple Files upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["kelimeler.txt", "selenium.txt"]);
    cy.wait(3000);
    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected"
    );
  });
  it.only("File upload shadow Dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.html"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "kelimeler.txt"
    ); //! include ile bu elementi yakaladık
    cy.get(5000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "kelimeler.txt"
    );
  });
});
