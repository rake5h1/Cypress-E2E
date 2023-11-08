import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('When I Visit Site', () => {

    cy.visit(Cypress.env('URL'))
})

When('I am on Page', () => {

    cy.get('h1#getting-started-with-create-react-app').should('be.visible')

})

Then('wait', () => {
    cy.wait(5000)
})