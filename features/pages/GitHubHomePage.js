
module.exports = function () {
    this.World = require("../support/world").World;

    this.repoLink = function () {
        return this.findByCss("body > div.wrapper > div.site > div.pagehead.repohead.instapaper_ignore.readability-menu > div > div > h1 > strong > a");

    };
}

