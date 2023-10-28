
export class Register {


    weblocaters = {

        firstName: '#input-firstname',


    }

    enterUserName (name) {

        cy.visit(Cypress.env('URL'))
        cy.get(this.weblocaters.firstName).should('be.visible').type(name)

    }

}

