const {Builder,By,Key,util} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

// Test case 1: Fill all the inputs
async function TestCase1 (){
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get(" file:\\\C:\\Users\\edita\\SoftwareTest3\\index.html");
    driver.findElement(By.name('Name')).sendKeys('Petras');
    driver.findElement(By.name('Lastname')).sendKeys('Petraitis');
    driver.findElement(By.name('Personal Idenfication code')).sendKeys('30000000000');
    driver.findElement(By.name('Gender')).sendKeys('Male');
    driver.findElement(By.name('Telephone')).sendKeys('+370000000000');
    driver.findElement(By.name('Course')).sendKeys("Software Engineering");
    driver.findElement(By.name('Form of studies')).sendKeys("regular");
    (await driver.findElement(By.name('Submit'))).click()
      // Expected result : Registration is succesfull
    
}

TestCase1()