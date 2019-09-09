$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/onedlist.feature");
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
});