package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Add  {

	@Given("User click add customer link")
	public void user_click_add_customer_link() {
		System.out.println("Given-2");
		Hooks.driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}

	@When("User provide valid detail")
	public void user_provide_valid_detail(io.cucumber.datatable.DataTable dataTable) {

		System.out.println("When-1");
		List<List<String>> twodlist = dataTable.asLists(String.class);
		System.out.println(twodlist);

		Hooks.driver.findElement(By.xpath("//label[@for='done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys(twodlist.get(0).get(0));
		Hooks.driver.findElement(By.id("lname")).sendKeys(twodlist.get(1).get(1));
		Hooks.driver.findElement(By.id("email")).sendKeys(twodlist.get(2).get(2));
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(twodlist.get(1).get(3));
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys(twodlist.get(0).get(4));
		Hooks.driver.findElement(By.xpath("//input[@type='submit']")).click();

	}

	@When("User provide valid deta")
	public void user_provide_valid_deta() {
		Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys("Ram");
		Hooks.driver.findElement(By.id("lname")).sendKeys("Kumar");
		Hooks.driver.findElement(By.id("email")).sendKeys("abc@gmail.com");
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("chennai");
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys("98765432");
		Hooks.driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@When("User provide valid details{string},{string},{string},{string},{string}")
	public void user_provide_valid_details(String fname, String lname, String email, String address, String phone) {
		System.out.println("When-1");
		Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys(fname);
		Hooks.driver.findElement(By.id("lname")).sendKeys(lname);
		Hooks.driver.findElement(By.id("email")).sendKeys(email);
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(address);
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys(phone);
		Hooks.driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@When("User provide valid det")
	public void user_provide_valid_det(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("When-1");
		List<String> oned = dataTable.asList(String.class);
		System.out.println(oned);
		Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys(oned.get(0));
		Hooks.driver.findElement(By.id("lname")).sendKeys(oned.get(1));
		Hooks.driver.findElement(By.id("email")).sendKeys(oned.get(2));
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(oned.get(3));
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys(oned.get(4));
		Hooks.driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	/*@When("User provide valid detai")
	public void user_provide_valid_detai(io.cucumber.datatable.DataTable cust) {
		System.out.println("When-1");
		Map<String, String> onedmap = cust.asMap(String.class, String.class);
		System.out.println(onedmap);
		
		Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys(onedmap.get("fname"));
		Hooks.driver.findElement(By.id("lname")).sendKeys(onedmap.get("lname"));
		Hooks.driver.findElement(By.id("email")).sendKeys(onedmap.get("email"));
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedmap.get("address"));
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys(onedmap.get("phone"));
		Hooks.driver.findElement(By.xpath("//input[@name='submit']")).click();
	}
*/
	@When("User provide valid detai")
	public void user_provide_valid_detai(io.cucumber.datatable.DataTable dataTable) {
	    Map<String, String> onedmap = dataTable.asMap(String.class, String.class);
	    
	    Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys(onedmap.get("fname"));
		Hooks.driver.findElement(By.id("lname")).sendKeys(onedmap.get("lname"));
		Hooks.driver.findElement(By.id("email")).sendKeys(onedmap.get("email"));
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedmap.get("address"));
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys(onedmap.get("phone"));
		Hooks.driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	
	@Then("To verify the customer id is displayed")
	public void to_verify_the_customer_id_is_displayed() {
		System.out.println("Then-1");
		Assert.assertTrue(Hooks.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}
}
