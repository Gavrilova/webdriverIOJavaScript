//Test1: Neodymium maladroiter
//Test2: Yttrium maladroitum

import {Builder, By, Key, until} from 'selenium-webdriver';
import * as assert from "assert";

function size(object) {
    let i = 0;
    for (let x in object) {
        i++
    }
    return i;
}

function isEmpty(object) {
    for (let x in object) {
        return false;
    }
    return true;
}

function wordCount(query) {
    let count = 0;
    for (let i = 0; i < query.length; i++) {
        if (query.charAt(i) === " ") {
            count++;
        }
    }
    count++; //space + 1
    return count;
}

describe('GoogleWhack search query', () => {
    it("verify to get no more that one result per two word search query", async () => {

        const driver = await new Builder().forBrowser('chrome').build();
        const searchQuery = "Neodymium maladroiter";
        const title = searchQuery + " - Google Search";


        try {
            await driver.get('https://www.google.com');
            await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
            await driver.wait(until.titleIs(title), 1000);
            console.log("search query: " + searchQuery);

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

            //assert that we have only ONE search result on search query
            assert.strictEqual(results, 1, "We do not get only ONE search results. We've got " + results);

            //assert that there is no element of navigation in the bottom of the page
            assert
                .strictEqual(
                    isEmpty(await driver.findElements(By.css("div#center_col div[role='navigation'] td"))),
                    true,
                    "There is a navigation on the bottom of the search page!");

            //assert that search query consists only from two words
            assert.strictEqual(wordCount(searchQuery), 2, "search query consists not from two words, but " + wordCount(searchQuery
            ));

        } finally {
            await driver.quit();
        }

    });
});

describe('GoogleWhack search query', () => {
    it("verify to get no more that one result per two word search query", async () => {

        const driver = await new Builder().forBrowser('chrome').build();
        const searchQuery = "Yttrium maladroitum";
        const title = searchQuery + " - Google Search";
        console.log("search query: " + searchQuery);

        try {
            await driver.get('https://www.google.com');
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

            //assert that we have only ONE search result on search query
            assert.strictEqual(results, 1, "We do not get only ONE search results. We've got " + results);

            //assert that there is no element of navigation in the bottom of the page
            assert
                .strictEqual(
                    isEmpty(await driver.findElements(By.css("div#center_col div[role='navigation'] td"))),
                    true,
                    "There is a navigation on the bottom of the search page!");

            //assert that search query consists only from two words
            assert.strictEqual(wordCount(searchQuery), 2, "search query consists not from two words, but " + wordCount(searchQuery));

        } finally {
            await driver.quit();
        }

    });
});
