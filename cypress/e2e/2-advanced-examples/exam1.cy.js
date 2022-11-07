/// <reference types="cypress" />

context("Control",()=>{
    const s1 = 5;
    const s2 = 10;
    let result;
    it("Sum",()=>{
        result = s1 + s2;
        assert.equal(result,15,"control of the result for sum")
    })

    it("Minus",()=>{
        result=s2-s1;
        assert.isTrue(result===5,"control of the result for minus")
    })
    it("Text control",()=>{
        const text1 = "Cypress io";
        expect(text1).to.have.string("io");
    })
})