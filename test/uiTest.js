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

async function resultsMoreThanZero(driver) {
    let resultsString = await driver.findElement(By.id("result-stats")).getText();
    console.log(resultsString);
    let startPoint = resultsString.indexOf("About ") + ("About ").length;
    let endPoint = resultsString.indexOf(" results ");
    let results = parseFloat(resultsString.substring(startPoint, endPoint).replace(/,/g, ""));
    assert.strictEqual(results > 0, true, "We've got empty list of results");
    return results;
}

async function non_empty_List_Of_Results(driver) {
    let actualResult = await driver.findElement(By.id("result-stats")).isDisplayed();
    assert.strictEqual(actualResult, true, "There are no results in the search query");
}

async function firstPageHasLessOrEqualResultsThanWereFound(driver, results) {
    let resultsOnTheFirstPage = size(await driver.findElements(By.css("div#search div.g")));
    console.log("Results on the first page: " + resultsOnTheFirstPage);
    assert.strictEqual(resultsOnTheFirstPage <= results, true, "Results on the First page more that was found");
}

async function assertingResultsMoreThanOnFirstPage(driver) {
    //assert that we have non-empty results to search query
    await non_empty_List_Of_Results(driver);

    //assert that number of results more that 0
    let results = await resultsMoreThanZero(driver);

    //assert that there is less or equal results on the first page then were found
    await firstPageHasLessOrEqualResultsThanWereFound(driver, results);
}

describe('google search query', () => {
    it("verify to get non-empty list of results", async () => {

        const driver = await new Builder().forBrowser('chrome').build();
        const searchQuery = "webdriver";
        const title = searchQuery + " - Google Search";

        try {
            await driver.get('https://www.google.com');
            await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
            await driver.wait(until.titleIs(title), 1000);

            await assertingResultsMoreThanOnFirstPage(driver);

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

        try {
            await driver.get('https://www.google.com');
            await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
            await driver.wait(until.titleIs(title), 1000);

            //assert that we have empty results to search query
            const emptySearchQueryText = "Your search - " + searchQuery + " - did not match any documents.";
            let emptyResult = await driver.findElement(By.css("div.card-section p")).getText();
            assert.strictEqual(emptyResult, emptySearchQueryText, "We've got some results instead of non-empty!")


            //assert that we have empty list of results - no element will be found by css locator: "div#search div.g"
            let elements = await driver.findElements(By.css("div#search div.g"));
            assert.strictEqual(isEmpty(elements), true, "List of results is not empty!");


        } finally {
            await driver.quit();
        }
    });
});


describe('google search query', () => {
    it("verify to get non-empty list of results for suggested query instead of original", async () => {

        const driver = await new Builder().forBrowser('chrome').build();
        const searchQuery = "googlewhacker";
        const title = searchQuery + " - Google Search";
        try {
            await driver.get('https://www.google.com');
            await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
            let suggestedQuery = await driver.findElement(By.css("a#fprsl i")).getText();
            console.log("suggested query: " + suggestedQuery + "\n original query: " + searchQuery);
            await driver.wait(until.titleIs(title), 1000);

            //assert show search results for suggested query instead of original
            assert.strictEqual(suggestedQuery !== searchQuery, true, "Suggested query and original are equal");
            assert.strictEqual(
                await driver.findElement(By.css("span.gL9Hy")).getText(),
                "Showing results for", "search results shows for original query, not suggested");
            assert.strictEqual(
                await driver.findElement(By.css("span.spell_orig")).getText() +
                await driver.findElement(By.css("a.spell_orig")).getText(),
                "Search instead for" + searchQuery,
                "Original query doesn't match search query"
            );

            await assertingResultsMoreThanOnFirstPage(driver);

        } finally {
            await driver.quit();
        }

    });
});
