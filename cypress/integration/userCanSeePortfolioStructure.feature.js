describe("Portfolio interface", () =>{              
it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "Hello");
    cy.get("#footer").should("contain", "eh.softwareanddesign@gmail.com");
    cy.get("#hello").should("contain", "Hello World");
    });
});