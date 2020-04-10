const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
require('dotenv').config();

const options = new firefox.Options();
options.setPreference('browser.download.dir','/Users/thuy-anh.nguyen/Desktop/scraper/sheets');
options.setPreference('browser.download.folderList',2);
options.setPreference('browser.download.manager.showWhenStarting',false)
options.setPreference('browser.helperApps.neverAsk.saveToDisk','text/csv')

const PAGE = process.env.PAGE
const PASSWORD = process.env.PW_FRITZ

async function startserver() {
    let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    try {
        // Navigate to Url
        await driver.get(PAGE);
        // Enter text 'cheese' and perform keyboard action 'Enter'
        await driver.findElement(By.name('uiPass')).sendKeys(PASSWORD, Key.ENTER);

        let tel_tab = By.id('tel');
        await driver.wait(until.elementLocated(tel_tab, 10000));
        let tel_tab_found = await driver.wait(until.elementIsVisible(driver.findElement(tel_tab)), 10000);
        await tel_tab_found.click();

        let calls = By.id('calls');
        await driver.wait(until.elementLocated(calls, 10000));
        let calls_found = await driver.wait(until.elementIsVisible(driver.findElement(calls)), 10000);
        await calls_found.click();

        let download = By.name('export')
        await driver.wait(until.elementLocated(download, 10000));
        let download_found = await driver.wait(until.elementIsVisible(driver.findElement(download)), 10000);
        await download_found.click();
    }
    finally{
        driver.quit();
    }
};

startserver()
