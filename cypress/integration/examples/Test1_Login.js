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
        cy.loginFailUserName(this.data.user_name_bad, this.data.password)
        cy.get('.error-button').should('be.visible')
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    it("Unsuccesful Log In - Bad Password", function() {
        cy.loginFailPassword(this.data.user_name, this.data.password_bad)        
        cy.get('.error-button').should('be.visible')
        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

})