/// <reference types="cypress" />
export class RegistrationPage{
    Email(){
        return cy.get('#email')
    }
    CountryCodeSelect(){
        return cy.get('select').select('🇧🇩 (+880)').should('have.value', 'Bangladesh:+880')
    }
    PhoneNo(){
        return cy.get('#phone')
    }
    UserName(){
        return cy.get('#username')
    }
    DoB(){
        return cy.get('.react-datepicker__input-container > .form-control')
    }
    Password(){
        return cy.get('#password')
    }
    ConfirmPassword(){
        return cy.get('#password_confirmation')
    }
    ClickAgreecheckbox(){
        return cy.get('#agreeCheckBox_agreeTermsAndConditions').click()
    }
    RegisterButton(){
        return cy.get('.custom-form > .btn').click()
    }

}