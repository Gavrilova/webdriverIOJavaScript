import {Builder, By, until} from 'selenium-webdriver';

describe('YouTube search query', () => {
    it("getYouTube Links from playlist", async () => {

        const driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://www.youtube.com/c/modapractic/search?query=%D0%BF%D0%BE%20%D0%BA%D0%BE%D1%81%D0%BE%D0%B9');
            await driver.wait(until.titleIs('Модные Практики с Паукште Ириной Михайловной - YouTube'), 5000);
            const arrayWebElements = await driver.findElements(By.css("div#contents a#thumbnail"));
            console.log(arrayWebElements.length);
            var arrayYouTubeLinks = new Array(arrayWebElements.length);
            let j = 0;
            for (var i in arrayWebElements) {
                arrayYouTubeLinks[j] = await arrayWebElements[i].getAttribute("href");
                console.log(arrayYouTubeLinks[j]);
                j++;
            }

        } finally {
            await driver.quit();
        }

    });
});