
export default class Register {


    weblocaters = {

        firstName: "input[name='username']",
        lastName: 'input[name="password"]',
        loginButton: 'button[type="submit"]'

    }

    enterUserName(name) {

        cy.visit(Cypress.env('URL'))
        cy.get(this.weblocaters.firstName).should('be.visible').type(name)

    }
    enterLastName(name) {

        cy.get(this.weblocaters.lastName).should('be.visible').type(name)
    }
    clickLogin() {
        cy.get(this.weblocaters.loginButton).should('be.visible')
            .and('be.enabled')
            .click()
    }


}

