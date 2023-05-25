Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Successful login
    Given I open SwagLabs Page
    When I enter correct credentials and login    
    Then I am on the Products page
    