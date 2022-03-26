/// <reference types="cypress" />
export class LoginPage{
    UserName(){
        return cy.get(':nth-child(2) > .form-control')
    }
    UserPassword(){
        return cy.get(':nth-child(3) > .form-control')
    }
    ClickLogin(){
        return cy.get('.Login__Log__Btn > .btn').should('be.visible').click()
    }

}