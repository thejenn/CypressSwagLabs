/// <reference types="cypress" />

describe('Login Suite', function() {
    it('Successful Log Into Swag Labs', function() {

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get('#login-button').click()

    })

    it('Wrong Username on Login', function() {

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('bad name')
        cy.get("#password").type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')

    })

    it('Wrong Password On Login', function () {

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('bad password')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')

    })


})