/// <reference types="cypress" />

describe('Products Page', function() {

    before(function () {

        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })



    it('Add Backpack to Cart', function() {


        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get('#login-button').click()      
        cy.addProductToCart(this.data.product)


    })

})


        



         


  


