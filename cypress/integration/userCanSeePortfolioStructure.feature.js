describe("Portfolio interface", () =>{              
it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", "contact: erik [at] halleryd.se");
    cy.get("#hello").should("contain", "Hello World");
    });
});