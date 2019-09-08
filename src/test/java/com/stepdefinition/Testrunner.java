package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = "com.stepdefinition", plugin = {"html:target","json:target\report.json"
		,"rerun:src/test/resources/Features/fail.txt" }, dryRun = false, monochrome = true, strict = true)
public class Testrunner {

}


//tags = { "@tag2" },
//tags = { "@tag1,@tag2" },