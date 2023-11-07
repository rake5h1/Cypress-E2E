import { Given, Then } from 'cypress-cucumber-preprocessor/steps


Given('When I Visit Site', () => {

    cy.visit('/')
})

Then(' I should find text', () => {

    cy.get('h1#getting-started-with-create-react-app').should('be.visible')
    cy.wait(5000)
})