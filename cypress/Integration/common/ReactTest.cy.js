import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps'
import  Register  from '../../pages/Login.js'
import data from '../../fixtures/data.json'

let login=new Register();

Given('When I Visit Site', () => {

    cy.visit(Cypress.env('URL'))
})

When('I am on Page', () => {

    cy.get('img[alt = "company-branding"]').should('be.visible')
})

Then('Enter Username', () => {

    login.enterUserName(data.Firstname)
})

And('Enter Lastname', () => {

    login.enterLastName(data.Lastname)
})

And('Click Submit', () => {

    login.clickLogin(data.Firstname)
    cy.wait(5000)
})