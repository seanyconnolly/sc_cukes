var Page = require("../pages/GitHubHomePage");
var page = new Page();

module.exports = function () {
    this.World = require("../support/world").World;

    this.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback) {
        this.log("step one ");
        this.visit('https://github.com/cucumber/cucumber-js', callback);
    });

    this.When(/^I go to the README file$/, function (callback) {
        this.waitFor(5000);
        this.log("step two ", callback);
    });

    this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
        this.waitFor(8000);
        this.log("step 3 " + title, callback);
        next();
    });
};