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
        layout: "vertical",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    __alloyId1.push("Confirm");
    __alloyId1.push("Help");
    __alloyId1.push("Cancel");
    var __alloyId6 = [];
    __alloyId6.push("Confirm");
    $.__views.dialog = Ti.UI.createOptionDialog({
        options: __alloyId1,
        buttonNames: __alloyId6,
        id: "dialog",
        title: "Delete File?"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.dialog.show();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;