
Feature: Add Customer
  I want to use this template for my feature file

  @tag1
  Scenario: Generate an customer ID
   
    And User click add customer link
    When User provide valid det
    |Ram|Kumar|abc@gmail.com|chennai|12345678|
    
    Then To verify the customer id is displayed

