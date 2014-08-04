function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doFoo(num) {
        alert("Your rating = " + num);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Alloy.createWidget("com.appcelerator.searchForBooks", "widget", {
        id: "__alloyId1",
        __parentSymbol: $.__views.index
    });
    $.__views.__alloyId1.setParent($.__views.index);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        top: 50,
        left: 20,
        id: "starwidget",
        max: "5",
        initialRating: "2.5",
        __parentSymbol: $.__views.index
    });
    $.__views.starwidget.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.starwidget.init(doFoo);
    $.starwidget.setRating(4);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;