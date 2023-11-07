
describe('React Test', () => {


    it('Should Test React App', () => {


        cy.visit(Cypress.env('URL'))
        cy.get('h1#getting-started-with-create-react-app').should('be.visible').and('contain', 'Getting Started with Create React Apps')
        cy.wait(5000)
    })

})