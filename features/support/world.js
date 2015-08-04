var webdriver = require('selenium-webdriver');

function World(callback) {
    this.browser = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();


    this.visit = function (path, callback) {
        this.browser.get(path, function (err, browser, status) {
            if (err) {
                console.log("was error");
                throw new Error(err.message);
            }
            console.log(status);
            console.log("no error");
            callback();
        });
    };

    this.end = function () {
        this.browser.quit();
    };

    this.log = function (txt, callback) {
        console.log("---> " + txt);
        callback();
    }

    this.log = function (txt) {
        console.log("---> " + txt);
    }


    this.findByCss = function (css) {
        return this.browser.findElement(webdriver.By.css(css));
    }


    this.waitFor = function (time) {
        setTimeout(function () {
            console.log('waiting for ' + time);
            callback();
        }, time);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
}

module.exports.World = World;

