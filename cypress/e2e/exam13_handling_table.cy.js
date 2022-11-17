describe('Handle Tables',()=>{
    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/");
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()

        // customers --> customers
        cy.get("#menu-customer>a").click() // customers main menu
        cy.get("#collapse-5>li:first-child").click()// customers sub/child item


    })
    it.skip('check number of rows and columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get(
          "table[class='table table-bordered table-hover']>thead>tr>td"
        ).should("have.length", "7");

    })
    it.skip('check cell data from specific row and column',()=>{
        cy.get(
          "table[class='table table-bordered table-hover']>tbody>tr:nth-child(7)>td:nth-child(3)"
        ).contains("pr@yopmail.com");
        cy.get(
          "table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(2)"
        ).contains("!Goran Krezic!");
    })

    it.skip('read all the rows & columns data in the first page',()=>{
      cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows)=>{  //! all rows
          cy.wrap($row).within(()=>{ //! every row
            cy.get("td").each(($col, index, $cols)=>{  //! all columns every row
              cy.log($col.text())
            });
          })
        })
    })
    it.only('pagination',()=>{
      //! find out number of pages
      /* let totalPages;
      cy.get(".col-sm-6.text-end").then((e) => {
        let mytext = e.text(); //! Showing 1 to 10 of (559 Pages)  burdan  559 u almamız gerekiyor
        totalPages = mytext.substring(
          mytext.indexOf("(") + 1,
          mytext.indexOf("Pages") - 1
        ); //! start ve end indexi belittik böylece 559 u aldık
        cy.log("total pages ========>" + totalPages);
      }); */

      let totalPages=5;
      for (let p = 1; p <= totalPages; p++) {
        cy.log("active page =======>" + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows)=>{  //! all rows
          cy.wrap($row).within(()=>{ //! every row
            cy.get('td:nth-child(3)').then((e)=>{  //! all columns every row
              cy.log(e.text())
            });
          })
        })
        cy.get(3000)



      }
        
    })

       
      
     

    
    
    

       
    
})