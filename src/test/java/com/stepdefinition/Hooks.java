package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	public static WebDriver driver;
	
	@Before
	public void user_should_launch_browser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\user\\Downloads\\chromedriver_win32 (5)\\chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("before");
		driver.get("http://www.demo.guru99.com/telecom/");
	}

	@Before(order = -10)
	public void taggedhook() {
		System.out.println("b4 with -10");
	}
	
	@Before(order = -5)
	public void taggedhook1() {
		System.out.println("b4 with -5");
	}
	
	@Before()
	public void taggedhook2() {
		System.out.println("b4");
	}
	
	@Before("@demo")
	public void taggedhook22() {
		System.out.println("demo");
	}
	
	@Before(order = 10)
	public void taggedhook3() {
		System.out.println("b4 with 10");
	}
	
	@After(order = -10)
	public void taggedhook42() {
		System.out.println("After with -10");
	}
	
	@After(order =  10)
	public void taggedhook41() {
		System.out.println("After with 10");
	}
	
	@After()
	public void taggedhook4() {
		System.out.println("After ");
	}
	
	@After
	public void close() {
		driver.close();
		driver.quit();
	}
}
