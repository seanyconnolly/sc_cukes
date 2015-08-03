var myHooks = function () {

    this.Before(function (callback) {
        console.log("before hook called")
        callback();
    });

};

module.exports = myHooks;