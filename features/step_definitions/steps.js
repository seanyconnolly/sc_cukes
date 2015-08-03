module.exports = function () {
    this.World = require("../support/world").World; // overwrite default World constructor

    this.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback) {
        this.visit('https://github.com/cucumber/cucumber-js', callback);
    });

    this.When(/^I go to the README file$/, function (callback) {
       this.log("step two ", callback)
    });

    this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
        this.log("step 3 ", callback)
    });
};