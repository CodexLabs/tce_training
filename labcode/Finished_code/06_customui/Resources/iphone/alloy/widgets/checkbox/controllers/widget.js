function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "checkbox/" + s : s.substring(0, index) + "/checkbox/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    new (require("alloy/widget"))("checkbox");
    this.__widgetId = "checkbox";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.checkbox = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "checkbox"
    });
    $.__views.checkbox && $.addTopLevelView($.__views.checkbox);
    $.__views.chk = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        textAlign: "center",
        width: "32dp",
        height: "32dp",
        borderWidth: 1,
        borderColor: "black",
        left: 1,
        top: 0,
        id: "chk"
    });
    $.__views.checkbox.add($.__views.chk);
    $.__views.lbl = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        text: "Text beside the checkbox",
        id: "lbl"
    });
    $.__views.checkbox.add($.__views.lbl);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    alert(args);
    exports.init = function(callback) {
        $.lbl.text = args.message || 'Set "message" attribute to change';
        var checkState = false;
        $.checkbox.addEventListener("click", function() {
            checkState = !checkState;
            $.chk.text = checkState ? "✓" : "";
            callback(checkState);
        });
        _.extend($.chk, args);
        _.extend($.lbl, args);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;