
this.World = require("../support/world").World;

var myAfterHooks = function () {
    this.After(function (callback) {
        console.log("after hook done");

        this.end();

        callback();
    });

    this.registerHandler('AfterFeatures', function (event, callback) {
        console.log("after feature done");
        callback();
    });
};

module.exports = myAfterHooks;