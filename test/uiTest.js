import {Builder, By, Key, until} from 'selenium-webdriver';
import * as assert from "assert";


describe('google search query', () => {
    it("verify to get nonempty list of results", async () => {

        const driver = await new Builder().forBrowser('chrome').build();
        const searchQuery = "webdriver";
        const title = searchQuery + " - Google Search";

        function size(object) {
            let i = 0;
            for (let x in object) {
                i++
            }
            return i;
        }

        try {
            await driver.get('https://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
            await driver.wait(until.titleIs(title), 1000);

            //assert that we have nonempty results to search query
            let actualResult = await driver.findElement(By.id("result-stats")).isDisplayed();
            assert.strictEqual(actualResult, true, "There are no results in the search query");

            //assert that number of results more that 0
            let resultsString = await driver.findElement(By.id("result-stats")).getText();
            console.log(resultsString);
            let startPoint = resultsString.indexOf("About ") + ("About ").length;
            let endPoint = resultsString.indexOf(" results ");
            let results = parseFloat(resultsString.substring(startPoint, endPoint).replace(/,/g, ""));
            assert.strictEqual(results > 0, true, "We've got empty list of results");

            //assert that there is less or equal results on the first page then was found
            let resultsOnTheFirstPage = size(await driver.findElements(By.css("div#search div.g")));
            console.log("Results on the first page: " + resultsOnTheFirstPage);
            assert.strictEqual(resultsOnTheFirstPage <= results, true, "Results on the First page more that was found");

        } finally {
            await driver.quit();
        }

    });
});

describe('google search query', () => {
    it("verify to get empty list of results", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        const searchQuery = "слосоnonfound";
        const title = searchQuery + " - Google Search";

        function isEmpty(object) {
            for (let x in object) {
                return false;
            }
            return true;
        }

        try {
            await driver.get('https://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
            await driver.wait(until.titleIs(title), 1000);

            //assert that we have empty results to search query
            const emptySearchQueryText = "Your search - " + searchQuery + " - did not match any documents.";
            let emptyResult = await driver.findElement(By.css("div.card-section p")).getText();
            assert.strictEqual(emptyResult, emptySearchQueryText, "We've got some results instead of nonempty!")


            //assert that we have empty list of results - no element will be found by css locator: "div#search div.g"
            let elements = await driver.findElements(By.css("div#search div.g"));
            assert.strictEqual(isEmpty(elements), true, "List of results is not empty!");


        } finally {
            await driver.quit();
        }
    });
});