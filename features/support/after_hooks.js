var myAfterHooks = function () {
    this.After(function (callback) {

        console.log("after hook done");


        callback();
    });

    this.registerHandler('AfterFeatures', function (event, callback) {
        console.log("after feature done");
        callback();
    });
};

module.exports = myAfterHooks;