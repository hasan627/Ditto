/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();
it('Login', function(){
    cy.visit('/login')
    cy.title().should('eq', 'Ditto')
    loginpage.UserName().type('hasanuzzaman627@gmail.com')
    loginpage.UserPassword().type('Ditto@123')
    loginpage.ClickLogin()
    cy.contains('.offer-head', 'DittoBalance').should('be.visible')
    cy.log('Login Successfully')
})