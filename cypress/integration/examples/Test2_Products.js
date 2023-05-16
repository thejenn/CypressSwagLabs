/// <reference types="cypress" />

describe('Products Page', function() {
    it('Add Backpack to Cart', function() {


        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('.inventory_item_description').each(($el, index, $list) => {
            if ($el.text().includes('Backpack'))
            {
                cy.get('#add-to-cart-sauce-labs-backpack').eq(index).click()
            }  
            
       })


    })

})


        



         


  


