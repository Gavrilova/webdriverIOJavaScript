import {Builder, By, Key, until} from 'selenium-webdriver';

describe('', () => {
    it("", async () => {

        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys("webdriver", Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
            await driver.quit();
        }

    });
});