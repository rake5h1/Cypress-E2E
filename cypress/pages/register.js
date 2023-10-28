
export class Register {


    weblocaters = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',


    }

    enterUserName (name) {

        cy.visit(Cypress.env('URL'))
        cy.get(this.weblocaters.firstName).should('be.visible').type(Firstnamename)

    }
    enterLastName (name) {

        cy.visit(Cypress.env('URL'))
        cy.get(this.weblocaters.lastName).should('be.visible').type(Lastname)

    }


}

