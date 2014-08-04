function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClick(e) {
        var action = e.source.action || "";
        Ti.Platform.canOpenURL("Urlschemes://") ? Ti.Platform.openURL("Urlschemes://?" + action) : alert("You must install the Target app first");
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
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.btn_launchit = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Target app",
        id: "btn_launchit",
        action: ""
    });
    $.__views.index.add($.__views.btn_launchit);
    doClick ? $.__views.btn_launchit.addEventListener("click", doClick) : __defers["$.__views.btn_launchit!click!doClick"] = true;
    $.__views.btn_launchmaps = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "In Target app, open Maps",
        id: "btn_launchmaps",
        action: "maps"
    });
    $.__views.index.add($.__views.btn_launchmaps);
    doClick ? $.__views.btn_launchmaps.addEventListener("click", doClick) : __defers["$.__views.btn_launchmaps!click!doClick"] = true;
    $.__views.btn_launchstore = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "In Target app, open YouTube",
        id: "btn_launchstore",
        action: "youtube"
    });
    $.__views.index.add($.__views.btn_launchstore);
    doClick ? $.__views.btn_launchstore.addEventListener("click", doClick) : __defers["$.__views.btn_launchstore!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btn_launchit!click!doClick"] && $.__views.btn_launchit.addEventListener("click", doClick);
    __defers["$.__views.btn_launchmaps!click!doClick"] && $.__views.btn_launchmaps.addEventListener("click", doClick);
    __defers["$.__views.btn_launchstore!click!doClick"] && $.__views.btn_launchstore.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;