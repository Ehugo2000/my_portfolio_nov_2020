describe("user can see content of CV", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.get("#cv-tab").click()
    })

    it(("displays the header"), () => {
        cy.get("#cv-header").should("contain", "Curriculum vitae")

    })

    it(("displays the h3 work experience"), () => {
        cy.get("#work-experience").should("contain", "Work Experience")

    })

    it(("displays work experience"), () => {
        cy.get("#work-experience").should("contain", "Eckenstam AB.")
        .and("contain", "Carlsquare, financial analyst.")
        .and("contain", "Pig farm & Horse ranch, farmhand.")

    })

    it(("displays education"), () => {
        cy.get("#education").should("contain", "Craft Academy, Fullstack developer.")
        .and("contain", "Stockholm School of Economics, Master in Economics and Business.")
      
    })

    it(("displays Computer literacy"), () => {
        cy.get("#Computer-literacy").should("contain", "HTML")
 
    })

  
})