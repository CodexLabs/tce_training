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
    $.__views.checkbox = Alloy.createWidget("checkbox", "widget", {
        id: "checkbox",
        randomthing: "foo",
        color: "green",
        message: "do not Click to check/uncheck",
        left: "30",
        __parentSymbol: $.__views.index
    });
    $.__views.checkbox.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.checkbox.init(function(state) {
        alert("The box is " + (state ? "checked" : "unchecked"));
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;