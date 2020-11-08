describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#projects-tab").click();
    })

it("displays first project", () => {
    cy.get("#project-1").within(() => { 
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "BMI Calculator");
        cy.get(".description").should("contain",
        "An application which lets the user type in their height and weight to check BMI.");
    });
})

it("displays second project", () => {
    cy.get("#project-2").within(() => { 
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "FizzBuzz");
        cy.get(".description").should("contain",
        "An application which lets the user to play FizzBuzz.");
    });
})

it("displays third project", () => {
    cy.get("#project-3").within(() => { 
        cy.get(".image").should("exist");
        cy.get(".header").should("contain", "Automated Teller Machine");
        cy.get(".description").should("contain",
        "A back-end application which lets the user to insert and withdraw cash from an ATM.");
    });
});


})