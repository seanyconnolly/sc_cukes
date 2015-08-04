var Webdriver = require('selenium-webdriver');
var assert = require('assert')

var GoogleHomePage = require('../pages/GoogleHomePage.js')

var WorldConstructor = function WorldConstructor(callback) {

    this.browser = new Webdriver.Builder().
        withCapabilities(Webdriver.Capabilities.chrome()).
        build();

    this.visit = function (path, callback) {
        this.browser.get(path)
        callback();
    };

    this.end = function (callback) {
        this.browser.quit();
        callback();
    };

    this.checkPageTitle = function (expectedText, callback) {
        this.browser.sleep(1000);

        this.browser.getTitle().then(function (actualText) {
            console.log("log: --> " + actualText);
            assert.equal(expectedText, actualText);
            callback();
        });
    }

    this.waitForText = function (element, text) {
        while (element.getText != text) {
            this.browser.sleep(1000);
            console.log("sleeping for 1 sec - text is :")
        }
    }

    this.googleHomePage = new GoogleHomePage(this.browser);

    callback(); //
}

module.exports.World = WorldConstructor;

