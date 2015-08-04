
var Steps = function() {
    this.World = require("../support/world").World;

    this.Given(/^I go to google home page$/, function (callback) {
        this.googleHomePage.gotoPage(callback);
    });

    this.When(/^I search for "(.*?)"$/, function (searchTerm, callback) {
        this.googleHomePage.searchField().sendKeys(searchTerm);
        this.googleHomePage.searchBtn().click();
        callback();
    });

    this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
       this.checkPageTitle(title, callback);
    });
};

module.exports = Steps;