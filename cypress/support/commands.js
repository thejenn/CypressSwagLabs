// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add('login', function(user_name, password) {

    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type(user_name)
    cy.get("#password").type(password)
    cy.get('#login-button').click()

})

Cypress.Commands.add('loginFailUserName', function(user_name_bad, password) {

    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type(user_name_bad)
    cy.get("#password").type(password)
    cy.get('#login-button').click()    
})

Cypress.Commands.add('loginFailPassword', function(user_name, password_bad) {

    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type(user_name)
    cy.get("#password").type(password_bad)
    cy.get('#login-button').click()    
})



Cypress.Commands.add("addProductToCart", (productName) => {
    cy.get('.inventory_item_description').each(($el, index, $list) => {
        if ($el.text().includes(productName))
        {
            cy.get('#add-to-cart-sauce-labs-backpack').eq(index).click()
        }          
        })    
    })

    Cypress.Commands.add("removeProductFromCart", (productName) => {
        cy.get('.inventory_item_description').each(($el, index, $list) => {
            if ($el.text().includes(productName))
            {
                cy.get('#remove-sauce-labs-backpack').eq(index).click()
            }          
            })    
        })








//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })