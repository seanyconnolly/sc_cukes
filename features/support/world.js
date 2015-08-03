var webdriver = require('selenium-webdriver');

function World(callback) {
    this.browser = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    this.visit = function (url, callback) {
       // this.browser.manage().window().maximize();
        this.browser.get(url);
        //callback();
    };

    this.end = function (callback) {
        this.browser.quit();
        callback();
    };

    this.log = function(txt, callback) {
        console.log("---> " + txt);
        callback();
    }

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
}

module.exports.World = World;