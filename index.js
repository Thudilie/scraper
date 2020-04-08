const {Builder, By, Key, until} = require('selenium-webdriver');

async function startserver() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('http://google.de/');
    }
    finally{
        // driver.quit();
    }
};

startserver()
