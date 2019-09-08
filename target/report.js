$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Try.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid deta",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_deta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/onedlist.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid det",
  "rows": [
    {
      "cells": [
        "Ram",
        "Kumar",
        "abc@gmail.com",
        "chennai",
        "12345678"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_det(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/outline.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.step({
  "name": "User provide valid details\"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "Ram",
        "Kumar",
        "abc@gmail.com",
        "chennai",
        "1234567"
      ]
    },
    {
      "cells": [
        "Arvind",
        "babu",
        "Fail@gmail.com",
        "bangalore",
        "2222222222"
      ]
    },
    {
      "cells": [
        "ragul",
        "kulandaivelu",
        "xyz@gmail.com",
        "trichy",
        "3333333"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details\"Ram\",\"Kumar\",\"abc@gmail.com\",\"chennai\",\"1234567\"",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details\"Arvind\",\"babu\",\"Fail@gmail.com\",\"bangalore\",\"2222222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details\"ragul\",\"kulandaivelu\",\"xyz@gmail.com\",\"trichy\",\"3333333\"",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/twodlist.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detail",
  "rows": [
    {
      "cells": [
        "Ram",
        "Kumar",
        "abc@gmail.com",
        "chennai",
        "12345678"
      ]
    },
    {
      "cells": [
        "arvi",
        "babu",
        "test@gmail.com",
        "bangalore",
        "22222222"
      ]
    },
    {
      "cells": [
        "david",
        "raj",
        "poi@gmail.com",
        "mumbai",
        "33333333"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_detail(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});