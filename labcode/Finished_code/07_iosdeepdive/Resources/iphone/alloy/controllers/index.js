function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function setLayout() {
        if (true === Ti.App.Properties.getBool("rtl_preference")) {
            $.fugitiveImage.right = 10;
            $.fugitiveImage.left = null;
            $.vitalsview.right = 110;
            $.vitalsview.left = 10;
        } else {
            $.fugitiveImage.left = 10;
            $.fugitiveImage.right = null;
            $.vitalsview.left = 110;
            $.vitalsview.right = 10;
        }
        $.fuginame.font = {
            textStyle: Ti.UI.TEXT_STYLE_HEADLINE
        };
        $.fugidetails.font = {
            textStyle: Ti.UI.TEXT_STYLE_BODY
        };
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
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.vitalsview = Ti.UI.createView({
        top: 25,
        left: 110,
        right: 10,
        layout: "vertical",
        id: "vitalsview"
    });
    $.__views.index.add($.__views.vitalsview);
    $.__views.fuginame = Ti.UI.createLabel({
        textAlign: "left",
        color: "#fff",
        height: Ti.UI.SIZE,
        left: 0,
        top: 5,
        font: {
            textStyle: Ti.UI.TEXT_STYLE_HEADLINE
        },
        text: "D.B. Cooper",
        id: "fuginame"
    });
    $.__views.vitalsview.add($.__views.fuginame);
    $.__views.fugidetails = Ti.UI.createLabel({
        textAlign: "left",
        color: "#fff",
        height: Ti.UI.SIZE,
        left: 0,
        top: 5,
        font: {
            textStyle: Ti.UI.TEXT_STYLE_BODY
        },
        text: "Missing since Nov. 24, 1971",
        id: "fugidetails"
    });
    $.__views.vitalsview.add($.__views.fugidetails);
    $.__views.fugitiveImage = Ti.UI.createImageView({
        image: "images/placeholder.png",
        top: 25,
        height: 90,
        width: 90,
        borderRadius: 5,
        left: 10,
        id: "fugitiveImage"
    });
    $.__views.index.add($.__views.fugitiveImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("resume", function() {
        setLayout();
    });
    setLayout();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;