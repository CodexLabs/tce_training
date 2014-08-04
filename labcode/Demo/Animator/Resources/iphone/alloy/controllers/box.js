function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "box";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.box = Ti.UI.createView({
        height: 85,
        width: 85,
        id: "box"
    });
    $.__views.box && $.addTopLevelView($.__views.box);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var r = Math.round(255 * Math.random());
    var g = Math.round(255 * Math.random());
    var b = Math.round(255 * Math.random());
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    var WIDTH = Ti.Platform.displayCaps.platformWidth;
    var HEIGHT = Ti.Platform.displayCaps.platformHeight;
    $.box.backgroundColor = rgb;
    $.box.top = Math.round(Math.random() * (HEIGHT - 25) + 25);
    $.box.left = Math.round(Math.random() * (WIDTH - 25) + 25);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;