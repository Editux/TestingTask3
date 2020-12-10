const {Builder,By,Key,util} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

// Test case 5: Fill phone number with more that 13 digits
async function TestCase5 (){
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get(" file:\\\C:\\Users\\edita\\SoftwareTest3\\index.html");
    driver.findElement(By.name('Name')).sendKeys('Petras');
    driver.findElement(By.name('Lastname')).sendKeys('Petraitis');
    driver.findElement(By.name('Personal Idenfication code')).sendKeys('30000000000');
    driver.findElement(By.name('Gender')).sendKeys('Male');
    driver.findElement(By.name('Telephone')).sendKeys('+3700000000000');
    driver.findElement(By.name('Course')).sendKeys("Software Engineering");
    driver.findElement(By.name('Form of studies')).sendKeys("regular");
    (await driver.findElement(By.name('Submit'))).click()
      // Expected result : Message pop up 'Your phone has more that 13 digits'
    
}

TestCase5()