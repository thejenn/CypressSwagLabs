import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I open SwagLabs Page', function()
{
    cy.visit("www.saucedemo.com/")       
})

When('I enter correct credentials and login', function()
{
    cy.login(this.data.user_name, this.data.password)  
})

Then('I am on the Products page', function()
{
    cy.url().should('include', 'inventory')             
})




