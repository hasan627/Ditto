///<reference types="cypress"/>
import { RegistrationPage } from "../pages/registrationpage";

const registrationpage = new RegistrationPage();
it('Registration', function(){
    cy.visit('/registration')
    cy.title().should('eq', 'Ditto')
    registrationpage.Email().type('hasanuzzaman627@gmail.com')
    registrationpage.CountryCodeSelect()
    registrationpage.PhoneNo().type('1627557563')
    registrationpage.UserName().type('hasan')
    registrationpage.DoB().type('09/20/1994')
    registrationpage.Password().type('Ditto@123')
    registrationpage.ConfirmPassword().type('Ditto@123')
    registrationpage.ClickAgreecheckbox()
    registrationpage.RegisterButton()
})