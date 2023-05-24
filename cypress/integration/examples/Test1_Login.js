/// <reference types="cypress" />



describe('Login Suite', function() {
    beforeEach(function () {

        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })


    it('Successful Log Into Swag Labs', function() {

        cy.login(this.data.user_name, this.data.password)

    })

    it("Unuccessful Log In - Bad User Name", function() {

        cy.loginFail(this.data.user_name_bad, this.data.password)
    })

    // it('Wrong Username on Login', function() {

    //     cy.visit("https://www.saucedemo.com/")
    //     cy.get('#user-name').type('bad name')
    //     cy.get("#password").type('secret_sauce')
    //     cy.get('#login-button').click()
    //     cy.get('.error-button').should('be.visible')
    //     cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    // })

    // it('Wrong Password On Login', function () {

    //     cy.visit("https://www.saucedemo.com/")
    //     cy.get('#user-name').type('standard_user')
    //     cy.get("#password").type('bad password')
    //     cy.get('#login-button').click()
    //     cy.get('.error-button').should('be.visible')
    //     cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    // })


})