var Webdriver = require('selenium-webdriver');

var GoogleHomePage = function (driver) {

    this.gotoPage = function(callback){
        driver.get("http://www.google.com/ncr");
        callback();
    }

    this.searchField = function () {
        return driver.findElement(Webdriver.By.name("q"));
    };

    this.searchBtn = function () {
        return driver.findElement(Webdriver.By.name("btnG"))
    };
}

module.exports = GoogleHomePage;

