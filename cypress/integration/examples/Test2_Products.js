/// <reference types="cypress" />

describe('Products Page', function() {

    beforeEach(function () {

        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

    it('Add Backpack to Cart', function() {
      cy.visit("https://www.saucedemo.com/")
      cy.login(this.data.user_name, this.data.password)
      cy.addProductToCart(this.data.product)
      cy.get('#remove-sauce-labs-backpack')
      cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')     


    })

    it('Remove Backpack from Cart', function() {
      cy.visit("https://www.saucedemo.com/")
      cy.login(this.data.user_name, this.data.password)
      cy.addProductToCart(this.data.product)
      cy.removeProductFromCart(this.data.product)
      cy.get('#add-to-cart-sauce-labs-backpack')
      cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart')  

    })

})


        



         


  


