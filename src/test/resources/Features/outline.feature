Feature: Add Customer
  I want to use this template for my feature file

  @demo
  Scenario Outline: Generate an customer ID
  
    And User click add customer link
    When User provide valid details"<fname>","<lname>","<email>","<address>","<phone>"
    Then To verify the customer id is displayed

    Examples: 
      | fname  | lname        | email          | address   | phone      |
      | Ram    | Kumar        | abc@gmail.com  | chennai   |    1234567 |
      | Arvind | babu         | Fail@gmail.com | bangalore | 2222222222 |
      | ragul  | kulandaivelu | xyz@gmail.com  | trichy    |    3333333 |
