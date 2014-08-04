function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doBox1() {
        $.box1.animate({
            opacity: 0,
            duration: 2e3,
            autoreverse: true
        });
    }
    function doBox2() {
        $.box2.animate({
            top: newtop,
            duration: 2e3,
            autoreverse: true
        });
    }
    function doBox3() {
        animation.shake($.box3, 30);
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
        top: Alloy.Globals.winTop,
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        text: "Click the boxes for fun!",
        color: "#000",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 10,
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.box1 = Ti.UI.createLabel({
        height: 50,
        width: 100,
        color: "#fff",
        font: {
            fontWeight: "bold"
        },
        textAlign: "center",
        top: 50,
        backgroundColor: "red",
        text: "fade out/in",
        id: "box1"
    });
    $.__views.index.add($.__views.box1);
    doBox1 ? $.__views.box1.addEventListener("click", doBox1) : __defers["$.__views.box1!click!doBox1"] = true;
    $.__views.box2 = Ti.UI.createLabel({
        height: 50,
        width: 100,
        color: "#fff",
        font: {
            fontWeight: "bold"
        },
        textAlign: "center",
        top: 120,
        backgroundColor: "green",
        text: "fly out/in",
        id: "box2"
    });
    $.__views.index.add($.__views.box2);
    doBox2 ? $.__views.box2.addEventListener("click", doBox2) : __defers["$.__views.box2!click!doBox2"] = true;
    $.__views.box3 = Ti.UI.createLabel({
        height: 50,
        width: 100,
        color: "#fff",
        font: {
            fontWeight: "bold"
        },
        textAlign: "center",
        top: 190,
        backgroundColor: "blue",
        text: "shake",
        id: "box3"
    });
    $.__views.index.add($.__views.box3);
    doBox3 ? $.__views.box3.addEventListener("click", doBox3) : __defers["$.__views.box3!click!doBox3"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var newtop = Ti.Platform.displayCaps.platformHeight + 20;
    var animation = require("alloy/animation");
    $.index.open();
    __defers["$.__views.box1!click!doBox1"] && $.__views.box1.addEventListener("click", doBox1);
    __defers["$.__views.box2!click!doBox2"] && $.__views.box2.addEventListener("click", doBox2);
    __defers["$.__views.box3!click!doBox3"] && $.__views.box3.addEventListener("click", doBox3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;