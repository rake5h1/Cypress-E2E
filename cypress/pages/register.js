
export class Register {


    weblocaters = {

        firstName: "input[name='username']",
        lastName: 'input[name="password"]',
        loginButton: 'button[type="submit"]'

    }

    enterUserName(name) {

        cy.visit(Cypress.env('URL'))
        cy.get(this.weblocaters.firstName).should('be.visible').type(name)
        cy.wait(5000)

    }
    enterLastName(name) {

        cy.get(this.weblocaters.lastName).should('be.visible').type(name)
        cy.wait(5000)
    }
    clickLogin(name) {
        cy.get(this.weblocaters.loginButton).should('be.visible')
            .and('be.enabled')
            .click()
        cy.wait(5000)
    }


}

