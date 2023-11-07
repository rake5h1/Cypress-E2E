
describe('React Test', () => {


    it('Should Test React App', () => {


        cy.visit(Cypress.env('URL'))
        cy.get('h1#getting-started-with-create-react-app').should('be.visible').and('contain', 'Getting Started with Create React App')
        cy.get('div.container-lg a').eq(0).should('have.attr', 'href')
        cy.wait(5000)
    })

})